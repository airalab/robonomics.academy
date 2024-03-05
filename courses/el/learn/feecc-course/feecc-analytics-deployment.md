---
title: "Εγκατάσταση Analytics"
description: Αυτό το μάθημα αφορά την εξοικείωση με το σύστημα Feecc και όλα τα στοιχεία του.
metaOptions: [Μάθετε, Εξοικειωθείτε με το Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
Σε αυτό το μάθημα, θα μάθετε πώς να εγκαταστήσετε τα στοιχεία του Ανάλυση Feecc.
</RoboAcademyText>

## Εκκίνηση Analytics Backend

1. Κλωνοποιήστε το αποθετήριο:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. Διαμορφώστε την υπηρεσία backend για τις ανάγκες σας χρησιμοποιώντας το αρχείο `.env`:
    - `MONGO_CONNECTION_URL` — το URI σύνδεσής σας με το MongoDB;
    - `MONGO_DATABASE_NAME` — ένα όνομα βάσης δεδομένων του MongoDB;
    - `SECRET_KEY` — κρυφό κλειδί για κρυπτογράφηση και αποκρυπτογράφηση;
    - `IPFS_GATEWAY_HOST` — URL της IPFS Gateway;
    - `USE_DATALOG` — αποστολή δεδομένων αναλυτικής πληροφορίας στο Robonomics (`true` ή `false`);
    - `ROBONOMICS_SEED` — φράση εκκίνησης για το λογαριασμό Robonomics.

3. Εκκινήστε τον εμπρόσθιο container:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Ελέγξτε τη λειτουργικότητά του. Πηγαίνετε στον περιηγητή και ανοί��τε τη σελίδα `http://localhost:5002/docs`. Αν έχετε κάνει τα πάντα σωστά, θα δείτε μια σελίδα (δημιουργημένη από το Swagger) με όλα τα σημεία τέλους του REST API του Feecc Analytics. Τώρα είστε έτοιμοι να εκκινήσετε το frontend.

## Εκκίνηση Analytics Frontend

1. Κλωνοποιήστε το αποθετήριο:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. Πηγαίνετε στο `src` και διαμορφώστε την υπηρεσία frontend για τις ανάγκες σας χρησιμοποιώντας το αρχείο `config.json`. Βεβαιωθείτε ότι εισάγετε το URL του Feecc Analytics Backend στην παράμετρο `base_url` (στη μορφή `xx.xx.xx.xx:port`).

3. Εκκινήστε τον εμπρόσθιο container:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Ελέγξτε τη λειτουργικότητά του. Πηγαίνετε στον περιηγητή και ανοίξτε τη σελίδα `http://localhost:8081/docs`.

<RoboAcademyText fWeight="500">
Με αυτό, η εξοικείωση με το σύστημα Feecc μπορεί να θεωρηθεί ολοκληρωμένη. Αν έχετε οποιεσδήποτε επιπλέον ερωτήσεις, μπορείτε να επικοινωνήσετε με τους προγραμματιστές στα Multi-Agent Systems (multi-agent.io) ή να ��φήσετε ένα θέμα στο GitHub τους (github.com/Multi-Agent-io).
</RoboAcademyText>