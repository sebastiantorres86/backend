(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{21:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e(2),o=e(15),i=e.n(o),a=(e(21),e(6)),u=e(3),s=function(t){var n=t.note,e=t.toggleImportance,r=n.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[n.content,Object(c.jsx)("button",{onClick:e,children:r})]})},j=function(t){var n=t.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},l=function(){return Object(c.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki"})]})},f=e(4),b=e.n(f),d="/api/notes",m=function(){return b.a.get(d).then((function(t){return t.data}))},O=function(t){return b.a.post(d,t).then((function(t){return t.data}))},h=function(t,n){return b.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))},p=function(){var t=Object(r.useState)([]),n=Object(u.a)(t,2),e=n[0],o=n[1],i=Object(r.useState)(""),f=Object(u.a)(i,2),b=f[0],d=f[1],p=Object(r.useState)(!0),v=Object(u.a)(p,2),x=v[0],g=v[1],S=Object(r.useState)(null),k=Object(u.a)(S,2),y=k[0],w=k[1];Object(r.useEffect)((function(){m().then((function(t){o(t)}))}),[]);var N=x?e:e.filter((function(t){return t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(j,{message:y}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(c.jsx)("ul",{children:N.map((function(t,n){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(a.a)(Object(a.a)({},n),{},{important:!n.important});h(t,c).then((function(n){o(e.map((function(e){return e.id!==t?e:n})))})).catch((function(c){w("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),o(e.filter((function(n){return n.id!==t})))}))}(t.id)}},n)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:b,date:new Date,important:Math.random()<.5,id:e.length+1};O(n).then((function(t){o(e.concat(t)),d("")}))},children:[Object(c.jsx)("input",{value:b,onChange:function(t){console.log(t.target.value),d(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"save"})]}),Object(c.jsx)(l,{})]})};i.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8621e8a4.chunk.js.map