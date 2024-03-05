---
title: "Demo di Feecc"
description: Questo corso riguarda la conoscenza del sistema Feecc e di tutti i suoi componenti.
metaOptions: [Imparare, Abituarsi a Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In questa lezione, testerai le funzioni di base di Feecc utilizzando un banco di prova virtuale come esempio, che emula un'istanza reale di un sistema di tracciamento della produzione.
</RoboAcademyText>

Per scopi dimostrativi è privo di alcune funzionalità tipiche come la stampa delle etichette o la registrazione video, ma mantiene il concetto principale di un tale sistema.

## Prerequisiti

Per eseguire la demo, avrai bisogno di:

- Sistema simile a UNIX (testato su [Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/))
- [Docker](https://docs.docker.com/engine/install/ubuntu/) e [Docker compose](https://docs.docker.com/compose/)
- Browser web (testato su Google Chrome e Mozilla Firefox)

## Installazione

Esegui i seguenti comandi:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

Per controllare i container in esecuzione, esegui il seguente comando:

<LessonCodeWrapper language="bash">
sudo docker ps -a
</LessonCodeWrapper>

Dovresti vedere il seguente output:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## Avvio della demo

1. Vai su http://localhost:3000/ nel tuo browser, dovresti vedere una schermata di benvenuto.

2. A questo punto, il sistema dovrebbe chiedere all'impiegato di posizionare la propria carta RFID sullo scanner per l'autorizzazione. Nella demo, puoi utilizzare `hid-emulator.py` per l'autorizzazione. Per farlo, esegui un container Docker separato:

<LessonCodeWrapper language="bash">
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

È in grado di emulare due funzioni: fornire una carta RFID e scansionare un codice a barre; hai bisogno della prima funzione, inserisci `1`.

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the Scanner RFID.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. Vedrai lo schermo per la selezione del tipo di composizione, scegli `SINGLE DEVICE`.

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. Le notifiche appariranno nell'angolo in basso a sinistra indicando l'inizio del lavoro sul dispositivo per il quale viene creato un ID univoco. La notifica blu mostrerà anche l'attività della stampante virtuale; durante la configurazione effettiva, in questo momento verrà stampato un codice a barre con l'ID del dispositivo.

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. Clicca su `START COMPOSITION` per iniziare a registrare il processo di assemblaggio del dispositivo. Ti verrà chiesto di passare attraverso tutti i passaggi di assemblaggio necessari; ogni volta che un dipendente completa un passaggio, dovrebbe fare clic sul pulsante `NEXT`, dopodiché il video verrà salvato su IPFS. È anche possibile sospendere l'assemblaggio (`PAUSE`) per tornarci più tardi o interrompere completamente il processo (`STOP`).

6. Quando tutte le fasi di assemblaggio sono completate, compare il pulsante `FINISH`, dopodiché Feecc suggerisce di salvare il certificato del dispositivo. Tuttavia, prima di farlo, apri il [nodo Robonomics locale](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) nel tuo browser, ne avrai bisogno in seguito. Dopo di che, torna su Feecc e clicca su `SAVE PASSPORT`.
    
    Vedrai nuove notifiche nell'angolo dello schermo: notifica che il certificato è stato caricato su Robonomics e IPFS, così come due messaggi blu riguardanti la stampa del tag del sigillo e il QR-code che porta al certificato.

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. Nella sezione `Chain info` sullo schermo del nodo locale di Robonomics, dovresti vedere un nuovo evento `datalog.NewRecord` sotto la colonna `recent events`. Se lo espandi, verrà mostrato il CID di IPFS corrispondente al file del certificato del dispositivo nel campo `bytes`.

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

Il codice QR stampato contiene un link a questo CID, che consente di aprire il file del certificato nel browser. Poiché il tuo nodo IPFS locale potrebbe non avere quella discoverability, potresti raggiungere il file localmente con `localhost:8080/ipfs/CID.` Il contenuto del certificato assomiglia a qualcosa del genere:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: 423d3c1b42f6427e80cc881a16e07451
Unit Model Name: Single Device
Total Assembly Time: 0:05:37
Production Stages:
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:38:47
  Finish Time: 26-06-2023 17:40:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools (not finished.)
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:40:30
  Finish Time: 26-06-2023 17:42:06
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:42:16
  Finish Time: 26-06-2023 17:43:00
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Saw Through the Single Device
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:00
  Finish Time: 26-06-2023 17:43:51
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 17:43:51
  Finish Time: 26-06-2023 17:44:36
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
</LessonCodeWrapper>

8. Proviamo ora a creare un certificato per un assemblaggio composito composto da più dispositivi. Nel menu di selezione del tipo, clicca su `COMPOSITE DEVICE`, e poi su `SAMPLE DEVICE`. Copia il suo ID unità (che si trova nel campo Numero di composizione), poiché ne avrai bisogno in seguito. Quindi, procedi con i passaggi standard per l'assemblaggio del dispositivo.

9. Dopo l'assemblaggio, torna a `COMPOSITE DEVICE` e premi `FINAL ASSEMBLY` per finalizzare l'assemblaggio composito. Il sistema ti chiederà di fornire l'ID unità dei dispositivi assemblati, per il quale il dipendente dovrà scannerizzare il loro codice a barre. Per simulare questo processo, torna a `hid-emulator.py` e seleziona la funzione `2` per la scansione del codice a barre, e inserisci l'ID unità salvato lì.

10. Successivamente, il sistema ti chiederà di passare attraverso le fasi necessarie dell'assemblaggio composito e genererà un certificato per esso:

<LessonCodeWrapper language="json" codeClass="big-code" noLines noCopyIcon>
Unit Unique Code: d08101feae7c4efbb5529885c9ad544b
Unit Model Name: Composite Device
Total Assembly Time: 0:00:03
Production Stages:
- Name: Prepare Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:25
  Finish Time: 26-06-2023 18:18:26
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Tape the Sample Device to the base plate
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:26
  Finish Time: 26-06-2023 18:18:27
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
- Name: Stack Tools
  Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
  Start Time: 26-06-2023 18:18:27
  Finish Time: 26-06-2023 18:18:28
  Assembly data in IPFS: This is a place for any production data, let it be video
    record, some sensor data or any other data collection representing the production
    process.
Unit Components:
- Unit Unique Code: b165b382c3674127a6aaf5817c5a7040
  Unit Model Name: Sample Device
  Total Assembly Time: 0:00:03
  Production Stages:
  - Name: Prepare Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:45
    Finish Time: 26-06-2023 18:17:46
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Assemble Sample Device
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:46
    Finish Time: 26-06-2023 18:17:47
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
  - Name: Stack Tools
    Employee Code: e9b69b302f72d82ca47964196536aab3f36e367910aff06d2be30888f9ad4234
    Start Time: 26-06-2023 18:17:47
    Finish Time: 26-06-2023 18:17:48
    Assembly data in IPFS: This is a place for any production data, let it be video
      record, some sensor data or any other data collection representing the production
      process.
Total Assembly Time (Including Components): 0:00:06
</LessonCodeWrapper>

11. Per eliminare la demo, inserisci il comando:

<LessonCodeWrapper language="bash">
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
Nella prossima lezione, procederemo all'effettivo dispiegamento di tutti i componenti necessari del sistema Feecc.
</RoboAcademyText>