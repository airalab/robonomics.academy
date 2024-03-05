---
title: "Escritura: Métodos"
description: Inicie rápidamente su tesis de licenciatura con herramientas impulsadas por IA
metaOptions: [Aprendiendo, Inicie rápidamente su tesis de licenciatura con herramientas impulsadas por IA]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Estamos comenzando a escribir la sección principal de toda la tesis de licenciatura, en la que los estudiantes deben demostrar sus habilidades y trabajo completado.
</RoboAcademyText>

Se espera que esta sección no pueda ser completamente confiada al asistente de IA, al menos por la razón de que estas herramientas (actualmente) no pueden configurar y lanzar diferentes dispositivos físicos (principalmente sensores y dispositivos inteligentes). Sin embargo, consideraremos varias tácticas que pueden facilitar la preparación de esta sección.

## Generando texto para la sección de Métodos

En primer lugar, se intentó obtener al menos algo de texto para esta sección. Como se mencionó anteriormente, la tesis de licenciatura se basa en el curso **"Hogar inteligente soberano con Robonomics y Home Assistant"**, por lo que es deseable alimentar todo el curso al asistente de IA para formar el contexto correcto. Una vez más, nos encontramos con el problema de las limitaciones de contexto:

- Auto-GPT no pudo verificar adecuadamente el sitio web del curso por sí solo, cambiando constantemente a subtareas o perdiendo el contexto. El intento de alimentar el texto del curso como un archivo también encontró el problema de un contexto demasiado grande.
- Bing Chat tiene un límite de 2000-4000 caracteres, y la solicitud de verificar el sitio web del curso en línea se limitó a una revisión superficial.
- ChatGPT tampoco aceptó un texto demasiado grande.

Como resultado, se eligió la táctica de alimentar el texto del curso por lecciones, especificando la necesidad de memorizar el contexto de las lecciones. Si no se hacen solicitudes adicionales, los asistentes de IA sugieren de inmediato un plan para escribir la sección de Métodos. Aquí hay algunos ejemplos:

<RoboAcademyDialog>

Methods

This section presents the methods employed to achieve the objectives of the study, which involved building a sovereign smart home with enhanced security and privacy features. The study was conducted as part of an online course titled "Smart Home Sovereign." The methods encompassed the setup of an IoT hub on a Raspberry Pi, connection of various smart devices to the hub using a Adaptador Zigbee and the MQTT protocol, integration of the hub with Home Assistant software, and the establishment of a connection between the hub and a decentralized cloud based on Polkadot web3 technology. These steps were taken to enable secure data transfer to the network and facilitate remote home management.

1\. Online Course: "Smart Home Sovereign"
The initial phase of the study involved the completion of the online course "Smart Home Sovereign." This course provided comprehensive guidance on building a sovereign smart home, emphasizing the importance of user data security and privacy. The bachelor successfully completed all the course modules, gaining a thorough understanding of the fundamental concepts and practical aspects related to the construction of a sovereign smart home.

2\. Setting up the IoT Hub
To establish a centralized control system for the smart home devices, an IoT hub was set up on a Raspberry Pi. The Raspberry Pi was selected due to its versatility, low cost, and compatibility with the desired functionalities. The IoT hub acted as the central communication point, facilitating the interaction between the smart devices and the user.

3\. Conectaring Smart Devices
Various smart devices were integrated into the sovereign smart home system. These devices included a temperature/humidity sensor, a door sensor, a smart bulb, and a motion sensor, among others. A Adaptador Zigbee was utilized to connect these devices to the IoT hub, enabling seamless communication. The MQTT (Message Queuing Telemetry Transport) protocol was employed to establish a reliable and efficient communication channel between the hub and the connected devices.

4\. Integration with Home Assistant
The IoT hub was integrated with Home Assistant, an open-source home automation platform. Home Assistant provided a user-friendly interface for managing and controlling the connected smart devices. This integration allowed the bachelor to monitor and control the devices remotely, enhancing the convenience and functionality of the sovereign smart home system.

