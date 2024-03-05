---
title: "Lezione #5, Abbonamenti IoT con la Parachain Robonomics"
lastUpdate: Thu May 04 2023 12:56:21 GMT+0400 (Samara Standard Time)
description: Imparerai ad acquistare un abbonamento IoT sulla Parachain Robonomics utilizzando i veri token della nostra rete.
lessonNumber: 5
metaOptions: [Cosi online, Corso Introduzioneduzioneduzioneduzioneduzioneduzioneduttivo]
defaultName: Introduction to the ideas of Robonomics
---


L'ultima lezione del nostro coso introduttivo è molto probabilmente la più difficile, perché ti richiederà un po' di manualità e pazienza. Imparerai ad acquistare un abbonamento IoT sulla Parachain Robonomics utilizzando i veri token della nostra rete.



## Intro

Un abbonamento IoT è una chiave di accesso a tutte le funzioni relative al cambiamento di stato del digital twin di un sistema cyber-fisico e alla memorizzazione delle informazioni su di esso, utilizzando l'ecosistema Polkadot/Kusama. Possedere un abbonamento svincola l'utente dalla necessità di dover pagare una commissione per la transazione. Potrà invece inviare una transazione gratuita in un determinato lasso di tempo.

Il metodo principale per acquistare un abbonamento è partecipare a una sua asta, quindi per questa lezione dovresti avere dei token XRT per fare offerte e inviare transazioni. Maggiori informazioni su questo procedimento sono disponibili anche sul [nostro wiki](https://wiki.robonomics.network/docs/get-subscription).



## Istruzioni

<List type="numbers">

<li>

You need around 2 XRT Robonomics Parachain tokens ([riguardo al token](https://robonomics.network/xrt/)). Se non ne hai, puoi ottenerli in diversi modi:

a) Se superi entrambi i test dopo la Lezione 2 e la Lezione 4 con il 90% di risposte corrette, puoi richiedere token gratuiti per la lezione. Controlla i tuoi punteggi sul [dapp di controllo speciale](https://lk.robonomics.academy/). In particolare, devi ottenere 15 su 17 per la Lezione 2 e 10 su 11 per la Lezione 4, e hai due tentativi per farlo. Per ottenere i token, contatta l'Amministratore dell'Accademia sul nostro [Discord](https://discord.gg/xqDgG3EGm9) (IBerman#5862).

b) Buy XRT tokens on one of the exchanges (check out the [list of exchanges](https://www.coingecko.com/en/coins/robonomics-network#markets/)). Fai attenzione se non hai familiarità con gli exchange di criptovalute, ricorda che tutti gli acquisti possono avere dei potenziali rischi, acquista solo la quantità di token necessaria a superare questa lezione. Also, keep in mind that Robonomics exists on two networks, Ethereum and Kusama, so each network has its own XRT token. You need a token that used by parachain in Kusama network.

c) Se hai il token XRT nella rete Ethereum (formato ERC-20), utilizza il processo [Exodus](https://old.dapp.robonomics.network/#/exodus) per trasferire i token dalla rete Ethereum a Kusama. Tieni presente che il trasferimento dei token viene effettuato una volta alla settimana.

</li>

<li>

Gli abbonamenti IoT vengono acquistati tramite un regolare processo ad asta, con il miglior offerente che ottiene un abbonamento. 

Prima di provare a partecipare all'asta, dovresti controllare se ce ne sono di disponibili. Apri il portale [Polkadot/Substrate](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/chainstate) di Robonomics con il menu Chain state. Seleziona <code>rws</code> interroga con <code>auctionQueue()</code> e premi il pulsante ‘+’. Dovresti vedere gli ID delle aste disponibili; ricorda l'ID di uno di loro.  Se non viene mostrata nessuna asta o non sono disponibili, contattaci sul nostro Discord in "[🎓robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315)" channel.

Ora, nello stesso menu Chain state, seleziona <code>rws</code> con <code>auction(u32): Option&lt;PalletRobonomicsRwsAuctionLedger&gt;</code> e nel campo <code>u32</code> inserisci l'ID dell'asta che hai ricordato. Dopo aver premuto il pulsante ‘+’ vedrai le informazioni su un'asta interessante. Se il campo <code>winner</code> vincitore da <code>null</code> come valore, allora nessuno ha questo abbonamento e puoi provare a ottenerlo.

</li>

<li>

Fai un'offerta con i tuoi token XRT.

Vai al menu Developer -> Extrinsic e con lo stesso account polkadot.js utilizzato nelle lezioni precedenti, scegli extrinsic <code>rws</code> con <code>bid(index, amount)</code>. Nel campo <code>index</code> inserisci l'ID dell'asta di interesse. Nel campo <code>amount</code> devi inserire il numero di Token per l'offerta, convertito in "wieners" (1 XRT = 1 000 000 000 Wn). Si prega di controllare il prezzo corrente dell'abbonamento nella nostra [dapp](https://dapp.robonomics.network/#/subscription). 

Invia la transazione e con un po' di fortuna otterrai l'abbonamento IoT. Puoi verificare che il tuo indirizzo Polkadot possieda l'abbonamento tramite lo stesso menu Chain state.

</li>

<li>

L'ultimo passaggio consiste nell'aggiungere dei dispositivi al tuo abbonamento IoT. Questo significa semplicemente che assegnerai all'abbonamento degli indirizzi Polkadot aggiuntivi, che tu o i tuoi dispositivi potete utilizzare per eseguire degli extrinsics (ad esempio, per avviare dispositivi o per inviare i loro dati alla blockchain).


Prima di iniziare, crea un nuovo account per la Parachain Robonomics (guida sul [nostro wiki](https://wiki.robonomics.network/docs/create-account-in-dapp/)), e chiamalo "smart device" per comodità.

Quindi vai al menu Developer -> Extrinsic e seleziona <code> rws</code> con <code>setDevices()</code>. Nell'elenco dei dispositivi, utilizza il pulsante "Add item" per aggiungere dispositivi e seleziona l'account creato per dispositivi intelligenti. Successivamente, invia la transazione.

L'indirizzo del dispositivo deve essere aggiunto all'abbonamento. Puoi verificarlo nel menu Chain state interrogando <code>rws</code> con <code>devices()</code> per il tuo account polkadot.js che ha l'abbonamento.

</li>

</List>


<Result>

La lezione sarà considerata completata dopo che la transazione con l'acquisto di un abbonamento IoT andata a buon fine e avrai aggiunto di un dispositivo. Transactions should appear in the Polkadot explorer for your account.

Puoi controllare i tuoi risultati su [la dapp di controllo speciale](https://lk.robonomics.academy/). Per l'autorizzazione alla dapp di controllo utilizza lo stesso account in Polkadot.js che è stato utilizzato durante il corso.

</Result>