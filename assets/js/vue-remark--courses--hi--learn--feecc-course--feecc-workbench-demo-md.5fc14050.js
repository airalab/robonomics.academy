(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--hi--learn--feecc-course--feecc-workbench-demo-md"],{

/***/ "1VKb":
/*!*******************************************************************************************************************!*\
  !*** ./courses/hi/learn/feecc-course/feecc-workbench-demo.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_demo_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./feecc-workbench-demo.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"yw7O\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_demo_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/hi/learn/feecc-course/feecc-workbench-demo.md?");

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

/***/ "Vhe9":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/hi/learn/feecc-course/feecc-workbench-demo.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"फ़ीसीसी का डेमो\",\n  \"description\": \"यह कोर्स फीस सिस्टम और उसके सभी घटकों को जानने के बारे में है।\",\n  \"metaOptions\": [\"सीखें\", \"फीस का उपयोग करना\"],\n  \"defaultName\": \"Getting Used to Feecc\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/hi/learn/feecc-course/feecc-workbench-demo.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "ZmFt":
/*!***************************************************************!*\
  !*** ./courses/hi/learn/feecc-course/feecc-workbench-demo.md ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _feecc_workbench_demo_md_vue_type_template_id_2428eec4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feecc-workbench-demo.md?vue&type=template&id=2428eec4 */ \"gYb+\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _feecc_workbench_demo_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feecc-workbench-demo.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"1VKb\");\n/* harmony import */ var _feecc_workbench_demo_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feecc-workbench-demo.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"crCS\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _feecc_workbench_demo_md_vue_type_template_id_2428eec4__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _feecc_workbench_demo_md_vue_type_template_id_2428eec4__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _feecc_workbench_demo_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_feecc_workbench_demo_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _feecc_workbench_demo_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_feecc_workbench_demo_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/hi/learn/feecc-course/feecc-workbench-demo.md?");

/***/ }),

