(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--ko--learn--smart-home-course--gateway-setup-robonomics-sls-gateway-md"],{

/***/ "6/W0":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"1800f5b0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?vue&type=template&id=723a9d5d ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('h2', {\n    attrs: {\n      \"id\": \"이것은-무엇에-관한-것입니까\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%EC%9D%B4%EA%B2%83%EC%9D%80-%EB%AC%B4%EC%97%87%EC%97%90-%EA%B4%80%ED%95%9C-%EA%B2%83%EC%9E%85%EB%8B%88%EA%B9%8C\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"이것은 무엇에 관한 것입니까\")]), _c('p', [_vm._v(\"이것은 Robonomics SLS 게이트웨이를 사용하여 장치를 연결하기 위한 시나리오 설정입니다. Robonomics는 \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/slsys/Gateway\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Smart Logic System\")]), _vm._v(\" 프로젝트에서 개발한 게이트웨이에서 디자인 영감을 받아 회로의 일부를 수정했습니다. Robonomics에서 게이트웨이를 주문하거나 \"), _c('a', {\n    attrs: {\n      \"href\": \"https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"블루프린트\")]), _vm._v(\"를 사용하여 직접 만들 수 있습니다.\")]), _c('p', [_vm._v(\"게이트웨이에 필요한 소프트웨어를 설치하고 구성한 후 홈어시스턴트에 연결합니다.\")]), _c('robo-academy-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Attention\"\n    }\n  }, [_vm._v(\"\\n  펌웨어를 업데이트하는 SmartRF Flash Programmer는 Windows 운영 체제가 필요합니다.\\n\")]), _c('h2', {\n    attrs: {\n      \"id\": \"지침\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%EC%A7%80%EC%B9%A8\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"지침\")]), _c('List', {\n    attrs: {\n      \"type\": \"numbers\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"지그비 마이크로컨트롤러 펌웨어 설치\")]), _c('List', [_c('li', [_c('p', [_vm._v(\"먼저 게이트웨이의 CC2652P 마이크로컨트롤러를 플래시해야 합니다. SLS 게이트웨이 하단의 \"), _c('code', [_vm._v(\"ON\")]), _vm._v(\" 스위치 \"), _c('code', [_vm._v(\"2\")]), _vm._v(\", \"), _c('code', [_vm._v(\"4\")]), _vm._v(\", \"), _c('code', [_vm._v(\"7\")]), _vm._v(\"을 설정하고 나머지는 \"), _c('code', [_vm._v(\"OFF\")]), _vm._v(\"로 설정해야 합니다.\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"smart-house-course/lesson-4-b-1.png\",\n      \"alt\": \"controllers\"\n    }\n  })], 1), _c('li', [_c('p', [_vm._v(\"USB-A<>USB-C 케이블로 컴퓨터에 게이트웨이를 연결하세요.\")]), _c('robo-academy-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"WARNING\"\n    }\n  }, [_vm._v(\"\\n  현재 게이트웨이가 USB-C<>USB-C 유형을 지원하지 않기 때문에 USB-A<>USB-C 유형의 케이블만 사용해야 합니다.\\n\")])], 1), _c('li', [_c('p', [_vm._v(\"CC2652 펌웨어는 Texas Instrument의 SmartRF Flash Programmer v2가 필요합니다. \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.ti.com/tool/download/FLASH-PROGRAMMER-2\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"공식 사이트\")]), _vm._v(\"에서 다운로드한 후 설치하세요.\")])]), _c('li', [_c('p', [_vm._v(\"CC2652P 마이크로컨트롤러용 펌웨어를 \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"GitHub 저장소\")]), _vm._v(\"에서 다운로드하세요.\")])]), _c('li', [_c('p', [_vm._v(\"프로그램을 실행하세요. \"), _c('code', [_vm._v(\"Connected device\")]), _vm._v(\" 창에서 CC2652P 마이크로컨트롤러를 선택하고 펌웨어 경로를 설정하고, 깃발을 \"), _c('code', [_vm._v(\"Erase, Program, Verify\")]), _vm._v(\"로 설정하고 사진과 같이 \"), _c('code', [_vm._v(\"Start\")]), _vm._v(\"를 누르세요.\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"smart-house-course/lesson-4-b-2.png\",\n      \"alt\": \"tutorial\",\n      \"imageClasses\": \"mb\"\n    }\n  }), _c('p', [_vm._v(\"펌웨어 플래싱이 성공하면 \"), _c('code', [_vm._v(\"Success!\")]), _vm._v(\" 메시지가 표시됩니다. 이제 USB 케이블을 분리할 수 있습니다.\")])], 1)])], 1), _c('li', [_c('p', [_vm._v(\"마이크로컨트롤러 펌웨어 설치\")]), _c('List', [_c('li', [_c('p', [_vm._v(\"이제 소프트웨어 설치를 위해 게이트웨이를 설정해야 합니다. 게이트웨이를 라즈베리 파이에 직접 연결하여 해당 장치에서 다음 명령을 모두 입력하는 것이 좋습니다. \")])]), _c('li', [_c('p', [_vm._v(\"SLS 게이트웨이 하단의 \"), _c('code', [_vm._v(\"ON\")]), _vm._v(\" 스위치 \"), _c('code', [_vm._v(\"1\")]), _vm._v(\", \"), _c('code', [_vm._v(\"3\")]), _vm._v(\"을 설정하고 나머지는 \"), _c('code', [_vm._v(\"OFF\")]), _vm._v(\"로 설정해야 합니다. 그런 다음 게이웨이를 라즈베리 파이의 USB 타입-C 포트에 연결하세요.\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"smart-house-course/lesson-4-b-3.gif\",\n      \"alt\": \"tutorial\",\n      \"imageClasses\": \"mb\"\n    }\n  })], 1), _c('li', [_c('p', [_vm._v(\"SSH를 통해 라즈베리 파이에 연결하세요.\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\nssh ubuntu@192.168.xxx.xxx\\n\")])], 1), _c('li', [_c('p', [_vm._v(\"펌웨어가 있는 저장소를 복제하세요:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\ngit clone https://github.com/airalab/robonomics-hass-utils.git\\n\")])], 1), _c('li', [_c('p', [_vm._v(\"SLS 게이트웨이를 플래시하려면 \"), _c('code', [_vm._v(\"Clear\")]), _vm._v(\" 및 \"), _c('code', [_vm._v(\"Flash_16mb\")]), _vm._v(\" 스크립트를 실행해야 합니다:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\ncd robonomics-hass-utils/esp_firmware/linux\\n\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\nsudo chmod +x Clear.sh\\n\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\nsudo chmod +x Flash_16mb.sh\\n\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\n./Clear.sh\\n\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\n./Flash_16mb.sh\\n\")])], 1), _c('li', {\n    staticClass: \"no-bullet\"\n  }, [_c('p', [_vm._v(\"- \"), _c('strong', [_vm._v(\"문제 해결\")])]), _c('p', [_vm._v(\"게이트웨이 펌웨어를 업데이트하는 데 문제가 발생하는 경우 추가 조치를 취해야 합니다:\")]), _c('List', [_c('li', [_c('p', [_vm._v(\"pySerial 모듈이 설치되어 있는지 확인하세요:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\npip install pyserial\\n\")])], 1), _c('li', [_c('p', [_vm._v(\"사용자에게 USB 포트에 대한 액세스 권한을 부여하십시오:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\nsudo usermod -a -G dialout $USER\\n\")])], 1), _c('li', [_c('p', [_vm._v(\"일부 경우에는 스크립트에서 펌웨어를 업데이트하기 위해 대역폭 설정을 변경해야 할 수 있습니다. 나노 편집기로 \"), _c('code', [_vm._v(\"Flash_16mb.sh\")]), _vm._v(\" 스크립트를 열고 보레이트 매개변수를 \"), _c('code', [_vm._v(\"921600\")]), _vm._v(\"에서 더 작은 값(예: \"), _c('code', [_vm._v(\"115200\")]), _vm._v(\")으로 변경하십시오.\")])])])], 1), _c('li', {\n    staticClass: \"no-bullet\"\n  }, [_c('p', [_vm._v(\"- \"), _c('strong', [_vm._v(\"추가\")])]), _c('p', [_vm._v(\"다른 운영 체제(macOS 및 Windows)를 사용하여 펌웨어를 업데이트하는 옵션도 제공합니다. 해당 스크립트는 OS에 따라 이름이 다른 폴더에 있습니다.\")])])])], 1), _c('li', [_c('p', [_vm._v(\"게이트웨이 설정\")]), _c('List', [_c('li', [_c('p', [_vm._v(\"게이트웨이 뒷면의 스위치를 새 위치로 설정하십시오. 스위치 \"), _c('code', [_vm._v(\"5\")]), _vm._v(\" (RX Zigbee to ESP) 및 \"), _c('code', [_vm._v(\"6\")]), _vm._v(\" (TX Zigbee to ESP)는 \"), _c('code', [_vm._v(\"ON\")]), _vm._v(\" 위치에 있어야 하며, 다른 스위치는 \"), _c('code', [_vm._v(\"OFF\")]), _vm._v(\" 위치에 있어야 합니다.\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"smart-house-course/lesson-4-b-4.gif\",\n      \"alt\": \"tutorial\",\n      \"imageClasses\": \"mb\"\n    }\n  })], 1), _c('li', [_c('p', [_vm._v(\"타입-C 전원 케이블을 연결하십시오. 중앙의 표시등이 녹색으로 변해야 합니다.\")])]), _c('li', [_c('p', [_vm._v(\"첫 번째 시작 시, 게이트웨이는 SSID가 \"), _c('code', [_vm._v(\"zgw****\")]), _vm._v(\"인 Wi-Fi를 공유하기 시작합니다. 이 네트워크에 연결하십시오. 신호가 상당히 약할 수 있으므로 SLS 게이트웨이를 퓨터에 가까이 두는 것이 좋습니다.\")]), _c('p', [_vm._v(\"연결이 성공하면 웹 인터페이스가 열릴 것입니다(또는 192.168.1.1 주소에서 찾을 수 있습니다).\")])]), _c('li', [_c('p', [_vm._v(\"Wi-Fi 페이지로 이동하여 사용자 / 패스를 입력하고 \"), _c('code', [_vm._v(\"Save\")]), _vm._v(\" 버튼을 눌러 Wi-Fi 자격 증명을 입력하십시오. 그 후 \"), _c('code', [_vm._v(\"Reboot\")]), _vm._v(\" 버튼을 누르십시오. 게이트웨이가 다시 시작되고 WI-Fi 네트워크에 연결됩니다.\")]), _c('LessonVideo', {\n    attrs: {\n      \"videos\": [{\n        src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH',\n        type: 'mp4'\n      }]\n    }\n  })], 1), _c('li', [_c('p', [_vm._v(\"웹 인터페이스에 액세스하려면 SLS 게이트웨이의 로컬 IP를 찾으십시오. 이를 위해 \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.fing.com/products\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Fing\")]), _vm._v(\" 앱이나 터미널에서 \"), _c('code', [_vm._v(\"arp -a\")]), _vm._v(\" 또는 Nmap을 사용할 수 있습니다: \")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\nsudo nmap -sP 192.168.xxx.0/24\\n\")]), _c('p', [_vm._v(\"여기서 \"), _c('code', {\n    staticClass: \"bold\"\n  }, [_vm._v(\"xxx\")]), _vm._v(\"는 로컬 네트워크의 IP 주소입니다. 게이트웨이 이름은 다음과 같아야 합니다: \"), _c('code', [_vm._v(\"zgw****\")]), _vm._v(\". 브라우저에 게이트웨이 IP를 붙여넣어 게이트웨이의 웹 인터페이스를 엽니다.\")])], 1), _c('li', [_c('p', [_c('code', [_vm._v(\"설정\")]), _vm._v(\"으로 이동 -> \"), _c('code', [_vm._v(\"하드웨어\")]), _vm._v(\"로 이동하고 설정이 이미지와 같은지 확인하십시오. 필요한 경우 설정을 수정하고 \"), _c('code', [_vm._v(\"저장\")]), _vm._v(\" 버튼을 클릭하십시오.\")]), _c('LessonVideo', {\n    attrs: {\n      \"videos\": [{\n        src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn',\n        type: 'mp4'\n      }]\n    }\n  }), _c('p', [_vm._v(\"필요한 값이 있는 테이블:\")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v(\"Field\")]), _c('th', [_c('strong', [_vm._v(\"Value\")])])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v(\"Zigbee module\")]), _c('td', [_vm._v(\"TI\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee UART RX\")]), _c('td', [_vm._v(\"22\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee UART TX\")]), _c('td', [_vm._v(\"23\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee RST Pin\")]), _c('td', [_vm._v(\"18\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee BSL Pin\")]), _c('td', [_vm._v(\"19\")])]), _c('tr', [_c('td', [_vm._v(\"Button Mode\")]), _c('td', [_vm._v(\"33 (pullUP - true)\")])]), _c('tr', [_c('td', [_vm._v(\"Number addressable leds\")]), _c('td', [_vm._v(\"0\")])]), _c('tr', [_c('td', [_vm._v(\"Led Red (or addr)\")]), _c('td', [_vm._v(\"21\")])]), _c('tr', [_c('td', [_vm._v(\"Led Green\")]), _c('td', [_vm._v(\"5\")])]), _c('tr', [_c('td', [_vm._v(\"Led Blue\")]), _c('td', [_vm._v(\"27\")])]), _c('tr', [_c('td', [_vm._v(\"I2C SDA\")]), _c('td', [_vm._v(\"255\")])]), _c('tr', [_c('td', [_vm._v(\"I2C SCL\")]), _c('td', [_vm._v(\"255\")])])])])], 1), _c('li', [_c('p', [_vm._v(\"그런 다음 게이트웨이를 다시 부팅하십시오. 오른쪽 상단 모서리에서 \"), _c('code', [_vm._v(\"작업\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"시스템 재부팅\")]), _vm._v(\"을 선택하십시오. Zigbee 정보 창에서 CC2652P 마이크로컨트롤러가 있는 게이트웨이가 제대로 작동하는지 확인하십시오. DeviceState는 \"), _c('code', [_vm._v(\"OK\")]), _vm._v(\"여야 합니다.\")])]), _c('li', [_c('p', [_vm._v(\"게이트웨이를 다시 부팅하십시오. 오른쪽 상단 모서리에서 \"), _c('code', [_vm._v(\"작업\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"재부팅\")]), _vm._v(\" 시스템을 선택하십시오.\")])]), _c('li', [_c('p', [_vm._v(\"Home Assistant에 장치를 자동으로 추가하도록 구성하십시오. \"), _c('code', [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"구성\")]), _vm._v(\"으로 이동한 다음 \"), _c('code', [_vm._v(\"Home Assistant MQTT Discovery\")]), _vm._v(\"와 \"), _c('code', [_vm._v(\"Clear States\")]), _vm._v(\"를 선택하십시오. 변경 사항을 저장하고 다시 SLS 게이트웨이를 부팅하십시오.\")]), _c('LessonVideo', {\n    attrs: {\n      \"videos\": [{\n        src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ',\n        type: 'mp4'\n      }]\n    }\n  })], 1), _c('li', {\n    staticClass: \"no-bullet\"\n  }, [_c('p', [_vm._v(\"- \"), _c('strong', [_vm._v(\"추가\")]), _vm._v(\":\")]), _c('p', [_vm._v(\"이미 집에 활성화된 SLS 게이트웨이가 있고 지금 다른 하나를 구성하고 있다면 서로 충돌할 것입니다. 이 문제를 해결하려면 새로 장치의 채널을 변경해야 합니다.\")]), _c('p', [_vm._v(\"이를 위해 \"), _c('code', [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"구성\")]), _vm._v(\"으로 이동하고 다른 채널로 채널을 변경하십시오 (예: 채널 15).\")])]), _c('li', [_c('p', [_c('code', [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"가입\")]), _vm._v(\"으로 이동하여 장치를 연결하십시오. 센서를 페어링 모드로 설정하고 장치를 연결 모드로 전환하는 가장 일반적인 방법은 전원 버튼을 길게 누르거나 5회 켜고 끄는 것입니다. \"), _c('code', [_vm._v(\"가입 활성화\")]), _vm._v(\" 버튼을 눌러 Zigbee 장치를 검색을 시작하십시오. 활성 센서가 표시됩니다.\")])])])], 1), _c('li', [_c('p', [_vm._v(\"SLS 게이트웨이를 Home Assistant에 연결하기\")]), _c('List', [_c('li', [_c('p', [_vm._v(\"SLS 게이트웨이에서 MQTT를 구성해야 합니다. SLS 게이트웨이 웹 인터페이스로 돌아가서 \"), _c('code', [_vm._v(\"설정\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"링크\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"MQTT 설정\")]), _vm._v(\"으로 이동하십시오.\")]), _c('LessonVideo', {\n    attrs: {\n      \"videos\": [{\n        src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y',\n        type: 'mp4'\n      }]\n    }\n  })], 1), _c('li', [_c('p', [_vm._v(\"브로커 주소를 추가하십시오 (로컬 네트워크의 Home Assistant가 있는 Raspberry Pi의 주소, \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.fing.com/products\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Fing\")]), _vm._v(\" 앱이나 RPi에서 \"), _c('code', [_vm._v(\"ip -a\")]), _vm._v(\" 명령을 사용하여 찾을 수 있습니다), 포트 (기본값은 1883), 브로커 사용자 이름 및 암호 (이전에 생성한 것) 및 주제 이름 (임의로 선택할 수 있음). 또한 로컬 Raspberry Pi IP 주소는 정적이어야 합니다.\")]), _c('p', [_c('code', [_vm._v(\"활성화\")]), _vm._v(\" 및 \"), _c('code', [_vm._v(\"상태 지\")]), _vm._v(\"를 클릭하지 않도록 주의하십시오.\")])]), _c('li', [_c('p', [_vm._v(\"변경 사항을 저장하십시오. 이제 장치가 Home Assistant에 자동으로 표시됩니다.\")])])])], 1), _c('li', [_c('p', [_vm._v(\"장치 연결 \")]), _c('List', [_c('li', [_c('p', [_c('code', [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"가입\")]), _vm._v(\"으로 이동하여 장치를 연결하십시오. 센서를 페어링 모드로 설정하고 장치를 연결 모드로 전환하는 가장 일반적인 방법은 전원 버튼을 길게 누르거나 5회 켜고 끄는 것입니다.\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"smart-house-course/lesson-4-a-4.gif\",\n      \"alt\": \"tutorial\",\n      \"imageClasses\": \"mb\"\n    }\n  }), _c('LessonVideo', {\n    attrs: {\n      \"videos\": [{\n        src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA',\n        type: 'mp4'\n      }]\n    }\n  })], 1), _c('li', [_c('p', [_vm._v(\"Zigbee 장치를 검색하려면 활성화 조인 버튼을 누르세요. 활성 센서를 볼 수 있을 것입니다.\")])])])], 1)])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%221800f5b0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "TtzD":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

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

/***/ "efBC":
/*!*********************************************************************************************************************************************!*\
  !*** ./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"oqOe\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?");

/***/ }),

