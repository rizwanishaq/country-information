(this["webpackJsonpmanaging-states"]=this["webpackJsonpmanaging-states"]||[]).push([[0],{24:function(e,t,n){e.exports=n(35)},30:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),u=(n(29),n(30),n(36)),o=n(6),s=n.n(o),m=n(9),i=n(21),p=n(14),E=n(13),f=Object(a.createContext)(),b=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(E.a)(n,2),l=c[0],u=c[1],o=Object(a.useState)("CA"),i=Object(E.a)(o,2),p=i[0],b=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(f.Provider,{value:{country:p,setCountry:b,countries:l}},t)},v=n(40),g=n(37),h=n(17),j=n(39),d=function(){var e=Object(m.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/alpha/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.useContext)(f).country,t=Object(i.a)([e],d),n=t.data,c=t.isLoading,l=t.error;return c?r.a.createElement("span",null,"Loading ..."):l?r.a.createElement("span",null,"oop!! error occurred"):r.a.createElement(u.a,null,r.a.createElement(v.a,null,r.a.createElement(v.a.Img,{variant:"top",src:n.flag}),r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,n.name),r.a.createElement(g.a,null,r.a.createElement(h.a,null,"Capital: ",n.capital),r.a.createElement(h.a,null,"languages:"," ",r.a.createElement(j.a,{horizontal:!0},n.languages.map((function(e){return r.a.createElement(j.a.Item,{key:Object(p.a)()},e.name)})))),r.a.createElement(h.a,null,"currencies:"," ",r.a.createElement(j.a,{horizontal:!0},n.currencies.map((function(e){return r.a.createElement(j.a.Item,{key:Object(p.a)()},e.name," ",e.symbol)})))),r.a.createElement(h.a,null,r.a.createElement("span",null,"Population: ",n.population))))))},O=n(38),C=function(){var e=Object(a.useContext)(f),t=e.country,n=e.setCountry,c=e.countries;return r.a.createElement(O.a,null,r.a.createElement(O.a.Group,{controlId:"exampleForm.SelectCustom"},r.a.createElement(O.a.Label,null,"Country-picker"),r.a.createElement(O.a.Control,{as:"select",custom:!0,value:t,onChange:function(e){n(e.target.value)}}," ",c&&c.map((function(e){return r.a.createElement("option",{value:e.alpha2Code,key:e.name},e.name)})))))},x=Object(a.memo)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(C,null),r.a.createElement(y,null)))}));var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null,r.a.createElement(x,null),";"))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1c2ca380.chunk.js.map