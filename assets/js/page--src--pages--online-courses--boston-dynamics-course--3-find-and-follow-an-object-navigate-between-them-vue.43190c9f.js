(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{wrQT:function(t,e,o){"use strict";o.r(e);var s={metaInfo:function(){return this.$seo({title:"Lesson #3, Find and follow an object, navigate between them",description:"In the third lesson you will learn how to find World Objects and go to them.",image:{url:this.$website+"/og/boston-dynamics-course/3-find-and-follow-an-object-navigate-between-them.png",width:1280,height:650},openGraph:{title:"Lesson #3, Find and follow an object, navigate between them",type:"website"},twitter:{title:"Lesson #3, Find and follow an object, navigate between them",type:"summary"}})}},n=o("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("LayoutCourse",{attrs:{courseId:"2",lessonId:"4"}},[o("section",{staticClass:"text__hyphened"},[o("section",{staticClass:"container__narrow"},[o("h2",[t._v(t._s(t.$ts("What's this about")))]),o("p",[t._v(t._s(t.$ts("In the third lesson you will learn how to find World Objects and go to them.")))])]),o("section",{staticClass:"container__narrow"},[o("h2",[t._v(t._s(t.$ts("The challenge")))]),o("p",[t._v(t._s(t.$ts("You start with Spot in the place with some fiducials (a mark on the object) around. Create and execute Python script detects at least two fiducials and moves Spot to each of them within 1 m.")))])]),o("section",{staticClass:"container__reg"},[o("h2",[t._v(t._s(t.$ts("Instructions")))]),o("List",{attrs:{type:"numbers"}},[o("li",[o("p",[t._v(t._s(t.$ts("Spot has the World Object Service that provides a way to track and store objects detected in the world around Spot. A world object is considered a higher-level item in the scene that has some amount of semantic information associated with it. More information you can find in"))+" "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/docs/concepts/robot_services#world-object"}},[t._v(t._s(t.$ts("Robot Services")))]),t._v(" "+t._s(t.$ts("tab in Spot SDK documentation.")))],1),o("p",[t._v(t._s(t.$ts("Using world object service you can find fiducials near the Spot.")))]),o("p",[t._v(t._s(t.$ts("Spot can find objects around faster if he stands.")))]),o("p",[t._v(t._s(t.$ts("In the task you will need find fiducials' coordinates and go to them. You already know how to move to the local coordinates from the"))+" "),o("g-link",{attrs:{to:"/online-courses/boston-dynamics-course/2-remote-controlled-and-programmed-motion"}},[t._v(t._s(t.$ts("Lesson 2")))]),t._v(". "+t._s(t.$ts("The example of how to find a fiducial and it's coordinates is in"))+" "),o("g-link",{attrs:{to:"https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/examples/fiducial_follow/fiducial_follow.py"}},[t._v(t._s(t.$ts("fiducial_follow example")))]),t._v(".")],1),o("p",[t._v(t._s(t.$ts("In your script, firstly, you need to find fiducial object with World Object Service:")))]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("              "),o("code",{staticClass:"python"},[t._v("fiducial_objects = world_object_client.list_world_objects(object_type=[world_object_pb2.WORLD_OBJECT_APRILTAG]).world_objects")]),t._v("\n            ")]),o("p",[t._v(t._s(t.$ts("Then get fiducial coordinates in a visual frame:")))]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("              "),o("code",{staticClass:"python"},[t._v("fiducial = fiducial_objects[0]\nvision_tform_fiducial = get_a_tform_b(fiducial.transforms_snapshot, VISION_FRAME_NAME, fiducial.apriltag_properties.frame_name_fiducial.to_proto())")]),t._v("\n            ")])]),o("li",[o("p",[t._v(t._s(t.$ts("Connect to Spot from a terminal or using your development environment remote execution function.")))]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t._v("              "),o("code",{staticClass:"bash"},[t._v("ssh student@strelka.ygg.merklebot.com")]),t._v("\n            ")])]),o("li",[o("p",[t._v(t._s(t.$ts("Develop and demonstrate your solution to the challenge.")))]),o("p",[t._v(t._s(t.$ts("We create"))+" "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/python/examples/estop/readme"}},[t._v(t._s(t.$ts("E-Stop endpoint")))]),t._v(" "+t._s(t.$ts("for you, so you should not create it."))+" "+t._s(t.$ts("For Spot authentication use username and password from"))+" "),o("code",[t._v("/home/student/credentials")]),t._v(" "+t._s(t.$ts("file"))+". "+t._s(t.$ts("Spot address is "))),o("code",[t._v("192.168.50.3")]),t._v(".")],1)])])],1),o("section",{staticClass:"container__narrow"},[o("h3",[t._v(t._s(t.$ts("Are you ready to practice?")))]),o("p",[t._v(t._s(t.$ts("Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.")))]),o("h5",[o("g-link",{staticClass:"btn",attrs:{to:"https://dapp.spot-sdk.education/#/checkout"}},[t._v(t._s(t.$ts("Rent a spot")))])],1)])])])}),[],!1,null,null,null);e.default=i.exports}}]);