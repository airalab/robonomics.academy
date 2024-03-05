---
title: "Leçon n°1, Briefing théorique"
lastUpdate: Thu May 04 2023 12:54:41 GMT+0400 (Samara Standard Time)
description: cours d'assistant domestique
lessonNumber: 1
metaOptions: [Apprenez, Maison Intelligente Souveraine avec Robonomics et Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Composants clés de la maison intelligente souveraine 

<List>

1. **[Raspberry Pi](https://www.raspberrypi.org/), un ordinateur monocarte**.

Nous pouvons convertir l'appareil en un concentrateur IoT après avoir installé tous les logiciels nécessaires. Le but principal du concentrateur est d'orchestrer les protocoles, les réseaux, les applications et les différents appareils de la maison intelligente.

2. **[Home Assistant](https://www.home-assistant.io/), un logiciel de système de contrôle open source**.

Il est conçu pour être un concentrateur central pour les appareils intelligents. Il peut scanner automatiquement le réseau pour les appareils connus et permet aux utilisateurs de configurer facilement toutes les automatisations nécessaires. Nous installerons Home Assistant sur le Raspberry Pi.

Home Assistant communique avec les appareils et stocke leurs données localement, ce qui malheureusement ne vous permet pas de contrôler vos appareils à distance. Pour résoudre ce problème, nous utilisons Robonomics Network.

3. **[Robonomics Network](https://robonomics.network/), un cloud décentralisé pour le contrôle sécurisé et fiable des applications IoT**.

Il utilise des technologies web3, qui intègrent la décentralisation et les technologies de la blockchain pour la protection des appareils intelligents et de leurs données.

La fonctionnalité principale de Robonomics est mise en œuvre sur la base d'une blockchain (parachain) de l'écosystème Polkadot/Kusama. Parmi les principales fonctions de la parachain, il y a la capacité d'envoyer une commande pour lancer l'appareil et de stocker les données utilisateur sur la blockchain.

La parachain Robonomics dispose d'une fonction d'abonnement IoT qui permet aux utilisateurs d'envoyer des transactions à la parachain, sans frais, pour une durée d'un mois. Dans la section pratique de ce cours, vous utiliserez la méthode d'abonnement.

L'interaction entre le concentrateur IoT et la parachain Robonomics est réalisée en utilisant [robonomics-interface](https://github.com/Multi-Agent-io/Robonomics-interface) — une bibliothèque Python spécialisée dans l'interface avec Robonomics pour une programmation pratique.

4. **[InterPlanetary File System](https://ipfs.tech/) (IPFS), un logiciel pair à pair pour stocker et partager des données dans un système de fichiers distribué**.

IPFS est nécessaire pour éviter de stocker de gros fichiers sur la blockchain (car cela serait trop cher), mais au lieu de cela, nous pouvons stocker les hachages IPFS des fichiers, qui agissent comme des liens vers ces fichiers.

## Protocoles pour les appareils intelligents
Vous utiliserez deux protocoles principaux pour les appareils intelligents:

1. **[Zigbee](https://csa-iot.org/all-solutions/zigbee/), un protocole de communication sans fil.**

Il est très couramment utilisé pour connecter des appareils intelligents. Il est conçu pour une faible consommation d'énergie, une facilité d'utilisation et une flexibilité de configuration, et prend en charge une topologie de réseau maillé auto-organisant et autorécupérant. Des milliers d'appareils sont disponibles sur le marché avec le support Zigbee, ce qui le rend très attractif pour la construction de solutions domotiques. Pour contrôler les appareils Zigbee, vous avez besoin d'une passerelle qui transfère les données entre le réseau Zigbee et un autre réseau (par exemple Wi-Fi).

2. **[Message Queuing Telemetry Transport](https://mqtt.org/) (MQTT), un protocole de publication-abonnement conçu pour contrôler les applications IoT.**

Le protocole est léger, nécessite des ressources minimales et garantit la fiabilité de la livraison des messages. Le protocole est conçu pour les réseaux à faible bande passante, à latence élevée et peu fiables, ce qui en fait une excellente option pour le fonctionnement de grands volumes de messages de capteurs. MQTT nécessite un serveur qui exécute le courtier MQTT (dans notre cas, il fonctionnera avec notre Raspberry Pi). Le courtier reçoit tous les messages des clients MQTT et route ensuite les messages vers les clients abonnés appropriés.

## Options de connexion Zigbee
Vous explorerez deux scénarios pour connecter des appareils à Home Assistant avec Robonomics.

1. Le premier scénario n'utilise pas de passerelle Zigbee séparée pour connecter les appareils. Au lieu de cela, une combinaison d'un [adaptateur Zigbee](https://www.zigbee2mqtt.io/guide/adapters/) et du logiciel [Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/adapters/) est utilisée.

<LessonImages figure figureCaption="Architectural scheme of the scenario with Zigbee adapter" src="smart-house-course/lesson-1-1.png" alt="Architectural scheme of the scenario with Zigbee adapter"/>

Un adaptateur (tel que le JetHome USB JetStick Z2) se connecte au Raspberry Pi et sert d'interface entre l'ordinateur et la communication radio Zigbee. Zigbee2MQTT est un logiciel qui permet de connecter Zigbee aux réseaux MQTT. Il prend les messages du réseau Zigbee et les traduit en messages MQTT faciles à utiliser et bien structurés.

2. Dans le deuxième scénario, les appareils sont connectés en utilisant la [passerelle SLS](https://github.com/slsys/Gateway) basée sur le microcontrôleur ESP32. Pour plus de facilité d'utilisation, Robonomics a développé notre [propre modification](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01) de la passerelle.

<LessonImages figure figureCaption="Architectural scheme of the scenario with SLS Gateway" src="smart-house-course/lesson-1-2.png" alt="Architectural scheme of the scenario with SLS Gateway"/>

La passerelle SLS agit comme le coordinateur des messages du protocole Zigbee et permet l'utilisation de la plupart des équipements Zigbee disponibles. Pour l'intégration avec Home Assistant, le protocole MQTT est utilisé.

## Contrôle à distance

Le contrôle à distance d'une maison intelligente est effectué en utilisant l'[application décentralisée Robonomics](https://dapp.robonomics.network/) (dapp), qui fournit un accès aux fonctions de parachain de manière conviviale. La sécurité et l'immutabilité des données utilisateur sont assurées d'une part en envoyant des données chiffrées à IPFS (qui ne peuvent être déchiffrées que par la clé de l'utilisateur), et d'autre part en plaçant le hachage IPFS de ces données sur la blockchain.

</List>



