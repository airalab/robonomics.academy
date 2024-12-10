(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--en--learn--sensors-connectivity-course--sensors-connectivity-module-md"],{

/***/ "6ZNr":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"1800f5b0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?vue&type=template&id=494d2f6c ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"In the following articles, you will learn more about the Sensor Connectivity module. After that, you can join hosting our Decentralized Sensors Network or create your own sensor map.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"about-sensors-connectivity\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#about-sensors-connectivity\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"About Sensors Connectivity\")]), _c('p', [_vm._v(\"Decentralized Sensors Network uses the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"sensors-connectivity\")]), _vm._v(\" Python module (\"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/sensors-connectivity\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"source code\")]), _vm._v(\"). This module allows any user to launch their own server to receive data from sensors and process it further. At the moment, the developers have launched several such servers and any sensor can send data to them. Running multiple servers avoids data loss in case of problems with one of them, as the sensors will switch from a non-working server to a working one. Basically, you can think of the Sensors Connectivity module as a black box with one input (sensor data) and many outputs.\")]), _c('LessonImages', {\n    attrs: {\n      \"figure\": \"\",\n      \"figureCaption\": \"Module architecture\",\n      \"src\": \"sensors-connectivity-course/lesson-4-1.png\",\n      \"alt\": \"Module architecture\"\n    }\n  }), _c('p', [_vm._v(\"Sensors Connectivity module is a set of stations (station_1, station_2 ... station_n), which receive various data, including data from sensors via HTTP protocol. Also it can be sensors connected to the computer via USB or any other data source. Data received from the stations are processed by the module and passed to feeders (feeder_1, feeder_2 ... feeder_n). The feeders send the processed data to the user; in our case the data is sent to the decentralized IPFS channel. \")]), _c('p', [_vm._v(\"A map of \"), _c('a', {\n    attrs: {\n      \"href\": \"https://sensors.robonomics.network/#/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Decentralized Sensors Network\")]), _vm._v(\" is a decentralized application (dapp) running on the computer. It reads data from the IPFS channel and displays it on the map. There is no direct connection between the server that collects data from the sensors and the map that the user sees; data is transferred between them via IPFS pubsub, which reduces the load on the servers. \")]), _c('p', [_vm._v(\"In addition, from time to time, a file with data for the last period of time is stored in IPFS, and a hash of this data is then recorded on the blockchain. Since IPFS is a content-addressed network, storing data in it ensures that any data change does not go unnoticed, because the address of the needed file contains a hash of its content, which will change with any data change. The blockchain is used to pass the hash to the user, who can use it to get the needed data from IPFS (this happens when you request a history of the map).\")]), _c('h2', {\n    attrs: {\n      \"id\": \"module-setup-for-linux\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#module-setup-for-linux\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Module Setup for Linux\")]), _c('p', [_c('strong', [_vm._v(\"Pre-requirements and Installation\")])]), _c('List', {\n    attrs: {\n      \"type\": \"numbers\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"To build \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"sensors-connectivity\")]), _vm._v(\" module the IPFS daemon has to be installed with version no greater than \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0.8.x\")]), _vm._v(\". Assuming, you work on Linux, execute the following (for version \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"0.8.0\")]), _vm._v(\"):\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"codeClass\": \"big-code\",\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz\\ntar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz\\ncd go-ipfs\\nsudo bash install.sh\\nipfs init\")])], 1), _c('li', [_c('p', [_vm._v(\"Install package with development tools \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"python3-dev\")]), _vm._v(\" and package installer for Python \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"pip\")]), _vm._v(\":\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"codeClass\": \"long-code\",\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"sudo apt install python3-dev python3-pip\")])], 1), _c('li', [_c('p', [_vm._v(\"Install the module as a PyPI package:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"codeClass\": \"long-code\",\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"pip3 install sensors-connectivity\")]), _c('p', [_vm._v(\"If you see following warning: \")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"codeClass\": \"big-code\",\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.\\nConsider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.\")]), _c('p', [_vm._v(\"Run next command:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"cd ~\\nexport PATH=\\\"/usr/local/bin:$PATH\\\"\\nsource .profile\")])], 1)]), _c('h2', {\n    attrs: {\n      \"id\": \"configuration\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#configuration\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Configuration\")]), _c('List', {\n    attrs: {\n      \"type\": \"numbers\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"Create directory for configuration file and database file wherever you want. This database will save IPFS hashes of sensor data, timestamp and service status:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"cd ~\\nmkdir sensors_connectivity\\ncd sensors_connectivity\\ntouch database.db\")]), _c('RoboAcademyNote', {\n    attrs: {\n      \"type\": \"okay\",\n      \"title\": \"INFO\"\n    }\n  }, [_vm._v(\"\\nName of the database file can be any, but extension must be \"), _c('code', [_vm._v(\".db\")])])], 1), _c('li', [_c('p', [_vm._v(\"Create configuration file in the same directory:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"touch my_config.json\")])], 1), _c('li', [_c('p', [_vm._v(\"Copypaste the following to the file and insert full path to the database file in db_path field. This configuration will be enough to get sensors data over HTTP and send it to the Robonomics map:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"codeClass\": \"big-code\",\n      \"language\": \"json\"\n    }\n  }, [_vm._v(\"{\\n   \\\"general\\\": {\\n      \\\"publish_interval\\\": 30,\\n      \\\"db_path\\\": \\\"\"), _vm._v(\"/PATH/TO/DATABASE>\\\"\\n   },\\n   \\\"comstation\\\": {\\n      \\\"enable\\\": false,\\n      \\\"port\\\": \\\"/dev/\"), _vm._v(\"/PATH/TO/BOARD>\\\",\\n      \\\"work_period\\\": 300,\\n      \\\"geo\\\": \\\"00.000000,00.000000\\\",\\n      \\\"public_key\\\": \\\"\\\"\\n   },\\n   \\\"httpstation\\\": {\\n      \\\"enable\\\": true,\\n      \\\"port\\\": 8001\\n   },\\n   \\\"mqttstation\\\": {\\n      \\\"enable\\\": false,\\n      \\\"host\\\": \\\"localhost\\\",\\n      \\\"port\\\": 1883,\\n      \\\"topic\\\": \\\"/freertos_mqtt_robonomics_example/#\\\",\\n      \\\"username\\\": \\\"\\\",\\n      \\\"password\\\": \\\"\\\"\\n   },\\n   \\\"robonomics\\\": {\\n      \\\"enable\\\": true,\\n      \\\"ipfs_provider\\\": \\\"/ip4/127.0.0.1/tcp/5001/http\\\",\\n      \\\"ipfs_topic\\\": \\\"airalab.lighthouse.5.robonomics.eth\\\"\\n   },\\n   \\\"datalog\\\": {\\n      \\\"enable\\\": false,\\n      \\\"suri\\\": \\\"\\\",\\n      \\\"dump_interval\\\": 60,\\n      \\\"temporal_username\\\": \\\"\\\",\\n      \\\"temporal_password\\\": \\\"\\\",\\n      \\\"pinata_api\\\": \\\"\\\",\\n      \\\"pinata_secret\\\": \\\"\\\"\\n   },\\n   \\\"dev\\\": {\\n      \\\"sentry\\\": \\\"\\\"\\n   },\\n   \\\"frontier\\\": {\\n      \\\"enable\\\": false,\\n      \\\"suri\\\": \\\"\\\"\\n   },\\n   \\\"trackagro\\\": {\\n      \\\"enable\\\": false,\\n      \\\"token\\\": \\\"\\\"\\n   }\\n}\")])], 1)]), _c('h2', {\n    attrs: {\n      \"id\": \"launch\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#launch\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Launch\")]), _c('List', {\n    attrs: {\n      \"type\": \"numbers\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"Launch IPFS daemon:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"codeCLass\": \"big-code\",\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"ipfs daemon --enable-pubsub-experiment\")])], 1), _c('li', [_c('p', [_vm._v(\"After config is set, run the service with the path to config file in another terminal:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"sensors_connectivity \\\"path/to/your/config/file”\")])], 1), _c('li', [_c('p', [_vm._v(\"You will see logs in the terminal (also, they will be added to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"~/.logs\")]), _vm._v(\"). Example:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"codeClass\": \"big-code\",\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"$ sensors_connectivity test.json\\n2022-09-02 14:08:48,408 - INFO - Getting data from the stations...\\n2022-09-02 14:08:48,409 - INFO - airalab-http-v0.8.0: [[]]\\n2022-09-02 14:08:48,409 - INFO - Sending result to the feeders...\\n2022-09-02 14:08:48,411 - INFO - Checking data base...\\n2022-09-02 14:09:18,410 - INFO - Sending result to the feeders...\\n2022-09-02 14:09:18,410 - INFO - Getting data from the stations...\\n2022-09-02 14:09:18,411 - INFO - airalab-http-v0.8.0: [[]]\\n2022-09-02 14:09:48,411 - INFO - Sending result to the feeders...\\n2022-09-02 14:09:48,412 - INFO - Getting data from the stations...\\n2022-09-02 14:09:48,413 - INFO - airalab-http-v0.8.0: [[]]\\n2022-09-02 14:10:18,413 - INFO - Sending result to the feeders...\\n2022-09-02 14:10:18,413 - INFO - Getting data from the stations...\")])], 1)]), _c('h2', {\n    attrs: {\n      \"id\": \"post-installation\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#post-installation\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Post-installation\")]), _c('p', [_vm._v(\"To connect your \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"sensors-connectivity\")]), _vm._v(\" module to our Decentralized Sensors Network and see your data on the map, you have to send your IPFS ID to \"), _c('a', {\n    attrs: {\n      \"href\": \"mailto:vm@multi-agent.io\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"vm@multi-agent.io\")]), _vm._v(\" or \"), _c('a', {\n    attrs: {\n      \"href\": \"mailto:ping@airalab.org\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"ping@airalab.org\")]), _vm._v(\". We will add your ID to an access-control list.\")]), _c('p', [_vm._v(\"Get your IPFS \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"ID\")]), _vm._v(\" with the following command after running IPFS daemon:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"codeClass\": \"big-code\",\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"$ ipfs id\\n{\\n\\t\\\"ID\\\": \\\"QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP\\\",\\n\\t\\\"PublicKey\\\": \\\"CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...\\n    ...\")])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%221800f5b0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "LlDX":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "MZ8q":
/*!*******************************************************************************************************************!*\
  !*** ./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?vue&type=template&id=494d2f6c ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_template_id_494d2f6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"1800f5b0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/babel-loader/lib??ref--1-1!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sensors-connectivity-module.md?vue&type=template&id=494d2f6c */ \"6ZNr\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_template_id_494d2f6c__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_template_id_494d2f6c__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?");

/***/ }),

