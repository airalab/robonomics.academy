(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{AEAr:function(t,r,c){"use strict";c.r(r);var s=c("Kyfw"),e=c.n(s),a={methods:{allowUserTracker:function(t){switch(t){case"only critical":e.a.set("userTracker",t),this.$store.commit("SET_USER_TRACKER",{option:"only critical",localStorage:!0,cookies:!0,metrics:!1});break;case"allow metrics":e.a.set("userTracker",t),this.$store.commit("SET_USER_TRACKER",{option:"allow metrics",localStorage:!1,cookies:!0,metrics:!0});break;default:this.$store.commit("SET_USER_TRACKER",{option:"no actions",localStorage:!1,cookies:!1,metrics:!1})}}}},i=(c("ufgF"),c("KHd+")),o=Object(i.a)(a,(function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("client-only",[c("div",{staticClass:"user-tracker"},[c("div",{staticClass:"user-tracker__wrapper"},[c("h3",{staticClass:"user-tracker__title"},[t._v("\n        Choose way to communicate with this website:\n      ")]),c("g-link",{staticClass:"user-tracker__info",attrs:{to:"/privacy-policy/"}},[t._v("i")])],1),c("div",{staticClass:"user-tracker__wrapper"},[c("button",{staticClass:"user-tracker__btn",on:{click:function(r){return t.allowUserTracker("no actions")}}},[t._v("No actions")]),c("button",{staticClass:"user-tracker__btn",on:{click:function(r){return t.allowUserTracker("only critical")}}},[t._v("Only critical")]),c("button",{staticClass:"user-tracker__btn",on:{click:function(r){return t.allowUserTracker("allow metrics")}}},[t._v("Allow metrics")])])])])}),[],!1,null,"648d4f2b",null);r.default=o.exports},Bk4J:function(t,r,c){},ufgF:function(t,r,c){"use strict";c("Bk4J")}}]);