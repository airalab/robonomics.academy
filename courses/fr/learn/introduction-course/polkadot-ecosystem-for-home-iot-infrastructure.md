---
title: "Leçon n°3, Écosystème Polkadot pour l'infrastructure IoT domestique"
lastUpdate: Thu May 04 2023 12:53:58 GMT+0400 (Samara Standard Time)
description: Dans cette leçon, vous allez essayer de contrôler une ampoule intelligente en utilisant la parachain Robonomics.
lessonNumber: 3
metaOptions: [Apprendre, Introduction aux idées de Robonomics]
defaultName: Introduction to the ideas of Robonomics
---

La leçon 2 a expliqué les principes principaux de Robonomics et a mentionné Polkadot / Kusama comme une platefoume d'écosystème blockchain prometteuse pour sa mise en œuvre. Il est temps d'examiner de plus près les fonctions de la parachain Robonomics en tant que partie de l'écosystème Polkadot dans le réseau Kusama. En particulier, nous aimerions montrer comment fonctionnent les abonnements IoT de la parachain Robonomics. Lous de la première leçon, votre adresse a été ajoutée à l'abonnement IoT du cours, et vous avez déjà réussi à l'utiliser deux fois : lousque vous avez cherché votre reflet dans le miroir noir et lorsque vous avez remis vos résultats de test.

## Intro

Dans cette leçon, vous allez essayer de contrôler une ampoule intelligente. Votre objectif est d'allumer/éteindre l'ampoule en utilisant l'interface standard Polkadot/Substrate sur la parachain Robonomics. L'ampoule est diffusée sur [YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) afin que vous puissiez voir votre résultat en temps réel. De plus, un ensemble d'instructions plus détaillé concernant l'utilisation d'un abonnement IoT est disponible sur [notre wiki](https://wiki.robonomics.network/docs/subscription-launch/).


## Instructions

<List type="numbers">

<li>

Ouvrez le portail Robonomics [Polkadot/Substrate](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/extrinsics).

Vous devriez voir le menu Extrinsics (fonctions dans l'écosystème Polkadot). Si les Extrinsics ne s'ouvrent pas, utilisez le menu en haut à gauche de la page, naviguez vers <code> Kusama & Parachains -> Robonomics</code>, et appuyez sur <code>Switch</code>. Ensuite, naviguez vers <code>Developer</code> dans l'en-tête supérieur, puis vers <code>Extrinsics</code>.

</li>

<li>
Dans le premier champ où il est écrit 'en utilisant le compte sélectionné', choisissez le même compte Polkadot.js que vous avez utilisé dans les leçons précédentes.
</li>

<li>
Dans le deuxième champ "soumettre l'extrinsèque suivant", sélectionnez les extrinsèques <code>rws</code> et choisissez <code>call(subscriptionId, call)</code>. Cela vous permettra de dispatcher un appel de fonction en utilisant l'abonnement IoT.
</li>

<li>
Dans le champ <code>subscriptionId: AccountId32</code> collez l'adresse du propriétaire de cet abonnement : <code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code>
</li>

<li>

Dans le champ <code>call: Call</code> choisissez la commande <code>launch(robot, param)</code>.

Cela vous montrera deux autres champs : <code>robot</code> et <code>param</code>.

</li>

<li>
Dans le champ <code>robot: AccountId32</code> collez cette adresse de l'ampoule intelligente : <code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code>
</li>

<li>

Dans le champ <code>param: H256</code> vous devez spécifier 1 (allumé) ou 0 (éteint) pour allumer/éteindre l'ampoule.

Vous pouvez le faire avec :

<code>0x0000000000000000000000000000000000000000000000000000000000000001</code>

ou

<code>0x0000000000000000000000000000000000000000000000000000000000000000</code>

</li>

<li>

Appuyez sur le bouton "Soumettre la transaction".

N'oubliez pas d'ouvrir la [diffusion sur YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) avant de signer la transaction.

</li>


</List>

<Result>

La leçon sera considérée comme terminée après l'envoi d'une transaction réussie et son apparition dans l'explorateur Polkadot pour votre compte Polkadot.js.

Vous pouvez vérifier vos résultats sur [l'application de vérification spéciale](https://lk.robonomics.academy/). Pour vous authentifier sur l'application de vérification, utilisez le même compte dans Polkadot.js qui a été utilisé pendant le cours.

</Result>