---
title: "Écriture: Méthodes"
description: Démarrage rapide de votre thèse de licence avec des outils alimentés par l'IA
metaOptions: [Apprenez, démarrez rapidement votre thèse de licence avec des outils alimentés par l'IA]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Nous commençons à rédiger la section principale de l'ensemble de la thèse de licence, dans laquelle les étudiants doivent démontrer leurs compétences et leur travail accompli.
</RoboAcademyText>

Il est prévu que cette section ne puisse pas être entièrement confiée à l'assistant IA, au moins pour la raison que ces outils ne peuvent pas configurer et lancer différents appareils physiques (principalement des capteurs et des appareils intelligents). Néanmoins, nous examinerons plusieurs tactiques qui peuvent faciliter la préparation de cette section.

## Génération de texte pour la section Méthodes

Tout d'abord, une tentative a été faite pour obtenir au moins un peu de texte pour cette section. Comme mentionné précédemment, la thèse de licence est basée sur le cours **"Maison intelligente souveraine avec Robonomics et Home Assistant"**, il est donc souhaitable de fournir l'ensemble du cours à l'assistant IA pour former le bon contexte. Une fois de plus, nous avons rencontré le problème des limitations de contexte:

- Auto-GPT n'a pas été en mesure de vérifier adéquatement le site Web du cours par lui-même, passant constamment à des sous-tâches ou perdant le contexte. La tentative de fournir le texte du cours en tant que fichier a également rencontré le problème d'un contexte trop important.
- Bing Chat a une limite de 2000 à 4000 caractères, et la demande de vérification du site Web du cours en ligne était limitée à un survol superficiel.
- ChatGPT n'a pas non plus accepté un texte trop long.

En fin de compte, la tactique de fournir le texte du cours par leçons a été choisie, en précisant la nécessité de mémoriser le contexte des leçons. Si aucune demande supplémentaire n'est faite, les assistants IA suggèrent immédiatement un plan pour rédiger la section Méthodes. Voici quelques exemples:

<RoboAcademyDialog>

Methods

This section presents the methods employed to achieve the objectives of the study, which involved building a sovereign smart home with enhanced security and privacy features. The study was conducted as part of an online course titled "Smart Home Sovereign." The methods encompassed the setup of an IoT hub on a Raspberry Pi, connection of various smart devices to the hub using a Adaptateur Zigbee and the MQTT protocol, integration of the hub with Home Assistant software, and the establishment of a connection between the hub and a decentralized cloud based on Polkadot web3 technology. These steps were taken to enable secure data transfer to the network and facilitate remote home management.

1\. Online Course: "Smart Home Sovereign"
The initial phase of the study involved the completion of the online course "Smart Home Sovereign." This course provided comprehensive guidance on building a sovereign smart home, emphasizing the importance of user data security and privacy. The bachelor successfully completed all the course modules, gaining a thorough understanding of the fundamental concepts and practical aspects related to the construction of a sovereign smart home.

2\. Setting up the IoT Hub
To establish a centralized control system for the smart home devices, an IoT hub was set up on a Raspberry Pi. The Raspberry Pi was selected due to its versatility, low cost, and compatibility with the desired functionalities. The IoT hub acted as the central communication point, facilitating the interaction between the smart devices and the user.

3\. Connectezezezezing Smart Devices
Various smart devices were integrated into the sovereign smart home system. These devices included a temperature/humidity sensor, a door sensor, a smart bulb, and a motion sensor, among others. A Adaptateur Zigbee was utilized to connect these devices to the IoT hub, enabling seamless communication. The MQTT (Message Queuing Telemetry Transport) protocol was employed to establish a reliable and efficient communication channel between the hub and the connected devices.

4\. Integration with Home Assistant
The IoT hub was integrated with Home Assistant, an open-source home automation platform. Home Assistant provided a user-friendly interface for managing and controlling the connected smart devices. This integration allowed the bachelor to monitor and control the devices remotely, enhancing the convenience and functionality of the sovereign smart home system.

5\. Connection to Decentralized Cloud
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

En fin de compte, la meilleure tactique était la sélection manuelle d'éléments de différents plans pour la section, et les nourrir de manière séquentielle et en parties. Il est important de ne pas oublier le contexte, en rappelant que l'assistant IA doit accomplir sa tâche en se basant sur le matériel source.

## Génération d'illustrations

Une bonne thèse est capable de présenter du matériel sous forme graphique, il est donc nécessaire d'au moins essayer de le faire avec l'aide de l'IA. Il y a beaucoup d'écrits sur les capacités de différents modèles, tels que MidJourney, DALL-E, Stable Diffusion, et d'autres services, mais ils sont principalement conçus pour générer de l'art, pas des diagrammes et des graphiques stricts. Très souvent, ils ne peuvent pas insérer le texte correct, et en général, les illustrations obtenues sont souvent trop maladroites.

À titre d'exemple, essayons de créer un diagramme du contenu suivant dans Bing Chat, qui redirigera la demande vers Bing Image Creator:

<RoboAcademyDialog>

Make image with diagram based on this description:

There are 4 main blocks: Raspberry Pi, Smart Devices, Zigbee Adapter and Web3 Decentalized Cloud. Zigbee Adapter is connected by a double-ended arrow to Smart Devices, the arrow has the name "Zigbee".

Inside Raspberry Pi there are 4 more internal blocks: Zigbee2MQTT, MQTT Broker, Home Assistant and "robonomics-interface". Zigbee2MQTT is connected by a double-ended arrow to MQTT Broker, the arrow has the name "MQTT". MQTT Broker is connected by a double-ended arrow to Home Assistant, the arrow has the name "MQTT". Home Assistant is connected by a double-ended arrow to "robonomics-interface", the arrow has the name "Robonomics Data".

Also, internal block Zigbee2MQTT is connected by a double-ended arrow to Zigbee Adapter, the arrow has the name "Zigbee". Internal block "robonomics-interface" is connected by a double-ended arrow to Web3 Decentalized Cloud, the arrow has the name "data & events".

</RoboAcademyDialog>

Résultats:

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

Il est préférable de demander de créer du code pour un diagramme, par exemple en UML, puis de générer une illustration dans un éditeur de diagrammes. Par exemple, une demande similaire dans ChatGPT avec l'ajout de `Créer du code de diagramme UML basé sur cette description`, après plusieurs tentatives, a produit le résultat suivant:

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

## Génération de code

Bien qu'un assistant IA ne puisse pas configurer un appareil par lui-même, il peut être demandé de l'aider à écrire un logiciel pour celui-ci. Pour notre thèse de licence, pour tester la fonctionnalité du logiciel domotique installé, nous avons décidé de créer une automatisation pour Home Assistant basée sur un scénario. La demande suivante a été envoyée à AutoGPT:

<RoboAcademyTerminal title="AutoGPT Terminal">

AI Name: Hass-GPT 

Hass-GPT is: an AI that creates automation scripts for Home Assistant based on the text description

Goal 1: Open https://www.home-assistant.io/examples/ and analyze script codes of automations

Goal 2: Create automation script code with following scenario: turn on the bulb when motion sensor detects someone; while motion is present, keep the bulb turned on; when the motion stops, turn the bulb off

Goal 3: Write this code to the file and return it back

</RoboAcademyTerminal>

En conséquence d'AutoGPT, le script suivant a été généré:

<LessonCodeWrapper language="yaml" noCopyIcon codeClass="big-code">
    - alias: "Capteur de Mouvement Bulb Control"
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

Bien sûr, le script nécessitait des ajustements supplémentaires pour des entités de capteurs et d'appareils spécifiques, mais dans l'ensemble la demande a été traitée correctement.

<RoboAcademyText>

Ainsi, la pratique a montré que malgré le fait que l'IA ne puisse pas gérer cette section entièrement par elle-même, elle peut au moins grandement aider avec certaines tâches ou fournir des idées pour leurs solutions. Dans la section suivante, nous explorerons comment les outils IA peuvent aider à analyser les résultats obtenus et formater la section correspondante.

</RoboAcademyText>