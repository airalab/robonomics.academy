---
title: बैक्सटर रोबोट को नियंत्रित करें
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: बैक्सटर रोबोट को नियंत्रित करें
metaOptions: [सीखें]
defaultName: Control Baxter robot
---
कैसे काम करता है का उदाहरण:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## आवश्यकताएं:

<List>

<li class="flex">

ROS मेलोडिक + गेज़बो (स्थापना मैनुअल [यहाँ][db2])  

</li>

<li>अतिरिक्त पैकेज:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS तक 0.6.0 (यहाँ से डाउनलोड करें [यहाँ][db3] और स्थापित करें)

</li>

<li> पायथन पैकेज:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

रोबोनॉमिक्स नोड नवीनतम [रिलीज][db4] यहाँ डाउनलोड करें (अंतिम परीक्षण रिलीज v1.1)

</li>

<li>IPFS ब्राउज़र एक्सटेंशन (आवश्यक नहीं)</li>

</List>

<br/>

## 0. पायथन3 के लिए सीवी ब्रिज एक्सटेंशन स्थापित करें

<List>

<li> कैटकिन वर्कस्पेस बनाएं

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> कैटकिन को सीमेक चर मान निर्धारित करने के लिए निर्देशित करें। अपने वर्तमान संस्करण का उपयोग करें `पायथन`। मेरे लिए, यह `पायथन3.6` है:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> सीवी ब्रिज स्रोत क्लोन करें:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> अपने रिपॉजटरी में सीवी ब्रिज का संस्करण खोजें:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> गिट रिपो में सही संस्करण चेकआउट करें। हमारे मामले में यह 1.12.8 है:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> निर्माण:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> नए पैकेज के साथ पर्यावरण का विस्तार करें:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> टेस्ट:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

## 1. डाउनलोड सिमुलेशन और नियंत्रक पैकेज
पैकेज डाउनलोड करें:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
git checkout old_version
pip3 install -r requirements.txt
cd ../..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

मत भूलें स्रोत कमांड जोड़ने के लिए:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. सिमुलेशन शुरू करें
चलो गेज़बो वर्ल्ड शुरू करें और हमारे बैक्स्टर को उसमें डालें:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

टर्मिनल में एक और विंडो खोलें:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

आप हमारे बैक्स्टर के सामने कुछ मॉडल रख सकते हैं। यह और भी दिलचस्प होगा।

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. DAPP में खातों का प्रबंधन करें

क्योंकि हम टेस्टिंग कर रहे हैं, हमें रोबोनॉमिक्स बाइनरी फ़ाइल के साथ स्थानीय रोबोनॉमिक्स नेटवर्क बनाने दें। रोबोनॉमिक्स फ़ाइल के साथ फ़ोल्डर में जाएं और रन करें:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

[Robonomics पैराचेन पोर्टल][db5] पर जाएं और स्थानीय नोड पर स्विच करें

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

खातों पर जाएं और __बैक्स्टर__ और __नियोक्ता__ खाते बनाएं (__रोबोट__ आवश्यक नहीं है)

__महत्वपूर्ण!__ प्रत्येक खाते का **म्नेमोनिक** और **पता** कॉपी करें (पता कॉपी करने के लिए खाते के आइकन पर क्लिक करें)। **म्नेमोनिक** खाते का निजी कुंजी है।
इन खातों में कुछ पैसे (इकाइयां) भेजें:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

बैक्स्टर के **म्नेमोनिक** और **पता** को `config.yaml` में जोड़ें `robot_ws/src/Baxter_simulation_controller/config/`

## 4. प्रयोग सिमुलेशन शुरू करें

नए विंडो में चलाएं:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

अलग टर्मिनल खोलें और *नियंत्रक पैकेज* शुरू करें:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

अब आप एक लेनदेन भेज सकते हैं जिससे Baxter को चलना और डेटा एकत्र करना शुरू हो जाए। इसे करने के लिए, आप वही [Robonomics Parachain पोर्टल][db5] का उपयोग कर सकते हैं। **Developer->Extrinsics** पर जाएं और Baxter के नियोक्ता खाता का चयन करें, `लॉन्च` एक्सट्रिंसिक, Baxter का खाता एक लक्ष्य खाता और पैरामीटर के रूप में `हाँ` का चयन करें। एक्सट्रिंसिक सबमिट करें।


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

