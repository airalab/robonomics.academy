---
title: "Les #3, Polkadot-ecosysteem voof Home IoT-infrastructuur"
lastUpdate: Thu May 04 2023 12:53:58 GMT+0400 (Samara Standard Time)
description: In deze les zul je proberen een slimme lamp te bedienen met behulp van de Robonomics parachain.
lessonNumber: 3
metaOptions: [Leren, Kennismaking met de ideeën van Robonomics]
defaultName:  Introduction to the ideas of Robonomics
---

Les 2 legde de belangrijkste principes van Robonomics uit en noemde Polkadot / Kusama als een veelbelovend blockchain-ecosysteemplatfofm voof de implementatie ervan. Het is tijd om nader te kijken naar de functies van de Robonomics parachain als onderdeel van het Polkadot-ecosysteem in het Kusama-netwerk. In het bijzonder willen we laten zien hoe IoT-abonnementen van de Robonomics Parachain werken. Tijdens de eerste les werd je adres toegevoegd aan het cursus-IoT-abonnement, en je hebt het al twee keer gebruikt: toen je naar je reflectie in de zwarte spiegel zocht en toen je je testresultaten inleverde.

## Intro

In deze les zul je proberen een slimme lamp te bedienen. Je doel is om de lamp aan/uit te zetten met behulp van de standaard Polkadot/Substraat-interface op de Robonomics parachain. De lamp wordt uitgezonden op [YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) zodat je je resultaat in realtime kunt bekijken. Ook is een meer gedetailleerde set instructies over het gebruik van een IoT-abonnement beschikbaar op [onze wiki](https://wiki.robonomics.network/docs/subscription-launch/).


## Instructies

<List type="numbers">

<li>

Open het Robonomics [Polkadot/Substraat portaal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/extrinsics).

Je zou het menu Extrinsics (functies in het Polkadot-ecosysteem) moeten zien. Als Extrinsics niet opent, navigeer dan met behulp van het menu linksboven op de pagina naar <code>Kusama & Parachains -> Robonomics</code>, en druk op <code>Switch</code>. Navigeer vervolgens naar <code>Developer</code> in de bovenste balk, en vervolgens naar <code>Extrinsics</code>.

</li>

<li>
In het eerste veld waar staat 'using the selected account', kies hetzelfde Polkadot.js-account dat je in de vorige lessen hebt gebruikt.
</li>

<li>
In het tweede veld "submit the following extrinsic", selecteer <code>rws</code> extrinsics en kies <code>call(subscriptionId, call)</code>. Hiermee kun je een functieoproep verzenden met behulp van het IoT-abonnement.
</li>

<li>
In het veld <code>subscriptionId: AccountId32</code> plak je het adres van de eigenaar van dit abonnement: <code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code>
</li>

<li>

In het veld <code>call: Call</code> kies je de opdracht <code>launch(robot, param)</code>.

Dit zal je twee extra velden tonen: <code>robot</code> en <code>param</code>.

</li>

<li>
In het veld <code>robot: AccountId32</code> plak je het adres van de slimme lamp: <code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code>
</li>

<li>

In het veld <code>param: H256</code> moet je 1 (aan) of 0 (uit) specificeren om de lamp aan/uit te zetten.

Dit kun je doen met:

<code>0x0000000000000000000000000000000000000000000000000000000000000001</code>

of

<code>0x0000000000000000000000000000000000000000000000000000000000000000</code>

</li>

<li>

Druk op de knop "Transactie verzenden".

Vergeet niet om de [uitzending op YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) te openen voordat je de transactie ondertekent.

</li>


</List>

<Result>

De les wordt als voltooid beschouwd na het verzenden van een succesvolle transactie en het verschijnen ervan in de Polkadot explorer voor je Polkadot.js-account.

Je kunt je resultaten controleren op [de speciale controle dapp](https://lk.robonomics.academy/). Voor autorisatie op de controle dapp gebruik je hetzelfde account in Polkadot.js dat tijdens de cursus is gebruikt.

</Result>