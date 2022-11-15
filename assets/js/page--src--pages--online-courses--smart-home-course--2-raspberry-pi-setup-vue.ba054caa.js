(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Jx7H:function(s,t,e){"use strict";e("iPB1")},YKXY:function(s,t,e){"use strict";e.r(t);e("07d7"),e("PKPk"),e("3bBZ");var n={components:{MetaInfo:function(){return e.e(1).then(e.bind(null,"9qaU"))}}},a=(e("Jx7H"),e("KHd+")),i=Object(a.a)(n,(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("LayoutCourse",{attrs:{courseId:"3",lessonId:"2"}},[n("MetaInfo",{attrs:{pageTitle:"Lesson #2, Raspberry Pi Setup",pageDescription:"lesson description",pageImage:"/og/smart-home-course/2-raspberry-pi-setup"}}),n("section",{staticClass:"text__hyphened"},[n("section",{staticClass:"container__narrow"},[n("h2",[s._v(s._s(s.$ts("What's this about")))]),n("p",[s._v(s._s(s.$ts("In this lesson, you'll prepare your Raspberry Pi to become an IoT hub. You will sequentially install and configure all the necessary components, namely:"))+"\n        ")]),n("List",[n("li",[s._v("\n            "+s._s(s.$ts("Ubuntu Linux distribution for Raspberry Pi as a server operating system;"))+"\n          ")]),n("li",[s._v("\n            "+s._s(s.$ts("Home Assistant packages;"))+"\n          ")]),n("li",[s._v("\n            "+s._s(s.$ts("IPFS packages;"))+"\n          ")]),n("li",[s._v("\n            "+s._s(s.$ts("Zigbee2MQTT bridge (for Zigbee adapter scenario);"))+"\n          ")]),n("li",[s._v("\n            "+s._s(s.$ts("robonomics-interface library."))+"\n          ")])])],1),n("section",{staticClass:"container__reg"},[n("h2",[s._v(s._s(s.$ts("Instructions")))]),n("List",{attrs:{type:"numbers"}},[n("li",[n("p",[s._v(s._s(s.$ts("Preparing and Configuring the Raspberry Pi")))]),n("List",[n("li",[n("p",[s._v("\n                  "+s._s(s.$ts("Download the image of"))+" "),n("g-link",{attrs:{to:"https://ubuntu.com/download/raspberry-pi"}},[s._v(s._s(s.$ts("64-bit Ubuntu Server 22.04 LTS")))]),s._v(" "+s._s(s.$ts("or newer for Raspberry Pi."))+"\n                ")],1)]),n("li",[n("p",[s._v("\n                  "+s._s(s.$ts("Download and install a tool for writing image files called"))+" "),n("g-link",{attrs:{to:"https://www.balena.io/etcher/"}},[s._v(s._s(s.$ts("balenaEtcher")))]),s._v(" "+s._s(s.$ts("on your computer."))+"\n                ")],1),n("p",[s._v("\n                  "+s._s(s.$ts("Then, insert the SD card and run the balenaEtcher Imager program. Select the required image (which you just downloaded) as the operating system and ensure to select your SD card from the storage dropdown, and then select"))+" "),n("code",{staticClass:"nowb"},[s._v("flash")]),s._v(" "+s._s(s.$ts("image."))+"\n                ")]),n("g-image",{staticClass:"clickable-image",attrs:{src:e("aKtq"),alt:"balena"},on:{click:function(t){return s.$store.commit("SHOW_IMAGE_POPUP","smart-house-course/lesson-2-1.jpeg")}}})],1),n("li",[n("p",[s._v("\n                  "+s._s(s.$ts("Open the SD card's storage and navigate inside the root folder of the card. The name of the folder should be something similar to"))+" "),n("code",[s._v("system-boot")]),s._v(".\n                ")]),n("p",[s._v("\n                  "+s._s(s.$ts("Find the file named"))+" "),n("code",[s._v("network-config")]),s._v(" "+s._s(s.$ts("and open it in a text editor. Copy the text below, paste it into the file and insert your"))+" "),n("span",{staticClass:"bold"},[s._v(s._s(s.$ts("Wi-Fi name")))]),s._v(" "+s._s(s.$ts("(SSID) and"))+" "),n("span",{staticClass:"bold"},[s._v(s._s(s.$ts("Wi-Fi password")))]),s._v(" "+s._s(s.$ts("(with quote marks)."))+"\n                ")]),n("prism",{attrs:{language:"json"}},[s._v('\n  version: 2\n  ethernets: \n    eth0:\n      dhcp4: true\n      optional: true\n  wifis:\n    wlan0:\n      dhcp4: true\n      optional: true\n      access-points:\n        "YOUR_WIFI_NAME":\n          password: "YOUR_WIFI_PASSWORD"\n')]),n("span",{staticClass:"italic"},[s._v("> "+s._s(s.$ts("Make sure that you input your actual Wi-Fi name and your Wi-Fi password.")))]),n("p",[s._v(s._s(s.$ts("Save the file, insert the SD card into the Raspberry Pi and turn it on. It should connect to your Wi-Fi network, which will take some time. It should be noted that making changes to this file later will not change the connection, and the config is valid only on the first launch of the device. If later you need to change settings, please edit the configuration file in"))+" "),n("code",[s._v("/etc/netplan/")]),s._v(" "+s._s(s.$ts("folder.")))])],1),n("li",[n("p",[s._v(s._s(s.$ts("Now you need to find an address of the device. To do it you can use various methods for network scanning, like"))+" "),n("g-link",{attrs:{to:"https://www.fing.com/products"}},[s._v(s._s(s.$ts("Fing App")))]),s._v(", "),n("code",[s._v("arp -a")]),s._v(" "+s._s(s.$ts("command or"))+" "),n("g-link",{attrs:{to:"https://nmap.org/download.html"}},[s._v("nmap")]),s._v(", "+s._s(s.$ts("the latter will be used next.")))],1),n("p",[s._v(s._s(s.$ts("Install nmap with a command")))]),n("prism",{attrs:{language:"bash"}},[s._v("sudo apt-get install nmap")]),n("p",[s._v(s._s(s.$ts("Then find your address in your local network. It should look like"))+" "),n("code",[s._v("192.168.xxx.xxx")]),s._v(" "+s._s(s.$ts("or"))+" "),n("code",[s._v("172.xxx.xxx.xxx.")]),s._v(" "+s._s(s.$ts("Pay attention as nmap can find many addresses on your local network.")))]),n("prism",{attrs:{language:"bash"}},[s._v(" ip a ")]),n("p",[s._v(s._s(s.$ts("Then scan your network as shown below replacing the last octet of the address with"))+" "),n("code",[s._v("0:")])]),n("prism",{attrs:{language:"bash"}},[s._v("sudo nmap -sP 192.168.xxx.0/24")]),n("p",[s._v(s._s(s.$ts("The output of the command will be something like this:")))]),n("prism",{staticClass:"big-code",attrs:{language:"bash"}},[s._v("\nStarting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST\nNmap scan report for _gateway (192.168.43.1)\nHost is up (0.015s latency).\nMAC Address: 8E:F5:A3:DB:02:24 (Unknown)\nNmap scan report for ubuntu (192.168.43.56)\nHost is up (0.049s latency).\nMAC Address: DC:A6:32:04:45:50 (Raspberry Pi Trading)\nNmap scan report for LAPTOP-NO7 (192.168.43.234)\nHost is up (0.00057s latency).\nMAC Address: 7C:B3:7D:9E:94:DA (Intel Corporate)\nNmap scan report for ed-vm (192.168.43.138)\nHost is up.\nNmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds\n                ")]),n("p",[s._v(s._s(s.$ts("Standard hostname for freshly installed Raspberry Pi should be"))+" "),n("code",{staticClass:"nowb"},[s._v("ubuntu")]),s._v(", "+s._s(s.$ts("so in this example the address is"))+" "),n("code",[s._v("192.168.43.56.")])])],1),n("li",[n("p",[s._v(s._s(s.$ts("Connect to the Raspberry Pi via SSH with found IP. User is"))+" "),n("code",{staticClass:"nowb"},[s._v('"ubuntu"')]),s._v(", "+s._s(s.$ts("the password is"))+" "),n("code",{staticClass:"bold"},[s._v('"ubuntu"')]),s._v(".")]),n("prism",{attrs:{language:"bash"}},[s._v("ssh ubuntu@192.168.43.56")]),n("p",[s._v(s._s(s.$ts("The system will ask you to change the password to a more secure one, make sure you don't lose it.")))]),n("p",[s._v(s._s(s.$ts("Further instructions are executed via SSH on the Raspberry Pi itself.")))])],1)])],1),n("li",[n("p",[s._v(s._s(s.$ts("Home Assistant Installation")))]),n("List",[n("li",[n("p",[s._v(s._s(s.$ts("Before starting, update the Raspberry Pi system and install necessary packages.  During installation you will see a window with service restart request. Just choose"))+" "),n("span",{staticClass:"accent"},[s._v("ok")]),s._v(" "+s._s(s.$ts("with the"))+" "),n("code",[s._v("tab")]),s._v(" "+s._s(s.$ts("button and press enter.")))]),n("prism",{staticClass:"long-code",attrs:{language:"bash"}},[s._v("\nsudo apt-get update\nsudo apt-get upgrade -y\nsudo apt-get install -y python3 python3-dev python3-venv python3-pip libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion\n                ")])],1),n("li",[n("p",[s._v("\n                  "+s._s(s.$ts("Create user"))+" "),n("code",[s._v("homeassistant")]),s._v(" "+s._s(s.$ts("and the directory for Home Assistant Core:"))+"\n                ")]),n("prism",{staticClass:"long-code",attrs:{language:"bash"}},[s._v("\nsudo useradd -rm homeassistant\nsudo mkdir /srv/homeassistant\nsudo chown homeassistant:homeassistant /srv/homeassistant\n                ")])],1),n("li",[n("p",[s._v(s._s(s.$ts("Create a virtual environment for Home Assistant Core and switch to it. This should be done as the"))+" "),n("code",[s._v("homeassistant")]),s._v(" "+s._s(s.$ts("user, so after executing the commands your user will look like"))+" "),n("code",[s._v("(homeassistant) homeassistant@ubuntu")]),s._v(":")]),n("prism",{attrs:{language:"bash"}},[s._v("\nsudo -u homeassistant -H -s\ncd /srv/homeassistant\npython3 -m venv .\nsource bin/activate\n\n                ")]),n("p",[s._v("\n                  "+s._s(s.$ts("As the result, you will find a name of the virtual environment in the brackets:"))+"\n                ")]),n("prism",{staticClass:"big-code",attrs:{language:"bash"}},[s._v("(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$")])],1),n("li",[n("p",[s._v(s._s(s.$ts("Install required Python packages:")))]),n("prism",{attrs:{language:"bash"}},[s._v("\npython3 -m pip install wheel~=0.37\npip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11\npip3 install homeassistant==2022.8.2\n                ")])],1),n("li",[n("p",[s._v(s._s(s.$ts("Start Home Assistant Core for the first time. This will complete the installation by automatically creating the"))+"\n                "),n("code",[s._v(".homeassistant")]),s._v(" "+s._s(s.$ts("configuration directory in the"))+" "),n("code",[s._v("/home/homeassistant")]),s._v(" "+s._s(s.$ts("directory, and installing any basic dependencies:"))+"\n                ")]),n("prism",{attrs:{language:"bash"}},[s._v("hass")])],1),n("li",[n("p",[s._v("\n                  "+s._s(s.$ts("While the initial setup is in progress, сheck your installation via the web interface on"))+" "),n("code",[s._v("http://%RASPBERRY_IP_ADDRESS%:8123")]),s._v(" "+s._s(s.$ts("In this example:"))+" "),n("code",[s._v("http://192.168.43.56:8123.")]),s._v(" "+s._s(s.$ts("You can open a web UI from any computer connected to your local network."))+"\n                ")]),n("p",[s._v(s._s(s.$ts("Wait until you will get the welcome windows with login / password creation and then stop Home Assistant with"))+" "),n("code",[s._v("Ctrl+C.")])])])])],1),n("li",[n("p",[s._v(s._s(s.$ts("IPFS Installation")))]),n("List",[n("li",[n("p",[s._v(s._s(s.$ts("For IPFS installation you can use our script to download IPFS and create systemd service with it. First, exit the virtual environment for Home Assistant:")))]),n("prism",{attrs:{language:"bash"}},[s._v("exit")]),n("p",[s._v(s._s(s.$ts("Then execute:")))]),n("prism",{attrs:{language:"bash"}},[s._v("    \ncd ~\nwget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh\nsudo chmod +x install_ipfs.sh\n./install_ipfs.sh\n\n                ")])],1)])],1),n("li",[n("p",[s._v(s._s(s.$ts("Zigbee2MQTT Setup (Only for Zigbee Adapter)")))]),n("List",[n("li",[n("p",[s._v(s._s(s.$ts("Set up Node.js runtime environment repository and install it with required dependencies:")))]),n("prism",{staticClass:"big-code",attrs:{language:"bash"}},[s._v("\nsudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -\nsudo apt-get install -y nodejs git make g++ gcc\n                ")])],1),n("li",[n("p",[s._v(s._s(s.$ts("Verify that the correct versions of Node.js (v14.X, V16.x, V17.x or V18.X) and package manager"))+" "),n("code",{staticClass:"nowb"},[s._v("npm")]),s._v(" "+s._s(s.$ts("(6.X, 7.X or 8.X) automatically installed with Node.js, have been installed:")))]),n("prism",{attrs:{language:"bash"}},[s._v("\nnode --version\nnpm --version\n                ")])],1),n("li",[n("p",[s._v("\n                  "+s._s(s.$ts("Create a directory for Zigbee2MQTT and set your user as owner of it:"))+"\n                ")]),n("prism",{attrs:{language:"bash"}},[s._v("\nsudo mkdir /opt/zigbee2mqtt\nsudo chown -R ${USER}: /opt/zigbee2mqtt\n                ")])],1),n("li",[n("p",[s._v("\n                  "+s._s(s.$ts("Clone Zigbee2MQTT repository:"))+"\n                ")]),n("prism",{staticClass:"big-code",attrs:{language:"bash"}},[s._v("\ngit clone --depth 1 --branch 1.28.0 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt\n                ")])],1),n("li",[n("p",[s._v("\n                  "+s._s(s.$ts("Install dependencies (as user"))+" "),n("code",[s._v("pi")]),s._v("). "+s._s(s.$ts("Note that the"))+" "),n("code",[s._v("npm ci")]),s._v(" "+s._s(s.$ts("could produce some warning which can be ignored."))+"\n                ")]),n("prism",{attrs:{language:"bash"}},[s._v("\ncd /opt/zigbee2mqtt\nnpm ci\n                ")])],1)])],1),n("li",[n("p",[s._v(s._s(s.$ts("Systemd Services")))]),n("List",[n("li",[n("p",[s._v(s._s(s.$ts("Systemd service is useful for automating the launch of Home Assistant. Create new service for Home Assistant:")))]),n("prism",{staticClass:"big-code",attrs:{language:"bash"}},[s._v("\nsudo nano /etc/systemd/system/home-assistant@homeassistant.service\n                ")])],1),n("li",[n("p",[s._v(s._s(s.$ts("Paste the following")))]),n("prism",{attrs:{language:"bash"}},[s._v('\n[Unit]\nDescription=Home Assistant\nAfter=network-online.target\n[Service]\nType=simple\nRestart=on-failure\n\nUser=%i\nWorkingDirectory=/srv/%i/\nExecStart=/srv/homeassistant/bin/hass -c "/home/%i/.homeassistant"\nEnvironment="PATH=/srv/%i/bin"\n\n[Install]\nWantedBy=multi-user.target\n                ')])],1),n("li",[n("p",[s._v(s._s(s.$ts("Enable and start the service:")))]),n("prism",{staticClass:"big-code",attrs:{language:"bash"}},[s._v("\nsudo systemctl enable home-assistant@homeassistant.service\nsudo systemctl start home-assistant@homeassistant.service\n                ")])],1)])],1),n("li",[n("p",[s._v(s._s(s.$ts("Robonomics Integration")))]),n("List",[n("li",[n("p",[s._v(s._s(s.$ts("Log in with"))+" "),n("code",[s._v("homeassistant")]),s._v(" "+s._s(s.$ts("user on your Raspberry Pi:")))]),n("prism",{attrs:{language:"bash"}},[s._v("\nsudo -u homeassistant -H -s\n                ")])],1),n("li",[n("p",[s._v(s._s(s.$ts("Source virtual environment and install required Python packages:")))]),n("prism",{attrs:{language:"bash"}},[s._v("\nsource /srv/homeassistant/bin/activate\npip install robonomics-interface~=1.3\n                ")])],1),n("li",[n("p",[s._v(s._s(s.$ts("Then go to"))+" "),n("code",[s._v(".homeassistant")]),s._v(" "+s._s(s.$ts("directory, create folder"))+" "),n("code",{staticClass:"nowb"},[s._v("custom_components")]),s._v(" "+s._s(s.$ts("and clone in there the repository with the integration:"))+"\n                ")]),n("prism",{staticClass:"big-code",attrs:{language:"bash"}},[s._v("\ncd /home/homeassistant/.homeassistant\nmkdir custom_components\ncd custom_components\nsvn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics\n\n                ")])],1),n("li",[n("p",[s._v(s._s(s.$ts("After that exit homeassistant user and restart service:")))]),n("prism",{staticClass:"big-code",attrs:{language:"bash"}},[s._v("\nexit\nsudo systemctl restart home-assistant@homeassistant.service\n                ")])],1)])],1)])],1)])],1)}),[],!1,null,"1794219c",null);t.default=i.exports},aKtq:function(s,t){s.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/lesson-2-1.b569929.db460708d93e9eb82f580c5f773ac023.jpeg",size:{width:802,height:519},sizes:"(max-width: 802px) 100vw, 802px",srcset:["/assets/static/lesson-2-1.82a2fbd.db460708d93e9eb82f580c5f773ac023.jpeg 480w","/assets/static/lesson-2-1.b569929.db460708d93e9eb82f580c5f773ac023.jpeg 802w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 802 519' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-634ac1b9c83348e76dfbb2ee1d9d782f'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-634ac1b9c83348e76dfbb2ee1d9d782f)' width='802' height='519' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAApAEADASIAAhEBAxEB/8QAGwAAAwADAQEAAAAAAAAAAAAAAAQFAQIDBgf/xAAtEAABBAEDAQgBBAMAAAAAAAABAAIDBBEFEiExExVBUVKRktEGIiNCoWFxgf/EABkBAQEBAQEBAAAAAAAAAAAAAAABAwQCBf/EAB0RAAIDAAMBAQAAAAAAAAAAAAACAQMRBBJRoTH/2gAMAwEAAhEDEQA/APlJ0KsTkyTEnkkuH0juGr65vkPpVh0TDaNp1F91taY02PEbpww7GuPgT5rTIPOkHuGr65vkPpP0NFoRQucbZZI52CySuJeAODkg454TG13pd7LrUq2LluKrUhkmsyuDI4mDLnHyAUlQTr%2bj05nNd25eRx%2b3E2Lj/g5SncNX1zfIfSuWqs9S1LWtQyQ2InFkkTxhzXDqCFy2u9LvZIUEjuGr65vkPpUx%2bO6RFDI6LVZTIyBsjG9gQXSO4dHnHG0c7unkmZK08VeGeSGRkM%2b7spHNw1%2b04OD44K4q5A0zG0vc1oIBPmcD3VWPUNSj0iTSGXGDT5X9q%2bHezBcMHr1HIBxnBIHkpI6Lbd%2bjbyqQ3e%2bWM7TK7gfxkyP6KZ0%2be5UtRX6dkRWYjuZJ2oD2keIzykVlpwcoUcvz27VmW/bsCWxM7c%2bTtQXuJ8Tg5XbTKU%2boiTbZLAzAIcSc5/wprjkkrAJHQkf6WlTIrxLxsefhhelr1ytTdW9zfh6WT8ftvrQskvNdDHkRsIJ2ZOTgZ4yo2p0XUJmxvka/c3dkDH9JTc71O91gknqcra22hlyuvJ92ZOXjcfmVv2uu7L51iPsAOiEDohcp9EEIQgBCEIAQhCA//9k=' /%3e%3c/svg%3e"}},iPB1:function(s,t,e){}}]);