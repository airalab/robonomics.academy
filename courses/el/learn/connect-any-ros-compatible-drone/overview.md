---
title: Συνδέστε ένα drone συμβατό με το ROS
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: Συνδέστε οποιονδήποτε ρομπότ συμβατό με το ROS υπό τον έλεγχο του robonomics parachain.
metaOptions: [Μάθετε]
defaultName: Συνδέστε ένα drone συμβατό με το ROS
---


## Μέρος 1. Εκκίνηση με Συναλλαγή

**Σε αυτό το άρθρο θα δείξουμε ότι με τη βοήθεια των εργαλείων Robonomics μπορείτε να ελέγχετε οποιαδήποτε συσκευή συμβατή με το ROS. Θα βρούμε ένα τυχαίο πακέτο προσομοίωσης drone στον ιστό και θα το προσαρμόσουμε για να λειτουργεί με το Robonomics.**
**Απαιτήσεις:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (εγχειρίδιο εγκατάστασης [εδώ](http://wiki.ros.org/melodic/Εγκατάσταση))

</li>

<li class="flex">

Κόμβος Robonomics (δυαδικό αρχείο) (κατεβάστε την τελευταία έκδοση [εδώ](https://github.com/airalab/robonomics/releases))

</li>

</List>

<br/>

Ολόκληρη η διαδικασία κωδικοποίησης αυτού του τμήματος της επίδειξης παρουσιάζεται σε ένα βίντεο παρακάτω.

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. ��ρείτε μια προσομοίωση
Ας ψαχτούμε στον ιστό. Κάντε αναζήτηση στο Google για `ROS drone simulator`. Ο πρώτος σύνδεσμος θα σας δείξει πιθανότατα τη σελίδα `tum_simulator` στο [http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

Είναι αρκετά παλιό, οπότε καλύτερα να βρούμε ένα fork για το σύστημά μας. Κάντε αναζήτηση στο Google για `tum_simulator Ubuntu 18 Gazebo 9 fork`. Το πρώτο αποτέλεσμα είναι ένα GitHub [αποθετήριο](https://github.com/tahsinkose/sjtu-drone) με ένα κατάλληλο πακέτο. Κατεβάστε το

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

Μην ξεχάσετε να προσθέσετε την εντολή πηγής στο `~/.bashrc`:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

Τώρα μπορούμε να εκτελέσουμε την προσομοίωση για να δούμε τι χρειάζεται να κάνουμε για να πάρουμε το drone υπό τον έλεγχο του parachain.

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. Επιθεωρήστε τα θέματα του ROS
Όταν η προσομοίωση τρέχει, σε ένα νέο καρτέλα εκτελέστε την ακόλουθη εντολή για να δείτε τη λίστα των ��εμάτων που χρησιμοποιούνται από το drone:

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

Ας ρίξουμε μια ματιά στα `/cmd_vel`, `/drone/takeoff` και `/drone/land`:

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

Όπως μπορεί να διαπιστωθεί, θα πρέπει να υπάρχουν μηνύματα τύπων `Twist` και `Empty`, είναι μέρη των `std_msgs` και `geometry_msgs`, θα χρησιμοποιήσουμε αυτό στον ελεγκτή. Κλείστε την προσομοίωση για λίγο.

## 3. Λήψη πακέτου ελεγκτή
Παγκοσμίως, η κύρια διαφορά από τον τυπικό ελεγκτή ρομπότ ROS είναι ένα τμήμα κώδικα, το οποίο ελέγχει όλες τις συναλλαγές στο δίκτυο χρησιμοποιώντας το [Robonomics IO](https://wiki.robonomics.network/docs/rinterface/). Το πακέτο είναι διαθέσιμο στο GitHub. Κατεβάστε το και δημιουργήστε τον χώρο εργασίας:

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. Διαχείριση λογαριασμών στο DAPP
Καθώς κάνουμε δοκιμές, ας δημιουργήσουμε ένα τοπικό κόμβο δικτύου robonomics με το αρχείο robonomics binary:

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Σημαντικό!** Πριν από τις επόμενες εκκινήσεις είναι απαραίτητο να διαγράψετε τον κατάλογο `db` με

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Μετά από μια επιτυχημένη εκκίνηση δημιουργήστε λογαριασμούς ακολουθώντας το [αυτό](https://wiki.robonomics.network/docs/create-account-in-dapp/) εγχειρίδιο. **Μην ξεχάσετε να αποθηκεύσετε το seed και τη διεύθυνση κάθε λογαριασμού! Θα τα χρειαστείτε για τις συναλλαγές**. Προσθέστε αυτές τις διευθύνσεις, τα seeds και τη διαδρομή προς το αρχείο robonomics binary στο αρχείο `config.config` στο `robonomics_ws/src/robonomics_sample_controller/src`. Μεταφέρετε κάποια χρήματα (μονάδες) σε αυτούς τους λογαριασμούς:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. Εκκίνηση του drone υπό τον έλεγχο της parachain

Μέχρι στιγμής το **μόνο πράγμα που τρέχει** πρέπει να είναι ο τοπικός κόμβος robonomics. Σε ένα ξεχωριστό τερματικό εκκινήστε την προσομοίωση drone:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Εκτελέστε το σενάριο:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

Τώρα μπορείτε να στείλετε μια συναλλαγή που ενεργοποιεί το drone να αρχίσει να πετά. Για να το κάνετε αυτό, πρέπει να χρησιμοποιήσετε την υποεντολή `write` του Robonomics IO αρχείου robonomics binary:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Όπου `<DRONE_ADDRESS>` και `<EMPLOYER’S_KEY>` αντικαθίστανται με τις προηγουμένως αποθηκευμένες συμβ��λοσειρές αντίστοιχα.
Θα πρέπει να δείτε το αρχείο καταγραφής `"Taking Off"` και το drone θα πρέπει να αρχίσει να πετά:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

Έτσι οποιοδήποτε ρομπότ συμβατό με το ROS μπορεί να ελεγχθεί από τον έλεγχο της parachain του Robonomics.


##  Μέρος 2. Αποθήκευση Δεδομένων Στο Blockchain

**Σε αυτό το μέρος θα συνεχίσουμε να χρησιμοποιούμε τα εργαλεία του Robonomics για να κάνουμε ένα drone να ελέγχεται από μια parachain. Αυτή τη φορά θα προσθέσουμε την αποστολή δεδομένων στο IPFS και την αποθήκευση του hash στις επιλογές της αλυσίδας. Παρακάτω είναι η οδηγία και τα αποσπάσματα κώδικα. Απαιτήσεις:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (εγχειρίδιο εγκατάστασης [εδώ](http://wiki.ros.org/melodic/Εγκατάσταση))
</li>

<li class="flex">

IPFS 0.4.22 (κατεβάστε από [εδώ](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) και εγκαταστήστε)
</li>

<li class="flex">

Κόμβος Robonomics (δυαδικό αρχείο) (κατεβάστε την τελευταία έκδοση [εδώ](https://github.com/airalab/robonomics/releases))
</li>

<li>Εξαρτήσεις Python:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

Ολόκληρη η διαδικασία κωδικοποίησης αυτού του τμήματος της επίδειξης παρουσιάζεται σε ένα βίντεο παρακάτω.

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. Προσθήκη εξαρτήσεων
Εάν εκκινήσουμε μια προσομοίωση και κοιτάξουμε τη λίστα θεμάτων (δείτε μέρος 1), θα δούμε ότι υπάρχει ένα θέμα που περιέχει δεδομένα μπροστινής κάμερας και χρησιμοποιεί τον τύπο μηνύματος `sensor_msgs/Image`:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

Ας προσπαθήσουμε να πάρουμε μια φωτογραφία κάθε 1 δευτερόλεπτο και μετά την πτήση να δημοσιεύσουμε αυτές τις φωτογραφίες στο IPFS. Αν έχετε ολοκληρώσει το πρώτο μάθημα, δεν χρειάζεται να κατεβάσετε κάτι άλλο. Είναι το σενάριο `drone_sample_controller_pictures.py`.

## 2. Διαχείριση λογαριασμών στο DAPP
Όπως έγινε σε ένα προηγούμενο μάθημα, δημιουργήστε ένα τοπικό κόμβο δικτύου robonomics με το αρχείο robonomics binary:
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Σημαντικό!** Πριν από τις επόμενες εκκινήσεις είναι απαραίτητο να διαγράψετε τον κατάλογο `db` με

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

Μετά από μια επιτυχημένη εκκίνηση δημιουργήστε λογαριασμούς ακολουθώντας το [αυτό](https://wiki.robonomics.network/docs/create-account-in-dapp/) εγχειρίδιο. **Μην ξεχάσετε να αποθηκεύσετε το seed και τη διεύθυνση κάθε λογαριασμού! Θα τα χρειαστείτε για τις συναλλαγές**. Προσθέστε αυτές τις διευθύνσεις, τα seeds και τη διαδρομή προς το αρχείο robonomics binary στο αρχείο `config.config` στο `robonomics_ws/src/robonomics_sample_controller/src`. Μεταφέρετε κάποια χρήματα (μονάδες) σε αυτούς τους λογαριασμούς:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. Εκκίνηση
Μέχρι στιγμής το **μόνο πράγμα που τρέχει** πρέπει να είναι ο τοπικός κόμβος robonomics. Σε ένα ξεχωριστό τερματικό εκκινήστε την προσομοίωση drone:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Σε ένα άλλο εκκινήστε το ipfs daemon:
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Εκτελέστε το σενάριο:
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

Τώρα μπορείτε να στείλετε μια συναλλαγή που ενεργοποιεί το drone να αρχίσει να πετά και να παίρνει φωτογραφίες. Για να το κάνετε αυτό, πρέπει να χρησιμοποιήσετε την υποεντολή `write` του Robonomics IO αρχείου robonomics binary:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Όπου `<DRONE_ADDRESS>` και `<EMPLOYER’S_KEY>` αντικαθίστανται με τις προηγουμένως αποθηκευμένες συμβ��λοσειρές αντίστοιχα.
Θα πρέπει να δείτε το αρχείο καταγραφής `"Taking Off"` και το drone θα πρέπει να αρχίσει να πετά και να παίρνει φωτογραφίες:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

Αργότερα, όταν ο χρόνος εργασίας έχει περάσει, στην πύλη Robonomics πηγαίνετε στο `Προγραμματιστής` -> `Κατάσταση αλυσίδας` και προσθέστε ένα datalog `DRONE` χρησιμοποιώντας το κουμπί `“+”` με επιλεγμένο το `datalog` ως ερώτημα κατάστασης. Το hash του IPFS τηλεμετρίας έχει αποθηκευτεί στη blockchain. Για να δείτε τα δεδομένα απλά αντιγράψτε το hash και προσθέστε το στην τοπική διεύθυνση [gateway](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) `localhost:8080/ipfs/`:


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>