---
title: "Leçon n°7, Utilisation de Robonomics avec Home Assistant"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: cours d'assistant domestique
lessonNumber: 8
metaOptions: [Apprenez, Maison Intelligente Souveraine avec Robonomics et Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## De quoi s'agit-il

Dans cette leçon, vous allez essayer d'utiliser les principaux services IoT de Robonomics. Le premier peut interroger la télémétrie des appareils domotiques, vous permettant de recevoir à distance des données de Home Assistant. Le deuxième service génère des sauvegardes de la configuration de votre Home Assistant et la restaure en cas de besoin (par exemple, en cas de défaillance des cartes SD).


## À propos des fonctions de la parachain

Ensuite, vous verrez comment les fonctions de la parachain Robonomics sont utilisées pour fournir à l'utilisateur de Home Assistant le service nécessaire. 

L'obtention de la télémétrie est basée sur le paquet <code>datalog</code> que vous connaissez déjà. À chaque période de temps définie (mais pas moins que le poids cumulé le permet), une transaction <code>datalog.record()</code> est envoyée à la parachain depuis l'adresse <code>SUB_CONTROLLER</code> avec le hachage IPFS du fichier chiffré, où toutes les données de vos appareils IoT sont collectées. En fait, pour obtenir la télémétrie, vous demandez les datalogs nécessaires à la parachain liée à votre abonnement IoT, puis les déchiffrez avec vos clés.

Pour créer une sauvegarde, un autre paquet Robonomics appelé <code>digitalTwin</code> est utilisé, qui est une implémentation de l'idée d'un jumeau numérique, une version numérique d'un équipement réel qui copie ses caractéristiques techniques et ses données historiques. Tout d'abord, un identifiant unique est créé pour le jumeau numérique de votre Home Assistant en utilisant l'extrinsèque <code>digitalTwin.create()</code>. Ensuite, en utilisant l'extrinsèque <code>digitalTwin.setSource()</code>, cet identifiant est lié à certaines données (le champ <code>topic</code>) et à une adresse dans la parachain (le champ <code>source</code>). Pour la sauvegarde de Home Assistant, le hachage du fichier de sauvegarde est stocké dans <code>topic</code>, et l'adresse <code>SUB_OWNER</code> est stockée dans <code>source</code>.

## Instructions

<List type="numbers">

<li>

Obtention de la télémétrie

<List>


<li>

Allez sur l'application et choisissez le service [Télémétrie Domotique Intelligente](https://dapp.robonomics.network/#/smarthome-telemetry).

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmao9RoWcKo2qs4PAGtm5gqHzyAHJcpDqNLgciU35FJeVm', type:'mp4'}]" />

</li>

<li>

Dans le champ <code>CONTROLLER</code>, saisissez l'adresse <code>SUB_CONTROLLER</code>. Insérez la phrase de récupération pour chiffrer les données.

</li>

<li>

Dans le bloc <code>Obtenir la télémétrie</code>, choisissez un horodatage dans la liste déroulante et appuyez sur le bouton <code>TÉLÉCHARGER LA TÉLÉMÉTRIE</code>.


Le téléchargement de la télémétrie peut prendre un certain temps. Après avoir terminé, vous verrez les informations de vos capteurs.

</li>
</List>
</li>


<li>

Création de sauvegarde

<List>

<li>

Pour créer des sauvegardes, un service est appelé qui génère une archive sécurisée avec des fichiers de configuration. Ce service ajoute ensuite l'archive à IPFS et stocke le CID résultant dans Robonomics Digital Twin.

<robo-academy-note type="warning" title="WARNING">
Pour restaurer votre configuration, il est nécessaire d'utiliser une passerelle IPFS personnalisée telle que Pinata (pinata.cloud) ou Crust Network (crust.network). Sans cela, votre sauvegarde sera stockée uniquement sur votre nœud IPFS local, ce qui pourrait vous empêcher de restaurer la configuration de votre Home Assistant en cas de défaillance du nœud local. 
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVo91dLaAYgFDM1vrL2PYfAffM6SGGC59ZERbfHR44tqW', type:'mp4'}]" />

</li>

<li>

Dans l'interface web de Home Assistant, allez dans <code>Outils pour les développeurs</code> -> <code>Services</code>. Recherchez <code>Robonomics: Sauvegarder la sauvegarde vers Robonomics</code> et appuyez sur <code>APPELER LE SERVICE</code>.

</li>

<li>

Attendez de voir la notification <code>La sauvegarde a été mise à jour dans Robonomics</code> apparaître dans <code>Notification</code>.

</li>

<li>

Pour restaurer votre configuration, vous devrez installer une nouvelle instance de Home Assistant (et répéter toutes les étapes précédentes) avec l'intégration de Robonomics Home Assistant en utilisant les mêmes seeds que vous avez créés précédemment. Vous devrez également configurer un courtier MQTT avec le même nom d'utilisateur et mot de passe.

<robo-academy-note type="warning" title="WARNING">
Étant donné que certains appareils connectés à Home Assistant via Wi-Fi ou MQTT nécessitent que vous spécifiiez explicitement l'adresse IP locale de votre Raspberry Pi, lors de la restauration d'une sauvegarde, ils peuvent ne pas être disponibles en raison d'un changement de cette IP. Vous devrez saisir la nouvelle adresse IP dans les paramètres de ces appareils. Pour éviter cela, vous pouvez configurer une adresse IP locale statique pour votre Raspberry Pi dans les paramètres de votre routeur (si cette fonction est prise en charge).
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmWmnmkXUcPXsAnQzwN3UEuki2GMYnQDx3vhgjEypCU8aR', type:'mp4'}]" />


</li>

<li>

Dans l'interface web de Home Assistant, allez dans <code>Outils pour les développeurs</code> -> <code>Services</code>. Recherchez <code>Robonomics: Restaurer à partir de la sauvegarde dans Robonomics</code> et appuyez sur <code>APPELER LE SERVICE</code>. Accédez à la page <code>Vue d'ensemble</code> pour vérifier l'état de votre sauvegarde.

</li>

<li>

Une fois que Home Assistant a terminé de redémarrer, votre configuration sera restaurée. Si le statut passe à <code>restauré</code> mais que Home Assistant ne redémarre pas automatiquement, vous devrez le redémarrer manuellement en accédant à <code>Paramètres</code> > <code>Système</code> et en cliquant sur le bouton <code>REDÉMARRER</code> dans le coin supérieur droit.

</li>

</List>
</li>

</List>

## Fin de cours

<List>

<li class="flex"> 

Félicitations! Vous avez terminé avec succès la configuration complète et le déploiement de votre maison intelligente souveraine. Vous pouvez maintenant demander un certificat de fin de cours en nous rendant visite sur notre canal Discord. Écrivez-nous dans le chat [robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315) et notre représentant vous contactera.
</li>

<li class="flex">

La preuve de l'achèvement du cours est constituée de transactions correspondantes qui peuvent être vérifiées dans l'explorateur [Polkadot](https://robonomics.subscan.io/). Il s'agit de transactions concernant l'achat d'un abonnement, l'ajout d'un appareil à un abonnement et l'envoi de journaux de données à partir des appareils.

</li>

</List>