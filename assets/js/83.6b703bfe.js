(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{BGoi:function(e,t){e.exports=[{lang:"English",abbr:"en",id:0},{lang:"Русский",abbr:"ru",id:1},{lang:"Español",abbr:"es",id:2},{lang:"Deutsch",abbr:"de",id:3},{lang:"Italiano",abbr:"it",id:4},{lang:"Português",abbr:"pt",id:5}]},JVaP:function(e,t,n){"use strict";n("zTiw")},T76v:function(e,t,n){"use strict";n.r(t);n("TeQF"),n("07d7");var a=n("BGoi"),i=n.n(a),l={computed:{locales:function(){return i.a}},methods:{changelocale:function(e){var t=this.getLocale(e.target.value)[0].abbr;this.$setLocale(t);var n=this.$tp(this.$route.path,t);window.location.href=n},getLocale:function(e){return i.a.filter((function(t){return t.lang===e}))},initSelectResize:function(e){var t=document.querySelector(".helper-element"),n=document.documentElement;t.innerHTML=e,"italiano"===t.innerText.toLowerCase()?n.style.setProperty("--dynamic-size","".concat(t.offsetWidth+5,"px")):n.style.setProperty("--dynamic-size","".concat(t.offsetWidth,"px"))}},mounted:function(){if(localStorage.getItem("locale")){var e=localStorage.getItem("locale"),t=i.a.filter((function(t){return t.abbr===e}))[0].lang;this.initSelectResize(t)}}},o=(n("JVaP"),n("7uw+")),r=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.locales?n("select",{staticClass:"language-select",attrs:{tabindex:"0"},on:{change:function(t){return e.changelocale(t)}}},[e._l(e.locales,(function(t){return[n("option",{key:t.id,domProps:{selected:t.abbr==e.$locale,value:t.lang}},[e._v("\n        "+e._s(t.lang)+"\n      ")])]}))],2):e._e(),n("span",{staticClass:"helper-element",attrs:{"aria-hidden":"true"}})])}),[],!1,null,"6fabdd5d",null);t.default=r.exports},zTiw:function(e,t,n){}}]);