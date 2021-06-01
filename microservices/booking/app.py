from flask import Flask, jsonify
from flask_restful import Resource, Api, reqparse, abort
import json
import pymongo
import requests
from flask_cors import CORS, cross_origin
from bson.objectid import ObjectId

client = pymongo.MongoClient("mongodb://booking_db", 27017)
#client.drop_database('restaurants') 
db = client.restaurants

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)


post_arguments = ["rest_email", "date", "service", "time", "seats", "notes", "email", "status", "authToken"]
task_post_args = reqparse.RequestParser()
for el in post_arguments:
    task_post_args.add_argument(
    el, type=str, help=f"Field {el} is required", required=True
)


update_arguments = ["res_id","status","authToken","email"]
task_update_args = reqparse.RequestParser()
for el in update_arguments:
    task_update_args.add_argument(
    el, type=str, help=f"Field {el} is required", required=True
)

get_arguments = ["authToken","email","user_type"]
task_get_args = reqparse.RequestParser()
for el in get_arguments:
    task_get_args.add_argument(
    el, type=str, help=f"Field {el} is required", required=True
)



class reservation(Resource):

    # reserve table status pending
    def post(self):
        args = task_post_args.parse_args()
        user_session = {"token": args["authToken"], "email": args["email"]}

       
        is_valid = requests.get("http://user_auth_api:3000/validate",user_session).json()
        if "error" in is_valid.keys():
            return "User not authorized"

        # TODO controllo posti disponibili !!
        
        args.pop('authToken')
        reservation_id = db.data.insert_one(args).inserted_id
        result = {
            "body": "Reservation pending",
            "reservation_id": str(reservation_id),
        }

        return result 

    @cross_origin(origin='*')
    @cross_origin(allow_headers=['Content-Type'])
    #change status of reservation
    def patch(self):
        args = task_update_args.parse_args()
        restaurant_session = {"token": args["authToken"], "email": args["email"]}
        
        is_valid = requests.get("http://restaurant_auth_api:3000/validate",restaurant_session).json()
        if "error" in is_valid.keys():
            return "Restaurant not authorized"

        filter = { '_id': ObjectId(args["res_id"]) }
        newvalues = { "$set": { 'status': args["status"] } }
        db.data.update_one(filter, newvalues)
        print(args["status"]+args["res_id"], flush=True)

        result = {"res":"Status updated"}
        return result 
    

    def get(self):
        args = task_get_args.parse_args()
        user_session = {"token": args["authToken"], "email": args["email"]}
        print(user_session, flush=True)
        if args["user_type"] == '0':
            is_valid = requests.get("http://user_auth_api:3000/validate",user_session).json()
            if "error" in is_valid.keys():
                return "User not authorized"
            myquery = { "email": args["email"]}
        
        else:
            is_valid = requests.get("http://restaurant_auth_api:3000/validate",user_session).json()
            if "error" in is_valid.keys():
                return "Restaurant not authorized"
            myquery = { "rest_email": args["email"]}
        
        print(str(list(db.data.find(myquery))), flush=True)

        res = list(db.data.find(myquery))
        for row in res:
            row["id"] = row["_id"]
            del row["_id"]
            row["id"]=str(row["id"])

        return res




class connectionCheck(Resource):
    def get(self):
        return "Connection established"

class dbCheck(Resource):
    def get(self):
       return f"Avalibale databases are {list(client.list_database_names())}"



class testReservation(Resource):
    # reserve table status pending
    def post(self):
        # create test db
        dblist = client.list_database_names()
        if not "testdb" in dblist:
            test_data = []
            testdb = client["testdb"]
            testcol = testdb["testcol"]
        else:
            testdb = client.testdb

        # parse input
        args = task_post_args.parse_args()
        user_session = {"authToken": args["authToken"], "email": args["email"]}
        is_valid = requests.get("http://user_auth_api:3000/validate", user_session).json()
        if "error" in is_valid.keys():
            return "User not authorized: "
        # reserve places
        args.pop('authToken')
        reservation_id = testdb.testcol.insert_one(args).inserted_id
        result = {
            "body": "Reservation pending",
            "reservation_id": str(reservation_id),
        }
        return result
    def update(self):
        pass

api.add_resource(connectionCheck, "/ping")
api.add_resource(dbCheck, "/pingdb")
api.add_resource(reservation, "/reserve")
api.add_resource(testReservation, "/test")


if __name__ == "__main__":
    app.run(debug=False, port=3000, host='0.0.0.0') 
