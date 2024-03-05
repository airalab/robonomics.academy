---
title: "Assemblage du tableau de maison intelligente"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: Vous apprendrez comment assembler le tableau de maison intelligente!
metaOptions: [Apprendre]
defaultName: Introduction to open source solution for private smart homes
---

<LessonImages imageClasses="mb" src="smart-home-intro/spring-school-2023-smart-stand-intro.gif" />

## Panneau de maison intelligente 

Ce panneau est destiné à être utilisé comme un dispositif de contrôle central avec les interrupteurs les plus utilisés et les données affichées dessus. Il est également possible de connecter un interphone et de l'utiliser comme un moniteur intérieur. Fondamentalement, il s'agit simplement d'une tablette fonctionnant sous Android OS dans notre cas. Tout ce que vous avez à faire est de fournir de l'électricité. Nous pensons que ce panneau devrait être installé là où vous placeriez un moniteur intérieur

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcbdAJqbwHAQ3NeyWQUwSoS4drDexa3AEs7HXuM1BrUT1', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />


## Interrupteur lumineux

Les interrupteurs lumineux intelligents ressemblent plus ou moins aux interrupteurs ordinaires, sauf que des boutons poussoirs sont utilisés à la place des interrupteurs. Un bouton poussoir revient à sa position après avoir été pressé. Il n'y a pas de différence de connexion entre un interrupteur ordinaire et un intelligent : connectez le fil neutre à N, le fil d'alimentation à L et la ligne d'éclairage à L1. Après avoir assemblé l'interrupteur pour le coupler via ZigBee, appuyez sur le bouton pendant au moins 5 secondes.

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/Qmb138DiQWWBgowMj2fC9kmiGYh9WEeytteSkqumWCv2LB', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-2.png" />

Dans le cas de l'interrupteur à deux boutons (ou plus), la seule différence est la deuxième (troisième, ...) ligne de lumières. 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZiStYZG4rmyNPXXmCXsVPm7witPpnNJMBzD8GtxedgPo', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-3.png" />

## Ampoule intelligente 

Les ampoules intelligentes sont probablement le moyen le plus facile d'essayer quelque chose d'intelligent, vous n'avez même pas besoin d'être électricien. Elles peuvent être contrôlées à distance et peuvent changer leur luminosité ou leur couleur. Vous pouvez les installer avec des interrupteurs intelligents ou séparément. L'utilisation de tels appareils peut ouvrir toute une page d'automatisations en fonction de votre humeur ou des conditions extérieures! Les nouvelles ampoules sont prêtes à être connectées via ZigBee. Au cas où vous ne pourriez pas en trouver une, allumez-la et éteignez-la 5 fois


<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbiMHLJqnDpr1Whzvo6Y7zE33cQPuTs7furbt3JW2uiek', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-4.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmTzK4dY168HVgLvVBsRxR4M4vda55XC7pFhpW5kRexujQ', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-5.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZFpvVUavKc1Za9SeXqikrfySsfFHuVrkdzgbVB8um7T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-6.png" />

## Prise intelligente 

Il existe un certain nombre de dispositifs « non intelligents » que nous devons généralement allumer et éteindre parfois. Si nous alimentons un tel appareil via la prise intelligente, nous pouvons l'allumer/éteindre selon nos besoins, notre emploi du temps ou nos conditions. De plus, de telles prises peuvent surveiller la consommation d'énergie afin que nous ayons des données sur la quantité consommée par cet appareil. La connexion est assez facile, pour associer la prise intelligente, appuyez sur le bouton pendant 5 secondes

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRtmKXSv7csHLbKVuZkoA5Eb2zyTkEAbUxLYT6Qt1yxZH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-7.png" />

## Interrupteur de chaudière 

La raison pour laquelle l'interrupteur de chaudière existe en tant que dispositif dédié est qu'il peut supporter une charge plus importante. Habituellement, les chaudières consomment 3 kWh ou même plus, donc les interrupteurs réguliers (même intelligents) ne sont pas adaptés dans cette situation. L'interrupteur de chaudière est conçu pour fonctionner dans ces conditions. Les connexions et l'appariement sont à peu près les mêmes que pour l'interrupteur de lumière

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZyRtXXRYCrAQe6s6ZFJLXtUrH7SZHJC1Bt61kTrRX54', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-8.png" />

## Thermostat Wifi/Zigbee

