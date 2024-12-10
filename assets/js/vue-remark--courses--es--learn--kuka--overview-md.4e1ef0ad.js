(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--es--learn--kuka--overview-md"],{

/***/ "7UCL":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"1800f5b0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/es/learn/kuka/overview.md?vue&type=template&id=32fb8eca ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"El video con un ejemplo de trabajo se puede encontrar aquí:\")]), _c('div', {\n    staticClass: \"youtube-embed\"\n  }, [_c('div', {\n    staticStyle: {\n      \"width\": \"100%\",\n      \"margin\": \"0 auto\"\n    }\n  }, [_c('div', {\n    staticStyle: {\n      \"position\": \"relative\",\n      \"padding-bottom\": \"56.25%\",\n      \"padding-top\": \"25px\",\n      \"height\": \"0\"\n    }\n  }, [_c('iframe', {\n    staticStyle: {\n      \"position\": \"absolute\",\n      \"top\": \"0\",\n      \"left\": \"0\",\n      \"width\": \"100%\",\n      \"height\": \"100%\"\n    },\n    attrs: {\n      \"src\": \"https://www.youtube-nocookie.com/embed/z55HepXbHr8\",\n      \"allow\": \"autoplay; encrypted-media\",\n      \"allowfullscreen\": \"\"\n    }\n  })])])]), _c('br'), _c('hr'), _c('br'), _c('h2', {\n    attrs: {\n      \"id\": \"requisitos\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#requisitos\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Requisitos\")]), _c('List', [_c('li', {\n    staticClass: \"flex\"\n  }, [_c('p', [_vm._v(\"ROS melodic, Gazebo (instrucciones de instalación \"), _c('a', {\n    attrs: {\n      \"href\": \"http://wiki.ros.org/melodic/Instalaci%C3%B3n/Ubuntu\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"aquí\")]), _vm._v(\")\")])]), _c('li', [_vm._v(\"Algunos paquetes adicionales\\n\"), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\nsudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller\\n\")])], 1), _c('li', [_vm._v(\" IPFS 0.4.22 \\n\"), _c('p', [_vm._v(\"(descargar desde \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.npackd.org/p/ipfs/0.4.22\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"aquí\")]), _vm._v(\" e instalar)\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\ntar -xvzf go-ipfs_v0.4.22_linux-386.tar.gz\\ncd go-ipfs/\\nsudo bash install.sh\\nipfs init\\n\")])], 1), _c('li', [_vm._v(\"pip3\\n\"), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\nsudo apt-get install python3-pip\\n\")])], 1), _c('li', [_vm._v(\"ipfshttpclient\\n\"), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\npip3 install ipfshttpclient\\n\")])], 1), _c('li', [_vm._v(\"substrate-interface\\n\"), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\npip3 install substrate-interface\\n\")])], 1), _c('li', {\n    staticClass: \"flex\"\n  }, [_c('p', [_vm._v(\"Nodo Robonomics (archivo binario) (descargar la última versión \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/robonomics/releases\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"aquí\")]), _vm._v(\")\")])]), _c('li', [_vm._v(\"Extensión del navegador IPFS (no es necesaria)\")])]), _c('br'), _c('hr'), _c('br'), _c('h2', {\n    attrs: {\n      \"id\": \"instalación\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#instalaci%C3%B3n\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Instalación\")]), _c('p', [_vm._v(\"Instalar el manipulador Kuka y los paquetes de control\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"cd catkin_wc/src/\\ngit clone https://github.com/orsalmon/kuka_manipulator_gazebo\\ngit clone https://github.com/LoSk-p/kuka_controller\\ncd ..\\ncatkin_make\")]), _c('hr'), _c('br'), _c('h2', {\n    attrs: {\n      \"id\": \"ejecutar-el-modelo-de-gazebo\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#ejecutar-el-modelo-de-gazebo\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Ejecutar el modelo de gazebo\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\nsource ~/catkin_ws/devel/setup.bash\\nroslaunch manipulator_gazebo manipulator_empty_world.launch\\n\")]), _c('p', [_vm._v(\"En una nueva ventana\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\nsource ~/catkin_ws/devel/setup.bash\\nrosrun manipulator_gazebo move_arm_server\\n\")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"kuka/1.png\",\n      \"alt\": \"model\"\n    }\n  }), _c('hr'), _c('br'), _c('h2', {\n    attrs: {\n      \"id\": \"ejecutar-robonomics\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#ejecutar-robonomics\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Ejecutar robonomics\")]), _c('p', [_vm._v(\"Ir a la carpeta con el archivo de robonomics y crear una red de robonomics local:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\n./robonomics --dev --tmp\\n\")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"kuka/robonomics.png\",\n      \"alt\": \"robonomics\"\n    }\n  }), _c('p', [_vm._v(\"Ir a \"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Portal de Parachain Robonomics\")]), _vm._v(\" y cambiar a nodo local\")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"kuka/local.png\",\n      \"alt\": \"local\"\n    }\n  }), _c('p', [_vm._v(\"Luego ir a Cuentas y crear la cuenta \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"KUKA\")]), _vm._v(\". Guarda la clave mnemotécnica de la cuenta, la necesitarás más tarde. \")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"kuka/create_acc.png\",\n      \"alt\": \"acc\"\n    }\n  }), _c('p', [_vm._v(\"Enviar algunas unidades a la nueva cuenta desde una de las cuentas predeterminadas.\")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"kuka/send_money.png\",\n      \"alt\": \"accs\"\n    }\n  }), _c('hr'), _c('br'), _c('h2', {\n    attrs: {\n      \"id\": \"ejecutar-ipfs\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#ejecutar-ipfs\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Ejecutar ipfs\")]), _c('p', [_vm._v(\"Ejecutar ipfs daemon:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\nipfs daemon\\n\")]), _c('hr'), _c('br'), _c('h2', {\n    attrs: {\n      \"id\": \"ejecutar-paquete-de-control\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#ejecutar-paquete-de-control\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Ejecutar paquete de control\")]), _c('p', [_vm._v(\"En el directorio de configuración en el paquete de control de kuka_control necesitas crear un archivo de configuración con estas líneas, donde \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"<tu_mnemotécnico>\")]), _vm._v(\" es la semilla mnemotécnica guardada:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\n{\\n    \\\"kuka_mnemonic\\\": \\\"[your_mnemonic]\\\",\\n    \\\"node\\\": \\\"ws://127.0.0.1:9944\\\"\\n}\\n\")]), _c('p', [_vm._v(\"Ahora puedes ejecutar el script de control:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\nsource ~/catkin_ws/devel/setup.bash\\nrosrun kuka_controller move_arm_client.py\\n\")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"kuka/run.png\",\n      \"alt\": \"control\"\n    }\n  }), _c('h2', {\n    attrs: {\n      \"id\": \"enviando-transacción\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#enviando-transacci%C3%B3n\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Enviando transacción\")]), _c('p', [_vm._v(\"En \"), _c('a', {\n    attrs: {\n      \"href\": \"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Portal de Parachain Robonomics\")]), _vm._v(\" ve a \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Desarrollador/Extrínsecos\")]), _vm._v(\", cambia \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"extrínseco\")]), _vm._v(\" a \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"lanzamiento\")]), _vm._v(\". Elige tu cuenta \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"KUKA\")]), _vm._v(\" en \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"robot\")]), _vm._v(\" y cambia \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"param\")]), _vm._v(\" a \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Sí\")]), _vm._v(\". Luego presiona \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Enviar transacción\")])]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"kuka/launch.png\",\n      \"alt\": \"transaction\"\n    }\n  }), _c('p', [_vm._v(\"En la ventana con el paquete de control de kuka_control verás:\")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"kuka/res.png\",\n      \"alt\": \"done\"\n    }\n  }), _c('p', [_vm._v(\"Luego ve a \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Desarrollador/Estado de la Cadena\")]), _vm._v(\" en el portal de Robonomics, selecciona \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"datalog\")]), _vm._v(\" y \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"datalogItem((AccountId,u64)): RingBufferItem\")]), _vm._v(\" en la consulta y agrega el datalog \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"KUKA\")]), _vm._v(\" con el botón '+':\")]), _c('LessonImages', {\n    attrs: {\n      \"imageClasses\": \"mb\",\n      \"src\": \"kuka/datalog.png\",\n      \"alt\": \"datalog\"\n    }\n  }), _c('p', [_vm._v(\"Ahora puedes encontrar la telemetría del robot en IPFS a través de este enlace con tu hash \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"https://gateway.ipfs.io/ipfs/<hash>\")]), _vm._v(\".\")]), _c('h2', {\n    attrs: {\n      \"id\": \"solución-de-problemas\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#soluci%C3%B3n-de-problemas\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Solución de problemas\")]), _c('p', [_vm._v(\"Si \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"catkin_make\")]), _vm._v(\" no funciona con el mensaje de que no puede encontrar MoveArm.h, intenta eliminar las últimas cuatro líneas en CMakeLists.txt en el paquete kuka_manipulator_gazebo:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"yaml\"\n    }\n  }, [_vm._v(\"\\ninclude_directories(include ${catkin_INCLUDE_DIRS})\\nadd_executable(move_arm_server src/move_arm_server.cpp)\\ntarget_link_libraries(move_arm_server ${catkin_LIBRARIES})\\nadd_dependencies(move_arm_server beginner_tutorials_gencpp)\\n\\n\")]), _c('p', [_vm._v(\"Haz \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"catkin_make\")]), _vm._v(\" sin estas líneas, luego vuélvelas a colocar y haz \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"catkin_make\")]), _vm._v(\" de nuevo.\")])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./courses/es/learn/kuka/overview.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%221800f5b0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "8+4u":
/*!*************************************************************************!*\
  !*** ./courses/es/learn/kuka/overview.md?vue&type=template&id=32fb8eca ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_32fb8eca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"1800f5b0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/babel-loader/lib??ref--1-1!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=template&id=32fb8eca */ \"7UCL\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_32fb8eca__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_32fb8eca__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/es/learn/kuka/overview.md?");

