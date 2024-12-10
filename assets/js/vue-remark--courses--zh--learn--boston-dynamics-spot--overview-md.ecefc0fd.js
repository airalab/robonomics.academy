(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--zh--learn--boston-dynamics-spot--overview-md"],{

/***/ "CyKz":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"1800f5b0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/zh/learn/boston-dynamics-spot/overview.md?vue&type=template&id=e96d2526 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('RoboAcademyText', {\n    attrs: {\n      \"fWeight\": \"500\"\n    }\n  }, [_vm._v(\"\\n在这节课中，您将学习如何授权自己作为用户，获得电机功率控制并向Spot发送基本命令。\\n\")]), _c('h2', {\n    attrs: {\n      \"id\": \"理论\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E7%90%86%E8%AE%BA\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"理论\")]), _c('p', [_vm._v(\"作为一款严肃的机器人，波士顿动力Spot具有一种保护机制 - \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/docs/concepts/estop_service\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"E-Stop服务\")]), _vm._v(\"（紧急停止），在Spot操作期间应始终处于活动状态，以避免潜在的物理损坏。打开E-Stop会立即冻结所有关节（如果机器人已经打开，则不会关闭引擎）。\")]), _c('p', [_vm._v(\"首先，我们应该控制机器人。有两种方法可以做到这一点 - \"), _c('em', [_vm._v(\"获取\")]), _vm._v(\"或\"), _c('em', [_vm._v(\"接管\")]), _vm._v(\"。\"), _c('em', [_vm._v(\"获取\")]), _vm._v(\"意味着以温和的方式请求控制，如果现在有人控制机器人，您的请求将被拒绝。另一种方式，\"), _c('em', [_vm._v(\"接管\")]), _vm._v(\"意味着强制控制，无论当前操作员是否存在。\")]), _c('p', [_vm._v(\"因此，要进行一些移动，您应该遵循以下方案：\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"boston-dynamics-spot/e_stop_scheme.png\",\n      \"alt\": \"机器人执行状态\",\n      \"imageClasses\": \"mb\"\n    }\n  }), _c('p', [_vm._v(\"Robot Execution States\")]), _c('p', [_vm._v(\"在这节课中，您将学习如何通过更改\"), _c('em', [_vm._v(\"偏航\")]), _vm._v(\"，\"), _c('em', [_vm._v(\"横滚\")]), _vm._v(\"和\"), _c('em', [_vm._v(\"俯仰\")]), _vm._v(\"来控制机器人的旋转。下图显示了身体框架坐标系：\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"boston-dynamics-spot/spot_coords.png\",\n      \"alt\": \"Spot坐标\",\n      \"imageClasses\": \"mb\"\n    }\n  }), _c('p', [_vm._v(\"Spot coordinates\")]), _c('RoboAcademyText', {\n    attrs: {\n      \"fWeight\": \"300\",\n      \"fSize\": \"90%\"\n    }\n  }, [_vm._v(\"\\n码中的角度以弧度表示。\\n\")]), _c('p', [_vm._v(\"作为课程的结果，您将用Spot的面部在空中画出您姓名的第一个字母。让我们开始设置吧！\")]), _c('h2', {\n    attrs: {\n      \"id\": \"设置gitpod\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E8%AE%BE%E7%BD%AEgitpod\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"设置Gitpod\")]), _c('p', [_vm._v(\"在本课程中，我们将使用Gitpod，这是一种基于云的IDE，允许您在计算机上不安装任何特殊软件的情况下进行练习。\")]), _c('ol', [_c('li', [_vm._v(\"注册\"), _c('a', {\n    attrs: {\n      \"href\": \"https://gitpod.io/\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Gitpod\")]), _vm._v(\"。\")]), _c('li', [_vm._v(\"转到我们的\"), _c('a', {\n    attrs: {\n      \"href\": \"https://gitpod.io/#github.com/merklebot/spot-edu-environment\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Spot教育环境\")]), _vm._v(\"并在浏览器中打开。您将看到具有典型IDE功能的窗口。 \")]), _c('li', [_vm._v(\"单击菜单图标，然后转到终端并创建一个新终端。\")])]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"boston-dynamics-spot/gitpod_terminal.png\",\n      \"alt\": \"terminal\",\n      \"imageClasses\": \"mb\"\n    }\n  }), _vm._v(\"\\n    \\n    \\n4. 复制粘贴此命令：\\n\"), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\npython3 prepare_yggdrasil.py\\nsudo ./start_yggdrasil.sh\\n\")]), _c('p', [_vm._v(\"并按\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Enter\")]), _vm._v(\"键。\")]), _c('ol', [_c('li', [_vm._v(\"打开新终端（现在您可以通过按\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"+\")]), _vm._v(\"按钮来做到）并使用命令测试连接\")])]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\nping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7\\n\")]), _c('p', [_vm._v(\"您应该看到类似于这样的内容：\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\ngitpod /workspace/spot-edu-environment (main) $ ping6 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09\\nPING 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09(202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09) 56 data bytes\\n64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=1 ttl=64 time=846 ms\\n64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=2 ttl=64 time=172 ms\\n64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=3 ttl=64 time=172 ms\\n64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=4 ttl=64 time=197 ms\\n64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=5 ttl=64 time=219 ms\\n64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=6 ttl=64 time=242 ms\\n\")]), _c('ol', [_c('li', [_vm._v(\"在预定时间之前，我们将向您发送私钥以建立SSH连接。\")]), _c('li', [_vm._v(\"将您的私钥复制到文件\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"id_ed25519\")]), _vm._v(\"。您可以在\"), _c('em', [_vm._v(\"stop-edu-enviroment\")]), _vm._v(\"的侧边栏资源管理器中找到该文件。\")]), _c('li', [_c('strong', [_vm._v(\"在\")]), _c('code', {\n    pre: true\n  }, [_vm._v(\"id_ed25519\")]), _c('strong', [_c('em', [_vm._v(\"文件末尾添加一行空行，这对于SSH正常工作是必要的。\")])]), _vm._v(\"按\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Ctrl+S\")]), _vm._v(\"保存更改。\")])]), _c('p', [_vm._v(\"如果一切正常，您可以通过编辑\"), _c('code', {\n    pre: true\n  }, [_vm._v(\"lesson1.py\")]), _vm._v(\"开始完成课程\")]), _c('p', [_vm._v(\"要执行代码，请使用命令：\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\nsudo ./run_code.sh\\n\")]), _c('RoboAcademyText', {\n    attrs: {\n      \"fWeight\": \"700\",\n      \"fStyle\": \"normal\"\n    }\n  }, [_vm._v(\"\\n请确保此时没有其他人在运行他们的程序。\\n\")]), _c('h2', {\n    attrs: {\n      \"id\": \"安排练习时间\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E5%AE%89%E6%8E%92%E7%BB%83%E4%B9%A0%E6%97%B6%E9%97%B4\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"安排练习时间\")]), _c('p', [_vm._v(\"用Spot排程网站选择练习时间段：\")]), _c('p', [_c('a', {\n    attrs: {\n      \"href\": \"https://meetings.hubspot.com/strelka\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"meetings.hubspot.com/strelka\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"练习\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E7%BB%83%E4%B9%A0\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"练习\")]), _c('p', [_vm._v(\"现在我们将为Spot制作一个简单的脚本，用于使用其头部运动在屏幕上绘图。 \")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"python\",\n      \"codeClass\": \"big-code\"\n    }\n  }, [_vm._v(\"\\n# Import Spot Control modules\\nimport bosdyn.client\\nfrom bosdyn.client.robot_command import RobotCommandClient, blocking_stand\\nfrom bosdyn.client.robot_command import RobotCommandBuilder\\nfrom bosdyn.geometry import EulerZXY\\nimport time\\n# ENTER YOUR AUTH DATA HERE\\nROBOT_IP=\\\"192.168.50.3\\\"\\nSPOT_USERNAME=\\\"student\\\"\\nSPOT_PASSWORD=\\\"\\\"\\n# Helpers to control camera drawing (you don't need to modify it)\\nimport requests\\nVIDEOSERVER_URL=\\\"http://luke.merklebot:8000/\\\"\\nVIDEOSERVER_TOKEN=\\\"1234\\\"\\ndef notify_start_line():\\n  requests.post(VIDEOSERVER_URL + \\\"start_line\\\", json={\\\"token\\\": VIDEOSERVER_TOKEN})\\ndef notify_stop_line():\\n  requests.post(VIDEOSERVER_URL + \\\"stop_line\\\", json={\\\"token\\\": VIDEOSERVER_TOKEN})\\ndef notify_clear_canvas():\\n    requests.post(VIDEOSERVER_URL + \\\"clear_canvas\\\", json={\\\"token\\\": VIDEOSERVER_TOKEN})\\n# Start with registering out SDK\\nsdk = bosdyn.client.create_standard_sdk('LessonOneClient')\\n# Create instance of robot and auth with credentials\\nrobot = sdk.create_robot(ROBOT_IP)\\nrobot.authenticate(SPOT_USERNAME, SPOT_PASSWORD)\\n# Create lease client and take exclusive control over Spot.  \\nlease_client = robot.ensure_client('lease')\\nlease = lease_client.take()\\nlease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)\\n# Try to power on the robot\\nrobot.power_on(timeout_sec=20)\\nif robot.is_powered_on():\\n    print(\\\"Powered On\\\")\\n\\t\\t# If everything went smooth, Spot face lights should turn green\\nelse:\\n\\t\\t# In case of some problems, e.g. somebody stole control over robot\\n    print(\\\"Failed\\\")\\n    exit(0)\\n# Synchronize Spor inner time with ours - to avoid outdated commands\\nrobot.time_sync.wait_for_sync()\\n# To execute robot movement, create command client through which orders are sent\\ncommand_client = robot.ensure_client(RobotCommandClient.default_service_name)\\n# Start movement with simple stand up\\nblocking_stand(command_client, timeout_sec=10)\\n# Rotate robot body:\\n#  1. Build command for body rotation. It’s not an easy task to control robot motion with commands on low level. \\n#     Bosdyn Client allow as to use a shortcut - RobotCommandBuilder. It contains a number of predefined commands, \\n#     you need just to choose one of your liking and insert parameters\\nfootprint_R_body = EulerZXY(yaw=0.1, roll=0.1, pitch=0.1)\\ncmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)\\n#  2. Execute builded command\\ncommand_client.robot_command(cmd)\\ntime.sleep(2)\\n# Return robot state back\\ncommand_client.robot_command(RobotCommandBuilder.synchro_stand_command(footprint_R_body=EulerZXY(yaw=0, roll=0, pitch=0)))\\ntime.sleep(2)\\n# Change robot height\\ncmd = RobotCommandBuilder.synchro_stand_command(body_height=0.1)\\ncommand_client.robot_command(cmd)\\n# Now we are ready to draw letter. \\ndef draw_letter(command_client):\\n\\t\\t# Choose points to draw (see the coords explanation bellow)\\n    points_xy_draw = (\\n        (125, 125),\\n        (375, 875),\\n        (500, 500),\\n        (250, 500),\\n        (500, 500),\\n        (625, 125),\\n    )\\n    for x, y in points_xy_draw:\\n        convert = lambda x: (x / 1000 - 0.5) * -1\\n        x, y = map(convert, (x, y))\\n        footprint_R_body = EulerZXY(\\n            yaw=x, \\n            roll=0.0, \\n            pitch=y,\\n        )\\n        cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)\\n        command_client.robot_command(cmd)\\n        time.sleep(1)\\nnotify_clear_canvas()\\nnotify_start_line()\\ndraw_letter(command_client)\\nnotify_stop_line()\\n# Turn off the robot gracefully\\nrobot.power_off(cut_immediately=False)\\n\")]), _c('RoboAcademyText', {\n    attrs: {\n      \"fWeight\": \"300\",\n      \"fSize\": \"90%\"\n    }\n  }, [_vm._v(\"\\n如果我们需要将Spot的头部移动到相机中的某个点，我们应该进行许多具有许多非线性参数的大量计算，这绝非易事。但是我们可以说，在局部范围内，偏航和俯仰角可以近似用作具有某些系数的笛卡尔坐标在图片上。\\n\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"boston-dynamics-spot/cartesian.jpeg\",\n      \"alt\": \"spot\",\n      \"imageClasses\": \"mb\"\n    }\n  }), _c('p', [_vm._v(\"现在您可以尝试运行脚本并查看结果。不要忘记使用Ctrl+S保存您的代码：\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\"\n    }\n  }, [_vm._v(\"\\nsudo ./run_code.sh\\n\")]), _c('h3', {\n    attrs: {\n      \"id\": \"spot的视频可以在这里找到\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#spot%E7%9A%84%E8%A7%86%E9%A2%91%E5%8F%AF%E4%BB%A5%E5%9C%A8%E8%BF%99%E9%87%8C%E6%89%BE%E5%88%B0\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Spot的视频可以在这里找到：\")]), _c('p', [_c('a', {\n    attrs: {\n      \"href\": \"https://codepen.io/smehnov/pen/BaVNrPM\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"https://codepen.io/smehnov/pen/BaVNrPM\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"挑战\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E6%8C%91%E6%88%98\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"挑战\")]), _c('p', [_vm._v(\"创建一个Python脚本，用一系列动作控制机器人的身体位置：\")]), _c('ol', [_c('li', [_vm._v(\"站起来\")]), _c('li', [_vm._v(\"用它的面部追踪您的姓名首字母（一个字母，至少3个点）\")]), _c('li', [_vm._v(\"坐下\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"结果\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E7%BB%93%E6%9E%9C\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"结果\")]), _c('p', [_vm._v(\"现在，您知道如何：\")]), _c('ul', [_c('li', [_vm._v(\"使用Spot SDK\")]), _c('li', [_vm._v(\"构建基本命令\")]), _c('li', [_vm._v(\"旋转机器人身体\")]), _c('li', [_vm._v(\"连接到Spot\")])]), _c('p', [_vm._v(\"甚至画了一个字母。恭喜！\")]), _c('RoboAcademyText', {\n    attrs: {\n      \"fWeight\": \"500\"\n    }\n  }, [_c('p', [_vm._v(\"我们收集了一个\"), _c('a', {\n    attrs: {\n      \"href\": \"http://wiki.ros.org/rosbag\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"rosbag\")]), _vm._v(\"，其中包含Spot的关节数据，因此您可以将它们可视化（例如使用\"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"foxglove\")]), _vm._v(\"）。证书将很快发送到您的电子邮件。\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"安排您的第一堂课\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%E5%AE%89%E6%8E%92%E6%82%A8%E7%9A%84%E7%AC%AC%E4%B8%80%E5%A0%82%E8%AF%BE\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _c('a', {\n    attrs: {\n      \"href\": \"https://meetings.hubspot.com/strelka\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"安排您的第一堂课\")])])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./courses/zh/learn/boston-dynamics-spot/overview.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%221800f5b0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "E8Sq":
/*!*****************************************************************************************!*\
  !*** ./courses/zh/learn/boston-dynamics-spot/overview.md?vue&type=template&id=e96d2526 ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_e96d2526__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"1800f5b0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/babel-loader/lib??ref--1-1!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=template&id=e96d2526 */ \"CyKz\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_e96d2526__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_template_id_e96d2526__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/zh/learn/boston-dynamics-spot/overview.md?");

