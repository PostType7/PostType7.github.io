(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{4777:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stacks",function(){return t(3300)}])},638:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=t(6856).Z;Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,s){var t=l.default,i={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?i.loader=function(){return e}:"function"===typeof e?i.loader=e:"object"===typeof e&&(i=n({},i,e));if((i=n({},i,s)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");0;i.loadableGenerated&&delete(i=n({},i,i.loadableGenerated)).loadableGenerated;if("boolean"===typeof i.ssr&&!i.suspense){if(!i.ssr)return delete i.ssr,a(t,i);delete i.ssr}return t(i)},s.noSSR=a;var n=t(6495).Z,i=t(2648).Z,l=(i(t(7294)),i(t(4302)));function a(e,s){return delete s.webpack,delete s.modules,e(s)}("function"===typeof s.default||"object"===typeof s.default&&null!==s.default)&&"undefined"===typeof s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},6319:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var r=(0,t(2648).Z)(t(7294)).default.createContext(null);s.LoadableContext=r},4302:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=t(9658).Z,n=t(7222).Z;Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=t(6495).Z,l=(0,t(2648).Z)(t(7294)),a=t(6319),d=t(1688).useSyncExternalStore,c=[],o=[],x=!1;function h(e){var s=e(),t={loading:!0,loaded:null,error:null};return t.promise=s.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}var u=function(){function e(s,t){r(this,e),this._loadFn=s,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return n(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var s=this._res,t=this._opts;s.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),t.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(s){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var s=this;return this._callbacks.add(e),function(){s._callbacks.delete(e)}}}]),e}();function m(e){return function(e,s){var t=function(){if(!c){var s=new u(e,n);c={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return c.promise()},r=function(){t();var e=l.default.useContext(a.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach((function(s){e(s)}))},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},s);n.suspense&&(n.lazy=l.default.lazy(n.loader));var c=null;if(!x){var h=n.webpack?n.webpack():n.modules;h&&o.push((function(e){var s=!0,r=!1,n=void 0;try{for(var i,l=h[Symbol.iterator]();!(s=(i=l.next()).done);s=!0){var a=i.value;if(-1!==e.indexOf(a))return t()}}catch(d){r=!0,n=d}finally{try{s||null==l.return||l.return()}finally{if(r)throw n}}}))}var m=n.suspense?function(e,s){return r(),l.default.createElement(n.lazy,i({},e,{ref:s}))}:function(e,s){r();var t=d(c.subscribe,c.getCurrentValue,c.getCurrentValue);return l.default.useImperativeHandle(s,(function(){return{retry:c.retry}}),[]),l.default.useMemo((function(){return t.loading||t.error?l.default.createElement(n.loading,{isLoading:t.loading,pastDelay:t.pastDelay,timedOut:t.timedOut,error:t.error,retry:c.retry}):t.loaded?l.default.createElement((s=t.loaded)&&s.__esModule?s.default:s,e):null;var s}),[e,t])};return m.preload=function(){return t()},m.displayName="LoadableComponent",l.default.forwardRef(m)}(h,e)}function j(e,s){for(var t=[];e.length;){var r=e.pop();t.push(r(s))}return Promise.all(t).then((function(){if(e.length)return j(e,s)}))}m.preloadAll=function(){return new Promise((function(e,s){j(c).then(e,s)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(s){var t=function(){return x=!0,s()};j(o,e).then(t,t)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var p=m;s.default=p},9393:function(e,s,t){"use strict";t.d(s,{q:function(){return c},M:function(){return d}});var r=t(5893),n=t(2208),i=t(4924),l=t(1017),a=t(3065),d=function(e){var s=e.title,t=e.subTitle,n=e.className,d=void 0===n?"":n,c=e.titleSize,o=void 0===c?"md":c;return(0,r.jsxs)("div",{className:(0,l.Jx)((0,i.Z)({"flex flex-col":!0,"gap-3":"xxl"==o},d,!0)),children:["md"==o?(0,r.jsx)(a.xv,{size:"md",className:"leading-5 pb-1.5",children:s}):null,"xxl"==o?(0,r.jsx)(a.xv,{size:"xxl",children:s}):null,(0,r.jsx)(a.xv,{size:"sm",className:"leading-4",color:"light",children:t})]})},c=function(e){var s=e.title,t=e.subTitle,i=e.url,l=e.size;return(0,r.jsxs)(n.Ug,{children:[(0,r.jsx)(n.Ee,{url:i,size:l}),(0,r.jsx)(d,{title:s,subTitle:t,className:"flex-1"})]})}},3300:function(e,s,t){"use strict";t.r(s);var r=t(5893),n=t(2208),i=t(3065),l=t(2957),a=t(5152),d=t.n(a),c=t(9393),o=d()(t.e(810).then(t.bind(t,3810))),x=d()(t.e(571).then(t.bind(t,8571))),h=d()(t.e(849).then(t.bind(t,3849))),u=function(){var e=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o,{bgColor:"warning-light",children:[(0,r.jsx)(h,{title:"HStack propertires"}),(0,r.jsx)(i.xv,{size:"xs",children:"Import from theme ./layout"}),(0,r.jsxs)("table",{className:"text-xs",width:"100%",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(i.xv,{children:"Name"})}),(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(i.xv,{children:"Scope"})}),(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(i.xv,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:s.map((function(e,s){return(0,r.jsxs)("tr",{children:[(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(i.xv,{children:e.name})}),(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(i.xv,{children:e.scope})}),(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(i.xv,{children:e.description})})]},s)}))})]})]}),(0,r.jsxs)(o,{bgColor:"warning-light",children:[(0,r.jsx)(h,{title:"VStack propertires"}),(0,r.jsx)(i.xv,{size:"xs",children:"Import from theme ./layout"}),(0,r.jsxs)("table",{className:"text-xs",width:"100%",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(i.xv,{children:"Name"})}),(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(i.xv,{children:"Scope"})}),(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(i.xv,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:s.map((function(e,s){return(0,r.jsxs)("tr",{children:[(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(i.xv,{children:e.name})}),(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(i.xv,{children:e.scope})}),(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(i.xv,{children:e.description})})]},s)}))})]})]}),(0,r.jsxs)(o,{bgColor:"warning-light",children:[(0,r.jsx)(h,{title:"Space propertires"}),(0,r.jsx)(i.xv,{size:"xs",children:"Import from theme ./layout"}),(0,r.jsxs)("table",{className:"text-xs",width:"100%",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(i.xv,{children:"Name"})}),(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(i.xv,{children:"Scope"})}),(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(i.xv,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:t.map((function(e,s){return(0,r.jsxs)("tr",{children:[(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(i.xv,{children:e.name})}),(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(i.xv,{children:e.scope})}),(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(i.xv,{children:e.description})})]},s)}))})]})]}),(0,r.jsxs)(o,{bgColor:"warning-light",children:[(0,r.jsx)(h,{title:"Grid propertires"}),(0,r.jsx)(i.xv,{size:"xs",children:"Import from theme ./layout"}),(0,r.jsxs)("table",{className:"text-xs",width:"100%",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(i.xv,{children:"Name"})}),(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(i.xv,{children:"Scope"})}),(0,r.jsx)(n.Th,{spacing:"sm",decorate:!0,children:(0,r.jsx)(i.xv,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:t.map((function(e,s){return(0,r.jsxs)("tr",{children:[(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(i.xv,{children:e.name})}),(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(i.xv,{children:e.scope})}),(0,r.jsx)(n.Td,{spacing:"sm",children:(0,r.jsx)(i.xv,{children:e.description})})]},s)}))})]})]})]})},s=[{name:"horizontal",scope:"boolean",description:"Is chldren rendering as horizontal axis"},{name:"className",scope:"string",description:"Is chldren rendering as horizontal axis"},{name:"bgColor",scope:"primary, success, error",description:"Card background color"},{name:"spacing",scope:"none, sm, md, lg, xl",description:"Card background color"}],t=[{name:"className",scope:"string",description:"Is chldren rendering as horizontal axis"},{name:"size",scope:"sm, md, lg, xl",description:"Space element widtrh and height space"}];return(0,r.jsx)(x,{topBar:(0,r.jsx)(l.TopBar,{}),menu:(0,r.jsx)(l.DesktopMenu,{}),sideBar:(0,r.jsx)(e,{}),body:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.T,{}),(0,r.jsx)(h,{size:"xxl",title:"HStack component"}),(0,r.jsx)(c.M,{title:"The basic component that organizes the displayed content as horizontal stack",subTitle:"HStack maintains default spacing, so the projected view will be equal"}),(0,r.jsx)(n.T,{}),(0,r.jsx)(i.xv,{size:"xs",children:"Default HStack is horizontal list with default inner spacing"}),(0,r.jsxs)(n.rj,{className:"grid-cols-2",children:[(0,r.jsxs)(n.Ug,{className:"border",children:[(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"First child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"Second child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(i.EK,{border:!0,size:"sm",children:["<HStack\n","  <Text>First child</Text>\n","  <Text>...</Text>\n","</HStack>"]})]}),(0,r.jsx)(n.T,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.xv,{size:"xs",children:"HStack acceplable tailwind classes to organise display behavior like width or align."}),(0,r.jsx)(i.xv,{size:"xs",children:"The philosophy of an element is to separate spaces like margins and paddings"})]}),(0,r.jsxs)(n.rj,{className:"grid-cols-2",children:[(0,r.jsxs)(n.Ug,{className:"border justify-between",children:[(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"First child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"Second child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(i.EK,{border:!0,size:"sm",children:['<HStack className="justify-between">\n',"  <Text>First child</Text>\n","  <Text>...</Text>\n","</HStack>"]})]}),(0,r.jsx)(n.T,{}),(0,r.jsx)(i.xv,{size:"xs",children:"HStack with children display rules"}),(0,r.jsxs)(n.rj,{className:"grid-cols-2",children:[(0,r.jsxs)(n.Ug,{className:"border",children:[(0,r.jsx)(i.xv,{className:"bg-slate-200 flex-1 border border-dotted",children:"First child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 flex-1 border border-dotted",children:"Second child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 flex-1 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(i.EK,{border:!0,size:"sm",children:["<HStack>\n",'  <Text className="flex-1">First child</Text>\n','  <Text className="flex-1">...</Text>\n',"</HStack>"]})]}),(0,r.jsx)(n.T,{}),(0,r.jsx)(i.xv,{size:"xs",children:"HStack horizontal centered"}),(0,r.jsxs)(n.rj,{className:"grid-cols-2",children:[(0,r.jsxs)(n.Ug,{className:"border items-center",children:[(0,r.jsx)(i.xv,{className:"bg-slate-200 flex-1 border border-dotted",children:"First child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 flex-1 border border-dotted",children:"Second child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 flex-1 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(i.EK,{border:!0,size:"sm",children:['<HStack className="items-center">\n','  <Text className="flex-1">First child</Text>\n','  <Text className="flex-1">...</Text>\n',"</HStack>"]})]}),(0,r.jsx)(n.T,{size:"xxl"}),(0,r.jsx)(h,{size:"xxl",title:"VStack component"}),(0,r.jsx)(c.M,{title:"The basic component that organizes the displayed content as vertical stack",subTitle:"VStack maintains default spacing, so the projected view will be equal"}),(0,r.jsx)(n.T,{}),(0,r.jsx)(i.xv,{size:"xs",children:"Default VStack is vertical list with default inner spacing"}),(0,r.jsxs)(n.rj,{className:"grid-cols-2",children:[(0,r.jsxs)(n.gC,{className:"border",children:[(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"First child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"Second child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(i.EK,{border:!0,size:"sm",children:["<VStack\n","  <Text>First child</Text>\n","  <Text>...</Text>\n","  <Text>...</Text>\n","</VStack>"]})]}),(0,r.jsx)(n.T,{}),(0,r.jsx)(i.xv,{size:"xs",children:"Change VStack spacing"}),(0,r.jsxs)(n.rj,{className:"grid-cols-2",children:[(0,r.jsxs)(n.gC,{spacing:"xl",className:"border",children:[(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"First child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"Second child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(i.EK,{border:!0,size:"sm",children:['<VStack spacing="xl">\n',"  <Text>First child</Text>\n","  <Text>...</Text>\n","  <Text>...</Text>\n","</VStack>"]})]}),(0,r.jsx)(n.T,{}),(0,r.jsx)(i.xv,{size:"xs",children:"Reset VStack spacing"}),(0,r.jsxs)(n.rj,{className:"grid-cols-2",children:[(0,r.jsxs)(n.gC,{spacing:"none",className:"border",children:[(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"First child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"Second child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted",children:"Third child"})]}),(0,r.jsxs)(i.EK,{border:!0,size:"sm",children:['<VStack spacing="xl">\n',"  <Text>First child</Text>\n","  <Text>...</Text>\n","  <Text>...</Text>\n","</VStack>"]})]}),(0,r.jsx)(n.T,{}),(0,r.jsx)(i.xv,{size:"xs",children:"VStack with centered children"}),(0,r.jsxs)(n.rj,{className:"grid-cols-2",children:[(0,r.jsxs)(n.gC,{spacing:"none",className:"items-center border",children:[(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"First child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"Second child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"Third child"})]}),(0,r.jsxs)(i.EK,{border:!0,size:"sm",children:['<VStack spacing="none" className="items-center">\n','  <Text className="flex-1">First child</Text>\n','  <Text className="flex-1">...</Text>\n','  <Text className="flex-1">...</Text>\n',"</VStack>"]})]}),(0,r.jsx)(n.T,{size:"xxl"}),(0,r.jsx)(h,{size:"xxl",title:"Grid component"}),(0,r.jsx)(c.M,{title:"The basic component that organizes the displayed content as grid",subTitle:"Space maintains default spacing, so the projected view will be equal"}),(0,r.jsx)(n.T,{}),(0,r.jsx)(i.xv,{size:"xs",children:"VStack with centered children"}),(0,r.jsxs)(n.rj,{className:"grid-cols-2",children:[(0,r.jsxs)(n.gC,{spacing:"none",className:"items-center border",children:[(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"First child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"Second child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"Third child"})]}),(0,r.jsxs)(i.EK,{border:!0,size:"sm",children:['<VStack spacing="none" className="items-center">\n','  <Text className="flex-1">First child</Text>\n','  <Text className="flex-1">...</Text>\n','  <Text className="flex-1">...</Text>\n',"</VStack>"]})]}),(0,r.jsx)(n.T,{size:"xxl"}),(0,r.jsx)(h,{size:"xxl",title:"Space component"}),(0,r.jsx)(c.M,{title:"The basic component that organizes the displayed content",subTitle:"Space maintains default spacing, so the projected view will be equal"}),(0,r.jsx)(n.T,{}),(0,r.jsx)(i.xv,{size:"xs",children:"VStack with centered children"}),(0,r.jsxs)(n.rj,{className:"grid-cols-2",children:[(0,r.jsxs)(n.gC,{spacing:"none",className:"items-center border",children:[(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"First child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"Second child"}),(0,r.jsx)(i.xv,{className:"bg-slate-200 border border-dotted flex-1",children:"Third child"})]}),(0,r.jsxs)(i.EK,{border:!0,size:"sm",children:['<VStack spacing="none" className="items-center">\n','  <Text className="flex-1">First child</Text>\n','  <Text className="flex-1">...</Text>\n','  <Text className="flex-1">...</Text>\n',"</VStack>"]})]}),(0,r.jsx)(n.T,{size:"xxl"})]})})};u.getInitialProps=function(){return{}},s.default=u},5152:function(e,s,t){e.exports=t(638)},3250:function(e,s,t){"use strict";var r=t(7294);var n="function"===typeof Object.is?Object.is:function(e,s){return e===s&&(0!==e||1/e===1/s)||e!==e&&s!==s},i=r.useState,l=r.useEffect,a=r.useLayoutEffect,d=r.useDebugValue;function c(e){var s=e.getSnapshot;e=e.value;try{var t=s();return!n(e,t)}catch(r){return!0}}var o="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,s){return s()}:function(e,s){var t=s(),r=i({inst:{value:t,getSnapshot:s}}),n=r[0].inst,o=r[1];return a((function(){n.value=t,n.getSnapshot=s,c(n)&&o({inst:n})}),[e,t,s]),l((function(){return c(n)&&o({inst:n}),e((function(){c(n)&&o({inst:n})}))}),[e]),d(t),t};s.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:o},1688:function(e,s,t){"use strict";e.exports=t(3250)}},function(e){e.O(0,[774,888,179],(function(){return s=4777,e(e.s=s);var s}));var s=e.O();_N_E=s}]);