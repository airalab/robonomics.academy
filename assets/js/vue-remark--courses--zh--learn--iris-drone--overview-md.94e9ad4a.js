(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--zh--learn--iris-drone--overview-md"],{

/***/ "/k1T":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"1800f5b0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/zh/learn/iris-drone/overview.md?vue&type=template&id=34eee73e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_c('strong', [_vm._v(\"交易后，无人机开始移动，并将文件存储在IPFS中的坐标。控制脚本基于\"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/generalized-intelligence/GAAS\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"GAAS演示脚本\")])])]), _c('div', {\n    staticClass: \"youtube-embed\"\n  }, [_c('div', {\n    staticStyle: {\n      \"width\": \"100%\",\n      \"margin\": \"0 auto\"\n    }\n  }, [_c('div', {\n    staticStyle: {\n      \"position\": \"relative\",\n      \"padding-bottom\": \"56.25%\",\n      \"padding-top\": \"25px\",\n      \"height\": \"0\"\n    }\n  }, [_c('iframe', {\n    staticStyle: {\n      \"position\": \"absolute\",\n      \"top\": \"0\",\n      \"left\": \"0\",\n      \"width\": \"100%\",\n      \"height\": \"100%\"\n    },\n    attrs: {\n      \"src\": \"https://www.youtube-nocookie.com/embed/4CwtGAX1OwM\",\n      \"allow\": \"autoplay; encrypted-media\",\n      \"allowfullscreen\": \"\"\n    }\n  })])])]), _c('br'), _c('h2', {\n    attrs: {\n      \"id\": \"要求\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E8%A6%81%E6%B1%82\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"要求\")]), _c('List', [_c('li', [_vm._v(\" 控制的依赖项:\\n\"), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\nsudo apt install -y \\\\\\n\\tpython3-pip \\\\\\n\\tninja-build \\\\\\n\\texiftool \\\\\\n\\tpython-argparse \\\\\\n\\tpython-empy \\\\\\n\\tpython-toml \\\\\\n\\tpython-numpy \\\\\\n\\tpython-yaml \\\\\\n\\tpython-dev \\\\\\n\\tpython-pip \\\\\\n\\tninja-build \\\\\\n\\tprotobuf-compiler \\\\\\n\\tlibeigen3-dev \\\\\\n\\tgenromfs\\n\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\npip3 install \\\\\\n\\tpandas \\\\\\n\\tjinja2 \\\\\\n\\tpyserial \\\\\\n\\tcerberus \\\\\\n\\tpyulog \\\\\\n\\tnumpy \\\\\\n\\ttoml \\\\\\n\\tpyquaternion\\n\")])], 1), _c('li', {\n    staticClass: \"flex\"\n  }, [_c('p', [_vm._v(\"ROS Melodic + Gazebo \"), _c('a', {\n    attrs: {\n      \"href\": \"http://wiki.ros.org/melodic/%E5%AE%89%E8%A3%85\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"安装教程\")])])]), _c('li', [_vm._v(\"额外软件包:\\n\"), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\nsudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller\\nsudo apt-get install python-jinja2\\nsudo apt-get install python-catkin-pkg\\nsudo apt-get install python3-catkin-pkg-modules\\n\")])], 1), _c('li', [_vm._v(\"IPFS版本0.4.22\\n\"), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\nwget https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-amd64.tar.gz\\ntar -xvzf go-ipfs_v0.4.22_linux-amd64.tar.gz\\ncd go-ipfs\\nsudo bash install.sh\\nipfs init\\n\")])], 1), _c('li', [_vm._v(\"ipfshttpclient\\n\"), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\npip3 install ipfshttpclient\\n\")])], 1), _c('li', {\n    staticClass: \"flex\"\n  }, [_c('p', [_vm._v(\"Robonomics节点（二进制文件）（下载最新版本\"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/robonomics/releases\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"在此处\")]), _vm._v(\"）\")])])]), _c('br'), _c('h2', {\n    attrs: {\n      \"id\": \"环境设置\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E7%8E%AF%E5%A2%83%E8%AE%BE%E7%BD%AE\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"环境设置\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\nsudo apt-get install ros-melodic-mavros ros-melodic-mavros-extras\\nwget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh\\nsudo ./install_geographiclib_datasets.sh\\ncd ~/catkin_ws/src\\ngit clone https://github.com/PX4/Firmware.git\\ncd Firmware\\ngit checkout v1.9.0\\nbash ./Tools/setup/ubuntu.sh\\n\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\ncd ~/catkin_ws/src\\ngit clone https://github.com/generalized-intelligence/GAAS.git\\ncp -r ~/catkin_ws/src/GAAS/simulator/models/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/models/\\ncp -r ~/catkin_ws/src/GAAS/simulator/worlds/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/worlds/\\ncp -r ~/catkin_ws/src/GAAS/simulator/posix-config/* ~/catkin_ws/src/Firmware/posix-configs/SITL/init/ekf2/\\n\")]), _c('p', [_vm._v(\"修改您的\"), _c('code', {\n    pre: true\n  }, [_vm._v(\".bashrc\")]), _vm._v(\"文件，在底部添加以下行:  \")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"json\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\nsource ~/catkin_ws/devel/setup.bash   \\nsource ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default \\nexport GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models \\nexport ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware \\nexport ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo\\nexport GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models\\n\")]), _c('h2', {\n    attrs: {\n      \"id\": \"控制包安装\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E6%8E%A7%E5%88%B6%E5%8C%85%E5%AE%89%E8%A3%85\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"控制包安装\")]), _c('p', [_vm._v(\"在新的终端中:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\ncd catkin_ws/src\\ngit clone https://github.com/tubleronchik/robonomics_drone_sim.git\\ncd ..\\ncatkin build\\n\")]), _c('h2', {\n    attrs: {\n      \"id\": \"robonomics网络\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#robonomics%E7%BD%91%E7%BB%9C\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Robonomics网络\")]), _c('p', [_vm._v(\"要创建本地的robonomics网络，请转到包含robonomic二进制文件的文件夹并运行:  \")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\n./robonomics --dev --rpc-cors all\\n\")]), _c('p', [_vm._v(\"将robonomic的路径添加到\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"config.py\")])]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"iris-drone/IPFS.jpg\",\n      \"alt\": \"IPFS\"\n    }\n  }), _c('p', [_vm._v(\"转到\"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Robonomics Parachain门户\")]), _vm._v(\"并切换到本地节点。\")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"iris-drone/localNode.jpg\",\n      \"alt\": \"localNode\"\n    }\n  }), _c('p', [_vm._v(\"转到\"), _c('strong', [_vm._v(\"账户\")]), _vm._v(\"并创建\"), _c('strong', [_vm._v(\"DRONE\")]), _vm._v(\"和\"), _c('strong', [_vm._v(\"EMPLOYER\")]), _vm._v(\"账户。保存帐户名称、密钥和路径到\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"~/catkin_ws/src/drone_sim/src/config.py\")]), _vm._v(\"。向账户转账一些资金。\")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"iris-drone/addingAcc.jpg\",\n      \"alt\": \"accounts\"\n    }\n  }), _c('h2', {\n    attrs: {\n      \"id\": \"运行模拟\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E8%BF%90%E8%A1%8C%E6%A8%A1%E6%8B%9F\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"运行模拟\")]), _c('p', [_vm._v(\"运行IPFS守护程序\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\ncd go-ipfs\\nipfs daemon\\n\")]), _c('p', [_vm._v(\"在另一个终端启动模拟:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\nroslaunch px4 mavros_posix_sitl.launch\\ncd ~/catkin_ws/src/robonomics_drone_sim/src\\npython3 takeoff.py\\n\")]), _c('p', [_vm._v(\"等待直到\\\"等待付款\\\" \")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"iris-drone/launch.jpg\",\n      \"alt\": \"launch\"\n    }\n  }), _c('p', [_vm._v(\"要发送交易，请在另一个窗口运行:\\n\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"echo \\\"ON\\\" | ./robonomics io write launch -r <drone_addres> -s <employer_key>\")]), _vm._v(\" - 其中\"), _c('strong', [_vm._v(\"<drone_address>\")]), _vm._v(\"和\"), _c('strong', [_vm._v(\"<employer_key>\")]), _vm._v(\"应分别替换为\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"config.py\")]), _vm._v(\"中的字符串。\")]), _c('p', [_vm._v(\"数据推送到IPFS后，转到\"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Robonomics Parachain门户\")]), _vm._v(\"中的\"), _c('strong', [_vm._v(\"Chain State\")]), _vm._v(\"。选择查询中的\"), _c('strong', [_vm._v(\"datalog\")]), _vm._v(\"，并使用\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"+\")]), _vm._v(\"按钮添加DRONE数据日志。\")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"iris-drone/datalog.jpg\",\n      \"alt\": \"datalog\"\n    }\n  }), _c('p', [_vm._v(\"您可以通过运行\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"https://gateway.ipfs.io/ipfs/<hash>\")]), _vm._v(\"来查找无人机的遥测数据，插入上述哈希。\")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"iris-drone/output.jpg\",\n      \"alt\": \"output\"\n    }\n  }), _c('p', [_vm._v(\"在下次启动之前删除\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"db\")]), _vm._v(\"目录是很重要的\"), _c('br'), _c('code', {\n    pre: true\n  }, [_vm._v(\"rm -rf ~/.local/share/robonomics/chains/dev/db\")])])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./courses/zh/learn/iris-drone/overview.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%221800f5b0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "6j07":
/*!*****************************************************************************************************!*\
  !*** ./courses/zh/learn/iris-drone/overview.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"uhqo\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/zh/learn/iris-drone/overview.md?");

/***/ }),

