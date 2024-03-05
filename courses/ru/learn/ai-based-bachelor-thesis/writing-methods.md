---
title: "Письмо: Методы"
description: Быстрый старт вашей бакалаврской диссертации с помощью инструментов на основе ИИ
metaOptions: [Учимся, быстрый старт вашей бакалаврской диссертации с помощью инструментов на основе ИИ]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Мы начинаем писать основной раздел всей бакалаврской диссертации, в котором студенты должны продемонстрировать свои навыки и завершенную работу.
</RoboAcademyText>

Ожидается, что этот раздел не может быть полностью доверен помощнику по ИИ, по крайней мере по причине того, что эти инструменты (на данный момент) не могут настраивать и запускать различные физические устройства (в первую очередь датчики и умные устройства). Тем не менее, мы рассмотрим несколько тактик, которые могут облегчить подготовку этого раздела.

## Генерация текста для раздела Методы

Во-первых, была предпринята попытка получить хотя бы какой-то текст для этого раздела. Как уже упоминалось ранее, бакалаврская диссертация основана на курсе **"Суверенный умный дом с Robonomics и Home Assistant"**, поэтому желательно подать весь курс помощнику по ИИ, чтобы сформировать правильный контекст. Еще раз мы столкнулись с проблемой ограничений контекста:

- Auto-GPT не смог адекватно проверить веб-сайт курса самостоятельно, постоянно переключаясь на подзадачи или теряя контекст. Попытка подать текст курса как файл также столкнулась с проблемой слишком большого контекста.
- Bing Chat имеет ограничение 2000-4000 символов, и запрос на проверку веб-сайта онлайн-курса был ограничен поверхностным обзором.
- ChatGPT также не принял слишком большой текст.

В результате была выбрана тактика подачи текста курса по урокам, указывая при этом необходимость запоминания контекста уроков. Если не поступают дополнительные запросы, помощники по ИИ сразу предлагают план написания раздела Методы. Вот несколько примеров:

<RoboAcademyDialog>

Methods

This section presents the methods employed to achieve the objectives of the study, which involved building a sovereign smart home with enhanced security and privacy features. The study was conducted as part of an online course titled "Smart Home Sovereign." The methods encompassed the setup of an IoT hub on a Raspberry Pi, connection of various smart devices to the hub using a Адаптер Zigbee and the MQTT protocol, integration of the hub with Home Assistant software, and the establishment of a connection between the hub and a decentralized cloud based on Polkadot web3 technology. These steps were taken to enable secure data transfer to the network and facilitate remote home management.

1\. Online Course: "Smart Home Sovereign"
The initial phase of the study involved the completion of the online course "Smart Home Sovereign." This course provided comprehensive guidance on building a sovereign smart home, emphasizing the importance of user data security and privacy. The bachelor successfully completed all the course modules, gaining a thorough understanding of the fundamental concepts and practical aspects related to the construction of a sovereign smart home.

2\. Setting up the IoT Hub
To establish a centralized control system for the smart home devices, an IoT hub was set up on a Raspberry Pi. The Raspberry Pi was selected due to its versatility, low cost, and compatibility with the desired functionalities. The IoT hub acted as the central communication point, facilitating the interaction between the smart devices and the user.

3\. Подключитьing Smart Devices
Various smart devices were integrated into the sovereign smart home system. These devices included a temperature/humidity sensor, a door sensor, a smart bulb, and a motion sensor, among others. A Адаптер Zigbee was utilized to connect these devices to the IoT hub, enabling seamless communication. The MQTT (Message Queuing Telemetry Transport) protocol was employed to establish a reliable and efficient communication channel between the hub and the connected devices.

4\. Integration with Home Assistant
The IoT hub was integrated with Home Assistant, an open-source home automation platform. Home Assistant provided a user-friendly interface for managing and controlling the connected smart devices. This integration allowed the bachelor to monitor and control the devices remotely, enhancing the convenience and functionality of the sovereign smart home system.

