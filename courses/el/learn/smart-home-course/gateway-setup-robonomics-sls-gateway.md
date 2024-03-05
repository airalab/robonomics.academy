---
title: "Μάθημα #4b, Ρύθμιση Πύλης: Robonomics SLS Gateway"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: μάθημα βοηθού σπιτιού
lessonNumber: 5
metaOptions: [Μάθετε, Κυρίαρχο Έξυπνο Σπίτι με το Robonomics και το Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Τι είναι αυτό

Αυτό είναι ένα προσχεδιασμένο σενάριο για τη σύνδεση συσκευών χρησιμοποιώντας την πύλη Robonomics SLS. Το Robonomics πήρε έμπνευση στον σχεδιασμό από την πύλη που ανέπτυξε το έργο [Smart Logic System](https://github.com/slsys/Gateway) και τροποποίησε μέρος της κυκλωτικής. Μπορείτε να παραγγείλετε μια πύλη από το Robonomics ή να κατασκευάσετε τη δική σας χρησιμοποιώντας τα [σχέδια](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01) μας.

Θα εγκαταστήσετε το απαιτούμενο λογισμικό για την πύλη, θα το διαμορφώσετε και θα το συνδέσετε στο Home Assistant.

<robo-academy-note type="note" title="Attention">
  Ο SmartRF Flash Programmer, ένα πρόγραμμα για ενημέρωση του firmware, απαιτεί λειτουργικό σύστημα Windows.
</robo-academy-note>

## Οδηγίες

<List type="numbers">

<li>

Εγκατάσταση Firmware Μικροελεγκτή Zigbee

<List>

<li>

Πρώτα πρέπει να φλασάρετε τον μικροελεγκτή CC2652P της πύλης. Ρυθμίστε τις διακόπτες <code>ON</code> <code>2</code>, <code>4</code> και <code>7</code> στο κάτω μέρος της SLS Gateway, οι υπόλοιποι πρέπει να είναι <code>OFF</code>.

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

Συνδέστε την πύλη στον υπολογιστή σας με ένα καλώδιο USB-A<>USB-C.

<robo-academy-note type="warning" title="WARNING">
  Χρησιμοποιήστε μόνο καλώδια τύπου USB-A<>USB-C, επειδή προς το παρόν η πύλη δεν υποστηρίζει τον τύπο USB-C<>USB-C.
</robo-academy-note>

</li>

<li>

Το firmware CC2652 απαιτεί το SmartRF Flash Programmer v2 από την Texas Instrument. Κατεβάστε το από [το επίσημο site](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2) και στη συνέχεια εγκαταστήστε το.

</li>

<li>

Κατεβάστε το firmware για τον μικροελεγκτή CC2652P από το [αποθετήριο GitHub](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator).

</li>

<li>

Εκτελέστε το πρόγραμμα. Στο παράθυρο <code>Συνδεδεμένη συσκευή</code> επιλέξτε τον μικροελεγκτή CC2652P, ορίστε τη διαδρομή για το firmware, ορίστε τις σημαίες σε <code>Διαγραφή, Πρόγραμμα, Επαλήθευση</code> όπως στην εικόνα και πατήστε <code>Έναρξη</code>.

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

Μετά από επιτυχή φλασάρισμα, θα δείτε ένα μήνυμα <code>Επιτυχία!</code>. Τώρα μπορείτε να αποσυνδέσετε το καλώδιο USB.

</li>
</List>
</li>

<li>

Εγκατάσταση Firmware Μικροελεγκτή

<List>

<li>

Τώρα πρέπει να ρυθμίσετε την πύλη για την εγκατάσταση λογισμικού. Σας συμβουλεύουμε να ενημερώσετε το firmware συνδέοντας την πύλη απευθείας στο Raspberry Pi σας και εισάγοντας όλες τις ακόλουθες εντολές σε αυτή τη συσκευή. 

</li>

<li>

Ορίστε τους διακόπτες <code>ON</code> <code>1</code> και <code>3</code> στο κάτω μέρος της πύλης SLS, οι υπόλοιποι πρέπει να είναι <code>OFF</code>. Στη συνέχεια συνδέστε την πύλη στο Raspberry Pi σας μέσω της θύρας USB τύπου-C.

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Συνδεθείτε στο Raspberry Pi μέσω SSH.

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

Κλωνοποιήστε το αποθετήριο με το firmware:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

Για να φλασάρετε την πύλη SLS πρέπει να εκτελέσετε τα scripts <code>Καθαρισμός</code> και <code>Φλασάρισμα_16mb</code>:

<LessonCodeWrapper language="bash" noLines>
cd robonomics-hass-utils/esp_firmware/linux
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Flash_16mb.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Flash_16mb.sh
</LessonCodeWrapper>
</li>

<li class="no-bullet">

\- **Αντιμετώπιση προβλημάτων**

Αν αντιμετωπίζετε προβλήματα με την ενημέρωση του firmware της πύλης, πρέπει να ακολουθήσετε επιπλέον βήματα:

<List>

<li>

Βεβαιωθείτε ότι έχετε εγκαταστήσει το πρόσθετο pySerial:

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

Δώστε στον χρήστη σας δικαιώματα πρόσβασης στη θύρα USB:

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

Σε ορισμένες περιπτώσεις, είναι απαραίτητο να αλλάξετε τη ρύθμιση εύρους ζώνης στο σενάριο για να ενημερώσετε το firmware. Ανοίξτε το σενάριο <code>Flash_16mb.sh</code> με τον επεξεργαστή nano και αλλάξτε την παράμετρο baud από <code>921600</code> σε μικρότερη τιμή (για παράδειγμα, <code>115200</code>).
</li>
</List>
</li>

<li class="no-bullet">

\- **Επιπλέον**

Παρέχουμε επίσης επιλογές για ενημέρωση του firmware χρησιμοποιώντας άλλα λειτουργικά συστήματα (macOS και Windows). Μπορείτε να βρείτε τα αντίστοιχα σενάρια σε έναν φάκελο, το όνομα του οποίου εξαρτάται από το λειτουργικό σας σύστημα.

</li>
</List>
</li>

<li>

Ρύθμιση της πύλης

<List>

<li>

Ρυθμίστε τις διακόπτες στο πίσω μέρος της πύλης στη νέα τους θέση. Οι διακόπτες <code>5</code> (RX Zigbee σε ESP) και <code>6</code> (TX Zigbee σε ESP) πρέπει να είναι στη θέση <code>ON</code>, οι υπόλοιποι πρέπει να είναι <code>OFF</code>.


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Συνδέστε το καλώδιο τροφοδοσίας τύπου C. Το φωτεινό δείκτη στο κέντρο πρέπει να γίνει πράσινο.

</li>

<li>

Κατά την πρώτη εκκίνηση, η πύλη θα αρχίσει να μοιράζεται Wi-Fi με το SSID <code>zgw****</code>. Συνδεθείτε σε αυτό το δίκτυο. Να έχετε υπόψη ότι το σήμα μπορεί να είναι αρκετά αδύναμο, οπότε είναι καλύτερο να κρατάτε την πύλη SLS πιο κοντά στον υπολογιστή σας.

Εάν η σύνδεση είναι επιτυχής, η διαδικτυακή διεπαφή θα ανοίξει (ή μπορείτε να τη βρείτε στη διεύθυνση 192.168.1.1).

</li>

<li>

Μεταβείτε στη σελίδα Wi-Fi και εισάγετε τα διαπιστευτήρια Wi-Fi σας εισάγοντας τον χρήστη / κωδικό και πατώντας το κουμπί <code>Αποθήκευση</code>. Στη συνέχεια, πατήστε το κουμπί <code>Επανεκκί��ηση</code>. Η πύλη θα επανεκκινήσει και θα συνδεθεί στο δίκτυο WI-Fi σας.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

Βρείτε την τοπική IP της πύλης SLS για πρόσβαση στη διαδικτυακή διεπαφή. Για αυτό μπορείτε να χρησιμοποιήσετε την εφαρμογή [Fing](https://www.fing.com/products) ή την εντολή <code>arp -a</code> στο τερματικό σας ή το Nmap: 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

όπου το <code class="bold">xxx</code> είναι η διεύθυνση IP σας στο τοπικό δίκτυο. Το όνομα της πύλης πρέπει να μοιάζει με αυτό: <code>zgw****</code>. Ανοίξτε τη διαδικτυακή διεπαφή της πύλης εισάγοντας τη διεύθυνση IP της στον περιηγητή.
</li>

<li>

Πηγαίνετε στο <code>Ρύθμιση</code> -> <code>Υλικό</code> και βεβαιωθείτε ότι οι ρυθμίσεις μοιάζουν με αυτές στην εικόνα. Διορθώστε τις ρυθμίσεις αν είναι απαραίτητο και κάντε κλικ στο κουμπί <code>Αποθήκευση</code>:

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

Ο πίνακας με τις απαιτούμενες τιμές:


| Field        	         | **Value**          |                                                                     	
|------------------------|--------------------|
| Zigbee module          | TI                 |
| Zigbee UART RX         | 22                 |
| Zigbee UART TX         | 23                 |
| Zigbee RST Pin         | 18                 |
| Zigbee BSL Pin         | 19                 |
| Button Mode            | 33 (pullUP - true) |
| Number addressable leds| 0                  |
| Led Red (or addr)      | 21                 |
| Led Green              | 5                  |
| Led Blue               | 27                 |
| I2C SDA                | 255                |
| I2C SCL                | 255                |

</li>

<li>

Στη συνέχεια επανεκκινήστε την πύλη. Επιλέξτε <code>Ενέργειες</code> -> <code>Επανεκκίνηση συστήματος</code> στην πάνω δεξιά γωνία. Βεβαιωθείτε ότι η πύλη λειτουργεί σωστά με το μικροελεγκτή CC2652P στο παράθυρο πληροφοριών Zigbee. Το DeviceState πρέπει να είναι <code>Εντάξει</code>.

</li>

<li>

Επανεκκινήστε την πύλη. Επιλέξτε <code>Ενέργειες</code> -> <code>Επανεκκίνηση</code> συστήματος στην πάνω δεξιά γωνία.

</li>

<li>

Διαμορφώστε αυτόματα την προσθήκη συσκευών στο Home Assistant. Πηγαίνετε στο <code>Zigbee</code> -> <code>Διαμ��ρφωση</code> και στη συνέχεια επιλέξτε <code>Home Assistant MQTT Discovery</code> και <code>Καθαρισμός Καταστάσεων</code>. Αποθηκεύστε τις αλλαγές και ξαναεκκινήστε την πύλη SLS.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **Επιπλέον**:

Αν έχετε ήδη ενεργή πύλη SLS στο σπίτι σας και τώρα ρυθμίζετε μια άλλη, τότε θα συγκρουστούν μεταξύ τους. Για να λύσετε αυτό το πρόβλημα πρέπει να αλλάξετε το κανάλι στη νέα συσκευή.

Για να το κάνετε αυτό, πηγαίνετε στο <code>Zigbee</code> -> <code>Config</code> και αλλάξτε το κανάλι σε ένα άλλο (π.χ. κανάλι 15).

</li>

<li>

Συνδέστε τις συσκευές σας πηγαίνοντας στο <code>Zigbee</code> -> <code>Join</code>. Βάλτε τους αισθητήρες σας σε λειτουργία σύζευξης, ο πιο συνηθισμένος τρόπος για να μεταβεί μια συσκευή σε λειτουργία σύνδεσης είναι να κρατήσετε το κουμπί τροφοδοσίας της ή να τις ενεργοποιήσετε/απενεργοποιήσετε 5 φορές. Πατήστε το κουμπί <code>Enable Join</code> για να ξεκινήσετε την αναζήτηση συσκευών Zigbee. Θα δείτε ενεργούς αισθητήρες.

</li>
</List>
</li>

<li>

Σύνδεση τ��ς πύλης SLS με το Home Assistant

<List>

<li>

Πρέπει να ρυθμίσετε το MQTT στην πύλη SLS. Επιστρέψτε στη διεπαφή ιστού της πύλης SLS σας και πηγαίνετε σε <code>Ρυθμίσεις</code> -> <code>Σύνδεση</code> -> <code>Ρύθμιση MQTT</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

Προσθέστε τη διεύθυνση του μεσολαβητή σας (διεύθυνση του Raspberry Pi με το Home Assistant στο τοπικό δίκτυο, μπορείτε να τη βρείτε με την εφαρμογή [Fing](https://www.fing.com/products) ή χρησιμοποιώντας την εντολή <code>ip -a</code> στο RPi σας), τη θύρα (η προεπιλεγμένη είναι η 1883), το όνομα χρήστη και τον κωδικό του μεσολαβητή σας (το οποίο έχετε δημιουργήσει νωρίτερα) και το όνομα του θέματος (μπορείτε να επιλέξετε οποιοδήποτε). Επίσης, η τοπική διεύθυνση IP του Raspberry Pi πρέπει να είναι στατική.

Μην ξεχάσετε να κάνετε κλικ στο <code>Ενεργοποίηση</code> και <code>Διατήρηση καταστάσεων</code>.

</li>

<li>

Αποθηκεύστε τις αλλαγές. Τώρα οι συσκευές θα εμφανίζονται αυτόματα στο Home Assistant.

</li>
</List>

</li>

<li>

Σύνδεση Συσκευών 

<List>

<li>

Συνδέστε τις συσκευές σας πηγαίνοντας σε <code>Zigbee</code> -> <code>Σύνδεση</code>. Βάλτε τους αισθητήρες σας σε λειτουργία σύζευξης, ο πιο συνηθισμένος τρόπος για να μεταβείτε σε λειτουργία σύνδεσης είναι να κρατήσετε πατημένο το κουμπί λειτουργίας του ή να τα ενεργοποιήσετε/απενεργοποιήσετε 5 φορές.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

Πατήστε το κουμπί Ενεργοποίησης Σύνδεσης για να ξεκινήσετε την αναζήτηση συσκευών Zigbee. Θα δείτε ενεργούς αισθητήρες.

</li>

</List>
</li>

</List>