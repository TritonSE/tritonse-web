(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8+s/":function(e,t,A){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}A("sc67"),A("AqHK"),A("pJf4"),A("pS08"),A("R48M");var r=A("q1tI"),a=n(r),o=n(A("Gytx"));function i(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,A){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==A&&"function"!=typeof A)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):A&&(s=A(s))}var f=function(e){var t,A;function r(){return e.apply(this,arguments)||this}A=e,(t=r).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,r.peek=function(){return s},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=r.prototype;return i.shouldComponentUpdate=function(e){return!o(e,this.props)},i.componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return a.createElement(n,this.props)},r}(r.Component);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},B4qf:function(e,t,A){},Gytx:function(e,t,A){A("n7j8"),A("rzGZ"),A("Dq+y"),A("8npG"),A("Ggvi"),e.exports=function(e,t,A,n){var r=A?A.call(n,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var s=a[c];if(!i(s))return!1;var l=e[s],u=t[s];if(!1===(r=A?A.call(n,l,u,s):void 0)||void 0===r&&l!==u)return!1}return!0}},MCz9:function(e,t){e.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABMLAAATCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEkrGABJKxgASSsYB0krGBBJKxgQSSsYB0krGABJKxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJKxgASSsYAUkrGGBJKxivSSsYr0krGGBJKxgBSSsYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSsYAEkrGDdJKxiwSSsYwUkrGMFJKxiwSSsYN0krGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASSsYAEkrGABJKxhVSSsYwUcvH8VHLx/FSSsYwUkrGFVJKxgASSsYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEkrGABJKxgDSSsYmUsnEVgnbYh1J22IdUsnEVhJKxiZSSsYA0krGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJKxgASSsYIEkrGKlUFQAUE5XLWhOVy1pUFQAUSSsYqUkrGCBJKxgAAAAAAAAAAAAAAAAAAAAAAAAAAABJKxgASSsYAUkrGHxJKxh5JXSSABSSxlwUksZbJXSSAEkrGHlJKxh8SSsYAUkrGAAAAAAAAAAAAAAAAAAAAAAASSsYAEkrGCtJKxiqRy8fGROTyGcUksasFJLGrBOTyGhGMCAZSSsYqkkrGCtJKxgAAAAAAAAAAAAAAAAAAAAAAEkrGABJKxhdSSsYfv8AAAAUksaEFJLGmRSSxpgUksaE/wAAAEkrGH5JKxhdSSsYAAAAAAAAAAAAAAAAAAAAAABJKxgASSsYZkkqF3IBtv8LFJLGYRSSxmYUksZmFJLGYQK0/wxJKhdySSsYZkkrGAAAAAAAAAAAAAAAAAAAAAAASSsYAEkrGENJKxiZPz85BwDd/wEUksZDFJLGQwDi/wE/PzoHSSsYmUkrGENJKxgAAAAAAAAAAAAAAAAAAAAAAEkrGABJKxgNSSsYn0krGFxUFgABAND/AgDQ/wJUFgABSSsYXEkrGJ9JKxgNSSsYAAAAAAAAAAAAAAAAAAAAAABJKxgASSsYAEkrGClJKxilSSsYiUkrGE5JKxhOSSsYiUkrGKVJKxgpSSsYAEkrGAAAAAAAAAAAAAAAAAAAAAAAAAAAAEkrGABJKxgASSsYFUkrGF1JKxiISSsYiEkrGF1JKxgVSSsYAEkrGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAPw/AAD4HwAA+B8AAPgfAADwDwAA8A8AAOJHAADgBwAA5CcAAOAHAADgBwAA4AcAAPAPAAD4HwAA//8AAA=="},RMg3:function(e,t,A){"use strict";A("E5k/");var n=A("dtL7"),r=A("q1tI"),a=A.n(r),o=A("Wbzz"),i=A("9eSz"),c=A.n(i),s=A("2KwV");A("v/L3"),A("vXu+"),A("gma1");var l=function(e){var t,A;function n(){return e.apply(this,arguments)||this}A=e,(t=n).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A;var r=n.prototype;return r.componentDidMount=function(){Object(s.a)();var e=document.querySelectorAll(".dropdown-trigger");M.Dropdown.init(e,{coverTrigger:!1})},r.render=function(){var e=this.props,t=e.data,A=e.gradient,n=A?"white-text":"navy-text",r=A?"navy":"white",i=A?t.ylogo.childImageSharp.fluid:t.blogo.childImageSharp.fluid;return a.a.createElement("div",null,a.a.createElement("ul",{id:"tse-navbar-dropdown",className:"dropdown-content "+r},a.a.createElement("li",null,a.a.createElement("a",{href:"/students"},a.a.createElement("span",{className:"tse-navbar-dropdown-item "+n},"Students"))),a.a.createElement("li",null,a.a.createElement("a",{href:"/nonprofits"},a.a.createElement("span",{className:"tse-navbar-dropdown-item "+n},"Nonprofits")))),a.a.createElement("nav",{className:r},a.a.createElement("div",{className:"nav-wrapper container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col s6"},a.a.createElement(o.Link,{to:"/"},a.a.createElement(c.a,{fluid:i,className:"tse-navbar-logo"}))),a.a.createElement("div",{className:"col s6 show-on-medium-and-down"},a.a.createElement("a",{href:"#!","data-target":"tse-mobile-menu",className:"sidenav-trigger right "+n},a.a.createElement("i",{className:"material-icons"},"menu"))),a.a.createElement("div",{className:"col s6 hide-on-med-and-down"},a.a.createElement("ul",{className:"right"},a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/"},a.a.createElement("span",{className:"tse-navbar-link "+n},"Home"))),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/about"},a.a.createElement("span",{className:"tse-navbar-link "+n},"About"))),a.a.createElement("li",null,a.a.createElement(o.Link,{to:"/projects"},a.a.createElement("span",{className:"tse-navbar-link "+n},"Projects"))),a.a.createElement("li",null,a.a.createElement("a",{className:"dropdown-trigger",href:"#!","data-target":"tse-navbar-dropdown"},a.a.createElement("span",{className:"tse-navbar-link "+n},"Connect")))))))),a.a.createElement("ul",{className:"sidenav "+r,id:"tse-mobile-menu"},a.a.createElement("li",null,a.a.createElement("a",{href:"/",className:n},a.a.createElement("span",{className:"tse-text-medium"},"Home"))),a.a.createElement("li",null,a.a.createElement("a",{href:"/about",className:n},a.a.createElement("span",{className:"tse-text-medium"},"About"))),a.a.createElement("li",null,a.a.createElement("a",{href:"/projects",className:n},a.a.createElement("span",{className:"tse-text-medium"},"Projects"))),a.a.createElement("li",null,a.a.createElement("a",{href:"/apply",className:n},a.a.createElement("span",{className:"tse-text-medium"},"Connect")))))},n}(a.a.Component);t.a=function(e){return a.a.createElement(o.StaticQuery,{query:"2302440080",render:function(t){return a.a.createElement(l,Object.assign({data:t},e))},data:n})}},TJpk:function(e,t,A){A("MIFh"),A("wZFJ"),A("rzGZ"),A("Dq+y"),A("8npG"),A("Ggvi"),A("JHok"),A("LagC"),A("pS08"),A("sc67"),A("R48M"),A("E5k/"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&(e[n]=A[n])}return e},r=function(){function e(e,t){for(var A=0;A<t.length;A++){var n=t[A];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,A,n){return A&&e(t.prototype,A),n&&e(t,n),t}}(),a=u(A("q1tI")),o=u(A("17x9")),i=u(A("8+s/")),c=u(A("bmMU")),s=A("v1p5"),l=A("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var A={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(A[n]=e[n]);return A}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,d,S,m=(0,i.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),g=(E=m,S=d=function(e){function t(){return T(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,A=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return n({},r,((t={})[A.type]=[].concat(r[A.type]||[],[n({},a,this.mapNestedChildrenToProps(A,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,A,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case l.TAG_NAMES.TITLE:return n({},a,((t={})[r.type]=i,t.titleAttributes=n({},o),t));case l.TAG_NAMES.BODY:return n({},a,{bodyAttributes:n({},o)});case l.TAG_NAMES.HTML:return n({},a,{htmlAttributes:n({},o)})}return n({},a,((A={})[r.type]=n({},o),A))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var A=n({},t);return Object.keys(e).forEach((function(t){var r;A=n({},A,((r={})[t]=e[t],r))})),A},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var A=this,n={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,a=r.children,o=f(r,["children"]),i=(0,s.convertReactPropstoHtmlAttributes)(o);switch(A.warnOnInvalidChildren(e,a),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:n=A.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=A.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,A=f(e,["children"]),r=n({},A);return t&&(r=this.mapChildrenToProps(t,r)),a.default.createElement(E,r)},r(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(a.default.Component),d.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=E.peek,d.rewind=function(){var e=E.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},S);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},bmMU:function(e,t,A){"use strict";A("pJf4"),A("Ll4R"),A("q8oJ"),A("C9fy"),A("klQ5"),A("rzGZ"),A("Dq+y"),A("8npG"),A("Ggvi"),A("MIFh");var n=Array.isArray,r=Object.keys,a=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,A){if(t===A)return!0;if(t&&A&&"object"==typeof t&&"object"==typeof A){var i,c,s,l=n(t),u=n(A);if(l&&u){if((c=t.length)!=A.length)return!1;for(i=c;0!=i--;)if(!e(t[i],A[i]))return!1;return!0}if(l!=u)return!1;var f=t instanceof Date,T=A instanceof Date;if(f!=T)return!1;if(f&&T)return t.getTime()==A.getTime();var p=t instanceof RegExp,E=A instanceof RegExp;if(p!=E)return!1;if(p&&E)return t.toString()==A.toString();var d=r(t);if((c=d.length)!==r(A).length)return!1;for(i=c;0!=i--;)if(!a.call(A,d[i]))return!1;if(o&&t instanceof Element&&A instanceof Element)return t===A;for(i=c;0!=i--;)if(!("_owner"===(s=d[i])&&t.$$typeof||e(t[s],A[s])))return!1;return!0}return t!=t&&A!=A}(e,t)}catch(A){if(A.message&&A.message.match(/stack|recursion/i)||-2146828260===A.number)return console.warn("Warning: react-fast-compare does not handle circular references.",A.name,A.message),!1;throw A}}},dtL7:function(e){e.exports=JSON.parse('{"data":{"ylogo":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAACxLAAAsSwGlPZapAAAByklEQVQ4y52UTStEYRTH78xcFiyVDCFTPgAfQ5IshtREyppko0hpLLzkNXaElKxJc+9YyMZ2wkjMy85CxEfwPzP/ZzquO7fJrV/3f8859zznueeex7LUlXctq+CGjA4V0qGQ5bnEBl+4pBEr7/hepWTpSrKwssfAEIkpe5gL+Cc1RhOIewdwwDu4I6Jd0OmJrVqlCegGH+AURJU/Ck7Ap8Tod56vVKLs5e9VoDNg16q+8JbEiC5el7f8p0pVXR8oAlv5JsC4eo4wpt/7zXWFNp2r4Ix6gE1ZBkugCwzSdw7W2Bg753oSipGBe+CAehjsg1kwBXZAgr5D8TFhxG/LEd6nwQ11C3gCt+Reuk+fPM+Yd58uVbLHi/KPTGcb+Aa9oIlVpUEKbINm0AO+QLsZAr9vKKWbxiTBg6p+HsypZ6k0qbebcwJ+7pdUSefAGO3rYIU6AfIvzt8JqzIpleZsqG4vggXqM7DJWbYDJ4VzaZozAt5AHFxz5OK0jZpmFGS7QQeEmukGcMSpMV0WfQwavfFWwFiZex0PhywTZail0noT++rUkFAlbWWCeyILtNZcnbdKavlukyTuF1Prln3/LX2g/ispTxZNYLIfniCXCYOk74gAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/dde97d39c0fe52f4ca4ca9b20f6e30a4/31987/logo-yellow.png","srcSet":"/static/dde97d39c0fe52f4ca4ca9b20f6e30a4/e1953/logo-yellow.png 250w,\\n/static/dde97d39c0fe52f4ca4ca9b20f6e30a4/46604/logo-yellow.png 500w,\\n/static/dde97d39c0fe52f4ca4ca9b20f6e30a4/31987/logo-yellow.png 1000w,\\n/static/dde97d39c0fe52f4ca4ca9b20f6e30a4/6aba9/logo-yellow.png 1484w","sizes":"(max-width: 1000px) 100vw, 1000px"}}},"blogo":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAACxLAAAsSwGlPZapAAABzklEQVQ4y52UzytEURTH78xgNuxshKJI1rJTZmYpUWYkJYuJvWLBRibRPD/KlDI2WCGsWCksZPwYb1ImUppCFlKS+AN8j86djpn33sitT+d777n3vHPvue8qJZp/xlSB2ZTWbmiXymk0Rj7WP2ssW24wMV4HQky9GHcOGuBBPRG2BhyAN5BiSB+C2py5tlnqCQ3gHWyCKuGvBOvgAzT+WmOY+VsWOg2WlLL98CK4kWs7NtK22bWDZ1AifIMgnO0bZjHP6WS/x+qrRWznwTbrLioEMECEdZB9OzSXC+Ox2rIOGAdrrHvBChgFQ+wLs29VHwsCuvMKo9OGHQYJUYR76oNTcK2vDuwZGHHK0MW2GnyBZlAOlsER2KeMQAVoAp90teRaq4utCzMN7vzR7EcmwBhpn3FB/Vs6V52d7V3MZolA0I/ivBZ0ANh+8IQtuuUf1jp1aX0PRXFiYIv1JBgX1Y0Vzs5IqsBcShaHKvwCevgXpDPsBq+gTxeSgjk+ECLTUsoQZMAVk+GxstwHRTn8Vtp6wS44B8cM6T2cn1fP9UXNwgFFUHpxTsADkxBXxX6rdlm2xZOkg2CACVk9Jn/dsmqJ5C/iwv0/KFdS4hjsGxvFld9oq/YzAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/4aec7ca2b159b351e147f0089d3e8202/31987/logo-blue.png","srcSet":"/static/4aec7ca2b159b351e147f0089d3e8202/e1953/logo-blue.png 250w,\\n/static/4aec7ca2b159b351e147f0089d3e8202/46604/logo-blue.png 500w,\\n/static/4aec7ca2b159b351e147f0089d3e8202/31987/logo-blue.png 1000w,\\n/static/4aec7ca2b159b351e147f0089d3e8202/0dadc/logo-blue.png 1500w,\\n/static/4aec7ca2b159b351e147f0089d3e8202/241f9/logo-blue.png 1532w","sizes":"(max-width: 1000px) 100vw, 1000px"}}}}}')},"hFT/":function(e,t,A){A("U6Bt"),A("rzGZ"),A("Dq+y"),A("8npG"),A("Ggvi"),A("AqHK"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},ug1A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Triton Software Engineering","description":"Organization at UCSD that partners with nonprofits to develop applications for social good","author":"David Hacker"}}}}')},"v/L3":function(e,t,A){},v1p5:function(e,t,A){(function(e){A("wZFJ"),A("HQhv"),A("1dPr"),A("JHok"),A("MIFh"),A("sc67"),A("rzGZ"),A("Dq+y"),A("8npG"),A("Ggvi"),A("OeI1"),A("AqHK"),A("U6Bt"),A("sC2a"),A("E5k/"),A("m210"),A("4DPX"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&(e[n]=A[n])}return e},a=c(A("q1tI")),o=c(A("MgzW")),i=A("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var s,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},u=function(e){var t=d(e,i.TAG_NAMES.TITLE),A=d(e,i.HELMET_PROPS.TITLE_TEMPLATE);if(A&&t)return A.replace(/%s/g,(function(){return t}));var n=d(e,i.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return d(e,i.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return r({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[i.TAG_NAMES.BASE]})).map((function(e){return e[i.TAG_NAMES.BASE]})).reverse().reduce((function(t,A){if(!t.length)for(var n=Object.keys(A),r=0;r<n.length;r++){var a=n[r].toLowerCase();if(-1!==e.indexOf(a)&&A[a])return t.concat(A)}return t}),[])},E=function(e,t,A){var r={};return A.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,A){var n={};A.filter((function(e){for(var A=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],s=c.toLowerCase();-1===t.indexOf(s)||A===i.TAG_PROPERTIES.REL&&"canonical"===e[A].toLowerCase()||s===i.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(A=s),-1===t.indexOf(c)||c!==i.TAG_PROPERTIES.INNER_HTML&&c!==i.TAG_PROPERTIES.CSS_TEXT&&c!==i.TAG_PROPERTIES.ITEM_PROP||(A=c)}if(!A||!e[A])return!1;var l=e[A].toLowerCase();return r[A]||(r[A]={}),n[A]||(n[A]={}),!r[A][l]&&(n[A][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(n),c=0;c<a.length;c++){var s=a[c],l=(0,o.default)({},r[s],n[s]);r[s]=l}return e}),[]).reverse()},d=function(e,t){for(var A=e.length-1;A>=0;A--){var n=e[A];if(n.hasOwnProperty(t))return n[t]}return null},S=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){S(e)}),0)}),m=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||S:e.requestAnimationFrame||S,h="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,v=function(e,t){var A=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,T=e.titleAttributes;R(i.TAG_NAMES.BODY,n),R(i.TAG_NAMES.HTML,r),C(f,T);var p={baseTag:G(i.TAG_NAMES.BASE,A),linkTags:G(i.TAG_NAMES.LINK,a),metaTags:G(i.TAG_NAMES.META,o),noscriptTags:G(i.TAG_NAMES.NOSCRIPT,c),scriptTags:G(i.TAG_NAMES.SCRIPT,l),styleTags:G(i.TAG_NAMES.STYLE,u)},E={},d={};Object.keys(p).forEach((function(e){var t=p[e],A=t.newTags,n=t.oldTags;A.length&&(E[e]=A),n.length&&(d[e]=p[e].oldTags)})),t&&t(),s(e,E,d)},w=function(e){return Array.isArray(e)?e.join(""):e},C=function(e,t){void 0!==e&&document.title!==e&&(document.title=w(e)),R(i.TAG_NAMES.TITLE,t)},R=function(e,t){var A=document.getElementsByTagName(e)[0];if(A){for(var n=A.getAttribute(i.HELMET_ATTRIBUTE),r=n?n.split(","):[],a=[].concat(r),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";A.getAttribute(s)!==l&&A.setAttribute(s,l),-1===r.indexOf(s)&&r.push(s);var u=a.indexOf(s);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)A.removeAttribute(a[f]);r.length===a.length?A.removeAttribute(i.HELMET_ATTRIBUTE):A.getAttribute(i.HELMET_ATTRIBUTE)!==o.join(",")&&A.setAttribute(i.HELMET_ATTRIBUTE,o.join(","))}},G=function(e,t){var A=document.head||document.querySelector(i.TAG_NAMES.HEAD),n=A.querySelectorAll(e+"["+i.HELMET_ATTRIBUTE+"]"),r=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var A=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===i.TAG_PROPERTIES.INNER_HTML)A.innerHTML=t.innerHTML;else if(n===i.TAG_PROPERTIES.CSS_TEXT)A.styleSheet?A.styleSheet.cssText=t.cssText:A.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];A.setAttribute(n,c)}A.setAttribute(i.HELMET_ATTRIBUTE,"true"),r.some((function(e,t){return o=t,A.isEqualNode(e)}))?r.splice(o,1):a.push(A)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return A.appendChild(e)})),{oldTags:r,newTags:a}},_=function(e){return Object.keys(e).reduce((function(t,A){var n=void 0!==e[A]?A+'="'+e[A]+'"':""+A;return t?t+" "+n:n}),"")},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,A){return t[i.REACT_TAG_MAP[A]||A]=e[A],t}),t)},P=function(e,t,A){switch(e){case i.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,A=t.titleAttributes,(n={key:e})[i.HELMET_ATTRIBUTE]=!0,r=O(A,n),[a.default.createElement(i.TAG_NAMES.TITLE,r,e)];var e,A,n,r},toString:function(){return function(e,t,A,n){var r=_(A),a=w(t);return r?"<"+e+" "+i.HELMET_ATTRIBUTE+'="true" '+r+">"+l(a,n)+"</"+e+">":"<"+e+" "+i.HELMET_ATTRIBUTE+'="true">'+l(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,A)}};case i.ATTRIBUTE_NAMES.BODY:case i.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(t)},toString:function(){return _(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,A){var n,r=((n={key:A})[i.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var A=i.REACT_TAG_MAP[e]||e;if(A===i.TAG_PROPERTIES.INNER_HTML||A===i.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[A]=t[e]})),a.default.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,A){return t.reduce((function(t,n){var r=Object.keys(n).filter((function(e){return!(e===i.TAG_PROPERTIES.INNER_HTML||e===i.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var r=void 0===n[t]?t:t+'="'+l(n[t],A)+'"';return e?e+" "+r:r}),""),a=n.innerHTML||n.cssText||"",o=-1===i.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+i.HELMET_ATTRIBUTE+'="true" '+r+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,A)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,A){return t[i.HTML_TAG_MAP[A]||A]=e[A],t}),t)},t.handleClientStateChange=function(e){b&&h(b),e.defer?b=g((function(){v(e,(function(){b=null}))})):(v(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,A=e.bodyAttributes,n=e.encode,r=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,T=e.titleAttributes;return{base:P(i.TAG_NAMES.BASE,t,n),bodyAttributes:P(i.ATTRIBUTE_NAMES.BODY,A,n),htmlAttributes:P(i.ATTRIBUTE_NAMES.HTML,r,n),link:P(i.TAG_NAMES.LINK,a,n),meta:P(i.TAG_NAMES.META,o,n),noscript:P(i.TAG_NAMES.NOSCRIPT,c,n),script:P(i.TAG_NAMES.SCRIPT,s,n),style:P(i.TAG_NAMES.STYLE,l,n),title:P(i.TAG_NAMES.TITLE,{title:f,titleAttributes:T},n)}},t.reducePropsToState=function(e){return{baseTag:p([i.TAG_PROPERTIES.HREF],e),bodyAttributes:T(i.ATTRIBUTE_NAMES.BODY,e),defer:d(e,i.HELMET_PROPS.DEFER),encode:d(e,i.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(i.ATTRIBUTE_NAMES.HTML,e),linkTags:E(i.TAG_NAMES.LINK,[i.TAG_PROPERTIES.REL,i.TAG_PROPERTIES.HREF],e),metaTags:E(i.TAG_NAMES.META,[i.TAG_PROPERTIES.NAME,i.TAG_PROPERTIES.CHARSET,i.TAG_PROPERTIES.HTTPEQUIV,i.TAG_PROPERTIES.PROPERTY,i.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(i.TAG_NAMES.NOSCRIPT,[i.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:E(i.TAG_NAMES.SCRIPT,[i.TAG_PROPERTIES.SRC,i.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(i.TAG_NAMES.STYLE,[i.TAG_PROPERTIES.CSS_TEXT],e),title:u(e),titleAttributes:T(i.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=y}).call(this,A("yLpj"))},vrFN:function(e,t,A){"use strict";var n=A("ug1A"),r=A("q1tI"),a=A.n(r),o=A("TJpk"),i=A.n(o),c=A("Wbzz"),s=A("MCz9"),l=A.n(s);function u(e){var t=e.description,A=e.lang,r=e.meta,o=e.keywords,s=e.title;return a.a.createElement(c.StaticQuery,{query:f,render:function(e){var n=t||e.site.siteMetadata.description;return a.a.createElement(i.a,{htmlAttributes:{lang:A},title:s,titleTemplate:"%s — "+e.site.siteMetadata.title,meta:[{name:"description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)},a.a.createElement("link",{rel:"shortcut icon",href:l.a}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap",rel:"stylesheet"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}))},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},t.a=u;var f="3128451518"}}]);
//# sourceMappingURL=7c9a5f5cadc682c06ad5a02c789f81e3550affe8-a2de2a1a3417f1197102.js.map