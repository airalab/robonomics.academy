(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"R/Or":function(t,e,a){"use strict";a("mfWg")},"av/C":function(t,e,a){"use strict";a.r(e);a("07d7"),a("PKPk"),a("3bBZ"),a("R5XZ");var s=a("QRG1"),n=a.n(s),r={components:{PageTitle:function(){return Promise.all([a.e(0),a.e(2),a.e(3)]).then(a.bind(null,"id0j"))},MetaInfo:function(){return a.e(1).then(a.bind(null,"9qaU"))}},data:function(){return{breadcrumbs:[{to:"/",text:"Robonomics Academy"}],gscript:"AKfycbyyqfSVI6L-jt6ccsAJpJiSRKapwbiHJ0PaJROwqfYnW-n7Cc8sCRtvxwUPHSVJel-dmg",captcha:"6Ldn7g0gAAAAAOOL-2KFHiDDDMXtWRy9Xo-5AtcR",course:this.$ts(n.a[0].title),account:"",name:"",email:"",discord:"",result:this.$response}},computed:{courses:function(){return n.a}},methods:{form:function(){var t=this,e=setInterval((function(){t.result=t.$response}),1e3);"success"!==this.$response&&"error"!==this.$response||clearInterval(e)}}},i=(a("R/Or"),a("KHd+")),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("MetaInfo",{attrs:{pageTitle:"Apply for Certificate",pageDescription:"Collect blockchain proved certificate that you are familiar with the modern web technologies for the IoT.",pageImage:"/og/apply-for-certificate"}}),a("page-title",{attrs:{title:t.$ts("Apply for Certificate"),breadcrumbs:t.breadcrumbs}}),a("section",{staticClass:"container__narrow"},[a("gsp-form",{class:t.result,attrs:{gscriptID:t.gscript,captchaID:t.captcha}},[a("section",[a("h2",[t._v(t._s(t.$ts("Course Information")))]),a("label",{staticClass:"container__full"},[t._v("\n            "+t._s(t.$ts("Select course that you passed"))+":"),a("br"),a("select",{directives:[{name:"model",rawName:"v-model",value:t.course,expression:"course"}],staticClass:"container__full",attrs:{required:"","data-gsp-name":"course","data-gsp-data":t.course},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.course=e.target.multiple?a:a[0]}}},t._l(t.courses,(function(e){return a("option",{key:e.id},[t._v(t._s(t.$ts(e.title)))])})),0)]),a("label",{staticClass:"container__full"},[t._v("\n            "+t._s(t.$ts("Enter Polkadot address that you used"))+":"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"container__full",attrs:{type:"text",required:"","data-gsp-name":"account","data-gsp-data":t.account},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})])]),a("section",[a("h2",[t._v(t._s(t.$ts("Information for Certificate")))]),a("label",{staticClass:"container__full"},[t._v("\n            "+t._s(t.$ts("Your full name"))+":"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"container__full",attrs:{type:"text",required:"","data-gsp-name":"name","data-gsp-data":t.name},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("label",{staticClass:"container__full"},[t._v("\n            "+t._s(t.$ts("Your email (for notification)"))+":"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"container__full",attrs:{type:"email",required:"","data-gsp-name":"email","data-gsp-data":t.email},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("label",{staticClass:"container__full"},[t._v("\n            "+t._s(t.$ts("Discord (username)"))+":"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.discord,expression:"discord"}],staticClass:"container__full",attrs:{type:"text","data-gsp-name":"Discord","data-gsp-data":t.discord},domProps:{value:t.discord},on:{input:function(e){e.target.composing||(t.discord=e.target.value)}}})]),a("input",{attrs:{type:"hidden","data-gsp-name":"tags","data-gsp-data":"academy, academy certificate"}}),a("input",{attrs:{type:"hidden","data-gsp-name":"status","data-gsp-data":"new"}})]),a("section",{staticClass:"text__center"},[a("button",{on:{click:t.form}},["init"===t.result||"error"===t.result?a("span",[t._v(t._s(t.$ts("Request Certificate")))]):t._e(),"wait"===t.result?a("span",[t._v(t._s(t.$ts("Sending your request")))]):t._e(),"success"===t.result?a("span",[t._v(t._s(t.$ts("Your request has been sent")))]):t._e()])])])],1)],1)}),[],!1,null,"a48483da",null);e.default=o.exports},mfWg:function(t,e,a){}}]);