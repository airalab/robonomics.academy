---
title: "Lezione #1, Briefing Teorico"
lastUpdate: Thu May 04 2023 12:54:41 GMT+0400 (Samara Standard Time)
description: corso di assistente domestico
lessonNumber: 1
metaOptions: [Impara, Casa Intelligente Sovrana con Robonomics e Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Componenti chiave della Smart Home sovrana 

<List>

1. **[Raspberry Pi](https://www.raspberrypi.org/), un computer a scheda singola**.

Possiamo convertire il dispositivo in un hub IoT dopo aver installato tutto il software necessario. Lo scopo principale dell'hub è orchestrare i protocolli, le reti, le applicazioni e vari dispositivi della casa intelligente.

2. **[Home Assistant](https://www.home-assistant.io/), un software di sistema di controllo open source**.

È progettato per essere un hub centrale per i dispositivi intelligenti. Può scansionare automaticamente la rete per individuare i dispositivi conosciuti e consente agli utenti di configurare facilmente tutte le automazioni necessarie. Installeremo Home Assistant sul Raspberry Pi.

Home Assistant comunica con i dispositivi e memorizza i loro dati in locale, il che purtroppo non ti consente di controllare i tuoi dispositivi a distanza. Per risolvere questo problema utilizziamo Robonomics Network.

3. **[Robonomics Network](https://robonomics.network/), un cloud decentralizzato per il controllo sicuro e affidabile delle applicazioni IoT**.

Utilizza tecnologie web3, che incorporano decentralizzazione e tecnologie blockchain per la protezione dei dispositivi intelligenti e dei loro dati.

La funzionalità principale di Robonomics è implementata sulla base di una blockchain (parachain) dell'ecosistema Polkadot/Kusama. Tra le principali funzioni della parachain c'è la possibilità di inviare un comando per avviare il dispositivo e di poter memorizzare i dati dell'utente sulla blockchain.

La parachain di Robonomics ha una funzione di abbonamento IoT che consente agli utenti di inviare transazioni alla parachain, senza alcuna commissione, per il periodo di un mese. Nella sezione pratica di questo corso, utilizzerai il metodo di abbonamento.

L'interazione tra l'hub IoT e la parachain di Robonomics avviene tramite [robonomics-interface](https://github.com/Multi-Agent-io/Robonomics-interface) — libreria Python specializzata nell'interfacciarsi con Robonomics per una programmazione conveniente.

4. **[InterPlanetary File System](https://ipfs.tech/) (IPFS), un software peer-to-peer per memorizzare e condividere dati in un sistema di file distribuito**.

IPFS è necessario per evitare di memorizzare file di grandi dimensioni sulla blockchain (poiché sarebbe troppo costoso), ma invece possiamo memorizzare gli hash IPFS dei file, che fungono da collegamenti a questi file.

## Protocolli per dispositivi intelligenti
Utilizzerai due protocolli principali per dispositivi intelligenti:

1. **[Zigbee](https://csa-iot.org/all-solutions/zigbee/), un protocollo di comunicazione wireless.**

Viene comunemente utilizzato per collegare dispositivi intelligenti. È progettato per il basso consumo energetico, la facilità di configurazione e flessibilità, e supporta una topologia di rete a maglia auto-organizzante e auto-ripristinante. Sono disponibili migliaia di dispositivi sul mercato con supporto Zigbee, il che lo rende molto attraente per la creazione di soluzioni smart home. Per controllare i dispositivi Zigbee è necessario un gateway che trasferisca i dati tra la rete Zigbee e un'altra rete (ad esempio Wi-Fi).

2. **[Message Queuing Telemetry Transport](https://mqtt.org/) (MQTT), un protocollo di pubblicazione-sottoscrizione progettato per controllare le applicazioni IoT.**

Il protocollo è leggero, richiede risorse minime e garantisce l'affidabilità della consegna dei messaggi. Il protocollo è progettato per reti a bassa larghezza di banda, alta latenza, non affidabili, il che lo rende un'ottima opzione per gestire grandi volumi di messaggi dei sensori. MQTT richiede un server che esegue il broker MQTT (nel nostro caso funzionerà con il nostro Raspberry Pi). Il broker riceve tutti i messaggi dai client MQTT e quindi instrada i messaggi ai client sottoscritti appropriati.

## Opzioni per la connessione Zigbee
Esplorerai due scenari per collegare i dispositivi a Home Assistant con Robonomics.

1. Il primo scenario non utilizza un gateway Zigbee separato per collegare i dispositivi. Invece, viene utilizzata una combinazione di un [adattatore Zigbee](https://www.zigbee2mqtt.io/guide/adapters/) e il software [Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/adapters/).

<LessonImages figure figureCaption="Architectural scheme of the scenario with Zigbee adapter" src="smart-house-course/lesson-1-1.png" alt="Architectural scheme of the scenario with Zigbee adapter"/>

Un adattatore (come il JetHome USB JetStick Z2) si collega al Raspberry Pi e funge da interfaccia tra il computer e la comunicazione radio Zigbee. Zigbee2MQTT è un software che consente di collegare Zigbee alle reti MQTT. Prende i messaggi dalla rete Zigbee e li traduce in messaggi di MQTT facili da usare e ben strutturati.

2. Nel secondo scenario, i dispositivi vengono collegati utilizzando il [Gateway SLS](https://github.com/slsys/Gateway) basato sul microcontrollore ESP32. Per facilità d'uso, Robonomics ha sviluppato la nostra [modifica](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01) del gateway.

<LessonImages figure figureCaption="Architectural scheme of the scenario with SLS Gateway" src="smart-house-course/lesson-1-2.png" alt="Architectural scheme of the scenario with SLS Gateway"/>

Il gateway SLS funge da coordinatore dei messaggi del protocollo Zigbee e consente l'uso della maggior parte dell'attrezzatura Zigbee disponibile. Per l'integrazione con Home Assistant, viene utilizzato il protocollo MQTT.

## Controllo remoto

Il controllo remoto di una smart home viene eseguito utilizzando l'[applicazione decentralizzata Robonomics](https://dapp.robonomics.network/) (dapp), che fornisce accesso alle funzioni della parachain in modo user-friendly. La sicurezza e l'immutabilità dei dati dell'utente sono garantite da un lato dall'invio di dati crittografati a IPFS (che possono essere decifrati solo dalla chiave dell'utente), e dall'altro dalla collocazione dell'hash IPFS di questi dati sulla blockchain.

</List>



