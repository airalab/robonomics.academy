---
title: "Μάθημα #2, Ρύθμιση Raspberry Pi"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: μάθημα βοηθού σπιτιού
lessonNumber: 2
metaOptions: [Μάθετε, Κυρίαρχο Έξυπνο Σπίτι με το Robonomics και το Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Εισαγωγή

Σε αυτό το μάθημα, θα προετοιμάσετε το Raspberry Pi σας για να γίνει ένα κέντρο IoT. Θα εγκαταστήσετε και θα ρυθμίσετε σειριακά όλα τα απαραίτητα στοιχεία, δηλαδή:

<List>

- Διανομή Ubuntu Linux για το Raspberry Pi ως λειτουργικό σύστημα εξυπηρετητή·
- Πακέτα Home Assistant·
- Πακέτα IPFS·
- Βιβλιοθήκη robonomics-interface.

</List>

## Οδηγίες

<List type="numbers">

<li>

Προετοιμασία και Ρύθμιση του Raspberry Pi

<List>

  <li>

  Κατεβάστε την εικόνα του [64-bit Ubuntu Server 22.04 LTS](https://ubuntu.com/download/raspberry-pi) ή νεότερη για το Raspberry Pi.
  </li>

  <li>

  Κατεβάστε και εγκαταστήστε ένα εργαλείο για την εγγραφή εικόνων αρχείων με την ονομασία [Raspberry Pi Imager](https://www.raspberrypi.com/software/) στον υπολογιστή σας.
  </li>

  <li>

  Εισάγετε την κάρτα SD και εκτελέστε το Raspberry Pi Imager. Επιλέξτε την απαιτούμενη εικόνα (που μόλις κατεβάσατε) ως λειτουργικό σύστημα και βεβαιωθείτε ότι επιλέγετε την κάρτα SD σας από το μενού αναπτυσσόμενης αποθήκευσης.

  </li>

  <li>

  Ανοίξτε τις ρυθμίσεις και ελέγξτε την επιλογή <code>Ενεργοποίηση SSH</code> με την παράμετρο <code>Χρήση πιστοποίησης κωδικού πρόσβασης</code>.

  \- Στο <code>Ορισμός ονόματος χρήστη και κωδικού πρόσβασης</code> προσθέστε το όνομα χρήστη και τον κωδικό πρόσβασης για τον χρήστη του Raspberry Pi σας.

  \- Στο <code>Ρύθμιση ασύρματου δικτύου LAN</code> παρέχετε το Wi-Fi σας με τον κωδικό πρόσβασής του και επιλέξτε τη χώρα σας από τη λίστα αναπτυσσόμενης. Στη συνέχεια <code>Εγγραφή</code> εικόνας.

  <robo-academy-note type="okay">
  Βεβαιωθείτε ότι εισάγετε το πραγματικό όνομα του Wi-Fi σας και τον κωδικό πρόσβασης του Wi-Fi σας.
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  Περιμένετε μέχρι να ολοκληρωθεί η εγγραφή, στη συνέχεια εισάγετε την κάρτα SD στο Raspberry Pi και ενεργοποιήστε το. Θα πρέπει να συνδεθεί στο δίκτυό Wi-Fi σας, πράγμα που θα πάρει κάποιο χρόνο.

  </li>
  
  <li>

  Τώρα πρέπει να βρείτε μια διεύθυνση της συσκευής. Για να το κάνετε μπορείτε να χρησιμοποιήσετε διάφορες μεθόδους για σάρωση δικτύου, όπως το [Fing App](https://www.fing.com/products), η εντολή <code>arp -a</code> ή το [nmap](https://nmap.org/download.html). Το τελευταίο θα χρησιμοποιηθεί στη συνέχεια.

  Εγκαταστήστε το nmap με μια εντολή

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  Στη συνέχεια βρείτε τη διεύθυνσή σας στο τοπικό δίκτυο σας. Θα πρέπει να μοιάζει με <code>192.168.xxx.xxx</code> ή <code>172.xxx.xxx.xxx.</code> Προσέξτε καθώς το nmap μπορεί να βρει πολλές διευθύνσεις στο τοπικό σας δίκτυο.

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  Στη συνέχεια σαρώστε το δίκτυό σας όπως φαίνεται παρακάτω αντικαθιστώντας το τελευταίο οκτάδα της διεύθυνσης με <code>0</code>:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  Η έξοδος της εντολής θα είναι κάτι τέτοιο:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon noLines>
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST
Nmap scan report for _gateway (192.168.43.1)
Host is up (0.015s latency).
MAC Address: 8E:F5:A3:DB:02:24 (Unknown)
Nmap scan report for ubuntu (192.168.43.56)
Host is up (0.049s latency).
MAC Address: DC:A6:32:04:45:50 (Raspberry Pi Trading)
Nmap scan report for LAPTOP-NO7 (192.168.43.234)
Host is up (0.00057s latency).
MAC Address: 7C:B3:7D:9E:94:DA (Intel Corporate)
Nmap scan report for ed-vm (192.168.43.138)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds
</LessonCodeWrapper>

  Σε αυτό το παράδειγμα η διεύθυνση είναι <code>192.168.43.56.</code>

  </li>

  <li>

  Συνδεθείτε στο Raspberry Pi μέσω SSH με την εντολή IP που βρήκατε. Χρησιμοποιήστε το όνομα χρήστη και τον κωδικό πρόσβασης που δημιουργήσατε νωρίτερα.
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  Οι περαιτέρω οδηγίες εκτελούνται μέσω SSH στο ίδιο το Raspberry Pi.
  
  </li>
</List>
</li>

<li>

Εγκατάσταση Home Assistant

<List>
  <li>

  <robo-academy-note type="okay">

Κάποιες εκδόσεις λογισμικού που εμφανίζονται παρακάτω μπορεί να είναι ξεπερασμένες. Για τις πιο πρόσφατες εκδόσεις, μπορείτε να ανατρέξετε στο [αποθετήριο εγκατάστασης για την εικόνα Robonomics Home Assistant](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage).

  </robo-academy-note>

  Πριν ξεκινήσετε, ενημερώστε το σύστημα του Raspberry Pi και εγκαταστήστε τα απαραίτητα πακέτα. Κατά την εγκατάσταση θα δείτε ένα παράθυρο με αίτημα επανεκκίνησης υπηρεσίας. Απλά επιλέξτε <span class="accent">ok</span> με το πλήκτρο <code>tab</code> και πατήστε enter.

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  Δημιουργήστε τον χρήστη <code>homeassistant</code> και τον κατάλογο για το Home Assistant Core:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  Δημιουργήστε ένα εικονικό περιβάλλον για το Home Assistant Core και μεταβείτε σε αυτό. Αυτό πρέπει να γίνει ως χρήστης <code>homeassistant</code>, οπότε μετά την εκτέλεση των εντολών ο χρήστης σας θα μοιάζει με <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  Ως αποτέλεσμα, θα βρείτε ένα όνομα του εικονικού περιβάλλοντος στις αγκύλες:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  Εγκαταστήστε τα απαιτούμενα πακέτα Python:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  Ξεκινήστε το Home Assistant Core για πρώτη φορά. Αυτό θα ολοκληρώσει την εγκατάσταση δημιουργώντας αυτόματα τον κατάλογο διαμόρφωσης <code class="nowb">.homeassistant</code> στον κατάλογο <code>/home/homeassistant</code>, και εγκαθιστώντας οποιεσδήποτε βασικές εξαρτήσεις:
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  Ενώ η αρχική εγκατάσταση βρίσκεται σε εξέλιξη, ελέγξτε την εγκατάστασή σας μέσω της διεπαφής ιστού στη διεύθυνση <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. Σε αυτό το παράδειγμα: <code>http://192.168.43.56:8123</code>. Μπορείτε να ανοίξετε μια διεπαφή ιστού από οποιονδήποτε υπολογιστή συνδεδεμένο στο τοπικό σας δίκτυο.

  Περιμένετε μέχρι να λάβετε το παράθυρο καλωσορίσματος με δημιουργία σύνδεσης / κωδικού πρόσβασης και στη συνέχεια σταματήστε το Home Assistant με <code>Ctrl+C</code>.
  </li>
</List>
</li>

<li>

Εγκατάσταση IPFS

<List>

  <li>

  Για την εγκατάσταση του IPFS μπορείτε να χρησιμοποιήσετε το σενάριό μας για να κατεβάσετε το IPFS και να δημιουργήσετε υπηρεσία systemd με αυτό. Πρώτα, βγείτε από το εικονικό περιβάλλον του Home Assistant:

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  Στη συνέχεια εκτελέστε:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Υπηρεσίες Systemd

<List>

<li>

Η υπηρεσία systemd είναι χρήσιμη για την αυτοματοποίηση της εκκίνησης του Home Assistant. Δημιουργήστε νέα υπηρεσία για το Home Assistant:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

Επικολλήστε τα παρακάτω

<LessonCodeWrapper language="bash">
[Unit]
Description=Home Assistant
After=network-online.target
[Service]
Type=simple
Restart=on-failure
User=%i
WorkingDirectory=/srv/%i/
ExecStart=/srv/homeassistant/bin/hass -c "/srv/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>

</li>

<li>

Ενεργοποιήστε και ξεκινήστε την υπηρεσία:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl enable home-assistant@homeassistant.service
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl start home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Ενσωμάτωση Robonomics

<List>

<li>

Συνδεθείτε με τον χρήστη <code>homeassistant</code> στο Raspberry Pi σας:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

Πηγαίνετε στο εικονικό περιβάλλον και εγκαταστήστε τα απαιτούμενα πακέτα Python:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

Στη συνέχεια πηγαίνετε στον κατάλογο <code>.homeassistant</code>, δημιουργήστε τον φάκελο <code class="nowb">custom_components</code> και κλωνοποιήστε εκεί το αποθετήριο με την ενσωμτωση:


<LessonCodeWrapper language="bash" noLines>
cd ~/.homeassistant
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
mkdir custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
cd custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
svn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics
</LessonCodeWrapper>

</li>


<li>

Μετά από αυτό βγείτε από τον χρήστη homeassistant και επανεκκινήστε την υπηρεσία:

<LessonCodeWrapper language="bash" noLines>
exit
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl restart home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

</List>



