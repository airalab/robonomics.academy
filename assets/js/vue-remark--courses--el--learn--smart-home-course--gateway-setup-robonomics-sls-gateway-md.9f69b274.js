(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--courses--el--learn--smart-home-course--gateway-setup-robonomics-sls-gateway-md"],{

/***/ "F1mG":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"1800f5b0-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?vue&type=template&id=5c6e32c7 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('h2', {\n    attrs: {\n      \"id\": \"τι-είναι-αυτό\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%CF%84%CE%B9-%CE%B5%CE%AF%CE%BD%CE%B1%CE%B9-%CE%B1%CF%85%CF%84%CF%8C\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Τι είναι αυτό\")]), _c('p', [_vm._v(\"Αυτό είναι ένα προσχεδιασμένο σενάριο για τη σύνδεση συσκευών χρησιμοποιώντας την πύλη Robonomics SLS. Το Robonomics πήρε έμπνευση στον σχεδιασμό από την πύλη που ανέπτυξε το έργο \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/slsys/Gateway\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Smart Logic System\")]), _vm._v(\" και τροποποίησε μέρος της κυκλωτικής. Μπορείτε να παραγγείλετε μια πύλη από το Robonomics ή να κατασκευάσετε τη δική σας χρησιμοποιώντας τα \"), _c('a', {\n    attrs: {\n      \"href\": \"https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"σχέδια\")]), _vm._v(\" μας.\")]), _c('p', [_vm._v(\"Θα εγκαταστήσετε το απαιτούμενο λογισμικό για την πύλη, θα το διαμορφώσετε και θα το συνδέσετε στο Home Assistant.\")]), _c('robo-academy-note', {\n    attrs: {\n      \"type\": \"note\",\n      \"title\": \"Attention\"\n    }\n  }, [_vm._v(\"\\n  Ο SmartRF Flash Programmer, ένα πρόγραμμα για ενημέρωση του firmware, απαιτεί λειτουργικό σύστημα Windows.\\n\")]), _c('h2', {\n    attrs: {\n      \"id\": \"οδηγίες\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%CE%BF%CE%B4%CE%B7%CE%B3%CE%AF%CE%B5%CF%82\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c('span', {\n    staticClass: \"icon icon-link\"\n  })]), _vm._v(\"Οδηγίες\")]), _c('List', {\n    attrs: {\n      \"type\": \"numbers\"\n    }\n  }, [_c('li', [_c('p', [_vm._v(\"Εγκατάσταση Firmware Μικροελεγκτή Zigbee\")]), _c('List', [_c('li', [_c('p', [_vm._v(\"Πρώτα πρέπει να φλασάρετε τον μικροελεγκτή CC2652P της πύλης. Ρυθμίστε τις διακόπτες \"), _c('code', [_vm._v(\"ON\")]), _c('code', [_vm._v(\"2\")]), _vm._v(\", \"), _c('code', [_vm._v(\"4\")]), _vm._v(\" και \"), _c('code', [_vm._v(\"7\")]), _vm._v(\" στο κάτω μέρος της SLS Gateway, οι υπόλοιποι πρέπει να είναι \"), _c('code', [_vm._v(\"OFF\")]), _vm._v(\".\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"smart-house-course/lesson-4-b-1.png\",\n      \"alt\": \"controllers\"\n    }\n  })], 1), _c('li', [_c('p', [_vm._v(\"Συνδέστε την πύλη στον υπολογιστή σας με ένα καλώδιο USB-A<>USB-C.\")]), _c('robo-academy-note', {\n    attrs: {\n      \"type\": \"warning\",\n      \"title\": \"WARNING\"\n    }\n  }, [_vm._v(\"\\n  Χρησιμοποιήστε μόνο καλώδια τύπου USB-A<>USB-C, επειδή προς το παρόν η πύλη δεν υποστηρίζει τον τύπο USB-C<>USB-C.\\n\")])], 1), _c('li', [_c('p', [_vm._v(\"Το firmware CC2652 απαιτεί το SmartRF Flash Programmer v2 από την Texas Instrument. Κατεβάστε το από \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.ti.com/tool/download/FLASH-PROGRAMMER-2\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"το επίσημο site\")]), _vm._v(\" και στη συνέχεια εγκαταστήστε το.\")])]), _c('li', [_c('p', [_vm._v(\"Κατεβάστε το firmware για τον μικροελεγκτή CC2652P από το \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"αποθετήριο GitHub\")]), _vm._v(\".\")])]), _c('li', [_c('p', [_vm._v(\"Εκτελέστε το πρόγραμμα. Στο παράθυρο \"), _c('code', [_vm._v(\"Συνδεδεμένη συσκευή\")]), _vm._v(\" επιλέξτε τον μικροελεγκτή CC2652P, ορίστε τη διαδρομή για το firmware, ορίστε τις σημαίες σε \"), _c('code', [_vm._v(\"Διαγραφή, Πρόγραμμα, Επαλήθευση\")]), _vm._v(\" όπως στην εικόνα και πατήστε \"), _c('code', [_vm._v(\"Έναρξη\")]), _vm._v(\".\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"smart-house-course/lesson-4-b-2.png\",\n      \"alt\": \"tutorial\",\n      \"imageClasses\": \"mb\"\n    }\n  }), _c('p', [_vm._v(\"Μετά από επιτυχή φλασάρισμα, θα δείτε ένα μήνυμα \"), _c('code', [_vm._v(\"Επιτυχία!\")]), _vm._v(\". Τώρα μπορείτε να αποσυνδέσετε το καλώδιο USB.\")])], 1)])], 1), _c('li', [_c('p', [_vm._v(\"Εγκατάσταση Firmware Μικροελεγκτή\")]), _c('List', [_c('li', [_c('p', [_vm._v(\"Τώρα πρέπει να ρυθμίσετε την πύλη για την εγκατάσταση λογισμικού. Σας συμβουλεύουμε να ενημερώσετε το firmware συνδέοντας την πύλη απευθείας στο Raspberry Pi σας και εισάγοντας όλες τις ακόλουθες εντολές σε αυτή τη συσκευή. \")])]), _c('li', [_c('p', [_vm._v(\"Ορίστε τους διακόπτες \"), _c('code', [_vm._v(\"ON\")]), _c('code', [_vm._v(\"1\")]), _vm._v(\" και \"), _c('code', [_vm._v(\"3\")]), _vm._v(\" στο κάτω μέρος της πύλης SLS, οι υπόλοιποι πρέπει να είναι \"), _c('code', [_vm._v(\"OFF\")]), _vm._v(\". Στη συνέχεια συνδέστε την πύλη στο Raspberry Pi σας μέσω της θύρας USB τύπου-C.\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"smart-house-course/lesson-4-b-3.gif\",\n      \"alt\": \"tutorial\",\n      \"imageClasses\": \"mb\"\n    }\n  })], 1), _c('li', [_c('p', [_vm._v(\"Συνδεθείτε στο Raspberry Pi μέσω SSH.\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\nssh ubuntu@192.168.xxx.xxx\\n\")])], 1), _c('li', [_c('p', [_vm._v(\"Κλωνοποιήστε το αποθετήριο με το firmware:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"codeClass\": \"big-code\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\ngit clone https://github.com/airalab/robonomics-hass-utils.git\\n\")])], 1), _c('li', [_c('p', [_vm._v(\"Για να φλασάρετε την πύλη SLS πρέπει να εκτελέσετε τα scripts \"), _c('code', [_vm._v(\"Καθαρισμός\")]), _vm._v(\" και \"), _c('code', [_vm._v(\"Φλασάρισμα_16mb\")]), _vm._v(\":\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\ncd robonomics-hass-utils/esp_firmware/linux\\n\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\nsudo chmod +x Clear.sh\\n\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\nsudo chmod +x Flash_16mb.sh\\n\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\n./Clear.sh\\n\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\n./Flash_16mb.sh\\n\")])], 1), _c('li', {\n    staticClass: \"no-bullet\"\n  }, [_c('p', [_vm._v(\"- \"), _c('strong', [_vm._v(\"Αντιμετώπιση προβλημάτων\")])]), _c('p', [_vm._v(\"Αν αντιμετωπίζετε προβλήματα με την ενημέρωση του firmware της πύλης, πρέπει να ακολουθήσετε επιπλέον βήματα:\")]), _c('List', [_c('li', [_c('p', [_vm._v(\"Βεβαιωθείτε ότι έχετε εγκαταστήσει το πρόσθετο pySerial:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\npip install pyserial\\n\")])], 1), _c('li', [_c('p', [_vm._v(\"Δώστε στον χρήστη σας δικαιώματα πρόσβασης στη θύρα USB:\")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\nsudo usermod -a -G dialout $USER\\n\")])], 1), _c('li', [_c('p', [_vm._v(\"Σε ορισμένες περιπτώσεις, είναι απαραίτητο να αλλάξετε τη ρύθμιση εύρους ζώνης στο σενάριο για να ενημερώσετε το firmware. Ανοίξτε το σενάριο \"), _c('code', [_vm._v(\"Flash_16mb.sh\")]), _vm._v(\" με τον επεξεργαστή nano και αλλάξτε την παράμετρο baud από \"), _c('code', [_vm._v(\"921600\")]), _vm._v(\" σε μικρότερη τιμή (για παράδειγμα, \"), _c('code', [_vm._v(\"115200\")]), _vm._v(\").\")])])])], 1), _c('li', {\n    staticClass: \"no-bullet\"\n  }, [_c('p', [_vm._v(\"- \"), _c('strong', [_vm._v(\"Επιπλέον\")])]), _c('p', [_vm._v(\"Παρέχουμε επίσης επιλογές για ενημέρωση του firmware χρησιμοποιώντας άλλα λειτουργικά συστήματα (macOS και Windows). Μπορείτε να βρείτε τα αντίστοιχα σενάρια σε έναν φάκελο, το όνομα του οποίου εξαρτάται από το λειτουργικό σας σύστημα.\")])])])], 1), _c('li', [_c('p', [_vm._v(\"Ρύθμιση της πύλης\")]), _c('List', [_c('li', [_c('p', [_vm._v(\"Ρυθμίστε τις διακόπτες στο πίσω μέρος της πύλης στη νέα τους θέση. Οι διακόπτες \"), _c('code', [_vm._v(\"5\")]), _vm._v(\" (RX Zigbee σε ESP) και \"), _c('code', [_vm._v(\"6\")]), _vm._v(\" (TX Zigbee σε ESP) πρέπει να είναι στη θέση \"), _c('code', [_vm._v(\"ON\")]), _vm._v(\", οι υπόλοιποι πρέπει να είναι \"), _c('code', [_vm._v(\"OFF\")]), _vm._v(\".\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"smart-house-course/lesson-4-b-4.gif\",\n      \"alt\": \"tutorial\",\n      \"imageClasses\": \"mb\"\n    }\n  })], 1), _c('li', [_c('p', [_vm._v(\"Συνδέστε το καλώδιο τροφοδοσίας τύπου C. Το φωτεινό δείκτη στο κέντρο πρέπει να γίνει πράσινο.\")])]), _c('li', [_c('p', [_vm._v(\"Κατά την πρώτη εκκίνηση, η πύλη θα αρχίσει να μοιράζεται Wi-Fi με το SSID \"), _c('code', [_vm._v(\"zgw****\")]), _vm._v(\". Συνδεθείτε σε αυτό το δίκτυο. Να έχετε υπόψη ότι το σήμα μπορεί να είναι αρκετά αδύναμο, οπότε είναι καλύτερο να κρατάτε την πύλη SLS πιο κοντά στον υπολογιστή σας.\")]), _c('p', [_vm._v(\"Εάν η σύνδεση είναι επιτυχής, η διαδικτυακή διεπαφή θα ανοίξει (ή μπορείτε να τη βρείτε στη διεύθυνση 192.168.1.1).\")])]), _c('li', [_c('p', [_vm._v(\"Μεταβείτε στη σελίδα Wi-Fi και εισάγετε τα διαπιστευτήρια Wi-Fi σας εισάγοντας τον χρήστη / κωδικό και πατώντας το κουμπί \"), _c('code', [_vm._v(\"Αποθήκευση\")]), _vm._v(\". Στη συνέχεια, πατήστε το κουμπί \"), _c('code', [_vm._v(\"Επανεκκίηση\")]), _vm._v(\". Η πύλη θα επανεκκινήσει και θα συνδεθεί στο δίκτυο WI-Fi σας.\")]), _c('LessonVideo', {\n    attrs: {\n      \"videos\": [{\n        src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH',\n        type: 'mp4'\n      }]\n    }\n  })], 1), _c('li', [_c('p', [_vm._v(\"Βρείτε την τοπική IP της πύλης SLS για πρόσβαση στη διαδικτυακή διεπαφή. Για αυτό μπορείτε να χρησιμοποιήσετε την εφαρμογή \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.fing.com/products\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Fing\")]), _vm._v(\" ή την εντολή \"), _c('code', [_vm._v(\"arp -a\")]), _vm._v(\" στο τερματικό σας ή το Nmap: \")]), _c('LessonCodeWrapper', {\n    attrs: {\n      \"language\": \"bash\",\n      \"noLines\": \"\"\n    }\n  }, [_vm._v(\"\\nsudo nmap -sP 192.168.xxx.0/24\\n\")]), _c('p', [_vm._v(\"όπου το \"), _c('code', {\n    staticClass: \"bold\"\n  }, [_vm._v(\"xxx\")]), _vm._v(\" είναι η διεύθυνση IP σας στο τοπικό δίκτυο. Το όνομα της πύλης πρέπει να μοιάζει με αυτό: \"), _c('code', [_vm._v(\"zgw****\")]), _vm._v(\". Ανοίξτε τη διαδικτυακή διεπαφή της πύλης εισάγοντας τη διεύθυνση IP της στον περιηγητή.\")])], 1), _c('li', [_c('p', [_vm._v(\"Πηγαίνετε στο \"), _c('code', [_vm._v(\"Ρύθμιση\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"Υλικό\")]), _vm._v(\" και βεβαιωθείτε ότι οι ρυθμίσεις μοιάζουν με αυτές στην εικόνα. Διορθώστε τις ρυθμίσεις αν είναι απαραίτητο και κάντε κλικ στο κουμπί \"), _c('code', [_vm._v(\"Αποθήκευση\")]), _vm._v(\":\")]), _c('LessonVideo', {\n    attrs: {\n      \"videos\": [{\n        src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn',\n        type: 'mp4'\n      }]\n    }\n  }), _c('p', [_vm._v(\"Ο πίνακας με τις απαιτούμενες τιμές:\")]), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v(\"Field\")]), _c('th', [_c('strong', [_vm._v(\"Value\")])])])]), _c('tbody', [_c('tr', [_c('td', [_vm._v(\"Zigbee module\")]), _c('td', [_vm._v(\"TI\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee UART RX\")]), _c('td', [_vm._v(\"22\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee UART TX\")]), _c('td', [_vm._v(\"23\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee RST Pin\")]), _c('td', [_vm._v(\"18\")])]), _c('tr', [_c('td', [_vm._v(\"Zigbee BSL Pin\")]), _c('td', [_vm._v(\"19\")])]), _c('tr', [_c('td', [_vm._v(\"Button Mode\")]), _c('td', [_vm._v(\"33 (pullUP - true)\")])]), _c('tr', [_c('td', [_vm._v(\"Number addressable leds\")]), _c('td', [_vm._v(\"0\")])]), _c('tr', [_c('td', [_vm._v(\"Led Red (or addr)\")]), _c('td', [_vm._v(\"21\")])]), _c('tr', [_c('td', [_vm._v(\"Led Green\")]), _c('td', [_vm._v(\"5\")])]), _c('tr', [_c('td', [_vm._v(\"Led Blue\")]), _c('td', [_vm._v(\"27\")])]), _c('tr', [_c('td', [_vm._v(\"I2C SDA\")]), _c('td', [_vm._v(\"255\")])]), _c('tr', [_c('td', [_vm._v(\"I2C SCL\")]), _c('td', [_vm._v(\"255\")])])])])], 1), _c('li', [_c('p', [_vm._v(\"Στη συνέχεια επανεκκινήστε την πύλη. Επιλέξτε \"), _c('code', [_vm._v(\"Ενέργειες\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"Επανεκκίνηση συστήματος\")]), _vm._v(\" στην πάνω δεξιά γωνία. Βεβαιωθείτε ότι η πύλη λειτουργεί σωστά με το μικροελεγκτή CC2652P στο παράθυρο πληροφοριών Zigbee. Το DeviceState πρέπει να είναι \"), _c('code', [_vm._v(\"Εντάξει\")]), _vm._v(\".\")])]), _c('li', [_c('p', [_vm._v(\"Επανεκκινήστε την πύλη. Επιλέξτε \"), _c('code', [_vm._v(\"Ενέργειες\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"Επανεκκίνηση\")]), _vm._v(\" συστήματος στην πάνω δεξιά γωνία.\")])]), _c('li', [_c('p', [_vm._v(\"Διαμορφώστε αυτόματα την προσθήκη συσκευών στο Home Assistant. Πηγαίνετε στο \"), _c('code', [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"Διαμρφωση\")]), _vm._v(\" και στη συνέχεια επιλέξτε \"), _c('code', [_vm._v(\"Home Assistant MQTT Discovery\")]), _vm._v(\" και \"), _c('code', [_vm._v(\"Καθαρισμός Καταστάσεων\")]), _vm._v(\". Αποθηκεύστε τις αλλαγές και ξαναεκκινήστε την πύλη SLS.\")]), _c('LessonVideo', {\n    attrs: {\n      \"videos\": [{\n        src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ',\n        type: 'mp4'\n      }]\n    }\n  })], 1), _c('li', {\n    staticClass: \"no-bullet\"\n  }, [_c('p', [_vm._v(\"- \"), _c('strong', [_vm._v(\"Επιπλέον\")]), _vm._v(\":\")]), _c('p', [_vm._v(\"Αν έχετε ήδη ενεργή πύλη SLS στο σπίτι σας και τώρα ρυθμίζετε μια άλλη, τότε θα συγκρουστούν μεταξύ τους. Για να λύσετε αυτό το πρόβλημα πρέπει να αλλάξετε το κανάλι στη νέα συσκευή.\")]), _c('p', [_vm._v(\"Για να το κάνετε αυτό, πηγαίνετε στο \"), _c('code', [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"Config\")]), _vm._v(\" και αλλάξτε το κανάλι σε ένα άλλο (π.χ. κανάλι 15).\")])]), _c('li', [_c('p', [_vm._v(\"Συνδέστε τις συσκευές σας πηγαίνοντας στο \"), _c('code', [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"Join\")]), _vm._v(\". Βάλτε τους αισθητήρες σας σε λειτουργία σύζευξης, ο πιο συνηθισμένος τρόπος για να μεταβεί μια συσκευή σε λειτουργία σύνδεσης είναι να κρατήσετε το κουμπί τροφοδοσίας της ή να τις ενεργοποιήσετε/απενεργοποιήσετε 5 φορές. Πατήστε το κουμπί \"), _c('code', [_vm._v(\"Enable Join\")]), _vm._v(\" για να ξεκινήσετε την αναζήτηση συσκευών Zigbee. Θα δείτε ενεργούς αισθητήρες.\")])])])], 1), _c('li', [_c('p', [_vm._v(\"Σύνδεση τς πύλης SLS με το Home Assistant\")]), _c('List', [_c('li', [_c('p', [_vm._v(\"Πρέπει να ρυθμίσετε το MQTT στην πύλη SLS. Επιστρέψτε στη διεπαφή ιστού της πύλης SLS σας και πηγαίνετε σε \"), _c('code', [_vm._v(\"Ρυθμίσεις\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"Σύνδεση\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"Ρύθμιση MQTT\")]), _vm._v(\".\")]), _c('LessonVideo', {\n    attrs: {\n      \"videos\": [{\n        src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y',\n        type: 'mp4'\n      }]\n    }\n  })], 1), _c('li', [_c('p', [_vm._v(\"Προσθέστε τη διεύθυνση του μεσολαβητή σας (διεύθυνση του Raspberry Pi με το Home Assistant στο τοπικό δίκτυο, μπορείτε να τη βρείτε με την εφαρμογή \"), _c('a', {\n    attrs: {\n      \"href\": \"https://www.fing.com/products\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Fing\")]), _vm._v(\" ή χρησιμοποιώντας την εντολή \"), _c('code', [_vm._v(\"ip -a\")]), _vm._v(\" στο RPi σας), τη θύρα (η προεπιλεγμένη είναι η 1883), το όνομα χρήστη και τον κωδικό του μεσολαβητή σας (το οποίο έχετε δημιουργήσει νωρίτερα) και το όνομα του θέματος (μπορείτε να επιλέξετε οποιοδήποτε). Επίσης, η τοπική διεύθυνση IP του Raspberry Pi πρέπει να είναι στατική.\")]), _c('p', [_vm._v(\"Μην ξεχάσετε να κάνετε κλικ στο \"), _c('code', [_vm._v(\"Ενεργοποίηση\")]), _vm._v(\" και \"), _c('code', [_vm._v(\"Διατήρηση καταστάσεων\")]), _vm._v(\".\")])]), _c('li', [_c('p', [_vm._v(\"Αποθηκεύστε τις αλλαγές. Τώρα οι συσκευές θα εμφανίζονται αυτόματα στο Home Assistant.\")])])])], 1), _c('li', [_c('p', [_vm._v(\"Σύνδεση Συσκευών \")]), _c('List', [_c('li', [_c('p', [_vm._v(\"Συνδέστε τις συσκευές σας πηγαίνοντας σε \"), _c('code', [_vm._v(\"Zigbee\")]), _vm._v(\" -> \"), _c('code', [_vm._v(\"Σύνδεση\")]), _vm._v(\". Βάλτε τους αισθητήρες σας σε λειτουργία σύζευξης, ο πιο συνηθισμένος τρόπος για να μεταβείτε σε λειτουργία σύνδεσης είναι να κρατήσετε πατημένο το κουμπί λειτουργίας του ή να τα ενεργοποιήσετε/απενεργοποιήσετε 5 φορές.\")]), _c('LessonImages', {\n    attrs: {\n      \"src\": \"smart-house-course/lesson-4-a-4.gif\",\n      \"alt\": \"tutorial\",\n      \"imageClasses\": \"mb\"\n    }\n  }), _c('LessonVideo', {\n    attrs: {\n      \"videos\": [{\n        src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA',\n        type: 'mp4'\n      }]\n    }\n  })], 1), _c('li', [_c('p', [_vm._v(\"Πατήστε το κουμπί Ενεργοποίησης Σύνδεσης για να ξεκινήσετε την αναζήτηση συσκευών Zigbee. Θα δείτε ενεργούς αισθητήρες.\")])])])], 1)])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%221800f5b0-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "JzWP":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Μάθημα #4b, Ρύθμιση Πύλης: Robonomics SLS Gateway\",\n  \"lastUpdate\": \"Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)\",\n  \"description\": \"μάθημα βοηθού σπιτιού\",\n  \"lessonNumber\": 5,\n  \"metaOptions\": [\"Μάθετε\", \"Κυρίαρχο Έξυπνο Σπίτι με το Robonomics και το Home Assistant\"],\n  \"defaultName\": \"Sovereign Smart Home with Robonomics and Home Assistant\"\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "KP8d":
/*!*********************************************************************************************************************************************!*\
  !*** ./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--16-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"JzWP\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?");

/***/ }),

