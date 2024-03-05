---
title: "الكتابة: الأساليب"
description: ابدأ رسالة البكالوريوس الخاصة بك بأدوات مدعومة بالذكاء الاصطناعي
metaOptions: [تعلم، ابدأ رسالة البكالوريوس الخاصة بك بأدوات مدعومة بالذكاء الاصطناعي]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
نحن نبدأ في كتابة القسم الرئيسي من رسالة البكالوريوس بأكملها، حيث يجب على الطلاب أن يظهروا مهاراتهم وعملهم المكتمل.
</RoboAcademyText>

من المتوقع أن لا يمكن تفويض هذا القسم بالكامل إلى مساعد الذكاء الاصطناعي، على الأقل لسبب أن هذه الأدوات (حاليا) لا يمكنها تكوين وتشغيل أجهزة فيزيائية مختلفة (بشكل أساسي الأجهزة الاستشعارية والأجهزة الذكية). ومع ذلك، سننظر في عدة تكتيكات يمكن أن تجعل تحضير هذا القسم أسهل.

## توليد نص لقسم الأساليب

أولاً، تم محاولة الحصول على نص على الأقل لهذا القسم. كما ذكر سابقاً، تعتمد رسالة البكالوريوس على الدورة **"المنزل الذكي السيادي مع Robonomics و Home Assistant"**، لذا من المفضل تغذية الدورة بأكملها إلى مساعد الذكاء الاصطناعي لتشكيل السياق الصحيح. ومرة أخرى، واجهنا مشكلة قيود السياق:

- لم يتمكن Auto-GPT من التحقق بشكل كاف من موقع الدورة بمفرده، متبايناً باستمرار إلى مهام فرعية أو فقدان السياق. وواجهت محاولة تغذية نص الدورة كملف أيضاً مشكلة السياق الكبير جداً.
- يوجد حد لـ Bing Chat من 2000-4000 حرف، وتم تقييد الطلب للتحقق من موقع الدورة على الإنترنت إلى نظرة عامة سطحية.
- ChatGPT أيضاً لم يقبل نصاً كبيراً جداً.

وبناءً على ذلك، تم اختيار تكتيك تغذية نص الدورة حسب الدروس، مع تحديد ضرورة تذكر سياق الدروس. إذا لم يتم تقديم طلبات إضافية، يقترح مساعدو الذكاء الاصطناعي على الفور خطة لكتابة قسم الأساليب. إليك بعض الأمثلة:

<RoboAcademyDialog>

Methods

This section presents the methods employed to achieve the objectives of the study, which involved building a sovereign smart home with enhanced security and privacy features. The study was conducted as part of an online course titled "Smart Home Sovereign." The methods encompassed the setup of an IoT hub on a Raspberry Pi, connection of various smart devices to the hub using a محول Zigbee and the MQTT protocol, integration of the hub with Home Assistant software, and the establishment of a connection between the hub and a decentralized cloud based on Polkadot web3 technology. These steps were taken to enable secure data transfer to the network and facilitate remote home management.

1\. Online Course: "Smart Home Sovereign"
The initial phase of the study involved the completion of the online course "Smart Home Sovereign." This course provided comprehensive guidance on building a sovereign smart home, emphasizing the importance of user data security and privacy. The bachelor successfully completed all the course modules, gaining a thorough understanding of the fundamental concepts and practical aspects related to the construction of a sovereign smart home.

2\. Setting up the IoT Hub
To establish a centralized control system for the smart home devices, an IoT hub was set up on a Raspberry Pi. The Raspberry Pi was selected due to its versatility, low cost, and compatibility with the desired functionalities. The IoT hub acted as the central communication point, facilitating the interaction between the smart devices and the user.

3\. اتصلing Smart Devices
Various smart devices were integrated into the sovereign smart home system. These devices included a temperature/humidity sensor, a door sensor, a smart bulb, and a motion sensor, among others. A محول Zigbee was utilized to connect these devices to the IoT hub, enabling seamless communication. The MQTT (Message Queuing Telemetry Transport) protocol was employed to establish a reliable and efficient communication channel between the hub and the connected devices.

4\. Integration with Home Assistant
The IoT hub was integrated with Home Assistant, an open-source home automation platform. Home Assistant provided a user-friendly interface for managing and controlling the connected smart devices. This integration allowed the bachelor to monitor and control the devices remotely, enhancing the convenience and functionality of the sovereign smart home system.

5\. اتصلion to Decentralized Cloud
To ensure secure data transfer without relying on a centralized cloud service provider, a decentralized cloud based on Polkadot web3 technology was employed. This connection facilitated the secure transfer of device data to the network, protecting user privacy and enabling remote home management. The bachelor established a connection between the IoT hub and the decentralized cloud, enabling seamless data transfer and access.

