(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{IVhY:function(e,t,n){"use strict";n.r(t);var o=n("7uw+"),s=n("UQSp"),a=n("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var i={VueRemarkRoot:s.a},p=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===r(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?t[e]=i[e]:n[e]=function(){return i[e]}}))},c=a.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",u={excerpt:null,title:"Operate Boston Dynamics Spot",description:"Operate Boston Dynamics Spot",docId:7,metaOptions:["Playground"]};var d=function(e){e.options[l]&&(e.options[l]=u),a.a.util.defineReactive(e.options,l,u),e.options.computed=c.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},_=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("p",[e._v("With this tutorial you will be able to see in simulation what real Spot did.")]),n("h2",{attrs:{id:"requirements"}},[n("a",{attrs:{href:"#requirements","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Requirements")]),n("ul",[n("li",[e._v("ROS melodic desktop (installation instructions "),n("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation/Ubuntu",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(")")])]),n("br"),n("h2",{attrs:{id:"install-package"}},[n("a",{attrs:{href:"#install-package","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Install package")]),e._v("\nCreate workspace and clone packages:\n"),n("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\nmkdir -p ~/catkin_ws/src\ncd ~/catkin_ws/src\ngit clone https://github.com/clearpathrobotics/spot_ros.git\ngit clone https://github.com/ros/geometry2 --branch 0.6.5\n\n")]),n("p",[e._v("Open the "),n("code",{pre:!0},[e._v("view_model.launch")]),e._v(" file:")]),n("LessonCodeWrapper",{attrs:{language:"bash",codeClass:"big-code"}},[e._v("\nnano ~/catkin_ws/src/spot_ros/spot_viz/launch/view_model.launch\n")]),n("p",[e._v("And set "),n("code",{pre:!0},[e._v("use_sim_time")]),e._v(" parameter to "),n("code",{pre:!0},[e._v("true")]),e._v(", file must look like this:")]),n("pre",[n("code",{pre:!0,attrs:{class:"language-xml"}},[e._v('<launch>\n  <param name="/use_sim_time" value="true"/>\n  <include file="$(find spot_description)/launch/description.launch"/>\n\n  <node name="joint_state_publisher_gui" pkg="joint_state_publisher_gui" type="joint_state_publisher_gui" />\n\n  <node name="rviz" pkg="rviz" type="rviz" args="-d $(find spot_viz)/rviz/model.rviz" />\n</launch>\n')])]),n("p",[e._v("Then install dependencies:")]),n("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\ncd ~/catkin_ws/\nrosdep install --from-paths src --ignore-src -y\ncatkin_make\n")]),n("h2",{attrs:{id:"run"}},[n("a",{attrs:{href:"#run","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Run")]),n("p",[e._v("Get example rosbag file:")]),n("LessonCodeWrapper",{attrs:{language:"bash",codeClass:"big-code"}},[e._v("\nwget -O spot_rosbag.bag https://gateway.ipfs.io/ipfs/QmTDrfMy7Zs7uDLN3KPBC1UYqXNMXBKEwX7ggVmJKAm7Ef\n")]),n("p",[e._v("Run rviz with the Spot model:")]),n("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\nsource ~/catkin_ws/devel/setup.bash\nroslaunch spot_viz view_model.launch\n")]),n("p",[e._v("Then in a new terminal:")]),n("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\nsource ~/catkin_ws/devel/setup.bash\nroslaunch spot_viz view_robot.launch\n")]),n("LessonImages",{attrs:{imageClasses:"mb",src:"spot-try-it-out/spot.jpg",alt:"spot_viz"}}),n("p",[e._v("Play rosbag file and you will see the robot move:")]),n("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\nrosbag play spot_rosbag.bag\n")]),n("LessonImages",{attrs:{imageClasses:"mb",src:"spot-try-it-out/spot2.jpg",alt:"spot_viz"}}),n("p",[e._v("Looking for possibilities to operate Boston Dynamics Spot in real life? We have "),n("a",{attrs:{href:"/online-courses/boston-dynamics-course/"}},[e._v("course and remote control")]),e._v(" service for it.")])],1)}),[],!1,null,null,null);"function"==typeof p&&p(_),"function"==typeof d&&d(_);t.default=_.exports},UQSp:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);