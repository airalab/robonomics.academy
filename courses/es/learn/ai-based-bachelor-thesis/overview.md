---
title: Visión general
description: Inicie rápidamente su tesis de licenciatura con herramientas impulsadas por IA
metaOptions: [Aprender, Inicie rápidamente su tesis de licenciatura con herramientas impulsadas por IA]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Entonces, lo que temías sucedió.
</RoboAcademyText>

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmW6qohyJvUF2c3EwhVWZXghArAZQ6KkBsbqT41QRgJRAh', type: 'webm'}]" />

Necesitas presentar un trabajo de texto voluminoso y la fecha límite está muy cerca. O tal vez la situación es diferente: la fecha límite de presentación puede no ser tan aterradora, pero escribir materiales extensos, especialmente con contenido formal y técnico, te hace estremecer y posponer la tarea durante mucho tiempo. De una forma u otra, tienes que pasar por un proceso bastante largo, monótono y a menudo muy aburrido que oscurece tu motivación. Quizás te gustaría dedicar más tiempo a tareas creativas y de desarrollo, pero desafortunadamente, algunas profesiones y actividades están estructuradas de esa manera.

## Ingresando a la IA

Afortunadamente para todos nosotros, el progreso que ha estado facilitando nuestras tareas rutinarias a lo largo de la historia ha llegado al ámbito de la escritura de textos. Esta vez es posible gracias a los avances en inteligencia artificial, específicamente modelos de lenguaje generativos, capaces de comprender y resolver solicitudes y proporcionar respuestas más o menos significativas en un formato de chat. En Robonomics, simplemente no podíamos ignorar algo que podría elevar el nivel de automatización en la comunicación e interacción entre seres vivos y máquinas (¡y también facilitar nuestras tareas diarias!).

Los últimos modelos de GPT impresionan con sus capacidades, pero surge la pregunta de cómo usarlos correctamente y, lo más importante, en qué medida se puede confiar en ellos. Estas habilidades se llaman ingeniería de indicaciones, y con este propósito, presentamos esta guía, que te llevará hacia una comprensión básica de las posibilidades de la inteligencia artificial generativa actual.

En esta guía, intentaremos escribir una tesis de licenciatura simple, basada en la rama de conocimiento de nuestro "licenciado" y el material inicial que el licenciado ha pasado. Ciertamente intentaremos adherirnos a reglas académicas mínimas, pero dos semanas (que es el tiempo planificado para esta guía) ciertamente no es suficiente para considerar exitosa la tesis de licenciatura (aunque a veces la realidad demuestra lo contrario). 

Sin embargo, esta guía puede considerarse un buen punto de partida para comprender cuáles son los procesos más rutinarios y que consumen más tiempo que la IA ya puede suavizar. Por cierto, no tienes que limitarte a la tarea de una tesis de licenciatura: esta guía será útil para cualquier trabajo de texto siguiendo el estándar IMRaD (Introducciónducciónducciónducciónducciónducciónducción, Método, Resultados, Discusión): publicaciones en revistas y conferencias, tesis de doctorado, informes técnicos, manuales, etc.

<RoboAcademyNote title="DISCLAIMER" type="warning">
  La guía no garantiza ni tiene como objetivo una presentación exitosa de una tesis de licenciatura con una calificación superior.
</RoboAcademyNote>

## Herramientas utilizadas

Entre los servicios de IA que se utilizaron en la guía:

