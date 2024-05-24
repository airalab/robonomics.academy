---
title: "सबक #4, सेंसर्स कनेक्टिविटी मॉड्यूल"
description: 'सेंसर्स कनेक्टिविटी मॉड्यूल'
lessonNumber: 4
metaOptions: [सीखना, सेंसर्स कनेक्टिविटी और डीसेंट्रलाइज्ड सेंसर्स नेटवर्क]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

निम्नलिखित लेखों में, आप सेंसर कनेक्टिविटी मॉड्यूल के बारे में और अधिक सीखेंगे। इसके बाद, आप हमारे डीसेंट्रलाइज़्ड सेंसर्स नेटवर्क को होस्ट कर सकते हैं या अपना सेंसर मैप बना सकते हैं।

## सेंसर्स कनेक्टिविटी के बारे में

डीसेंट्रलाइज़्ड सेंसर्स नेटवर्क `sensors-connectivity` Python मॉड्यूल का उपयोग करता है ([स्रोत कोड](https://github.com/airalab/sensors-connectivity))। यह मॉड्यूल किसी भी उपयोगकर्ता को अपनी सर्वर शुरू करने की अनुमति देता है ताकि वह सेंसर से डेटा प्राप्त कर सके और इसे आगे प्रसंस्करण कर सके। वर्तमान में, डेवलपर्स ने कई ऐसे सर्वर शुरू किए हैं और कोई भी सेंसर उन्हें डेटा भेज सकता है। कई सर्वर चलाने से किसी भी एक में समस्या होने पर डेटा हानि से बचा जा सकता है, क्योंकि सेंसर्स गैर-काम करने वाले सर्वर से काम करने वाले सर्वर पर स्विच कर देंगे। मूल रूप से, आप सेंसर्स कनेक्टिविटी मॉड्यूल को एक काले बॉक्स के रूप में सोच सकते हैं जिसमें एक इनपुट (सेंसर डेटा) और कई आउटपुट होते हैं।

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

सेंसर्स कनेक्टिविटी मॉड्यूल विभिन्न डेटा प्राप्त करने वाले स्टेशनों (स्टेशन_1, स्टेशन_2 ... स्टेशन_n) का समूह है, जिसमें HTTP प्रोटोकॉल के माध्यम से सेंसर से डेटा भी शामिल है। यह कंप्यूटर से USB के माध्यम से जुड़े सेंसर भी हो सकते हैं या किसी अन्य डेटा स्रोत से। स्टेशनों से प्राप्त डेटा को मॉड्यूल द्वारा प्रसंस्कृत किया जाता है और फीडर्स (फीडर_1, फीडर_2 ... फीडर_n) को पहुंचाया जाता है। फीडर्स प्रसंस्कृत किए गए डेटा को उपयोगकर्ता को भेजते हैं; हमारे मामले में डेटा डीसेंट्रलाइज़्ड IPFS चैनल पर भेजा जाता है। 

[डीसेंट्रलाइज़्ड सेंसर्स नेटवर्क](https://sensors.robonomics.network/#/) का एक मानचित्र एक डीसेंट्रलाइज़्ड एप्लिकेशन (डैप) है जो कंप्यूटर पर चलता है। यह IPFS चैनल से डेटा पढ़ता है और उसे मानचि्र पर प्रदर्शित करता है। सेंसर से डेटा जमा करने वाले सर्वर और उपयोगकर्ता द्वारा देखा जाने वाला मानचित्र के बीच कोई सीधा संबंध नहीं है; डेटा उनके बीच IPFS पबसब के माध्यम से होता है, जिससे सर्वरों पर भार कम होता है। 

इसके अतिरिक्त, समय-समय पर, एक फ़ाइल जिसमें पिछले समय के डेटा होता है, IPFS में संग्रहित किया जाता है, और इस डेटा का हैश फिर ब्लॉकचेन पर दर्ज किया जाता है। क्योंकि IPFS एक सामग्री-पता नेटवर्क है, इसमें डेटा को संग्रहित करने से सुनिश्चित किया जाता है कि कोई भी डेटा परिवर्तन अनदेखा नहीं रहता, क्योंकि आवश्यक फ़ाइल का पता उसकी सामग्री का हैश शामिल करता है, जो किसी भी डेटा परिवर्तन के साथ बदल जाएगा। ब्लॉकचेन का उपयोग हैश को उपयोगकर्ता को पास करने के लिए, जो इसे IPFS से आवश्यक डेटा प्राप्त करने के लिए उपयोग कर सकता है (जब आप मानचित्र का इतिहास अनुरोध करते हैं)।

## लिनक्स के लिए मॉड्यूल सेटअप

**पूर्व-आवश्यकताएं और स्थापना**

<List type="numbers">

<li>

`सेंस-कनेक्टिविटी` मॉड्यूल बनाने के लिए IPFS डेमन को स्थापित करना होगा जिसका संस्करण `0.8.x` से अधिक नहीं होना चाहिए। मान लें, आप लिनक्स पर काम कर रहे हैं, तो निम्नलिखित को क्रियान्वित करें (संस्करण `0.8.0`):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

विकास उपकरण `python3-dev` और पाइथन के लिए पैकेज स्थापक के साथ पैकेज स्थापित करें `pip`:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

मॉड्यूल को एक PyPI पैकेज के रूप में स्थापित करें:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

यदि आप निम्नलिखित चेतावनी देखते हैं: 

<LessonCodeWrapper codeClass="big-code" language="bash">चेतावनी: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

अगली कमांड चलाएं:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## विन्यास

<List type="numbers">

<li>

जहां आप चाहें वहां विन्यास फ़ाइल और डेटाबेस फ़ाइल के लिए निर्देशिका बनाएं। यह डेटाबेस सेंसर डेटा, समय चिह्न और सेवा स्थिति के IPFS हैश सहेजेगा:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
डेटाबेस फ़ाइल का नाम कोई भी हो सकता है, लेकिन एक्सटेंशन <code>.db</code> होना चाहिए
</RoboAcademyNote>

</li>


<li>

उसी निर्देशिका में विन्यास फ़ाइल बनाएं:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

फ़ाइल में निम्नलिखित को कॉपी-पेस्ट करें और db_path क्षेत्र में डेटाबेस फ़ाइल का पूरा पथ डालें। यह विन्यास सेंसर्स डेटा को HTTP के माध्यम से प्राप्त करने और रोबोनॉमिक्स मैप पर भेजने के लिए पर्याप्त होगा:

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation": {
      "enable": false,
      "port": "/dev/<YOUR/PATH/TO/BOARD>",
      "work_period": 300,
      "geo": "00.000000,00.000000",
      "public_key": ""
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

</List>

## लॉन्


<List type="numbers">

<li>

IPFS डेमन लॉन्च करें:

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

कॉन्फ़िग सेट होने के बाद, कॉन्फ़िग फ़ाइल के पथ के साथ सेवा को दूसरे टर्मिनल में चलाएं:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

आप टर्मिनल में लॉग देखेंगे (इसके अलावा, वे `~/.logs` में जोड़े जाएंगे)। उदाहरण:

<LessonCodeWrapper codeClass="big-code" language="bash">$ sensors_connectivity test.json
2022-09-02 14:08:48,408 - INFO - Getting data from the stations...
2022-09-02 14:08:48,409 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:08:48,409 - INFO - Sending result to the feeders...
2022-09-02 14:08:48,411 - INFO - Checking data base...
2022-09-02 14:09:18,410 - INFO - Sending result to the feeders...
2022-09-02 14:09:18,410 - INFO - Getting data from the stations...
2022-09-02 14:09:18,411 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:09:48,411 - INFO - Sending result to the feeders...
2022-09-02 14:09:48,412 - INFO - Getting data from the stations...
2022-09-02 14:09:48,413 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:10:18,413 - INFO - Sending result to the feeders...
2022-09-02 14:10:18,413 - INFO - Getting data from the stations...</LessonCodeWrapper>

</li>

</List>

## पोस्ट-इंस्टॉलेशन

अपने `सेंसर्स-कनेक्टिविटी` मॉड्यूल को हमारे डीसेंट्रलाइज़्ड सेंसर्स नेटवर्क से कनेक्ट करने और मानचित्र पर अपने डेटा को देखने के लिए, आपको अपना IPFS आईडी [vm@multi-agent.io](mailto:vm@multi-agent.io) या [ping@airalab.org](mailto:ping@airalab.org) पर भेजना होगा। हम आपके आईडी को एक पहुंच नियंत्रण सूची में जोड़ देंगे।

IPFS डेमन चलाने के बाद निम्नलिखित कमांड के साथ अपना IPFS `आईडी` प्राप्त करें:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>