6\. Data Security and Privacy Measures
Throughout the implementation process, stringent data security and privacy measures were implemented. The bachelor ensured the adoption of industry-standard encryption protocols and authentication mechanisms to safeguard the integrity and confidentiality of the user's personal and device data. Additionally, measures such as secure network configurations and regular software updates were implemented to mitigate potential vulnerabilities and security risks.

</RoboAcademyDialog>

<RoboAcademyDialog>

1\. Description of the Smart Home System Design using web3 technology, including hardware and software components:

\- Describe the overall architecture of the smart home system.

\- Explain the hardware components involved, such as the Raspberry Pi, sensors, actuators, and communication modules.

\- Discuss the software components, including the operating system, middleware, and applications used to control and manage the smart home system.

\- Highlight the role of web3 technology, such as blockchain, decentralized networks, and protocols, in enhancing the security and privacy of the system.


2\. Implementation details and justification for design choices:

\- Provide a step-by-step account of how the smart home system was implemented, including the installation and configuration processes.

\- Justify the selection of specific hardware and software components based on their compatibility, reliability, security features, and suitability for the project's objectives.

\- Discuss any modifications or customization made to the hardware or software components to meet the specific requirements of the smart home system.

\- Explain how the chosen web3 technology (e.g., blockchain, decentralized networks) addresses security and privacy concerns compared to traditional approaches.

3\. Evaluation plan for assessing the security and privacy of the system:

\- Outline the goals and objectives of the security and privacy evaluation.

\- Identify the specific security and privacy aspects to be evaluated, such as data encryption, access control, authentication, and data integrity.

\- Describe the evaluation methods and techniques to be used, such as penetration testing, vulnerability assessments, or simulations.

\- Explain how data will be collected, analyzed, and interpreted to assess the effectiveness of the implemented security and privacy measures.

\- Discuss any ethical considerations and potential risks associated with the evaluation process.

</RoboAcademyDialog>

وبناءً على ذلك، كان أفضل تكتيك هو اختيار العناصر يدوياً من خطط مختلفة للقس��، وتغذيتها بشكل تسلسلي وجزئي. من المهم عدم نسيان السياق، مذكرين أن مساعد الذكاء الاصطناعي يجب أن يؤدي مهمته استناداً إلى المصادر.

## توليد رسوم توضيحية

الرسالة الجيدة قادرة على تقديم المواد بشكل رسومي، لذا من الضروري على الأقل محاولة القيام بذلك بمساعدة الذكاء الاصطناعي. هناك الكثير مكتوب عن قدرات النماذج المختلفة، مثل MidJourney، DALL-E، Stable Diffusion، وخدمات أخرى، ولكنها مصممة في المقام الأول لتوليد الفن، وليس للرسوم البيانية والخرائط الصارمة. غالباً ما لا يمكنها إدراج النص الصحيح، وبشكل عام، الرسوم التوضيحية التي تم الحصول عليها غالباً ما تكون غير متقنة جداً.

على سبيل المثال، دعونا نحاول إنشاء دائرة تخطيطية للمحتوى التالي في Bing Chat، الذي سيعيد توجيه الطلب إلى Bing Image Creator:

<RoboAcademyDialog>

Make image with diagram based on this description:

There are 4 main blocks: Raspberry Pi, Smart Devices, Zigbee Adapter and Web3 Decentalized Cloud. Zigbee Adapter is connected by a double-ended arrow to Smart Devices, the arrow has the name "Zigbee".

Inside Raspberry Pi there are 4 more internal blocks: Zigbee2MQTT, MQTT Broker, Home Assistant and "robonomics-interface". Zigbee2MQTT is connected by a double-ended arrow to MQTT Broker, the arrow has the name "MQTT". MQTT Broker is connected by a double-ended arrow to Home Assistant, the arrow has the name "MQTT". Home Assistant is connected by a double-ended arrow to "robonomics-interface", the arrow has the name "Robonomics Data".

Also, internal block Zigbee2MQTT is connected by a double-ended arrow to Zigbee Adapter, the arrow has the name "Zigbee". Internal block "robonomics-interface" is connected by a double-ended arrow to Web3 Decentalized Cloud, the arrow has the name "data & events".

</RoboAcademyDialog>

النتائج:

