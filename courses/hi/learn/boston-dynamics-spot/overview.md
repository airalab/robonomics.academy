---
title: "बोस्टन डायनेमिक्स स्पॉट के लिए सॉफ्टवेयर डेवलपिंग"
description: इस सबक में आप सीखेंगे कि आप एक उपयोगकर्ता के रूप में अधिकृत कैसे होते हैं, मोटर पावर नियंत्रण प्राप्त करते हैं और स्पॉट को मूल आदेश भेजते हैं।
metaOptions: [बोस्टन डायनामिक्स स्पॉट के लिए सॉफ़्टवेयर डेवलपिंग सीखें]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
इस सबक में आप सीखेंगे कि आप एक उपयोगकर्ता के रूप में अधिकृत कैसे होते हैं, मोटर पावर नियंत्रण प्राप्त करते हैं और स्पॉट को मूल आदेश भेजते हैं।
</RoboAcademyText>

## सिद्धांत

जैसे कि और सभी गंभीर रोबोट, बोस्टन डायनामिक्स स्पॉट के पास एक सुरक्षा तंत्र है — [ई-स्टॉप सेवा](https://dev.bostondynamics.com/docs/concepts/estop_service) (आपातकालीन रोक) जो स्पॉट के संचालन के दौरान हमेशा सक्रिय रहना चाहिए ताकि किसी भी संभावित भौतिक क्षति से बचा जा सके। ई-स्टॉप को चालू करने से सभी जोइंट्स को तुरंत फ्रीज कर दिया जाता है (यदि रोबोट चालू है तो इंजन को बंद किए बिना यह होता है)।

सबसे पहले, हमें रोबोट पर नियंत्रण किराया करना चाहिए। इसे करने के दो तरीके हैं - *प्राप्त* या *लेना*। *प्राप्त* का मतलब है नरम तरीके से नियंत्रण के लिए मांग करना, यदि किसी को अभी रोबोट का नियंत्रण है, तो आपकी अनुरोध को अस्वीकार किया जाएगा। दूसरे तरीके में, *लेना* का मतलब है ज़बरदस्ती नियंत्रण लेना, यह मायने नहीं रखता कि वर्तमान ऑपरेटर मौजूद है।

इसलिए, कुछ गति प्राप्त करने के लिए, आपको यह योजना अनुसरण करना चाहिए:

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="रोबोट क्रियान्वयन स्थितियाँ" imageClasses="mb"/>

रोबोट निष्पादन राज्य

इस सबक में आप सीखेंगे कि कैसे रोबोट की घूर्णन को नियंत्रित करने के लिए इसके *यॉ*, *रोल* और *पिच* को बदलकर। नीचे दिए गए चित्र में शरीर फ्रेम निर्देशिका प्रदर्शित है:

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="स्पॉट निर्देशांक" imageClasses="mb"/>

स्पॉट निर्देशांक

<RoboAcademyText fWeight="300" fSize="90%">
किसी कोड में कोणों को रेडियन में दर्शाया जाता है।
</RoboAcademyText>

सबक के परिणामस्वरूप, आप स्पॉट के चेहरे के साथ आकाश में अपने नाम के पहले अक्षर को खींचेंगे। आइए सेटअप शुरू करें!

## गिटपॉड सेटअप

इस सबक के लिए, हम गिटपॉड का उपयोग करेंगे, एक क्लाउड-आधारित आईडीई जो आपको अपने कंप्यूटर पर किसी भी विशेष सॉफ़्टवेयर को स्थापित किए बिना अभ्यास करने की अनुमति देता है।

1. [गिटपॉड](https://gitpod.io/) के लिए साइन अप करें।
2. हमारे [स्पॉट शिक्षा वातावरण](https://gitpod.io/#github.com/merklebot/spot-edu-environment) पर जाएं और उसे हमारे ब्राउज़र में खोलें। आपको एक सामान्य आईडीई के कार्यों के साथ विंडो दिखाई देगी। 
3. मेनू आइकन पर क्लिक करें, फिर टर्मिनल पर जाएं और एक नया टर्मिनल बनाएं।

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. इस कांड को कॉपी-पेस्ट करें:

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

और `Enter` दबाएं।

1. नया टर्मिनल खोलें (अब आप `+` बटन दबाकर कर सकते हैं) और कमांड के साथ कनेक्शन का परीक्षण करें

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

आपको कुछ इस तरह कुछ दिखना चाहिए:

<LessonCodeWrapper language="bash" codeClass="big-code">
gitpod /workspace/spot-edu-environment (main) $ ping6 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09
PING 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09(202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09) 56 data bytes
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=1 ttl=64 time=846 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=2 ttl=64 time=172 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=3 ttl=64 time=172 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=4 ttl=64 time=197 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=5 ttl=64 time=219 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=6 ttl=64 time=242 ms

</LessonCodeWrapper>

1. निर्धारित समय से पहले हम आपको एसएसएच कनेक्शन स्थापित करने के लिए निजी कुंजी भेजेंगे।
2. अपनी निजी कुंजी को फ़ाइल `id_ed25519` में कॉपी करें। आप *stop-edu-enviroment* के साइडबार एक्सप्लोरर में फ़ाइल पा सकते हैं।
3. **`id_ed25519` फ़ाइल के अंत में एक रिक्त पंक्ति जोड़ें, यह एसएसएच को सही ढंग से काम करने के लिए आवश्यक है।** बदलाव सहेजने के लिए `Ctrl+S` दबाएं।

अगर सब कुछ ठीक है, तो आप `lesson1.py` को संपादित रके पाठ पूरा करना शुरू कर सकते हैं

कोड को निष्पादित करने के लिए, कमांड का उपयोग करें:


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
याद रखें कि सुनिश्चित करें कि इस समय किसी और का प्रोग्राम नहीं चल रहा है।
</RoboAcademyText>


## अभ्यास सत्र की अनुसूची तैयार करें

अपने अभ्यास सत्र के लिए समयस्लॉट चुनने के लिए स्पॉट शेड्यूलिंग वेबसाइट का उपयोग करें:

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## अभ्यास

अब हम स्पॉट के सिर की गतिविधियों का उपयोग करके स्क्रीन पर चित्र बनाने के लिए एक सरल स्क्रिप्ट बनाएंगे।

<LessonCodeWrapper language="python" codeClass="big-code">
# Import Spot Control modules
import bosdyn.client
from bosdyn.client.robot_command import RobotCommandClient, blocking_stand
from bosdyn.client.robot_command import RobotCommandBuilder
from bosdyn.geometry import EulerZXY
import time
# ENTER YOUR AUTH DATA HERE
ROBOT_IP="192.168.50.3"
SPOT_USERNAME="student"
SPOT_PASSWORD=""
# Helpers to control camera drawing (you don't need to modify it)
import requests
VIDEOSERVER_URL="http://luke.merklebot:8000/"
VIDEOSERVER_TOKEN="1234"
def notify_start_line():
  requests.post(VIDEOSERVER_URL + "start_line", json={"token": VIDEOSERVER_TOKEN})
def notify_stop_line():
  requests.post(VIDEOSERVER_URL + "stop_line", json={"token": VIDEOSERVER_TOKEN})
def notify_clear_canvas():
    requests.post(VIDEOSERVER_URL + "clear_canvas", json={"token": VIDEOSERVER_TOKEN})
# Start with registering out SDK
sdk = bosdyn.client.create_standard_sdk('LessonOneClient')
# Create instance of robot and auth with credentials
robot = sdk.create_robot(ROBOT_IP)
robot.authenticate(SPOT_USERNAME, SPOT_PASSWORD)
# Create lease client and take exclusive control over Spot.  
lease_client = robot.ensure_client('lease')
lease = lease_client.take()
lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)
# Try to power on the robot
robot.power_on(timeout_sec=20)
if robot.is_powered_on():
    print("Powered On")
		# If everything went smooth, Spot face lights should turn green
else:
		# In case of some problems, e.g. somebody stole control over robot
    print("Failed")
    exit(0)
# Synchronize Spor inner time with ours - to avoid outdated commands
robot.time_sync.wait_for_sync()
# To execute robot movement, create command client through which orders are sent
command_client = robot.ensure_client(RobotCommandClient.default_service_name)
# Start movement with simple stand up
blocking_stand(command_client, timeout_sec=10)
# Rotate robot body:
#  1. Build command for body rotation. It’s not an easy task to control robot motion with commands on low level. 
#     Bosdyn Client allow as to use a shortcut - RobotCommandBuilder. It contains a number of predefined commands, 
#     you need just to choose one of your liking and insert parameters
footprint_R_body = EulerZXY(yaw=0.1, roll=0.1, pitch=0.1)
cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
#  2. Execute builded command
command_client.robot_command(cmd)
time.sleep(2)
# Return robot state back
command_client.robot_command(RobotCommandBuilder.synchro_stand_command(footprint_R_body=EulerZXY(yaw=0, roll=0, pitch=0)))
time.sleep(2)
# Change robot height
cmd = RobotCommandBuilder.synchro_stand_command(body_height=0.1)
command_client.robot_command(cmd)
# Now we are ready to draw letter. 
def draw_letter(command_client):
		# Choose points to draw (see the coords explanation bellow)
    points_xy_draw = (
        (125, 125),
        (375, 875),
        (500, 500),
        (250, 500),
        (500, 500),
        (625, 125),
    )
    for x, y in points_xy_draw:
        convert = lambda x: (x / 1000 - 0.5) * -1
        x, y = map(convert, (x, y))
        footprint_R_body = EulerZXY(
            yaw=x, 
            roll=0.0, 
            pitch=y,
        )
        cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
        command_client.robot_command(cmd)
        time.sleep(1)
notify_clear_canvas()
notify_start_line()
draw_letter(command_client)
notify_stop_line()
# Turn off the robot gracefully
robot.power_off(cut_immediately=False)

</LessonCodeWrapper>

<RoboAcademyText fWeight="300" fSize="90%">
अगर हमें कैमरे में स्पॉट को किसी बिंदु में ले जाना हो, तो हमें कई गैर-रैखिक पैरामीटरों के साथ कुछ बड़ी गणनाएँ करनी होंगी, जो बिल्कुल आसान काम नहीं है। लेकिन हम कह सकते हैं, कि स्थानिक रूप से, यॉ और पिच कोणों को कार्तेशियाई संयति के रूप में कुछ संकेतक के साथ चित्र पर उपयोग किया जा सकता है।
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

अब आप स्क्रिप्ट चलाने की कोशिश कर सकते हैं और परिणाम देख सकते हैं। Ctrl+S के साथ अपना कोड सहेजना न भूलें:

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### स्पॉट का वीडियो यहाँ मिल सकता है:
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## चुनौती
एक पायथन स्क्रिप्ट बनाएं जो रोबोट शरीर की स्थिति को एक क्रम में गतियों से नियंत्रित करता है:

1. खड़े हो जाओ
2. उसके चेहरे के साथ अपने पहचान का पता लगाएं (कम से कम 3 बिंदु वाला एक अक्षर)
3. बैठ जाओ

## परिणाम

अब, आप जानते हैं कि:

- स्पॉट SDK के साथ काम करना
- एक मूल कमांड बनाना
- रोबोट शरीर को घुमाना
- स्पॉट से कनेक्ट करना

और एक अक्षर भी खींच लिया। बधाई हो!


<RoboAcademyText fWeight="500">

हमने स्पॉट के संयुक्त डेटा के साथ [rosbag](http://wiki.ros.org/rosbag) एकत्रित किया है, ताकि आप उन्हें दृश्यीकरण कर सकें (उदाहरण के लिए [foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5) के साथ)। प्रमाणपत्र जल्द ही आपके ईमेल पर भेजा जाएगा।

</RoboAcademyText> 


## [अपना पहला सबक शेड्यूल करें](https://meetings.hubspot.com/strelka)