---
title: "सबक #3, सेंसर सेटअप और कनेक्ट करना"
description: 'सेटअप और सेंसर कनेक्ट करना'
lessonNumber: 3
metaOptions: [सीखना, सेंसर्स कनेक्टिविटी और डीसेंट्रलाइज्ड सेंसर्स नेटवर्क]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

हमारे सेंसर Robonomics फर्मवेयर का उपयोग करते हैं, जो सेंसर.कम्युनिटी फर्मवेयर का विस्तारित संस्करण है, कुछ सेंसर जोड़े गए हैं और डेटा भेजने की योजना बदल दी गई है। स्रोत कोड [लिंक पर मिल सकता है।](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

अगर आपके पास तैयार Robonomics बोर्ड है, तो आप "कनेक्ट" खंड में जा सकते हैं।

## आवश्यकताएं

**लिनक्स के लिए:**

<List type="numbers">

<li>

`dialout` समूह में एक उपयोगकर्ता जोड़ें (उबंटू के लिए) ताकि आपको USB पोर्ट तक पहुंच मिले:

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>कंप्यूटर को रिबूट करें।</li>

<li>

[रिलीज़](https://github.com/airalab/sensors-connectivity/releases) से Robonomics `airrohr-flasher` कार्यक्ष डाउनलोड करें।

</li>

<li>

फ़ाइल की अनुमतियाँ बदलें और इसे चलाएं:

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**विंडज के लिए:**

<List type="numbers">

<li>

USB2serial के ड्राइवर इंस्टॉल करें (Windows 10 में यह स्वचालित रूप से शुरू होना चाहिए) — NodeMCU v3 (CH340) के ड्राइवर: [लिंक](http://www.wch.cn/downloads/file/5.html), [वैकल्पिक लिंक](https://d.inf.re/luftdaten/CH341SER.ZIP). 

</li>

<li>

Robonomics `airrohr-flasher` एक्जीक्यूटेबल को [रिलीज़](https://github.com/airalab/sensors-connectivity/releases) से डाउनलोड करें और इसे चलाएं।

</li>

</List>

**मैकओएस के लिए:**

<List type="numbers">

<li>

USB2serial के ड्राइवर इंस्टॉल करें — NodeMCU v3 (CH340) के ड्राइवर: [लिंक](http://www.wch.cn/downloads/file/178.html), [वैकल्पिक लिंक](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

Robonomics `airrohr-flasher` एक्जीक्यूटेबल को [रिलीज़](https://github.com/airalab/sensors-connectivity/releases) से डाउनलोड करें और इसे चलाएं।

</li>

</List>


## सेटअप

<List type="numbers">

<li>

सेंसर को पीसी से कनेक्ट करें और `airrohr-flasher` प्रोग्राम चलाएं। प्रोग्राम खोलने के बाद आपको निम्नलिखित दिखाई देगा (आपके ओएस पर निर्भर करता है):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

`बोर्ड` फ़ील्ड ्वचालित रूप से भर जाना चाहिए; अगर नहीं भरता है, तो ड्रॉप-डाउन सूची से आवश्यक पोर्ट चुनें।

<RoboAcademyNote type="okay" title="INFO">
यदि <code>airrohr-flasher</code> आपके बोर्ड को नहीं ढूंढ पा रहा है, तो सुनिश्चित करें कि आपने <b>आवश्यकताएँ</b> भाग को सही ढंग से पूरा किया है।
</RoboAcademyNote>

</li>

<li>

पसंदीदा भाषा के साथ फर्मवेयर का चयन करें, और `अपलोड` पर क्लिक करें। फर्मवेयर को अपलोड करने में कुछ समय लगेगा। यदि आप बाद में भाषा बदलने या स्पष्ट स्थापना करने का निर्णय लेते हैं, तो `फ्लैश मेमोरी मिटाएं` पृष्ठ पर जाएं और सेंसर की फ्लैश मेमोरी को मिटाने के लिए बटन दबाएं।

</li>

<li>

फर्मवेयर को डाउनलोड करने के बाद, ESP को रिबूट करें (बस USB को डिस्कनेक्ट और रीकनेक्ट करें)।

</li>

<li>

चेकबॉक्स मेनू से सेंसर चुनें। SDS011 और किसी अतिरिक्त सेंसर का चयन करें। `कॉन्फ़िगरेशन सहेजें` पर क्लिक करें।

</li>

<li>

कॉन्फ़िगरेशन को डाउनलोड करने के बाद, ESP को रिबूट करें (बस USB को डिस्कनेक्ट और रीकनेक्ट करें)।

</li>

</List>

## कनेक्ट करें

<List type="numbers">

<li>

पुनरारंभ करने के बाद, बोर्ड एक वाई-फाई नेटवर्क बनाएगा जिसका नाम `RobonomicsSensor-xxxxxxxxx` होगा। अपने फोन या कंप्यूटर से इसे कनेक्ट करें: आपको प्रमाणीकरण विंडो दिखाई देगी (अगर नहीं, ब्राउज़र खोलें और `192.168.4.1` पर जाएं)।

</li>

<li>

सूची से अपने वाई-फाई नेटवर्क का चयन करें (या अगर सूची में नहीं है तो खुद लिखें) और पासवर्ड फ़ील्ड भरें।

</li>

<li>

जगह के संयोजन को लिखें, जहां सेंसर इंस्टॉल किया जाएगा।

<RoboAcademyNote type="warning" title="चेतावनी">
फिर सेंसर कोऑर्डिनेट्स को एक सार्वजनिक उपलब्ध मानचत्र पर प्रदर्शित किया जाएगा। यदि आप अपनी निजी जानकारी दिखाना नहीं चाहते हैं, तो क्लोज़, लेकिन सटीक कोऑर्डिनेट्स लिखें।
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

`कॉन्फ़िगरेशन सहेजें और पुनरारंभ करें` पर क्लिक करें। बोर्ड पुनरारंभ होगा और निर्दिष्ट वाई-फाई नेटवर्क से कनेक्ट होगा। 

</li>

<li>

[Robonomics सेंसर मानचित्र](https://sensors.robonomics.network/#/) खोलें और उस जगह को खोजें जहां आपने सेंसर इंस्टॉल किया है। कुछ मिनटों में आप अपने सेंसर को मानचित्र पर डेटा के साथ देख सकेंगे।


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

यह सभी डिफ़ॉल्ट इंस्टॉलेशन के साथ है। एक और उन्नत सेटअप के लिए (अपने सर्वर पर डेटा भेजना), अगले खंड को पढ़ें।

## अतिरिक् कॉन्फ़िगरेशन

कॉन्फ़िगरेशन से पहले, आपको अपने वाई-फाई नेटवर्क में सेंसर का पता लगाना होगा। इसके लिए, आप `airrohr-flasher` का उपयोग कर सकते हैं (आपका कंप्यूटर सेंसर के समान नेटवर्क पर होना चाहिए)। इसे शुरू करें और `डिस्कवरी` टैब पर जाएं, फिर `रिफ़्रेश` दबाएं, एक क्षण प्रतीक्षा करें और आपका सेंसर पता दिखाई देगा।

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

इस पते पर डबल-क्लिक करें (या इसे अपने ब्राउज़र में लिखें), आप सेंसर मेनू पर पहुंचेंगे:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

अब आप अपनी कॉन्फ़िगरेशन को कस्टमाइज़ करना शुरू कर सकते हैं।


## कस्टम एपीआई

आप अपने खुद के सर्वर पर डेटा भेजने की सेटअप भी कर सकते हैं। इसक लिए, टैब `एपीआई` में जाएं और `अपने एपीआई पर भेजें` पर क्लिक करें और सर्वर पता और पोर्ट (`65` सेंसर कनेक्टिविटी के लिए) निर्दिष्ट करें:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

सेटिंग्स को सहेजने के लिए `सेव और पुनरारंभ` पर क्लिक करें।