/***/ }),

/***/ "ODYb":
/*!***********************************************************!*\
  !*** ./courses/zh/learn/boston-dynamics-spot/overview.md ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _overview_md_vue_type_template_id_e96d2526__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview.md?vue&type=template&id=e96d2526 */ \"E8Sq\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"SAp7\");\n/* harmony import */ var _overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"uYxV\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _overview_md_vue_type_template_id_e96d2526__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _overview_md_vue_type_template_id_e96d2526__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/zh/learn/boston-dynamics-spot/overview.md?");

/***/ }),

/***/ "RkJy":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/zh/learn/boston-dynamics-spot/overview.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/zh/learn/boston-dynamics-spot/overview.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "SAp7":
/*!***************************************************************************************************************!*\
  !*** ./courses/zh/learn/boston-dynamics-spot/overview.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"RkJy\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/zh/learn/boston-dynamics-spot/overview.md?");

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

/***/ "q3pK":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/zh/learn/boston-dynamics-spot/overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"紧急停止，初始化，身体位置控制\",\n  \"description\": \"在这节课中，您将学习如何授权自己作为用户，获得电机功率控制并向Spot发送基本命令。\",\n  \"metaOptions\": [\"学习，为波士顿动力Spot开发软件\"],\n  \"defaultName\": \"Software Developing for Boston Dynamics Spot\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/zh/learn/boston-dynamics-spot/overview.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "uYxV":
/*!********************************************************************************************************************!*\
  !*** ./courses/zh/learn/boston-dynamics-spot/overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./overview.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"q3pK\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_overview_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/zh/learn/boston-dynamics-spot/overview.md?");

/***/ })

}]);