Il ressemble à un thermostat ordinaire mais il peut être contrôlé sans fil. Il y a des options : connecter un système de chauffage directement au thermostat ou les séparer. Dans ce dernier cas, le thermostat nous indiquera le mode (chauffage, refroidissement, ventilateur, etc.) et la température

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRjxo9EGUvQiMm84xvXCL6LfrQJYza71vmFsa9Zpy7qmz', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-9.png" />

## Interrupteur de Rideau

Un autre interrupteur dédié, cette fois pour les rideaux. D'un point de vue technique, il n'est pas nécessaire d'utiliser uniquement cet interrupteur, nous pourrions utiliser n'importe quel interrupteur à trois boutons et le connecter au moteur de rideau, mais celui-ci est livré avec des icônes spéciales. Pour associer l'interrupteur, appuyez longuement sur le bouton du milieu

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRpEpZbyNkzby8Sk22Ymz59DbAcnty1B1osWc2kZr5FZ7', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-10.png" />

## Contrôleur de Vanne Intelligent

Choisissez un contrôleur en fonction des vannes que vous avez. Le scénario le plus évident est de combiner ce contrôleur avec un capteur de fuite d'eau. Pour associer l'appareil, maintenez le bouton enfoncé pendant 5 secondes

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcjZcJ6P8Q5yUfSRx8R2mR4A7r2fi5bLs5uoUr3EAXLZs', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-11.png" />

## Capteur de Fuite d'Eau

Un appareil assez simple qui envoie un signal lorsque ses deux contacts sont connectés. L'eau conduit l'électricité et lorsque de l'eau est sous le capteur, ses contacts sont court-circuités. Le capteur fonctionne sur batterie et dure généralement de 1 à 2 ans. Pour associer le capteur via ZigBee, appuyez longuement sur son bouton pendant un certain temps 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbgetJK1E8qQMcnBVREutpy8tKfbesqaxXiebjzpoyrdV', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-12.png" />

## Contrôleur IR

Pensez-y comme votre télécommande de télévision... mais intelligente ! Et ce n'est pas limité à fonctionner uniquement avec les téléviseurs. Si votre climatiseur a une télécommande, elle peut être remplacée par celle-ci. Pour l'associer, appuyez sur le bouton de réinitialisation à l'arrière du contrôleur pendant un certain temps. Il existe une multitude de bibliothèques avec des commandes prêtes à l'emploi, par exemple [https://github.com/smartHomeHub/SmartIR](https://github.com/smartHomeHub/SmartIR). Tout ce que vous avez à faire est de trouver le modèle de votre téléviseur ou de votre climatiseur

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmVjj92fMLbA6QJ5QhnmiqBT1huD5b7xyfi3VadHFDYwtm', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-13.png" />

## Capteur de Porte/Fenêtre

Un autre capteur qui fonctionne sur batterie mais qui aide à construire un système de sécurité simple ou à le connecter à des lumières et autres appareils. Pour l'associer via ZigBee, mettez une aiguille dans le trou et appuyez dessus pendant un certain temps

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZyb66dKEqk9iCVKhaBk5ZKASi7dXdFSg2CBXY1fwuu5J', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-14.png" />

## Capteur de Mouvement
Le même que le capteur de porte/fenêtre, peut être utilisé dans divers scénarios. Les plus évidents sont le contrôle des lumières ou la détection des mouvements lorsque vous êtes absent

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmUA7TLg12pkhkbdGH6fwNDasU1kiyLHBJSutA2YG71Mka', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-15.png" />


## Capteur de Température & d'Humidité

Il est bon de connaître les conditions dans lesquelles vous vivez, n'est-ce pas ? Ce capteur vous fournira des mesures de température et d'humidité. Ensuite, vous pouvez utiliser ces données pour allumer/éteindre votre climatiseur ou d'autres systèmes de chauffage/refroidissement. Pour associer le capteur, il y a un bouton à l'arrière 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmayYFowfJVwQBVxPUSvi5inedqKzhyRZXp8fBUUayJnqH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-16.png" />

## Caméra de Sécurité

En fin de compte, il est bon de jeter un coup d'œil à ce qui se passe chez vous. Une bonne automatisation serait de connecter le capteur de mouvement à la caméra afin d'avoir une vidéo de 10 secondes lorsque le mouvement est détecté 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmX8nnDCgTx2kuwfAGv6B4orkEg4w6phtJtxSp44HfdD9T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-17.png"  />


## Carte Intelligente 
Jetez un coup d'œil aux résultats [https://www.youtube.com/watch?v=B3er7bwtvkw](https://www.youtube.com/watch?v=B3er7bwtvkw )
Et jouez avec vous-même [https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20](https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20)

