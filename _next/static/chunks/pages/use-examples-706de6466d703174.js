(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[543],{4760:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/use-examples",function(){return n(6637)}])},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,s={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?s.loader=function(){return e}:"function"===typeof e?s.loader=e:"object"===typeof e&&(s=a({},s,e));if((s=a({},s,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");0;s.loadableGenerated&&delete(s=a({},s,s.loadableGenerated)).loadableGenerated;if("boolean"===typeof s.ssr&&!s.suspense){if(!s.ssr)return delete s.ssr,u(n,s);delete s.ssr}return n(s)},t.noSSR=u;var a=n(6495).Z,s=n(2648).Z,i=(s(n(7294)),s(n(4302)));function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,a=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(6495).Z,i=(0,n(2648).Z)(n(7294)),u=n(6319),l=n(1688).useSyncExternalStore,o=[],d=[],c=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!o){var t=new p(e,a);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=function(){n();var e=i.default.useContext(u.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=i.default.lazy(a.loader));var o=null;if(!c){var f=a.webpack?a.webpack():a.modules;f&&d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var s,i=f[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){var u=s.value;if(-1!==e.indexOf(u))return n()}}catch(l){r=!0,a=l}finally{try{t||null==i.return||i.return()}finally{if(r)throw a}}}))}var h=a.suspense?function(e,t){return r(),i.default.createElement(a.lazy,s({},e,{ref:t}))}:function(e,t){r();var n=l(o.subscribe,o.getCurrentValue,o.getCurrentValue);return i.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),i.default.useMemo((function(){return n.loading||n.error?i.default.createElement(a.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:o.retry}):n.loaded?i.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return h.preload=function(){return n()},h.displayName="LoadableComponent",i.default.forwardRef(h)}(f,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return m(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){m(o).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return c=!0,t()};m(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var x=h;t.default=x},9393:function(e,t,n){"use strict";n.d(t,{q:function(){return o},M:function(){return l}});var r=n(5893),a=n(2208),s=n(4924),i=n(1017),u=n(3065),l=function(e){var t=e.title,n=e.subTitle,a=e.className,l=void 0===a?"":a,o=e.titleSize,d=void 0===o?"md":o;return(0,r.jsxs)("div",{className:(0,i.Jx)((0,s.Z)({"flex flex-col":!0,"gap-3":"xxl"==d},l,!0)),children:["md"==d?(0,r.jsx)(u.xv,{size:"md",className:"leading-5 pb-1.5",children:t}):null,"xxl"==d?(0,r.jsx)(u.xv,{size:"xxl",children:t}):null,(0,r.jsx)(u.xv,{size:"sm",className:"leading-4",color:"dark",children:n})]})},o=function(e){var t=e.title,n=e.subTitle,s=e.url,i=e.size;return(0,r.jsxs)(a.Ug,{children:[(0,r.jsx)(a.Ee,{url:s,size:i}),(0,r.jsx)(l,{title:t,subTitle:n,className:"flex-1"})]})}},6637:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(2208),s=n(2957),i=n(5152),u=n.n(i),l=n(9393),o=n(7219),d=n(8740),c=u()(n.e(810).then(n.bind(n,3810))),f=u()(n.e(571).then(n.bind(n,8571))),p=u()(n.e(849).then(n.bind(n,3849))),h=function(){return(0,r.jsx)(f,{topBar:(0,r.jsx)(s.TopBar,{}),menu:(0,r.jsx)(s.DesktopMenu,{}),body:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.T,{}),(0,r.jsx)(p,{size:"xxl",title:"Examples"}),(0,r.jsx)(l.M,{title:"The basic component that organizes the displayed content",subTitle:"The card maintains the default spacing, so the projected view will be equal"}),(0,r.jsx)(a.T,{}),(0,r.jsxs)(a.rj,{className:"grid-cols-3",children:[(0,r.jsx)(d.LY,{href:"/examples/cards-examples",children:(0,r.jsxs)(c,{horizontal:!0,spacing:"null",className:"items-center",children:[(0,r.jsx)(a.Il,{className:"p-6",bg:"dark",text:"white",children:(0,r.jsx)(o.tHe,{})}),(0,r.jsx)(a.rj,{spacingX:"md",children:"Cards examples with code"})]})}),(0,r.jsx)(d.LY,{href:"/examples/cards-crud-local",children:(0,r.jsxs)(c,{horizontal:!0,spacing:"null",className:"items-center",children:[(0,r.jsx)(a.Il,{className:"p-6",bg:"dark",text:"white",children:(0,r.jsx)(o.tHe,{})}),(0,r.jsx)(a.rj,{spacingX:"md",children:"CARDS CRUD - list of cards with insert and edit data"})]})}),(0,r.jsx)(d.LY,{href:"https://github.com/PostType7",children:(0,r.jsxs)(c,{horizontal:!0,spacing:"null",className:"items-center",children:[(0,r.jsx)(a.Il,{className:"p-6",bg:"dark",text:"white",children:(0,r.jsx)(o.tHe,{})}),(0,r.jsx)(a.rj,{spacingX:"md",children:"GitHub"})]})})]})]})})};h.getInitialProps=function(){return{}},t.default=h},5152:function(e,t,n){e.exports=n(638)},3250:function(e,t,n){"use strict";var r=n(7294);var a="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},s=r.useState,i=r.useEffect,u=r.useLayoutEffect,l=r.useDebugValue;function o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a(e,n)}catch(r){return!0}}var d="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),a=r[0].inst,d=r[1];return u((function(){a.value=n,a.getSnapshot=t,o(a)&&d({inst:a})}),[e,n,t]),i((function(){return o(a)&&d({inst:a}),e((function(){o(a)&&d({inst:a})}))}),[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},1688:function(e,t,n){"use strict";e.exports=n(3250)}},function(e){e.O(0,[774,888,179],(function(){return t=4760,e(e.s=t);var t}));var t=e.O();_N_E=t}]);