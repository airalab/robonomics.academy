---
title: मार्स क्यूरियोसिटी रोवर को कनेक्ट करें
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: रोबोनॉमिक्स पैराचेन नियंत्रण के अधीन मंगल जिज्ञासा रोवर से कनेक्ट करें।
metaOptions: [सीखें]
defaultName: Connect Mars Curiosity Rover
---

**चलिए देखते हैं कि रोबोनॉमिक्स पैराचेन नियंत्रण कैसे मंगल जिज्ञासा रोवर को चलने की अनुमति देता है। आवश्यकताएं:**

<List>

<li class="flex">

ROS मेलोडिक + Gazebo + RViz (स्थापना मैनुअल [यहाँ](http://wiki.ros.org/melodic/Installation))

</li>


<li>अतिरिक्त पैकेज:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

[0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz) तक आईपीएफएस

</li>

<li class="flex">

[आईपीएफएस सहयोगी एक्सटेंशन](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

रोबोनॉमिक्स नोड (बाइनरी फ़ाइल) (नवीनतम रिलीज [यहाँ](https://github.com/airalab/robonomics/releases) से डाउनलोड करें। इस ट्यूटोरियल को v1.1 पर सफलतापूर्वक परीक्षण किया गया।

</li>

</List>

<br/>

यहाँ सफल लॉन्च दिखाने वाला वीडियो है:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. एक सिमुलेशन सेट करें

क्यूरिओसिटी रोवर पैकेज डाउनलोड करें:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

हमें अपने रोवर को स्मूद्ली स्पॉन करने के लिए प्रारंभिक स्थितियों को समायोजित करने की आवश्यकता है:

<List>

<li>जाएं

`src/master/curiosity_mars_rover_description/worlds` and change line 14 of the file` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>जाएं

`src/master/curiosity_mars_rover_description/launch` and change line 4 of the file  `mars_curiosity_world.launch` to 
`<arg name="paused" default="false"/>`

`~/.bashrc` में स्रोत कमांड जोड़ना न भूलें
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> कंसोल को रीबूट करें और सिमुलेशन लॉन्च करें:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

नोट: यदि छवि अंधेरी है, उदा. छायांकित, तो Gazebo टूलबार में `कैमरा` को `आर्थोग्राफिक` में बदलें।
सिमुलेशन कुछ समय के लिए बंद किया जा सकता है।

------------

<br/>

### 2. रोबोनॉमिक्स नियंत्रक पैकेज डाउनलोड करें
टर्मिनल में रोवर के लिए नियंत्रक पैकेज डाउनलोड करने के लिए:

<LessonCodeWrapper language="bash" codeClass="long-code">
cd ~/robonomics_ws/src
git clone https://github.com/PaTara43/robonomics_sample_controller
cd robonomics_sample_controller
pip3 install -r requirements.txt
pip3 install rospkg
cd ..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3 # The controller supports python3
</LessonCodeWrapper>


------------

<br/>

### 3. डीएपीपी में खाते प्रबंधित करें
हम परीक्षण क�� रहे हैं, इसलिए हमें रोबोनॉमिक्स बाइनरी फ़ाइल के साथ स्थानीय रोबोनॉमिक्स नेटवर्क बनाने दें:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="Running node"/>


जाएं [Robonomics Parachain पोर्टल पर](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) और स्थानीय नोड पर स्विच करें 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


खातों पर जाएं और **CURIOSITY** और **EMPLOYER** खाते बनाएं।

**महत्वपूर्ण**! प्रत्येक खाते का पता कॉपी करें (पता कॉपी करने के लिए खाते के आइकन पर क्लिक करें) और Curiosity के खाते का **म्नेमोनिक सीड** (खाता बनाते समय प्राप्त किया गया)
इन खातों में कुछ पैसे (इकाइयाँ) भेजें। रोबोनॉमिक्स में खातों के बारे में अधिक पढ़ें [यहाँ](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


इन पतों, सीड और नोड पता (डेवलपर नोड के लिए `ws://127.0.0.1:9944` को डिफ़ॉल्ट मानकर) को `robonomics_ws/src/robonomics_sample_controller/src` में `config.config` में जोड़ें। कोट्स नहीं।

------------

<br/>

### 4. रोबोनॉमिक्स शुरू करें

आगे बढ़ने से पहले, सुनिश्चित करें कि आपने [आईपीएफएस सहयोगी एक्सटेंशन](https://github.com/ipfs/ipfs-companion) इंस्टॉल किया है।

एक अलग टर्मिनल में IPFS लॉन्च करें:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #you only need to do this once per IPFS installation
ipfs daemon
</LessonCodeWrapper>

अगर यह लाइव नहीं है, तो एक अलग टर्मिनल में Curiosity सिम्युलेशन लॉन्च करें:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

जब तक यह ठहर नहीं जाता

एक और टर्मिनल में कंट्रोलर लॉन्च करें:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

अब आप ���ोवर को चलाने और डेटा एकत्र करने के लिए एक लेनदार लेने के लिए एक लेनदार भेज सकते हैं। इसे करने के लिए, आप वही [रोबोनॉमिक्स पैराचैन पोर्टल](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) का उपयोग कर सकते हैं।
`Developer->Extrinsics` पर जाएं और क्यूरिओसिटी के नियोक्ता खाता, `लॉन्च` एक्सट्रिंसिक, क्यूरिओसिटी का खाता एक लक्ष्य खाता और पैरामीटर के रूप में `हाँ` का चयन करें।
एक्सट्रिंसिक सबमिट करें।

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

रोबोट चलना शुरू करना चाहिए। यह अन्य खातों से आदेश स्वीकार नहीं करेगा न ही `नहीं` पैरामीटर के साथ आदेश स्वीकार करेगा। रोवर लगभग एक मिनट के लिए चलेगा और डेटा एकत���र करेगा।
बाद में, जब काम हो जाएगा:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


रोबोनॉमिक्स पोर्टल पर जाएं `Developer -> Chain state` और `डेटालॉग -> रिंगबफरआइटम` को क्वेरी के रूप में चयन करके `क्यूरिओसिटी` डेटालॉग प्राप्त करें: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


अब टेलीमेट्री का आईपीएफएस हैश ब्लॉकचेन में सहेजा गया है। डेटा देखने के लिए आसानी से हैश कॉपी करें और गेटवे पर खोजें:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


यह टेलीमेट्री एक केंद्रीकृत स्टोरेज में रखी जाती है, और इसका हैश ब्लॉकचेन में स्टोर किया जाता है!
