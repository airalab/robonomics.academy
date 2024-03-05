---
title: "Μάθημα #5, Επιλογές ρύθμισης σύνδεσης αισθητήρων"
description: 'ΕΠΙΛΟΓΕΣ ΡΥΘΜΙΣΗΣ ΣΥΝΔΕΣΙΜΟΤΗΤΑΣ ΑΙΣΘΗΤΗΡΩΝ'
lessonNumber: 5
metaOptions: [Μάθετε, Σύνδεση Αισθητήρων & Αποκεντρωμένο Δίκτυο Αισθητήρων]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Προς το παρόν υποστηρίζεται μόνο ο αισθητήρας SDS011 εκτός του κουτιού, αλλά είναι πολύ εύκολο να προστεθούν και άλλοι αισθητήρες και έχουμε ετοιμάσει μερικές έτοιμες διαμορφώσεις. Η πλήρης επισκόπηση των πεδίων διαμόρφωσης είναι διαθέσιμη [εδώ](https://github.com/airalab/sensors-connectivity/tree/master/connectivity/config). Στη συνέχεια θα εξετάσουμε μερικά προηγμένα σενάρια διαμόρφωσης.

## Σενάριο #1: Σύνδεση SDS011 στη Σειριακή Θύρα

Ο πιο εύκολος και πιο απευθείας τρόπος για να συνδέσετε τον αισθητήρα σας στο δίκτυο είναι χρησιμοποιώντας τη σειριακή θύρα. 

<List type="numbers">

<li>

Συνδέστε την πλακέτα σας σε μια θύρα USB και βρείτε τη διαδρομή προς αυτήν. Σε αυτό το παράδειγμα είναι `ttyUSB0`


<LessonCodeWrapper codeClass="big-code" language="bash">$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 sep 5 14:01 usb-1a86_USB2.0-Ser_-if00-port0 -> ../../ttyUSB0</LessonCodeWrapper>
</li>

<li>

Δημιουργήστε ένα νέο αρχείο διαμόρφωσης ή επεξεργαστείτε το υπάρχον με τα παρακάτω. Μην ξεχάσετε να εισάγετε τη διαδρομή της βάσης δεδομένων σας στο πεδίο `db_path`, τη διαδρομή του πίνακα στο πεδίο `port` και το γεωγραφικό πλάτος / μήκος ενός αισθητήρα στο πεδίο `geo`.

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation":{
      "enable":true,
      "port":"/dev/<YOUR/PATH/TO/BOARD>",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": false,
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

<li>Εκκινήστε το Μονάδα Σύνδεσης Αισθητήρων.</li>

</List>


## Σενάριο #2: Σύνδεση SDS011 μέσω MQTT

<RoboAcademyNote type="okay" title="INFO">Το firmware των αισθητήρων Robonomics δεν λειτουργεί με MQTT. Αυτές οι ρυθμίσεις είναι για επιπλέον αισθητήρες, οι οποίοι λειτουργούν μέσω MQTT.
</RoboAcademyNote>

<List type="numbers">

<li>

Εγκαταστήστε και ρυθμίστε έναν διαμεσολαβητή MQTT (όπως ο [Mosquitto](https://mosquitto.org/) ή παρόμοιος).

</li>

<li>

Δημιουργήστε ένα νέο αρχείο διαμόρφωσης ή επεξεργαστείτε το υπάρχον με τα παρακάτω. Εισάγετε:

- τη διαδρομή της βάσης δεδομένων σας στο πεδίο `db_path`

- μια διαδρομή πίνακα στο πεδίο `port` στην ενότητα `comstation`

- ένα γεωγραφικό πλάτος / μήκος ενός αισθητήρα στο πεδίο `geo`

- έναν κεντρικό διαμεσολαβητή MQTT στο πεδίο `host` στην ενότητα `mqttstation`

- έναν κεντρικό διαμεσολαβητή MQTT στη διαδρομή `port` στην ενότητα `mqttstation`

- ένα θέμα όπου οι αισθητήρες σας στέλνουν δεδομένα στο πεδίο `topic`

- `όνομα χρήστη` και `κωδικό` για σύνδεση στον διαμεσολαβητή αν απαιτείται.


<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation":{
      "enable":false,
      "port":"/dev/<YOUR/PATH/TO/BOARD>",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
   },
   "httpstation": {
      "enable": false,
      "port": 8001
   },
   "mqttstation": {
      "enable": true,
      "host": "[YOUR_MQTT_BROKER_HOST]",
      "port": "[YOUR_MQTT_BROKER_PORT]",
      "topic": "[MQTT_TOPIC_OF_SENSORS]",
      "username": "YOUR_MQTT_USERNAME",
      "password": "YOUR_MQTT_PASSWORD"
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

<li>Εκκινήστε το Μονάδα Σύνδεσης Αισθητήρων.</li>

</List>

## Σενάριο #3: Δημοσίευση Δεδομένων Αισθητήρων με το Robonomics Datalog

Αυτό το σενάριο δείχνει πώς να ανεβάσετε τα δεδομένα του αισθητήρα σας με τη λειτουργία datalog του Robonomics parachain. Το datalog είναι ανάλογο της τηλεμετρίας στις τεχνολογίες web3. Η λειτουργία αυτή προορίζεται να δημιουργήσει μια στιγμιότυπη δεδομένων αισθητήρα κάθε χρονική περίοδο, η οποία αυξάνει την αξιοπιστία των δεδομένων. Δεν έχει σημασία πώς συλλέγονται τα δεδομένα: μέσω HTTP, MQTT ή COM.

<RoboAcademyNote type="warning" title="WARNING">Πρέπει να έχετε τα XRT tokens στον λογαριασμό σας
</RoboAcademyNote>

<List type="numbers">

<li>

Δημιουργήστε ένα νέο αρχείο διαμόρφωσης ή επεξεργαστείτε το υπάρχον με τα παρακάτω. Εισάγετε:

- τη διαδρομή της βάσης δεδομένων σας στο πεδίο `db_path`

- μια διαδρομή πίνακα στο πεδίο `port` στην ενότητα `comstation`

- ένα γεωγραφικό πλάτος / μήκος ενός αισθητήρα στο πεδίο `geo`

- ένα ιδιωτικό κλειδί από τον λογαριασμό Robonomics parachain στο πεδίο `suri`

- μια χρονική περίοδος για τη συλλογή αρχείων καταγραφής σε δευτερόλεπτα στο πεδίο `dump_interval`.

- (προαιρετικά) διαπιστευτήρια για τη μεταφόρτωση αρχείων στο [Temporal.Cloud](http://Temporal.Cloud) στα πεδία `temporal_username`, `temporal_password`

- (προαιρετικά) διαπιστευτήρια για τη μεταφόρτωση αρχείων στο Pinata στα πεδία `pinata_api`, `pinata_secret`

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "[YOUR/PATH/TO/DATABASE]"
   },
   "comstation":{
      "enable":false,
      "port":"/dev/[YOUR/PATH/TO/BOARD]",
      "work_period":300,
      "geo":"00.000000,00.000000",
      "public_key":""
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
      "enable": true,
      "suri": "[YOUR_PRIVATE_KEY]",
      "dump_interval": TIME_PERIOD,
      "temporal_username": "YOUR_TEMPORAL_USERNAME",
      "temporal_password": "YOUR_TEMPORAL_PASSWORD",
      "pinata_api": "YOUR_PINATA_API_KEY",
      "pinata_secret": "YOUR_PINATA_SECRET"
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": true,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

<li>Εκκίνηση της μονάδας συνδεσιμότητας αισθητήρων.</li>

</List>