---
title: "Μάθημα #3, Ρύθμιση MQTT Broker και Εκκίνηση Hass"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: μάθημα βοηθού σπιτιού
lessonNumber: 3
metaOptions: [Μάθετε, Κυρίαρχο Έξυπνο Σπίτι με το Robonomics και το Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Εισαγωγή

Μετά την ολοκλήρωση της ρύθμισης του Raspberry Pi, το επόμενο βήμα είναι η εγκατάσταση του MQTT Broker στο Raspberry Pi. Όπως αναφέρθηκε παραπάνω, ο Broker είναι υπεύθυνος για τη δρομολόγηση μηνυμάτων μεταξύ διαφορετικών πελατών MQTT. Θα εγκαταστήσετε και θα ρυθμίσετε το Eclipse Mosquitto, έναν ανοικτού κώδικα MQTT broker.

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

Επιπλέον, θα ολοκληρώσετε τη ρύθμιση του Home Assistant και θα προσθέσετε την ενσωμάτωση MQTT σε αυτό.

## Οδηγίες

<List type="numbers">

<li>


Εγκατάσταση Mosquitto Broker

<List>
<li>

Εγκαταστήστε το [Mosquitto Broker](https://mosquitto.org/) στο Raspberry Pi σας:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

Εισάγετε ΤΟ_ΟΝΟΜΑ_ΧΡΗΣΤΗ_ΣΑΣ (χρησιμοποιήστε όποιο θέλετε) και κωδικό (θα σας ζητηθεί να εισάγετε τον κωδικό μετά την εντολή):

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

Επεξεργασία αρχείου ρυθμίσεων:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

Προσθέστε τα παρακάτω στο αρχείο:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

Αποθηκεύστε το αρχείο και επανεκκινήστε την υπηρεσία:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

Τέλος, ελέγξτε την κατάσταση του broker:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

Θα πρέπει να δείτε κάτι τέτοιο:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Ρύθμιση του Home Assistant και MQTT

<List>

<li>

Ανοίξτε τον περιηγητή ιστού και πηγαίνετε στη διεύθυνση <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. (με την ίδια διεύθυνση IP που βρήκατε στο προηγούμενο μάθημα). Να γνωρίζετε ότι η διεύθυνση του Raspberry Pi μπορεί να αλλάξει με τον χρόνο λόγω ρυθμίσεων δρομολογητή. 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

Στην πρώτη σελίδα, εισάγετε οποιοδήποτε όνομα, όνομα χρήστη, κωδικό που θέλετε και κάντε κλικ στο "<code>ΔΗΜΙΟΥΡΓΙΑ ΛΟΓΑΡΙΑΣΜΟΥ</code>"
</li>

<li>

Στη συνέχεια, εισαγάγετε ένα όνομα για το σπίτι σας και ορίστε την τοποθεσία και το σύστημα μονάδων σας. Κάντε κλικ στο "<code>ΑΝΙΧΝΕΥΣΗ</code>" για να βρείτε την τοποθεσία σας και να ορίσετε τη ζώνη ώρας και το σύστημα μονάδων βάσει αυτής της τοποθεσίας. Αν δεν θέλετε να στείλετε την τοποθεσία σας, μπορείτε να ορίσετε αυτές τις τιμές χειροκίνητα.

</li>

<li>

Στην επόμενη οθόνη, το Home Assistant θα εμφανίσει οποιεσδήποτε συσκευές που έχει ανακαλύψει στο δίκτυό σας. Μην ανησυχείτε αν βλέπετε λιγότερα στοιχεία από ό,τι φαίνεται παρακάτω. Μπορείτε πάντα να προσθέσετε συσκευές χειροκίνητα αργότερα. Πατήστε τώρα <code>ΤΕΛΟΣ</code> και θα βρίσκεστε στην κύρια οθόνη του Home Assistant.

</li>

<li>

Τώρα πρέπει να εγκαταστήσουμε μια ενσωμάτωση MQTT. Πηγαίνετε στις <code>Ρυθμίσεις</code> -> <code>Συσκευές & Υπηρεσίες.</code>

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

Πατήστε το κουμπί <code>ΠΡΟΣΘΗΚΗ ΕΝΣΩΜΑΤΩΣΗΣ</code> στην κάτω δεξιά γωνία. Στο ανοιχτό παράθυρο βρείτε το <code>MQTT</code>.

</li>

<li>

Επιλέξτε το MQTT και ορίστε τη διεύθυνση του broker σας — <code>localhost</code> θύρα — <code>1883</code> και το όνομα χρήστη και ο κωδικός πρόσβασης σας (το ίδιο που δημιουργήσατε νωρίτερα για το Mosquitto Broker) και στη συνέχεια πατήστε <code>ΥΠΟΒΟΛΗ</code>.
</li>

</List>
</li>
</List>