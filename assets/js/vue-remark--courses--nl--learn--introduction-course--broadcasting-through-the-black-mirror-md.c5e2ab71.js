(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--nl--learn--introduction-course--broadcasting-through-the-black-mirror-md"],{

/***/ "Gbrd":
/*!************************************************************************************************************************************************!*\
  !*** ./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_broadcasting_through_the_black_mirror_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./broadcasting-through-the-black-mirror.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Lmpe\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_broadcasting_through_the_black_mirror_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?");

/***/ }),

/***/ "KJcI":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Lmpe":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Les #1, Uitzenden doof de Zwarte Spiegel\",\n  \"lastUpdate\": \"Thu May 04 2023 12:53:51 GMT+0400 (Samara Standard Time)\",\n  \"description\": \"Deze openingsles leert je basismethoden om te communiceren met een gedecentraliseerde applicatie (of dapp).\",\n  \"lessonNumber\": 1,\n  \"metaOptions\": [\"Leren\", \"Kennismaking met de ideeën van Robonomics\"],\n  \"defaultName\": \"Introduction to the ideas of Robonomics\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Pjok":
/*!***************************************************************************************!*\
  !*** ./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _broadcasting_through_the_black_mirror_md_vue_type_template_id_de235e5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broadcasting-through-the-black-mirror.md?vue&type=template&id=de235e5e */ \"rtBC\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _broadcasting_through_the_black_mirror_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./broadcasting-through-the-black-mirror.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"pRfM\");\n/* harmony import */ var _broadcasting_through_the_black_mirror_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./broadcasting-through-the-black-mirror.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Gbrd\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _broadcasting_through_the_black_mirror_md_vue_type_template_id_de235e5e__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _broadcasting_through_the_black_mirror_md_vue_type_template_id_de235e5e__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _broadcasting_through_the_black_mirror_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_broadcasting_through_the_black_mirror_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _broadcasting_through_the_black_mirror_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_broadcasting_through_the_black_mirror_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?");

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

