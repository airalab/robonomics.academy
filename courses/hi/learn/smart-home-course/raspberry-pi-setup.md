---
title: "पाठ #2, रास्पबेरी पाई सेटअप"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: होम असिस्टेंट कोर्स
lessonNumber: 2
metaOptions: [रोबोनॉमिक्स और होम असिस्टेंट के साथ साम्राजिक स्मार्ट होम सीखें]
defaultName: साम्��ाजिक स्मार्ट होम विथ रोबोनोमिक्स और होम असिस्टेंट
---

## परिचय

इस सबक में, आप अपने रास्पबेरी पाई को एक आईओटी हब बनाने के लिए तैयार करेंगे। आप सभी आवश्यक घटकों को क्रमशः स्थापित और कॉन्फ़िगर करेंगे, जैसे:

<List>

- सर्वर ऑपरेटिंग सिस्टम के रूप में रास्पबेरी पाई के लिए उबंटू लिनक्स वितरण;
- होम असिस्टेंट पैकेज;
- आईपीएफएस पैकेज;
- रोबोनोमिक्स-इंटरफेस पुस्तकालय।

</List>

## निर्देश

<List type="numbers">

<li>

रास्पबेरी पाई की तैयारी और कॉन्फ़िगरेशन

<List>

  <li>

  [64-बिट उबंटू सर्वर 22.04 एलटीएस](https://ubuntu.com/download/raspberry-pi) या नए रास्पबेरी पाई के लिए छवि डाउनलोड करें।
  </li>

  <li>

  छवि फ़ाइलें लिखने के लिए एक उपकरण डाउनलोड और स्थापित करें जिसे [रास्पबेरी ��ाई इमेजर](https://www.raspberrypi.com/software/) कहा जाता है अपने कंप्यूटर पर।
  </li>

  <li>

  एसडी कार्ड डालें और रास्पबेरी पाई इमेजर चलाएं। आवश्यक छवि का चयन करें (जिसे आपने अभी डाउनलोड किया है) ऑपरेटिंग सिस्टम के रूप में और सुनिश्चित करें कि आपने स्टोरेज ड्रॉपडाउन मेन्यू से अपना एसडी कार्ड चुना है।

  </li>

  <li>

  अपनी ��ेटिंग्स खोलें और <code>Enable SSH</code> विकल्प को <code>Use password authentication</code> पैरामीटर के साथ चेक करें।

  \- <code>Set username and password</code> में अपने Raspberry Pi उपयोगकर्ता के लिए उपयोगकर्ता नाम और पासवर्ड जोड़ें।

  \- <code>Configure wireless LAN</code> में अपने Wi-Fi को उसके पासवर्ड के साथ प्रदान करें और ड्रॉप-डाउन सूची से अपने देश को चुनें। फिर <code>Write</code> छवि।

  <robo-academy-note type="okay">
  सुनिश्चित करें कि आप अपना वास्तविक Wi-Fi नाम और अपना Wi-Fi पासवर्ड दर्ज कर रहे हैं।
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  लिखने का पूरा होने तक प्रतीक्षा करें, फिर SD कार्ड को Raspberry Pi में डालें और इसे चालू करें। यह आपके Wi-Fi नेटवर्क से कनेक्ट होना चाहिए, जिसमें कुछ समय लग सकता है।

  </li>
  
  <li>

  अब आपको डिवाइस का पता ढूंढने की आवश्यकता है। इसे करने के लिए आप नेटवर्क स्कैनिंग के लिए विभिन्न विधियों का उपयोग कर सकते हैं, जैसे [Fing ऐप](https://www.fing.com/products), <code>arp -a</code> कमांड या [nmap](https://nmap.org/download.html)। अगला उपयोग किया जाएगा।

  कमांड के साथ nmap इंस्टॉल करें

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  फिर अपने स्थानीय नेटवर्क में अपना पता खोजें। यह <code>192.168.xxx.xxx</code> या <code>172.xxx.xxx.xxx</code> की तरह दिखना चाहिए। nmap आपके स्थानीय नेटवर्क पर कई पते खोज सकता है, इसलिए ध्यान दें।

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  फिर नीचे दिखाए गए तरीके से अपने नेटवर्क को स्कैन करें और पते का अंतिम ऑक्��ेट <code>0</code> के साथ बदलें:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  कमांड का आउटपुट कुछ इस प्रकार होगा:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon noLines>
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST
Nmap scan report for _gateway (192.168.43.1)
Host is up (0.015s latency).
MAC Address: 8E:F5:A3:DB:02:24 (Unknown)
Nmap scan report for ubuntu (192.168.43.56)
Host is up (0.049s latency).
MAC Address: DC:A6:32:04:45:50 (Raspberry Pi Trading)
Nmap scan report for LAPTOP-NO7 (192.168.43.234)
Host is up (0.00057s latency).
MAC Address: 7C:B3:7D:9E:94:DA (Intel Corporate)
Nmap scan report for ed-vm (192.168.43.138)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds
</LessonCodeWrapper>

  इस उदाहरण में पता <code>192.168.43.56.</code> है।

  </li>

  <li>

  ढूंढा गया आईपी के साथ रैस्पबेरी पाई कनेक्ट करें। उस उपयोगकर्ता नाम और पासवर्ड का उपयोग करें, जिसे आपने पहले बनाया था।
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  आगे के निर्देश रैस्पबेरी पाई पर SSH के माध्यम से कार्यान्वित किए जाते हैं।
  
  </li>
</List>
</li>

<li>

होम असिस्टेंट स्थापना

<List>
  <li>

  <robo-academy-note type="okay">

नीचे दिखाए गए कुछ सॉफ्टवेयर संस्करण अद्यतित हो सकते हैं। नवीनतम संस्करणों के लिए, आप [रोबोनॉमिक्स होम असिस्टेंट इमेज के स्थापना भंडार](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage) का संदर्भ कर सकते हैं।

  </robo-academy-note>

  शुरू करने से पहले, रैस्पबेरी पाई सिस्टम को अपडेट करें और आवश्यक पैकेज स्थापित करें। ��्थापना के दौरान आपको सेवा पुनरारंभ अनुरोध के साथ एक विंडो दिखाई देगी। बस <span class="accent">ठीक</span> चुनें <code>tab</code> बटन के साथ और एंटर दबाएं।

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  उपयोगकर्ता <code>homeassistant</code> और होम असिस्टेंट कोर के लिए निर्देशिका बनाएं:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  होम असिस्टेंट कोर के लिए एक वर्चुअल वातावरण बनाएं और उस पर स्विच करें। यह <code>homeassistant</code> उपयोगकर्ता के रूप में किया जाना चाहिए, इसलिए आपके उपयोगकर्ता को निर्देशिकाओं को क्रियान्वित करने के बाद इस प्रकार दिखाई देगा <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  परिणामस्वरूप, आपको ब्रैकेट में वर्चुअल वातावरण का न���म मिलेगा:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  आवश्यक पायथन पैकेज स्थापित करें:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  पहली ��ार Home Assistant Core शुरू करें। यह स्थापना पूरी करेगा जिससे स्वचालित रूप से <code class="nowb">.homeassistant</code> कॉन्फ़िगरेशन निर्देशिका <code>/home/homeassistant</code> निर्देशिका में बनाई जाएगी, और किसी भी मौलिक आवश्यकताओं को स्थापित करेगी:
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  प्रारंभिक सेटअप के दौरान, वेब इंटरफ़ेस के माध्यम से अपनी स्थापना की जांच करें <code>http://%RASPBERRY_IP_ADDRESS%:8123</code> पर। इस उदाहरण में: <code>http://192.168.43.56:8123</code>। आप अपने स्थानीय नेटवर्क से कनेक्ट किए गए किसी भी कंप्यूटर से वेब UI खोल सकते हैं।

  जब आप वेलकम विंडोज़ प्राप्त करेंगे जिसमें लॉगिन / पासवर्ड बनाने का विकल्प होगा तो Home Assistant को <code>Ctrl+C</code> से रोकें।
  </li>
</List>
</li>

<li>

IPFS स्थापना

<List>

  <li>

  IPFS स्थापना के लिए आप हमारे स्क्रिप्ट का उपयोग कर सकते हैं जिससे IPFS डाउनलोड करें और उसके साथ systemd सेवा बनाएं। पहले, Home Assistant के लिए वर्चुअल वातावरण से बाहर निकलें:

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  फिर निम्नलिखित को क्रियान्वित करें:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

सिस्टमड सेवाएं

<List>

<li>

सिस्टमड सेवा Home Assistant के लॉन्च को स्वचालित बनाने के लिए उपयोगी है। Home Assistant के लिए नई सेवा बनाएं:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

निम्नलिखित को पेस्ट करें

<LessonCodeWrapper language="bash">
[Unit]
Description=Home Assistant
After=network-online.target
[Service]
Type=simple
Restart=on-failure
User=%i
WorkingDirectory=/srv/%i/
ExecStart=/srv/homeassistant/bin/hass -c "/srv/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>

</li>

<li>

सेवा को सक्षम और शुरू करें:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl enable home-assistant@homeassistant.service
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl start home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Robonomics एकीकरण

<List>

<li>

अपने Raspberry Pi पर <code>homeassistant</code> उपयोगकर्ता के साथ लॉग इन करें:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

स्रोत वर्चुअल वातावरण और आवश्यक Python पैकेज स्थापित करें:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

फिर जाएं <code>.homeassistant</code> निर्देशिका में, फ़ोल्डर <code class="nowb">custom_components</code> बनाएं और उसमें एकीकरण के साथ रिपॉज़िटरी क्लोन करें:


<LessonCodeWrapper language="bash" noLines>
cd ~/.homeassistant
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
mkdir custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
cd custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
svn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics
</LessonCodeWrapper>

</li>


<li>

उसके बाद homeassistant उपयोगकर्ता से बाहर निकलें और सेवा पुनः आरंभ करें:

<LessonCodeWrapper language="bash" noLines>
exit
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl restart home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

</List>



