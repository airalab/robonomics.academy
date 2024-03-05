---
title: "Leçon n°5, Configuration de l'abonnement Robonomics IoT"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: cours d'assistant domestique
lessonNumber: 6
metaOptions: [Apprenez, Maison Intelligente Souveraine avec Robonomics et Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## De quoi s'agit-il

L'abonnement Robonomics IoT permet aux utilisateurs d'utiliser toutes les fonctions de la parachain pendant une certaine période sans payer les frais de transaction standard. En activant l'abonnement, les appareils pourront envoyer des transactions en priorité.

Dans cette leçon, vous créerez les comptes de sécurité nécessaires pour la maison intelligente et achèterez un abonnement IoT.

## Théorie

Un abonnement IoT, ainsi que la méthode d'achat et de gestion, est implémenté en utilisant un paquet <code>rws</code>, qui contient toutes les fonctions nécessaires. En général, les abonnements dans Robonomics sont vendus avec un modèle d'enchères, qui utilise un extrinsèque <code>rws.startAuction()</code> pour créer une enchère pour un ID d'abonnement spécifique. Les utilisateurs peuvent accéder à l'enchère par ID et enchérir en utilisant un extrinsèque <code>rws.bid()</code>.

Après la fin de l'enchère, l'adresse avec l'offre gagnante est attribuée à l'abonnement. Maintenant, cette adresse pourra envoyer des transactions via l'extrinsèque <code>rws.call()</code> sans frais. Cependant, cela ne signifie pas que l'adresse peut le faire de manière incontrôlée à tout moment : chaque abonnement a une certaine quantité d'une valeur de <code>poids</code>, qui doit s'accumuler avant qu'une transaction gratuite puisse être effectuée. Une certaine valeur de <code>poids</code> est ajoutée à l'abonnement à chaque bloc généré dans la parachain, grâce à cela, Robonomics régule la bande passante de la parachain.

De plus, le propriétaire de l'abonnement peut utiliser l'extrinsèque <code>rws.setDevices()</code>, qui partage l'utilisation de l'abonnement aux adresses spécifiées. En même temps, le <code>poids</code> reste le même, donc plus il y a d'adresses dans l'abonnement, plus chacune d'entre elles devra attendre avant d'envoyer la transaction gratuite.

Pour contrôler Home Assistant avec Robonomics, vous avez besoin de deux comptes sur la parachain Robonomics. Ces comptes assureront la sécurité de votre Home Assistant.

Avec l'un des comptes (<code>SUB_OWNER</code>), vous achèterez un abonnement Robonomics. Ce compte agit en tant qu'administrateur principal de l'abonnement IoT, et fournit l'accès à Home Assistant à d'autres utilisateurs (en utilisant <code>rws.setDevices()</code>). Ce compte doit avoir quelques jetons XRT pour pouvoir effectuer des transactions d'achat d'abonnement.

Le deuxième compte (<code>SUB_CONTROLLER</code>) contrôlera tous les processus de Home Assistant des appareils (comme la télémétrie). Les transactions de vos appareils seront envoyées au nom du compte <code>SUB_CONTROLLER</code>. Vous (et tout le monde) pourrez voir ces transactions dans n'importe quel explorateur de parachain comme [Subscan](https://robonomics.subscan.io/). Cependant, vous seul pourrez décrypter le contenu de ces transactions tant que vous possédez de manière sécurisée les phrases de récupération nécessaires.

## Instructions

<List type="numbers">

<li>

Création des comptes de parachain Owner et Controller

<List>

<li>

<robo-academy-note type="warning" title="WARNING">
Les deux comptes doivent être créés avec un cryptage ed25519.
</robo-academy-note>

</li>

<li>

Allez sur [l'application Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) sur le portail Polkadot / Substrate. Vérifiez le coin supérieur gauche pour vous assurer que vous êtes connecté à la parachain Robonomics.

</li>

<li>

En raison de l'utilisation du format *ed25519*, vous devez créer un compte en utilisant l'interface Polkadot-JS et sélectionner le chiffrement requis. 

Cette fonctionnalité est désactivée par défaut sur l'interface Polkadot-JS. Pour l'activer, accédez à <code>Paramètres</code> -> <code>Général</code> -> <code>options de compte</code> et sélectionnez <code>Autoriser le stockage local des comptes dans le navigateur</code> dans le menu déroulant <code>création de compte dans le navigateur</code>.
 
</li>

<li>

Allez dans <code>Comptes</code> -> <code>Comptes</code> et appuyez sur le bouton <code>Ajouter un compte</code>. Vous verrez le menu contextuel avec la graine du compte. Il existe deux formes : *Mnémonique* (lisible par l'homme) et *Brut* (une séquence de chiffres et de lettres).

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQiJYPYajUJXENX2PzSJMSKGSshyWyPNqugSYxP5eCNvm', type:'mp4'}]" />

</li>

<li>

Ouvrez <code>Options de création avancées</code>, changez le type de cryptographie de création de compte en <code>Edwards - ed25519</code>. Sauvegardez la phrase mnémonique de la graine en toute sécurité et appuyez sur <code>Suivant</code>.

</li>

<li>

Dans le menu suivant, vous devez définir le nom du compte et le mot de passe. Donnez-lui un nom <code>SUB_OWNER</code> pour plus de commodité et appuyez sur <code>Suivant</code>.

</li>

<li>

Sur la dernière fenêtre, cliquez sur <code>Enregistrer</code> pour terminer la création du compte. Il générera également des fichiers JSON de sauvegarde que vous devriez stocker en toute sécurité. Vous pourrez ensuite utiliser ce fichier pour récupérer votre compte si vous vous souvenez du mot de passe.

</li>

<li>

Répétez ces étapes pour le compte <code>SUB_CONTROLLER</code>.

</li>
</List>
</li>

<li>

Ajout de comptes à l'extension Polkadot.js

<List type="numbers">

<li>

Pour plus de commodité, vous devriez utiliser l'extension Polkadot.js et ajouter ces comptes nouvellement créés à celle-ci. Pour un compte ed25519, vous ne pouvez le faire qu'avec un fichier JSON de sauvegarde. Vous pouvez utiliser les fichiers enregistrés lorsque vous avez créé les comptes.

Vous pouvez obtenir à nouveau ces fichiers en créant un fichier de sauvegarde du compte. Appuyez sur les trois points sur votre compte, choisissez <code>Créer un fichier de sauvegarde pour ce compte</code> et saisissez votre mot de passe.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmRd7gztUjWkLF4W2XuJwy5aXBwzNV2aPCU6CQQLvUpSNj', type:'mp4'}]" />

</li>

<li>

Ouvrez une extension et appuyez sur le bouton <code>+</code> en haut à droite, puis choisissez <code>Restaurer le compte à partir du fichier JSON de sauvegarde</code>.

</li>

<li>

Dans une fenêtre ouverte, téléchargez le fichier JSON, saisissez le mot de passe et appuyez sur <code>Restaurer</code>

</li>

<li>

Assurez-vous que le réseau Robonomics est sélectionné pour les comptes dans l'extension Polkadot.js. Sur le portail Polkadot / Substrate, allez dans <code>Paramètres</code> -> <code>Métadonnées</code> et cliquez sur le bouton <code>Mettre à jour les métadonnées</code>. 

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmT5sTNP9t8gpbD4RJJw6ETwG4wiziiChAh2uHHBk9Zsyd', type:'mp4'}]" />

</li>

<li>

Confirmez la mise à jour des métadonnées dans la fenêtre contextuelle. Maintenant, l'extension affichera l'étiquette du réseau pour lequel l'adresse est utilisée.

</li>

</List>
</li>

<li>

Activation de l'abonnement Robonomics

<List >

<li>

<robo-academy-note type="okay">
Pour cette étape, vous devez disposer d'une quantité suffisante de jetons XRT (minimum 2-3 XRT) dans votre compte <code>SUB_OWNER</code>.
</robo-academy-note>

Allez sur l'application Robonomics à la [page d'abonnement](https://dapp.robonomics.network/#/subscription) et appuyez sur <code>connecter le compte</code> dans la barre latérale droite.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmXrFCajmJgkRDSbshGD3QehjnoyS6jafEPSjHdYkoBHum', type:'mp4'}]" />

</li>

<li>

Dans le menu contextuel suivant, connectez l'extension Polkadot.js. Vous verrez l'adresse de votre compte avec le solde.

</li>

<li>

Avant d'acheter, vérifiez que vous avez choisi le compte <code>SUB_OWNER</code>. Appuyez sur l'icône de profil d'adresse, vous devriez voir le compte <code>SUB_OWNER</code> sous le champ <code>Vérifier le compte propriétaire</code>.

</li>

<li>

Enfin, appuyez sur le bouton <code>SOUUMETTRE</code> et saisissez le mot de passe de votre compte. Ensuite, attendez que le processus d'activation soit terminé. Vous verrez l'état de votre abonnement après un certain temps.

Si aucun abonnement n'est disponible, **veuillez contacter** l'équipe Robonomics.

</li>
</List>
</li>

<li>

Ajout de compte à l'abonnement

<List type="numbers">

<li>

Maintenant, vous devez ajouter le compte <code>SUB_CONTROLLER</code> à **la liste d'accès**. Ouvrez l'extension et cliquez sur l'icône près du nom du compte. Cela copiera l'adresse du compte.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmV1gkwtcXsWv54ov9tuXfcHg7nqs1foM8cRwts4sqnqtX', type:'mp4'}]" />

</li>

<li>

Collez cette adresse dans le champ <code>Adresse de la parachain Robonomics</code> dans la partie **Gérer l'accès**.

Donnez-lui un nom et appuyez sur le bouton <code>+</code>. Saisissez le mot de passe de votre <code>SUB_OWNER</code> dans la fenêtre contextuelle et attendez que le processus d'activation soit terminé.

</li>

<li>

Répétez les étapes pour le compte <code>SUB_OWNER</code>.
</li>
</List>
</li>
</List>