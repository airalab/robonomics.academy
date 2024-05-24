---
title: "सबक #3, MQTT ब्रोकर सेटअप और Hass इनिट"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: होम असिस्टेंट कोर्स
lessonNumber: 3
metaOptions: [रोबोनॉमिक्स और होम असिस्टेंट के साथ साम्राजिक स्मार्ट होम सीखें]
defaultName: साम्ाजिक स्मार्ट होम विथ रोबोनोमिक्स और होम असिस्टेंट
---

## परिचय

रैस्पबेरी पाई के कॉन्फ़िगरेशन को समाप्त करने के बाद, अगला कदम है रैस्पबेरी पाई पर MQTT ब्रोकर को इंस्टॉल करना। जैसा कि ऊपर उल्लिखित है, ब्रोकर विभिन्न MQTT क्लाइंट्स के बीच संदेश मार्गदर्शन के लिए जिम्मेदार है। आप इक्लिप्स मॉस्किटो, एक ओपन सोर्स MQTT ब्रोकर को इंस्टॉल और कॉन्फ़िगर करेंगे।

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

इसके अतिरिक्त, आप होम असिस्टेंट सेटअप पूरा करेंगे और इसे MQTT एकीकरण में जोड़ेंगे।

## निर्देश

<List type="numbers">

<li>


मॉस्किटो ब्रोकर इंस्टॉलेशन

<List>
<li>

अपने रैस्पबेरी पाई पर [मॉस्किटो ब्रोकर](https://mosquitto.org/) इंस्टॉल करें:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

अपना उपयोगकर्ता नाम दर्ज करें (आप जो भी चाहें उसका उपयोग करें) और पासवर्ड (आपको कमांड के बाद पासवर्ड दर्ज करने के लिए कहा जाएगा):

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

कॉन्फ़िगरेशन फ़ाइल संपादित करें:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

फ़ाइल में निम्नलिखित जोड़ें:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

फ़ाइल को सहेजें और सेवा को पुनरारंभ करें:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

अंत में, ब्रोकर स्थिति की जांच करें:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

आपको इस तरह कुछ देखना चाहिए:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

होम अिस्टेंट और MQTT सेटअप करें

<List>

<li>

वेब ब्राउज़र खोलें और <code>http://%RASPBERRY_IP_ADDRESS%:8123</code> पर जाएं। (पिछले सबक में जो IP पता चला था, उसी IP पते के साथ)। ध्यान दें, कि रास्पबेरी पाई पता समय के साथ रूटर सेटिंग्स के कारण बदल सकता है। 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

पहले पृष्ठ पर, कोई भी नाम, उपयोगकर्ता नाम, पासवर्ड दर्ज करें और "<code>CREATE ACCOUNT</code>" पर क्लिक करें
</li>

<li>

अगले, अपने घर के लिए एक नाम दर्ज करें और अपनी स्थान और इकाई प्रणाली सेट करें। अपने स्थान को खोजने के लिए "<code>DETECT</code>" पर क्लिक करें और उस स्थान के आधार पर अपना समय क्षेत्र और इकाई प्रणाली सेट करें। यदि आप अपना स्थान नहीं भेजना चाहते हैं, तो आप इन मान्यताओं को मैन्युअल रूप से सेट कर सकते हैं।

</li>

<li>

अगले स्क्रीन पर, होम असिस्टेंट आपको अपने नेटवर्क पर पाए गए किसी भी उपकरणों को दिखाएगा। अगर आपको नीचे दिखाए गए से कम आइटम दिखाई देते हैं, तो चिंता न करें; आप हमेशा बाद में उपकरणों को मैन्युअल रूप से जोड़ सकते हैं। अब, बस <code>FINISH</code> पर क्लिक करें और आप मुख्य होम असिस्टेंट स्क्रीन पर होंगे।

</li>

<li>

अब हमें MQTT एकीकरण स्थापित करने की आवश्यकता है। <<code>Settings</code> -> <code>Devices & Services</code> पर जाएं।

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

बाएं निचले कोने पर <code>ADD INTEGRATION</code> बटन दबाएं। खुली विंडो में <code>MQTT</code> खोजें

</li>

<li>

MQTT का चयन करें और अपने ब्रोकर पता सेट करें — <code>localhost</code> पोर्ट — <code>1883</code> और अपना उपयोगकर्ता नाम और पासवर्ड (जो आपने पहले मॉस्किटो ब्रोकर के लिए बनाया था) फिर <code>SUBMIT</code> दबाएं।
</li>

</List>
</li>
</List>