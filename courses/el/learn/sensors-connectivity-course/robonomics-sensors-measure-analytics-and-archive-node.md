---
title: "Μάθημα #7, Οι αισθητήρες του Robonomics μετρούν αναλύσεις και αρχειοθετούν τον κόμβο"
description: 'ΤΑ ΑΙΣΘΗΤΗΡΙΑ ΤΟΥ ROBONOMICS ΜΕΤΡΟΥΝ ΑΝΑΛΥΤΙΚΑ ΚΑΙ ΑΡΧΕΙΟ ΚΟΜΒΟ'
lessonNumber: 7
metaOptions: [Μάθετε, Σύνδεση Αισθητήρων & Αποκεντρωμένο Δίκτυο Αισθητήρων]
defaultName:  Sensors Connectivity & Decentralized Sensors Network
---

Οι αισθητήρες του Robonomics μετρούν αναλύσεις και αρχειοθετούν τον κόμβο ή RoSeMAN είναι ένας υπηρεσία για τη συγκέντρωση δεδομένων αισθητήρων για να εμφανίσει το ιστορικό μέτρησης. Σε αυτό το άρθρο θα ρυθμίσετε την υπηρεσία.

## Απαιτήσεις

Το RoSeMAN απαιτεί [MongoDB](https://www.mongodb.com/docs/manual/introduction/) διακομιστή βάσης δεδομένων, υποθέτεται ότι το έχετε ήδη. Επίσης, πρέπει να ενεργοποιήσετε την επιλογή datalog για το μοντούλο συνδεσιμότητας αισθητήρων, όπως φαίνεται στο Σενάριο #3. Θα πρέπει να έχετε δωρεάν τοκεν XRT στον λογαριασμό Robonomics σας, ο οποίος συνδέεται με το μοντούλο συνδεσιμότητας αισθητήρων. 


## Ρύθμιση

<List type="numbers">

<li>

Λήψη αποθετηρίου:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

Δ��μιουργία αρχείων ρυθμίσεων:

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Ανοίξτε το αρχείο `config.json` και επεξεργαστείτε τη διαδρομή της βάσης δεδομένων:

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

Προσθέστε τη δημόσια διεύθυνση του λογαριασμού σας στο αρχείο `agents.json`. Μπορείτε να προσθέσετε πολλές διευθύνσεις στο αρχείο, αν θέλετε να συλλέξετε δεδομένα από διαφορετικούς μοντούλους συνδεσιμότητας αισθητήρων.

</li>


<li>

Εγκατάσταση εξαρτήσεων και δημιουργία διακομιστή:

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

Έναρξη διακομιστή RoSeMAN:

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

Ο διακομιστής Web θα πρέπει να ξεκινήσει στη διεύθυνση `http://127.0.0.1:3000`.

</li>

</List>

## Μετά την εγκατάσταση

Μετά την αναπτυξη του RoSeMAN σε ένα διακομιστή πρέπει να λάβετε τη δημόσια διεύθυνση IP ή URL του διακομιστή. Εναλλακτικά, αν εκτελείτε το RoSeMAN και το χάρτη αισθητήρων στον ίδιο διακομιστή, μπορείτε να χρησιμοποιήσετε την τοπική διεύθυνση IP.

Στη συνέ��εια, πρέπει να ανοίξετε το αρχείο ρυθμίσεων του χάρτη αισθητήρων και να εισάγετε το URL σας στο αρχείο `config.json` στο πεδίο `REMOTE_PROVIDER`


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

Ανακατασκευάστε το χάρτη με `yarn build` και ξεκινήστε τον ξανά. Θα μπορείτε να δείτε το ιστορικό μέτρησης.