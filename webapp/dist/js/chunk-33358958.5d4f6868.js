(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33358958"],{"03dd":function(e,t,n){},"889f":function(e,t,n){e.exports=n.p+"img/557px-Barbieri_-_ViaSophia25668.ce76875b.jpg"},ad68:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=n("889f"),u=n.n(a),i={class:"maina"},l={style:{"margin-top":"50px","min-width":"1000px"}},c=Object(r["g"])("img",{style:{display:"inline-block",width:"550px"},src:u.a},null,-1),o={style:{height:"50px","min-width":"400px",float:"right"}},s=Object(r["g"])("h2",null,"Reserve a table",-1),b=Object(r["g"])("br",null,null,-1),g=Object(r["g"])("label",{for:"guestNum"},"Guests:",-1),p=Object(r["f"])(),d=Object(r["g"])("br",null,null,-1),O=Object(r["g"])("br",null,null,-1),j=Object(r["g"])("br",null,null,-1),m=Object(r["g"])("label",{for:"date"},"Day:",-1),f=Object(r["f"])(),h=Object(r["g"])("br",null,null,-1),y=Object(r["g"])("br",null,null,-1),k=Object(r["g"])("br",null,null,-1),v=Object(r["g"])("label",{for:"time"},"Time:",-1),x=Object(r["f"])(),S=Object(r["g"])("br",null,null,-1),w=Object(r["g"])("br",null,null,-1),D=Object(r["g"])("br",null,null,-1),R=Object(r["g"])("br",null,null,-1),z=Object(r["g"])("input",{style:{padding:"5px 10px 5px 10px",width:"240px"},type:"submit",value:"Book now"},null,-1),T=Object(r["g"])("br",null,null,-1),P=Object(r["g"])("br",null,null,-1),$=Object(r["g"])("h1",null,"Menu",-1),M=Object(r["g"])("br",null,null,-1),N=Object(r["g"])("br",null,null,-1);function V(e,t,n,a,u,V){return Object(r["p"])(),Object(r["d"])("div",i,[Object(r["g"])("h1",null,Object(r["x"])(e.currentRestaurant.nome),1),(Object(r["p"])(),Object(r["d"])(r["a"],null,Object(r["u"])(5,(function(t){return Object(r["g"])("span",{class:["fa fa-star",{checked:t<=(e.currentRestaurant.rating?e.currentRestaurant.rating:3)}],style:{"font-size":"20px"},key:t},null,2)})),64)),Object(r["g"])("h4",null,Object(r["x"])(e.currentRestaurant.indirizzo?e.currentRestaurant.indirizzo:"Via Pietro Cavallini 25, 00193 Rome Italy"),1),Object(r["g"])("div",l,[c,Object(r["g"])("div",o,[s,b,Object(r["g"])("form",{onSubmit:t[4]||(t[4]=Object(r["E"])((function(){return e.onSubmit&&e.onSubmit.apply(e,arguments)}),["prevent"]))},[g,p,d,Object(r["D"])(Object(r["g"])("input",{id:"guestNum",type:"number",min:"1",style:{width:"220px"},"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.bookingData.guests=t}),required:""},null,512),[[r["z"],e.bookingData.guests]]),O,j,m,f,h,Object(r["D"])(Object(r["g"])("input",{type:"date",id:"date","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.bookingData.date=t}),min:e.bookingData.date,style:{width:"220px"}},null,8,["min"]),[[r["z"],e.bookingData.date]]),y,k,v,x,S,Object(r["D"])(Object(r["g"])("input",{type:"time",id:"time","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.bookingData.time=t}),min:e.currentHour,style:{width:"220px"},required:""},null,8,["min"]),[[r["z"],e.bookingData.time]]),w,D,R,z],32)])]),T,P,Object(r["g"])("div",null,[$,M,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(e.currentMenu,(function(e,t){return Object(r["p"])(),Object(r["d"])("div",{key:t},[Object(r["g"])("h2",null,Object(r["x"])(e["category"]),1),(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(e.meals,(function(e,t){return Object(r["p"])(),Object(r["d"])("div",{class:"column",key:t},Object(r["x"])(e.item)+" - "+Object(r["x"])(e.price),1)})),128)),N])})),128))])])}var q=n("d4ec"),C=n("bee2"),H=n("262e"),J=n("2caf"),_=(n("fb6a"),n("ac1f"),n("5319"),n("b64b"),n("ce1f")),U=n("afbc"),B=function(e){Object(H["a"])(n,e);var t=Object(J["a"])(n);function n(){var e;return Object(q["a"])(this,n),e=t.apply(this,arguments),e.bookingData={guests:1,date:(new Date).toISOString().slice(0,10),time:e.currentHour},e.underscoreCurrentRestaurant={},e.exampleMenu=[{category:"Antipasti",meals:[{item:"prosciutto",price:"5.5$"},{item:"suppli",price:"1.5$"}]},{category:"Primi",meals:[{item:"pasta al sugo",price:"2.5$"},{item:"pizza",price:"9.5$"}]},{category:"Secondi",meals:[{item:"carne",price:"15.5$"},{item:"pesce",price:"11.5$"}]}],e}return Object(C["a"])(n,[{key:"created",value:function(){this.restaurantProvided?this.underscoreCurrentRestaurant=JSON.parse(this.$route.params.nome):(alert("No restaurant provided!"),U["a"].replace("/"))}},{key:"currentHour",get:function(){return(new Date).toLocaleTimeString().slice(0,5)}},{key:"onSubmit",value:function(){console.log("Submitting the following order:"),console.log(this.bookingData),void 0!==localStorage.authEmail&&void 0!==localStorage.authToken||console.log("You are not authenticated!");var e={rest_email:this.currentRestaurant.email,date:this.bookingData.date,service:"",time:this.bookingData.time,seats:this.bookingData.guests,notes:"",email:localStorage.authEmail,status:"pending",authToken:localStorage.authToken},t=new XMLHttpRequest;t.open("POST","http://localhost:12004/reserve",!0),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.onreadystatechange=function(){if(4===t.readyState){var e=JSON.parse(t.responseText);console.log(e)}},t.send(JSON.stringify(e)),alert("Request of reservation correctly sent to the restaurant!"),U["a"].replace("/")}},{key:"currentRestaurant",get:function(){return this.underscoreCurrentRestaurant}},{key:"restaurantProvided",get:function(){return Object.keys(this.$route.params).length>0}},{key:"currentMenu",get:function(){return this.restaurantProvided?this.currentRestaurant.menu:this.exampleMenu}},{key:"restaurantPic",get:function(){return this.restaurantProvided?this.currentRestaurant.picture:"../assets/557px-Barbieri_-_ViaSophia25668.jpg"}}]),n}(_["b"]);n("b629");B.render=V;t["default"]=B},b629:function(e,t,n){"use strict";n("03dd")},b64b:function(e,t,n){var r=n("23e7"),a=n("7b0b"),u=n("df75"),i=n("d039"),l=i((function(){u(1)}));r({target:"Object",stat:!0,forced:l},{keys:function(e){return u(a(e))}})}}]);
//# sourceMappingURL=chunk-33358958.5d4f6868.js.map