/***/ "Kbjd":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/zh/learn/iris-drone/overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"连接无人机\",\n  \"lastUpdate\": \"Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)\",\n  \"description\": \"连接无人机\",\n  \"metaOptions\": [\"学习\"],\n  \"defaultName\": \"Connect unmanned aerial vehicle\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/zh/learn/iris-drone/overview.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

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

/***/ "XyaC":
/*!*************************************************!*\
  !*** ./courses/zh/learn/iris-drone/overview.md ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _overview_md_vue_type_template_id_34eee73e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview.md?vue&type=template&id=34eee73e */ \"fa65\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"6j07\");\n/* harmony import */ var _overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"gHV9\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _overview_md_vue_type_template_id_34eee73e__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _overview_md_vue_type_template_id_34eee73e__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/zh/learn/iris-drone/overview.md?");

/***/ }),

/***/ "fa65":
/*!*******************************************************************************!*\
  !*** ./courses/zh/learn/iris-drone/overview.md?vue&type=template&id=34eee73e ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_34eee73e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"1800f5b0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/babel-loader/lib??ref--1-1!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=template&id=34eee73e */ \"/k1T\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_34eee73e__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_34eee73e__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/zh/learn/iris-drone/overview.md?");

/***/ }),

/***/ "gHV9":
/*!**********************************************************************************************************!*\
  !*** ./courses/zh/learn/iris-drone/overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Kbjd\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/zh/learn/iris-drone/overview.md?");

/***/ }),

/***/ "uhqo":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/zh/learn/iris-drone/overview.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/zh/learn/iris-drone/overview.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);