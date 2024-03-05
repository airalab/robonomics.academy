---
title: "Lezione n. 5, Configurazione dell'abbonamento Robonomics IoT"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: corso di assistente domestico
lessonNumber: 6
metaOptions: [Impara, Casa Intelligente Sovrana con Robonomics e Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## Di cosa si tratta

L'abbonamento Robonomics IoT consente agli utenti di utilizzare tutte le funzioni della parachain per un certo periodo senza pagare le commissioni di transazione standard. Attivando l'abbonamento, i dispositivi saranno in grado di inviare transazioni in priorità.

In questa lezione, creerai gli account necessari per la sicurezza della smart home e acquisterai un abbonamento IoT.

## Teoria

Un abbonamento IoT, così come il metodo con cui viene acquistato e gestito, è implementato utilizzando un pallet <code>rws</code>, che contiene tutte le funzioni necessarie. In generale, gli abbonamenti in Robonomics vengono venduti con un modello di asta, che utilizza un estrinseco <code>rws.startAuction()</code> per creare un'asta per un ID di abbonamento specifico. Gli utenti possono accedere all'asta tramite ID e fare offerte utilizzando un estrinseco <code>rws.bid()</code>.

Dopo la fine dell'asta, l'indirizzo con l'offerta vincente viene assegnato all'abbonamento. Ora questo indirizzo sarà in grado di inviare transazioni tramite l'estrinseco <code>rws.call()</code> senza commissioni. Tuttavia, ciò non significa che l'indirizzo possa farlo incontrollabilmente in qualsiasi momento: ogni abbonamento ha una certa quantità di un valore <code>weight</code>, che deve accumularsi prima che possa essere eseguita una transazione gratuita. Alcuni valori di <code>weight</code> vengono aggiunti all'abbonamento ad ogni blocco generato nella parachain, grazie a questo, Robonomics regola la larghezza di banda della parachain.

Inoltre, il proprietario dell'abbonamento può utilizzare l'estrinseco <code>rws.setDevices()</code>, che condivide l'uso dell'abbonamento agli indirizzi specificati. Allo stesso tempo, il <code>weight</code> rimane lo stesso, quindi più indirizzi nell'abbonamento, più tempo dovranno aspettare prima di inviare la transazione gratuita.

Per controllare Home Assistant con Robonomics, è necessario avere due account sulla parachain di Robonomics. Questi account forniranno sicurezza per il tuo Home Assistant.

Con uno degli account (<code>SUB_OWNER</code>), acquisterai un abbonamento Robonomics. Questo account funge da amministratore principale dell'abbonamento IoT e fornisce accesso a Home Assistant ad altri utenti (utilizzando <code>rws.setDevices()</code>). Questo account deve avere alcuni token XRT per completare le transazioni di acquisto dell'abbonamento.

Il secondo account (<code>SUB_CONTROLLER</code>) controllerà tutti i processi di Home Assistant dei dispositivi (come la telemetria). Le transazioni dei tuoi dispositivi verranno inviate per conto dell'account <code>SUB_CONTROLLER</code>. Tu (e chiunque altro) potrai vedere queste transazioni in qualsiasi esploratore di parachain come [Subscan](https://robonomics.subscan.io/). Tuttavia, solo tu potrai decifrare i contenuti di queste transazioni fintanto che possiedi in modo sicuro le frasi seed necessarie.

## Istruzioni

<List type="numbers">

<li>

Creazione degli Account Parachain Owner e Controller

<List>

<li>

<robo-academy-note type="warning" title="WARNING">
Entrambi gli account devono essere creati con crittografia ed25519.
</robo-academy-note>

</li>

<li>

Vai all'app Robonomics Parachain su [Polkadot / Substrate Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) su Polkadot / Substrate Portal. Controlla l'angolo in alto a sinistra per assicurarti di essere connesso alla Parachain di Robonomics.

</li>

<li>

A causa dell'uso del formato *ed25519*, è necessario creare un account utilizzando l'interfaccia utente Polkadot-JS e selezionare la crittografia richiesta. 

Questa funzionalità è disabilitata per impostazione predefinita sull'interfaccia utente Polkadot-JS. Per abilitarla, vai a <code>Impostazioni</code> -> <code>Generale</code> -> <code>opzioni account</code> e seleziona <code>Consenti archiviazione locale in-browser account</code> nel menu a discesa <code>creazione account in-browser</code>.
 
</li>

<li>

Vai su <code>Account</code> -> <code>Account</code> e premi il pulsante <code>Aggiungi account</code>. Vedrai il menu a comparsa con il seed dell'account. Ha due forme: *Mnemonic* (leggibile dall'essere umano) e *Raw* (una sequenza di cifre e lettere).

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQiJYPYajUJXENX2PzSJMSKGSshyWyPNqugSYxP5eCNvm', type:'mp4'}]" />