<robo-academy-grid :columns="3" textAlign="center">
    <robo-academy-grid-element>
      <LessonImages src="ai-based-bachelor-thesis/bad-diagram1.jpeg" alt="Diagram example from Bing"/>
    </robo-academy-grid-element>
    <robo-academy-grid-element>
      <LessonImages src="ai-based-bachelor-thesis/bad-diagram2.jpeg" alt="Diagram example from Bing"/>
    </robo-academy-grid-element/>
    <robo-academy-grid-element>
      <LessonImages src="ai-based-bachelor-thesis/bad-diagram3.jpeg" alt="Diagram example from Bing"/>
    </robo-academy-grid-element/>
</robo-academy-grid>

من الأفضل طلب إنشاء كود لدائرة تخطيطية، على سبيل المثال في UML، ثم توليد رسم توضيحي في محرر الدائرة التخطيطية. على سبيل المثال، طلب مماثل في ChatGPT مع إضافة `إنشاء كود لدائرة تخطيطية UML استناداً إلى هذا الوصف`، بعد عدة محاولات، أنتج النتيجة التالية:

<robo-academy-grid :columns="2" textAlign="center">
    <robo-academy-grid-element>
<LessonCodeWrapper language="uml" noCopyIcon noLines codeClass="big-code">
        @startuml
        package "Raspberry Pi" {
            [Zigbee2MQTT]
            [MQTT Broker]
            [Home Assistant]
            [robonomics-interface]
        }
        Zigbee2MQTT o--o "MQTT Broker" : MQTT
        "MQTT Broker" o--o "Home Assistant" : MQTT
        "Home Assistant" o--o "robonomics-interface" : "Robonomics Data"
        rectangle "Smart Devices"
        rectangle "Zigbee Adapter"
        "Zigbee Adapter" o--o "Smart Devices" : Zigbee
        "robonomics-interface" o--o "Web3 Decentalized Cloud" : "data & events"
        Zigbee2MQTT o--o "Zigbee Adapter" : Zigbee
        @enduml

</LessonCodeWrapper>
    </robo-academy-grid-element>
    <robo-academy-grid-element>
      <LessonImages src="ai-based-bachelor-thesis/system-diagram.png" alt="Diagram after producing UML code"/>
    </robo-academy-grid-element/>
</robo-academy-grid>

## توليد الكود

على الرغم من أن مساعد الذكاء الاصطناعي لا يمكنه إعداد جهاز بمفرده، يمكن طلب مساعدته في كتابة البرنامج له. لرسالة البكالوريوس الخاصة بنا، لاختبار وظائف البرنامج الذكي المثبت في المنزل الذكي، قررنا إنشاء أتمتة لـ Home Assistant استناداً إلى سيناريو. تم إرسال الطلب التالي إلى AutoGPT:

<RoboAcademyTerminal title="AutoGPT Terminal">

AI Name: Hass-GPT 

Hass-GPT is: an AI that creates automation scripts for Home Assistant based on the text description

Goal 1: Open https://www.home-assistant.io/examples/ and analyze script codes of automations

Goal 2: Create automation script code with following scenario: turn on the bulb when motion sensor detects someone; while motion is present, keep the bulb turned on; when the motion stops, turn the bulb off

Goal 3: Write this code to the file and return it back

</RoboAcademyTerminal>

نتيجة AutoGPT، تم إنشاء النص النصي التالي:

<LessonCodeWrapper language="yaml" noCopyIcon codeClass="big-code">
    - alias: "جهاز استشعار الحركة Bulb Control"
      trigger:
        platform: state
        entity_id: binary_sensor.motion_sensor
        to: "on"
      action:
        service: light.turn_on
        entity_id: light.bulb
    - alias: "Motion Sensor Bulb Keep On"
      trigger:
        platform: state
        entity_id: binary_sensor.motion_sensor
        to: "on"
      action:
        service: light.turn_on
        entity_id: light.bulb
    - alias: "Motion Sensor Bulb Off"
      trigger:
        platform: state
        entity_id: binary_sensor.motion_sensor
        to: "off"
        for:
          minutes: 1
      action:
        service: light.turn_off
        entity_id: light.bulb
</LessonCodeWrapper>

بالطبع، تتطلب النص النصي تعديلات إضافية لكيانات الأجهزة والأجهزة الخاصة، ولكن بشكل عام تم معالجة الطلب بشكل صحيح.

<RoboAcademyText>

لذلك، أظهرت التجربة أنه على الرغم من أن الذكاء الاصطناعي لا يمكنه التعامل مع هذا القسم بشكل كامل بمفرده، إلا أنه يمكنه على ��لأقل مساعدة كبيرة في بعض المهام أو تقديم أفكار لحلولها. في القسم التالي، سنستكشف كيف يمكن لأدوات الذكاء الاصطناعي مساعدة في تحليل النتائج المحصلة وتنسيق القسم المقابل.

</RoboAcademyText>