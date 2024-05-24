---
title: "Μάθημα #4α, Ρύθμιση Πύλης: Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: μάθημα βοηθού σπιτιού
lessonNumber: 4
metaOptions: [Μάθετε, Κυρίαρχο Έξυπνο Σπίτι με το Robonomics και το Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Εισαγωγή

Αυτό είναι ένα σενάριο εγκατάστασης για τη σύνδεση συσκευών χρησιμοποιώντας τον προσαρμογέα Zigbee και τη γέφυρα Zigbee2MQTT. Αν έχετε το [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) (το οποίο έχει όλο τον απαραίτητο firmware), μπορείτε απλά να προχωρήσετε με αυτές τις οδηγίες. Ωστόσο, αν έχετε έναν άλλο προσαρμογέα, το πρώτο πράγμα που πρέπει να κάνετε είναι να το φλασάρετε με το λογισμικό Zigbee2MQTT. Μπορείτε να βρείτε οδηγίες για τη συσκευή σας [εδώ](https://www.zigbee2mqtt.io/guide/adapters/).

Θα χρειαστείτε επίσης μια έξυπνη συσκευή για να δοκιμάσετε τη σύνδεσή της με το Home Assistant.


## Οδηγίες

<List type="numbers">

<li>

Εγκατάσταση Λογισμικού

<List>

  <li>
    Δημιουργήστε ένα αποθετήριο περιβάλλοντος εκτέλεσης Node.js και εγκαταστήστε το με τις απαιτούμενες εξαρτήσεις:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    Βεβαιωθείτε ότι οι σωστές εκδόσεις του Node.js (v14.X, V16.x, V17.x ή V18.X) και του διαχειριστή πακέτων <code class="nowb">npm</code> (6.X, 7.X ή 8.X) που εγκαταστάθηκαν αυτόματα με το Node.js, έχουν εγκατασταθεί:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Δημιουργήστε έναν κατάλογο για το Zigbee2MQTT και ορίστε τον χρήστη σας ως ιδιοκτήτη του:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Κλωνοποιήστε το αποθετήριο Zigbee2MQTT:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    Εγκαταστήστε τις εξαρτήσεις. Σημειώστε ότι το <code>npm ci</code> μπορεί να παράγει κάποιες προειδοποιήσεις που μπορούν να αγνοηθούν.
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

Σύνδεση και Ρύθμιση του Προσαρμογέα

<List>

<li>

Συνδέστε τον προσαρμογέα Zigbee στο Raspberry Pi. Στη συνέχεια, πρέπει να βρείτε την τοποθεσία του stick. Για αυτό πληκτρολογήστε την επόμενη εντολή:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

Το αποτέλεσμα θα πρέπει να μοιάζει με:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

Σε αυτό το παράδειγμα το directory σύνδεσης stick είναι <code>ttyUSB0</code>.
</li>

<li>

Επεξεργαστείτε το αρχείο <code>configuration.yaml</code> πριν ξεκινήσετε το Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

Η βασική διαμόρφωση χρειάζεται μερικές προσαρμογές. Αλλάξτε τις ακόλουθες δηλώσεις:

\- <code>homeassistant:</code> σε <code>true</code>, θα συνδέσει αυτόματα αισθητήρες στο Home Assistant;

\- ξεσχολιάστε <code>user</code> και <code>password</code> κάτω από <code>mqtt</code> και εισάγετε το όνομα χρήστη και τον κωδικό πρόσβασης σας (ως string, με εισαγωγικά) από τον MQTT Broker;

\- αλλάξτε τη θύρα στο <code>serial</code> -> <code>port</code> στο directory σύνδεσης stick. Σε αυτό το παράδειγμα: <code>/dev/ttyUSB0</code>.

Το προσαρμομένο αρχείο διαμόρφωσης πρέπει να φαίνεται ως εξής:

<LessonCodeWrapper language="yaml">
# Home Assistant integration (MQTT discovery)
homeassistant: true
# allow new devices to join
permit_join: true
# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  user: 'YOUR_USERNAME'
  password: 'YOUR_PASSWORD'
# Serial settings
serial:
  # Location of CC2531 USB sniffer
  port: /dev/YOUR_PORT
</LessonCodeWrapper>


**Επιπλέον:**

Αν έχετε ήδη ένα ενεργό προσαρμογέα Zigbee ή πύλη στο σπίτι σας και τώρα διαμορφώνετε ένα άλλο stick, τότε θα μπουν σε σύγκρουση μεταξύ τους. Για να λύσετε αυτό το πρόβλημα πρέπει να αλλάξετε το κανάλι στη νέα συσκευή. Για αυτό προσθέστε τις ακόλουθες συμβολοσειρές στο τέλος του αρχείου διαμόρφωσης:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Έναρξη Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

Εάν ξεκινήσει με επιτυχία, θα δείτε κάτι παρόμοιο:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Σύζευξη Συσκευής

<List>

<li>

Ήρθε η ώρα να συνδέσετε την έξυπνη σας συσκευή. Ο πιο συνηθισμένος τρόπος για να μεταβείτε μια συσκευή σε λειτουργία σύνδεσης είναι να κρατήσετε το κουμπί τροφοδοσίας ή να τις ενεργοποιήσετε/απενεργοποιήσετε 5 φορές. Βεβαιωθείτε ότι το Zigbee2MQTT λειτουργεί.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

Όταν η συσκευή συνδεθεί, θα πρέπει να δείτε ένα μήνυμα όπως:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

Να θυμάστε το ID του αισθητήρα: σε αυτό το παράδειγμα — <code>0x00158d0003eeeacf</code>.

Τώρα θα πρέπει να δείτε αυτόν τον αισθητήρα με το ID στο Home Assistant WebUI σας. Πηγαίνετε σε <code>Ρύθμιση</code> -> <code>Συσκευές & Υπηρεσίες</code> -> <code>Συσκευές</code> για να το ελέγξετε:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

Αφού προσθέσετε όλους τους αισθητήρες, μπορείτε να σταματήσετε το πρόγραμμα με το <code>Ctrl+C</code>. Εάν δεν θέλετε να προσθέσετε άλλες συσκευές, μπορείτε να ανοίξετε ξανά το αρχείο ρυθμίσεων και να ορίσετε το <code>permit_join:</code> σε <code>false</code>.
</li>

</List>
</li>

<li>

Δημιουργία Υπηρεσίας για Αυτόματη Έναρξη

<List>

<li>

Τώρα πρέπει να δημιουργήσετε μια υπηρεσία. Δημιουργήστε το αρχείο:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

Προσθέστε τα παρακάτω σε αυτό το αρχείο με αλλαγή του <code>ΤΟ_ΟΝΟΜΑ_ΧΡΗΣΤΗ_ΣΑΣ_ΕΔΩ</code>. Εάν δεν γνωρίζετε το όνομά σας χρήστη, χρησιμοποιήστε την εντολή <code>whoami</code>.

<LessonCodeWrapper language="bash">
[Unit]
Description=zigbee2mqtt
After=network.target 
[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=YOUR_RASPPI_USERNAME_HERE
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>
</li>

<li>

Επαληθεύστε ότι οι ρυθμίσεις λειτουργούν:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

Το αποτέλεσμα θα πρέπει να μοιάζει με:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

Ενεργοποιήστε την υπηρεσία για να ξεκινήσει το Zigbee2MQTT αυτόματα κατά την εκκίνηση:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>