(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "7Sjx":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/PageTitle.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ \"rePB\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"07d7\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"PKPk\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"3bBZ\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"+2oP\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ \"DQNa\");\n/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"sMBO\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @octokit/rest */ \"GvI1\");\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    CalendarBubble: function CalendarBubble() {\n      return Promise.all(/*! import() */[__webpack_require__.e(\"styles\"), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ~/components/CalendarBubble.vue */ \"Lh9H\"));\n    }\n  },\n  data: function data() {\n    return {\n      ghLink: null,\n      ghUpdateDate: null,\n      ghUpdateName: null,\n      ghUpdateUrl: null,\n      octokit: null,\n      isBubbleOpen: false\n    };\n  },\n  props: {\n    title: {\n      type: String\n    },\n    breadcrumbs: {\n      type: Array\n    },\n    lessonId: {\n      type: String\n    },\n    course: {\n      type: Object\n    },\n    content: {\n      type: Boolean,\n      \"default\": false\n    },\n    text: {\n      type: String\n    },\n    doc: {\n      type: Boolean,\n      \"default\": false\n    }\n  },\n  watch: {\n    \"$route.path\": function $routePath(current, old) {\n      this.github_lastupdated();\n      this.github_link();\n    }\n  },\n  computed: {\n    classes: function classes() {\n      var _ref;\n\n      return _ref = {}, Object(_home_runner_work_robonomics_academy_robonomics_academy_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"section__yellow\", true), Object(_home_runner_work_robonomics_academy_robonomics_academy_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, \"breadcrumbs\", this.breadcrumbs), _ref;\n    },\n    currentLesson: function currentLesson() {\n      var lesson = this.$route.matched[0].path;\n      return lesson.slice(4) + '.md';\n    },\n    currentDoc: function currentDoc() {\n      var doc = this.$route.matched[0].path;\n      return doc.slice(4) + '.md';\n    },\n    currentTitle: function currentTitle() {\n      if (this.course) {\n        return this.course.title;\n      }\n\n      if (this.doc) {\n        return this.title;\n      }\n    }\n  },\n  methods: {\n    github_lastupdated: function github_lastupdated() {\n      var _this = this;\n\n      if (!this.octokit) {\n        return;\n      }\n\n      this.octokit.repos.listCommits({\n        owner: \"airalab\",\n        repo: \"robonomics.academy\",\n        path: !this.doc ? 'courses/' + this.$locale + '/' + this.currentLesson : 'docs/' + this.$locale + '/' + this.currentDoc\n      }).then(function (_ref2) {\n        var data = _ref2.data;\n        var d = new Date(data[0].commit.author.date);\n        _this.ghUpdateDate = d.toLocaleDateString();\n        _this.ghUpdateName = data[0].commit.author.name;\n        _this.ghUpdateUrl = data[0].html_url;\n      });\n    },\n    github_link: function github_link() {\n      var _this2 = this;\n\n      if (!this.octokit) {\n        return;\n      }\n\n      this.octokit.repos.getContent({\n        owner: \"airalab\",\n        repo: \"robonomics.academy\",\n        path: !this.doc ? 'courses/' + this.$locale + '/' + this.currentLesson : 'docs/' + this.$locale + '/' + this.currentDoc\n      }).then(function (result) {\n        _this2.ghLink = result.data.html_url;\n      })[\"catch\"](function (e) {\n        console.error(e.message);\n      });\n    },\n    openCalendarBlob: function openCalendarBlob() {\n      this.isBubbleOpen = true;\n    },\n    closeCalendarBlob: function closeCalendarBlob() {\n      this.isBubbleOpen = false;\n    }\n  },\n  mounted: function mounted() {\n    if (this.lessonId) {\n      this.octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_7__[\"Octokit\"]({});\n      this.github_lastupdated();\n      this.github_link();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/PageTitle.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "JuXu":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/PageTitle.vue?vue&type=style&index=0&id=1c890720&prod&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/PageTitle.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--2-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "Sr9S":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"3ec475f9-vue-loader-template"}!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./src/components/PageTitle.vue?vue&type=template&id=1c890720&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.title)?_c('section',{class:[_vm.classes, {'section-lessonInfo': _vm.lessonId}, {'section-with-calendar': !_vm.lessonId && _vm.course || _vm.doc}]},[_c('div',{staticClass:\"container__narrow page-title\"},[(_vm.breadcrumbs)?_c('ul',_vm._l((_vm.breadcrumbs),function(item){return _c('li',{key:item.id},[_c('g-link',{attrs:{\"to\":item.to}},[_vm._v(_vm._s(item.text))])],1)}),0):_vm._e(),_c('h1',[_vm._v(_vm._s(_vm.title))])]),(_vm.text)?_c('div',{staticClass:\"container__narrow page-title__text\"},[_c('p',[_vm._v(_vm._s(_vm.text))])]):_vm._e(),(!_vm.lessonId && _vm.course || _vm.doc)?_c('div',{staticClass:\"page-title__calendar\",class:{active: _vm.isBubbleOpen},on:{\"click\":function($event){$event.stopPropagation();return _vm.openCalendarBlob.apply(null, arguments)}}},[_c('svg',{attrs:{\"xmlns\":\"http://www.w3.org/2000/svg\",\"width\":\"171.571\",\"height\":\"113.933\",\"viewBox\":\"0 0 171.571 113.933\"}},[_c('path',{attrs:{\"id\":\"Path_5459\",\"data-name\":\"Path 5459\",\"d\":\"M378.1,348.825s-12.368-13.608-4.535-42.059c26.8,0,41.934-2.634,49.767-23.253s-2.884-37.524-21.029-42.47-35.462-7.425-81.645-4.949-65.976,4.949-65.976,34.226,26.8,32.575,38.35,33.812,61.977,2.223,61.977,2.223S347.588,341.4,378.1,348.825Z\",\"transform\":\"translate(-254.558 -235.017)\",\"fill\":\"#4292e2\",\"stroke\":\"#000\",\"stroke-linecap\":\"round\",\"stroke-linejoin\":\"round\",\"stroke-width\":\"0.25\"}})]),_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?ariaHidden=true!@/assets/images/bubble-guy.png */ \"1d5H\"),\"aria-hidden\":\"true\"}}),(_vm.isBubbleOpen)?_c('CalendarBubble',{attrs:{\"name\":_vm.currentTitle,\"type\":_vm.doc && 'playground' || _vm.course && 'certificated course'},on:{\"closeCalendarBlob\":_vm.closeCalendarBlob}}):_vm._e()],1):_vm._e(),_c('client-only',[(_vm.lessonId || _vm.doc)?_c('div',{staticClass:\"lesson-update\"},[_c('div',{directives:[{name:\"show\",rawName:\"v-show\",value:(_vm.ghUpdateName),expression:\"ghUpdateName\"}],staticClass:\"lesson-update__wrapper\"},[_c('g-link',{staticClass:\"lesson-update__link\",attrs:{\"to\":_vm.ghUpdateUrl}},[_vm._v(_vm._s(_vm.$ts('Latest update')))]),_vm._v(\" \"+_vm._s(_vm.$ts('on (date of commit)'))+\" \"+_vm._s(_vm.ghUpdateDate)+\" \"+_vm._s(_vm.$ts('by (author of commit)'))+\" \"+_vm._s(_vm.ghUpdateName)+\"\\n      \")],1)]):_vm._e(),(_vm.content)?_c('div',[_vm._t(\"default\")],2):_vm._e()])],1):_vm._e()}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./src/components/PageTitle.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%223ec475f9-vue-loader-template%22%7D!./node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "bqaT":
/*!*********************************************************************************!*\
  !*** ./src/components/PageTitle.vue?vue&type=template&id=1c890720&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_1c890720_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"3ec475f9-vue-loader-template\"}!../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=template&id=1c890720&scoped=true& */ \"Sr9S\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_1c890720_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_3ec475f9_vue_loader_template_node_modules_gridsome_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_template_id_1c890720_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/PageTitle.vue?");

