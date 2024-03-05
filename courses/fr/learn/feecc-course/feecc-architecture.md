---
title: "Architecture"
description: Ce cours consiste à découvrir le système Feecc et tous ses composants.
metaOptions: [Apprendre, s'habituer à Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
Dans cette leçon, nous allons examiner de plus près l'architecture de Feecc et examiner tous les composants du logiciel.
</RoboAcademyText>

La plateforme Feecc se compose de plusieurs services, du contrôle du banc de travail de l'ingénieur à la fourniture d'analyses. Chaque service est responsable d'un type de fonctionnalité requis pour le déploiement dans un environnement d'entreprise.

## Banc de travail de l'ingénieur Feecc

La tâche principale du banc de travail de l'ingénieur est d'organiser l'espace de travail de l'ingénieur d'assemblage. Selon la tâche, l'ingénieur peut avoir besoin des appareils suivants:

- Caméra IP pour organiser l'enregistrement vidéo du processus de production;
- Lecteur RFID pour l'identification dans le système par carte RFID personnelle;
- Lecteur de codes-barres pour scanner les étiquettes des produits;
- Imprimante d'étiquettes pour étiqueter les produits fabriqués;
- Capteurs numériques collectant des données à partir de différents appareils / stations.

Le logiciel du banc de travail de l'ingénieur se compose généralement des conteneurs suivants. Tout d'abord, le logiciel qui nécessite une installation **sur l'ordinateur sur lequel l'employé travaille** lors de l'assemblage du produit:

1. [feecc-workbench-daemon](https://github.com/Multi-Agent-io/feecc-workbench-daemon) — le cœur de la plateforme Feecc qui fournit aux utilisateurs l'accès à toutes les fonctionnalités et configurations de Feecc; il contient également des services légers pour l'impression d'étiquettes à l'aide d'une imprimante d'étiquettes et l'enregistrement vidéo à partir de flux RTSP;
2. [feecc-workbench-frontend](https://github.com/Multi-Agent-io/feecc-workbench-frontend) — une interface web pour l'interaction des employés avec la plateforme Feecc;
3. [feecc-hid-reader-daemon](https://github.com/Multi-Agent-io/feecc-hid-reader-daemon) — un démon Python pour l'envoi d'événements de périphériques USB;

Ensuite, le logiciel qui peut être installé **à la fois sur l'ordinateur de l'employé et sur un serveur dans le réseau local**:

1. [feecc-ipfs-gateway](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) — un microservice pour publier des fichiers sur IPFS, et plus spécifiquement, des CIDs de fichiers sur le réseau Robonomics;

La figure ci-dessous montre l'architecture du lieu de travail de l'ingénieur Feecc dans un environnement d'entreprise. La passerelle IPFS (ainsi que le nœud IPFS et MongoDB sous forme de pair de cluster) peut être hébergée sur l'ordinateur de chaque employé, ce qui renforcera la décentralisation du système au prix de ressources informatiques.

<LessonImages src="feecc-course/feecc_global_hardware.png" alt="an architecture of Feecc"/>

### Matériel pris en charge pour un espace de travail:

#### Scanner RFID

Un scanner RFID USB est nécessaire pour autoriser les ingénieurs sur le terrain avec leurs badges internes. Les informations entrantes sont traitées à l'aide du `feecc-hid-reader-daemon`.

#### Scanner de codes-barres

Le scanner de codes-barres USB est nécessaire pour identifier les produits par codes-barres, envoyer des commandes aux services et pour l'attribution correcte des certificats. Les informations entrantes sont également traitées avec le `feecc-hid-reader-daemon`. La lecture en deux dimensions est souhaitable, mais pas obligatoire.

#### Ordinateur de l'employé

Un petit ordinateur monocarte traite les signaux des périphériques externes (scanner de codes-barres, scanner RFID), envoie des demandes d'impression d'images sur l'imprimante, démarre et arrête l'enregistrement vidéo, envoie des données à la passerelle IPFS. Il exécute les services suivants: `feecc-workbench-frontend`, `feecc-workbench-daemon` avec prise en charge de l'imprimante d'étiquettes et de la caméra, `feecc-hid-reader-daemon`. Une connexion Internet via Wi-Fi ou LAN est requise.
    
Il convient de préciser que n'importe quel ordinateur peut être utilisé à la place d'un ordinateur à paiement unique avec un moniteur. Le système d'exploitation GNU/LINUX doit être installé nativement ou via une machine virtuelle.
    
Spécifications techniques minimales :
    
- CPU: Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) SoC 64 bits @ 1,8 GHz ou similaire;
- RAM: 4 Go LPDDR4-3200 ou similaire.

#### Écran

Le moniteur est utilisé par l'employé pour saisir et consulter des informations sur l'étape de production en cours. Il affiche également des indications pour l'ingénieur sur l'étape actuelle. D'autres périphériques d'entrée peuvent également être utilisés.

#### Imprimante d'étiquettes

L'imprimante d'étiquettes est utilisée pour imprimer des codes QR et des codes-barres pour le placement ultérieur d'étiquettes sur le produit à des fins d'identification et de vérification. L'interaction avec l'imprimante est effectuée à l'aide du service correspondant de `feecc-workbench-daemon`. Dans notre cas, nous utilisons des imprimantes XPrinter 236B.

#### Caméra IP

Caméra IP pour capturer les processus de production à inclure dans le certificat de produit. Située au-dessus de la zone d'assemblage du produit. L'interaction avec la caméra est effectuée à l'aide du service correspondant de `feecc-workbench-daemon`.

Spécifications techniques requises: alimentation PoE, protocole de transfert de données RTSP. Dans notre cas, nous utilisons des caméras Hikvision HiWatch DS-i200d.

### Matériel pris en charge pour plusieurs postes de travail:

#### Routeur ou commutateur

Un routeur ou un commutateur avec prise en charge PoE 802.3af et alimentation PoE sur les ports de sortie est nécessaire pour alimenter les caméras IP et les connecter au service `feecc-workbench-daemon`. Dans notre cas, nous utilisons MikroTik hEX PoE (un pour 3-4 postes de travail) et une alimentation électrique.

#### Serveur (optionnel)

Un serveur plus important peut également être installé pour exécuter `feecc-ipfs-gateway`. Il peut être situé à la place de l'un des ordinateurs des postes de travail des employés. 

Minimum technical specifications: 

- Processeur: Intel Xeon E-2200 ou similaire;
- RAM: 8 Go;
- Stockage: 1 To HDD;
- Interface LAN: 1 Gbit/s.

## Feecc Analytics

La tâche principale de Feecc Analytics est d'organiser le processus de traçabilité des produits finis et leur inspection prévente dans le département de contrôle des produits.

Feecc Analytics dépend des conteneurs suivants:

1. [feecc-analytics-backend](https://github.com/Multi-Agent-io/feecc-analytics-backend) - le logiciel principal pour le déploiement du service d'analyse;
2. [feecc-analytics-frontend](https://github.com/Multi-Agent-io/feecc-analytics-frontend) - le logiciel frontal pour le service d'analyse;

Il est généralement déployé sur un seul serveur localement pour des raisons de sécurité des données au sein de l'organisation uniquement.

Le matériel requis pour que Feecc Analytics fonctionne est un serveur local ou distant (machine virtuelle) sur lequel l'application web fonctionnera et un scanner de codes-barres. Chaque employé autorisé peut accéder à l'application web depuis son ordinateur avec un nom d'utilisateur et un mot de passe.

## Feecc Validator

La tâche principale du Feecc Validator est de comparer les données de différents magasins de données afin de valider l'intégrité du certificat numérique du produit.

Feecc Validator dépend des conteneurs suivants:

1. [feecc-validator-backend](https://github.com/Multi-Agent-io/feecc-validator-backend) - un microservice, conçu pour gérer la validation des certificats et obtenir des données associées à l'unité fournie à l'utilisateur à condition qu'il n'ait qu'une seule des pièces de données;
2. [feecc-validator-frontend](https://github.com/Multi-Agent-io/feecc-validator-frontend) - une interface web pour interagir avec le microservice de validation.

Comme Feecc Analytics, il peut être déployé sur un seul serveur localement et nécessite un scanner de codes-barres.

<RoboAcademyText fWeight="500">
Dans la prochaine leçon, nous examinerons de plus près le système Feecc à travers une petite démonstration qui s'exécute localement sur votre ordinateur.
</RoboAcademyText>