/***/ "gUIY":
/*!****************************************************************************************************************************************!*\
  !*** ./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"TtzD\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?");

/***/ }),

/***/ "myd4":
/*!******************************************************************************************************************!*\
  !*** ./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?vue&type=template&id=723a9d5d ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_template_id_723a9d5d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"1800f5b0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/babel-loader/lib??ref--1-1!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./gateway-setup-robonomics-sls-gateway.md?vue&type=template&id=723a9d5d */ \"6/W0\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_template_id_723a9d5d__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_template_id_723a9d5d__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?");

/***/ }),

/***/ "oqOe":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"레슨 #4b, 게이트웨이 설정: Robonomics SLS 게이트웨이\",\n  \"lastUpdate\": \"Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)\",\n  \"description\": \"홈 어시스턴트 코스\",\n  \"lessonNumber\": 5,\n  \"metaOptions\": [\"로보노믹스와 홈 어시스턴트를 활용한 주권 스마트 홈 배우기\"],\n  \"defaultName\": \"Sovereign Smart Home with Robonomics and Home Assistant\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "wdtC":
/*!************************************************************************************!*\
  !*** ./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gateway_setup_robonomics_sls_gateway_md_vue_type_template_id_723a9d5d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gateway-setup-robonomics-sls-gateway.md?vue&type=template&id=723a9d5d */ \"myd4\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"gUIY\");\n/* harmony import */ var _gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"efBC\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _gateway_setup_robonomics_sls_gateway_md_vue_type_template_id_723a9d5d__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _gateway_setup_robonomics_sls_gateway_md_vue_type_template_id_723a9d5d__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/ko/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?");

/***/ })

}]);