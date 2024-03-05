---
title: "Lezione #3, L'Ecosistema Polkadot per l'Infrastruttura IoT Domestica"
lastUpdate: Thu May 04 2023 12:56:26 GMT+0400 (Samara Standard Time)
description: In questa lezione proverai a controllare una lampadina intelligente che funziona tramite Home Assistant, che ha dei moduli Robonomics aggiuntivi.
lessonNumber: 3
metaOptions: [Cosi online, Corso Introduzione]
defaultName: Introduction to the ideas of Robonomics
---


La lezione 2 ha spiegato i principi fondamentali di Robonomics e ha menzionato Polkadot / Kusama come promettenti piattafome blockchain per la sua implementazione. Ora è il momento di dare un'occhiata più da vicino alle funzionalità della Parachain Robonomics, come parte dell'ecosistema Polkadot nella rete Kusama. In particolare, vorremmo mostrare come funzionano gli abbonamenti IoT di Robonomics. Durante la prima lezione, il tuo indirizzo è stato inserito all'abbonamento Iot del corso e l'hai già riuscito ad utilizzarlo due volte: quando hai cercato il tuo riflesso nello specchio nero e quando hai consegnato i risultati del test.


## Intro

In questa lezione proverai a controllare una lampadina intelligente che funziona tramite Home Assistant, che ha dei moduli Robonomics aggiuntivi. Il tuo obiettivo è accendere/spegnere la lampadina utilizzando l'interfaccia standard Polkadot/Substrate sulla Parachain Robonomics. La lampadina è in diretta su [YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) così puoi vedere il tuo risultato in tempo reale. Inoltre, è disponibile un set di istruzioni più dettagliate sull'utilizzo di un abbonamento IoT sul [nostro wiki](https://wiki.robonomics.network/docs/subscription-launch/).


## Istruzioni

<List type="numbers">

<li>

Apri Robonomics [Polkadot/Substrate portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/extrinsics).

Dovresti vedere il menu Extrinsics (funzioni dell'ecosistema Polkadot). Se bloccato, utilizzando il menu in alto a sinistra vai su <code> Kusama & Parachains -> Robonomics</code>,  e premi <code>Switch</code>. Quindi vai su <code>Developer</code> nell'intestazione superiore, e poi su <code>Extrinsics</code>.

</li>

<li>
Nel primo campo, dove c'è scritto "using the selected account", seleziona lo stesso account polkadot.js che hai utilizzato nelle lezioni precedenti.
</li>

<li>
Nel secondo campo "submit the following extrinsic", seleziona <code>rws</code> extrinsics e sciegli <code>call(subscriptionId, call)</code>. Questo ti consentirà di inviare una function call utilizzando l'abbonamento IoT.
</li>

<li>
Nel campo <code>subscriptionId: AccountId32</code> copia questo indirizzo proprietario dell'abbonamento: <code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code>
</li>

<li>

Nel campo <code>call: Call</code> scegli il comando <code>launch(robot, param)</code>.

Questo ti mostrerà altri due campi: <code>robot</code> e <code>param</code>.

</li>

<li>
Nel campo <code>robot: AccountId32</code> copia questo indirizzo della lampadina intelligente: <code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code>
</li>

<li>

Nel campo <code>param: H256</code> devi specificare 1 (acceso) o 0 (spento) per accendere/spegnere la lampadina. 

Puoi farlo con:

<code>0x0000000000000000000000000000000000000000000000000000000000000001</code>

o

<code>0x0000000000000000000000000000000000000000000000000000000000000000</code>

</li>

<li>

Premi il pulsante "Submit Transaction".

 Non dimenticare di aprire lo [streaming su YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) prima di firmare la transazione.

</li>


</List>

<Result>

La lezione sarà considerata completata dopo l'invio di una transazione riuscita e la sua apparizione sul Polkadot explorer col tuo account polkadot.js.

Puoi controllare i tuoi risultati su [la dapp di controllo speciale](https://lk.robonomics.academy/). Per l'autorizzazione alla dapp di controllo utilizza lo stesso account in Polkadot.js che è stato utilizzato durante il corso.

</Result>