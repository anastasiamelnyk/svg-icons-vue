(function(t){function e(e){for(var n,c,i=e[0],s=e[1],u=e[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={index:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/svg-icons-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;o.push([0,"chunk-vendors","chunk-common"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("18bc"),a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Page",[r("div",[r("h1",{staticClass:"main-page__header"},[r("IconInline",{ref:"iconInline",staticClass:"svg-icon",attrs:{iconName:"magic-wand",width:"150",height:"150"},nativeOn:{mouseenter:function(e){return t.magicWandMouseEnter(e)},mouseleave:function(e){return t.magicWandMouseLeave(e)}}}),t._v(" Perfect new year party recipe ")],1)])])},c=[],i=(r("a4d3"),r("4de4"),r("4160"),r("13d5"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3"));function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"app",computed:{magicWandIcon:function(){var t=this.$refs.iconInline,e=[".path1",".path4",".path2",".path5"],r=this.getBySelector(t.$el);return e.reduce((function(t,e,n){return u({},t,Object(i["a"])({},"star".concat(n+1,"rtl"),r(e)))}),{})}},methods:{getBySelector:function(t){return t.querySelector.bind(t)},magicWandMouseEnter:function(){this.magicWandIcon.star1rtl.setAttribute("transform","translate(150 -30)"),this.magicWandIcon.star2rtl.setAttribute("transform","translate(-50 -30)"),this.magicWandIcon.star3rtl.setAttribute("transform","translate(0 30)"),this.magicWandIcon.star4rtl.setAttribute("transform","translate(110 210)")},magicWandMouseLeave:function(){this.magicWandIcon.star1rtl.setAttribute("transform","translate(0)"),this.magicWandIcon.star2rtl.setAttribute("transform","translate(0)"),this.magicWandIcon.star3rtl.setAttribute("transform","translate(0)"),this.magicWandIcon.star4rtl.setAttribute("transform","translate(0)")}}},f=l,p=(r("5c0b"),r("2877")),d=Object(p["a"])(f,o,c,!1,null,null,null),b=d.exports;a["a"].use(n["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(t,e,r){}});
//# sourceMappingURL=index.c7dbffd9.js.map