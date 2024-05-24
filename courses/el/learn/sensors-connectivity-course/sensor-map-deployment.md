---
title: "Μάθημα #6, Ανάπτυξη χάρτη αισθητήρων"
description: 'ΑΝΑΠΤΥΞΗ ΧΑΡΤΗ ΑΙΣΘΗΤΗΡΩΝ'
lessonNumber: 6
metaOptions: [Μάθετε, Σύνδεση Αισθητήρων & Αποκεντρωμένο Δίκτυο Αισθητήρων]
defaultName:  Sensors Connectivity & Decentralized Sensors Network
---

Μετά τη συναρμολόγηση ενός αισθητήρα και την εγκατάσταση του ενός αισθητήρα σύνδεσης μονάδας είναι καιρός να αναπτύξετε το προσωπικό αποκεντρωμένο χάρτη αισθητήρων.


## Απαιτήσεις & Εγκατάσταση

<List type="numbers">

<li>

Δεδομένου ότι ο χάρτης αισθητήρων τροφοδοτείται από JavaScript, πρώτα πρέπει να εγκαταστήσετε το `node` και τον διαχειριστή `yarn`:

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

Λήψη και κατασκευή του χάρτη:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

Εκτελέστε τον χάρτη σε λειτουργία `development` για δοκιμή

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

Μεταβείτε στη διεύθυνση URL από το τερματικό, θα πρέπει να δείτε τον χάρτη του αισθητήρα. Μετά από αυτό, σταματήστε το με `Ctrl+C`.

</li>

</List>

## Διαμόρφωση

<List type="numbers">

<li>

Βρείτε το ID IPFS σας με:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

Μεταβείτε στο φάκελο `src` και μετονομάστε τα αρχεία:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

Εισάγετε το ID IPFS σας στ `agents.json`:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

Ανοίξτε το αρχείο `config.json` και αλλάξτε το επόμενο τμήμα του αρχείου διαμόρφωσης:

<LessonCodeWrapper codeClass="big-code" language="json">...
  REMOTE_PROVIDER: "",
  WIND_PROVIDER: "",
  MAP: {
    zoom: "8",
    position: {
      lat: "",
      lng: "",
    },
  },
  SHOW_MESSAGES: true,
};</LessonCodeWrapper>


Εδώ πρέπει να εισάγετε το γεωγραφικό πλάτος (`lat`) και το γεωγραφικό μήκος (`lng`) της πόλης σας. Προαιρετικά, μπορείτε να ρυθμίσετε την [υπηρεσία κατεύθυνσης ανέμου](https://github.com/danwild/wind-js-server) και να παρέχετε το URL σε αυτό στο πεδίο `WIND_PROVIDER`.

</li>

</List>


## Κατασκευή

<List type="numbers">

<li>

Εκτελέστε την παρακάτω εντολή για τη δημιουργία αρχείων για κυκλοφορία:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

Θα δημιουργήσει τον κατάλογο `dist` με όλα τα στοιχεία της στατικής ιστοσελίδας.

</li>

<li>

Για να ελέγξετε αν όλα είναι σωστά, μεταβείτε στον κατάλογο `dist` και ανοίξτε το αρχείο `index.html`. Μετά από κάποιο χρονικό διάστημα, τα δεδομένα του αισθητήρα από τη μονάδα σύνδεσης αισθητήρων θα εμφανιστούν στον χάρτη.

</li>

</List>

