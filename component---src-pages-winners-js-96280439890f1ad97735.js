(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"F+Vk":function(e,a,t){},Oy0q:function(e,a,t){},enrp:function(e,a,t){e.exports=t.p+"static/logo-yellow-dde97d39c0fe52f4ca4ca9b20f6e30a4.png"},xm8k:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return d}));t("zGcK"),t("pJf4"),t("v9g0");var n=t("q1tI"),r=t.n(n),o=(t("Oy0q"),t("F+Vk"),t("HQhv"),t("2KwV"));var c=function(e){var a,n;function c(){return e.apply(this,arguments)||this}n=e,(a=c).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var i=c.prototype;return i.componentDidMount=function(){Object(o.b)();var e=this.refs.canvas,a=e.getContext("2d");e.width=1600,e.height=1e3;var t="TritonSoftwareEngineering";t=t.split("");for(var n=e.width/12,r=[],c=0;c<n;c++)r[c]=1;function i(){a.fillStyle="rgba(0, 0, 0, 0.05)",a.fillRect(0,0,e.width,e.height),a.fillStyle="#34ace0",a.font="12px arial";for(var n=0;n<r.length;n++){var o=t[Math.floor(Math.random()*t.length)];a.fillText(o,12*n,12*r[n]),12*r[n]>e.height&&Math.random()>.975&&(r[n]=0),r[n]++}}setInterval(i,15)},i.render=function(){return r.a.createElement("section",{className:"header"},r.a.createElement("canvas",{ref:"canvas"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"img-container center-align wow bounceInDown","data-wow-duration":".6s","data-wow-delay":"0s"},r.a.createElement("img",{src:t("enrp"),className:"circle responsive-img",alt:"TSE"})),r.a.createElement("div",{className:"head-title wow fadeIn","data-wow-duration":".6s","data-wow-delay":"0s"},r.a.createElement("h3",{className:"center-align"}," TSE Hall of Fame")),r.a.createElement("div",{className:"head-content wow fadeIn","data-wow-duration":".6s","data-wow-delay":"0s"},r.a.createElement("h5",{className:"center-align"}," Since the 2019-2020 school year, TSE holds an annual tournament between project teams. Winners are immortalized forever on this page."))))))},c}(r.a.Component),i=t("9eSz"),s=t.n(i);var l=function(e){var a,t;function n(){return e.apply(this,arguments)||this}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var c=n.prototype;return c.componentDidMount=function(){Object(o.b)()},c.render=function(){return r.a.createElement("section",{className:"services"},r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"service-des center-align wow bounceInRight","data-wow-duration":".6s","data-wow-delay":"0.4s"},this.props.activity),this.props.winners.map((function(e){return r.a.createElement("div",{className:"row"},e.map((function(a,t){var n=12/e.length,o=t>=e.length/2;return r.a.createElement("div",{className:"col s12 m3 l"+n+" wow "+(o?"fadeInRight":"fadeInLeft"),"data-wow-duration":".6s","data-wow-delay":"0.4s"},r.a.createElement("div",{className:"card wow rollIn"},r.a.createElement("div",{className:"card-image service-img"},r.a.createElement(s.a,{fluid:a.image.childImageSharp.fluid,className:"tse-profile-image"})),r.a.createElement("div",{className:"card-block"},r.a.createElement("h5",{className:"service-des center-align"},a.name),r.a.createElement("div",{className:"service-divider"}),r.a.createElement("p",{className:"service-extra center-align"},a.position))))})))}))))},n}(r.a.Component),d=(t("W/9C"),a.default=function(e){var a=e.data,t=[];return a.allTseWinners.edges.forEach((function(e){var n=e.node;n.winners.forEach((function(e){var t=a.allTseMembers.edges.find((function(a){return a.node.name===e.name}));e.image=null==t?a.anonTseMember:t.node.image}));for(var r=n.winners,o=[],c=0;c<r.length;c+=4)o.push(r.slice(c,c+4));n.winners=o,t.push(n)})),t.sort((function(e,a){return a.ordering-e.ordering})),r.a.createElement("div",{className:"body"},r.a.createElement(c,null),t.map((function(e){return r.a.createElement(l,{key:e.id,winners:e.winners,activity:e.activity})})))},"3623808813")}}]);
//# sourceMappingURL=component---src-pages-winners-js-96280439890f1ad97735.js.map