/***/ "oG0e":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"1800f5b0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?vue&type=template&id=de235e5e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('h2', {\n    attrs: {\n      \"id\": \"intro\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#intro\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Intro\")]), _c('p', [_vm._v(\"Deze openingsles leert je basismethoden om te communiceren met \"), _c('strong', [_vm._v(\"een gedecentraliseerde applicatie (of dapp)\")]), _vm._v(\". Hiervoof hebben we een speciale dapp genaamd \\\"Black Mirrof Broadcast\\\" gemaakt, die gewoon werkt vanuit je webbrowser en een stream toont met een kleine retro-tv. De dapp kan op afstand de tv bedienen en een QR-code veranderen door je bericht te verzenden via het Robonomics-platform.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"inspiratie\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#inspiratie\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Inspiratie\")]), _c('p', [_vm._v(\"We hebben deze dapp gemaakt met als doel de juiste sfeer te creëren voor de rest van de cursus. Het idee van de dapp brengt de geest van een dystopie over waarin het grootste deel van het menselijk leven op een zwart scherm bestaat en iedereen dit leven kan bespioneren.\")]), _c('p', [_vm._v(\"Technologie is onverbiddelijk het dagelijks leven van de mensheid binnengekomen en heel vaak wordt technologie meer verweven met ons leven dan sommigen van ons zouden willen. Er is een langdurige en moeilijke vraag uit het veld van de filosofie over de tegenstelling tussen de publieke en private delen van het menselijk bestaan. Daarom willen wij bij Robonomics web3-tools implementeren in het IoT-veld. We willen het onmogelijk maken om de naam van elke persoon op de planeet onmiddellijk te veranderen in een identificatiecode zonder de toestemming van de persoon.\")]), _c('p', [_vm._v(\"Volgende generatie internettechnologieën kunnen helpen om de relatie tussen mensen en machines te verbeteren, slimme apparaten meer onafhankelijk en sneller te maken in het leveren van diensten aan mensen, en belangrijk, het onmogelijk maken om met behulp van machines de controle over alle mensen over te nemen. Dit is hoe we het beste scenario zien voor het integreren van robots in het dagelijks leven van mensen.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"instructies\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#instructies\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Instructies\")]), _c('List', {\n    attrs: {\n      \"type\": \"numbers\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"Installeer de Polkadot.js browserextensie en maak een account aan voor Robonomics Parachain.\")]), _c('p', [_vm._v(\"Zie de handleiding op onze wiki: \"), _c('a', {\n    attrs: {\n      \"href\": \"https://wiki.robonomics.network/docs/create-account-in-dapp/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Account aanmaken voor Robonomics Parachain\")]), _vm._v(\". Je moet alle lessen van de cursus met één Polkadot-account voltooien om een certificaat aan te vragen.\")])]), _c('li', [_c('p', [_vm._v(\"Ga naar onze \"), _c('a', {\n    attrs: {\n      \"href\": \"https://discord.gg/xqDgG3EGm9\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Discord-server\")]), _vm._v(\" en krijg de rol van \\\"Developer Community Member\\\". Om dit te doen, moet je in het kanaal \\\"👋welcome-info\\\" klikken op de overeenkomstige emoji (⚛️) in het bericht van de MEE6-bot.\")])]), _c('li', [_c('p', [_vm._v(\"Zoek de speciale \"), _c('a', {\n    attrs: {\n      \"href\": \"https://discord.com/channels/803947358492557312/944186892038053899\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Discord-chatbot\")]), _vm._v(\", genaamd \\\"🚰academy-faucet\\\" in de lijst met kanalen en voer je Robonomics Parachain-adres in vanuit de Polkadot.js-extensie.\")]), _c('p', [_vm._v(\"Zorg ervoor dat je het adres naar de bot stuurt in het juiste formaat (het begint met \\\"4\\\"). Als de bot niet reageert of je adres niet toevoegt aan de abonnement de eerste keer, probeer het dan nog een paar keer, dit gebeurt vanwege de netwerkbelasting. Als het probleem aanhoudt, vraag het dan in het kanaal \\\"🎓robonomics-academy\\\".\")])]), _c('li', [_c('p', [_vm._v(\"Ga naar de \"), _c('a', {\n    attrs: {\n      \"href\": \"https://blackmirror.robonomics.academy\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Black Mirror dapp\")]), _vm._v(\" en sta de dapp toegang toe tot de Polkadot.js-extensie.\")]), _c('p', [_vm._v(\"Zorg ervoor dat je het juiste account selecteert dat de gratis IoT-abonnement heeft gekregen.\")])]), _c('li', [_vm._v(\"\\nVoer in de dapp je korte tekstbericht (in het Engels) in en klik op de knop \\\"Ondertekenen en verzenden\\\". \\n\")]), _c('li', [_vm._v(\"\\nVoer in het verschenen extensievenster uw wachtwoord in en onderteken de transactie. \\n\")]), _c('li', [_vm._v(\"\\nZorg ervoor dat je transactie succesvol is verzonden door de link naar de Polkadot-verkenner te controleren.\\n\"), _c('p', [_vm._v(\"Het veld \"), _c('code', [_vm._v(\"Resultaataat\")]), _vm._v(\" moet \"), _c('code', [_vm._v(\"Succes\")]), _vm._v(\" tonen.\")])]), _c('li', [_vm._v(\"\\nControleer de QR-code op het tv-scherm, deze moet veranderen (kan tot 2 minuten duren).\\n\")])]), _c('Result', [_c('p', [_vm._v(\"De les wordt als voltooid beschouwd na het verzenden van een succesvolle transactie en het verschijnen ervan in de Polkadot explorer voor je Polkadot.js-account.\")]), _c('p', [_vm._v(\"Je kunt je resultaten controleren op \"), _c('a', {\n    attrs: {\n      \"href\": \"https://lk.robonomics.academy/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"de speciale controle dapp\")]), _vm._v(\". Voor autorisatie op de controle dapp gebruik je hetzelfde account in Polkadot.js dat tijdens de cursus is gebruikt.\")])])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%221800f5b0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "pRfM":
/*!*******************************************************************************************************************************************!*\
  !*** ./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_broadcasting_through_the_black_mirror_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./broadcasting-through-the-black-mirror.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"KJcI\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_broadcasting_through_the_black_mirror_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?");

/***/ }),

/***/ "rtBC":
/*!*********************************************************************************************************************!*\
  !*** ./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?vue&type=template&id=de235e5e ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_broadcasting_through_the_black_mirror_md_vue_type_template_id_de235e5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"1800f5b0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/babel-loader/lib??ref--1-1!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./broadcasting-through-the-black-mirror.md?vue&type=template&id=de235e5e */ \"oG0e\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_broadcasting_through_the_black_mirror_md_vue_type_template_id_de235e5e__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_broadcasting_through_the_black_mirror_md_vue_type_template_id_de235e5e__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/nl/learn/introduction-course/broadcasting-through-the-black-mirror.md?");

/***/ })

}]);