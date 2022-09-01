(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{AOX4:function(t,s,o){"use strict";o.r(s);var e={metaInfo:function(){return this.$seo({title:"Lesson #1, Emergency stop, initialization, body position control",description:"During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.",image:{url:this.$website+"/og/boston-dynamics-course/1-emergency-stop-initialization-body-position-control.png",width:1280,height:650},openGraph:{title:"Lesson #1, Emergency stop, initialization, body position control",type:"website"},twitter:{title:"Lesson 1#, Emergency stop, initialization, body position control",type:"summary"}})}},n=o("KHd+"),i=Object(n.a)(e,(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("LayoutCourse",{attrs:{courseId:"2",lessonId:"2"}},[o("section",{staticClass:"text__hyphened"},[o("section",{staticClass:"container__narrow"},[o("h2",[t._v(t._s(t.$ts("What's this about")))]),o("p",[t._v(t._s(t.$ts("During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.")))]),o("p",[t._v(t._s(t.$ts("Watch our introductory video if you haven't seen it already:"))+" "),o("g-link",{attrs:{to:"https://youtu.be/qdk7BjWJprc"}},[t._v("https://youtu.be/qdk7BjWJprc")])],1)]),o("section",{staticClass:"container__narrow"},[o("h2",[t._v(t._s(t.$ts("The challenge")))]),o("p",[t._v(t._s(t.$ts("Create a Python script controls robot body position. Run your script on Spot to let it execute a sequence of motions"))+":")]),o("List",{attrs:{type:"numbers"}},[o("li",[t._v(t._s(t.$ts("Stand-up")))]),o("li",[t._v(t._s(t.$ts("Trace your initials with it's face (one letter, at least 3 points)")))]),o("li",[t._v(t._s(t.$ts("Sit-down")))])])],1),o("section",{staticClass:"container__reg"},[o("h2",[t._v(t._s(t.$ts("Instructions")))]),o("List",{attrs:{type:"numbers"}},[o("li",[o("p",[t._v(t._s(t.$ts("Read"))+" "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/docs/python/understanding_spot_programming"}},[t._v(t._s(t.$ts("Understanding Spot Programming")))]),t._v(" "+t._s(t.$ts("page in Spot SDK documentation. You need to understand what is E-Stop and how make initialization in your Python script in order to let the robot execute commands.")))],1),o("p",[t._v(t._s(t.$ts("You can find more detailed information for this lesson in"))+" "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/docs/concepts/base_services"}},[t._v(t._s(t.$ts("Base Services")))]),t._v(", "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/docs/concepts/geometry_and_frames"}},[t._v(t._s(t.$ts("Geometry and Frames")))]),t._v(", "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/docs/concepts/robot_services"}},[t._v(t._s(t.$ts("Robot Services")))]),t._v(" "+t._s(t.$ts("and"))+" "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/docs/concepts/estop_service"}},[t._v(t._s(t.$ts("E-Stop")))]),t._v(" "+t._s(t.$ts("section of the Spot SDK documentation.")))],1)]),o("li",[o("p",[t._v(t._s(t.$ts("Connect to SpotCORE by SSH from terminal")))]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("            "),o("code",{staticClass:"bash"},[t._v("ssh student@strelka.ygg.merklebot.com")]),t._v("\n          ")])]),o("li",[o("p",[t._v(t._s(t.$ts("Create a script can authenticate in Spot, acquire control (lease) and power on the robot.")))]),o("p",[t._v(t._s(t.$ts("We create"))+" "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/python/examples/estop/readme"}},[t._v(t._s(t.$ts("E-Stop endpoint")))]),t._v(" "+t._s(t.$ts("for you, so you should not create it. For Spot authentication use username and password from"))),o("code",[t._v("/home/student/credentials")]),t._v(" "+t._s(t.$ts("file"))+". "+t._s(t.$ts("Spot address is"))+" "),o("code",[t._v("192.168.50.3")]),t._v(".")],1),o("p",[t._v(t._s(t.$ts("In"))+" "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/docs/python/understanding_spot_programming#taking-ownership-of-spot-leases"}},[t._v(t._s(t.$ts("Taking ownership of Spot (Leases)")))]),t._v(" "+t._s(t.$ts("section use")))],1),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("            "),o("code",{staticClass:"python"},[t._v("lease = lease_client.acquire()")]),t._v("\n          ")]),o("p",[t._v(t._s(t.$ts("before")))]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("            "),o("code",{staticClass:"python"},[t._v("lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)")]),t._v("\n          ")])]),o("li",[o("p",[t._v(t._s(t.$ts("Try your script with stand-up and sit-down commands. Ensure robot moves as expected.")))]),o("p",[t._v(t._s(t.$ts("Make sure you run script by Python3 with "))+" "),o("code",[t._v("pythoon3")]),t._v(" "+t._s(t.$ts("command"))+". "+t._s(t.$ts("Command"))),o("code",[t._v("python")]),t._v(" "+t._s(t.$ts("refers to an obsolete Python 2 interpreter"))+".")])]),o("li",[t._v(t._s(t.$ts("Add body position control to your script. Experiment with"))+" "),o("code",[t._v("bosdyn.geometry.EulerZXY")]),t._v(" "+t._s(t.$ts("robot command argument builder in order to identify what yaw, roll and pitch parameters you need to set to solve the challenge. The range of Pitch, Yaw and Roll is from -0.5 to 0.5.")))])])],1),o("section",{staticClass:"container__narrow"},[o("h3",[t._v(t._s(t.$ts("Are you ready to practice?")))]),o("p",[t._v(t._s(t.$ts("Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.")))]),o("h5",[o("g-link",{staticClass:"btn",attrs:{to:"https://dapp.spot-sdk.education/#/checkout"}},[t._v(t._s(t.$ts("Rent a spot")))])],1)])])])}),[],!1,null,null,null);s.default=i.exports}}]);