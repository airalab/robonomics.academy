(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{UQSp:function(e,o,t){"use strict";o.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},hD2y:function(e,o,t){"use strict";t.r(o);var n=t("7uw+"),a=t("UQSp"),s=t("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},c=function(e){var o=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===r(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?o[e]=i[e]:t[e]=function(){return i[e]}}))},l=s.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",p={excerpt:null,title:"Connect ROS-compatible drone",description:"Connect any ros compatible robot under robonomics parachain control.",docId:2,metaOptions:["Playground"]};var h=function(e){e.options[d]&&(e.options[d]=p),s.a.util.defineReactive(e.options,d,p),e.options.computed=l.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},u=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("VueRemarkRoot",[t("h2",{attrs:{id:"part-1-launch-by-transaction"}},[t("a",{attrs:{href:"#part-1-launch-by-transaction","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("Part 1. Launch by Transaction")]),t("p",[t("strong",[e._v("In this article we will show that with the help of Robonomics tools you can control any ROS-compatible device. We will find a random drone simulation package on the web and adjust it to run with Robonomics.")]),t("strong",[e._v("Requirements:")])]),t("List",[t("li",[e._v("Ubuntu 18.04 LTS")]),t("li",{staticClass:"flex"},[t("p",[e._v("ROS Melodic + Gazebo + RViz (installation manual "),t("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(")")])]),t("li",{staticClass:"flex"},[t("p",[e._v("Robonomics node (binary file) (download latest release "),t("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(")")])])]),t("br"),t("p",[e._v("The entire process of coding this part of demo is presented in a video below.")]),t("div",{staticClass:"youtube-embed"},[t("div",{staticStyle:{width:"100%",margin:"0 auto"}},[t("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[t("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/fDpwhBasQ5o",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])]),t("br"),t("h2",{attrs:{id:"1-find-a-simulation"}},[t("a",{attrs:{href:"#1-find-a-simulation","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("1. Find a simulation")]),t("p",[e._v("Let's surf the web. Google for "),t("code",{pre:!0},[e._v("ROS drone simulator")]),e._v(". The first link will mostly likely show you the "),t("code",{pre:!0},[e._v("tum_simulator")]),e._v(" page on "),t("a",{attrs:{href:"http://wiki.ros.org/tum_simulator",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("http://wiki.ros.org/tum_simulator")])]),t("LessonImages",{attrs:{imageClasses:"mb",src:"connect-any-ros-compatible-drone/tum_simulator.jpg",alt:"tum_simulator"}}),t("p",[e._v("It's pretty outdated, so we better find a fork for our system. Google for "),t("code",{pre:!0},[e._v("tum_simulator Ubuntu 18 Gazebo 9 fork")]),e._v(". The first result is a GitHub "),t("a",{attrs:{href:"https://github.com/tahsinkose/sjtu-drone",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("repo")]),e._v(" with an appropriate package. Download it")]),t("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\nmkdir -p drone_simulator_ws/src\ncd drone_simulator_ws/src\ngit clone https://github.com/tahsinkose/sjtu-drone\ncd ..\ncatkin build\n")]),t("p",[e._v("Don’t forget to add source command to "),t("code",{pre:!0},[e._v("~/.bashrc")]),e._v(":")]),t("LessonCodeWrapper",{attrs:{language:"bash",codeClass:"big-code"}},[e._v('\necho "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc\nsource "~/.bashrc"\n')]),t("p",[e._v("Now we can run the simulation to see what do we need to do to take the drone under parachain control.")]),t("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\nroslaunch sjtu_drone simple.launch\n")]),t("h2",{attrs:{id:"2-inspect-ros-topics"}},[t("a",{attrs:{href:"#2-inspect-ros-topics","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("2. Inspect ROS topics")]),t("p",[e._v("When the simulation is runnung, in a new tab run the following command to see the list of topics used by the drone:")]),t("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\nrostopic list\n")]),t("p",[e._v("Let's take a look at "),t("code",{pre:!0},[e._v("/cmd_vel")]),e._v(", "),t("code",{pre:!0},[e._v("/drone/takeoff")]),e._v(" and "),t("code",{pre:!0},[e._v("/drone/land")]),e._v(":")]),t("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\nrostopic info /cmd_vel\nrostopic info /drone/takeoff\nrostopic info /drone/land\n")]),t("LessonImages",{attrs:{imageClasses:"mb",src:"connect-any-ros-compatible-drone/topics_info.jpg",alt:"topics_info"}}),t("p",[e._v("As may be seen, there should be messages of "),t("code",{pre:!0},[e._v("Twist")]),e._v(" and "),t("code",{pre:!0},[e._v("Empty")]),e._v(" types, they are parts of "),t("code",{pre:!0},[e._v("std_msgs")]),e._v(" and "),t("code",{pre:!0},[e._v("geometry_msgs")]),e._v(", we'll use this in the controller. Shut the simulation for a while.")]),t("h2",{attrs:{id:"3-download-controller-package"}},[t("a",{attrs:{href:"#3-download-controller-package","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("3. Download controller package")]),t("p",[e._v("Globally, the main difference from the casual ROS robot controller is a block of code, which checks all the transactions in the network using "),t("a",{attrs:{href:"https://wiki.robonomics.network/docs/rinterface/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics IO")]),e._v(". The package itself is available on GitHub. Download it and build the workspace:")]),t("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\ncd ~/drone_simulator_ws/src\ngit clone https://github.com/PaTara43/drone_simulator_controller\ncd drone_simulator_controller/src\nchmod +x *.py\ncd ~/drone_simulator_ws/src\ncatkin build\n")]),t("h2",{attrs:{id:"4-manage-accounts-in-dapp"}},[t("a",{attrs:{href:"#4-manage-accounts-in-dapp","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("4. Manage accounts in DAPP")]),t("p",[e._v("Since we are testing, let's create a local robonomics network node with robonomics binary file:")]),t("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\n./robonomics --dev\n")]),t("p",[t("strong",[e._v("Important!")]),e._v(" Before next launches it is necessary to remove a directory "),t("code",{pre:!0},[e._v("db")]),e._v(" with")]),t("LessonCodeWrapper",{attrs:{language:"bash",codeClass:"big-code"}},[e._v("\nrm -rf /home/$USER/.local/share/robonomics/chains/dev/db\n")]),t("p",[e._v("After a successful launch create accounts following "),t("a",{attrs:{href:"https://wiki.robonomics.network/docs/create-account-in-dapp/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("this")]),e._v(" manual. "),t("strong",[e._v("Do not forget to save each account's seed and address! You will need them for transactions")]),e._v(". Add these addresses, seeds and path to robonomics binary file to file "),t("code",{pre:!0},[e._v("config.config")]),e._v(" in "),t("code",{pre:!0},[e._v("robonomics_ws/src/robonomics_sample_controller/src")]),e._v(". Transfer some money (units) to these accounts:")]),t("LessonImages",{attrs:{imageClasses:"mb",src:"connect-any-ros-compatible-drone/balances.jpg",alt:"balances"}}),t("h2",{attrs:{id:"5-launching-the-drone-under-parachain-control"}},[t("a",{attrs:{href:"#5-launching-the-drone-under-parachain-control","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("5. Launching the drone under parachain control")]),t("p",[e._v("Up to now the "),t("strong",[e._v("only thing running")]),e._v(" should be the robonomics local node. In a separate terminal launch drone simulation:")]),t("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\nroslaunch sjtu_drone simple.launch\n")]),t("p",[e._v("Run the script:")]),t("LessonCodeWrapper",{attrs:{language:"bash",codeClass:"big-code"}},[e._v("\nrosrun drone_simulator_controller drone_sample_controller.py\n")]),t("LessonImages",{attrs:{imageClasses:"mb",src:"connect-any-ros-compatible-drone/launched_drone.jpg",alt:"launched_drone"}}),t("p",[e._v("Now you can send a transaction triggering the drone to start flying. To do so, you should use the Robonomics IO "),t("code",{pre:!0},[e._v("write")]),e._v(" subcommand of robonomics binary file:")]),t("LessonCodeWrapper",{attrs:{language:"bash",codeClass:"big-code"}},[e._v('\necho "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]\n')]),t("p",[e._v("Where "),t("code",{pre:!0},[e._v("<DRONE_ADDRESS>")]),e._v("  and "),t("code",{pre:!0},[e._v("<EMPLOYER’S_KEY>")]),e._v(" are replaced with  previously saved strings accordingly.\nYou should see the log "),t("code",{pre:!0},[e._v('"Taking Off"')]),e._v(" and the drone should start flying:")]),t("LessonImages",{attrs:{imageClasses:"mb",src:"connect-any-ros-compatible-drone/flying.jpg",alt:"flying"}}),t("p",[e._v("That's how any ROS-compatible robot can be controlled by Robonomics parachain control.")]),t("h2",{attrs:{id:"part-2-saving-data-to-blockchain"}},[t("a",{attrs:{href:"#part-2-saving-data-to-blockchain","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("Part 2. Saving Data To Blockchain")]),t("p",[t("strong",[e._v("In this part we will continue using Robonomics tools to make a drone be controlled by a parachain. This time we will add sending data to IPFS and hash storing in chain options. Below is the instruction and code snippets. Requirements:")])]),t("List",[t("li",[e._v("Ubuntu 18.04 LTS")]),t("li",{staticClass:"flex"},[t("p",[e._v("ROS Melodic + Gazebo + RViz (installation manual "),t("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(")")])]),t("li",{staticClass:"flex"},[t("p",[e._v("IPFS 0.4.22 (download from "),t("a",{attrs:{href:"https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(" and install)")])]),t("li",{staticClass:"flex"},[t("p",[e._v("Robonomics node (binary file) (download latest release "),t("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(")")])]),t("li",[e._v("Python dependencies:\n"),t("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\npip install cv_bridge ipfshttpclient\n")])],1)]),t("p",[e._v("The entire process of coding this part of demo is presented in a video below.")]),t("div",{staticClass:"youtube-embed"},[t("div",{staticStyle:{width:"100%",margin:"0 auto"}},[t("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[t("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/dliLb6GHgpo",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])]),t("br"),t("h2",{attrs:{id:"1-add-dependencies"}},[t("a",{attrs:{href:"#1-add-dependencies","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("1. Add dependencies")]),t("p",[e._v("If we launch a simulation and look at the topic list (see part 1), we will see, that there is one topic containing front camera data and using "),t("code",{pre:!0},[e._v("sensor_msgs/Image")]),e._v(" message type:")]),t("LessonImages",{attrs:{imageClasses:"mb",src:"connect-any-ros-compatible-drone/front_camera.jpg",alt:"front_camera"}}),t("p",[e._v("Let's try to take a picture every 1 second and after the flight publish these photos to IPFS. If you have completed the first tutorial, you don't need to download anything else. It's the "),t("code",{pre:!0},[e._v("drone_sample_controller_pictures.py")]),e._v(" script.")]),t("h2",{attrs:{id:"2-manage-accounts-in-dapp"}},[t("a",{attrs:{href:"#2-manage-accounts-in-dapp","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("2. Manage accounts in DAPP")]),e._v("\nAs done in a previous tutorial, create a local robonomics network node with robonomics binary file:\n"),t("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\n./robonomics --dev\n\n")]),t("p",[t("strong",[e._v("Important!")]),e._v(" Before next launches it is necessary to remove a directory "),t("code",{pre:!0},[e._v("db")]),e._v(" with")]),t("LessonCodeWrapper",{attrs:{language:"bash",codeClass:"big-code"}},[e._v("\nrm -rf /home/$USER/.local/share/robonomics/chains/dev/db\n")]),t("p",[e._v("After a successful launch create accounts following "),t("a",{attrs:{href:"https://wiki.robonomics.network/docs/create-account-in-dapp/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("this")]),e._v(" manual. "),t("strong",[e._v("Do not forget to save each account's seed and address! You will need them for transactions")]),e._v(". Add these addresses, seeds and path to robonomics binary file to file "),t("code",{pre:!0},[e._v("config.config")]),e._v(" in "),t("code",{pre:!0},[e._v("robonomics_ws/src/robonomics_sample_controller/src")]),e._v(". Transfer some money (units) to these accounts:")]),t("LessonImages",{attrs:{imageClasses:"mb",src:"connect-any-ros-compatible-drone/balances.jpg",alt:"balances"}}),t("h2",{attrs:{id:"3-launch"}},[t("a",{attrs:{href:"#3-launch","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),e._v("3. Launch")]),t("p",[e._v("Up to now the "),t("strong",[e._v("only thing running")]),e._v(" should be the robonomics local node. In a separate terminal launch drone simulation:")]),t("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\nroslaunch sjtu_drone simple.launch\n")]),e._v("\nIn another one launch ipfs daemon:\n"),t("LessonCodeWrapper",{attrs:{language:"bash"}},[e._v("\nifps init # you only need to do this once\nipfs daemon\n\n")]),e._v("\nRun the script:\n"),t("LessonCodeWrapper",{attrs:{language:"bash",codeClass:"big-code"}},[e._v("\nrosrun drone_simulator_controller drone_sample_controller_pictures.py\n\n")]),t("p",[e._v("Now you can send a transaction triggering the drone to start flying and taking pictures. To do so, you should use the Robonomics IO "),t("code",{pre:!0},[e._v("write")]),e._v(" subcommand of robonomics binary file:")]),t("LessonCodeWrapper",{attrs:{language:"bash",codeClass:"big-code"}},[e._v('\necho "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]\n')]),t("p",[e._v("Where "),t("code",{pre:!0},[e._v("<DRONE_ADDRESS>")]),e._v("  and "),t("code",{pre:!0},[e._v("<EMPLOYER’S_KEY>")]),e._v(" are replaced with  previously saved strings accordingly.\nYou should see the log "),t("code",{pre:!0},[e._v('"Taking Off"')]),e._v(" and the drone should start flying and taking pictures:")]),t("LessonImages",{attrs:{imageClasses:"mb",src:"connect-any-ros-compatible-drone/flying_picturing.jpg",alt:"flying_picturing"}}),t("p",[e._v("Later, when the job is done, on the Robonomics portal go to "),t("code",{pre:!0},[e._v("Developer")]),e._v(" -> "),t("code",{pre:!0},[e._v("Chain state")]),e._v(" and add a "),t("code",{pre:!0},[e._v("DRONE")]),e._v(" datalog using "),t("code",{pre:!0},[e._v("“+”")]),e._v(" button with selected "),t("code",{pre:!0},[e._v("datalog")]),e._v(" as state query. The IPFS hash of the telemetry has been saved in the blockchain. To see the data simply copy the hash and add it to the local "),t("a",{attrs:{href:"https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("gateway")]),e._v(" address "),t("code",{pre:!0},[e._v("localhost:8080/ipfs/")]),e._v(":")]),t("LessonImages",{attrs:{imageClasses:"mb",src:"connect-any-ros-compatible-drone/datalog.jpg",alt:"Voila"}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(u),"function"==typeof h&&h(u);o.default=u.exports}}]);