(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(7),i=n.n(r),o=n(2),s=n(9),u=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(o.a)(n,2),i=r[0],u=r[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(console.log("Submit hecho!!"),console.log(i),t((function(e){return[i].concat(Object(s.a)(e))})),u(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){return function(e){u(e.target.value)}(e)}})})},l=n(10),j=n(6),d=n.n(j),f=n(8),b=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=6kFf2ganNheEaBIhCAjGB0kXaoXuDcfv"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,n=e.url;return console.log(t,n),Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsx)("p",{children:t})]})},h=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){b(e).then((function(e){return r({data:e,loading:!1})}))}),[e]),a}(t),r=n.data,i=n.loading;return console.log(i),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading ..."}),Object(a.jsx)("div",{className:"card-grid",children:r.map((function(e){return console.log(e),Object(a.jsx)(p,Object(l.a)({},e),e.id)}))})]})},m=function(){var e=Object(c.useState)(["One Punch"]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)("hr",{}),Object(a.jsx)(u,{setCategories:r}),Object(a.jsx)("ol",{children:n.map((function(e,t){return Object(a.jsx)(h,{category:e},e)}))})]})};n(17);i.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4e95198c.chunk.js.map