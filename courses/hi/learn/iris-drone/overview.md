---
title: मानवरहित हवाई वाहन कनेक्ट करें
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: मानवरहित हवाई वाहन कनेक्ट करें
metaOptions: [सीखना]
defaultName: Connect unmanned aerial vehicle
---

**ड्रोन लेन-देन के बाद चलना शुरू करता है और IPFS में संयोजनों के साथ फ़ाइल स्टोर करता है। नियंत्रण स्क्रिप्ट [GAAS डेमो स्क्रिप्ट](https://github.com/generalized-intelligence/GAAS) पर आधारित है**  

https://youtu.be/4CwtGAX1OwM

<br/>

## आवश्यकताएँ

<List>

<li> नियंत्रण के लिए आवश्यकताएँ:

<LessonCodeWrapper language="bash">
sudo apt install -y \
	python3-pip \
	ninja-build \
	exiftool \
	python-argparse \
	python-empy \
	python-toml \
	python-numpy \
	python-yaml \
	python-dev \
	python-pip \
	ninja-build \
	protobuf-compiler \
	libeigen3-dev \
	genromfs
</LessonCodeWrapper>

<LessonCodeWrapper language="bash">
pip3 install \
	pandas \
	jinja2 \
	pyserial \
	cerberus \
	pyulog \
	numpy \
	toml \
	pyquaternion
</LessonCodeWrapper>

</li>

<li class="flex">

ROS Melodic + Gazebo [स्थापना ट्यूटोरियल](http://wiki.ros.org/melodic/Installation)
</li>

<li>अतिरिक्त पैकेज:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>IPFS संस्करण 0.4.22

<LessonCodeWrapper language="bash" codeClass="big-code">
wget https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-amd64.tar.gz
tar -xvzf go-ipfs_v0.4.22_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash" codeClass="big-code">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics नोड (बाइनरी फ़ाइल) (नवीनतम रिलीज [यहाँ](https://github.com/airalab/robonomics/releases) से डाउनलोड करें)
</li>

</List>

<br/>

## पर्यारण सेटअप

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-mavros ros-melodic-mavros-extras
wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh
sudo ./install_geographiclib_datasets.sh
cd ~/catkin_ws/src
git clone https://github.com/PX4/Firmware.git
cd Firmware
git checkout v1.9.0
bash ./Tools/setup/ubuntu.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/catkin_ws/src
git clone https://github.com/generalized-intelligence/GAAS.git
cp -r ~/catkin_ws/src/GAAS/simulator/models/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/models/
cp -r ~/catkin_ws/src/GAAS/simulator/worlds/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/worlds/
cp -r ~/catkin_ws/src/GAAS/simulator/posix-config/* ~/catkin_ws/src/Firmware/posix-configs/SITL/init/ekf2/
</LessonCodeWrapper>

अपनी `.bashrc` फ़ाइल को संशोधित करें, निम्नलिखित पंक्तियों को नीचे जोड़ें:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## नियंत्रण पैकेज स्थापना
एक नए टर्मिनल में:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## रोबोनॉमिक्स नेटवर्क

स्थानीय रोबोनॉमिक्स नेटवर्क बनाने के लिए रोबोनॉमिक्स बाइनरी फ़ाइल के साथ फ़ोल्डर में जाएं और निम्नलिखित को चलाएं:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

`config.py` में रोबोनोमिक का पथ जोड़ें

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

[Robonomics पैराचेन पोर्टल](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) पर जाएं और स्थानीय नोड पर स्विच करें।

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

**खाते** पर जाएं और **DRONE** और **EMPLOYER** खाते बनाएं। खाते के नाम और कुंजियों और **robonomics** के पथ को `~/catkin_ws/src/drone_sim/src/config.py` में सहेजें। कुछ पैसे खातों में स्थानांतरित करें।

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## नकली सिमुलेशन चलाना
IPFS डेमन चलाएं

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

एक और टर्मिनल में सिमुलेशन लॉन्च करें:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

"Waiting for payment" तक प्रतीक्षा करें 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

एक लेनदेन भेजने के लिए एक और विंडो में चलाएं:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - जहां **<drone_address>** और **<employer_key>** को `config.py` से उचित तरीके से बदल देना चाहिए।

IPFS में डेटा भेजने के बाद, [Robonomics Parachain पोर्टल](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) में **Chain State** पर जाएं। क्वेरी में **datalog** का चयन करें और `+` बटन का उपयोग करके DRONE datalog जोड़ें।


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

आप ऊपर से हैश डालकर `https://gateway.ipfs.io/ipfs/<hash>` चल रहे ड्रोन की टेलीमेट्री पा सकते हैं।

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

अगले लॉन्च करने से पहले `db` निर्देशिका को हटाना महत्वपूर्ण है।  
` rm -rf ~/.local/share/robonomics/chains/dev/db`