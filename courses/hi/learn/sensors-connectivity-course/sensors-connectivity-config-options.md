---
title: "पाठ #5, सेंसर कनेक्टिविटी कॉन्फ़िगरेशन विकल्प"
description: 'सेंसर कनेक्टिविटी कॉन्फ़िग विकल्प'
lessonNumber: 5
metaOptions: [सीखना, सेंसर्स कनेक्टिविटी और डीसेंट्रलाइज्ड सेंसर्स नेटवर्क]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

अब तक केवल SDS011 सेंसर का समर्थन किया गया है, लेकिन अन्य सेंसर्स को भी आसानी से जोड़ा जा सकता है और हमने कुछ तैयार-उपयोग कॉन्फ़िगरेशन तैयार किए हैं। कॉन्फ़िगरेशन फ़ील्ड्स का पूरा अवलोकन [यहाँ](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config) उपलब्ध है। अगले हम कई उन्नत कॉन्फ़िगरेशन स्थितियों पर ध्यान देंगे।

## स्थिति #1: SDS011 को सीरियल पोर्ट से कनेक्ट करें

अपने सेंसर को नेटवर्क से जोड़ने का सबसे आसान और सीधा तरीका सीरियल पोर्ट का उपयोग करना है। 

<List type="numbers">

<li>

अपने बोर्ड को एक USB पोर्ट से जोड़ें, और उसका पथ खोजें। इस उदाहरण में यह `ttyUSB0` है।


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

नया कॉन्फ़िगरेशन फ़ाइल बनाएं या मौजूदा फ़ाइल को निम्नलिखित के साथ संपादित करें। `db_path` में अपना डेटाबेस पथ, `port` फ़ील्ड में बोर्ड पथ और सेंसर के अक्षांश / देशांतर को `geo` फ़ील्ड में डालना न भूलें।

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation":{
      "enable":true,
      "port":"/dev/<YOUR/PATH/TO/BOARD>",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": false,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>सेंसर्स कनेक्टिविटी मॉड्यूल शुरू करें।</li>

</List>


## स्थि���ि #2: MQTT के माध्यम से SDS011 कनेक्ट करें

<RoboAcademyNote type="okay" title="INFO">Robonomics सेंसर फर्मवेयर MQTT के साथ काम नहीं करता। ये अतिरिक्त सेंसर के लिए सेटिंग्स हैं, जो MQTT के माध्यम से काम करते हैं।
</RoboAcademyNote>

<List type="numbers">

<li>

MQTT ब्रोकर (जैसे [Mosquitto](https://mosquitto.org/) या समान) को इंस्टॉल और कॉन्फ़िगर करें।

</li>

<li>

निम्नलिखित के साथ एक नया कॉन्फ़िगरेशन फ़ाइल बनाएं या मौजूदा फ़ाइल में संपादन करें। डालें:

- `db_path` फ़ील्ड में अपना डेटाबेस पथ

- `comstation` खंड में `port` फ़ील्ड में बोर्ड पथ

- `geo` फ़ील्ड में सेंसर का अक्षांश / देशांतर

- `mqttstation` खंड में `host` फ़ील्ड में MQTT ब्रोकर होस्ट

- `mqttstation` खंड में `port` फ़ील्ड में MQTT ब्रोकर पोर्ट

- `topic` फ़ील्ड में जहां आपके सेंसर डेटा भेजते हैं

- अगर आवश्यक है तो ब्रोकर से कनेक्ट करने के लिए `username` और `password`।


<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation":{
      "enable":false,
      "port":"/dev/<YOUR/PATH/TO/BOARD>",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": false,
      "port": 8001
   },
   "mqttstation": {
      "enable": true,
      "host": "[YOUR_MQTT_BROKER_HOST]",
      "port": "[YOUR_MQTT_BROKER_PORT]",
      "topic": "[MQTT_TOPIC_OF_SENSORS]",
      "username": "YOUR_MQTT_USERNAME",
      "password": "YOUR_MQTT_PASSWORD"
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>सेंसर कनेक्टिविटी मॉड्यूल प्रारंभ करें।</li>

</List>

## स्थिति #3: रोबोनोमिक्स डेटालॉग के साथ सेंसर्स डेटा प्रकाशित करें

इस स्थिति में दिखाया गया है कि आप कैसे अपने सेंसर के डेटा को रोबोनोमिक्स पैराचेन के साथ डेटालॉग कार्य करके अपलोड कर सकते हैं। डेटालॉग वेब3 प्रौद्योगिकियों में टेलीमेट्री का अनुकरण है। यह कार्य एक समय अवधि में प्रत्येक सेंसर के डेटा की एक स्नैपशॉट बनाने के लिए है, जो डेटा की विश्वसनीयता बढ़ाता है। यह मायने नहीं रखता कि डेटा कैसे इकट्ठा किया जा रहा है: HTTP, MQTT या COM के माध्यम से।

<RoboAcademyNote type="warning" title="चेतावनी">आपके खाते में XRT टोकन होना चाहिए
</RoboAcademyNote>

<List type="numbers">

<li>

एक नई कॉन्फ़िगरेशन फ़ाइल बनाएं या मौजूदा को निम्नलिखित के साथ संपादित करें। डालना:

- `db_path` फ़ील्ड के लिए आपका डेटाबेस पथ

- `comstation` अनुभाग में `port` फ़ील्ड के लिए एक बोर्ड पथ

- `geo` फ़ील्ड के लिए सेंसर का अक्षांश/देशांतर

- `suri` स्क्रैप में रोबोनोमिक्स पैराचेन से एक निजी कुंजी

- `dump_interval` फ़ील्ड में सेकंड में लॉग इकट्ठा करने के लिए समय अवधि

- (वैकल्पिक) [Temporal.Cloud](http://Temporal.Cloud) में फ़ाइल अपलोड करने के लिए `temporal_username`, `temporal_password` फ़ील्ड में क्रेडेंशियल

- (वैकल्पिक) Pinata में फ़ाइल अपलोड करने के लिए `pinata_api`, `pinata_secret` फ़ील्ड

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "[YOUR/PATH/TO/DATABASE]"
   },
   "comstation":{
      "enable":false,
      "port":"/dev/[YOUR/PATH/TO/BOARD]",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": true,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": true,
      "suri": "[YOUR_PRIVATE_KEY]",
      "dump_interval": TIME_PERIOD,
      "temporal_username": "YOUR_TEMPORAL_USERNAME",
      "temporal_password": "YOUR_TEMPORAL_PASSWORD",
      "pinata_api": "YOUR_PINATA_API_KEY",
      "pinata_secret": "YOUR_PINATA_SECRET"
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": true,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>सेंसर कनेक्टिविटी मॉड्यूल प्रारंभ करें।</li>

</List>