---
title: "पाठ #6, सेंसर मानचित्र परिनियोजन"
description: 'सेंसर मैप डिप्लॉयमेंट'
lessonNumber: 6
metaOptions: [सीखना, सेंसर्स कनेक्टिविटी और डीसेंट्रलाइज्ड सेंसर्स नेटवर्क]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

एक सेंसर को जोड़ने और सेंसर कनेक्टिविटी मॉड्यूल सेट करने के बाद व्यक्तिगत डीसेंट्रलाइज़ड सेंसर मैप को डिप्लॉय करने का समय है।


## आवश्यकताएं & Installation

<List type="numbers">

<li>

क्योंकि सेंसर मैप जावास्क्रिप्ट द्वारा संचालित है, इसे स्थापित करने के लिए पहले आपको `नोड` और `यार्न` प्रबंधक को स्थापित करना होगा:

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

मैप को डाउनलोड और निर्माण करें:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

परीक्षण के लिए `विकास` मोड में मैप चलाएं

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

टर्मिनल से URL पर जाएं, आपको सेंसर मैप दिखाई देना चाहिए। उसके बाद, इसे `Ctrl+C` के साथ रोकें।

</li>

</List>

## विन्यास

<List type="numbers">

<li>

अपना IPFS आईडी खोजें:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

`src` फ़ोल्डर में जाएं और फ़ाइलों का नाम बदलें:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

`agents.json` में अपना IPFS आईडी डालें:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

`config.json` फ़ाइल खोलें और कॉन्फ़िगरेशन फ़ाइल के अगले हिस्से को बदलें:

<LessonCodeWrapper codeClass="big-code" language="json">...
  REMOTE_PROVIDER: "",
  WIND_PROVIDER: "",
  MAP: {
    zoom: "8",
    position: {
      lat: "",
      lng: "",
    },
  },
  SHOW_MESSAGES: true,
};</LessonCodeWrapper>


यहाँ आपको अपने शहर के अक्षांश (`lat`) और देशांतर (`lng`) डालना है। वैकल्पिक रूप से, आप [हवा की दिशा सेवा](https://github.com/danwild/wind-js-server) सेट अप कर सकते हैं और इसे `WIND_PROVIDER` फ़ील्ड में URL प्रदान कर सकते हैं।

</li>

</List>


## निर्माण

<List type="numbers">

<li>

रिलीज के लिए फ़ाइलों को बनाने के लिए निम्नलिखित कमांड चलाएं:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

यह `dist` निर्देशिका बनाएगा जिसमें स्टेटिक वेबसाइट के सभी घटक होंगे।

</li>

<li>

सब कुछ सही है या नहीं जांचने के लिए, `dist` निर्देशिका में ाएं और `index.html` फ़ाइल खोलें। कुछ समय बाद आपके सेंसर्स कनेक्टिविटी मॉड्यूल से डेटा मानचित्र पर दिखाई देगा।

</li>

</List>

