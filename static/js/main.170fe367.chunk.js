(this["webpackJsonpmagic-8-ball"]=this["webpackJsonpmagic-8-ball"]||[]).push([[0],{11:function(e,t,a){e.exports=a(26)},16:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),o=a.n(l),r=(a(16),a(2)),i=a(1),s={prediction:{},text:"",fail:{},loading:!1,visibility:!1};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PREDICTION":return Object(i.a)(Object(i.a)({},e),{},{prediction:t.payload||{}});case"TEXT":return Object(i.a)(Object(i.a)({},e),{},{text:t.payload});case"FAIL":return Object(i.a)(Object(i.a)({},e),{},{fail:t.payload});case"LOADING":return Object(i.a)(Object(i.a)({},e),{},{loading:t.payload});case"VISIBILITY":return Object(i.a)(Object(i.a)({},e),{},{visibility:t.payload});default:return e}},m=a(4),p=a(5);a(23);var d=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),i=Object(p.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(""),d=Object(p.a)(m,2),b=(d[0],d[1]),y=Object(r.b)(),f=Object(n.useCallback)((function(){var e="https://cors-anywhere.herokuapp.com/https://8ball.delegator.com/magic/JSON/"+encodeURIComponent(s);s&&(y({type:"LOADING",payload:!0}),fetch(e).then((function(e){return e.json()})).then((function(e){y({type:"LOADING",payload:!1}),y({type:"VISIBILITY",payload:!0}),y({type:"PREDICTION",payload:e})})).catch((function(e){b(e.message),y({type:"LOADING",payload:!1}),y({type:"FAIL",payload:e.message}),console.log(e.message)})))}),[y,s,b]);return Object(n.useEffect)((function(){f()}),[f]),c.a.createElement("div",{className:"Question"},c.a.createElement("form",null,c.a.createElement("input",{type:"text",placeholder:"What would you like to know?",onChange:function(e){y({type:"VISIBILITY",payload:!1});var t=e.target.value;l(e.target.value),setTimeout((function(){y({type:"TEXT",payload:t})}),3e3)}}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),u(a),y({type:"TEXT",payload:a}),y({type:"VISIBILITY",payload:!0})},type:"submit"},"Ask!")))};a(24);var b=function(){var e=Object(r.c)((function(e){return e.prediction})),t=Object(r.c)((function(e){return e.loading})),a=Object(r.c)((function(e){return e.visibility})),n=e.magic&&!t?e.magic.answer:null,l=t?c.a.createElement("h1",null,"Predicting..."):null,o=a?c.a.createElement("div",{className:"Inner-circle"},c.a.createElement("div",{className:"Triangle"},c.a.createElement("h4",{className:"Response"},n))):null,i=c.a.createElement("div",{className:"Eight"},c.a.createElement("h1",{className:"Number"},"8"));return c.a.createElement("div",{className:"Container"},c.a.createElement("div",{className:"Circle ".concat(t?"Shake":"")},o,a?null:i),l)};a(25);var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Magic 8 Ball"),c.a.createElement(d,null),c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=Object(m.b)(u);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(r.a,{store:f},c.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.170fe367.chunk.js.map