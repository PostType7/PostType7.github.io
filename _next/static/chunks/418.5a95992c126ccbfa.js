(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{9418:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(6344),c=t(5605),u=t(1163),i=t(7294);n.default=function(e){var n=e.currentUserEndpoint,t=e.children,a=(0,u.useRouter)(),f=(0,o.f)((function(e){return e.theme})),s=(0,o.f)((function(e){return e.setAttr})),h=function(){"/login"!=a.asPath&&a.push("/login")};return(0,i.useEffect)((function(){var e=(0,c.ej)("jwt");e||h(),f.currentUser.id||(0,c.a8)(n,{method:"GET",headers:{Authorization:"Bearer ".concat(e)}},(function(e){if(console.log("auth check",e.id),e.id)return s({path:"theme.currentUser",value:e}),!0;h()}))}),[]),(0,r.jsx)(r.Fragment,{children:t})}},5605:function(e,n,t){"use strict";t.d(n,{a8:function(){return c},ej:function(){return u},kT:function(){return i}});var r=t(6042),o=t(9396),c=function(e,n,t){fetch(e,(0,o.Z)((0,r.Z)({method:n.method,mode:"cors",headers:(0,r.Z)({Accept:"application/json","Content-type":"application/json; charset=UTF-8"},(null===n||void 0===n?void 0:n.headers)&&n.headers)},(null===n||void 0===n?void 0:n.payload)&&{body:JSON.stringify(n.payload)}),{cache:"default"})).then((function(e){return e.text()})).then((function(e){return t(JSON.parse(e))})).catch((function(e){return t({error:{message:"Unexpected feth error."}})}))},u=function(e){var n=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));if(n)return n[2]},i=function(e){return document.cookie="".concat(e,"=","; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;")}},1163:function(e,n,t){e.exports=t(387)}}]);