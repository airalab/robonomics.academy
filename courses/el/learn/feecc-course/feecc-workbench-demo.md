---
title: "Επίδειξη του Feecc"
description: Αυτό το μάθημα αφορά την εξοικείωση με το σύστημα Feecc και όλα τα στοιχεία του.
metaOptions: [Μάθετε, Εξοικειωθείτε με το Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
Σε αυτό το μάθημα, θα δοκιμάσετε τις βασικές λειτουργίες του Feecc χρησιμοποιώντας ένα εικονικό περιβάλλον δοκιμών ως παράδειγμα, το οποίο προσομοιώνει ένα πραγματικό παράδειγμα ενός συστήματος παρακολούθησης παραγωγής.
</RoboAcademyText>

Για τους σκοπούς της επίδειξης λείπουν μερικά τυπικά χαρακτηριστικά όπως η εκτύπωση ετικέτας ή η εγγραφή βίντεο, αλλά διατηρεί τον βασικό έννοια ενός τέτοιου συστήματος.

## Προαπαιτούμενα

Για να εκτελέσετε την επίδειξη, θα χρειαστείτε:

- Σύστημα UNIX-παρόμοιο (δοκιμάστηκε σε [Ubuntu 22.04.2](https://releases.ubuntu.com/jammy/))
- [Docker](https://docs.docker.com/engine/install/ubuntu/) και [Docker compose](https://docs.docker.com/compose/)
- Περιηγητής ιστού (δοκιμάστηκε σε Google Chrome και Mozilla Firefox)

## Εγκατάσταση

Εκτελέστε τις παρακάτω εντολές:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-academy
cd feecc-academy
sudo docker compose up -d --build
</LessonCodeWrapper>

Για να ελέγξετε τα ενεργά containers, εκτελέστε το ακόλουθο:

<LessonCodeWrapper language="bash">
sudo docker ps -a
</LessonCodeWrapper>

Θα πρέπει να δείτε την ακόλουθη έξοδο:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                             PORTS     NAMES
0db8382bb271   feecc-academy-workbench-daemon      "uvicorn app:app --h…"   19 seconds ago   Up 7 seconds (healthy)                       feecc_academy_workbench_daemon
0dbc7bb977d1   feecc-academy-workbench-frontend    "node nodeServer.js"     20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_workbench_frontend
a74fa229eb90   robonomics/robonomics:sha-bd71a23   "robonomics --dev --…"   20 seconds ago   Up 19 seconds (health: starting)             feecc_academy_robonomics_node
0c9e8022658a   mongo:jammy                         "docker-entrypoint.s…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_mongoDB
6b0748904d0f   ipfs/go-ipfs:v0.17.0                "/sbin/tini -- /usr/…"   20 seconds ago   Up 19 seconds (healthy)                      feecc_academy_ipfsnode
814e6f489a77   nyurik/alpine-python3-requests      "tail -f /dev/null"      20 seconds ago   Up 19 seconds                                feecc_academy_hid_emulator
</LessonCodeWrapper>

## Εκκίνηση της επίδειξης

1. Πηγαίνετε στη διεύθυνση http://localhost:3000/ στον περιηγητή σας, θα πρέπει να δείτε μια οθόνη καλωσορίσματος.

2. Σε αυτό το στάδιο, το σύστημα θα πρέπει να ζητήσει από τον υπάλληλο να τοποθετήσει την κάρτα RFID του στο σαρωτή για εξουσιοδότηση. Στην επίδειξη, μπορείτε να χρησιμοποιήσετε το `hid-emulator.py` για εξουσιοδότηση. Για να το κάνετε αυτό, εκκινήστε έναν ξεχωριστό Docker container:

<LessonCodeWrapper language="bash">
sudo docker exec -ti feecc_academy_hid_emulator sh
python3 hid-emulator.py
</LessonCodeWrapper>

Είναι ικανό να προσομοιώσει δύο λειτουργίες: παροχή μιας κάρτας RFID και σάρωση ενός barcode· χρειάζεστε την πρώτη λειτουργία, εισάγετε `1`.

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
> Select emulated action (1/2): 
>  1. Put ID card on the Αναγνώστης RFID.
>  2. Scan a sample barcode with a barcode scanner.
> 1
> INFO:2023-03-21 21:42:05,370:Event relayed to endpoint http://127.0.0.1:5000/workbench/hid-event
</LessonCodeWrapper>

3. Θα δείτε την οθόνη για την επιλογή του τύπου σύνθεσης, επιλέξτε `ΜΟΝΟΣ ΣΥΣΚΕΥΗ`.

<LessonImages src="feecc-course/menu.png" alt="Feecc start menu"/>

4. Οι ειδοποιήσεις θα εμφανιστούν στην κάτω αριστερή γωνία υποδεικνύοντας την έναρξη της εργασίας στη συσκευή για την οποία δημιουργείται ένα μοναδικό ID. Η μπλε ειδοποίηση θα εμφανίσει επίσης τη δραστηριότητα του εικονικού εκτυπωτή. Στην πραγματική εγκατάσταση, ένας χάρτης με το ID της συσκευής εκτυπώνεται σε αυτή τη στιγμή.

<LessonImages src="feecc-course/single_device.png" alt="Single device composition"/>

5. Κάντε κλικ στο `ΕΝΑΡΞΗ ΣΥΝΘΕΣΗΣ` για να ξεκινήσετε την καταγραφή της διαδικασίας συναρμολόγησης της συσκευής. Θα σας ζητηθεί να περάσετε από όλα τα απαραίτητα βήματα συναρμολόγησης. Κάθε φορά που ένας υπάλληλος ολοκληρώνει ένα βήμα, πρέπει να κάνει κλικ στο κουμπί `ΕΠΟΜΕΝΟ`, μετά από το οποίο το βίντεο θα αποθηκευτεί στο IPFS. Είναι επίσης δυνατό να αναστείλετε τη συναρμολόγηση (`ΠΑΥΣΗ`) για να επιστρέψετε αργότερα ή να διακόψετε εντελώς τη διαδικασία (`ΔΙΑΚΟΠΗ`).

6. Όταν ολοκληρωθούν όλα τα στάδια συναρμολόγησης, εμφανίζεται το κουμπί `ΤΕΛΟΣ`, μετά από το οποίο το Feecc προτείνει την αποθήκευση του πιστοποιητικού της συσκευής. Ωστόσο, πριν το κάνετε αυτό, ανοίξτε το [τοπικό κόμβο Robonomics](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) στον περιηγητή σας, θα το χρειαστείτε αργότερα. Μετά από αυτό, επιστρέψτε στο Feecc και κάντε κλικ στο `ΑΠΟΘΗΚΕΥΣΗ ΔΙΑΒΑΤΗΡΙΟΥ`.
    
    Θα δείτε νέες ειδοποιήσεις στη γωνία της οθόνης: ειδοποίηση ότι το πιστοποιητικό έχει μεταφορτωθεί στο Robonomics και στο IPFS, καθώς και δύο μπλε μηνύματα σχετικά με την εκτύπωση της σφραγίδας και του QR-κώδικα που οδηγεί στο πιστοποιητικό.

<LessonImages src="feecc-course/single_certificate.png" alt="Cetrificate of single composition"/>

7. Στην ενότητα `Πληροφορίες Αλυσίδας` στην οθόνη του τοπικού κόμβου Robonomics, θα πρέπει να δείτε ένα νέο γεγονός `datalog.NewRecord` στη στήλη `πρόσφατα γεγονότα`. Αν το ανοίξετε, το IPFS CID που αντιστοιχεί στο αρχείο πιστοποιητικού της συσκευής θα εμφανιστεί στο πεδίο `bytes`.

<LessonImages src="feecc-course/single_datalog.png" alt="Datalog of single composition"/>

Ο εκτυπωμένος QR κώδικας περιέχει ένα σύνδεσμο προς αυτό το CID, που επιτρέπει το άνοιγμα του αρχείου πιστοποιητικού στον περιηγητή. Καθώς ο τοπικός σας κόμβος IPFS ενδέχεται να μην έχει αυτή την εύρεση, μπορείτε να φτάσετε στο αρχείο τοπικά με το `localhost:8080/ipfs/CID.` Τα περιεχόμενα του πιστοποιητικού μοιάζουν κάπως έτσι:

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

8. Ας δοκιμάσουμε τώρα να δημιουργήσουμε ένα πιστοποιητικό για μια σύνθετη συναρμολόγηση που αποτελείται από πολλαπλές συσκευές. Στο μενού επιλογής τύπου, κάντε κλικ στο `ΣΥΝΘΕΤΗ ΣΥΣΚΕΥΗ`, και στη συνέχεια `ΔΕΙΓΜΑΤΙΚΗ ΣΥΣΚΕΥΗ`. Αντιγράψτε το ID μονάδας της (που βρίσκεται στο πεδίο αριθμού σύνθεσης), καθώς θα το χρειαστείτε αργότερα. Στη συνέχεια, συνεχίστε με τα κανονικά βήματα για τη συναρμολόγηση της συσκευής.

9. Μετά τη συναρμολόγηση, επιστρέψτε στη `ΣΥΝΘΕΤΗ ΣΥΣΚΕΥΗ` και πατήστε `ΤΕΛΙΚΗ ΣΥΝΑΡΜΟΛΟΓΗΣΗ` για να ολοκληρώσετε τη σύνθετη συναρμολόγηση. Το σύστημα θα σας ζητήσει να παράσχετε το ID μονάδας των συναρμολογημένων συσκευών, για τις οποίες ο υπάλληλος πρέπει να σαρώσει τον κωδικό τους. Για να προσομοιώσετε αυτή τη διαδικασία, επιστρέψτε στο `hid-emulator.py` και επιλέξτε τη λειτουργία `2` για σάρωση κωδικού, και εισάγετε το αποθηκευμένο ID μονάδας εκεί.

10. Στη συνέχεια, το σύστημα θα σας ζητήσει να περάσετε από τα απαραίτητα στάδια της σύνθετης συναρμολόγησης και να δημιουργήσετε ένα πιστοποιητικό γι' αυτήν:

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

11. Για να διαγράψετε το demo, εισάγετε την εντολή:

<LessonCodeWrapper language="bash">
sudo docker compose down --rmi all && docker builder prune -f
</LessonCodeWrapper>

<RoboAcademyText fWeight="500">
Στο επόμενο μάθημα, θα προχωρήσουμε στην πραγματική ανάπτυξη όλων των απαραίτητων στοιχείων του συστήματος Feecc.
</RoboAcademyText>