रोबोट को चलना शुरू कर देना चाहिए. यह अन्य खातों से कमांड स्वीकार नहीं करेगा और न ही `no` पैरामीटर वाले कमांड स्वीकार करेगा।
आपको निम्नलिखित देखना चाहिए:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

काम समाप्त होने पर Robonomics पोर्टल पर जाएं `Developer > Chain state`. **राज्य क्वेरी** में `datalog.datalogItem(AccountId,u64)` चुनें। यदि आप सभी डेटालॉग दिखाना चाहते हैं, त `समावेश विकल्प` को बंद करें और "+" बटन का उपयोग करके Baxter के डेटालॉग संदेश को देखें।

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

अब टेलीमेट्री और फोटो का IPFS हैश ब्लॉकचेन में सहेजा गया है। डेटा देखने के लिए बस हैश कॉपी करें और इसे URL: gateway.ipfs.io/ipfs/<br यहां अपना हैश डालें > में डालें

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

__गेटवे पर देखें__ पर क्लिक करें और यही सब है!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Baxter सिमुलेशन v2.0

यह कैसे काम करता है इसका उदाहरण:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## आवश्यकताएं:

<List>

<li class="flex">


आरओएस मेलोडिक + गज़ेबो (इंस्टॉलेशन मैनुअल [यहां] [db2])

</li>

<li>अतिरिक्त पैकेज:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

आईपीएफएस 0.6.0 तक ([यहां][db3] से डाउनलोड करें और इंस्टॉल करें)

</li>

<li> पायथन पैकेज:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics नोड (बाइनरी फ़ाइल) (नवीनतम [रिलीज][db4] यहाँ डाउनलोड करें)

</li>

<li class="flex">

**Robonomics पोर्टल** पर __Baxter__ और __नियोक्ता__ खाते बनाएं (आप यहाँ ट्यूटोरियल ["Robonomics पोर्टल पर खाता बनाएं"][db8] पा सकते हैं)
</li>

<li>आईपीएफएस ब्राउज़र एक्सटेंशन (आवश्यक नहीं)</li>

</List>

<br/>

## 0. Python3 के लिए CV ब्रिज एक्सटेंशन इंस्टॉल करें

<List>

<li> कैटकिन कार्यक्षेत्र बनाएं

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> कैटकिन को सेमेक वेरिएबल सेट करने का निर्देश दें। `पायथन` के अपने वर्तमान संस्करण का उपयोग करें। मेरे लिए, यह `पाइथन3.6` है:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li>क्लोन सीवी_ब्रिज स्रोत:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li>अपने भंडार में cv_bridge का संस्करण ढूंढें:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> गिट रेपो में सही संस्करण चेकआउट करें। हमारे मामले में यह 1.12.8 है:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> निर्माण:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> नए पैकेज के साथ पर्यावरण का विस्तार करें:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> परीक्षा:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

<br/>

## 1. सिमुलेशन और नियंत्रक पैकेज डाउनलोड करें
हमें 2 workspaces बनाने की आवश्यकता होगी - एक मुख्य Baxter's packages के लिए और दूसरा मुख्य नियंत्रण कार्यक्रम के लिए।
पहला workspace। यह मुख्य नियंत्रण कार्यक्रम है। यह python3 के तहत चलाया जाएगा।

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

दूसरा workspace। यहाँ सभी Baxter's packages होंगे। सिमुलेशन बहुत पुरानी है, इसलिए यह केवल python2 के तहत चल सकती है।

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

ये packages ROS indigo के लिए बनाए गए थे। हमें कुछ फ़ाइलें बदलनी होंगी ताकि हम उन्हें ROS melodic पर चला सकें।
हम **patch** फ़ाइलें उपयोग करेंगे।

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

और हम भी हमारे पैकेज बनाएंगे:  
पहले बैक्स्टर के पैकेज बनाएं

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

