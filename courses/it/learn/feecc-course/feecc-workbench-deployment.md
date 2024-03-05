---
title: "Deployment of Engineer Workbench"
description: Questo corso riguarda la conoscenza del sistema Feecc e di tutti i suoi componenti.
metaOptions: [Imparare, Abituarsi a Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In questa lezione imparerai come distribuire da solo i componenti necessari di Feecc Engineer Workbench.
</RoboAcademyText>

Tra i componenti:

- Workbench Daemon
- Workbench Frontend
- IPFS Gateway
- HID Reader Daemon

Tutti i componenti vengono avviati utilizzando [Docker](https://docs.docker.com/engine/install/ubuntu/) e [Docker compose](https://docs.docker.com/compose/), assicurati di avere loro installati.

## Preparazione del software

1. I componenti di Feecc utilizzano il database [MongoDB](https://www.mongodb.com/) per memorizzare e accedere ai dati. Prima di utilizzare Feecc, è necessario distribuire MongoDB nel modo che preferisci. Ecco alcune opzioni di distribuzione: [usando il tuo server](https://www.mongodb.com/try/download/community), [database cloud in Atlas](https://www.mongodb.com/atlas) (gratuito), [database cloud in DigitalOcean](https://www.digitalocean.com/products/managed-databases-mongodb) (a pagamento). 
    
    In ogni caso, è necessario ottenere il tuo URI di connessione a MongoDB, che dovrai inserire come valore della variabile `MONGODB_URI` per tutti i componenti del sistema.
    
2. Se desideri sfruttare lo storage affidabile e trasparente dei dati dal tuo sistema di produzione, è necessario creare un account su Robonomics. Per farlo, utilizza le istruzioni disponibili al seguente link: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    È necessario salvare la frase seed dell'account in quanto verrà utilizzata successivamente nella variabile `ROBONOMICS_ACCOUNT_SEED`.

## Preparazione del Workbench

Prima di iniziare, collega tutta l'attrezzatura necessaria al computer o al server:

- stampante di etichette tramite USB
- lettori RFID/barcode tramite USB
- telecamera IP tramite router PoE/switch di rete
- monitor con tastiera e mouse o touchscreen tramite USB e HDMI/VGA (opzionale)

## Avvio del demone del lettore HID

1. Clona il repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. Avviare il demone:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Avvio del demone del banco di lavoro

1. Clona il repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. Configurare il demone per le proprie esigenze utilizzando il file `docker-compose.yml`. Il file contiene varie variabili d'ambiente:

    - Configurazione di MongoDB;
    - Configurazione di Robonomics;
    - Configurazione di IPFS;
    - parametri della stampante;
    - parametri della fotocamera;
    - parametri dei lettori RFID / codici a barre.
    
    L'elenco completo delle variabili è disponibile nel [repository](https://github.com/Multi-Agent-io/feecc-workbench-daemon) del demone.
    
    - `MONGODB_URI`: il tuo URI di connessione a MongoDB;
    - `MONGODB_DB_NAME`: un nome di database di MongoDB;
    - `MONGODB_DB_NAME`: un nome del database di MongoDB;

`WORKBENCH_NUMBER`: numero del banco di lavoro dell'impiegato.

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

3. Avviare il demone:

## Lancio del gateway IPFS

1. Clona il repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. Configura il microservizio per le tue esigenze utilizzando il file `docker-compose.yml`. Il file contiene le variabili d'ambiente per la connessione con MongoDB, Robonomics e Pinata. L'elenco completo delle variabili è disponibile nel repository del gateway [repository](https://github.com/Multi-Agent-io/feecc-ipfs-gateway).

3. Avvia il microservizio:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Lancio del frontend di Workbench

1. Clona il repository:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. Vai alla directory `configs` e configura il servizio frontend per le tue esigenze utilizzando il file `config.json`. I seguenti parametri sono particolarmente importanti:
    - `socket` — inserisci qui l'indirizzo del Workbench Daemon;
    - `interface_language` — lingua dell'interfaccia, disponibili le opzioni `en` e `ru`;
    - `dev_show_reducers` — abilitazione/disabilitazione della modalità sviluppatore;
    - `pulling_period` — periodo di ricezione dei dati dal backend in millisecondi;

3. Avvia il container frontend:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Verifica la sua funzionalità. Vai sul browser e apri la pagina `http://localhost:3000`, dovresti vedere una pagina di autorizzazione.

<RoboAcademyText fWeight="500">
Nella prossima lezione, passeremo al servizio di analisi Feecc.
</RoboAcademyText>