/***/ "M88q":
/*!****************************************************************************************************************************************!*\
  !*** ./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--15-0!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"vBYX\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?");

/***/ }),

/***/ "RuVO":
/*!******************************************************************************************************************!*\
  !*** ./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?vue&type=template&id=5c6e32c7 ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_template_id_5c6e32c7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"1800f5b0-vue-loader-template\"}!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/babel-loader/lib??ref--1-1!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??ref--17-0!../../../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./gateway-setup-robonomics-sls-gateway.md?vue&type=template&id=5c6e32c7 */ \"F1mG\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_template_id_5c6e32c7__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_1800f5b0_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_gateway_setup_robonomics_sls_gateway_md_vue_type_template_id_5c6e32c7__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?");

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

/***/ "gCQu":
/*!************************************************************************************!*\
  !*** ./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gateway_setup_robonomics_sls_gateway_md_vue_type_template_id_5c6e32c7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gateway-setup-robonomics-sls-gateway.md?vue&type=template&id=5c6e32c7 */ \"RuVO\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"M88q\");\n/* harmony import */ var _gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"KP8d\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _gateway_setup_robonomics_sls_gateway_md_vue_type_template_id_5c6e32c7__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _gateway_setup_robonomics_sls_gateway_md_vue_type_template_id_5c6e32c7__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_gateway_setup_robonomics_sls_gateway_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?");

/***/ }),

/***/ "vBYX":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_academy_robonomics_academy_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./courses/el/learn/smart-home-course/gateway-setup-robonomics-sls-gateway.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);