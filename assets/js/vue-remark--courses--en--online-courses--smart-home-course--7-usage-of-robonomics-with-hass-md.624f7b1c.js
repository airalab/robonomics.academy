(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{Qg6r:function(e,t,o){"use strict";o.r(t);var s=o("7uw+"),i=o("UQSp"),n=o("Kw5r");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var r={VueRemarkRoot:i.a},c=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===a(r[e])&&"function"==typeof r[e].render||"function"==typeof r[e]&&"function"==typeof r[e].options.render?t[e]=r[e]:o[e]=function(){return r[e]}}))},u=n.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",d={excerpt:null,title:"Lesson #7, Usage of Robonomics with Home Assistant",description:"home assistant course",lessonNumber:8,courseID:3,metaOptions:["Online Courses","Sovereign Smart Home with Robonomics and Home Assistant"]};var p=function(e){e.options[l]&&(e.options[l]=d),n.a.util.defineReactive(e.options,l,d),e.options.computed=u.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},h=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("section",{staticClass:"container__reg"},[o("h2",{attrs:{id:"whats-this-about"}},[o("a",{attrs:{href:"#whats-this-about","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("What's this about")]),o("p",[e._v("In this lesson, you will try to use main Robonomics IoT-services. The first one can query the telemetry of smart home devices, allowing you to remotely receive data from Home Assistant. The second service generates backups of your Home Assistant configuration and restores it when needed (for example, in the event of a failure SD cards).")])]),o("section",{staticClass:"container__reg"},[o("h2",{attrs:{id:"about-parachain-functions"}},[o("a",{attrs:{href:"#about-parachain-functions","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("About parachain functions")]),o("p",[e._v("Next you will see how the functions of the Robonomics parachain are used to provide the Home Assistant user with the necessary service. ")]),o("p",[e._v("Getting telemetry is based on the "),o("code",[e._v("datalog")]),e._v(" pallet you already know. Every certain period of time (but no less than the accumulated weight allows), a "),o("code",[e._v("datalog.record()")]),e._v(" transaction is sent to the parachain from the "),o("code",[e._v("SUB_CONTROLLER")]),e._v(" address with the IPFS hash of the encrypted file, where all the data of your IoT devices is collected. In fact to get the telemetry, you request the necessary datalogs from the parachain related to your IoT subscription and then decrypt them with your keys.")]),o("p",[e._v("To create a backup, another Robonomics pallet called "),o("code",[e._v("digitalTwin")]),e._v(" is used, which is an implementation of the idea of a digital twin, a digital version of real equipment that copies its technical characteristics and historical data. First, a unique ID is created for your Home Assistant's digital twin using the "),o("code",[e._v("digitalTwin.create()")]),e._v(" extrinsic. Then, using the "),o("code",[e._v("digitalTwin.setSource()")]),e._v(" extrinsic, this ID is bound with some data (the "),o("code",[e._v("topic")]),e._v(" field) and with an address in the parachain (the "),o("code",[e._v("source")]),e._v(" field). For the Home Assistant backup, the hash of the backup file is stored in "),o("code",[e._v("topic")]),e._v(", and the "),o("code",[e._v("SUB_OWNER")]),e._v(" address is stored in "),o("code",[e._v("source")]),e._v(".")])]),o("section",{staticClass:"container__reg"},[o("h2",{attrs:{id:"instructions"}},[o("a",{attrs:{href:"#instructions","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Instructions")]),o("List",{attrs:{type:"numbers"}},[o("li",[o("p",[e._v("Getting Telemetry")]),o("List",[o("li",[o("p",[e._v("Go to dapp and choose "),o("a",{attrs:{href:"https://dapp.robonomics.network/#/smarthome-telemetry",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("SmartHome Telemetry")]),e._v(" service.")]),o("LessonVideo",{attrs:{videos:[{src:"https://crustipfs.live/ipfs/Qmao9RoWcKo2qs4PAGtm5gqHzyAHJcpDqNLgciU35FJeVm",type:"mp4"}]}})],1),o("li",[o("p",[e._v("In the "),o("code",[e._v("CONTROLLER")]),e._v(" field enter the "),o("code",[e._v("SUB_CONTROLLER")]),e._v(" address. Insert the seed phrase to encrypt data.")])]),o("li",[o("p",[e._v("In the "),o("code",[e._v("Get telemetry")]),e._v(" block choose a timestamp from the drop-down list and press the "),o("code",[e._v("DOWNLOAD TELEMETRY")]),e._v(" button.")]),o("p",[e._v("Telemetry downloading could take some time. After finishing, you will see the information from your sensors.")])])])],1),o("li",[o("p",[e._v("Creating Backup")]),o("List",[o("li",[o("p",[e._v("To create backups, a service is called that generates a secure archive with configuration files. This service then adds the archive to IPFS and stores the resulting CID in Robonomics Digital Twin.")]),o("robo-academy-note",{attrs:{type:"warning",title:"WARNING"}},[e._v("\nIn order to restore your configuration, it is necessary to use a custom IPFS gateway such as Pinata (pinata.cloud) or Crust Network (crust.network). Without it, your backup will be stored solely on your local IPFS node, which may prevent you from restoring your Home Assistant configuration in the event of a local node failure. \n")]),o("LessonVideo",{attrs:{videos:[{src:"https://crustipfs.live/ipfs/QmVo91dLaAYgFDM1vrL2PYfAffM6SGGC59ZERbfHR44tqW",type:"mp4"}]}})],1),o("li",[o("p",[e._v("In the web interface of Home Assistant go to "),o("code",[e._v("Developer Tools")]),e._v(" -> "),o("code",[e._v("Services")]),e._v(". Search for "),o("code",[e._v("Robonomics: Save Backup to Robonomics")]),e._v(" and press "),o("code",[e._v("CALL SERVICE")]),e._v(".")])]),o("li",[o("p",[e._v("Wait until you see the notification "),o("code",[e._v("Backup was updated in Robonomics")]),e._v(" appear in "),o("code",[e._v("Notification")]),e._v(".")])]),o("li",[o("p",[e._v("In order to restore your configuration, you will need to install a fresh Home Assistant instance (and repeat all previous steps) with Robonomics Home Assistant integration using the same seeds you created previously. You will also need to set up an MQTT broker with the same username and password.")]),o("robo-academy-note",{attrs:{type:"warning",title:"WARNING"}},[e._v("\nSince some devices connected to Home Assistant via Wi-Fi or MQTT require you to explicitly specify the local IP address of your Raspberry Pi, when restoring a backup, they may not be available due to a change in this IP. You will need to re-enter the new IP address in the settings of these devices. To avoid this, you can set up a static local IP for your Raspberry Pi in your router settings (if it supports this feature).\n")]),o("LessonVideo",{attrs:{videos:[{src:"https://crustipfs.live/ipfs/QmWmnmkXUcPXsAnQzwN3UEuki2GMYnQDx3vhgjEypCU8aR",type:"mp4"}]}})],1),o("li",[o("p",[e._v("In the web interface of Home Assistant go to "),o("code",[e._v("Developer Tools")]),e._v(" -> "),o("code",[e._v("Services")]),e._v(". Search for "),o("code",[e._v("Robonomics: Restore from the Backup in Robonomics")]),e._v(" and press "),o("code",[e._v("CALL SERVICE")]),e._v(". Navigate to the "),o("code",[e._v("Overview")]),e._v(" page, to check the status of your backup, .")])]),o("li",[o("p",[e._v("Once Home Assistant has finished restarting, your configuration will be restored. If the status changes to "),o("code",[e._v("restored")]),e._v(" but Home Assistant does not automatically restart, you need to manually restart it by navigating to "),o("code",[e._v("Settings")]),e._v(" > "),o("code",[e._v("System")]),e._v(" and clicking on the "),o("code",[e._v("RESTART")]),e._v(" button in the upper right corner.")])])])],1)])],1),o("section",{staticClass:"container__reg"},[o("h2",{attrs:{id:"completing-course"}},[o("a",{attrs:{href:"#completing-course","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Completing Course")]),o("List",[o("li",{staticClass:"flex"},[o("p",[e._v("Congratulations! You have successfully completed the full setup and deployment of your sovereign smart home. You can now request a course completion certificate from us by visiting our Discord-channal. Write to us in the  "),o("a",{attrs:{href:"https://discord.com/channels/803947358492557312/803947358492557315",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("robonomics-academy")]),e._v(" chat and our representative will contact you.")])]),o("li",{staticClass:"flex"},[o("p",[e._v("Proof of course completion are corresponding transactions that can be verified in "),o("a",{attrs:{href:"https://robonomics.subscan.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Polkadot explorer")]),e._v(". These are transactions about buying a subscription, adding a device to a subscription, and sending datalogs from devices.")])])])],1)])}),[],!1,null,null,null);"function"==typeof c&&c(h),"function"==typeof p&&p(h);t.default=h.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);