/***/ "aQ+N":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"1800f5b0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/hi/learn/feecc-course/feecc-workbench-demo.md?vue&type=template&id=2428eec4 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('RoboAcademyText', {\n    attrs: {\n      \"fWeight\": \"500\"\n    }\n  }, [_vm._v(\"\\nइस पाठ में, आप एक उदाहरण के रूप में एक वर्चुअल टेस्टबेड का उपयोग करके फीस के मूल कार्यों का परीक्षण करेंगे, जो एक उत्पादन ट्रैकिंग सिस्टम के वास्तविक उदाहरण का अनुकरण करता है।\\n\")]), _c('p', [_vm._v(\"प्रदर्शन के उद्देश्यों के लिए इसमें कुछ सामान्य विशेषताएँ नहीं हैं जैसे लेबल प्रिंटिंग या वीडियो रिकॉर्डिंग, लेकिन यह ऐसे एक सिस्टम की मुख्य अवधारणा को धारण करता है।\")]), _c('h2', {\n    attrs: {\n      \"id\": \"पूर्वापेक्षाएँ\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%AA%E0%A5%87%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE%E0%A4%8F%E0%A4%81\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"पूर्वापेक्षाएँ\")]), _c('p', [_vm._v(\"डेमो चलाने के लिए, आपको निम्नलिखित की आवश्यकता होगी:\")]), _c('ul', [_c('li', [_vm._v(\"UNIX जैसा सिस्टम (जांच किया गया है \"), _c('a', {\n    attrs: {\n      \"href\": \"https://releases.ubuntu.com/jammy/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Ubuntu 22.04.2\")]), _vm._v(\")\")]), _c('li', [_c('a', {\n    attrs: {\n      \"href\": \"https://docs.docker.com/engine/install/ubuntu/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"डॉकर\")]), _vm._v(\" और \"), _c('a', {\n    attrs: {\n      \"href\": \"https://docs.docker.com/compose/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"डॉकर कॉम्पोज\")])]), _c('li', [_vm._v(\"वेब ब्राउज़र (Google Chrome और Mozilla Firefox पर जांच किया गया है)\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"स्थापना\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE%E0%A4%AA%E0%A4%A8%E0%A4%BE\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"स्थापना\")]), _c('p', [_vm._v(\"निम्नलिखित कमांडों को निष्पादित करें:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\ngit clone https://github.com/Multi-Agent-io/feecc-academy\\ncd feecc-academy\\nsudo docker compose up -d --build\\n\")]), _c('p', [_vm._v(\"काम कर रहे कंटेनर्स की जांच करने के लिए, निम्नलिखित को चलाएं:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\nsudo docker ps -a\\n\")]), _c('p', [_vm._v(\"आपको निम्नलिखित आउटपुट दिखना चाहिए:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\",\n      \"noLines\": \"\",\n      \"noCopyIcon\": \"\"\n    }\n  }, [_vm._v(\"\\nCONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES\\n0db8382bb271   feecc-academy-workbench-daemon      \\\"uvicorn app:app --h…\\\"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon\\n0dbc7bb977d1   feecc-academy-workbench-frontend    \\\"node nodeServer.js\\\"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend\\na74fa229eb90   robonomics/robonomics:sha-bd71a23   \\\"robonomics --dev --…\\\"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node\\n0c9e8022658a   mongo:jammy                         \\\"docker-entrypoint.s…\\\"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB\\n6b0748904d0f   ipfs/go-ipfs:v0.17.0                \\\"/sbin/tini -- /usr/…\\\"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode\\n814e6f489a77   nyurik/alpine-python3-requests      \\\"tail -f /dev/null\\\"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator\\n\")]), _c('h2', {\n    attrs: {\n      \"id\": \"डेमो-को-लॉन्च-करना\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E0%A4%A1%E0%A5%87%E0%A4%AE%E0%A5%8B-%E0%A4%95%E0%A5%8B-%E0%A4%B2%E0%A5%89%E0%A4%A8%E0%A5%8D%E0%A4%9A-%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"डेमो को लॉन्च करना\")]), _c('ol', [_c('li', [_c('p', [_vm._v(\"अपन ब्राउज़र में \"), _c('a', {\n    attrs: {\n      \"href\": \"http://localhost:3000/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"http://localhost:3000/\")]), _vm._v(\" पर जाएं, आपको एक स्वागत स्क्रीन दिखाई देनी चाहिए।\")])]), _c('li', [_c('p', [_vm._v(\"इस स्थिति में, सिस्टम कर्मचारी से उनके RFID कार्ड को स्कैनर पर रखने के लिए प्रोत्साहित करना चाहिए। डेमो में, आप \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"hid-emulator.py\")]), _vm._v(\" का उपयोग अधिकृत कर सकते हैं। इसके लिए, एक अलग Docker कंटेनर चलाएं:\")])])]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\nsudo docker exec -ti feecc_academy_hid_emulator sh\\npython3 hid-emulator.py\\n\")]), _c('p', [_vm._v(\"यह दो कार्यों का नकल करने में सक्षम है: एक RFID कार्ड प्रदान करना और एक बारकोड स्कैन करना; आपको पहले कार्य की आवश्यकता है, \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"1\")]), _vm._v(\" दर्ज करें।\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\",\n      \"noLines\": \"\",\n      \"noCopyIcon\": \"\"\n    }\n  }, [_vm._v(\"\\n> Select emulated action (1/2): \\n>  1. Put ID card on the RFID scanner.\\n>  2. Scan a sample barcode with a barcode scanner.\\n> 1\\n> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event\\n\")]), _c('ol', {\n    attrs: {\n      \"start\": \"3\"\n    }\n  }, [_c('li', [_vm._v(\"आपको संयोजन प्रकार का चयन करने के लिए स्क्रीन दिखाई देगी, \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SINGLE DEVICE\")]), _vm._v(\" चुनें।\")])]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"feecc-course/menu.png\",\n      \"alt\": \"Feecc start menu\"\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"4\"\n    }\n  }, [_c('li', [_vm._v(\"नोटिफिकेशन निर्मित करने की शुरुआत की सूचनाएं नीचे बाएं कोने में िखाई देगी जिसमें एक अद्वितीय आईडी बनाया गया है। नीला नोटिफिकेशन भी वर्चुअल प्रिंटर की गतिविधि को प्रदर्शित करेगा; वास्तविक सेटअप पर, इस समय उस उपकरण के आईडी के साथ एक बारकोड प्रिंट होगा।\")])]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"feecc-course/single_device.png\",\n      \"alt\": \"Single device composition\"\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"5\"\n    }\n  }, [_c('li', [_c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"START COMPOSITION\")]), _vm._v(\" पर क्लिक करें उपकरण संयोजन प्रक्रिया शुरू करने के लिए। आपको सभी आवश्यक संयोजन चरणों के माध्यम से जाने के लिए प्रोत्साहित किया जाएगा; हर बार जब कर्मचारी एक चरण पूरा करता है, तो उन्हें \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"NEXT\")]), _vm._v(\" बटन पर क्लिक करना चाहिए, जिसके बाद वीडियो IPFS में सहेजा जाएगा। संयोजन को रोकना भी संभव है (\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"PAUSE\")]), _vm._v(\") बाद में वापस लौटने के लिए या प्रक्रिया को पूरी तरह े बंद करने के लिए (\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"STOP\")]), _vm._v(\")।\")])]), _c('li', [_c('p', [_vm._v(\"जब सभी संयोजन चरण पूरे हो जाएंगे, \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"FINISH\")]), _vm._v(\" बटन दिखाई देगा, जिसके बाद Feecc सुझाव देगा कि उपकरण का प्रमाणपत्र सहेजना चाहिए। हालांकि, इससे पहले, अपने ब्राउज़र में \"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"स्थानीय Robonomics नोड\")]), _vm._v(\" खोलें, आपको बाद में इसकी आवश्यकता होगी। उसके बाद, Feecc पर वापस आएं और \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SAVE PASSPORT\")]), _vm._v(\" पर क्लिक करें।\")]), _c('p', [_vm._v(\"आपको स्क्रीन के कोने में नई नोटिफिकेशन दिखाई देगी: प्रमाणपत्र को Robonomics और IPFS में अपलोड कर दिया गया है, साथ ही प्रिंटिंग सील टैग और प्रमाणपत्र के लिए QR-कोड के बारे में दो नीले संदेश।\")])])]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"feecc-course/single_certificate.png\",\n      \"alt\": \"Cetrificate of single composition\"\n    }\n  }), _c('ol', {\n    attrs: {\n      \"start\": \"7\"\n    }\n  }, [_c('li', [_vm._v(\"Robonomics स्थानीय नोड स्क्रीन पर \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Chain info\")]), _vm._v(\" खंड े तहत, आपको \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"recent events\")]), _vm._v(\" स्तंभ के तहत एक नया घटना \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"datalog.NewRecord\")]), _vm._v(\" दिखाई देना चाहिए। अगर आप इसे विस्तारित करते हैं, तो उपकरण के प्रमाणपत्र फ़ाइल के लिए IPFS CID दिखाई देगा।\")])]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"feecc-course/single_datalog.png\",\n      \"alt\": \"Datalog of single composition\"\n    }\n  }), _c('p', [_vm._v(\"मुद्रित QR कोड में इस सीआईडी का लिंक होता है, जिससे ब्राउज़र में प्रमाणपत्र फ़ाइल खोल सकते हैं। क्योंकि आपके स्थानीय IPFS नोड में उस खोजने की क्षमता नहीं हो सकती, आप \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"localhost:8080/ipfs/CID\")]), _vm._v(\" के साथ स्थानीय रूप से फ़ाइल तक पहुंच सकते हैं। प्रमाणपत्र की सामग्री कुछ इस प्रकार दिखती है:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"json\",\n      \"codeClass\": \"big-code\",\n      \"noLines\": \"\",\n      \"noCopyIcon\": \"\"\n    }\n  }, [_vm._v(\"\\nUnit Unique Code: 423d3c1b42f6427e80cc881a16e07451\\nUnit Model Name: Single Device\\nTotal Assembly Time: 0:05:37\\nProduction Stages:\\n- Name: Prepare Tools (not finished.)\\n  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234\\n  Start Time: 26-06-2023 17:38:47\\n  Finish Time: 26-06-2023 17:40:28\\n  Assembly data in IPFS: This is a place for any production data, let it be video\\n    record, some sensor data or any other data collection representing the production\\n    process.\\n- Name: Prepare Tools (not finished.)\\n  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234\\n  Start Time: 26-06-2023 17:40:30\\n  Finish Time: 26-06-2023 17:42:06\\n  Assembly data in IPFS: This is a place for any production data, let it be video\\n    record, some sensor data or any other data collection representing the production\\n    process.\\n- Name: Prepare Tools\\n  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234\\n  Start Time: 26-06-2023 17:42:16\\n  Finish Time: 26-06-2023 17:43:00\\n  Assembly data in IPFS: This is a place for any production data, let it be video\\n    record, some sensor data or any other data collection representing the production\\n    process.\\n- Name: Saw Through the Single Device\\n  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234\\n  Start Time: 26-06-2023 17:43:00\\n  Finish Time: 26-06-2023 17:43:51\\n  Assembly data in IPFS: This is a place for any production data, let it be video\\n    record, some sensor data or any other data collection representing the production\\n    process.\\n- Name: Stack Tools\\n  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234\\n  Start Time: 26-06-2023 17:43:51\\n  Finish Time: 26-06-2023 17:44:36\\n  Assembly data in IPFS: This is a place for any production data, let it be video\\n    record, some sensor data or any other data collection representing the production\\n    process.\\n\")]), _c('ol', {\n    attrs: {\n      \"start\": \"8\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"अब हम कई उपकरणों से मिलकर एक संयोजन संयंत्र के लिए प्रमाणपत्र बनाने की कोशिश करेंगे। प्रकार चयन मेनू में, \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"कॉम्पोज़िट उपकरण\")]), _vm._v(\" पर क्लिक करें, और फिर \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"नमूना उपकरण\")]), _vm._v(\" पर क्लिक करें। इसका यूनिट आईडी कॉपी करें (संयोजन संख्या क्षेत्र में स्थित), क्योंकि आपको बाद में इसकी आवश्यकता होगी। फिर, उपकरण को संयोजित करने के मानक चरणों के साथ आगे बढ़ें।\")])]), _c('li', [_c('p', [_vm._v(\"संयोजन के बाद, \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"कॉम्पोज़िट उपकरण\")]), _vm._v(\" पर वापस जाएं और संयोजन संयंत्र को समाप्त करने के लिए \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"अंतिम संयोजन\")]), _vm._v(\" दबाएं। सिस्टम आपसे संयोजित उपकरणों के यूनिट आईडी प्रदान करने के लिए कहेगा, जिसके लिए कर्मचारी को उनके बार कोड को स्कैन करना होगा। इस प्रक्रिया को अनुकरण करने के लिए, \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"hid-emulator.py\")]), _vm._v(\" पर वापस जाएं और बारकोड स्कैनिंग के लिए फ़ंक्शन \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"2\")]), _vm._v(\" का चयन करें, और वहां सहेजे गए यूनिट आईडी डालें।\")])]), _c('li', [_c('p', [_vm._v(\"अगले, सिस्टम आवश्यक संयोजन के आवश्यक चरणों के माध्यम से जाने के लिए प्रोत्साहित करगा और इसके लिए प्रमाणपत्र उत्पन्न करेगा:\")])])]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"json\",\n      \"codeClass\": \"big-code\",\n      \"noLines\": \"\",\n      \"noCopyIcon\": \"\"\n    }\n  }, [_vm._v(\"\\nUnit Unique Code: d08101feae7c4efbb5529885c9ad544b\\nUnit Model Name: Composite Device\\nTotal Assembly Time: 0:00:03\\nProduction Stages:\\n- Name: Prepare Tools\\n  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234\\n  Start Time: 26-06-2023 18:18:25\\n  Finish Time: 26-06-2023 18:18:26\\n  Assembly data in IPFS: This is a place for any production data, let it be video\\n    record, some sensor data or any other data collection representing the production\\n    process.\\n- Name: Tape the Sample Device to the base plate\\n  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234\\n  Start Time: 26-06-2023 18:18:26\\n  Finish Time: 26-06-2023 18:18:27\\n  Assembly data in IPFS: This is a place for any production data, let it be video\\n    record, some sensor data or any other data collection representing the production\\n    process.\\n- Name: Stack Tools\\n  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234\\n  Start Time: 26-06-2023 18:18:27\\n  Finish Time: 26-06-2023 18:18:28\\n  Assembly data in IPFS: This is a place for any production data, let it be video\\n    record, some sensor data or any other data collection representing the production\\n    process.\\nUnit Components:\\n- Unit Unique Code: b165b382c3674127a6aaf5817c5a7040\\n  Unit Model Name: Sample Device\\n  Total Assembly Time: 0:00:03\\n  Production Stages:\\n  - Name: Prepare Tools\\n    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234\\n    Start Time: 26-06-2023 18:17:45\\n    Finish Time: 26-06-2023 18:17:46\\n    Assembly data in IPFS: This is a place for any production data, let it be video\\n      record, some sensor data or any other data collection representing the production\\n      process.\\n  - Name: Assemble Sample Device\\n    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234\\n    Start Time: 26-06-2023 18:17:46\\n    Finish Time: 26-06-2023 18:17:47\\n    Assembly data in IPFS: This is a place for any production data, let it be video\\n      record, some sensor data or any other data collection representing the production\\n      process.\\n  - Name: Stack Tools\\n    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234\\n    Start Time: 26-06-2023 18:17:47\\n    Finish Time: 26-06-2023 18:17:48\\n    Assembly data in IPFS: This is a place for any production data, let it be video\\n      record, some sensor data or any other data collection representing the production\\n      process.\\nTotal Assembly Time (Including Components): 0:00:06\\n\")]), _c('ol', {\n    attrs: {\n      \"start\": \"11\"\n    }\n  }, [_c('li', [_vm._v(\"डेमो को हटाने के लिए, कमांड दर्ज करें:\")])]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\nsudo docker compose down --rmi all && docker builder prune -f\\n\")]), _c('RoboAcademyText', {\n    attrs: {\n      \"fWeight\": \"500\"\n    }\n  }, [_vm._v(\"\\nअगले सबक में, हम फीक सिस्टम के सभी आवश्यक घटकों का वास्तविक डिप्लॉयमेंट करने के लिए आगे बढ़ेंगे।\\n\")])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./courses/hi/learn/feecc-course/feecc-workbench-demo.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%221800f5b0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "crCS":
/*!************************************************************************************************************************!*\
  !*** ./courses/hi/learn/feecc-course/feecc-workbench-demo.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_demo_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./feecc-workbench-demo.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Vhe9\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_demo_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/hi/learn/feecc-course/feecc-workbench-demo.md?");

/***/ }),

/***/ "gYb+":
/*!*********************************************************************************************!*\
  !*** ./courses/hi/learn/feecc-course/feecc-workbench-demo.md?vue&type=template&id=2428eec4 ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_demo_md_vue_type_template_id_2428eec4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"1800f5b0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/babel-loader/lib??ref--1-1!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./feecc-workbench-demo.md?vue&type=template&id=2428eec4 */ \"aQ+N\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_demo_md_vue_type_template_id_2428eec4__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_workbench_demo_md_vue_type_template_id_2428eec4__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/hi/learn/feecc-course/feecc-workbench-demo.md?");

/***/ }),

/***/ "yw7O":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/hi/learn/feecc-course/feecc-workbench-demo.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/hi/learn/feecc-course/feecc-workbench-demo.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);