/***/ }),

/***/ "id0j":
/*!**************************************!*\
  !*** ./src/components/PageTitle.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PageTitle_vue_vue_type_template_id_1c890720_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=template&id=1c890720&scoped=true& */ \"bqaT\");\n/* harmony import */ var _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=script&lang=js& */ \"jay+\");\n/* empty/unused harmony star reexport *//* harmony import */ var _PageTitle_vue_vue_type_style_index_0_id_1c890720_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageTitle.vue?vue&type=style&index=0&id=1c890720&prod&scoped=true&lang=css& */ \"mWwp\");\n/* harmony import */ var _node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/gridsome/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"7uw+\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_gridsome_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _PageTitle_vue_vue_type_template_id_1c890720_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _PageTitle_vue_vue_type_template_id_1c890720_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1c890720\",\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/PageTitle.vue?");

/***/ }),

/***/ "jay+":
/*!***************************************************************!*\
  !*** ./src/components/PageTitle.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=script&lang=js& */ \"7Sjx\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/PageTitle.vue?");

/***/ }),

/***/ "mWwp":
/*!****************************************************************************************************!*\
  !*** ./src/components/PageTitle.vue?vue&type=style&index=0&id=1c890720&prod&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_1c890720_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../node_modules/gridsome/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--2-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/gridsome/node_modules/vue-loader/lib??vue-loader-options!./PageTitle.vue?vue&type=style&index=0&id=1c890720&prod&scoped=true&lang=css& */ \"JuXu\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_1c890720_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_1c890720_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_1c890720_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_2_oneOf_1_1_node_modules_gridsome_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_gridsome_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_1c890720_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/PageTitle.vue?");

/***/ })

}]);