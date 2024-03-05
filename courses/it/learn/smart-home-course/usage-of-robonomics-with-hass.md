---
title: "Lezione n. 7, Utilizzo di Robonomics con Home Assistant"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: corso di assistente domestico
lessonNumber: 8
metaOptions: [Impara, Casa Intelligente Sovrana con Robonomics e Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Di cosa si tratta

In questa lezione, proverai a utilizzare i principali servizi IoT di Robonomics. Il primo può interrogare la telemetria dei dispositivi smart home, consentendoti di ricevere dati da remoto da Home Assistant. Il secondo servizio genera backup della configurazione di Home Assistant e la ripristina quando necessario (ad esempio, in caso di guasto delle schede SD).


## Informazioni sulle funzioni della parachain

Successivamente vedrai come le funzioni della parachain di Robonomics vengono utilizzate per fornire all'utente di Home Assistant il servizio necessario. 

L'ottenimento della telemetria si basa sul pallet <code>datalog</code> che già conosci. Ogni certo periodo di tempo (ma non meno di quanto consenta il peso accumulato), viene inviata una transazione <code>datalog.record()</code> alla parachain dall'indirizzo <code>SUB_CONTROLLER</code> con l'hash IPFS del file crittografato, dove sono raccolti tutti i dati dei tuoi dispositivi IoT. Infatti, per ottenere la telemetria, richiedi i datalog necessari dalla parachain relativi alla tua sottoscrizione IoT e poi li decifri con le tue chiavi.

Per creare un backup, viene utilizzato un altro pallet di Robonomics chiamato <code>digitalTwin</code>, che è un'implementazione dell'idea di un gemello digitale, una versione digitale di attrezzature reali che copia le sue caratteristiche tecniche e i dati storici. Prima viene creato un ID univoco per il gemello digitale di Home Assistant utilizzando l'extrinsic <code>digitalTwin.create()</code>. Quindi, utilizzando l'extrinsic <code>digitalTwin.setSource()</code>, questo ID viene legato a dei dati (il campo <code>topic</code>) e a un indirizzo nella parachain (il campo <code>source</code>). Per il backup di Home Assistant, l'hash del file di backup viene memorizzato in <code>topic</code>, e l'indirizzo <code>SUB_OWNER</code> viene memorizzato in <code>source</code>.

## Istruzioni

<List type="numbers">

<li>

Ottenere la Telemetria

<List>


<li>

Vai su dapp e scegli il servizio [Telemetria SmartHome](https://dapp.robonomics.network/#/smarthome-telemetry).

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmao9RoWcKo2qs4PAGtm5gqHzyAHJcpDqNLgciU35FJeVm', type:'mp4'}]" />

</li>

<li>

Nel campo <code>CONTROLLER</code> inserisci l'indirizzo <code>SUB_CONTROLLER</code>. Inserisci la frase seed per crittografare i dati.

</li>

<li>

Nel blocco <code>Ottieni telemetria</code> scegli un timestamp dal menu a discesa e premi il pulsante <code>SCARICA TELEMETRIA</code>.


Il download della telemetria potrebbe richiedere del tempo. Al termine, vedrai le informazioni dai tuoi sensori.

</li>
</List>
</li>


<li>

Creazione del Backup

<List>

<li>

Per creare i backup, viene chiamato un servizio che genera un archivio sicuro con i file di configurazione. Questo servizio aggiunge quindi l'archivio a IPFS e memorizza il CID risultante in Robonomics Digital Twin.

<robo-academy-note type="warning" title="WARNING">
Per ripristinare la tua configurazione, è necessario utilizzare un gateway IPFS personalizzato come Pinata (pinata.cloud) o Crust Network (crust.network). Senza di esso, il tuo backup verrà memorizzato esclusivamente sul tuo nodo IPFS locale, il che potrebbe impedirti di ripristinare la configurazione di Home Assistant in caso di guasto del nodo locale. 
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVo91dLaAYgFDM1vrL2PYfAffM6SGGC59ZERbfHR44tqW', type:'mp4'}]" />

</li>

<li>

Nell'interfaccia web di Home Assistant vai su <code>Strumenti per sviluppatori</code> -> <code>Servizi</code>. Cerca <code>Robonomics: Salva il backup su Robonomics</code> e premi <code>CHIAMA SERVIZIO</code>.

</li>

<li>

Aspetta fino a quando compare la notifica <code>Il backup è stato aggiornato in Robonomics</code> in <code>Notifiche</code>.

</li>

<li>

Per ripristinare la tua configurazione, dovrai installare una nuova istanza di Home Assistant (e ripetere tutti i passaggi precedenti) con l'integrazione di Robonomics Home Assistant utilizzando gli stessi seed creati in precedenza. Dovrai anche configurare un broker MQTT con lo stesso nome utente e password.

<robo-academy-note type="warning" title="WARNING">
Dato che alcuni dispositivi collegati a Home Assistant tramite Wi-Fi o MQTT richiedono di specificare esplicitamente l'indirizzo IP locale del tuo Raspberry Pi, quando ripristini un backup, potrebbero non essere disponibili a causa di un cambiamento di questo IP. Dovrai reinserire il nuovo indirizzo IP nelle impostazioni di questi dispositivi. Per evitare ciò, puoi impostare un IP locale statico per il tuo Raspberry Pi nelle impostazioni del router (se supporta questa funzione).
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmWmnmkXUcPXsAnQzwN3UEuki2GMYnQDx3vhgjEypCU8aR', type:'mp4'}]" />


</li>

<li>

Nell'interfaccia web di Home Assistant vai su <code>Strumenti per sviluppatori</code> -> <code>Servizi</code>. Cerca <code>Robonomics: Ripristina il backup da Robonomics</code> e premi <code>CHIAMA SERVIZIO</code>. Vai alla pagina <code>Panoramica</code> per controllare lo stato del tuo backup.

</li>

<li>

Una volta che Home Assistant ha finito di riavviarsi, la tua configurazione sarà ripristinata. Se lo stato cambia in <code>ripristinato</code> ma Home Assistant non si riavvia automaticamente, dovrai riavviarlo manualmente navigando su <code>Impostazioni</code> > <code>Sistema</code> e cliccando sul pulsante <code>Riavvia</code> nell'angolo in alto a destra.

</li>

</List>
</li>

</List>

## Corso completato

<List>

<li class="flex"> 

Congratulazioni! Hai completato con successo l'intero setup e il dispiegamento della tua smart home sovrana. Ora puoi richiedere un certificato di completamento del corso da noi visitando il nostro canale Discord. Scrivici nella chat [robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315) e il nostro rappresentante ti contatterà.
</li>

<li class="flex">

La prova del completamento del corso sono transazioni corrispondenti che possono essere verificate nell'esploratore di [Polkadot](https://robonomics.subscan.io/). Si tratta di transazioni relative all'acquisto di un abbonamento, all'aggiunta di un dispositivo a un abbonamento e all'invio di datalog dai dispositivi.

</li>

</List>