---
title: "Lezione n. 4, modulo di connettività dei sensori"
description: 'MODULO DI CONNETTIVITÀ DEI SENSORI'
lessonNumber: 4
metaOptions: [Imparare, Connettività dei sensori e Rete decentralizzata di sensori]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Nei seguenti articoli, imparerai di più sul modulo di connettività dei sensori. Dopo di che, potrai unirti all'hosting della nostra Rete di Sensori Decentralizzata o creare la tua mappa dei sensori.

## Informazioni sulla connettività dei sensori

La Rete di Sensori Decentralizzata utilizza il modulo `sensors-connectivity` in Python ([codice sorgente](https://github.com/airalab/sensors-connectivity)). Questo modulo permette a qualsiasi utente di avviare il proprio server per ricevere dati dai sensori e elaborarli ulteriormente. Al momento, gli sviluppatori hanno lanciato diversi server del genere e qualsiasi sensore può inviare dati a essi. L'avvio di server multipli evita la perdita di dati in caso di problemi con uno di essi, poiché i sensori passeranno da un server non funzionante a uno funzionante. Fondamentalmente, puoi pensare al modulo di connettività dei sensori come a una scatola nera con un ingresso (dati del sensore) e molti uscite.

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

Il modulo di connettività dei sensori è un insieme di stazioni (stazione_1, stazione_2 ... stazione_n), che ricevono vari dati, inclusi dati dai sensori tramite protocollo HTTP. Possono anche essere sensori collegati al computer tramite USB o qualsiasi altra fonte di dati. I dati ricevuti dalle stazioni vengono elaborati dal modulo e passati ai feeder (feeder_1, feeder_2 ... feeder_n). I feeder inviano i dati elaborati all'utente; nel nostro caso i dati vengono inviati al canale IPFS decentralizzato. 

Una mappa della [Rete di Sensori Decentralizzata](https://sensors.robonomics.network/#/) è un'applicazione decentralizzata (dapp) in esecuzione sul computer. Legge i dati dal canale IPFS e li visualizza sulla mappa. Non c'è una connessione diretta tra il server che raccoglie i dati dai sensori e la mappa che l'utente vede; i dati vengono trasferiti tra loro tramite IPFS pubsub, il che riduce il carico sui server. 

Inoltre, di tanto in tanto, un file con i dati dell'ultimo periodo di tempo viene memorizzato in IPFS, e un hash di questi dati viene quindi registrato sulla blockchain. Poiché IPFS è una rete basata sui contenuti, memorizzare i dati al suo interno garantisce che qualsiasi modifica ai dati non passi inosservata, poiché l'indirizzo del file necessario contiene un hash del suo contenuto, che cambierà con qualsiasi modifica ai dati. La blockchain viene utilizzata per passare l'hash all'utente, che può usarlo per ottenere i dati necessari da IPFS (questo avviene quando si richiede la cronologia della mappa).

## Configurazione del modulo per Linux

**Prerequisiti e Installazione**

<List type="numbers">

<li>

Per compilare il modulo `sensors-connectivity` è necessario installare il demone IPFS con una versione non superiore a `0.8.x`. Presumendo che tu stia lavorando su Linux, esegui quanto segue (per la versione `0.8.0`):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

Installare il pacchetto con gli strumenti di sviluppo `python3-dev` e l'installatore di pacchetti per Python `pip`:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

Installare il modulo come un pacchetto PyPI:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

Se si vede il seguente avviso: 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

Eseguire il comando successivo:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## Configurazione

<List type="numbers">

<li>

Creare una directory per il file di configurazione e il file del database ovunque si desideri. Questo database salverà gli hash IPFS dei dati del sensore, il timestamp e lo stato del servizio:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
Il nome del file del database può essere qualsiasi, ma l'estensione deve essere <code>.db</code>
</RoboAcademyNote>

</li>


<li>

Creare il file di configurazione nella stessa directory:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

Copiare e incollare quanto segue nel file e inserire il percorso completo del file del database nel campo db_path. Questa configurazione sarà sufficiente per ottenere i dati dei sensori tramite HTTP e inviarli alla mappa Robonomics:

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation": {
      "enable": false,
      "port": "/dev/<YOUR/PATH/TO/BOARD>",
      "work_period": 300,
      "geo": "00.000000,00.000000",
      "public_key": ""
   },
   "httpstation": {
      "enable": true,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

</List>

## Avvio


<List type="numbers">

<li>

Avviare il demone IPFS:

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

Dopo aver impostato la configurazione, eseguire il servizio con il percorso del file di configurazione in un'altra finestra del terminale:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

Vedrai i log nel terminale (verranno inoltre aggiunti a `~/.logs`). Esempio:

<LessonCodeWrapper codeClass="big-code" language="bash">$ sensors_connectivity test.json
2022-09-02 14:08:48,408 - INFO - Getting data from the stations...
2022-09-02 14:08:48,409 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:08:48,409 - INFO - Sending result to the feeders...
2022-09-02 14:08:48,411 - INFO - Checking data base...
2022-09-02 14:09:18,410 - INFO - Sending result to the feeders...
2022-09-02 14:09:18,410 - INFO - Getting data from the stations...
2022-09-02 14:09:18,411 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:09:48,411 - INFO - Sending result to the feeders...
2022-09-02 14:09:48,412 - INFO - Getting data from the stations...
2022-09-02 14:09:48,413 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:10:18,413 - INFO - Sending result to the feeders...
2022-09-02 14:10:18,413 - INFO - Getting data from the stations...</LessonCodeWrapper>

</li>

</List>

## Post-installazione

Per connettere il tuo modulo `sensors-connectivity` alla nostra Rete di Sensori Decentralizzata e vedere i tuoi dati sulla mappa, devi inviare il tuo ID IPFS a [vm@multi-agent.io](mailto:vm@multi-agent.io) o [ping@airalab.org](mailto:ping@airalab.org). Aggiungeremo il tuo ID a una lista di controllo degli accessi.

Ottieni il tuo ID IPFS con il seguente comando dopo aver avviato il demone IPFS:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>