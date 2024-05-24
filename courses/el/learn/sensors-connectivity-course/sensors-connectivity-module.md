---
title: "Μάθημα #4, Αισθητήρες σύνδεσης"
description: 'ΑΙΣΘΗΤΗΡΕΣ ΣΥΝΔΕΣΙΜΟΤΗΤΑΣ'
lessonNumber: 4
metaOptions: [Μάθετε, Σύνδεση Αισθητήρων & Αποκεντρωμένο Δίκτυο Αισθητήρων]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Στα ακόλουθα άρθρα, θα μάθετε περισσότερα σχετικά με το Αισθητήρες Σύνδεσης. Μετά από αυτό, μπορείτε να συμμετάσχετε στη φιλοξενία του Διακεκεντρωμένου Δικτύου Αισθητήρων ή να δημιουργήσετε το δικό σας χάρτη αισθητήρων.

## Σχετικά με την Σύνδεση Αισθητήρων

Το Διακεκεντρωμένο Δίκτυο Αισθητήρων χρησιμοποιεί το Python module `sensors-connectivity` ([κώδικας πηγής](https://github.com/airalab/sensors-connectivity)). Αυτό το module επιτρέπει σε οποιονδήποτε χρήστη να ξεκινήσει το δικό του διακομιστή για να λαμβάνει δεδομένα από αισθητήρες και να τα επεξεργαστεί περαιτέρω. Προς το παρόν, οι προγραμματιστές έχουν ξεκινήσει αρκετούς τέτοιους διακομιστές και οποιοσδήποτε αισθτήρας μπορεί να στείλει δεδομένα σε αυτούς. Η λειτουργία πολλαπλών διακομιστών αποφεύγει την απώλεια δεδομένων σε περίπτωση προβλημάτων με έναν από αυτούς, καθώς οι αισθητήρες θα μεταβούν από έναν μη λειτουργικό διακομιστή σε έναν λειτουργικό. Βασικά, μπορείτε να σκεφτείτε το module Σύνδεσης Αισθητήρων ως ένα μαύρο κουτί με μία είσοδο (δεδομένα αισθητήρα) και πολλές εξόδους.

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

Το module Σύνδεσης Αισθητήρων είναι ένα σύνολο σταθμών (σταθμός_1, σταθμός_2 ... σταθμός_n), οι οποίοι λαμβάνουν διάφορα δεδομένα, συμπεριλαμβανομένων δεδομένων από αισθητήρες μέσω πρωτοκόλλου HTTP. Επίσης, μπορεί να είναι αισθητήρες που συνδέονται στον υπολογιστή μέσω USB ή οποιαδήποτε άλλη πηγή δεδομένων. Τα δεδομένα που λαμβάνονται από τους σταθμούς επεξεργάζονται από το module και περνούν στους τροφοδότες (τροφοδότης_1, τροφοδότης_2 ... τροφοδότης_n). Οι τροφοδότες στέλνουν τα επεξεργασμένα δεδομένα στον χρήστη; στην περίπτωσή μας τα δεδομένα στέλνονται στο αποκεντρωμένο κανάλι IPFS. 

Ένας χάρτης του [Διακεκεντρωμένου Δικτύου Αισθητήρων](https://sensors.robonomics.network/#/) είναι μια αποκεντρωμένη εφαρμογή (dapp) που τρέχει στον υπολογιστή. Διαβάζει δεδομένα από το κανάλι IPFS και τα εμφανίζει στο χάρτη. Δεν υπάρχει άμεση σύνδεση μεταξύ του διακομιστή που συλλέγει δεδομένα από τους αισθητήρες και του χάρτη που βλέπει ο χρήστης; τα δεδομένα μεταφέρονται μεταξύ τους μέσω IPFS pubsub, το οποίο μειώνει το φορτίο στους διακομιστές. 

Επιπλέον, από καιρό σε καιρό, ένα αρχείο με δεδομένα για την τελευταία περίοδο χρόνου αποθηκεύεται στο IPFS, και ένα hash αυτών των δεδομένων καταγράφεται στη συνέχεια στο blockchain. Δεδομένου ότι το IPFS είναι ένα δίκτυο με περιεχόμενο-διευθυνθέντα, η αποθήκευση δεδομένων σε αυτό εξασφαλίζει ότι οποιαδήποτε αλλαγή δεδομένων δεν περνά απαρατήρητη, επειδή η διεύθυνση του απαιτούμενου αρχείου περιέχει ένα hash του περιεχομένου του, το οποίο θα αλλάξει με οποιαδήποτε αλλαγή δεδομένων. Το blockchain χρησιμοποιείται για να περάσει το hash στον χρήστη, ο οποίος μπορεί να το χρησιμοποιήσει για να λάβει τα απαιτούμενα δεδομένα από το IPFS (αυτό συμβαίνει όταν ζητάτε ιστορικό του χάρτη).

## Ρύθμιση μονάδας για Linux

**Προ-προϋποθέσεις και Εγκατάσταση**

<List type="numbers">

<li>

Για να χτίσετε το module `sensors-connectivity` πρέπει να έχει εγκατασταθεί το IPFS daemon με έκδοση μέχρι `0.8.x`. Υποθέτοντας ότι εργάζεστε σε Linux, εκτελέστε το ακόλουθο (για έκδοση `0.8.0`):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

Εγκαταστήστε το πακέτο με εργαλεία ανάπτυξης `python3-dev` και το εργαλείο εγκατάστασης πακέτων για τη γλώσσα προγραμματισμού Python `pip`:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

Εγκαταστήστε το module ως ένα πακέτο PyPI:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

Αν βλέπετε την ακόλουθη προειδοποίηση: 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

Εκτελέστε την επόμενη εντολή:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## Διαμόρφωση

<List type="numbers">

<li>

Δημιουργήστε φάκελο για το αρχείο ρυθμίσεων και το αρχείο βάσης δεδομένων όπου επιθυμείτε. Αυτή η βάση δεδομένων θα αποθηκεύει τα hashes των δεδομένων αισθητήρων του IPFS, τη χρονική σήμανση και την κατάσταση της υπηρεσίας:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
Το όνομα του αρχείου βάσης δεδομένων μπορεί να είναι οποιοδήποτε, αλλά η επέκταση πρέπει να είναι <code>.db</code>
</RoboAcademyNote>

</li>


<li>

Δημιουργήστε το αρχείο ρυθμίσεων στον ίδιο φάκελο:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

Αντιγράψτε το παρακάτω στο αρχείο και εισάγετε την πλήρη διαδρομή προς το αρχείο βάσης στο πεδίο db_path. Αυτή η ρύθμιση θα είναι αρκετή για να λάβετε δεδομένα αισθητήρων μέσω HTTP και να τα στείλετε στο χάρτη του Robonomics:

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

## Εκκίνηση


<List type="numbers">

<li>

Εκκίνηση του IPFS daemon:

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

Αφού οι ρυθμίσεις είναι έτοιμες, εκτελέστε την υπηρεσία με τη διαδρομή προς το αρχείο ρυθμίσεων σε ένα άλλο τερματικό:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

Θα δείτε αρχεία καταγραφής στο τερματικό (επίσης, θα προστεθούν στο `~/.logs`). Παράδειγμα:

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

## Μετά την εγκατάσταση

Για να συνδέσετε το module `sensors-connectivity` στο Διακεντρωμένο Δίκτυο Αισθητήρων μας και να δείτε τα δεδομένα σας στο χάρτη, πρέπει να στείλετε το IPFS ID σας στο [vm@multi-agent.io](mailto:vm@multi-agent.io) ή [ping@airalab.org](mailto:ping@airalab.org). Θα προσθέσουμε το ID σας σε μια λίστα ελέγχου πρόσβασης.

Λάβετε το IPFS `ID` σας με την ακόλουθη εντολή μετά την εκκίνηση του IPFS daemon:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>