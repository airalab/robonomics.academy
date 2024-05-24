---
title: "सबक #4a, गेटवे सेटअप: Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: होम असिस्टेंट कोर्स
lessonNumber: 4
metaOptions: [रोबोनॉमिक्स और होम असिस्टेंट के साथ साम्राजिक स्मार्ट होम सीखें]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## परिचय

यह एक स्थिति सेटअप है जिसमें डिवाइस कनेक्ट करने के लिए Zigbee एडाप्टर और Zigbee2MQTT ब्रिज का उपयोग किया जाता है। यदि आपके पास [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) है (जिसमें सभी आवश्यक फर्मवेयर है), तो आप सीधे इन निर्देशों के साथ आगे बढ़ सकते हैं। हालांकि, यदि आपके पास कोई अन्य एडाप्टर है, तो पहली बात जो आपको करनी है वह है Zigbee2MQTT सॉफ़्टवेयर को फ्लैश करना। आप अपने डिवाइस के लिए निर्देश [यहाँ](https://www.zigbee2mqtt.io/guide/adapters/) पा सकते हैं।

आपको अपने डोमेन को टेस्ट करने के लिए एक स्मार्ट डिवाइस भी चाहिए होगा।


## निर्देश

<List type="numbers">

<li>

सॉफ़्टवेयर इंस्टॉल

<List>

  <li>
    नोड.जेएस रटाइम वातावरण रिपॉजिटरी सेटअप करें और आवश्यक डिपेंडेंसी के साथ इंस्टॉल करें:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    सुनिश्चित करें कि सही संस्करणों का नोड.जेएस (v14.X, V16.x, V17.x या V18.X) और पैकेज मैनेजर <code class="nowb">npm</code> (6.X, 7.X या 8.X) जो नोड.जेएस के साथ स्वचालित रूप से इंस्टॉल हो गया है, वह इंस्टॉल हो गया है:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Zigbee2MQTT के लिए एक निर्देशिका बनाएं और इसे अपने उपयोगकर्ता को मालिक बनाएं:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Zigbee2MQTT रिपॉजिटरी क्लोन करें:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    डिपेंडेंसी इंस्टॉल करें। ध्यान दें कि <code>npm ci</code> कुछ चेतावनी प्रदान कर सकता है जिन्हें नजरअंदाज किया जा सकता है।
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

एडाप्र कनेक्ट करना और कॉन्फ़िगर करना

<List>

<li>

Zigbee एडाप्टर को Raspberry Pi से कनेक्ट करें। फिर आपको स्टिक की स्थान पता करना होगा। इसके लिए अगले कमांड में टाइप करें:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

आउटपुट इस तरह दिखना चाहिए:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

इस उदाहरण में स्टिक कनेक्शन डायरेक्टरी <code>ttyUSB0</code> है।
</li>

<li>

Zigbee2MQTT शुरू करने से पहले <code>configuration.yaml</code> फ़ाइल को संपादित करें:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

मूल कॉन्फ़िगरेशन में कुछ समायोजन की आवश्यकता है। निम्नलिखित कथनों को बदलें:

\- <code>homeassistant:</code> <code>true</code> पर बदलें, यह स्वचालित रूप से सेंसर्स को होम असिस्टेंट से कनेक्ट करेगा;

\- <code>mqtt</code> के तहत <code>user</code> और <code>password</code> को अनकमेंट करें और अपने उपयोगकर्ता नाम और पासवर्ड दर्ज करें (एक स्ट्रिंग के रूप में, उदाहरण के रूप में, MQTT ब्रोकर से कोट्स के साथ);

\- <code>serial</code> -> <code>port</code> में स्टिक कनेक्शन डायरेक्टरी में पोर्ट बदलें। इस उदाहरण में: <code>/dev/ttyUSB0</code>।

समायोजित कॉन्फ़िगरेशन फ़ाइल इस तरह दिखनी चाहिए:

<LessonCodeWrapper language="yaml">
# Home Assistant integration (MQTT discovery)
homeassistant: true
# allow new devices to join
permit_join: true
# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  user: 'YOUR_USERNAME'
  password: 'YOUR_PASSWORD'
# Serial settings
serial:
  # Location of CC2531 USB sniffer
  port: /dev/YOUR_PORT
</LessonCodeWrapper>


**अतिरिक्त:**

यदि आपके घर में पहले से ही एक सक्रिय Zigbee एडाप्टर या गेटवे है, और अब आप एक और स्टिक कॉन्फ़िगर कर रहे हैं, तो वे एक दूसरे के साथ टकराएंगे। इस समस्या को हल करने के लिए आपको नए उपकरण पर चैनल बदलने की आवश्यकता है। इसके लिए कॉन्फ़िगरेशन फ़ाइल के अंत में निम्नलिखित स्ट्रिंग्स जोड़ें:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Zigbee2MQTT शुरू करें:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

सफलतापूर्वक शुरू होने पर, आपको कुछ इस तरह कुछ दिखाई देगा:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

पेयरिंग डिवाइस

<List>

<li>

अब आपके स्मार्ट डिवाइस को कनेक्ट करने का समय है। एक डिवाइस को कनेक्ट मोड में स्विच करने का सबसे सामान्य तरीका उसके पावर बटन को पकड़ना है या उन्हें 5 बार ऑन/ऑफ करना है। सुनिश्चित करें कि Zigbee2MQTT चल रहा है।

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

जब डिाइस कनेक्ट होता है, तो आपको एक संदेश दिखाई देना चाहिए:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

सेंसर की आईडी को याद रखें: इस उदाहरण में — <code>0x00158d0003eeeacf</code>।

अब आपको इस सेंसर को आईडी के साथ अपने होम असिस्टेंट वेबयूआई में देखना चाहिए। <code>सेटिंग</code> -> <code>डिवाइस और सेवाएं</code> -> <code>डिवाइस</code> पर जाएं और इसे चेक करें:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

सभी सेंसर जोड़ने के बाद, आप <code>Ctrl+C</code> के साथ प्रोग्राम को रोक सकते हैं। अगर आप और कोई डिवाइस जोड़ना नहीं चाहते हैं, तो आप कॉन्फ़िगरेशन फ़ाइल को फिर से खोलकर <code>permit_join:</code> को <code>false</code> पर सेट कर सकते हैं।
</li>

</List>
</li>

<li>

ऑटोस्टार्ट के लिए सेवा बनाना

<List>

<li>

अब आपको एक सेवा बनानी है। फ़ाइल बनाएं:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

स फ़ाइल में निम्नलिखित को जोड़ें और <code>YOUR_RASPPI_USERNAME_HERE</code> को बदलें। अगर आप अपना उपयोगकर्ता नाम नहीं जानते हैं, तो <code>whoami</code> कमांड का उपयोग करें।

<LessonCodeWrapper language="bash">
[Unit]
Description=zigbee2mqtt
After=network.target 
[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=YOUR_RASPPI_USERNAME_HERE
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>
</li>

<li>

कॉन्फ़िगरेशन काम करता है या नहीं यह सत्यापित करें:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

आउटपुट इस तरह दिखना चाहिए:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

Zigbee2MQTT को बूट पर स्वचालित रूप से शुरू करने के लिए सेवा को सक्षम करें:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>