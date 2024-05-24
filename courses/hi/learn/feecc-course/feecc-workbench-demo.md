---
title: "फ़ीसीसी का डेमो"
description: यह कोर्स फीस सिस्टम और उसके सभी घटकों को जानने के बारे में है।
metaOptions: [सीखें, फीस का उपयोग करना]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
इस पाठ में, आप एक उदाहरण के रूप में एक वर्चुअल टेस्टबेड का उपयोग करके फीस के मूल कार्यों का परीक्षण करेंगे, जो एक उत्पादन ट्रैकिंग सिस्टम के वास्तविक उदाहरण का अनुकरण करता है।
</RoboAcademyText>

प्रदर्शन के उद्देश्यों के लिए इसमें कुछ सामान्य विशेषताएँ नहीं हैं जैसे लेबल प्रिंटिंग या वीडियो रिकॉर्डिंग, लेकिन यह ऐसे एक सिस्टम की मुख्य अवधारणा को धारण करता है।

## पूर्वापेक्षाएँ

डेमो चलाने के लिए, आपको निम्नलिखित की आवश्यकता होगी:

- UNIX जैसा सिस्टम (जांच किया गया है [Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/))
- [डॉकर](https://docs.docker.com/engine/install/ubuntu/) और [डॉकर कॉम्पोज](https://docs.docker.com/compose/)
- वेब ब्राउज़र (Google Chrome और Mozilla Firefox पर जांच किया गया है)

## स्थापना

निम्नलिखित कमांडों को निष्पादित करें:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

काम कर रहे कंटेनर्स की जांच करने के लिए, निम्नलिखित को चलाएं:

<LessonCodeWrapper language="bash">
sudo docker ps -a
</LessonCodeWrapper>

आपको निम्नलिखित आउटपुट दिखना चाहिए:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## डेमो को लॉन्च करना

1. अपन�� ब्राउज़र में http://localhost:3000/ पर जाएं, आपको एक स्वागत स्क्रीन दिखाई देनी चाहिए।

2. इस स्थिति में, सिस्टम कर्मचारी से उनके RFID कार्ड को स्कैनर पर रखने के लिए प्रोत्साहित करना चाहिए। डेमो में, आप `hid-emulator.py` का उपयोग अधिकृत कर सकते हैं। इसके लिए, एक अलग Docker कंटेनर चलाएं:

<LessonCodeWrapper language="bash">
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

यह दो कार्यों का नकल करने में सक्षम है: एक RFID कार्ड प्रदान करना और एक बारकोड स्कैन करना; आपको पहले कार्य की आवश्यकता है, `1` दर्ज करें।

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the RFID scanner.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. आपको संयोजन प्रकार का चयन करने के लिए स्क्रीन दिखाई देगी, `SINGLE DEVICE` चुनें।

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. नोटिफिकेशन निर्मित करने की शुरुआत की सूचनाएं नीचे बाएं कोने में ��िखाई देगी जिसमें एक अद्वितीय आईडी बनाया गया है। नीला नोटिफिकेशन भी वर्चुअल प्रिंटर की गतिविधि को प्रदर्शित करेगा; वास्तविक सेटअप पर, इस समय उस उपकरण के आईडी के साथ एक बारकोड प्रिंट होगा।

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. `START COMPOSITION` पर क्लिक करें उपकरण संयोजन प्रक्रिया शुरू करने के लिए। आपको सभी आवश्यक संयोजन चरणों के माध्यम से जाने के लिए प्रोत्साहित किया जाएगा; हर बार जब कर्मचारी एक चरण पूरा करता है, तो उन्हें `NEXT` बटन पर क्लिक करना चाहिए, जिसके बाद वीडियो IPFS में सहेजा जाएगा। संयोजन को रोकना भी संभव है (`PAUSE`) बाद में वापस लौटने के लिए या प्रक्रिया को पूरी तरह ��े बंद करने के लिए (`STOP`)।

6. जब सभी संयोजन चरण पूरे हो जाएंगे, `FINISH` बटन दिखाई देगा, जिसके बाद Feecc सुझाव देगा कि उपकरण का प्रमाणपत्र सहेजना चाहिए। हालांकि, इससे पहले, अपने ब्राउज़र में [स्थानीय Robonomics नोड](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) खोलें, आपको बाद में इसकी आवश्यकता होगी। उसके बाद, Feecc पर वापस आएं और `SAVE PASSPORT` पर क्लिक करें।
    
    आपको स्क्रीन के कोने में नई नोटिफिकेशन दिखाई देगी: प्रमाणपत्र को Robonomics और IPFS में अपलोड कर दिया गया है, साथ ही प्रिंटिंग सील टैग और प्रमाणपत्र के लिए QR-कोड के बारे में दो नीले संदेश।

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. Robonomics स्थानीय नोड स्क्रीन पर `Chain info` खंड ��े तहत, आपको `recent events` स्तंभ के तहत एक नया घटना `datalog.NewRecord` दिखाई देना चाहिए। अगर आप इसे विस्तारित करते हैं, तो उपकरण के प्रमाणपत्र फ़ाइल के लिए IPFS CID दिखाई देगा।

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

मुद्रित QR कोड में इस सीआईडी का लिंक होता है, जिससे ब्राउज़र में प्रमाणपत्र फ़ाइल खोल सकते हैं। क्योंकि आपके स्थानीय IPFS नोड में उस खोजने की क्षमता नहीं हो सकती, आप `localhost:8080/ipfs/CID` के साथ स्थानीय रूप से फ़ाइल तक पहुंच सकते हैं। प्रमाणपत्र की सामग्री कुछ इस प्रकार दिखती है:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: 423d3c1b42f6427e80cc881a16e07451
Unit Model Name: Single Device
Total Assembly Time: 0:05:37
Production Stages:
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:38:47
  Finish Time: 26-06-2023 17:40:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:40:30
  Finish Time: 26-06-2023 17:42:06
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:42:16
  Finish Time: 26-06-2023 17:43:00
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Saw Through the Single Device
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:00
  Finish Time: 26-06-2023 17:43:51
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:51
  Finish Time: 26-06-2023 17:44:36
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
</LessonCodeWrapper>

8. अब हम कई उपकरणों से मिलकर एक संयोजन संयंत्र के लिए प्रमाणपत्र बनाने की कोशिश करेंगे। प्रकार चयन मेनू में, `कॉम्पोज़िट उपकरण` पर क्लिक करें, और फिर `नमूना उपकरण` पर क्लिक करें। इसका यूनिट आईडी कॉपी करें (संयोजन संख्या क्षेत्र में स्थित), क्योंकि आपको बाद में इसकी आवश्यकता होगी। फिर, उपकरण को संयोजित करने के मानक चरणों के साथ आगे बढ़ें।

9. संयोजन के बाद, `कॉम्पोज़िट उपकरण` पर वापस जाएं और संयोजन संयंत्र को समाप्त करने के लिए `अंतिम संयोजन` दबाएं। सिस्टम आपसे संयोजित उपकरणों के यूनिट आईडी प्रदान करने के लिए कहेगा, जिसके लिए कर्मचारी को उनके बार कोड को स्कैन करना होगा। इस प्रक्रिया को अनुकरण करने के लिए, `hid-emulator.py` पर वापस जाएं और बारकोड स्कैनिंग के लिए फ़ंक्शन `2` का चयन करें, और वहां सहेजे गए यूनिट आईडी डालें।

10. अगले, सिस्टम आवश्यक संयोजन के आवश्यक चरणों के माध्यम से जाने के लिए प्रोत्साहित कर��गा और इसके लिए प्रमाणपत्र उत्पन्न करेगा:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: d08101feae7c4efbb5529885c9ad544b
Unit Model Name: Composite Device
Total Assembly Time: 0:00:03
Production Stages:
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:25
  Finish Time: 26-06-2023 18:18:26
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Tape the Sample Device to the base plate
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:26
  Finish Time: 26-06-2023 18:18:27
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:27
  Finish Time: 26-06-2023 18:18:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
Unit Components:
- Unit Unique Code: b165b382c3674127a6aaf5817c5a7040
  Unit Model Name: Sample Device
  Total Assembly Time: 0:00:03
  Production Stages:
  - Name: Prepare Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:45
    Finish Time: 26-06-2023 18:17:46
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Assemble Sample Device
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:46
    Finish Time: 26-06-2023 18:17:47
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Stack Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:47
    Finish Time: 26-06-2023 18:17:48
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
Total Assembly Time (Including Components): 0:00:06
</LessonCodeWrapper>

11. डेमो को हटाने के लिए, कमांड दर्ज करें:

<LessonCodeWrapper language="bash">
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
अगले सबक में, हम फीक सिस्टम के सभी आवश्यक घटकों का वास्तविक डिप्लॉयमेंट करने के लिए आगे बढ़ेंगे।
</RoboAcademyText>