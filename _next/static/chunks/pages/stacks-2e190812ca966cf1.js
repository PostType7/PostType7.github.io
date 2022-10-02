(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{4777:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stacks",function(){return t(3300)}])},638:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=t(6856).Z;Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,s){var t=l.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=n({},a,e));if((a=n({},a,s)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");0;a.loadableGenerated&&delete(a=n({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,i(t,a);delete a.ssr}return t(a)},s.noSSR=i;var n=t(6495).Z,a=t(2648).Z,l=(a(t(7294)),a(t(4302)));function i(e,s){return delete s.webpack,delete s.modules,e(s)}("function"===typeof s.default||"object"===typeof s.default&&null!==s.default)&&"undefined"===typeof s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},6319:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var r=(0,t(2648).Z)(t(7294)).default.createContext(null);s.LoadableContext=r},4302:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=t(9658).Z,n=t(7222).Z;Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a=t(6495).Z,l=(0,t(2648).Z)(t(7294)),i=t(6319),d=t(1688).useSyncExternalStore,c=[],o=[],x=!1;function u(e){var s=e(),t={loading:!0,loaded:null,error:null};return t.promise=s.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}var h=function(){function e(s,t){r(this,e),this._loadFn=s,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return n(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var s=this._res,t=this._opts;s.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),t.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(s){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var s=this;return this._callbacks.add(e),function(){s._callbacks.delete(e)}}}]),e}();function b(e){return function(e,s){var t=function(){if(!c){var s=new h(e,n);c={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return c.promise()},r=function(){t();var e=l.default.useContext(i.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach((function(s){e(s)}))},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},s);n.suspense&&(n.lazy=l.default.lazy(n.loader));var c=null;if(!x){var u=n.webpack?n.webpack():n.modules;u&&o.push((function(e){var s=!0,r=!1,n=void 0;try{for(var a,l=u[Symbol.iterator]();!(s=(a=l.next()).done);s=!0){var i=a.value;if(-1!==e.indexOf(i))return t()}}catch(d){r=!0,n=d}finally{try{s||null==l.return||l.return()}finally{if(r)throw n}}}))}var b=n.suspense?function(e,s){return r(),l.default.createElement(n.lazy,a({},e,{ref:s}))}:function(e,s){r();var t=d(c.subscribe,c.getCurrentValue,c.getCurrentValue);return l.default.useImperativeHandle(s,(function(){return{retry:c.retry}}),[]),l.default.useMemo((function(){return t.loading||t.error?l.default.createElement(n.loading,{isLoading:t.loading,pastDelay:t.pastDelay,timedOut:t.timedOut,error:t.error,retry:c.retry}):t.loaded?l.default.createElement((s=t.loaded)&&s.__esModule?s.default:s,e):null;var s}),[e,t])};return b.preload=function(){return t()},b.displayName="LoadableComponent",l.default.forwardRef(b)}(u,e)}function m(e,s){for(var t=[];e.length;){var r=e.pop();t.push(r(s))}return Promise.all(t).then((function(){if(e.length)return m(e,s)}))}b.preloadAll=function(){return new Promise((function(e,s){m(c).then(e,s)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(s){var t=function(){return x=!0,s()};m(o,e).then(t,t)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var p=b;s.default=p},9393:function(e,s,t){"use strict";t.d(s,{q:function(){return c},M:function(){return d}});var r=t(5893),n=t(2208),a=t(4924),l=t(1017),i=t(3065),d=function(e){var s=e.title,t=e.subTitle,n=e.className,d=void 0===n?"":n,c=e.titleSize,o=void 0===c?"md":c;return(0,r.jsxs)("div",{className:(0,l.Jx)((0,a.Z)({"flex flex-col":!0,"gap-3":"xxl"==o},d,!0)),children:["md"==o?(0,r.jsx)(i.xv,{size:"md",className:"leading-5 pb-1.5",children:s}):null,"xxl"==o?(0,r.jsx)(i.xv,{size:"xxl",children:s}):null,(0,r.jsx)(i.xv,{size:"sm",className:"leading-4",color:"light",children:t})]})},c=function(e){var s=e.title,t=e.subTitle,a=e.url,l=e.size;return(0,r.jsxs)(n.Ug,{children:[(0,r.jsx)(n.Ee,{url:a,size:l}),(0,r.jsx)(d,{title:s,subTitle:t,className:"flex-1"})]})}},3300:function(e,s,t){"use strict";t.r(s);var r=t(5893),n=t(2208),a=t(3065),l=t(2957),i=t(5152),d=t.n(i),c=t(9393),o=d()(t.e(810).then(t.bind(t,3810))),x=d()(t.e(804).then(t.bind(t,7804))),u=d()(t.e(849).then(t.bind(t,3849))),h=function(){var e=function(e){var s,t=e.props;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o,{bgColor:"warning-light",children:[(0,r.jsx)(u,{title:"HStack propertires"}),(0,r.jsx)(a.xv,{size:"xs",children:"Import from theme ./layout"}),(0,r.jsxs)("table",{className:"text-xs",width:"100%",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(a.xv,{children:"Name"})}),(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(a.xv,{children:"Scope"})}),(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(a.xv,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(null===(s=t.data)||void 0===s?void 0:s.length)?t.data.map((function(e,s){return(0,r.jsxs)("tr",{children:[(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(a.xv,{children:e.name})}),(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(a.xv,{children:e.scope})}),(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(a.xv,{children:e.description})})]},s)})):(0,r.jsx)(r.Fragment,{children:"empty"})})]})]})})},s=function(e){var s=e.props;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{size:"xxl",title:s.hero}),(0,r.jsx)(c.M,{title:s.title,subTitle:s.sub}),(0,r.jsx)(n.T,{size:"xl"})]})},t={title:"HStack propertires",import:".layout",data:[{name:"horizontal",scope:"boolean",description:"Is chldren rendering as horizontal axis"},{name:"className",scope:"string",description:"Is chldren rendering as horizontal axis"},{name:"bgColor",scope:"primary, success, error",description:"Card background color"},{name:"spacing",scope:"none, sm, md, lg, xl",description:"Card background color"}]};return(0,r.jsx)(x,{topBar:(0,r.jsx)(l.TopBar,{}),menu:(0,r.jsx)(l.DesktopMenu,{}),sideBar:(0,r.jsx)(e,{}),body:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.T,{}),(0,r.jsx)(s,{props:{hero:"HStack component",title:"The basic component that organizes the displayed content as horizontal stack",sub:"HStack maintains default spacing, so the projected view will be equal"}}),(0,r.jsxs)(n.rj,{className:"grid-cols-3",children:[(0,r.jsx)(a.xv,{className:"col-span-2",children:"Default HStack is horizontal list with default inner spacing"}),(0,r.jsx)("div",{className:"row-span-6",children:(0,r.jsx)(e,{props:t})}),(0,r.jsxs)(n.Ug,{className:"border bg-white bg-opacity-50",children:[(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"First child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Second child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(a.EK,{border:!0,size:"sm",className:"self-start",children:["<HStack\n","  <Text>First child</Text>\n","  <Text>...</Text>\n","</HStack>"]}),(0,r.jsx)(n.T,{size:"xl"}),(0,r.jsxs)("div",{className:"col-span-2",children:[(0,r.jsx)(a.xv,{children:"HStack acceplable tailwind classes to organise display behavior like width or align."}),(0,r.jsx)(a.xv,{children:"The philosophy of an element is to separate spaces like margins and paddings"})]}),(0,r.jsxs)(n.Ug,{className:"border justify-between bg-white bg-opacity-50",children:[(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"First child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Second child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(a.EK,{border:!0,size:"sm",children:['<HStack className="justify-between">\n',"  <Text>First child</Text>\n","  <Text>...</Text>\n","</HStack>"]}),(0,r.jsx)(n.T,{size:"xl",className:"col-span-2"}),(0,r.jsx)(a.xv,{className:"col-span-3",children:"HStack with children display rules"}),(0,r.jsxs)(n.Ug,{className:"border bg-white bg-opacity-50",children:[(0,r.jsx)(a.xv,{className:"bg-slate-200 flex-1 border border-dotted",children:"First child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 flex-1 border border-dotted",children:"Second child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 flex-1 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(a.EK,{border:!0,size:"sm",children:["<HStack>\n",'  <Text className="flex-1">First child</Text>\n','  <Text className="flex-1">...</Text>\n',"</HStack>"]}),(0,r.jsx)(n.T,{size:"xl",className:"col-span-2"}),(0,r.jsx)(a.xv,{className:"col-span-3",children:"HStack horizontal centered"}),(0,r.jsxs)(n.Ug,{className:"border items-center bg-white bg-opacity-50",children:[(0,r.jsx)(a.xv,{className:"bg-slate-200 flex-1 border border-dotted",children:"First child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 flex-1 border border-dotted",children:"Second child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 flex-1 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(a.EK,{border:!0,size:"sm",children:['<HStack className="items-center">\n','  <Text className="flex-1">First child</Text>\n','  <Text className="flex-1">...</Text>\n',"</HStack>"]})]}),(0,r.jsx)(n.T,{size:"xxl"}),(0,r.jsx)(s,{props:{hero:"VStack component",title:"The basic component that organizes the displayed content as vertical stack",sub:"VStack maintains default spacing, so the projected view will be equal"}}),(0,r.jsx)(n.T,{}),(0,r.jsxs)(n.rj,{className:"grid-cols-3",children:[(0,r.jsx)(a.xv,{className:"col-span-2",children:"Default VStack is vertical list with default inner spacing"}),(0,r.jsx)("div",{className:"row-span-6",children:(0,r.jsx)(e,{props:t})}),(0,r.jsxs)(n.gC,{className:"border bg-white bg-opacity-50",children:[(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"First child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Second child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(a.EK,{border:!0,size:"sm",children:["<VStack\n","  <Text>First child</Text>\n","  <Text>...</Text>\n","  <Text>...</Text>\n","</VStack>"]}),(0,r.jsx)(n.T,{size:"xl",className:"col-span-2"}),(0,r.jsx)(a.xv,{className:"col-span-2",children:"Change VStack spacing"}),(0,r.jsxs)(n.gC,{spacing:"xl",className:"border bg-white bg-opacity-50",children:[(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"First child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Second child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(a.EK,{border:!0,size:"sm",children:['<VStack spacing="xl">\n',"  <Text>First child</Text>\n","  <Text>...</Text>\n","  <Text>...</Text>\n","</VStack>"]}),(0,r.jsx)(n.T,{size:"xl",className:"col-span-3"}),(0,r.jsx)(a.xv,{className:"col-span-3",children:"Reset VStack spacing"}),(0,r.jsxs)(n.gC,{spacing:"none",className:"border",children:[(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"First child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Second child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(a.EK,{border:!0,size:"sm",children:['<VStack spacing="xl">\n',"  <Text>First child</Text>\n","  <Text>...</Text>\n","  <Text>...</Text>\n","</VStack>"]}),(0,r.jsx)(n.T,{size:"xl",className:"col-span-2"}),(0,r.jsx)(a.xv,{className:"col-span-3",children:"VStack with centered children"}),(0,r.jsxs)(n.gC,{spacing:"none",className:"items-center border",children:[(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"First child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"Second child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"Third child"})]}),(0,r.jsxs)(a.EK,{border:!0,size:"sm",children:['<VStack spacing="none" className="items-center">\n','  <Text className="flex-1">First child</Text>\n','  <Text className="flex-1">...</Text>\n','  <Text className="flex-1">...</Text>\n',"</VStack>"]})]}),(0,r.jsx)(n.T,{size:"xxl"}),(0,r.jsx)(s,{props:{hero:"Grid component",title:"The basic component that organizes the displayed content as grid",sub:"Space maintains default spacing, so the projected view will be equal"}}),(0,r.jsxs)(n.rj,{className:"grid-cols-3",children:[(0,r.jsx)(a.xv,{className:"col-span-2",children:"Standard grid component with defoult spacing before childrens"}),(0,r.jsx)("div",{className:"row-span-6",children:(0,r.jsx)(e,{props:t})}),(0,r.jsxs)(n.rj,{className:"border grid-cols-2",children:[(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"First child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Second child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Third child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(a.EK,{border:!0,size:"sm",children:['<Grid className="grid-cols-2">\n',"  <Text>First child</Text>\n","  <Text>...</Text>\n","  <Text>...</Text>\n","</Grid>"]})]}),(0,r.jsx)(n.T,{size:"xxl"}),(0,r.jsx)(u,{size:"xxl",title:"Space component"}),(0,r.jsx)(c.M,{title:"The basic component that organizes the displayed content",subTitle:"Space maintains default spacing, so the projected view will be equal"}),(0,r.jsx)(n.T,{}),(0,r.jsxs)(n.rj,{className:"grid-cols-3",children:[(0,r.jsx)(a.xv,{className:"col-span-2",size:"xs",children:"VStack with centered children"}),(0,r.jsx)("div",{className:"row-span-6",children:(0,r.jsx)(e,{props:t})}),(0,r.jsxs)(n.gC,{spacing:"none",className:"items-center border",children:[(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"First child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"Second child"}),(0,r.jsx)(a.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"Third child"})]}),(0,r.jsxs)(a.EK,{border:!0,size:"sm",children:['<VStack spacing="none" className="items-center">\n','  <Text className="flex-1">First child</Text>\n','  <Text className="flex-1">...</Text>\n','  <Text className="flex-1">...</Text>\n',"</VStack>"]})]}),(0,r.jsx)(n.T,{size:"xxl"})]})})};h.getInitialProps=function(){return{}},s.default=h},5152:function(e,s,t){e.exports=t(638)},3250:function(e,s,t){"use strict";var r=t(7294);var n="function"===typeof Object.is?Object.is:function(e,s){return e===s&&(0!==e||1/e===1/s)||e!==e&&s!==s},a=r.useState,l=r.useEffect,i=r.useLayoutEffect,d=r.useDebugValue;function c(e){var s=e.getSnapshot;e=e.value;try{var t=s();return!n(e,t)}catch(r){return!0}}var o="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,s){return s()}:function(e,s){var t=s(),r=a({inst:{value:t,getSnapshot:s}}),n=r[0].inst,o=r[1];return i((function(){n.value=t,n.getSnapshot=s,c(n)&&o({inst:n})}),[e,t,s]),l((function(){return c(n)&&o({inst:n}),e((function(){c(n)&&o({inst:n})}))}),[e]),d(t),t};s.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:o},1688:function(e,s,t){"use strict";e.exports=t(3250)}},function(e){e.O(0,[774,888,179],(function(){return s=4777,e(e.s=s);var s}));var s=e.O();_N_E=s}]);