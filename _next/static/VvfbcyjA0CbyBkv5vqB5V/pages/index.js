(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{210:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(211),{page:e.exports.default}})},211:function(e,t,n){"use strict";n.r(t);var r=n(235),i=n.n(r),o=n(0),s=n.n(o),a=n(241),u=n.n(a);t.default=function(){return s.a.createElement("div",{className:"jsx-1793393801 wrapper"},s.a.createElement(u.a,null,s.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css",className:"jsx-1793393801"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Quicksand",rel:"stylesheet",className:"jsx-1793393801"}),s.a.createElement("link",{rel:"stylesheet",href:"/static/base.css",className:"jsx-1793393801"})),s.a.createElement("section",{className:"jsx-1793393801"},s.a.createElement("h1",{className:"jsx-1793393801"},"Nelly Kiboi"),s.a.createElement("h2",{className:"jsx-1793393801"},"Hi there,",s.a.createElement("br",{className:"jsx-1793393801"}),"I am a software engineer from Kenya currently living in Brighton,United Kingdom .My interests range from technology to design.",s.a.createElement("br",{className:"jsx-1793393801"}),"I am also interested in software engineering,travel, and programming.",s.a.createElement("br",{className:"jsx-1793393801"}),"You can click the button above to view my repo.",s.a.createElement("br",{className:"jsx-1793393801"}),"If you’d like to get in touch, feel free to say hello through any of the social links below.")),s.a.createElement("h3",{className:"jsx-1793393801"},"Want to get into contact?"),s.a.createElement(i.a,{styleId:"1793393801",css:["body.jsx-1793393801{font-family:'Quicksand',sans-serif;color:#000000;margin:0;padding:0;font-weight:200;}",".wrapper.jsx-1793393801{position:fixed;top:15%;padding:5px;}","h1.jsx-1793393801,h2.jsx-1793393801,h3.jsx-1793393801{font-weight:200;}","h2.jsx-1793393801{font-size:1.3em;}",".item.jsx-1793393801{position:absolute;top:50%;left:120px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:left 0.4s ease-in-out;transition:left 0.4s ease-in-out;}","ul.jsx-1793393801{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;margin:0;}","li.jsx-1793393801{padding:10px;}","@media only screen and (min-width:600px){h2.jsx-1793393801{width:60%;}.wrapper.jsx-1793393801{padding-left:100px;}}"]}))}},222:function(e,t,n){"use strict";var r=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=y,t.default=void 0;var i=r(n(48)),o=r(n(7)),s=r(n(8)),a=r(n(16)),u=r(n(17)),l=r(n(18)),c=r(n(13)),f=r(n(0)),h=r(n(29)),d=r(n(223)),p=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return null}}]),t}(f.default.Component);(0,c.default)(p,"contextTypes",{headManager:h.default.object});var m="next-head";function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return[f.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var v=["name","httpEquiv","charSet","itemProp","property"],_=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var g=(0,d.default)(function(e){return e.map(function(e){return f.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return f.default.Fragment&&t.type===f.default.Fragment?e.concat(f.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(y("")).filter(Boolean).filter((t=new i.default,n=new i.default,r=new i.default,o={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var s=0,a=v.length;s<a;s++){var u=v[s];if(e.props.hasOwnProperty(u))if("charSet"===u){if(r.has(u))return!1;r.add(u)}else{var l=e.props[u],c=o[u]||new i.default;if(c.has(l)&&-1===_.indexOf(l))return!1;c.add(l),o[u]=c}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+m,r=e.key||t;return f.default.cloneElement(e,{key:r,className:n})});var t,n,r,o},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(p);t.default=g},223:function(e,t,n){"use strict";var r=n(19),i=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var i,y=new d.default;function v(r){i=e((0,h.default)(y)),_.canUseDOM?t.call(r,i):n&&(i=n(i))}var _=function(e){function t(e){var n;return(0,o.default)(this,t),n=(0,s.default)(this,(0,a.default)(t).call(this,e)),t.canUseDOM||(y.add((0,c.default)((0,c.default)(n))),v((0,c.default)((0,c.default)(n)))),n}return(0,l.default)(t,e),(0,u.default)(t,null,[{key:"peek",value:function(){return i}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=i;return i=void 0,y.clear(),e}}]),(0,u.default)(t,[{key:"componentDidMount",value:function(){y.add(this),v(this)}},{key:"componentDidUpdate",value:function(){v(this)}},{key:"componentWillUnmount",value:function(){y.delete(this),v(this)}},{key:"render",value:function(){return p.default.createElement(r,null,this.props.children)}}]),t}(p.Component);return(0,f.default)(_,"canUseDOM","undefined"!=typeof window),(0,f.default)(_,"contextTypes",r.contextTypes),(0,f.default)(_,"displayName","SideEffect(".concat((0,m.getDisplayName)(r),")")),_}};var o=i(n(7)),s=i(n(16)),a=i(n(17)),u=i(n(8)),l=i(n(18)),c=i(n(49)),f=i(n(13)),h=i(n(224)),d=i(n(48)),p=r(n(0)),m=n(24)},224:function(e,t,n){var r=n(225),i=n(226),o=n(234);e.exports=function(e){return r(e)||i(e)||o()}},225:function(e,t,n){var r=n(71);e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},226:function(e,t,n){var r=n(227),i=n(231);e.exports=function(e){if(i(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},227:function(e,t,n){e.exports=n(228)},228:function(e,t,n){n(23),n(229),e.exports=n(1).Array.from},229:function(e,t,n){"use strict";var r=n(12),i=n(2),o=n(25),s=n(85),a=n(86),u=n(41),l=n(230),c=n(67);i(i.S+i.F*!n(93)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,i,f,h=o(e),d="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,y=void 0!==m,v=0,_=c(h);if(y&&(m=r(m,p>2?arguments[2]:void 0,2)),null==_||d==Array&&a(_))for(n=new d(t=u(h.length));t>v;v++)l(n,v,y?m(h[v],v):h[v]);else for(f=_.call(h),n=new d;!(i=f.next()).done;v++)l(n,v,y?s(f,m,[i.value,v],!0):i.value);return n.length=v,n}})},230:function(e,t,n){"use strict";var r=n(9),i=n(31);e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},231:function(e,t,n){e.exports=n(232)},232:function(e,t,n){n(28),n(23),e.exports=n(233)},233:function(e,t,n){var r=n(45),i=n(5)("iterator"),o=n(27);e.exports=n(1).isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||o.hasOwnProperty(r(t))}},234:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},235:function(e,t,n){e.exports=n(236)},236:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.flush=function(){var e=a.cssRules();return a.flush(),e};var i,o=n(0),s=n(237);var a=new((i=s)&&i.__esModule?i:{default:i}).default,u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.prevProps={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.styleId!==e.styleId||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){a.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.styleId&&a.remove(this.prevProps),a.add(this.props),this.prevProps=this.props),null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return a.computeId(t,n)}).join(" ")}}]),t}();t.default=u},237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(238)),o=s(n(239));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!=typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return r(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=o,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join("\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),o=t+r;return e[o]||(e[o]="jsx-"+(0,i.default)(t+"-"+r)),e[o]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var n=this.computeId(e.styleId,e.dynamic);return{styleId:n,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(n,e)}):[this.computeSelector(n,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=a},238:function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},239:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var r=e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,o=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,u=void 0===a?r:a,l=t.isBrowser,c=void 0===l?"undefined"!=typeof window:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"==typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}return n(e,[{key:"setOptimizeForSpeed",value:function(e){s("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}]),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,n(240))},240:function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,l=[],c=!1,f=-1;function h(){c&&u&&(c=!1,u.length?l=u.concat(l):f=-1,l.length&&d())}function d(){if(!c){var e=a(h);c=!0;for(var t=l.length;t;){for(u=l,l=[];++f<t;)u&&u[f].run();f=-1,t=l.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||c||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},241:function(e,t,n){e.exports=n(222)}},[[210,1,0]]]);