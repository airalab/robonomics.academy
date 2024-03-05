---
title: "Escrita: Métodos"
description: Inicie rapidamente sua tese de bacharelado com ferramentas alimentadas por IA
metaOptions: [Aprenda, inicie rapidamente sua tese de bacharelado com ferramentas alimentadas por IA]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Estamos começando a escrever a seção principal de toda a tese de bacharelado, na qual os alunos devem demonstrar suas habilidades e trabalho concluído.
</RoboAcademyText>

Espera-se que esta seção não possa ser completamente confiada ao assistente de IA, pelo menos pelo motivo de que essas ferramentas (atualmente) não podem configurar e lançar diferentes dispositivos físicos (principalmente sensores e dispositivos inteligentes). No entanto, consideraremos várias táticas que podem facilitar a preparação desta seção.

## Gerando texto para a seção de Métodos

Primeiramente, foi feita uma tentativa de obter pelo menos algum texto para esta seção. Como mencionado anteriormente, a tese de bacharelado é baseada no curso **"Casa Inteligente Soberana com Robonomics e Home Assistant"**, então é desejável alimentar todo o curso ao assistente de IA para formar o contexto correto. Mais uma vez, encontramos o problema das limitações de contexto:

- O Auto-GPT não foi capaz de verificar adequadamente o site do curso por conta própria, constantemente alternando para subtarefas ou perdendo o contexto. A tentativa de alimentar o texto do curso como um arquivo também encontrou o problema de um contexto muito grande.
- O Bing Chat tem um limite de 2000-4000 caracteres, e a solicitação para verificar o site do curso online foi limitada a uma visão superficial.
- O ChatGPT também não aceitou um texto muito grande.

Como resultado, a tática de alimentar o texto do curso por lições foi escolhida, especificando a necessidade de memorizar o contexto das lições. Se nenhuma solicitação adicional for feita, os assistentes de IA imediatamente sugerem um plano para escrever a seção de Métodos. Aqui estão alguns exemplos:

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

Como resultado, a melhor tática foi a seleção manual de itens de diferentes planos para a seção, e alimentá-los sequencialmente e em partes. É importante não esquecer o contexto, lembrando que o assistente de IA deve realizar sua tarefa com base no material de origem.

## Gerando ilustrações

Uma boa tese é capaz de apresentar material de forma gráfica, então é necessário pelo menos tentar fazê-lo com a ajuda da IA. Há muito escrito sobre as capacidades de diferentes modelos, como MidJourney, DALL-E, Stable Diffusion e outros serviços, mas eles são principalmente projetados para gerar arte, não diagramas e gráficos rigorosos. Muitas vezes, eles não conseguem inserir o texto correto, e, em geral, as ilustrações obtidas são frequentemente muito desajeitadas.

Como exemplo, vamos tentar criar um diagrama do seguinte conteúdo no Bing Chat, que redirecionará a solicitação para o Bing Image Creator:

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

É melhor pedir para criar código para um diagrama, por exemplo em UML, e depois gerar uma ilustração em um editor de diagramas. Por exemplo, uma solicitação semelhante no ChatGPT com a adição de `Criar código de diagrama UML com base nesta descrição`, após várias tentativas, produziu o seguinte resultado:

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

## Gerando Código

Embora um assistente de IA não possa configurar um dispositivo por conta própria, ele pode ser solicitado a ajudar a escrever software para ele. Para nossa tese de bacharelado, para testar a funcionalidade do software de casa inteligente instalado, decidimos criar uma automação para o Home Assistant com base em um cenário. A seguinte solicitação foi enviada para o AutoGPT:

<RoboAcademyTerminal title="AutoGPT Terminal">

AI Name: Hass-GPT 

Hass-GPT is: an AI that creates automation scripts for Home Assistant based on the text description

Goal 1: Open https://www.home-assistant.io/examples/ and analyze script codes of automations

Goal 2: Create automation script code with following scenario: turn on the bulb when motion sensor detects someone; while motion is present, keep the bulb turned on; when the motion stops, turn the bulb off

Goal 3: Write this code to the file and return it back

</RoboAcademyTerminal>

Como resultado do AutoGPT, o seguinte script foi gerado:

<LessonCodeWrapper language="yaml" noCopyIcon codeClass="big-code">
    - alias: "Sensor de Movimento Bulb Control"
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

Claro, o script exigiu ajustes adicionais para entidades de sensores e dispositivos específicos, mas no geral a solicitação foi processada corretamente.

<RoboAcademyText>

Portanto, a prática mostrou que apesar do fato de que a IA não pode lidar completamente com esta seção por conta própria, ela pode pelo menos ajudar muito com algumas tarefas ou fornecer ideias para suas soluções. Na próxima seção, exploraremos como as ferramentas de IA podem ajudar a analisar os resultados obtidos e formatar a seção correspondente.

</RoboAcademyText>