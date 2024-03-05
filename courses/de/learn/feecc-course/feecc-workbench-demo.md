---
title: "Demo von Feecc"
description: Dieser Kurs dreht sich darum, das Feecc-System und alle seine Komponenten kennenzulernen.
metaOptions: [Lernen, sich an Feecc zu gewöhnen]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In dieser Lektion werden Sie die grundlegenden Funktionen von Feecc anhand eines virtuellen Testbetts testen, das ein reales Beispiel eines Produktionsverfolgungssystems nachahmt.
</RoboAcademyText>

Zu Demonstrationszwecken fehlen einige typische Funktionen wie Etikettendruck oder Videoaufzeichnung, aber es enthält das Hauptkonzept eines solchen Systems.

## Voraussetzungen

Um die Demo auszuführen, benötigen Sie:

- UNIX-ähnliches System (getestet auf [Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/))
- [Docker](https://docs.docker.com/engine/install/ubuntu/) und [Docker Compose](https://docs.docker.com/compose/)
- Webbrowser (getestet auf Google Chrome und Mozilla Firefox)

## Installation

Führen Sie die folgenden Befehle aus:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

Um funktionierende Container zu überprüfen, führen Sie Folgendes aus:

<LessonCodeWrapper language="bash">
sudo docker ps -a
</LessonCodeWrapper>

Sie sollten die folgende Ausgabe sehen:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## Demo starten

1. Gehen Sie in Ihrem Browser zu http://localhost:3000/, Sie sollten einen Begrüßungsbildschirm sehen.

2. Zu diesem Zeitpunkt sollte das System den Mitarbeiter auffordern, seine RFID-Karte auf den Scanner zur Autorisierung zu legen. In der Demo können Sie `hid-emulator.py` zur Autorisierung verwenden. Führen Sie dazu einen separaten Docker-Container aus:

<LessonCodeWrapper language="bash">
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

Es ist in der Lage, zwei Funktionen zu emulieren: das Bereitstellen einer RFID-Karte und das Scannen eines Barcodes; Sie benötigen die erste Funktion, geben Sie `1` ein.

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the RFID-Scanner.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. Sie sehen den Bildschirm zur Auswahl des Kompositionstyps, wählen Sie `EINZELGERÄT`.

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. Benachrichtigungen erscheinen in der unteren linken Ecke, die den Beginn der Arbeit am Gerät anzeigen, für das eine eindeutige ID erstellt wird. Die blaue Benachrichtigung zeigt auch die Aktivität des virtuellen Druckers an; bei der tatsächlichen Einrichtung wird zu diesem Zeitpunkt ein Barcode mit der Geräte-ID gedruckt.

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. Klicken Sie auf `KOMPOSITION STARTEN`, um mit der Aufzeichnung des Geräte-Montageprozesses zu beginnen. Sie werden aufgefordert, alle notwendigen Montageschritte durchzuführen; jedes Mal, wenn ein Mitarbeiter einen Schritt abschließt, sollte er auf die `WEITER`-Schaltfläche klicken, woraufhin das Video in IPFS gespeichert wird. Es ist auch möglich, die Montage zu unterbrechen (`PAUSE`), um später zurückzukehren oder den Prozess vollständig zu stoppen (`STOP`).

6. Wenn alle Montagestufen abgeschlossen sind, erscheint die `ABSCHLIESSEN`-Schaltfläche, woraufhin Feecc vorschlägt, das Zertifikat des Geräts zu speichern. Bevor Sie dies jedoch tun, öffnen Sie den [lokalen Robonomics-Knoten](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) in Ihrem Browser, Sie werden ihn später benötigen. Kehren Sie danach zu Feecc zurück und klicken Sie auf `PASSPORT SPEICHERN`.
    
    Sie sehen neue Benachrichtigungen in der Bildschirmecke: Benachrichtigung, dass das Zertifikat in Robonomics und IPFS hochgeladen wurde, sowie zwei blaue Nachrichten über das Drucken des Siegelanhängers und des QR-Codes, der zum Zertifikat führt.

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. Unter dem Abschnitt `Chain info` auf dem Bildschirm des lokalen Robonomics-Knotens sollten Sie ein neues Ereignis `datalog.NewRecord` unter der Spalte `recent events` sehen. Wenn Sie es erweitern, wird die IPFS CID, die der Zertifikatsdatei des Geräts entspricht, im Feld `bytes` angezeigt.

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

Der gedruckte QR-Code enthält einen Link zu dieser CID, der es ermöglicht, die Zertifikatsdatei im Browser zu öffnen. Da Ihr lokaler IPFS-Knoten möglicherweise nicht über diese Auffindbarkeit verfügt, können Sie auf die Datei lokal mit `localhost:8080/ipfs/CID` zugreifen. Der Inhalt des Zertifikats sieht ungefähr so aus:

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

8. Lassen Sie uns jetzt versuchen, ein Zertifikat für eine Verbundmontage aus mehreren Geräten zu erstellen. Klicken Sie im Typauswahlmenü auf `VERBUNDGERÄT` und dann auf `MUSTERGERÄT`. Kopieren Sie dessen Geräte-ID (die sich im Feld für die Kompositionsnummer befindet), da Sie sie später benötigen werden. Fahren Sie dann mit den Standard-Schritten zur Montage des Geräts fort.

9. Nach der Montage kehren Sie zu `VERBUNDGERÄT` zurück und drücken `ENDMONTAGE`, um die Verbundmontage abzuschließen. Das System wird Sie auffordern, die Geräte-ID der montierten Geräte anzugeben, für die der Mitarbeiter ihren Barcode scannen muss. Um diesen Vorgang zu simulieren, kehren Sie zu `hid-emulator.py` zurück und wählen Sie die Funktion `2` für das Scannen des Barcodes aus und fügen Sie dort die gespeicherte Geräte-ID ein.

10. Als nächstes wird das System Sie auffordern, die notwendigen Stadien der Verbundmontage durchzugehen und ein Zertifikat dafür zu generieren:

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

11. Um das Demo zu löschen, geben Sie den Befehl ein:

<LessonCodeWrapper language="bash">
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
Im nächsten Lektion werden wir mit der tatsächlichen Bereitstellung aller notwendigen Komponenten des Feecc-Systems fortfahren.
</RoboAcademyText>