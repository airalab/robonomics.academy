(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--fr--learn--escape-from-black-mirror--escape-instruction-md"],{

/***/ "3TZY":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "3Uwn":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Notes pour les netrunners sur la coupure du cordon ombilical du cloud, partie 2\",\n  \"description\": \"Échapper à Black Mirror\",\n  \"metaOptions\": [\"Apprendre\", \"Échapper à Black Mirror\"],\n  \"defaultName\": \"Escape from Black Mirror\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "FV5a":
/*!*************************************************************************!*\
  !*** ./courses/fr/learn/escape-from-black-mirror/escape-instruction.md ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _escape_instruction_md_vue_type_template_id_55d21bc3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-instruction.md?vue&type=template&id=55d21bc3 */ \"lKyn\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _escape_instruction_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./escape-instruction.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"G5Hv\");\n/* harmony import */ var _escape_instruction_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./escape-instruction.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"mSO6\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _escape_instruction_md_vue_type_template_id_55d21bc3__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _escape_instruction_md_vue_type_template_id_55d21bc3__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _escape_instruction_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_escape_instruction_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _escape_instruction_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_escape_instruction_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?");

/***/ }),

/***/ "G5Hv":
/*!*****************************************************************************************************************************!*\
  !*** ./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_escape_instruction_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./escape-instruction.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"3TZY\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_escape_instruction_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render(h) {\n    return h('div', null, this.$slots.default);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "lKyn":
/*!*******************************************************************************************************!*\
  !*** ./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?vue&type=template&id=55d21bc3 ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_escape_instruction_md_vue_type_template_id_55d21bc3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"1800f5b0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/babel-loader/lib??ref--1-1!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./escape-instruction.md?vue&type=template&id=55d21bc3 */ \"wewK\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_escape_instruction_md_vue_type_template_id_55d21bc3__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_escape_instruction_md_vue_type_template_id_55d21bc3__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?");

/***/ }),

/***/ "mSO6":
/*!**********************************************************************************************************************************!*\
  !*** ./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_escape_instruction_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./escape-instruction.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"3Uwn\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_escape_instruction_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?");

/***/ }),

/***/ "wewK":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"1800f5b0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?vue&type=template&id=55d21bc3 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('RoboAcademyText', {\n    attrs: {\n      \"fWeight\": \"500\"\n    }\n  }, [_vm._v(\"\\n  Règles pour échapper au Miroir Noir\\n\")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"escape-from-black-mirror/BlackMirror-02.png\",\n      \"alt\": \"Escape from Black Mirror symbol\"\n    }\n  }), _c('p', [_vm._v(\"Notes pour les netrunners sur la coupure du cordon ombilical du cloud que j'appelle \\\"Le Plan d'évasion du Miroir Noir\\\" avec une référence à la série futuriste qui s'est déjà produite à mon époque. Donc, voici le plan d'évasion:\")]), _c('ol', [_c('li', [_c('strong', [_vm._v(\"Trouver les points de connexion.\")]), _vm._v(\" Vous devez clairement comprendre combien de points de connexion au réseau mondial existent dans l'environnement de l'utilisateur, qui est le fournisseur, et quels appareils spécifiques envoient des données du réseau local au réseau Megapolis.\")]), _c('li', [_c('strong', [_vm._v(\"Étudier l'infrastructure IoT - logement.\")]), _vm._v(\" Vérifiez la force du signal pour les protocoles de communication utilisés dans chaque coin.\")]), _c('li', [_c('strong', [_vm._v(\"Améliorer le réseau local.\")]), _vm._v(\" Assurez-vous que tout appareil est disponible pour l'utilisateur sans se connecter au réseau mondial. Étudiez également la communication inter-machine et assurez-vous que des serveurs externes ne sont pas utilisés pour communiquer entre, par exemple, deux prises voisines dans la maison.\")]), _c('li', [_c('strong', [_vm._v(\"Passer tous les appareils intelligents au réseau local.\")]), _vm._v(\" Trouvez un micrologiciel adapté avec des référentiels open-source et en direct. Désactivez, démontez, étudiez les cartes des appareils pour les composants indésirables, et identifiez les appareils vulnérables au piratage en une minute. Rappelez-vous, parfois un écrou astucieusement tordu peut résoudre le problème mieux que de souder la carte sur votre genou.\")]), _c('li', [_c('strong', [_vm._v(\"Passer tous les appareils intelligents au réseau local.\")]), _vm._v(\" Trouvez un micrologiciel adapté avec des référentiels open-source et en direct. Désactivez, démontez, étudiez les cartes des appareils pour les composants indésirables, et identifiez les appareils vulnérables au piratage en une minute. Rappelez-vous, parfois un écrou astucieusement tordu peut résoudre le problème mieux que de souder la carte sur votre genou.\")]), _c('li', [_c('strong', [_vm._v(\"Enseigner à l'utilisateur à travailler avec des clients réseau légers et un marché des preuves.\")]), _vm._v(\" Transférez à l'utilisateur autant de jetons que nécessaire pour 20 ans de travail dans le réseau.\")]), _c('li', [_c('strong', [_vm._v(\"Expliquer les règles d'hygiène numérique.\")]), _vm._v(\" Faites un briefing sur l'ensemble d'utilitaires qui fourniront une protection fiable contre les méthodes d'infection externe populaires. Faites réaliser au client que maintenant seule sa stupidité peut gâcher sa vie, car tout ce qui est compliqué a été fait pour lui par les netrunners.\")])]), _c('p', [_vm._v(\"Si vous faites tout correctement à la dernière étape, le client vous donnera une transaction signée pour le transfert des fonds sans difficulté. Mais si vous sentez que ces deux videurs debout derrière le client ne sont pas là pour rien, mais pour votre âme - agissez rapidement, de manière inattendue, et par la fenêtre. Ils ne vous paieront certainement pas dans une telle image lors d'une réunion, mais vous vous enfuirez. Après cela, activez immédiatement l'instruction \\\"Arnaque aux fonds\\\".\")]), _c('RoboAcademyText', [_vm._v(\"\\n  Bonne chance, netrunner!\\n\")])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./courses/fr/learn/escape-from-black-mirror/escape-instruction.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%221800f5b0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);