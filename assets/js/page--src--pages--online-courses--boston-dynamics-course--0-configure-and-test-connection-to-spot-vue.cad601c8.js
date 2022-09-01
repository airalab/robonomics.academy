(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{EvZz:function(s,t,e){"use strict";e.r(t);var o={metaInfo:function(){return this.$seo({title:"Lesson #0, Configure and test connection to Spot",description:"In this lesson you will learn how to configure Yggdrasil network and establish connection to the robot.",image:{url:this.$website+"/og/boston-dynamics-course/0-configure-and-test-connection-to-spot.png",width:1280,height:650},openGraph:{title:"Lesson #0, Configure and test connection to Spot",type:"website"},twitter:{title:"Lesson #0, Configure and test connection to Spot",type:"summary"}})}},i=e("KHd+"),n=Object(i.a)(o,(function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("LayoutCourse",{attrs:{courseId:"2",lessonId:"1"}},[o("section",{staticClass:"text__hyphened"},[o("section",{staticClass:"container__narrow"},[o("h2",[s._v(s._s(s.$ts("What's this about")))]),o("p",[s._v(s._s(s.$ts("In this lesson you will learn how to configure Yggdrasil network and establish connection to the robot."))+"\n        ")])]),o("section",{staticClass:"container__narrow"},[o("h2",[s._v(s._s(s.$ts("The challenge")))]),o("p",[s._v(s._s(s.$ts("Our goal is to get answers from Spot to our"))+" "),o("g-link",{attrs:{to:"https://en.wikipedia.org/wiki/Ping_(networking_utility)"}},[s._v(s._s(s.$ts("ping")))]),s._v(" "+s._s(s.$ts("signals. We use Yggdrasil Network\n          to expose Spot to the internet, that means we will need to configure Yggdrasil Network support on your\n          computer first.")))],1)]),o("section",{staticClass:"container__reg"},[o("h2",[s._v(s._s(s.$ts("Instructions")))]),o("List",{attrs:{type:"numbers"}},[o("li",[o("p",[s._v(s._s(s.$ts("Yggdrasil Installation")))]),o("p",[s._v(s._s(s.$ts("Yggdrasil is an early-stage implementation of a fully end-to-end encrypted IPv6 network. Before starting\n              the lessons you need to install it on your computer.")))]),o("p",[s._v(s._s(s.$ts("For Linux: Installation instructions"))+" "),o("g-link",{attrs:{to:"https://yggdrasil-network.github.io/installation-linux-deb.html"}},[s._v(s._s(s.$ts("here")))]),s._v(".")],1),o("p",[s._v(s._s(s.$ts("For MacOS: Download .pkg file from "))),o("g-link",{attrs:{to:"https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4.0-macos-amd64.pkg"}},[s._v("\n                "+s._s(s.$ts("here")))]),s._v(".\n                "+s._s(s.$ts("Locate the downloaded file in Finder. Right-click it and click Open. Step through the installer as usual."))+"\n            ")],1),o("p",[s._v(s._s(s.$ts("For Windows: Download .msi file for"))+" "),o("g-link",{attrs:{to:"https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi"}},[s._v("\n                "+s._s(s.$ts("x64 system")))]),s._v(" "+s._s(s.$ts("or for"))+"\n              "),o("g-link",{attrs:{to:"https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi"}},[s._v("\n                "+s._s(s.$ts("x32 system")))]),s._v(" "+s._s(s.$ts("and run it with double click."))+"\n            ")],1)]),o("li",[o("p",[s._v(s._s(s.$ts("Open configuration file")))]),o("p",[s._v(s._s(s.$ts("You need to add a list of peers (public nodes) to configuration file so that you will be able to connect\n              to Spot.")))]),o("p",[s._v(s._s(s.$ts("For MacOS and Linux:")))]),o("p",[s._v(" "+s._s(s.$ts("For that, edit the"))+" "),o("code",[s._v("yggdrasil.conf")]),s._v(" "+s._s(s.$ts("file with this command in a terminal:")))]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s._v("              "),o("code",{staticClass:"bash"},[s._v("sudo nano /etc/yggdrasil.conf")]),s._v("\n            ")]),o("p",[s._v(s._s(s.$ts("For Windows: Run "))),o("code",[s._v("updateconfig.bat")]),s._v(" "+s._s(s.$ts("in"))+" "),o("code",[s._v("C:/Program Files/Yggdrasil")]),s._v(".")]),o("p",[s._v(s._s(s.$ts("Then in"))+" "),o("code",[s._v("C:/ProgramData/Yggdrasil")]),s._v(" "+s._s(s.$ts("open"))+" "),o("code",[s._v("yggdrasil.conf")]),s._v(" "+s._s(s.$ts("with any text editor"))+".")]),o("p",[o("code",[s._v("ProgramData")]),s._v(" "+s._s(s.$ts("is a hidden folder, so you need to show hidden data.")))])]),o("li",[o("p",[s._v(s._s(s.$ts("Write peers")))]),o("p",[s._v(s._s(s.$ts("In the file that you opened find line"))+" "),o("code",[s._v("Peers:")]),s._v(" "+s._s(s.$ts("(it is at the beginning of the file) add 5-6\n              peers geographically near to you (write them inside the brackets)."))+" "+s._s(s.$ts("You can find list of available peers"))+"\n              "),o("g-link",{attrs:{to:"https://github.com/yggdrasil-network/public-peers"}},[s._v(s._s(s.$ts("here")))]),s._v(" "+s._s(s.$ts("or add peers from example\n              below. Example in yggdrasil.conf:"))+"\n            ")],1),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s._v("              "),o("code",{staticClass:"json"},[s._v("Peers:\n[\n  tcp://213.188.199.150:10010\n  tcp://213.188.210.9:10010\n  tcp://[2a09:8280:1::3:312]:10010\n  tcp://[2a09:8280:1::a:2e2]:10010\n  tcp://46.151.26.194:60575\n  tcp://ygg-ru.cofob.ru:18000\n  tcp://ygg.tomasgl.ru:61933\n  tls://185.22.60.71:8443\n  tcp://51.15.118.10:62486\n  tls://ygg.loskiq.dev:17314\n  tls://longseason.1200bps.xyz:13122\n]")]),s._v("\n            ")]),o("p",[s._v(s._s(s.$ts("Check if the peers online in"))+" "),o("g-link",{attrs:{to:"https://publicpeers.neilalexander.dev/"}},[s._v(s._s(s.$ts("Public Peers")))]),s._v(".\n            ")],1)]),o("li",[o("p",[s._v(s._s(s.$ts("Save and close configuration file")))]),o("p",[s._v(s._s(s.$ts("For Linux and MacOS:")))]),o("p",[s._v(s._s(s.$ts("Press"))+" "),o("code",[s._v("Ctrl+x")]),s._v(", "+s._s(s.$ts("then press"))+" "),o("code",[s._v("y")]),s._v(" "+s._s(s.$ts("to save changes and press"))),o("code",[s._v("Enter")]),s._v(".")]),o("p",[s._v(s._s(s.$ts("For Windows: Save and close file.")))])]),o("li",[o("p",[s._v(s._s(s.$ts("Restart service")))]),o("p",[s._v(s._s(s.$ts("For Linux: Then restart Yggdrasil using this command:")))]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s._v("              "),o("code",{staticClass:"bash"},[s._v("systemctl restart yggdrasil")]),s._v("\n            ")]),o("p",[s._v(s._s(s.$ts("For macOS: Unload the service and run Yggdrasil with changed config file:")))]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s._v("              "),o("code",{staticClass:"bash"},[s._v("sudo launchctl unload /Library/LaunchDaemons/yggdrasil.plist\nsudo yggdrasil -useconffile /etc/yggdrasil.conf")]),s._v("\n            ")]),o("p",[s._v(s._s(s.$ts("You will need to do that before every lesson.")))]),o("p",[s._v(s._s(s.$ts("For Windows:")))]),o("p",[s._v(s._s(s.$ts("Press win + r and type"))+" "),o("code",[s._v("services.msc")]),s._v(", "+s._s(s.$ts("find Yggdrasil service, open it and restart (press Stop\n              and Start).")))]),o("g-image",{attrs:{src:e("J6bO")}})],1),o("li",[o("p",[s._v(s._s(s.$ts("Check Connection")))]),o("p",[s._v(s._s(s.$ts("Check if Yggdrasil works well. For that try to ping Spot address:")))]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s._v("              "),o("code",{staticClass:"bash"},[s._v("ping -6 strelka.ygg.merklebot.com")]),s._v("\n            ")]),o("p",[s._v(s._s(s.$ts("To open terminal in Windows press"))+" "),o("code",[s._v("Win+R")]),s._v(", "+s._s(s.$ts("type"))+" "),o("code",[s._v("cmd")]),s._v(" "+s._s(s.$ts("and press"))+" "),o("code",[s._v("Enter")]),s._v(".\n            ")]),o("p",[s._v(s._s(s.$ts("On MacOS use"))+" "),o("code",[s._v("ping6")]),s._v(" "+s._s(s.$ts("instead of"))),o("code",[s._v("ping")]),s._v(".")]),o("p",[s._v(s._s(s.$ts("If you can't ping Spot or you had any errors during the Yggdrasil setup look in"))+" "),o("g-link",{attrs:{to:"https://dapp.spot-sdk.education/docs/spot-troubleshooting"}},[s._v(s._s(s.$ts("Troubleshooting page")))]),s._v(". "+s._s(s.$ts("If you\n              can't find the solution there, please email spot@robonomics.network"))+".")],1)]),o("li",[o("p",[s._v(s._s(s.$ts("Create ssh key")))]),o("p",[s._v(s._s(s.$ts("You will connect to Spot via ssh, so you need to create ssh keys which you will use in booking lessons."))+"\n            ")]),o("p",[s._v(s._s(s.$ts("Run following command in the terminal:")))]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[s._v("              "),o("code",{staticClass:"bash"},[s._v("ssh-keygen -t rsa")]),s._v("\n            ")]),o("p",[s._v(s._s(s.$ts("SSH Client is available by default only in Windows 10, so if you use older versions you need to install\n              it. For example you can use "))),o("g-link",{attrs:{to:"https://www.putty.org/"}},[s._v("PuTTY")]),s._v(".")],1),o("p",[s._v(s._s(s.$ts("Remember the path to your key (by default it is)"))+" "),o("code",[s._v("/home/<user>/.ssh/id_rsa.pub")]),s._v(" "+s._s(s.$ts("or"))+"\n              "),o("code",[s._v("C:\\Users\\<user>\\.ssh\\id_rsa.pub")]),s._v(").")])])])],1),o("section",{staticClass:"container__narrow"},[o("h3",[s._v(s._s(s.$ts("Are you ready to practice?")))]),o("p",[s._v(s._s(s.$ts("Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key)\n          and the time when you want to connect to Spot to solve the task.")))]),o("h5",[o("g-link",{staticClass:"btn",attrs:{to:"https://dapp.spot-sdk.education/#/checkout"}},[s._v(s._s(s.$ts("Rent a spot")))])],1)])])])}),[],!1,null,null,null);t.default=n.exports},J6bO:function(s,t){s.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/lesson-0-1.cbffa61.193f25f6436f2acd0422a06d8ee043d8.jpg",size:{width:606,height:703},sizes:"(max-width: 606px) 100vw, 606px",srcset:["/assets/static/lesson-0-1.cbffa61.193f25f6436f2acd0422a06d8ee043d8.jpg 606w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 606 703' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-17433e80d951eb27011f0839c0a9dde8'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-17433e80d951eb27011f0839c0a9dde8)' width='606' height='703' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABKAEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAwQAAgUBBgj/xAAyEAACAQMCAwYGAgEFAAAAAAABAgMABBEFEiExkRMUIkFRcQYyUlNhgSPwJUJDosHx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APpSfUbSGZkm1CKFxg9m8kakZHDnRJL23ikKyXO1gQCrMg4%2bXWu3LzoYxDYrcjYCWMiqc%2bmDVIoe2vS1xpUKZzmYlGJxy8s/%2bUFTqVojMGvlBQ7WDPGCD6HNXk1G1jk2yXSocZ2s6Dn70C7Ru8uqaJFcD7paMbuvHNP9ytZgjzWkBcAc0DFfxmgWg1C2lkCx3iytz2qyEkfqm%2b8p9JqR2NpEwaO1gRhwysYBo3Zp9C9KAPeU%2bk1O8p9Jo3Zp9C9K40abT4F6UGRqsNrLJEbnTri5YRjDxLnH44Ee9H0y2tmkNzHZzW8oyP5cgnOM8Mn0qmoahLZyQqqwGIoCS5fdnlwAU/ikm%2bIH7N3iWzdQcBhK%2bOeOOE4eVBfUrRZL2Rm0aS5Jz41mCgj2LDjXILUw3QkTRGRlcMrrOuMnmcbv%2bqbi16xCKLi4iWcAF0XccHpV11/THzsvI2wcHAJwfTlQdF9e4P8Ai5sg8B2sfH/lTdpLNNCHmga3fPyOQx6qSKXbWLBUR2uFCvnaSp445%2bVVTWrB42dZiVUlT/G3MDPpQaHi9R0oayFmlUj5fOkTrumgMTdLhTg4VuB9OVHtb20umkFtIrOFDMACDg8jxoKzx3zNG1nPAkezBWSIsSfXIIotot4ryd6kgdP9AjQqR75JoVxfC1KIYbiTKbsxxFx7ZHnXbe/E9wYRDcIQSNzwsqn90Cl9BrbXUjWV1ZJAfkWWNiR7kGiQQ6oIlE9xC0uPEUBC5/AOaLNqQhkkRoLo7DgssDMD%2bQRzFPDJGcjpQIdjf/fT%2b/qp2N/99P7%2bqf8AF6jpU8XqOlAh2N/99P7%2bqNbJcp2neZFcEDbjy9aZ8XqOlRs7TmgxdVVmlh26itpiPO0sVz%2bedZiKyMEf4kjdmxtHa8ePLzreuLOC4eJ5ROW2AeB2A4Z5ge9Ws4obeMRpHO3HO6QFj1NBl3VxDMkiw67DCzpuVhICVGPmwTipY3UERQTa7b3DL4mPaAbhz5A%2blegMaHmq9KmxfpHSg8o4LldnxHEpILDEucjjx5/g0ezIQMz67FKCjDPa%2beOfPy516Ps49wbYu4cM4FdKITkqvSg8kysQXX4liVOH%2b5kc8c93rWzokbiGWQ34vEbwhlYkAjn5mtXavoOlcIAQ4AFAul0AijYeQ8673ofQetKD5R7VKBvvY%2bg9aXuNXtraOR5yUSMZZjyAqlJTAGVwQCM0GimqwOgZAxUjcCPMUvJ8RafHL2Uk6JLkDYzgEk/jNKoB4uHlVezQ%2bIou71xQaM2tW0ABkDjOTy9KCnxDYyjEbM2eHDjSM6KwTcoPPmKEkUasMRoPYCg//9k=' /%3e%3c/svg%3e"}}}]);