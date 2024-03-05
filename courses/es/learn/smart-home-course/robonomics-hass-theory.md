---
title: "Lección #1, Información Teórica"
lastUpdate: Thu May 04 2023 12:54:41 GMT+0400 (Samara Standard Time)
description: curso de asistente doméstico
lessonNumber: 1
metaOptions: [Aprende, Hogar Inteligente Soberano con Robonomics y Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Componentes clave del hogar inteligente soberano 

<List>

1. **[Raspberry Pi](https://www.raspberrypi.org/), una computadora de placa única**.

Podemos convertir el dispositivo en un centro de IoT después de instalar todo el software necesario. El propósito principal del centro es orquestar los protocolos, redes, aplicaciones y varios dispositivos del hogar inteligente.

2. **[Home Assistant](https://www.home-assistant.io/), un software de sistema de control de código abierto**.

Está diseñado para ser un centro central para dispositivos inteligentes. Puede escanear automáticamente la red en busca de dispositivos conocidos y permite a los usuarios configurar fácilmente todas las automatizaciones necesarias. Instalaremos Home Assistant en el Raspberry Pi.

Home Assistant se comunica con los dispositivos y almacena sus datos localmente, lo que desafortunadamente no le permite controlar sus dispositivos de forma remota. Para resolver este problema, utilizamos Robonomics Network.

3. **[Robonomics Network](https://robonomics.network/), una nube descentralizada para el control seguro y confiable de aplicaciones de IoT**.

Utiliza tecnologías web3, que incorpora descentralización y tecnologías blockchain para la protección de dispositivos inteligentes y sus datos.

La funcionalidad principal de Robonomics se implementa en base a una blockchain (parachain) del ecosistema Polkadot/Kusama. Entre las principales funciones de la parachain está la capacidad de enviar un comando para lanzar el dispositivo y poder almacenar los datos del usuario en la blockchain.

La parachain de Robonomics tiene una función de suscripción de IoT que permite a los usuarios enviar transacciones a la parachain, sin cargo, por un período de un mes. En la sección práctica de este curso, utilizarás el método de suscripción.

La interacción entre el centro de IoT y la parachain de Robonomics se logra utilizando [robonomics-interface](https://github.com/Multi-Agent-io/Robonomics-interface) — una biblioteca de Python especializada en la interfaz con Robonomics para una programación conveniente.

4. **[Sistema de Archivos Interplanetario](https://ipfs.tech/) (IPFS), un software peer-to-peer para almacenar y compartir datos en un sistema de archivos distribuido**.

IPFS es necesario para evitar almacenar archivos grandes en la blockchain (ya que sería demasiado caro), pero en su lugar podemos almacenar los hashes IPFS de los archivos, que actúan como enlaces a estos archivos.

## Protocolos para dispositivos inteligentes
Usarás dos protocolos principales para dispositivos inteligentes:

1. **[Zigbee](https://csa-iot.org/all-solutions/zigbee/), un protocolo de comunicación inalámbrica.**

Es muy comúnmente utilizado para conectar dispositivos inteligentes. Está diseñado para un bajo consumo de energía, facilidad y flexibilidad de configuración, y soporta una topología de red de malla autoorganizadora y autorrecuperadora. Miles de dispositivos están disponibles en el mercado con soporte Zigbee, lo que lo hace muy atractivo para construir soluciones de hogar inteligente. Para controlar dispositivos Zigbee necesitas un gateway que transfiera datos entre la red Zigbee y otra red (por ejemplo, Wi-Fi).

2. **[Message Queuing Telemetry Transport](https://mqtt.org/) (MQTT), un protocolo de publicación-suscripción diseñado para controlar aplicaciones de IoT.**

El protocolo es ligero, requiere recursos mínimos y garantiza la fiabilidad de la entrega de mensajes. El protocolo está diseñado para redes de baja capacidad de ancho de banda, alta latencia e inestables, lo que lo convierte en una excelente opción para operar grandes volúmenes de mensajes de sensores. MQTT requiere un servidor que ejecute el broker MQTT (en nuestro caso funcionará con nuestro Raspberry Pi). El broker recibe todos los mensajes de los clientes MQTT y luego enruta los mensajes a los clientes suscritos apropiados.

## Opciones para la conexión Zigbee
Explorarás dos escenarios para conectar dispositivos a Home Assistant con Robonomics.

1. El primer escenario no utiliza un gateway Zigbee separado para conectar dispositivos. En su lugar, se utiliza una combinación de un [adaptador Zigbee](https://www.zigbee2mqtt.io/guide/adapters/) y el software [Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/adapters/).

<LessonImages figure figureCaption="Architectural scheme of the scenario with Zigbee adapter" src="smart-house-course/lesson-1-1.png" alt="Architectural scheme of the scenario with Zigbee adapter"/>

Un adaptador (como el JetHome USB JetStick Z2) se conecta al Raspberry Pi y actúa como una interfaz entre la computadora y la comunicación por radio Zigbee. Zigbee2MQTT es un software que permite conectar Zigbee a redes MQTT. Toma mensajes de la red Zigbee y los traduce en mensajes de MQTT fáciles de usar y bien estructurados.

2. En el segundo escenario, los dispositivos se conectan utilizando el [SLS Gateway](https://github.com/slsys/Gateway) basado en el microcontrolador ESP32. Para facilitar su uso, Robonomics ha desarrollado nuestra [propia modificación](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01) del gateway.

<LessonImages figure figureCaption="Architectural scheme of the scenario with SLS Gateway" src="smart-house-course/lesson-1-2.png" alt="Architectural scheme of the scenario with SLS Gateway"/>

El gateway SLS actúa como coordinador de mensajes del protocolo Zigbee y permite el uso de la mayoría del equipo Zigbee disponible. Para la integración con Home Assistant, se utiliza el protocolo MQTT.

## Control remoto

El control remoto de un hogar inteligente se realiza utilizando la [aplicación descentralizada de Robonomics](https://dapp.robonomics.network/) (dapp), que proporciona acceso a funciones de parachain de una manera fácil de usar. La seguridad e inmutabilidad de los datos del usuario están garantizadas, por un lado, enviando datos encriptados a IPFS (que solo pueden ser descifrados por la clave del usuario), y por otro lado, colocando el hash de IPFS de estos datos en la cadena de bloques.

</List>



