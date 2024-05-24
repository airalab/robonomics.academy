---
title: "Ανάπτυξη του Engineer Workbench"
description: Αυτό το μάθημα αφορά την εξοικείωση με το σύστημα Feecc και όλα τα στοιχεία του.
metaOptions: [Μάθετε, Εξοικειωθείτε με το Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
Σε αυτό το μάθημα, θα μάθετε πώς να αναπτύσσετε μόνοι σας τα απαραίτητα στοιχεία του Feecc Engineer Workbench.
</RoboAcademyText>

Ανάμεσα στα στοιχεία:

- Workbench Daemon
- Μπροστινό Workbench
- IPFS Gateway
- Δαίμονας αναγνώστη HID

Όλα τα στοιχεία εκκινούνται χρησιμοποιώντας το [Docker](https://docs.docker.com/engine/install/ubuntu/) και το [Docker compose](https://docs.docker.com/compose/), βεβαιωθείτε ότι έχετε εγκατεστημένα.

## Προετοιμασία λογισμικού

1. Τα στοιχεία της Feecc χρησιμοποιούν τη βάση δεδομένων [MongoDB](https://www.mongodb.com/) για την αποθήκευση και πρόσβαση σε δεδομένα. Πριν χρησιμοποιήσετε τη Feecc, πρέπει να αναπτύξετε τη MongoDB με τον τρόπο που σας βολεύει. Εδώ υπάρχουν μερικές επιλογές ανάπτυξης: [χρησιμοποιώντας τον δικό σας διακομιστή](https://www.mongodb.com/try/download/community), [βάση δεδομένων στο Atlas](https://www.mongodb.com/atlas) (δωρεάν), [βάση δεδομένων στο DigitalOcean](https://www.digitalocean.com/products/managed-databases-mongodb) (με πληρωμή). 
    
    Σε κάθε περίπτωση, πρέπει να λάβετε το URI σύνδεσής σας στη MongoDB, το οποίο θα χρειαστείτε να εισαγάγετε ως την τιμή της μεταβλητής `MONGODB_URI` για όλα τα στοιχεία του συστήματος.
    
2. Αν θέλετε να επωφεληθείτε από την αξιόπιστη και διαφανή αποθήκευση δεδομένων από το παραγωγικό σας σύστημα, πρέπει να δημιουργήσετε ένα λογαριασμό στο Robonomics. Για να το κάνετε αυτό, χρησιμοποιήστε τις οδηγίες που είναι διαθέσιμες στον ακόλουθο σύνδεσμο: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    Πρέπει να αποθηκεύσετε τη φράση σπόρου του λογαριασμού καθώς θα χρησιμοποιηθεί αργότερα στη μεταβλητή `ROBONOMICS_ACCOUNT_SEED`.

## Προετοιμασία Workbench

Πριν ξεκινήσετε, συνδέστε όλο τον απαραίτητο εξοπλισμό στον υπολογιστή ή τον διακομιστή:

- εκτυπωτή ετικέτας χρησιμοποιώντας USB
- αναγνώστες RFID / barcode χρησιμοποιώντας USB
- κάμερα IP μέσω δρομολογητή PoE/δικτύου διακλάδωσης
- οθόνη με πληκτρολόγιο και ποντίκι ή οθόνη αφής χρησιμοποιώντας USB και HDMI/VGA (προαιρετικά)

## Εκκίνηση του HID Reader Daemon

1. Κλωνοποιήστε το αποθετήριο:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. Εκκίνηση του daemon:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Εκκίνηση του Workbench Daemon

1. Κλωνοποιήστε το αποθετήριο:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. Ρύθμιση του daemon για τις ανάγκες σας χρησιμοποιώντας το αρχείο `docker-compose.yml`. Το αρχείο περιέχει διάφορες μεταβλητές περιβάλλοντος:

    - Ρύθμιση MongoDB;
    - Ρύθμιση Robonomics;
    - Ρύθμιση IPFS;
    - παράμετροι εκτυπωτή;
    - παράμετροι κάμερας;
    - παράμετροι αναγνώστη RFID / barcode.
    
    Η πλήρης λίστα των μεταβλητών είναι διαθέσιμη στο αποθετήριο του daemon [repository](https://github.com/Multi-Agent-io/feecc-workbench-daemon). Οι ακόλουθες παράμετροι είναι υποχρεωτικές:
    
    - `MONGODB_URI`: το URI σύνδεσής σας με το MongoDB;
    - `MONGODB_DB_NAME`: ένα όνομα βάσης δεδομένων του MongoDB;
    - `WORKBENCH_NUMBER`: αριθμός πάγκου εργαζομένου.

3. Εκκίνηση του daemon:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Έλεγχος της λειτουργικότητάς του. Πηγαίνετε στον περιηγητή και αοίξτε τη σελίδα `http://127.0.0.1:5000/docs`, η οποία πρέπει να περιέχει την τεκμηρίωση για τη διεπαφή REST API του συστήματος. Αν η σελίδα δεν είναι διαθέσιμη, τότε ο διακομιστής δεν έχει ξεκινήσει σωστά. Ελέγξτε τα αρχεία καταγραφής μέσα στον εμπορευματοκιβώτιο για σφάλματα, διορθώστε τα και επαναλάβετε τα βήματα κατασκευής και εκτέλεσης.

## Εκκίνηση της IPFS Gateway

1. Κλωνοποιήστε το αποθετήριο:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. Διαμορφώστε τη μικρουπηρεσία σύμφωνα με τις ανάγκες σας χρησιμοποιώντας το αρχείο `docker-compose.yml`. Το αρχείο περιέχει μεταβλητές περιβάλλοντος για σύνδεση με τη MongoDB, τη Robonomics και τη Pinata. Η πλήρης λίστα των μεταβλητών είναι διαθέσιμη στο αποθετήριο της πύλης [repository](https://github.com/Multi-Agent-io/feecc-ipfs-gateway).

3. Εκκινήστε τη μικρουπηρεσία:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Εκκίνηση του Workbench Frontend

1. Κλωνοποιήστε το αποθετήριο:

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. Πηγαίνετε στον κατάλογο `configs` και διαμορφώστε την υπηρεσία frontend σύμφωνα με τις ανάγκες σας χρησιμοποιώντας το αρχείο `config.json`. Τα ακόλουθα παράμετροι είναι ιδιαίτερα σημαντικοί:
    - `socket` — εισαγάγετε εδώ τη διεύθυνση του Workbench Daemon;
    - `interface_language` — γλώσσα διεπαφής, διαθέσιμες επιλογές `en` και `ru`;
    - `dev_show_reducers` — ενεργοποίηση/απενεργοποίηση λειτουργίας προγραμματιστή;
    - `pulling_period` — περίοδος λήψης δεδομένων από το backend σε χιλιοστά του δευτερολέπτου;

3. Εκκινήστε τον εμπρόσθιο container:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Ελέγξτε τη λειτουργικότητά του. Πηγαίνετε στον περιηγητή και ανοίξτε τη σελίδα `http://localhost:3000`, θα πρέπει να δείτε μια σελίδα εξουσιοδότησης.

<RoboAcademyText fWeight="500">
Στο επόμενο μάθημα, θα περάσουμε από την υπηρεσία Feecc Analytics.
</RoboAcademyText>