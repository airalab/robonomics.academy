(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4Vg4":function(t,r,c){},AEAr:function(t,r,c){"use strict";c.r(r);var s=c("Kyfw"),e=c.n(s),a={methods:{allowUserTracker:function(t){switch(t){case"only critical":e.a.set("userTracker",t),this.$store.commit("SET_USER_TRACKER",{option:"only critical",localStorage:!0,cookies:!0,metrics:!1});break;case"allow metrics":e.a.set("userTracker",t),this.$store.commit("SET_USER_TRACKER",{option:"allow metrics",localStorage:!1,cookies:!0,metrics:!0});break;default:this.$store.commit("SET_USER_TRACKER",{option:"no actions",localStorage:!1,cookies:!1,metrics:!1})}}}},i=(c("xJG9"),c("KHd+")),o=Object(i.a)(a,(function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("client-only",[c("div",{staticClass:"user-tracker"},[c("div",{staticClass:"user-tracker__wrapper"},[c("h3",{staticClass:"user-tracker__title"},[t._v("\n        Choose way to communicate with this website:\n      ")]),c("g-link",{staticClass:"user-tracker__info",attrs:{to:"/privacy-policy/"}},[t._v("i")])],1),c("div",{staticClass:"user-tracker__wrapper"},[c("button",{staticClass:"user-tracker__btn",on:{click:function(r){return t.allowUserTracker("no actions")}}},[t._v("No actions")]),c("button",{staticClass:"user-tracker__btn",on:{click:function(r){return t.allowUserTracker("only critical")}}},[t._v("Only critical")]),c("button",{staticClass:"user-tracker__btn",on:{click:function(r){return t.allowUserTracker("allow metrics")}}},[t._v("Allow metrics")])])])])}),[],!1,null,"3d26d980",null);r.default=o.exports},xJG9:function(t,r,c){"use strict";c("4Vg4")}}]);