(this["webpackJsonpmonitoring-test"]=this["webpackJsonpmonitoring-test"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},39:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),s=n(13),a=n.n(s),o=(n(19),n(20),n(3)),r=n(14),j=n.n(r),u=(n(39),n(0)),l=function(){var t=Object(c.useState)(1),e=Object(o.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(null),a=Object(o.a)(s,2),r=a[0],l=a[1],b=Object(c.useState)(!1),d=Object(o.a)(b,2),h=d[0],O=d[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{children:["Pokemon Id:",Object(u.jsx)("input",{type:"text",value:n,onChange:function(t){return i(t.target.value)}})]}),Object(u.jsx)("button",{onClick:function(){j.a.get("https://pokeapi.co/api/v2/pokemon/".concat(n)).then((function(t){h&&O(!1),l(t.data)})).catch((function(t){O(!0),l(null)}))},children:"Search"}),Object(u.jsxs)("div",{className:"form-content",children:[h&&Object(u.jsx)("span",{children:"Invalid Pokemon Id"}),r&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:r.sprites.front_default,alt:"#"}),Object(u.jsx)("span",{children:r.name})]})]})]})};var b=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(l,{})})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),s(t),a(t)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),d()}},[[41,1,2]]]);
//# sourceMappingURL=main.95cee461.chunk.js.map