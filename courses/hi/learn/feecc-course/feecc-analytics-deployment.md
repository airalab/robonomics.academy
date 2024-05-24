---
title: "एनालिटिक्स की तैनाती"
description: यह कोर्स फीस सिस्टम और उसके सभी घटकों को जानने के बारे में है।
metaOptions: [सीखें, फीस का उपयोग करना]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
इस सबक में, आप सीक्षा करेंगे कि कैसे फीस एनालिटिक्स के घटकों को डिप्लॉय करें।
</RoboAcademyText>

## एनालिटिक्स बैकएंड का लॉन्च

1. रिपॉजिटरी क्लोन करें:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. `.env` फ़ाइल का उपयोग करके अपनी आवश्यकताओं के लिए बैकएंड सेवा कॉन्फ़िगर करें:
    - `MONGO_CONNECTION_URL` — MongoDB से आपका कनेक्शन URI;
    - `MONGO_DATABASE_NAME` — MongoDB का एक डेटाबेस नाम;
    - `SECRET_KEY` — हैशिंग और डीहैशिंग के लिए गुप्त कुंजी;
    - `IPFS_GATEWAY_HOST` — आईपीएफएस गेटवे का यूआरएल;
    - `USE_DATALOG` — को एनालिटिक्स डेटा भेज रहा हूं Robonomics (`true` या `false`);
    - `ROBONOMICS_SEED` — Robonomics खाते के लिए बीज-वाक्यांश।

3. बैकएंड कंटेनर को लॉन्च करें:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. इसके कार्यक्षमता की जांच करें। ब्राउज़र में जाएं और `http://localhost:5002/docs` पेज खोलें। यदि सही ढंग से किया गया है, तो आप एक पृष्ठ देखेंगे (स्वैगर द्वारा उत्पन्न) जिसमें सभी फीस ए��ालिटिक्स REST API एंडपॉइंट्स होंगे। अब आप फ्रंटएंड को लॉन्च करने के लिए तैयार हैं।

## एनालिटिक्स फ्रंटएंड का लॉन्च

1. रिपॉजिटरी क्लोन करें:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. `src` पर जाएं और `config.json` फ़ाइल का उपयोग करके अपनी आवश्यकताओं के लिए फ्रंटएंड सेवा को कॉन्फ़िगर करें। `base_url` पैरामीटर में Feecc Analytics Backend का URL दर्ज करें (फॉर्म में `xx.xx.xx.xx:port`).

3. फ्रंटएंड कंटेनर को लॉन्च करें:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. इसके कार्यक्षमता की जांच करें। ब्राउज़र में जाएं और `http://localhost:8081/docs` पेज खोलें।

<RoboAcademyText fWeight="500">
इस पर, Feecc सिस्टम के साथ परिचय पूरा माना जा सकता है। यदि आपके पास कोई अतिरिक्त प्रश्न हैं, तो आप Multi-Agent Systems (multi-agent.io) पर डेवलपर्स से संपर्क कर सकते हैं या उनके GitHub पर एक मुद्दा छोड़ सकते हैं (github.com/Multi-Agent-io).
</RoboAcademyText>