(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"av/C":function(t,e,a){"use strict";a.r(e);a("07d7"),a("PKPk"),a("3bBZ"),a("R5XZ");var n={components:{PageTitle:function(){return Promise.all([a.e(0),a.e(1)]).then(a.bind(null,"id0j"))}},data:function(){return{breadcrumbs:[{to:"/",text:"Robonomics Academy"}],courses:["Introduction course"],gscript:"AKfycbyyqfSVI6L-jt6ccsAJpJiSRKapwbiHJ0PaJROwqfYnW-n7Cc8sCRtvxwUPHSVJel-dmg",captcha:"6Ldn7g0gAAAAAOOL-2KFHiDDDMXtWRy9Xo-5AtcR",account:"",name:"",email:"",result:this.$response}},computed:{course:function(){return this.courses?this.courses[0]:""}},methods:{form:function(){var t=this,e=setInterval((function(){t.result=t.$response}),1e3);"success"!==this.$response&&"error"!==this.$response||clearInterval(e)}},metaInfo:function(){return this.$seo({title:"Apply for certificate",description:"Collect blockchain proved certificate that you are familiar with the modern web technologies for the IoT. It will come in handy when hiring a technology company that wants to improve their corporate infrastructure using web3.",openGraph:{title:"Apply for certificate",type:"website"},twitter:{title:"Apply for certificate",type:"summary"}})}},s=(a("q06v"),a("KHd+")),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("page-title",{attrs:{title:"Apply for certificate",breadcrumbs:t.breadcrumbs}}),a("section",{staticClass:"container__narrow"},[a("gsp-form",{class:t.result,attrs:{gscriptID:t.gscript,captchaID:t.captcha}},[a("section",[a("h2",[t._v("Course passed information")]),a("label",{staticClass:"container__full"},[t._v("\n            What course did you passed:"),a("br"),a("select",{directives:[{name:"model",rawName:"v-model",value:t.course,expression:"course"}],staticClass:"container__full",attrs:{disabled:"",required:"","data-gsp-name":"course","data-gsp-data":t.course},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.course=e.target.multiple?a:a[0]}}},t._l(t.courses,(function(e){return a("option",{key:e.id},[t._v(t._s(e))])})),0)]),a("label",{staticClass:"container__full"},[t._v("\n            What Polkadot address did you used to pass:"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"container__full",attrs:{type:"text",required:"","data-gsp-name":"account","data-gsp-data":t.account},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})])]),a("section",[a("h2",[t._v("Information for certificate")]),a("label",{staticClass:"container__full"},[t._v("\n            Your name (this will be on your certificate):"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"container__full",attrs:{type:"text",required:"","data-gsp-name":"name","data-gsp-data":t.name},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("label",{staticClass:"container__full"},[t._v("\n            Your email (for notification):"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"container__full",attrs:{type:"email",required:"","data-gsp-name":"email","data-gsp-data":t.email},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("input",{attrs:{type:"hidden","data-gsp-name":"tags","data-gsp-data":"academy, academy certificate"}}),a("input",{attrs:{type:"hidden","data-gsp-name":"status","data-gsp-data":"new"}})]),a("section",{staticClass:"text__center"},[a("button",{on:{click:t.form}},["init"===t.result||"error"===t.result?a("span",[t._v("Apply for certificate")]):t._e(),"wait"===t.result?a("span",[t._v("Sending your request")]):t._e(),"success"===t.result?a("span",[t._v("Your request has been sent")]):t._e()])])])],1)],1)}),[],!1,null,"d60b25b6",null);e.default=r.exports},dJC7:function(t,e,a){},q06v:function(t,e,a){"use strict";a("dJC7")}}]);