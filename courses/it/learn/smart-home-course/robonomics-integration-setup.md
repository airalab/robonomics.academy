---
title: "Lezione #6, Impostazione dell'integrazione Robonomics"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: corso di assistente domestico
lessonNumber: 7
metaOptions: [Impara, Casa Intelligente Sovrana con Robonomics e Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## Di cosa si tratta

In questa lezione, aggiungerai Robonomics a Home Assistant e creerai un account associato all'abbonamento. Questa integrazione consente a Home Assistant di utilizzare le funzioni della parachain di Robonomics, innanzitutto, inviare dati smart home crittografati a un cloud decentralizzato.


## Teoria

I tuoi dati smart home vengono inviati utilizzando l'estrinseco <code>record()</code> dal pallet <code>datalog</code> che ti consente di salvare i dati del dispositivo crittografati sulla blockchain. 

Per essere più precisi, l'integrazione utilizza IPFS per memorizzare i dati e quindi invia gli hash IPFS all'estrinseco datalog, che a sua volta viene memorizzato nella blockchain. Ma poiché questa funzione viene chiamata tramite un abbonamento IoT, l'intera funzione appare come: <code>rws.call(datalog.record(IL TUO_HASH_IPFS))</code>.

## Istruzioni

<List type="numbers">

<li>

Aggiungere Robonomics a Home Assistant

<List>

<li>

Nell'interfaccia web di Home Assistant vai su <code>Impostazioni</code>-><code>Dispositivi e Servizi</code> e premi <code>AGGIUNGI INTEGRAZIONE</code>. Cerca <code>Robonomics</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQp66J943zbF6iFdkKQpBikSbm9jV9La25bivKd7cz6fD', type:'mp4'}]" />

</li>

<li>

Clicca su Robonomics e compila la configurazione: 

\- Aggiungi il seed dell'account <code>SUB_CONTROLLER</code> all'account seed dell'amministratore

\- Aggiungi l'indirizzo pubblico dell'account <code>SUB_OWNER</code> (che hai creato in precedenza) all'indirizzo del proprietario dell'abbonamento

\- Imposta l'intervallo di invio dei dati (di default è di 10 minuti)

\- (Opzionale) Puoi aggiungere credenziali per il servizio di pinning Pinata per diffondere i tuoi dati in modo più ampio sulla rete IPFS

</li>

<li>

Premi <code>INVIA</code> dopo aver completato la configurazione. Se hai compilato tutto correttamente, vedrai la finestra di Successo.

</li>
</List>
</li>

<li>

Aggiunta di utenti in Robonomics Dapp 

<List>

<li>

È necessario creare un utente separato per Home Assistant, che controllerà i dispositivi smart home. Non è possibile utilizzare account creati in precedenza perché <code>SUB_OWNER</code> e <code>SUB_CONTROLLER</code> forniscono sicurezza, e il primo utente creato quando hai avviato Home Assistant per la prima volta non ha un account Robonomics Parachain.

</li>

<li>
Inizia creando un account su Robonomics Parachain, come hai fatto nella lezione precedente.
</li>

<li>

Aggiungi questo account alla sottoscrizione nel [dapp](https://dapp.robonomics.network/#/subscription/devices). Ora dovrebbero esserci tre indirizzi nell'elenco degli accessi: <code>SUB_OWNER</code>, <code>SUB_CONTROLLER</code> e <code>USER</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSxzram7CF4SXpVgEyv98XetjYsxNFQY2GY4PfyhJak7H', type:'mp4'}]" />

</li>

<li>

Vai al servizio dapp chiamato [Home Assistant Account](https://dapp.robonomics.network/#/home-assistant). Scegli l'account che hai appena creato nella barra laterale destra (controlla di aver scelto l'account desiderato premendo l'icona del profilo).

Inserisci il seed di <code>USER</code> nel campo richiesto. Aggiungi gli indirizzi <code>SUB_OWNER</code> e <code>SUB_CONTROLLER</code> nei campi dei crediti dell'amministratore. Se tutto è corretto, vedrai lo stato di verifica <code>VERIFIED</code>.

</li>

<li>

Crea una password per un nuovo utente che hai appena registrato e poi conferma la transazione, che ora sarà senza commissioni a causa della sottoscrizione. In seguito potrai ripristinare la password nella scheda <code>Restore</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmW2TXuwCYXzgcRfEUx4imZU5ZerEzkuD5P53u9g2WnxDh', type:'mp4'}]" />

</li>

<li>

Dopo il processo di registrazione, accedi a Home Assistant con il tuo indirizzo utente come login e una password appena creata. Ora puoi utilizzare Robonomics dapp per controllare la tua casa tramite Robonomics.

</li>
</List>
</li>
</List>