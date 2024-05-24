---
title: "अभियंता कार्यक्षेत्र की तैनाती"
description: यह कोर्स फीस सिस्टम और उसके सभी घटकों को जानने के बारे में है।
metaOptions: [सीखें, फीस का उपयोग करना]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
इस सबक में, आप स्वयं Feecc इंजीनियर वर्कबेंच के आवश्यक घटकों को कैसे डिप्लॉय करेंगे इसका ज्ञान प्राप्त करेंगे।
</RoboAcademyText>

घटकों में से:

- Workbench Daemon
- Workbench Frontend
- IPFS Gateway
- HID Reader Daemon

सभी घटक [Docker](https://docs.docker.com/engine/install/ubuntu/) और [Docker compose](https://docs.docker.com/compose/) का उपयोग करके लॉन्च किए जाते हैं, सुनिश्चित करें कि आपके पास इन्हें इंस्टॉल किया हुआ है।

## सॉफ़्टवेयर तैयारी

1. Feecc components use the [MongoDB](https://www.mongodb.com/) database to store and access data. Before using Feecc, you need to deploy MongoDB in whatever way is convenient for you. Here are some deployment options: [using your own server](https://www.mongodb.com/try/download/community), [cloud database in Atlas](https://www.mongodb.com/atlas) (free), [cloud database in DigitalOcean](https://www.digitalocean.com/products/managed-databases-mongodb) (paid). 
    
    किसी भी स्थिति में, आपको MongoDB के लिए अपना कनेक्शन URI प्राप्त करना होगा, जिसे आपको सिस्टम के सभी घटकों के `MONGODB_URI` चर मान के रूप में दर्ज करने की आवश्यकता होगी।
    
2. यदि आप अपने उत्पादन सिस्टम से डेटा को सुरक्षित और पारदर्शी ढंग से स्टोर करने का लाभ उठाना चाहते हैं, तो आपको Robonomics पर एक खाता बनाने की आवश्यकता है। इसके लिए, निम्नलिखित लिंक पर उपलब्ध निर्देशों का उपयोग करें: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    आपको खाते की सीड फ्रेज को सहेजने की आवश्यकता है क्योंकि यह बाद में `ROBONOMICS_ACCOUNT_SEED` चर में उपयोग किया जाएगा।

## वर्कबेंच तैयारी

शुरू करने से पहले, कंप्यूटर या सर्वर से सभी आवश्यक उपकरणों को कनेक्ट करें:

- USB का उपयोग करके लेबल प्रिंटर
- USB का उपयोग करके RFID / बारकोड रीडर
- PoE राउटर/नेटवर्क स्विच के माध्यम से IP कैमरा
- USB और HDMI/VGA (वैकल्पिक) का उपयोग करके मॉनि��र के साथ कीबोर्ड और माउस या टचस्क्रीन

## HID रीडर डेमन लॉन्च करना

1. रिपॉजिटरी क्लोन करें:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. डेमन को लॉन्च करें:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## वर्कबेंच डेमन लॉन्च करना

1. रिपॉजिटरी क्लोन करें:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. फ़ाइल `docker-compose.yml` का उपयोग करके डेमन को अपनी आवश्यकताओं के लिए कॉन्फ़िगर करें। फ़ाइल में विभिन्न पर्यावरण चर शामिल हैं:

    - MongoDB configuration;
    - Robonomics configuration;
    - IPFS configuration;
    - printer params;
    - camera params;
    - RFID / barcode readers params.
    
    सभी चरों की पूरी सूची डेमन [रिपॉजिटरी](https://github.com/Multi-Agent-io/feecc-workbench-daemon) में उपलब्ध है। निम्नलिखित पैरामीटर अनिवार्य हैं:
    
    - `MONGODB_URI`: आपका MongoDB कनेक्शन URI;
    - `MONGODB_DB_NAME`: MongoDB का डेटाबेस नाम;
    - `WORKBENCH_NUMBER`: कर्मचारी का वर्कबेंच नंबर।

3. डेमन को लॉन्च करें:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. इसकी कार्यक्षमता की जांच करें। ब्राउज़र में जाएं और `http://127.0.0.1:5000/docs` पृष्ठ खोलें, जिसमें प्रणाली के REST API इंटरफेस प��� प्रलेखन होना चाहिए। यदि पृष्ठ उपलब्ध नहीं है, तो सर्वर सही ढंग से शुरू नहीं हुआ है। त्रुटियों के लिए कंटेनर के अंदर की लॉग जांचें, उन्हें ठीक करें और निर्माण और चलाने के चरणों को दोहराएं।

## आईपीएफएस गेटवे लॉन्च करना

1. रिपॉजिटरी को क्लोन करें:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. फाइल `docker-compose.yml` का उपयोग करके अपनी आवश्यकताओं के लिए माइक्रोसर्विस को कॉन्फ़िगर करें। फ़ाइल में मॉन्गोडीबी, रोबोनॉमिक्स और पिनाटा के संबंध के लिए पर्यावरण चरण शामिल हैं। चरण की पूरी सूची गेटवे [भंडार](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) में उपलब्ध है।

3. माइक्रोसर्विस को लॉन्च करें:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## वर्कबेंच फ्रंटएंड लॉन्च करना

1. रिपॉजिटरी को क्लोन करें:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. `configs` निर्देशिका पर जाएं और फ़ाइल `config.json` का उपयोग करके अपनी आवश्यकताओं के लिए फ्रंटएंड सेवा को कॉन्फ़िगर करें। निम्नलिखित पैरामीटर विशेष रूप से महत्वपूर्ण हैं:
    - `socket` — यहाँ वर्कबेंच डेमन पता डालें;
    - `interface_language` — इंटरफ़ेस भाषा, उपलब्ध `en` और `ru` विकल्प;
    - `dev_show_reducers` — डेवलपर मोड को सक्षम/अक्षम करना;
    - `pulling_period` — बैकएंड से डेटा प्राप्त करने की अवधि मिलीसेकंड में;

3. फ्रंटएंड कंटेनर को लॉन्च करें:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. इसकी कार्यक्षमता की जांच करें। ब्राउज़र में जाएं और `http://localhost:3000` पृष्ठ खोलें, आपको एक प्रमाणीकरण पृष्ठ दिखना चाहिए।

<RoboAcademyText fWeight="500">
अगले सबक में, हम फीक एनालिटिक्स सेवा के माध्यम से जाएंगे।
</RoboAcademyText>