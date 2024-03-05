---
title: "Lezione n. 7, i sensori Robonomics misurano analisi e archiviano il nodo"
description: 'ROBONOMICS SENSORI MISURANO ANALISI E ARCHIVIANO NODO'
lessonNumber: 7
metaOptions: [Imparare, Connettività dei sensori e Rete decentralizzata di sensori]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

I sensori Robonomics misurano l'analisi e archiviano il nodo o RoSeMAN è un servizio per accumulare dati dei sensori per mostrare la storia delle misurazioni. In questo articolo configurerai il servizio.

## Requisiti

RoSeMAN richiede un server di database [MongoDB](https://www.mongodb.com/docs/manual/introduction/), si presume che tu lo abbia già. Inoltre, devi attivare l'opzione datalog per il modulo di connettività dei sensori, come mostrato nello Scenario n. 3. Dovresti avere token XRT gratuiti sul tuo account Robonomics, che è collegato al modulo di connettività dei sensori. 


## Configurazione

<List type="numbers">

<li>

Scarica il repository:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

Crea file di configurazione:

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Apri il file `config.json` e modifica il percorso del database:

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

Aggiungi l'indirizzo pubblico del tuo account al file `agents.json`. Puoi aggiungere diversi indirizzi al file, se desideri raccogliere dati da diversi moduli di connettività dei sensori.

</li>


<li>

Installa le dipendenze e crea il server:

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

Avvia il server RoSeMAN:

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

Il server web dovrebbe avviarsi su `http://127.0.0.1:3000`.

</li>

</List>

## Post-installazione

Dopo aver distribuito RoSeMAN su un server, devi ottenere l'indirizzo IP pubblico o l'URL del server. In alternativa, se esegui RoSeMAN e la mappa dei sensori sullo stesso server, puoi utilizzare l'indirizzo IP locale.

Successivamente, devi aprire il file di configurazione della mappa dei sensori e inserire il tuo URL nel file `config.json` nel campo `REMOTE_PROVIDER`


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

Ricostruisci la mappa con `yarn build` e avviala di nuovo; sarai in grado di vedere la storia delle misurazioni.