/***/ }),

/***/ "Eet5":
/*!*******************************************!*\
  !*** ./courses/es/learn/kuka/overview.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _overview_md_vue_type_template_id_32fb8eca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview.md?vue&type=template&id=32fb8eca */ \"8+4u\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"ZTI6\");\n/* harmony import */ var _overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"dc3L\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _overview_md_vue_type_template_id_32fb8eca__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _overview_md_vue_type_template_id_32fb8eca__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/es/learn/kuka/overview.md?");

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

/***/ "ZTI6":
/*!***********************************************************************************************!*\
  !*** ./courses/es/learn/kuka/overview.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"lIm2\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/es/learn/kuka/overview.md?");

/***/ }),

/***/ "dc3L":
/*!****************************************************************************************************!*\
  !*** ./courses/es/learn/kuka/overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"oqfO\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/es/learn/kuka/overview.md?");

/***/ }),

/***/ "lIm2":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/es/learn/kuka/overview.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/es/learn/kuka/overview.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "oqfO":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/es/learn/kuka/overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Conectar manipulador Kuka\",\n  \"description\": \"Conectar Manipulador\",\n  \"metaOptions\": [\"Aprender\"],\n  \"defaultName\": \"Connect Kuka manipulator\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/es/learn/kuka/overview.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);