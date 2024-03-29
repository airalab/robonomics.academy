---
title: Connectezezezezivité des capteurs et réseau de capteurs décentralisé
description:  Découvrez comment un réseau de surveillance de la qualité de l'air civile peut fonctionner et les avantages d'une solution décentralisée pour surveiller la qualité de l'air dans votre maison ou votre communauté.
lessonNumber: 1
metaOptions: [Apprendre, Connectivité des capteurs et réseau de capteurs décentralisé]
defaultName:  Sensors Connectivity & Decentralized Sensors Network
---

## À propos du cours

Découvrez comment un réseau de surveillance de la qualité de l'air civile peut fonctionner et les avantages d'une solution décentralisée pour surveiller la qualité de l'air dans votre maison ou votre communauté.

## Qu'est-ce que le réseau de capteurs décentralisé?

Le réseau de capteurs de Robonomics est un réseau de surveillance de la qualité de l'air civile. Tout le monde peut assembler son propre capteur ou utiliser une solution prête à l'emploi de l'équipe de développement et l'installer chez lui. Le réseau de capteurs utilise des logiciels open source et des schémas de câblage de composants ouverts. En particulier, l'un des principaux capteurs utilisés est le capteur de particules fines PM10 et PM2,5.


## Qu'est-ce que le PM10 et le PM2,5?

Le PM10 est une particule d'une substance de 10 microns ou moins, le PM2,5 est une particule de 2,5 microns de diamètre ou moins. Ils flottent constamment dans l'air et ne se déposent pas en raison de leur petite taille (pour comparaison, l'épaisseur d'un cheveu humain est de 100 microns). Ces particules peuvent apparaître pour diverses raisons, notamment les processus industriels liés à la manipulation de matériaux en vrac ou à la combustion et au traitement de minéraux. Elles sont également émises après des incendies de forêt et des tempêtes de poussière. De plus, elles peuvent provenir des transports conventionnels lors de la combustion de carburant ou de l'usure des pneus et des chaussées. Les pneus de voiture sont réduits en miettes fines et le vent les souffle des routes dans toute la ville.

## Pourquoi devons-nous les mesurer?

Le PM10 et le PM2,5 sont les plus dangereux car leur taille leur permet de pénétrer dans les poumons des personnes, tandis que les particules plus grandes ont tendance à être piégées dans le nez ou la gorge. Les particules plus grandes de PM10 irritent les voies respiratoires, le nez, la gorge et les yeux. Les particules de moins de 2,5 microns peuvent pénétrer profondément dans les poumons et même pénétrer dans la circulation sanguine. Les effets de ces particules sur le corps humain peuvent être dévastateurs:

<List>

<li>empoisonnement par des substances nocives</li>
<li>réactions allergiques</li>
<li>infections bactériennes et fongiques</li>
<li>cancer</li>
<li>irritation des muqueuses</li>
<li>exacerbation des symptômes respiratoires</li>

</List>

## Pourquoi un réseau de capteurs décentralisé?

Il existe des réseaux de surveillance publics tels que le projet allemand [sensor.community](https://sensor.community), mais ils utilisent l'architecture client-serveur habituelle, ce qui est un inconvénient dans ce cas. Les données de tous les capteurs ainsi que les demandes des utilisateurs sont envoyées à un seul serveur, qui ne peut pas toujours gérer une telle charge. Il arrive donc que la carte avec les données ne soit pas disponible aux moments les plus importants.

Avec le réseau Robonomics, les capteurs envoient des données à plusieurs serveurs différents, et tout utilisateur peut mettre en place le serveur de connectivité des capteurs pour leur capteur et le voir sur la carte. La carte elle-même n'est pas surchargée car il s'agit d'une application décentralisée (dapp) qui fonctionne directement depuis votre navigateur avec les données que les serveurs envoient au canal IPFS pub-sub.