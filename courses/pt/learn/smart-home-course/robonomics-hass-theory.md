---
title: "Lição #1, Breve Teórica"
lastUpdate: Thu May 04 2023 12:54:41 GMT+0400 (Samara Standard Time)
description: curso de assistente doméstico
lessonNumber: 1
metaOptions: [Aprenda, Casa Inteligente Soberana com Robonomics e Assistente Doméstico]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Componentes Chave da Casa Inteligente Soberana 

<List>

1. **[Raspberry Pi](https://www.raspberrypi.org/), um computador de placa única**.

Podemos converter o dispositivo em um hub IoT após instalar todo o software necessário. O objetivo principal do hub é orquestrar os protocolos, redes, aplicativos e vários dispositivos da casa inteligente.

2. **[Home Assistant](https://www.home-assistant.io/), um software de sistema de controle de código aberto**.

Foi projetado para ser um hub central para dispositivos inteligentes. Ele pode escanear automaticamente a rede em busca de dispositivos conhecidos e permite aos usuários configurar facilmente todas as automações necessárias. Vamos instalar o Home Assistant no Raspberry Pi.

O Home Assistant se comunica com os dispositivos e armazena seus dados localmente, o que infelizmente não permite que você controle seus dispositivos remotamente. Para resolver esse problema, usamos a Rede Robonomics.

3. **[Rede Robonomics](https://robonomics.network/), uma nuvem descentralizada para controle seguro e confiável de aplicações IoT**.

Ele utiliza tecnologias web3, que incorporam descentralização e tecnologias de blockchain para a proteção de dispositivos inteligentes e seus dados.

A funcionalidade principal da Robonomics é implementada com base em um blockchain (parachain) do ecossistema Polkadot/Kusama. Entre as principais funções da parachain está a capacidade de enviar um comando para iniciar o dispositivo e ser capaz de armazenar os dados do usuário no blockchain.

A parachain da Robonomics possui um recurso de assinatura IoT que permite aos usuários enviar transações para a parachain, sem taxa, pelo período de um mês. Na seção prática deste curso, você usará o método de assinatura.

A interação entre o hub IoT e a parachain da Robonomics é realizada usando [robonomics-interface](https://github.com/Multi-Agent-io/Robonomics-interface) — biblioteca Python especializada em interagir com a Robonomics para programação conveniente.

4. **[Sistema de Arquivo Interplanetário](https://ipfs.tech/) (IPFS), um software peer-to-peer para armazenar e compartilhar dados em um sistema de arquivo distribuído**.

O IPFS é necessário para evitar armazenar arquivos grandes no blockchain (pois seria muito caro), mas em vez disso, podemos armazenar os hashes IPFS dos arquivos, que funcionam como links para esses arquivos.

## Protocolos para Dispositivos Inteligentes
Você usará dois protocolos principais para dispositivos inteligentes:

1. **[Zigbee](https://csa-iot.org/all-solutions/zigbee/), um protocolo de comunicação sem fio.**

É muito comumente usado para conectar dispositivos inteligentes. É projetado para baixo consumo de energia, facilidade e flexibilidade de configuração, e suporta topologia de rede mesh auto-organizável e auto-recuperável. Milhares de dispositivos estão disponíveis no mercado com suporte Zigbee, o que o torna muito atraente para construir soluções de casa inteligente. Para controlar dispositivos Zigbee, você precisa de um gateway que transfira dados entre a rede Zigbee e outra rede (ou seja, Wi-Fi).

2. **[Message Queuing Telemetry Transport](https://mqtt.org/) (MQTT), um protocolo de publicação e subscrição projetado para controlar aplicações IoT.**

O protocolo é leve, requer recursos mínimos e garante confiabilidade na entrega de mensagens. O protocolo é projetado para redes de baixa largura de banda, alta latência e não confiáveis, o que o torna uma excelente opção para operar grandes volumes de mensagens de sensores. MQTT requer um servidor que execute o broker MQTT (no nosso caso, ele funcionará com o nosso Raspberry Pi). O broker recebe todas as mensagens dos clientes MQTT e então roteia as mensagens para os clientes inscritos apropriados.

## Opções para Conexão Zigbee
Você explorará dois cenários para conectar dispositivos ao Home Assistant com Robonomics.

1. O primeiro cenário não usa um gateway Zigbee separado para conectar dispositivos. Em vez disso, é usado uma combinação de um [adaptador Zigbee](https://www.zigbee2mqtt.io/guide/adapters/) e o software [Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/adapters/).

<LessonImages figure figureCaption="Architectural scheme of the scenario with Zigbee adapter" src="smart-house-course/lesson-1-1.png" alt="Architectural scheme of the scenario with Zigbee adapter"/>

Um adaptador (como o JetHome USB JetStick Z2) se conecta ao Raspberry Pi e atua como uma interface entre o computador e a comunicação de rádio Zigbee. O Zigbee2MQTT é um software que permite conectar Zigbee a redes MQTT. Ele pega mensagens da rede Zigbee e as traduz em mensagens fáceis de usar e bem estruturadas de MQTT.

2. No segundo cenário, os dispositivos são conectados usando o [Gateway SLS](https://github.com/slsys/Gateway) baseado no microcontrolador ESP32. Para facilitar o uso, a Robonomics desenvolveu nossa [própria modificação](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01) do gateway.

<LessonImages figure figureCaption="Architectural scheme of the scenario with SLS Gateway" src="smart-house-course/lesson-1-2.png" alt="Architectural scheme of the scenario with SLS Gateway"/>

O gateway SLS atua como coordenador de mensagens do protocolo Zigbee e permite o uso da maioria dos equipamentos Zigbee disponíveis. Para integração com o Home Assistant, o protocolo MQTT é usado.

## Controle Remoto

O controle remoto de uma casa inteligente é realizado usando o [aplicativo descentralizado Robonomics](https://dapp.robonomics.network/) (dapp), que fornece acesso às funções da parachain de forma amigável ao usuário. A segurança e imutabilidade dos dados do usuário são garantidas, por um lado, enviando dados criptografados para o IPFS (que só podem ser descriptografados pela chave do usuário), e por outro lado, colocando o hash IPFS desses dados na blockchain.

</List>



