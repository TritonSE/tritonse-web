(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var A=n("q1tI"),a=r(A),o=r(n("Gytx"));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),E.canUseDOM?t(l):n&&(l=n(l))}var E=function(e){var t,n;function A(){return e.apply(this,arguments)||this}n=e,(t=A).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,A.peek=function(){return l},A.rewind=function(){if(A.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=A.prototype;return i.shouldComponentUpdate=function(e){return!o(e,this.props)},i.componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},A}(A.Component);return i(E,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(E,"canUseDOM",c),E}}},B4qf:function(e,t,n){},BQTL:function(e,t,n){},Gytx:function(e,t){e.exports=function(e,t,n,r){var A=n?n.call(r,e,t):void 0;if(void 0!==A)return!!A;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!i(l))return!1;var s=e[l],u=t[l];if(!1===(A=n?n.call(r,s,u,l):void 0)||void 0===A&&s!==u)return!1}return!0}},H1Ta:function(e,t,n){},MCz9:function(e,t){e.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEkrGABJKxgASSsYB0krGBBJKxgQSSsYB0krGABJKxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJKxgASSsYAUkrGGBJKxivSSsYr0krGGBJKxgBSSsYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSsYAEkrGDdJKxiwSSsYwUkrGMFJKxiwSSsYN0krGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSsYAEkrGABJKxhVSSsYwUcvH8VHLx/FSSsYwUkrGFVJKxgASSsYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEkrGABJKxgDSSsYmUsnEVgnbYh1J22IdUsnEVhJKxiZSSsYA0krGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJKxgASSsYIEkrGKlUFQAUE5XLWhOVy1pUFQAUSSsYqUkrGCBJKxgAAAAAAAAAAAAAAAAAAAAAAAAAAABJKxgASSsYAUkrGHxJKxh5JXSSABSSxlwUksZbJXSSAEkrGHlJKxh8SSsYAUkrGAAAAAAAAAAAAAAAAAAAAAAASSsYAEkrGCtJKxiqRy8fGROTyGcUksasFJLGrBOTyGhGMCAZSSsYqkkrGCtJKxgAAAAAAAAAAAAAAAAAAAAAAEkrGABJKxhdSSsYfv8AAAAUksaEFJLGmRSSxpgUksaE/wAAAEkrGH5JKxhdSSsYAAAAAAAAAAAAAAAAAAAAAABJKxgASSsYZkkqF3IBtv8LFJLGYRSSxmYUksZmFJLGYQK0/wxJKhdySSsYZkkrGAAAAAAAAAAAAAAAAAAAAAAASSsYAEkrGENJKxiZPz85BwDd/wEUksZDFJLGQwDi/wE/PzoHSSsYmUkrGENJKxgAAAAAAAAAAAAAAAAAAAAAAEkrGABJKxgNSSsYn0krGFxUFgABAND/AgDQ/wJUFgABSSsYXEkrGJ9JKxgNSSsYAAAAAAAAAAAAAAAAAAAAAABJKxgASSsYAEkrGClJKxilSSsYiUkrGE5JKxhOSSsYiUkrGKVJKxgpSSsYAEkrGAAAAAAAAAAAAAAAAAAAAAAAAAAAAEkrGABJKxgASSsYFUkrGF1JKxiISSsYiEkrGF1JKxgVSSsYAEkrGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAPw/AAD4HwAA+B8AAPgfAADwDwAA8A8AAOJHAADgBwAA5CcAAOAHAADgBwAA4AcAAPAPAAD4HwAA//8AAA=="},RMg3:function(e,t,n){"use strict";var r=n("9Hrx"),A=n("q1tI"),a=n.n(A),o=n("Wbzz"),i=n("9eSz"),c=n.n(i),l=n("2KwV"),s=(n("v/L3"),n("vXu+"),n("gma1"),function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){Object(l.a)();var e=document.querySelectorAll(".dropdown-trigger");M.Dropdown.init(e,{coverTrigger:!1})},n.render=function(){var e=this.props,t=e.data,n=e.gradient,r=n?"white-text":"navy-text",A=n?"navy":"white",i=n?t.ylogo.childImageSharp.fluid:t.blogo.childImageSharp.fluid;return a.a.createElement("div",null,a.a.createElement("ul",{id:"tse-navbar-dropdown",className:"dropdown-content "+A},a.a.createElement("li",null,a.a.createElement("a",{href:"/students"},a.a.createElement("span",{className:"tse-navbar-dropdown-item "+r},"Students"))),a.a.createElement("li",null,a.a.createElement("a",{href:"/nonprofits"},a.a.createElement("span",{className:"tse-navbar-dropdown-item "+r},"Nonprofits")))),a.a.createElement("nav",{className:A},a.a.createElement("div",{className:"nav-wrapper container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col s6"},a.a.createElement(o.Link,{to:"/"},a.a.createElement(c.a,{fluid:i,className:"tse-navbar-logo"}))),a.a.createElement("div",{className:"col s6 show-on-medium-and-down"},a.a.createElement("a",{href:"#!","data-target":"tse-mobile-menu",className:"sidenav-trigger right "+r},a.a.createElement("i",{className:"material-icons"},"menu"))),a.a.createElement("div",{className:"col s6 hide-on-med-and-down"},a.a.createElement("ul",{className:"right"},a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/"},a.a.createElement("span",{className:"tse-navbar-link "+r},"Home"))),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/about"},a.a.createElement("span",{className:"tse-navbar-link "+r},"About"))),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/projects"},a.a.createElement("span",{className:"tse-navbar-link "+r},"Projects"))),a.a.createElement("li",null,a.a.createElement("a",{className:"dropdown-trigger",href:"#!","data-target":"tse-navbar-dropdown"},a.a.createElement("span",{className:"tse-navbar-link "+r},"Connect")))))))),a.a.createElement("ul",{className:"sidenav "+A,id:"tse-mobile-menu"},a.a.createElement("li",null,a.a.createElement("a",{href:"/",className:r},a.a.createElement("span",{className:"tse-text-medium"},"Home"))),a.a.createElement("li",null,a.a.createElement("a",{href:"/about",className:r},a.a.createElement("span",{className:"tse-text-medium"},"About"))),a.a.createElement("li",null,a.a.createElement("a",{href:"/projects",className:r},a.a.createElement("span",{className:"tse-text-medium"},"Projects"))),a.a.createElement("li",null,a.a.createElement("a",{href:"/apply",className:r},a.a.createElement("span",{className:"tse-text-medium"},"Connect")))))},t}(a.a.Component));t.a=function(e){return a.a.createElement(o.StaticQuery,{query:"2302440080",render:function(t){return a.a.createElement(s,Object.assign({data:t},e))}})}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=u(n("q1tI")),o=u(n("17x9")),i=u(n("8+s/")),c=u(n("bmMU")),l=n("v1p5"),s=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}function E(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,d,p,S=(0,i.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),h=(m=S,p=d=function(e){function t(){return f(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,A=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return r({},A,((t={})[n.type]=[].concat(A[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,A=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(A.type){case s.TAG_NAMES.TITLE:return r({},a,((t={})[A.type]=i,t.titleAttributes=r({},o),t));case s.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},o)});case s.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},o)})}return r({},a,((n={})[A.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var A;n=r({},n,((A={})[t]=e[t],A))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var A=e.props,a=A.children,o=E(A,["children"]),i=(0,l.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,a),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=E(e,["children"]),A=r({},n);return t&&(A=this.mapChildrenToProps(t,A)),a.default.createElement(m,A)},A(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(a.default.Component),d.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=m.peek,d.rewind=function(){var e=m.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},p);h.renderStatic=h.rewind,t.Helmet=h,t.default=h},"W/9C":function(e,t,n){"use strict";var r=n("q1tI"),A=n.n(r),a=n("Wbzz"),o=n("9eSz"),i=n.n(o),c=(n("BQTL"),n("vXu+"),n("gma1"),n("H1Ta"),function(e){var t=e.data;return A.a.createElement("div",null,A.a.createElement("div",{className:"tse-footer-semicircle"}),A.a.createElement("footer",{className:"page-footer navy"},A.a.createElement("div",{className:"container navy"},A.a.createElement("div",{className:"row"},A.a.createElement("div",{className:"col l6 s12"},A.a.createElement(a.Link,{to:"/"},A.a.createElement(i.a,{fluid:t.logo.childImageSharp.fluid,className:"tse-footer-logo"})),A.a.createElement("p",{className:"grey-text text-lighten-4"},"tse@ucsd.edu"),A.a.createElement("a",{href:"https://fb.com/tritonse",className:"tse-footer-social"},A.a.createElement("i",{className:"fa fa-facebook"})),A.a.createElement("a",{href:"https://linkedin.com/company/tritonsoftwareengineering/",className:"tse-footer-social"},A.a.createElement("i",{className:"fa fa-linkedin"})),A.a.createElement("a",{href:"https://github.com/tritonse",className:"tse-footer-social"},A.a.createElement("i",{className:"fa fa-github"}))),A.a.createElement("div",{className:"col l2 s12"},A.a.createElement("h5",{className:"white-text"},"General"),A.a.createElement("ul",null,A.a.createElement("li",null,A.a.createElement(a.Link,{to:"/about",className:"tse-footer-link"},"About")),A.a.createElement("li",null,A.a.createElement(a.Link,{to:"/projects",className:"tse-footer-link"},"Projects")))),A.a.createElement("div",{className:"col l2 s12"},A.a.createElement("h5",{className:"white-text"},"Students"),A.a.createElement("ul",null,A.a.createElement("li",null,A.a.createElement(a.Link,{to:"/students",className:"tse-footer-link"},"Apply")),A.a.createElement("li",null,A.a.createElement(a.Link,{to:"/students#faq",className:"tse-footer-link"},"FAQs")))),A.a.createElement("div",{className:"col l2 s12"},A.a.createElement("h5",{className:"white-text"},"Nonprofits"),A.a.createElement("ul",null,A.a.createElement("li",null,A.a.createElement(a.Link,{to:"/nonprofits",className:"tse-footer-link"},"Apply")),A.a.createElement("li",null,A.a.createElement(a.Link,{to:"/nonprofits#faq",className:"tse-footer-link"},"FAQs")))))),A.a.createElement("div",{className:"footer-copyright navy"})))});t.a=function(e){return A.a.createElement(a.StaticQuery,{query:"3325390646",render:function(t){return A.a.createElement(c,Object.assign({data:t},e))}})}},bmMU:function(e,t,n){"use strict";var r=Array.isArray,A=Object.keys,a=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var i,c,l,s=r(t),u=r(n);if(s&&u){if((c=t.length)!=n.length)return!1;for(i=c;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(s!=u)return!1;var E=t instanceof Date,f=n instanceof Date;if(E!=f)return!1;if(E&&f)return t.getTime()==n.getTime();var T=t instanceof RegExp,m=n instanceof RegExp;if(T!=m)return!1;if(T&&m)return t.toString()==n.toString();var d=A(t);if((c=d.length)!==A(n).length)return!1;for(i=c;0!=i--;)if(!a.call(n,d[i]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(i=c;0!=i--;)if(!("_owner"===(l=d[i])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},gma1:function(e,t,n){},"hFT/":function(e,t,n){n("RUBk"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},A=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(A).reduce((function(e,t){return e[A[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"v/L3":function(e,t,n){},v1p5:function(e,t,n){(function(e){n("RUBk"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n("q1tI")),o=c(n("YVoz")),i=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},u=function(e){var t=d(e,i.TAG_NAMES.TITLE),n=d(e,i.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,i.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},E=function(e){return d(e,i.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return A({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[i.TAG_NAMES.BASE]})).map((function(e){return e[i.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),A=0;A<r.length;A++){var a=r[A].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},m=function(e,t,n){var A={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],l=c.toLowerCase();-1===t.indexOf(l)||n===i.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===i.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==i.TAG_PROPERTIES.INNER_HTML&&c!==i.TAG_PROPERTIES.CSS_TEXT&&c!==i.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return A[n]||(A[n]={}),r[n]||(r[n]={}),!A[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),c=0;c<a.length;c++){var l=a[c],s=(0,o.default)({},A[l],r[l]);A[l]=s}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},p=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){p(e)}),0)}),S=function(e){return clearTimeout(e)},h="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||p:e.requestAnimationFrame||p,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:e.cancelAnimationFrame||S,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,b=function(e,t){var n=e.baseTag,r=e.bodyAttributes,A=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,E=e.title,f=e.titleAttributes;R(i.TAG_NAMES.BODY,r),R(i.TAG_NAMES.HTML,A),_(E,f);var T={baseTag:P(i.TAG_NAMES.BASE,n),linkTags:P(i.TAG_NAMES.LINK,a),metaTags:P(i.TAG_NAMES.META,o),noscriptTags:P(i.TAG_NAMES.NOSCRIPT,c),scriptTags:P(i.TAG_NAMES.SCRIPT,s),styleTags:P(i.TAG_NAMES.STYLE,u)},m={},d={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(d[e]=T[e].oldTags)})),t&&t(),l(e,m,d)},N=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=N(e)),R(i.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(i.HELMET_ATTRIBUTE),A=r?r.split(","):[],a=[].concat(A),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===A.indexOf(l)&&A.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var E=a.length-1;E>=0;E--)n.removeAttribute(a[E]);A.length===a.length?n.removeAttribute(i.HELMET_ATTRIBUTE):n.getAttribute(i.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(i.HELMET_ATTRIBUTE,o.join(","))}},P=function(e,t){var n=document.head||document.querySelector(i.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+i.HELMET_ATTRIBUTE+"]"),A=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===i.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===i.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(i.HELMET_ATTRIBUTE,"true"),A.some((function(e,t){return o=t,n.isEqualNode(e)}))?A.splice(o,1):a.push(n)})),A.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:A,newTags:a}},w=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[i.REACT_TAG_MAP[n]||n]=e[n],t}),t)},M=function(e,t,n){switch(e){case i.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[i.HELMET_ATTRIBUTE]=!0,A=O(n,r),[a.default.createElement(i.TAG_NAMES.TITLE,A,e)];var e,n,r,A},toString:function(){return function(e,t,n,r){var A=w(n),a=N(t);return A?"<"+e+" "+i.HELMET_ATTRIBUTE+'="true" '+A+">"+s(a,r)+"</"+e+">":"<"+e+" "+i.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case i.ATTRIBUTE_NAMES.BODY:case i.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,A=((r={key:n})[i.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=i.REACT_TAG_MAP[e]||e;if(n===i.TAG_PROPERTIES.INNER_HTML||n===i.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;A.dangerouslySetInnerHTML={__html:r}}else A[n]=t[e]})),a.default.createElement(e,A)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var A=Object.keys(r).filter((function(e){return!(e===i.TAG_PROPERTIES.INNER_HTML||e===i.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var A=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+A:A}),""),a=r.innerHTML||r.cssText||"",o=-1===i.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+i.HELMET_ATTRIBUTE+'="true" '+A+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[i.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){g&&y(g),e.defer?g=h((function(){b(e,(function(){g=null}))})):(b(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,A=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,E=void 0===u?"":u,f=e.titleAttributes;return{base:M(i.TAG_NAMES.BASE,t,r),bodyAttributes:M(i.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:M(i.ATTRIBUTE_NAMES.HTML,A,r),link:M(i.TAG_NAMES.LINK,a,r),meta:M(i.TAG_NAMES.META,o,r),noscript:M(i.TAG_NAMES.NOSCRIPT,c,r),script:M(i.TAG_NAMES.SCRIPT,l,r),style:M(i.TAG_NAMES.STYLE,s,r),title:M(i.TAG_NAMES.TITLE,{title:E,titleAttributes:f},r)}},t.reducePropsToState=function(e){return{baseTag:T([i.TAG_PROPERTIES.HREF],e),bodyAttributes:f(i.ATTRIBUTE_NAMES.BODY,e),defer:d(e,i.HELMET_PROPS.DEFER),encode:d(e,i.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(i.ATTRIBUTE_NAMES.HTML,e),linkTags:m(i.TAG_NAMES.LINK,[i.TAG_PROPERTIES.REL,i.TAG_PROPERTIES.HREF],e),metaTags:m(i.TAG_NAMES.META,[i.TAG_PROPERTIES.NAME,i.TAG_PROPERTIES.CHARSET,i.TAG_PROPERTIES.HTTPEQUIV,i.TAG_PROPERTIES.PROPERTY,i.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(i.TAG_NAMES.NOSCRIPT,[i.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:E(e),scriptTags:m(i.TAG_NAMES.SCRIPT,[i.TAG_PROPERTIES.SRC,i.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(i.TAG_NAMES.STYLE,[i.TAG_PROPERTIES.CSS_TEXT],e),title:u(e),titleAttributes:f(i.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=h,t.warn=v}).call(this,n("yLpj"))},"vXu+":function(e,t,n){},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),A=n.n(r),a=n("TJpk"),o=n.n(a),i=n("Wbzz"),c=n("MCz9"),l=n.n(c);function s(e){var t=e.description,n=e.lang,r=e.meta,a=e.keywords,c=e.title;return A.a.createElement(i.StaticQuery,{query:u,render:function(e){var i=t||e.site.siteMetadata.description;return A.a.createElement(o.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s — "+e.site.siteMetadata.title,meta:[{name:"description",content:i}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(r)},A.a.createElement("link",{rel:"shortcut icon",href:l.a}),A.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap",rel:"stylesheet"}),A.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}))}})}s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var u="3128451518"}}]);
//# sourceMappingURL=7c9a5f5cadc682c06ad5a02c789f81e3550affe8-b7862e618888e73bd8ed.js.map