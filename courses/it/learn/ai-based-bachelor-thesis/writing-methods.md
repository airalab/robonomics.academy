---
title: "Scrittura: Metodi"
description: Avvia rapidamente la tua tesi di laurea con strumenti basati sull'IA
metaOptions: [Impara, Avvia rapidamente la tua tesi di laurea con strumenti basati sull'IA]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Stiamo iniziando a scrivere la sezione principale dell'intera tesi di laurea, in cui gli studenti dovrebbero dimostrare le proprie competenze e il lavoro completato.
</RoboAcademyText>

Ci si aspetta che questa sezione non possa essere completamente affidata all'assistente AI, almeno per il motivo che questi strumenti (attualmente) non possono configurare e avviare diversi dispositivi fisici (principalmente sensori e dispositivi intelligenti). Tuttavia, considereremo diverse tattiche che possono rendere più facile la preparazione di questa sezione.

## Generazione di testo per la sezione Metodi

Innanzitutto, è stato fatto un tentativo di ottenere almeno un po' di testo per questa sezione. Come già menzionato, la tesi di laurea si basa sul corso **"Sovereign Smart Home con Robonomics e Home Assistant"**, quindi è auspicabile alimentare l'intero corso all'assistente AI per formare il contesto corretto. Ancora una volta, ci siamo imbattuti nel problema delle limitazioni del contesto:

- Auto-GPT non è stato in grado di controllare adeguatamente il sito web del corso da solo, passando costantemente a sotto-compiti o perdendo il contesto. Il tentativo di alimentare il testo del corso come file ha incontrato il problema di un contesto troppo grande.
- Bing Chat ha un limite di 2000-4000 caratteri, e la richiesta di controllare il sito web del corso online è stata limitata a una panoramica superficiale.
- Anche ChatGPT non ha accettato un testo troppo grande.

Di conseguenza, è stata scelta la tattica di alimentare il testo del corso per lezioni, specificando la necessità di memorizzare il contesto delle lezioni. Se non vengono fatte richieste aggiuntive, gli assistenti AI suggeriscono immediatamente un piano per scrivere la sezione Metodi. Ecco alcuni esempi:

<RoboAcademyDialog>

Methods

This section presents the methods employed to achieve the objectives of the study, which involved building a sovereign smart home with enhanced security and privacy features. The study was conducted as part of an online course titled "Smart Home Sovereign." The methods encompassed the setup of an IoT hub on a Raspberry Pi, connection of various smart devices to the hub using a Adattatore Zigbee and the MQTT protocol, integration of the hub with Home Assistant software, and the establishment of a connection between the hub and a decentralized cloud based on Polkadot web3 technology. These steps were taken to enable secure data transfer to the network and facilitate remote home management.

1\. Online Course: "Smart Home Sovereign"
The initial phase of the study involved the completion of the online course "Smart Home Sovereign." This course provided comprehensive guidance on building a sovereign smart home, emphasizing the importance of user data security and privacy. The bachelor successfully completed all the course modules, gaining a thorough understanding of the fundamental concepts and practical aspects related to the construction of a sovereign smart home.

2\. Setting up the IoT Hub
To establish a centralized control system for the smart home devices, an IoT hub was set up on a Raspberry Pi. The Raspberry Pi was selected due to its versatility, low cost, and compatibility with the desired functionalities. The IoT hub acted as the central communication point, facilitating the interaction between the smart devices and the user.

3\. Collegareing Smart Devices
Various smart devices were integrated into the sovereign smart home system. These devices included a temperature/humidity sensor, a door sensor, a smart bulb, and a motion sensor, among others. A Adattatore Zigbee was utilized to connect these devices to the IoT hub, enabling seamless communication. The MQTT (Message Queuing Telemetry Transport) protocol was employed to establish a reliable and efficient communication channel between the hub and the connected devices.

4\. Integration with Home Assistant
The IoT hub was integrated with Home Assistant, an open-source home automation platform. Home Assistant provided a user-friendly interface for managing and controlling the connected smart devices. This integration allowed the bachelor to monitor and control the devices remotely, enhancing the convenience and functionality of the sovereign smart home system.

5\. Collegareion to Decentralized Cloud
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

Di conseguenza, la migliore tattica è stata la selezione manuale di elementi da diversi piani per la sezione, e l'alimentazione di essi in modo sequenziale e per parti. È importante non dimenticare il contesto, ricordando che l'assistente AI dovrebbe svolgere il suo compito basandosi sul materiale di origine.

## Generazione di illustrazioni

Una buona tesi è in grado di presentare il materiale in forma grafica, quindi è necessario almeno provare a farlo con l'aiuto dell'IA. C'è molto scritto sulle capacità di diversi modelli, come MidJourney, DALL-E, Stable Diffusion e altri servizi, ma sono principalmente progettati per generare arte, non diagrammi e grafici rigorosi. Molto spesso, non riescono a inserire il testo corretto, e in generale, le illustrazioni ottenute sono spesso troppo goffe.

Come esempio, proviamo a creare un diagramma del seguente contenuto in Bing Chat, che reindirizzerà la richiesta a Bing Image Creator:

<RoboAcademyDialog>

Make image with diagram based on this description:

There are 4 main blocks: Raspberry Pi, Smart Devices, Zigbee Adapter and Web3 Decentalized Cloud. Zigbee Adapter is connected by a double-ended arrow to Smart Devices, the arrow has the name "Zigbee".

Inside Raspberry Pi there are 4 more internal blocks: Zigbee2MQTT, MQTT Broker, Home Assistant and "robonomics-interface". Zigbee2MQTT is connected by a double-ended arrow to MQTT Broker, the arrow has the name "MQTT". MQTT Broker is connected by a double-ended arrow to Home Assistant, the arrow has the name "MQTT". Home Assistant is connected by a double-ended arrow to "robonomics-interface", the arrow has the name "Robonomics Data".

Also, internal block Zigbee2MQTT is connected by a double-ended arrow to Zigbee Adapter, the arrow has the name "Zigbee". Internal block "robonomics-interface" is connected by a double-ended arrow to Web3 Decentalized Cloud, the arrow has the name "data & events".

</RoboAcademyDialog>

Risultati:

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

È meglio chiedere di creare il codice per un diagramma, ad esempio in UML, e poi generare un'illustrazione in un editor di diagrammi. Ad esempio, una richiesta simile in ChatGPT con l'aggiunta di `Creare codice diagramma UML basato su questa descrizione`, dopo diversi tentativi, ha prodotto il seguente risultato:

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

## Generazione di codice

Anche se un assistente AI non può configurare un dispositivo da solo, è possibile chiedergli di aiutare a scrivere il software per esso. Per la nostra tesi di laurea, per testare la funzionalità del software smart home installato, abbiamo deciso di creare un'automazione per Home Assistant basata su uno scenario. La seguente richiesta è stata inviata ad AutoGPT:

<RoboAcademyTerminal title="AutoGPT Terminal">

AI Name: Hass-GPT 

Hass-GPT is: an AI that creates automation scripts for Home Assistant based on the text description

Goal 1: Open https://www.home-assistant.io/examples/ and analyze script codes of automations

Goal 2: Create automation script code with following scenario: turn on the bulb when motion sensor detects someone; while motion is present, keep the bulb turned on; when the motion stops, turn the bulb off

Goal 3: Write this code to the file and return it back

</RoboAcademyTerminal>

Come risultato di AutoGPT, lo script seguente è stato generato:

<LessonCodeWrapper language="yaml" noCopyIcon codeClass="big-code">
    - alias: "Sensore di movimento Bulb Control"
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

Naturalmente, lo script richiedeva ulteriori aggiustamenti per specifici sensori ed entità dei dispositivi, ma nel complesso la richiesta è stata elaborata correttamente.

<RoboAcademyText>

Quindi, la pratica ha dimostrato che nonostante il fatto che l'IA non possa gestire completamente questa sezione da sola, può almeno aiutare notevolmente con alcuni compiti o fornire idee per le loro soluzioni. Nella sezione successiva, esploreremo come gli strumenti AI possono aiutare ad analizzare i risultati ottenuti e formattare la sezione corrispondente.

</RoboAcademyText>