**[ChatGPT](https://chat.openai.com/chat)** — un chatbot basado en el modelo de lenguaje Generative Pre-trained Transformer (ver. 3.5 y 4) creado por OpenAI. Opera en un formato de chat con el usuario, respondiendo a sus solicitudes que pueden variar desde preguntas simples hasta componer poesía y depurar el código del usuario. Su conocimiento está limitado a septiembre de 2021, ya que no tiene acceso a Internet. El uso básico es gratuito, pero requiere registro con un número de teléfono (no disponible en algunos países). Tiene una opción de suscripción ($20 al mes) con funciones más potentes y la capacidad de agregar complementos, como para acceder a Wolfram o Slack.

**[Bing Chat](http://www.bing.com)** — un chatbot basado en GPT-4 integrado en el servicio de búsqueda de Microsoft Bing. Se requiere una cuenta de Microsoft para acceder. Esencialmente, tiene las mismas capacidades que ChatGPT, pero con acceso a Internet, lo que lo hace más potente.

**[Auto-GPT](https://news.agpt.co/)** — un software que utiliza GPT-4 para crear agentes de IA autónomos que resuelven una tarea establecida por el usuario. El agente tiene acceso a Internet, memoria a largo plazo y la capacidad de guardar información en archivos, lo que le permite realizar secuencias complejas de acciones. Para usarlo, se requiere una cuenta en OpenAI, preferiblemente con una suscripción paga. Las instrucciones de instalación están [disponibles aquí](https://docs.agpt.co/setup/).

**[Notion AI](https://www.notion.so/product/ai)** — un asistente de IA integrado en el software de gestión de conocimiento homónimo. Tiene acceso gratuito limitado, mientras que una suscripción cuesta $10 al mes. Es conveniente para procesar y mejorar textos ya preparados, y tiene funciones preinstaladas para este propósito.

Además, necesitaremos los siguientes servicios:

**[Overleaf](http://www.overleaf.com)** — Editor de LaTeX en línea conveniente para formatear texto. Tiene un conjunto de plantillas para cualquier tipo de trabajo (desde tesis y artículos hasta presentaciones). Estaremos utilizando la [Plantilla de Tesis del MIT](https://www.overleaf.com/latex/templates/mit-thesis-template/ytphktgwpktc).

**[Google Scholar](http://scholar.google.com)** — un motor de búsqueda para publicaciones científicas. Se utiliza para verificar fuentes sugeridas por servicios de IA.

## Cómo utilizar herramientas de IA

### Chatbots de IA (ChatGPT, Bing)

Los chatbots de IA (ChatGPT, Bing) no requieren un enfoque particularmente complejo: todo lo que necesitas hacer es formatear la solicitud apropiada y enviarla al chatbot (solo hay un límite en el número de caracteres por mensaje, pero puedes pedirle al chatbot que espere hasta que se envíe todo el texto de la solicitud).

### Notion AI

Para Notion AI, es suficiente insertar un bloque de texto en cualquier página y llamar al menú contextual con solicitudes al asistente de IA.

### Auto-GPT

Auto-GPT requiere un enfoque diferente, ya que el usuario necesita especificar antes de comenzar lo siguiente:

- Nombre del asistente de IA
- Rol del asistente de IA
- Hasta 5 objetivos consecutivos que deben ser completados por el asistente de IA

Después de esto, Auto-GPT lanzará un agente que mostrará al usuario todos los "pensamientos" y acciones realizadas, a saber:

- `THOUGHTS` — una idea general que el agente quiere implementar en la iteración actual
- `REASONING` — una razón por la cual el agente eligió esta idea
- `PLAN` — acciones específicas para lograr la idea (buscar en internet, analizar documentos, escribir en un archivo, etc.)
- `CRITICISM` — condiciones especiales que el agente impone en sus acciones (por ejemplo, "buscar solo referencias de alta calidad de revistas IEEE").

## Primeros Pasos

<RoboAcademyNote title="WARNING" type="warning">
  Las herramientas de IA siguen mejorándose, así que siempre verifica dos veces los resultados que obtienes.
</RoboAcademyNote>

### Alimenta el servicio con un contexto

Una de las ventajas importantes de los últimos servicios de IA es que recuerdan bastante bien el contexto de una solicitud dentro de una sola sesión. Por lo tanto, lo primero que debes hacer para comenzar una tesis de licenciatura es idear un contexto (una "leyenda") y alimentarlo al servicio.

Como material para el trabajo, se tomó el curso ["Hogar inteligente soberano con Robonomics y Home Assistant"](/learn/smart-home-course/overview) en Robonomics Academy como punto de partida. Como resultado, se creó el siguiente contexto:

<RoboAcademyDialog>

I am a student of the Department of IoT Engineering and Web3 Science. 

I am going to get Bachelor of Science in Computer Science and Engineering.

I completed an online course called "Smart Home Sovereign". In this course, I went through all the steps necessary to build my own sovereign smart home, the main advantage of which is the security / privacy of user data.
During the course, I set up an IoT hub on a Raspberry Pi and connected smart devices (such as a temperature/humidity sensor, a door sensor, a smart bulb, a motion sensor, etc.) to it via a Adaptador Zigbee using the MQTT protocol. The IoT hub is powered by Home Assistant software. Next, I connected the hub to a decentralized cloud, based on Polkadot web3 technology. This is necessary to securely transfer device data to the network without the need for a centralized cloud service provider. This allows me to securely manage my home remotely.

Now I want to take this course as a basis and write a bachelor's thesis with your help.

</RoboAcademyDialog>

La reacción típica de un chatbot de IA a este contexto sería sugerir aclarar la solicitud y cómo el servicio puede ayudar.

### Elige un tema de los sugeridos

El siguiente paso (típico para una situación de licenciatura) es elegir un tema para la tesis. Aquí, es suficiente hacer una solicitud de enlace `Propose N topics for my thesis`. ChatGPT y Bing Chat ofrecieron lo siguiente:

<RoboAcademyDialog>

"Designing a Secure and Private Smart Home System using Web3 Technologies" — This topic could involve examining the steps you took to build your sovereign smart home and exploring the security and privacy benefits of using IoT and Web3 technologies.

"Comparing Centralized and Decentralized Approaches to Smart Home Data Management" — This topic could involve comparing and contrasting the benefits and drawbacks of using centralized cloud vendors versus decentralized cloud technologies like Polkadot for managing smart home data.

"Developing a Smart Contract-based Framework for Managing Smart Home Devices" — This topic could involve exploring the use of smart contracts to manage smart home devices and develop a secure and efficient framework for managing them.

"Investigating the Security and Privacy Risks of Smart Home Systems" — This topic could involve examining the potential risks and vulnerabilities of smart home systems, including issues related to data privacy, cybersecurity, and physical safety.

"Exploring the Role of Blockchain in Smart Home Data Management" — This topic could involve examining how blockchain technology could be used to manage smart home data and ensure the security and privacy of user data.

"Investigating the Future of Smart Home Technologies and their Impact on Society" — This topic could involve examining the potential social and economic impacts of smart home technologies, including issues related to privacy, security, and the digital divide.

</RoboAcademyDialog>

Se eligió el tema **"Diseñando un Sistema de Hogar Inteligente Seguro y Privado utilizando Tecnologías Web3"** para la guía.

### Plan simple con estructura IMRaD

A continuación, en principio, podemos proceder a secciones específicas de las tesis, siguiendo la estructura IMRaD. Sin embargo, sería bueno tener un plan más detallado para el trabajo de licenciatura. Esto también se puede solicitar a un servicio de IA. ChatGPT sugirió el siguiente plan, sin condiciones adicionales:


<RoboAcademyDialog>

<ChatGPT/>

1. Introduction
    1. Background and motivation
    2. Research questions and objectives
    3. Significance of the study
2. Literature Review
    1. Visión general of smart home technology and its security and privacy issues
    2. Introduction to web3 technology and its potential benefits for smart homes
    3. Existing research on using web3 technology for smart home security and privacy
3. Methodology
    1. Description of the smart home system design using web3 technology, including hardware and software components
    2. Implementation details and justification for design choices
    3. Evaluation plan for assessing the security and privacy of the system
4. Results and Analysis
    1. Evaluation of the implemented system with respect to security and privacy metrics
    2. Comparison with existing solutions and analysis of strengths and weaknesses
    3. Discussion of limitations and potential areas for improvement
5. Conclusion and Future Work
    1. Summary of the study's contributions and main findings
    2. Implications and significance of the results for the smart home industry and related fields
    3. Recommendations for future research and development
6. Referencias

</RoboAcademyDialog>

<RoboAcademyText>
Con esta preparación completa, ahora podemos pasar a la primera sección de la tesis — la Introducción.
</RoboAcademyText>
  

