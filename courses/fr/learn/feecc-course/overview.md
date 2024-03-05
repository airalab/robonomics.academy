---
title: "Vue d'ensemble"
description: Ce cours consiste à découvrir le système Feecc et tous ses composants.
metaOptions: [Apprendre, s'habituer à Feecc]
defaultName: Getting Used to Feecc
---

## À propos du cours

Ce cours vise à vous familiariser avec le système Feecc et tous ses composants. Feecc est une plateforme qui permet aux entreprises de construire et personnaliser leur propre système de surveillance des processus de production ou de service pour répondre à leurs besoins. Il est développé par [Multi-Agent Systems](http://multi-agent.io/) en utilisant les technologies fournies par l'équipe Robonomics. Le cours fournit des connaissances de base sur l'architecture de Feecc, y compris un scénario de démonstration, et explique comment déployer et utiliser ce système. 

## Pour qui est ce cours?

Ce cours s'adresse aux employés des entreprises qui ont décidé de mettre en œuvre le système de suivi de production Feecc, ainsi qu'aux directeurs de l'ingénierie seniors à la recherche de nouvelles solutions technologiques pour améliorer la qualité des processus de travail.

## Exigences

Les matériaux du cours supposent des compétences de base en ingénierie de production, ainsi que des compétences dans les systèmes basés sur UNIX. Des connaissances de base de [Docker](https://www.docker.com/) sont les bienvenues.

## Concept principal

En utilisant la technologie Web3 et un ensemble de modules logiciels flexibles, la plateforme Feecc permet aux entreprises d'organiser le processus de production de tout type de produit, d'auditer l'accès des employés sur le lieu de travail et de récupérer toutes les données du flux de travail. Les informations sont stockées de manière inchangée et sécurisée dans un stockage IPFS distribué, les hachages de données sont enregistrés avec le module de datalog Robonomics avec un accès pour le département de contrôle qualité via Feecc Analytics. Avec Feecc, une entreprise peut non seulement numériser ses processus et se débarrasser de la paperasserie et des litiges, mais aussi attirer l'attention de nouveaux clients sur le produit, renforçant ainsi la confiance en celui-ci.

La plateforme est un ensemble de logiciels pour surveiller le processus de production et collecter des informations pour une analyse ultérieure par le QCD ou d'autres participants. Globalement, le schéma d'intégration de la plateforme dans le processus commercial peut être représenté comme suit:

<LessonImages src="feecc-course/feecc-scheme.jpg" alt="A scheme of Feecc integration into the business process"/>

## Opportunités de la plateforme

- **Stockage de données fiable et sécurisé**: Feecc utilise un stockage de données sécurisé basé sur une architecture adressable par contenu et un registre distribué pour garantir la fiabilité et la validité des données du flux de travail collectées.

- **Un lien clair entre l'employé et le produit**: Feecc surveille toutes les phases du flux de travail avec l'enregistrement vidéo, le journal des données des périphériques et l'autorisation d'accès des employés. La plateforme prend en charge tout flux de travail séquentiel, y compris les opérations à long terme ou interrompues.

- **Certificat numérique du produit**: Toutes les traces numériques du flux de travail sont résumées dans un certificat de produit unique avec un identifiant unique qui est ensuite attaché sous forme de code QR au produit. Feecc peut ajouter des paramètres de processus personnalisés au certificat et automatiser sa création même pour les pièces composites.

- **Support étendu pour les périphériques**: Feecc prend en charge les interfaces d'E/S numériques standard pour connecter divers périphériques (caméras vidéo, scanners, imprimantes, etc.).

https://youtu.be/WhtOJtGjAok