5\. Подключитьion to Decentralized Cloud
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

В результате лучшей тактикой был ручной выбор элементов из различных планов для раздела и подача их последовательно и частями. Важно не забывать о контексте, напоминая, что помощник по ИИ должен выполнять свою задачу на основе исходного материала.

## Генерация иллюстраций

Хорошая диссертация способна представить материал в графической форме, поэтому необходимо хотя бы попытаться сделать это с помощью ИИ. Многое написано о возможностях различных моделей, таких как MidJourney, DALL-E, Stable Diffusion и другие сервисы, но они в первую очередь предназначены для создания искусства, а не строгих диаграмм и графиков. Очень часто они не могут вставить правильный текст, и в целом полученные иллюстрации часто слишком громоздки.

В качестве примера давайте попробуем создать диаграмму следующего содержания в Bing Chat, который перенаправит запрос в Bing Image Creator:

<RoboAcademyDialog>

Make image with diagram based on this description:

There are 4 main blocks: Raspberry Pi, Smart Devices, Zigbee Adapter and Web3 Decentalized Cloud. Zigbee Adapter is connected by a double-ended arrow to Smart Devices, the arrow has the name "Zigbee".

Inside Raspberry Pi there are 4 more internal blocks: Zigbee2MQTT, MQTT Broker, Home Assistant and "robonomics-interface". Zigbee2MQTT is connected by a double-ended arrow to MQTT Broker, the arrow has the name "MQTT". MQTT Broker is connected by a double-ended arrow to Home Assistant, the arrow has the name "MQTT". Home Assistant is connected by a double-ended arrow to "robonomics-interface", the arrow has the name "Robonomics Data".

Also, internal block Zigbee2MQTT is connected by a double-ended arrow to Zigbee Adapter, the arrow has the name "Zigbee". Internal block "robonomics-interface" is connected by a double-ended arrow to Web3 Decentalized Cloud, the arrow has the name "data & events".

</RoboAcademyDialog>

Результаты:

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

Лучше попросить создать код для диаграммы, например, в UML, а затем сгенерировать иллюстрацию в редакторе диаграмм. Например, аналогичный запрос в ChatGPT с добавлением `Создать код диаграммы UML на основе этого описания`, после нескольких попыток, дал следующий результат:

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

## Генерация кода

Хотя помощник по ИИ не может самостоятельно настроить устройство, его можно попросить помочь написать программное обеспечение для него. Для нашей бакалаврской диссертации, чтобы протестировать функциональность установленного программного обеспечения для умного дома, мы решили создать автоматизацию для Home Assistant на основе сценария. Следующий запрос был отправлен в AutoGPT:

<RoboAcademyTerminal title="AutoGPT Terminal">

AI Name: Hass-GPT 

Hass-GPT is: an AI that creates automation scripts for Home Assistant based on the text description

Goal 1: Open https://www.home-assistant.io/examples/ and analyze script codes of automations

Goal 2: Create automation script code with following scenario: turn on the bulb when motion sensor detects someone; while motion is present, keep the bulb turned on; when the motion stops, turn the bulb off

Goal 3: Write this code to the file and return it back

</RoboAcademyTerminal>

В результате AutoGPT был сгенерирован следующий скрипт:

<LessonCodeWrapper language="yaml" noCopyIcon codeClass="big-code">
    - alias: "Датчик движения Bulb Control"
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

Конечно, скрипт требовал дополнительной настройки для конкретных сенсоров и устройств, но в целом запрос был обработан правильно.

<RoboAcademyText>

Таким образом, практика показала, что несмотря на то, что ИИ не может полностью справиться с этим разделом самостоятельно, он может хотя бы значительно помочь с некоторыми задачами или предоставить идеи для их решения. В следующем разделе мы рассмотрим, как инструменты ИИ могут помочь проанализировать полученные результаты и форматировать соответствующий раздел.

</RoboAcademyText>