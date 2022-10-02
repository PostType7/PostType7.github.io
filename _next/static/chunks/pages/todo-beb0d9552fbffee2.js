(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{7648:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todo",function(){return n(6153)}])},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,i={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?i.loader=function(){return e}:"function"===typeof e?i.loader=e:"object"===typeof e&&(i=u({},i,e));if((i=u({},i,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");0;i.loadableGenerated&&delete(i=u({},i,i.loadableGenerated)).loadableGenerated;if("boolean"===typeof i.ssr&&!i.suspense){if(!i.ssr)return delete i.ssr,o(n,i);delete i.ssr}return n(i)},t.noSSR=o;var u=n(6495).Z,i=n(2648).Z,a=(i(n(7294)),i(n(4302)));function o(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,u=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,a=(0,n(2648).Z)(n(7294)),o=n(6319),l=n(1688).useSyncExternalStore,s=[],d=[],c=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return u(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!s){var t=new p(e,u);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},r=function(){n();var e=a.default.useContext(o.LoadableContext);e&&Array.isArray(u.modules)&&u.modules.forEach((function(t){e(t)}))},u=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);u.suspense&&(u.lazy=a.default.lazy(u.loader));var s=null;if(!c){var f=u.webpack?u.webpack():u.modules;f&&d.push((function(e){var t=!0,r=!1,u=void 0;try{for(var i,a=f[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(-1!==e.indexOf(o))return n()}}catch(l){r=!0,u=l}finally{try{t||null==a.return||a.return()}finally{if(r)throw u}}}))}var h=u.suspense?function(e,t){return r(),a.default.createElement(u.lazy,i({},e,{ref:t}))}:function(e,t){r();var n=l(s.subscribe,s.getCurrentValue,s.getCurrentValue);return a.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),a.default.useMemo((function(){return n.loading||n.error?a.default.createElement(u.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:s.retry}):n.loaded?a.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return h.preload=function(){return n()},h.displayName="LoadableComponent",a.default.forwardRef(h)}(f,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){y(s).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return c=!0,t()};y(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var v=h;t.default=v},9393:function(e,t,n){"use strict";n.d(t,{q:function(){return s},M:function(){return l}});var r=n(5893),u=n(2208),i=n(4924),a=n(1017),o=n(3065),l=function(e){var t=e.title,n=e.subTitle,u=e.className,l=void 0===u?"":u,s=e.titleSize,d=void 0===s?"md":s;return(0,r.jsxs)("div",{className:(0,a.Jx)((0,i.Z)({"flex flex-col":!0,"gap-3":"xxl"==d},l,!0)),children:["md"==d?(0,r.jsx)(o.xv,{size:"md",className:"leading-5 pb-1.5",children:t}):null,"xxl"==d?(0,r.jsx)(o.xv,{size:"xxl",children:t}):null,(0,r.jsx)(o.xv,{size:"sm",className:"leading-4",color:"dark",children:n})]})},s=function(e){var t=e.title,n=e.subTitle,i=e.url,a=e.size;return(0,r.jsxs)(u.Ug,{children:[(0,r.jsx)(u.Ee,{url:i,size:a}),(0,r.jsx)(l,{title:t,subTitle:n,className:"flex-1"})]})}},6153:function(e,t,n){"use strict";n.r(t);var r=n(5893),u=n(2208),i=n(2957),a=n(5152),o=n.n(a),l=n(9393),s=(o()(n.e(810).then(n.bind(n,3810))),o()(n.e(571).then(n.bind(n,8571)))),d=o()(n.e(849).then(n.bind(n,3849))),c=function(){return(0,r.jsx)(s,{topBar:(0,r.jsx)(i.TopBar,{}),menu:(0,r.jsx)(i.DesktopMenu,{}),body:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.T,{}),(0,r.jsx)(d,{size:"xxl",title:"TODO"}),(0,r.jsx)(l.M,{title:"Article is not finished yet.",subTitle:"Hey, all its on publish repo: https://github.com/PostType7/PureBaldr-example-doc"}),(0,r.jsx)(u.T,{})]})})};c.getInitialProps=function(){return{}},t.default=c},5152:function(e,t,n){e.exports=n(638)},3250:function(e,t,n){"use strict";var r=n(7294);var u="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useState,a=r.useEffect,o=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(r){return!0}}var d="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),u=r[0].inst,d=r[1];return o((function(){u.value=n,u.getSnapshot=t,s(u)&&d({inst:u})}),[e,n,t]),a((function(){return s(u)&&d({inst:u}),e((function(){s(u)&&d({inst:u})}))}),[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},1688:function(e,t,n){"use strict";e.exports=n(3250)}},function(e){e.O(0,[774,888,179],(function(){return t=7648,e(e.s=t);var t}));var t=e.O();_N_E=t}]);