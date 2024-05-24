---
title: "सबक #7, रोबोनॉमिक्स सेंसर मापन विश्लेषण और आर्काइव नोड"
description: 'रोबोनॉमिक्स सेंसर मापन विश्लेषण और आर्काइव नोड'
lessonNumber: 7
metaOptions: [सीखना, सेंसर्स कनेक्टिविटी और डीसेंट्रलाइज्ड सेंसर्स नेटवर्क]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

रोबोनॉमिक्स सेंसर मापन और आर्काइव नोड या रोसेमैन एक सेवा है जो मापन इतिहास दिखाने के लिए सेंसर्स डेटा को एकत्र करती है। इस लेख में आप सेवा को सेटअप करेंगे।

## आवश्यकताएं

रोसेमैन को [MongoDB](https://www.mongodb.com/docs/manual/introduction/) डेटाबेस सर्वर की आवश्यकता है, यह माना जाता है कि आपके पास पहले से ही है। साथ ही, आपको सेंसर्स कनेक्टिविटी मॉड्यूल के लिए डेटालॉग विकल्प को ऑन करना होगा, जैसा कि स्थिति #3 में दिखाया गया है। आपके रोबोनॉमिक्स खाते पर मुफत एक्सआरटी टोकन होने चाहिए, जो सेंसर्स कनेक्टिविटी मॉड्यूल से जुड़ा हो। 


## सेटअप

<List type="numbers">

<li>

पूर्वाग्रह डाउनलोड करें:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

कॉन्फ़िगरेशन फ़ाइलें बनाएं:

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

`config.json` फ़ाइल खोलें और डेटाबेस पथ संपादित करें:

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

अपने ाते के सार्वजनिक पते को `agents.json` फ़ाइल में जोड़ें। आप फ़ाइल में कई पते जोड़ सकते हैं, अगर आप विभिन्न सेंसर्स कनेक्टिविटी मॉड्यूल से डेटा एकत्र करना चाहते हैं।

</li>


<li>

डिपेंडेंसीज़ इंस्टॉल करें और सर्वर बनाएं:

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

RoSeMAN सर्वर शुरू करें:

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

वेब सर्वर को `http://127.0.0.1:3000` पर लॉन्च करना चाहिए।

</li>

</List>

## पोस्ट-इंस्टॉलेशन

RoSeMAN को सर्वर पर डिप्लॉय करने के बाद आपको सार्वजनिक आईपी पता या सर्वर के लिए यूआरएल प्राप्त करना होगा। वैकल्पिक रूप से, यदि आप RoSeMAN और सेंसर्स मैप को एक ही सर्वर पर चला रहे हैं, तो आप स्थानीय आईपी पति का उपयोग कर सकते हैं।

अगले, आपको सेंसर्स मैप कॉन्फ़िगरेशन फ़ाइल खोलनी होगी और अपना यूआरएल `config.json` फ़ाइल में `REMOTE_PROVIDER` फ़ील्ड में डालना होगा:


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

`yarn build` के साथ मैप को पुनः निर्माण करें और फिर से शुरू करें; आप मापन इतिहास देख सकेंगे।