/***/ "OUOy":
/*!**********************************************************************************************************************************************!*\
  !*** ./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sensors-connectivity-module.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Yib5\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?");

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

/***/ "WzEa":
/*!*****************************************************************************************************************************************!*\
  !*** ./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./sensors-connectivity-module.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"LlDX\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_sensors_connectivity_module_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?");

/***/ }),

/***/ "Yib5":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Lesson #4, Sensors connectivity module\",\n  \"description\": \"SENSORS CONNECTIVITY MODULE\",\n  \"lessonNumber\": 4,\n  \"metaOptions\": [\"Learn\", \"Sensors Connectivity & Decentralized Sensors Network\"],\n  \"defaultName\": \"Sensors Connectivity & Decentralized Sensors Network\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "lcSm":
/*!*************************************************************************************!*\
  !*** ./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sensors_connectivity_module_md_vue_type_template_id_494d2f6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sensors-connectivity-module.md?vue&type=template&id=494d2f6c */ \"MZ8q\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _sensors_connectivity_module_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sensors-connectivity-module.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"WzEa\");\n/* harmony import */ var _sensors_connectivity_module_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sensors-connectivity-module.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"OUOy\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _sensors_connectivity_module_md_vue_type_template_id_494d2f6c__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _sensors_connectivity_module_md_vue_type_template_id_494d2f6c__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _sensors_connectivity_module_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_sensors_connectivity_module_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _sensors_connectivity_module_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_sensors_connectivity_module_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/en/learn/sensors-connectivity-course/sensors-connectivity-module.md?");

/***/ })

}]);