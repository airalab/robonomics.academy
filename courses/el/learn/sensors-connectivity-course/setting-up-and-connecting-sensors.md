---
title: "Μάθημα #3, Ρύθμιση και σύνδεση αισθητήρων"
description: 'ΡΥΘΜΙΣΗ ΚΑΙ ΣΥΝΔΕΣΗ ΑΙΣΘΗΤΗΡΩΝ'
lessonNumber: 3
metaOptions: [Μάθετε, Σύνδεση Αισθητήρων & Αποκεντρωμένο Δίκτυο Αισθητήρων]
defaultName:  Sensors Connectivity & Decentralized Sensors Network
---

Οι αισθητήρες μας χρησιμοποιούν το υλικολογισμικό Robonomics, μια εκτεταμένη έκδοση του υλικολογισμικού sensor.community, με ορισμένους αισθητήρες που προστέθηκαν και το σχήμα αποστολής δεδομένων άλλαξε. Μπορείτε να βρείτε τον πηγαίο κώδικα [στο σύνδεσμο.](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

Αν έχετε έτοιμη πλακέτα Robonomics, μπορείτε να μεταβείτε στην ενότητα "Σύνδεση".

## Απαιτήσεις

**Για Linux:**

<List type="numbers">

<li>

Προσθέστε έναν χρήστη στην ομάδα `dialout` (για Ubuntu) για πρόσβαση στη θύρα USB:

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>Επανεκκινήστε τον υπολογιστή.</li>

<li>

Κατεβάστε το εκτελέσιμο Robonomics `airrohr-flasher` από [τις κυκλοφορίες](https://github.com/airalab/sensors-connectivity/releases).

</li>

<li>

Αλλάξτε τα δικαιώματα του αρχείου και εκτελέστε το:

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**Για Windows:**

<List type="numbers">

<li>

Εγκαταστήστε τους οδηγούς για USB2serial (στα Windows 10 θα πρέπει να ξεκινήσει αυτόματα) - Οδηγοί για το NodeMCU v3 (CH340): [σύνδεσμος](http://www.wch.cn/downloads/file/5.html), [εναλλακτικός σύνδεσμος](https://d.inf.re/luftdaten/CH341SER.ZIP). 

</li>

<li>

Κατεβάστε το εκτελέσιμο πρόγραμμα Robonomics `airrohr-flasher` από το [releases](https://github.com/airalab/sensors-connectivity/releases) και εκτελέστε το.

</li>

</List>

**Για MacOS:**

<List type="numbers">

<li>

Εγκαταστήστε τους οδηγούς για USB2serial — Οδηγοί για NodeMCU v3 (CH340): [σύνδεσμος](http://www.wch.cn/downloads/file/178.html), [εναλλακτικός σύνδεσμος](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

Κατεβάστε το εκτελέσιμο πρόγραμμα Robonomics `airrohr-flasher` από το [releases](https://github.com/airalab/sensors-connectivity/releases) και εκτελέστε το.

</li>

</List>


## Ρύθμιση

<List type="numbers">

<li>

Συνδέστε τον αισθητήρα στον Η/Υ και εκτελέστε το πρόγραμμα `airrohr-flasher`. Μετά το άνοιγμα του προγράμματος θα δείτε τα παρακάτω (ανάλογα με το λειτουργικό σας σύστημα):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

Το πεδίο `Board` θα πρέπει να συμπληρωθεί αυτόματα. Αν όχι, επιλέξτε την απαιτούμενη θύρα από τη λίστα επιλογών.

<RoboAcademyNote type="okay" title="INFO">
Αν το <code>airrohr-flasher</code> δεν μπορεί να βρει τον πίνακα σας, βεβαιωθείτε ότι έχετε εκτελέσει σωστά το τμήμα <b>Απαιτήσεις</b>.
</RoboAcademyNote>

</li>

<li>

Επιλέξτε το firmware με την προτιμώμενη γλώσσα και κάντε κλικ στο `Μεταφόρτωση`. Η μεταφόρτωση του firmware θα πάρει κάποιο χρόνο. Αν αργότερα αποφασίσετε να αλλάξετε γλώσσα ή να κάνετε μια καθαρή εγκατάσταση (για επαναφορά της διαμόρφωσης), πηγαίνετε στη σελίδα `Διαγραφή flash` και πατήστε το κουμπί για να διαγράψ��τε τη μνήμη flash του αισθητήρα.

</li>

<li>

Μετά τη λήψη του firmware, επανεκκινήστε το ESP (απλά αποσυνδέστε και επανασυνδέστε το USB).

</li>

<li>

Επιλέξτε αισθητήρες από το μενού επιλογής. Επιλέξτε SDS011 και οποιουσδήποτε επιπλέον αισθητήρες. Πατήστε `Αποθήκευση διαμόρφωσης`.

</li>

<li>

Μετά τη λήψη της διαμόρφωσης, επανεκκινήστε το ESP (απλά αποσυνδέστε και επανασυνδέστε το USB).

</li>

</List>

## Σύνδεση

<List type="numbers">

<li>

Μετά την επανεκκίνηση, η πλακέτα θα δημιουργήσει ένα δίκτυο Wi-Fi με το όνομα `RobonomicsSensor-xxxxxxxxx`. Συνδεθείτε σε αυτό από το τηλέφωνο ή τον υπολογιστή σας: θα δείτε το παράθυρο εξουσιοδότησης (αν όχι, ανοίξτε το πρόγραμμα περιήγησης και μεταβείτε στο `192.168.4.1`).

</li>

<li>

Επιλέξτε το δίκτυο Wi-Fi σας από τη λίστα (ή γράψτε το μόνοι σας αν δεν υπάρχει στη λίστα) και συμπληρώστε το πεδίο κωδικού.

</li>

<li>

Γράψτε τις συ��τεταγμένες του μέρους όπου θα εγκατασταθεί ο αισθητήρας.

<RoboAcademyNote type="warning" title="WARNING">
Οι συντεταγμένες του αισθητήρα θα εμφανιστούν στον διαθέσιμο δημόσιο χάρτη. Αν δεν θέλετε να εμφανίσετε τις προσωπικές σας πληροφορίες, γράψτε κοντινές, αλλά όχι ακριβείς συντεταγμένες.
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

Κάντε κλικ στο `Αποθήκευση διαμόρφωσης και επανεκκίνηση`. Η πλακέτα θα επανεκκινηθεί και θα συνδεθεί στο καθορισμένο δίκτυο Wi-Fi.

</li>

<li>

Ανοίξτε τον [Χάρτη αισθητήρων Robonomics](https://sensors.robonomics.network/#/) και βρείτε το μέρος όπου εγκαταστήσατε τον αισθητήρα. Σε λίγα λεπτά θα μπορείτε να δείτε τον αισθητήρα σας με δεδομένα στο χάρτη.


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

Αυτά είναι όλα με την προεπιλεγμένη εγκατάσταση. Για μια πιο προηγμένη ρύθμιση (αποστολή δεδομένων στον δικό σας διακομιστή), διαβάστε το επόμενο τμήμα.

## Πρόσθετος Διαμόρφωση

Πριν τη ρύθμιση, πρέπει να βρείτε τη διεύθυνση του αισθητήρα στο δίκτυο Wi-Fi σας. Για να το κάνετε αυτό, μπορείτε να χρησιμοποιήσετε το `airrohr-flasher` (ο υπολογιστής σας πρέπει να είναι στο ίδιο δίκτυο με τον αισθητήρα). Ξεκινήστε το και πηγαίνετε στην καρτέλα `Ανακάλυψη`, στη συνέχεια πατήστε `Ανανέωση`, περιμένετε λίγο και η διεύθυνση ��ου αισθητήρα σας θα εμφανιστεί.

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

Κάντε διπλό κλικ σε αυτήν τη διεύθυνση (ή πληκτρολογήστε τη στον περιηγητή σας), θα φτάσετε στο μενού του αισθητήρα:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

Τώρα μπορείτε να ξεκινήσετε την προσαρμογή της ρύθμισής σας.


## Προσαρμοσμένο API

Μπορείτε επίσης να ρυθμίσετε την αποστολή δεδομένων στον δικό σας διακομιστή. Για να το κάνετε αυτό, στην καρτέλα `APIs` κάντε κλικ στο `Αποστολή στο δικό σας API` και καθορίστε τη διεύθυνση και τη θύρα του διακομιστή (`65` για τη συνδεσιμότητα των αισθητήρων):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

Κάντε κλικ στην επιλογή `Αποθήκευση και επανεκκίνηση` για να αποθηκεύσετε τις ρυθμίσεις.