</li>

<li>

Apri <code>Opzioni avanzate di creazione</code>, cambia il tipo di crittografia per la creazione dell'account in <code>Edwards - ed25519</code>. Salva la frase seed mnemonica in modo sicuro e premi <code>Avanti</code>.

</li>

<li>

Nel menu successivo, è necessario impostare il nome dell'account e la password. Dà un nome <code>SUB_OWNER</code> per comodità e premi <code>Avanti</code>.

</li>

<li>

Nell'ultima finestra clicca su <code>Salva</code> per completare la creazione dell'account. Genererà anche dei file JSON di backup che dovresti conservare in modo sicuro. In seguito potrai utilizzare questo file per ripristinare il tuo account se ricordi la password.

</li>

<li>

Ripeti questi passaggi per l'account <code>SUB_CONTROLLER</code>.

</li>
</List>
</li>

<li>

Aggiunta di account all'estensione Polkadot.js

<List type="numbers">

<li>

Per comodità, dovresti utilizzare l'estensione Polkadot.js e aggiungere questi account appena creati ad essa. Per un account ed25519 puoi farlo solo con un file JSON di backup. Puoi utilizzare i file salvati quando hai creato gli account.

Puoi ottenere di nuovo questi file creando un file di backup dell'account. Premi sui tre puntini sul tuo account, scegli <code>Crea un file di backup per questo account</code> e inserisci la tua password.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmRd7gztUjWkLF4W2XuJwy5aXBwzNV2aPCU6CQQLvUpSNj', type:'mp4'}]" />

</li>

<li>

Apri un'estensione e premi il pulsante <code>+</code> in alto a destra, quindi scegli <code>Ripristina account da file JSON di backup</code>.

</li>

<li>

In una finestra aperta carica il file JSON, inserisci la password e premi <code>Ripristina</code>

</li>

<li>

Assicurati che la rete Robonomics sia selezionata per gli account nell'estensione Polkadot.js. Su Polkadot / Substrate Portal vai su <code>Impostazioni</code> -> <code>Metadati</code> e clicca sul pulsante <code>Aggiorna metadati</code>. 

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmT5sTNP9t8gpbD4RJJw6ETwG4wiziiChAh2uHHBk9Zsyd', type:'mp4'}]" />

</li>

<li>

Conferma l'aggiornamento dei metadati nel popup. Ora l'estensione mostrerà l'etichetta della rete per cui l'indirizzo è utilizzato.

</li>

</List>
</li>

<li>

Attivazione dell'abbonamento Robonomics

<List >

<li>

<robo-academy-note type="okay">
Per questo passaggio, devi avere una quantità sufficiente di token XRT (minimo 2-3 XRT) nel tuo account <code>SUB_OWNER</code>.
</robo-academy-note>

Vai alla dapp Robonomics alla [pagina di abbonamento](https://dapp.robonomics.network/#/subscription) e premi <code>connetti account</code> nella barra laterale destra.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmXrFCajmJgkRDSbshGD3QehjnoyS6jafEPSjHdYkoBHum', type:'mp4'}]" />

</li>

<li>

Nel menu popup successivo collega l'estensione Polkadot.js. Vedrai il tuo indirizzo dell'account con il saldo.

</li>

<li>

Prima dell'acquisto, controlla di aver scelto l'account <code>SUB_OWNER</code>. Premi sull'icona del profilo dell'indirizzo, dovresti vedere l'account <code>SUB_OWNER</code> sotto il campo <code>Controlla account proprietario</code>.

</li>

<li>

Infine, premi il pulsante <code>INVIA</code> e inserisci la password per il tuo account. Dopo di che attendi fino a quando il processo di attivazione è completato. Vedrai lo stato del tuo abbonamento dopo un po' di tempo.

Se non ci sono abbonamenti disponibili, **contatta** il team Robonomics.

</li>
</List>
</li>

<li>

Aggiunta dell'account all'abbonamento

<List type="numbers">

<li>

Ora devi aggiungere l'account <code>SUB_CONTROLLER</code> alla **lista di accesso**. Apri l'estensione e clicca sull'icona vicino al nome dell'account. Copierà l'indirizzo dell'account.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmV1gkwtcXsWv54ov9tuXfcHg7nqs1foM8cRwts4sqnqtX', type:'mp4'}]" />

</li>

<li>

Incolla questo indirizzo nel campo <code>Indirizzo della parachain Robonomics</code> nella parte **Gestisci accesso**.

Dagli un nome e premi il pulsante <code>+</code>. Inserisci la password del tuo <code>SUB_OWNER</code> nella finestra popup e attendi fino a quando il processo di attivazione è completato.

</li>

<li>

Ripeti i passaggi per l'account <code>SUB_OWNER</code>.
</li>
</List>
</li>
</List>