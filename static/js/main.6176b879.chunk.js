(this["webpackJsonpmonitoring-test"]=this["webpackJsonpmonitoring-test"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},39:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),i=n(13),a=n.n(i),s=(n(19),n(20),n(3)),u=n(14),r=n.n(u),j=(n(39),n(1)),b=function(){var t=Object(c.useState)(1),e=Object(s.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)(null),a=Object(s.a)(i,2),u=(a[0],a[1]),b=Object(c.useState)(!1),l=Object(s.a)(b,2),d=l[0],h=l[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{children:["Pokemon Id:",Object(j.jsx)("input",{type:"text",value:n,onChange:function(t){return o(t.target.value)}})]}),Object(j.jsx)("button",{onClick:function(){r.a.get("https://pokeapi.co/api/v2/pokemon/".concat(n)).then((function(t){d&&h(!1),u(t.data)})).catch((function(t){h(!0),u(null)}))},children:"Search"}),Object(j.jsx)("div",{className:"form-content"})]})};var l=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(b,{})})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),i(t),a(t)}))};a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root")),d()}},[[41,1,2]]]);
//# sourceMappingURL=main.6176b879.chunk.js.map