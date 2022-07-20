(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{wrQT:function(t,e,o){"use strict";o.r(e);var n={metaInfo:function(){return this.$seo({title:"Lesson #3. Find and follow an object, navigate between them",description:"In the third lesson you will learn how to find World Objects and go to them.",openGraph:{title:"Lesson #3. Find and follow an object, navigate between them",type:"website"},twitter:{title:"Lesson #3. Find and follow an object, navigate between them",type:"summary"}})}},i=o("KHd+"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("LayoutCourse",{attrs:{courseId:"2",lessonId:"3"}},[o("section",{staticClass:"text__hyphened"},[o("section",{staticClass:"container__narrow"},[o("h2",[t._v("What's this about")]),o("p",[t._v("In the third lesson you will learn how to find World Objects and go to them.")])]),o("section",{staticClass:"container__narrow"},[o("h2",[t._v("The challenge")]),o("p",[t._v("You start with Spot in the place with some fiducials (a mark on the object) around. Create and execute Python script detects at least two fiducials and moves Spot to each of them within 1 m.")])]),o("section",{staticClass:"container__reg"},[o("h2",[t._v("Instructions")]),o("List",{attrs:{type:"numbers"}},[o("li",[o("p",[t._v("Spot has the World Object Service that provides a way to track and store objects detected in the world around Spot. A world object is considered a higher-level item in the scene that has some amount of semantic information associated with it. More information you can find in "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/docs/concepts/robot_services#world-object"}},[t._v("Robot Services")]),t._v(" tab in Spot SDK documentation.")],1),o("p",[t._v("Using world object service you can find fiducials near the Spot.")]),o("p",[t._v("Spot can find objects around faster if he stands.")]),o("p",[t._v("In the task you will need find fiducials' coordinates and go to them. You already know how to move to the local coordinates from the "),o("g-link",{attrs:{to:"/online-courses/boston-dynamics-course/2-remote-controlled-and-programmed-motion"}},[t._v("Lesson 2")]),t._v(". The example of how to find a fiducial and it's coordinates is in "),o("g-link",{attrs:{to:"https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/examples/fiducial_follow/fiducial_follow.py"}},[t._v("fiducial_follow example")]),t._v(".")],1),o("p",[t._v("In your script, firstly, you need to find fiducial object with World Object Service:")]),o("p",[o("code",[t._v("fiducial_objects = world_object_client.list_world_objects(object_type = [world_object_pb2.WORLD_OBJECT_APRILTAG]).world_objects")])]),o("p",[t._v("Then get fiducial coordinates in a visual frame:")]),o("p",[o("code",[t._v("\n              fiducial = fiducial_objects[0]"),o("br"),t._v("\n              vision_tform_fiducial = get_a_tform_b(fiducial.transforms_snapshot, VISION_FRAME_NAME, fiducial.apriltag_properties.frame_name_fiducial.to_proto())\n            ")])])]),o("li",[o("p",[t._v("Connect to Spot from a terminal or using your development environment remote execution function.")]),o("code",[t._v("ssh student@strelka.ygg.merklebot.com")])]),o("li",[o("p",[t._v("Develop and demonstrate your solution to the challenge.")]),o("p",[t._v("We create "),o("g-link",{attrs:{to:"https://dev.bostondynamics.com/python/examples/estop/readme"}},[t._v("E-Stop endpoint")]),t._v(" for you, so you should not create it. For Spot authentication use username and password from "),o("code",[t._v("/home/student/credentials")]),t._v(" file. Spot address is "),o("code",[t._v("192.168.50.3")]),t._v(".")],1)])])],1),o("section",{staticClass:"container__narrow"},[o("h3",[t._v("Are you ready to practice?")]),o("p",[t._v("Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.")]),o("h5",[o("g-link",{staticClass:"btn",attrs:{to:"https://dapp.spot-sdk.education/#/checkout"}},[t._v("Rent a spot")])],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);