(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{JuXu:function(t,e,s){},id0j:function(t,e,s){"use strict";s.r(e);var n=s("rePB"),a=(s("07d7"),s("PKPk"),s("3bBZ"),s("+2oP"),s("DQNa"),s("sMBO"),s("GvI1")),o={components:{CalendarBubble:function(){return Promise.all([s.e(0),s.e(6)]).then(s.bind(null,"Lh9H"))}},data:function(){return{ghLink:null,ghUpdateDate:null,ghUpdateName:null,ghUpdateUrl:null,octokit:null,isBubbleOpen:!1}},props:{title:{type:String},breadcrumbs:{type:Array},lessonId:{type:String},course:{type:Object},content:{type:Boolean,default:!1},text:{type:String},doc:{type:Boolean,default:!1}},watch:{"$route.path":function(t,e){this.github_lastupdated(),this.github_link()}},computed:{classes:function(){var t;return t={},Object(n.a)(t,"section__yellow",!0),Object(n.a)(t,"breadcrumbs",this.breadcrumbs),t},currentLesson:function(){return this.$route.matched[0].path.slice(4)+".md"},currentDoc:function(){return this.$route.matched[0].path.slice(4)+".md"},currentTitle:function(){return this.course?this.course.title:this.doc?this.title:void 0}},methods:{github_lastupdated:function(){var t=this;this.octokit&&this.octokit.repos.listCommits({owner:"airalab",repo:"robonomics.academy",path:this.doc?"docs/"+this.$locale+"/"+this.currentDoc:"courses/"+this.$locale+"/"+this.currentLesson}).then((function(e){var s=e.data,n=new Date(s[0].commit.author.date);t.ghUpdateDate=n.toLocaleDateString(),t.ghUpdateName=s[0].commit.author.name,t.ghUpdateUrl=s[0].html_url}))},github_link:function(){var t=this;this.octokit&&this.octokit.repos.getContent({owner:"airalab",repo:"robonomics.academy",path:this.doc?"docs/"+this.$locale+"/"+this.currentDoc:"courses/"+this.$locale+"/"+this.currentLesson}).then((function(e){t.ghLink=e.data.html_url})).catch((function(t){console.error(t.message)}))},openCalendarBlob:function(){this.isBubbleOpen=!0},closeCalendarBlob:function(){this.isBubbleOpen=!1}},mounted:function(){this.lessonId&&(this.octokit=new a.a({}),this.github_lastupdated(),this.github_link())}},i=(s("mWwp"),s("7uw+")),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.title?n("section",{class:[t.classes,{"section-lessonInfo":t.lessonId},{"section-with-calendar":!t.lessonId&&t.course||t.doc}]},[n("div",{staticClass:"container__narrow page-title"},[t.breadcrumbs?n("ul",t._l(t.breadcrumbs,(function(e){return n("li",{key:e.id},[n("g-link",{attrs:{to:e.to}},[t._v(t._s(e.text))])],1)})),0):t._e(),n("h1",[t._v(t._s(t.title))])]),t.text?n("div",{staticClass:"container__narrow page-title__text"},[n("p",[t._v(t._s(t.text))])]):t._e(),!t.lessonId&&t.course||t.doc?n("div",{staticClass:"page-title__calendar",class:{active:t.isBubbleOpen},on:{click:function(e){return e.stopPropagation(),t.openCalendarBlob.apply(null,arguments)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"171.571",height:"113.933",viewBox:"0 0 171.571 113.933"}},[n("path",{attrs:{id:"Path_5459","data-name":"Path 5459",d:"M378.1,348.825s-12.368-13.608-4.535-42.059c26.8,0,41.934-2.634,49.767-23.253s-2.884-37.524-21.029-42.47-35.462-7.425-81.645-4.949-65.976,4.949-65.976,34.226,26.8,32.575,38.35,33.812,61.977,2.223,61.977,2.223S347.588,341.4,378.1,348.825Z",transform:"translate(-254.558 -235.017)",fill:"#4292e2",stroke:"#000","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"0.25"}})]),n("g-image",{attrs:{src:s("1d5H"),"aria-hidden":"true"}}),t.isBubbleOpen?n("CalendarBubble",{attrs:{name:t.currentTitle,type:t.doc?"playground":t.course&&"certificated course"},on:{closeCalendarBlob:t.closeCalendarBlob}}):t._e()],1):t._e(),n("client-only",[t.lessonId||t.doc?n("div",{staticClass:"lesson-update"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.ghUpdateName,expression:"ghUpdateName"}],staticClass:"lesson-update__wrapper"},[n("g-link",{staticClass:"lesson-update__link",attrs:{to:t.ghUpdateUrl}},[t._v(t._s(t.$ts("Latest update")))]),t._v(" "+t._s(t.$ts("on (date of commit)"))+" "+t._s(t.ghUpdateDate)+" "+t._s(t.$ts("by (author of commit)"))+" "+t._s(t.ghUpdateName)+"\n      ")],1)]):t._e(),t.content?n("div",[t._t("default")],2):t._e()])],1):t._e()}),[],!1,null,"1c890720",null);e.default=r.exports},mWwp:function(t,e,s){"use strict";s("JuXu")}}]);