फिर पहले कार्यस्थल पर वापस जाएं और उसे भी बनाएं:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

स्रोत कमांड जोड़ना न भूलें:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Start simulation
### हमारे सिमुलेशन शुरू करें:
सबसे पहले `robot_ws` पर जाएं और baxter.sh की प्रतिलिपि बनाएं और संपादित करें

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

आदेश के साथ अपना स्थानीय आईपी पता खोजें:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

`baxter.sh` में निम्नलिखित मानों को संपादित करें:

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- आपका आईपी - अपना स्थानीय आईपी पता डालें। `ip a` देखें
- ros_version - उदाहरण के लिए "मेलोडिक"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

बैक्सटर शैल स्क्रिप्ट को सिम के साथ चलाएं:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

आप हमारे बैक्सटर के सामने कुछ मॉडल रख सकते हैं। यह और भी दिलचस्प होगा.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3.डीएपीपी में खाते प्रबंधित करें

चूंकि हम परीक्षण कर रहे हैं, आइए हम रोबोनॉमिक्स बाइनरी फ़ाइल के साथ एक स्थानीय रोबोनॉमिक्स नेटवर्क बनाएं। रोबोनॉमिक्स फ़ाइल वाले फ़ोल्डर में जाएँ और चलाएँ:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

[रोबोनोमिक्स पैराचेन पोर्टल][db5] पर जाएं और स्थानीय नोड पर स्विच करें

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

खातों में जाएं और __बैक्स्टर__ और __नियोक्ता__ खाते बनाएं।

आप यहाँ [db8] मैनुअल "रोबोनॉमिक्स पोर्टल पर खाता बनाएं" पा सकते हैं।

__महत्वपूर्ण!__ प्रत्येक खाते का **स्मृति** और **पता** कॉपी करें (पता कॉपी करने के लिए खाते के आइकन पर क्लिक करें)। **स्मरक** खाते की निजी कुंजी है।

इन खातों में कुछ पैसे (यूनिट) ट्रांसफर करें:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

`robonomics_ws/src/Baxter_simulation_controller/config/` में `config.yaml` में बैक्स्टर का **म्नेमोनिक** और **पता** जोड़ें

## 4. अनुकरण प्रारंभ करें

नई विंडो में चलाएँ:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

अलग टर्मिनल खोलें और *नियंत्रक पैकेज* प्रारंभ करें:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

अब आप एक लेनदारी भेजकर बैक्स्टर को चलने और डेटा एकत्र करने के लिए ट्रिगर कर सकते हैं। इसके लिए, आप एक ही पोर्टल [रोबोनॉमिक्स पैराचैन पोर्टल][db5] का उपयोग कर सकते हैं। **डेवलपर->एक्सट्रिन्स** जाएं और बैक्स्टर के नियोक्ता खाता, `लॉन्च` एक्सट्रिन्स, बैक्स्टर का खाता लक्ष्य खाता और पैरामीटर के रूप में `हाँ` का चयन करें। एक्सट्रिन्स सबमिट करें।


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

रोबोट को चलना शुरू कर देना चाहिए. यह अन्य खातों से कमांड स्वीकार नहीं करेगा और न ही 'नहीं' पैरामीटर वाले कमांड स्वीकार करेगा।
आपको निम्नलिखित देखना चाहिए:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

काम समाप्त होने पर रोबोनॉमिक्स पोर्टल पर जाएं `डेवलपर > चेन स्थिति`। **स्थिति क्वेरी** में `datalog.datalogItem(AccountId,u64)` चुनें। अगर आप सभी डेटालॉग दिखाना चाहते हैं, तो `इनक्लूड ऑप्शन` को बंद करें और बैक्स्टर के डेटालॉग संदेश को "+" बटन का उपयोग करके देखें।

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

अब टेलीमेट्री और फोटो का आईपीएफएस हैश ब्लॉकचेन में सेव हो जाता है। डेटा देखने के लिए बस हैश को कॉपी करें और इसे यूआरएल के साथ सर्च बार में डालें: 
#### gateway.ipfs.io/ipfs/< अपना हैश यहाँ डालें>

यह सब है!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/Installation>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>