5\. Conectarion to Decentralized Cloud
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

Como resultado, la mejor táctica fue la selección manual de elementos de diferentes planes para la sección, y alimentarlos de manera secuencial y por partes. Es importante no olvidar el contexto, recordando que el asistente de IA debe realizar su tarea basándose en el material fuente.

## Generando ilustraciones

Una buena tesis es capaz de presentar material de forma gráfica, por lo que es necesario al menos intentarlo con la ayuda de la IA. Se ha escrito mucho sobre las capacidades de diferentes modelos, como MidJourney, DALL-E, Stable Diffusion y otros servicios, pero están diseñados principalmente para generar arte, no diagramas y gráficos estrictos. Muy a menudo, no pueden insertar el texto correcto, y en general, las ilustraciones obtenidas suelen ser demasiado torpes.

Como ejemplo, intentemos crear un diagrama del siguiente contenido en Bing Chat, que redirigirá la solicitud al Creador de Imágenes de Bing:

<RoboAcademyDialog>

Make image with diagram based on this description:

There are 4 main blocks: Raspberry Pi, Smart Devices, Zigbee Adapter and Web3 Decentalized Cloud. Zigbee Adapter is connected by a double-ended arrow to Smart Devices, the arrow has the name "Zigbee".

Inside Raspberry Pi there are 4 more internal blocks: Zigbee2MQTT, MQTT Broker, Home Assistant and "robonomics-interface". Zigbee2MQTT is connected by a double-ended arrow to MQTT Broker, the arrow has the name "MQTT". MQTT Broker is connected by a double-ended arrow to Home Assistant, the arrow has the name "MQTT". Home Assistant is connected by a double-ended arrow to "robonomics-interface", the arrow has the name "Robonomics Data".

Also, internal block Zigbee2MQTT is connected by a double-ended arrow to Zigbee Adapter, the arrow has the name "Zigbee". Internal block "robonomics-interface" is connected by a double-ended arrow to Web3 Decentalized Cloud, the arrow has the name "data & events".

</RoboAcademyDialog>

Resultados:

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

Es mejor pedir que se cree código para un diagrama, por ejemplo en UML, y luego generar una ilustración en un editor de diagramas. Por ejemplo, una solicitud similar en ChatGPT con la adición de `Hacer código de diagrama UML basado en esta descripción`, después de varios intentos, produjo el siguiente resultado:

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

## Generando código

Aunque un asistente de IA no puede configurar un dispositivo por sí solo, se le puede pedir que ayude a escribir software para ello. Para nuestra tesis de licenciatura, para probar la funcionalidad del software instalado en el hogar inteligente, decidimos crear una automatización para Home Assistant basada en un escenario. La siguiente solicitud se envió a AutoGPT:

<RoboAcademyTerminal title="AutoGPT Terminal">

AI Name: Hass-GPT 

Hass-GPT is: an AI that creates automation scripts for Home Assistant based on the text description

Goal 1: Open https://www.home-assistant.io/examples/ and analyze script codes of automations

Goal 2: Create automation script code with following scenario: turn on the bulb when motion sensor detects someone; while motion is present, keep the bulb turned on; when the motion stops, turn the bulb off

Goal 3: Write this code to the file and return it back

</RoboAcademyTerminal>

Como resultado de AutoGPT, se generó el siguiente script:

<LessonCodeWrapper language="yaml" noCopyIcon codeClass="big-code">
    - alias: "Sensor de Movimiento Bulb Control"
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

Por supuesto, el script requirió ajustes adicionales para entidades de sensores y dispositivos específicos, pero en general la solicitud fue procesada correctamente.

<RoboAcademyText>

Por lo tanto, la práctica ha demostrado que a pesar de que la IA no puede manejar esta sección completamente por sí sola, al menos puede ayudar en gran medida con algunas tareas o proporcionar ideas para sus soluciones. En la siguiente sección, exploraremos cómo las herramientas de IA pueden ayudar a analizar los resultados obtenidos y formatear la sección correspondiente.

</RoboAcademyText>