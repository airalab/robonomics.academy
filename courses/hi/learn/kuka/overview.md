---
title: कुका मैनिपुलेटर कनेक्ट करें
description: कुका मैनिपुलेटर कनेक्ट करें
metaOptions: [सीखें]
defaultName: Connect Kuka manipulator
---

काम का एक उदाहरण वाला वीडियो यहाँ मिल सकता है:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## आवश्यकताएं

<List>

<li class="flex">

ROS मेलोडिक, Gazebo (स्थापना निर्देशिका [यहाँ](http://wiki.ros.org/melodic/Installation/Ubuntu))
</li>

<li>कुछ अतिरिक्त पैकेज

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(यहाँ से डाउनलोड करें [यहाँ](https://www.npackd.org/p/ipfs/0.4.22) और स्थापित करें)

<LessonCodeWrapper language="bash" codeClass="big-code">
tar -xvzf go-ipfs_v0.4.22_linux-386.tar.gz
cd go-ipfs/
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>pip3

<LessonCodeWrapper language="bash">
sudo apt-get install python3-pip
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li>substrate-interface

<LessonCodeWrapper language="bash">
pip3 install substrate-interface
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics नोड (बाइनरी फ़ाइल) (नवीनतम रिलीज [यहाँ](https://github.com/airalab/robonomics/releases) से डाउनलोड करें)

</li>

<li>IPFS ब्राउज़र एक्सटेंशन (आवश्यक नहीं)</li>

</List>

<br/>

***

<br/>

## स्थापना
कुका मैनिपुलेटर और नियंत्रण पैकेज स्थापित करें

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## गेज़बो मॉडल चलाना

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

एक नए ��िंडो में

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## रोबोनॉमिक्स चलाना
रोबोनॉमिक्स फ़ाइल के साथ फ़ोल्डर पर जाएं और स्थानीय रोबोनॉमिक्स नेटवर्क बनाएं:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

[रोबोनॉमिक्स पैराचेन पोर्टल पर जाएं](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) और स्थानीय नोड पर स्विच करें

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

फिर खातों पर जाएं और `KUKA` खाता बनाएं। खाते की म्नेमोनिक कुंजी को सहेजें, आपको बाद में इसकी आवश्यकता होगी। 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

किसी डिफ़ॉल्ट खातों में से नए खाते में कुछ इकाइयाँ भेजें।

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## आईपीएफएस चलाना
आईपीएफएस डेमन चलाएं:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## नियं���्रण पैकेज चल रहा है
कुका नियंत्रण पैकेज में कॉन्फ़िग निर्देशिका में आपको इस लाइनों के साथ कॉन्फ़िग फ़ाइल बनानी होगी, जहाँ `<आपका_म्नेमोनिक>` सहेजा गया म्नेमोनिक सीड है:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


अब आप नियंत्रण स्क्रिप्ट चला सकते हैं:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## लेन-देन भेजना
[रोबोनॉमिक्स पैराचेन पोर्टल](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) पर जाएं `Developer/Extrinsics`, `extrinsic` को `launch` में बदलें। `robot` में अपना `KUKA` खाता चुनें और `param` को `Yes` में बदलें। `Submit Transaction` दबाएं

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

कुका नियंत्रण पैकेज के साथ विंडो में आपको दिखाई देगा:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

फिर र��बोनॉमिक्स पोर्टल पर `डेवलपर/चेन स्टेट` जाएं, `डेटालॉग` और `डेटालॉगआइटम((अकाउंटआईडी,यू64)): रिंगबफरआइटम` को क्वेरी में चुनें और `KUKA` डेटालॉग को बटन '+' के साथ जोड़ें:

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

अब आप इस लिंक के माध्यम से आईपीएफएस में रोबोट की टेलीमेट्री खोज सकते हैं अपने हैश के साथ `https://gateway.ipfs.io/ipfs/<हैश>`।

## समस्या निवारण

अगर `कैटकिन_मेक` मूवआर्म.एच को नहीं ढूंढ सकता है और यह संदेश देता है, तो कुका_मैनिपुलेटर_गेजेबो पैकेज में सीमेक्लिस्ट्स.टीएक्सट में आखिरी चार पंक्तियों को हटाने की कोशिश करें:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

इन पंक्तियों के बिना `कैटकिन_मेक` करें, फिर उन्हें वापस लाएं और फ���र से `कैटकिन_मेक` करें।