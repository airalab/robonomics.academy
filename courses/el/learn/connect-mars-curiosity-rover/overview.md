---
title: Σύνδεση με το ρόβερ Curiosity του Άρη
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: Σύνδεση με το ρόβερ Curiosity του Άρη υπό τον έλεγχο του Robonomics parachain.
metaOptions: [Μάθετε]
defaultName: Connect Mars Curiosity Rover
---

**Ας δούμε πώς ο έλεγχος του Robonomics Parachain επιτρέπει στο ρόβερ Curiosity του Άρη να κινηθεί. Απαιτήσεις:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz (εγχειρίδιο εγκατάστασης [εδώ](http://wiki.ros.org/melodic/Εγκατάσταση))

</li>


<li>επιπλέον πακέτα:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS έως [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[Επέκταση Companion IPFS](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

Κόμβος Robonomics (δυαδικό αρχείο) (κατεβάστε την τελευταία έκδοση [εδώ](https://github.com/airalab/robonomics/releases). Αυτό το εγχειρίδιο δοκιμάστηκε με επιτυχία στην έκδοση v1.1)

</li>

</List>

<br/>

Εδώ είναι το βίντεο που δείχνει επιτυχή εκκίνηση:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. Δημιουργία προσομοίωσης

Λήψη πακέτου ρόβερ Curiosity:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

Πρέπει να προσαρμόσουμε τις αρχικές συνθήκες για να εμφανιστεί ο ρόβερ μας ομαλά:

<List>

<li>Μεταβείτε στο

`src/master/curiosity_mars_rover_description/worlds`και αλλάξτε τη γραμμή 14 του αρχείου` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>Μεταβείτε στο

`src/master/curiosity_mars_rover_description/launch` και αλλάξτε τη γραμμή 4 του αρχείου `mars_curiosity_world.launch` σε 
`<arg name="paused" default="false"/>`

Μην ξεχάσετε να προσθέσετε την εντολή πηγής `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> Επανεκκίνηση κονσόλας και εκκίνση της προσομοίωσης:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

Σημείωση: αν η εικόνα είναι σκοτεινή, π.χ. σκιασμένη, αλλάξτε το `Camera` σε `Orthorgraphic` στη γραμμή εργαλείων του Gazebo.
Η προσομοίωση μπορεί να κλείσει για λίγο.

------------

<br/>

### 2. Λήψη πακέτου ελεγκτή Robonomics
Για να κατεβάσετε ένα πακέτο ελέγχου για τον Rover πληκτρολογήστε στο τερματικό:

<LessonCodeWrapper language="bash" codeClass="long-code">
cd ~/robonomics_ws/src
git clone https://github.com/PaTara43/robonomics_sample_controller
cd robonomics_sample_controller
pip3 install -r requirements.txt
pip3 install rospkg
cd ..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3 # The controller supports python3
</LessonCodeWrapper>


------------

<br/>

### 3. Διαχείριση λογαριασμών στο DAPP
Δεδομένου ότι δοκιμάζουμε, ας δημιουργήσουμε ένα τοπικό δίκτυο robonomics με το δυαδικό αρχείο robonomics:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="Εκτέλεσηning node"/>


Μεταβείτε στο [Robonomics Parachain portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) και αλλάξτε σε τοπικό κόμβο 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


Μεταβείτε στους Λογαριασμούς και δημιουργήστε τους λογαριασμούς **CURIOSITY** και **EMPLOYER**.

**Σημαντικό**! Αντιγράψτε τη διεύθυνση κάθε λογαριασμού (για να αντιγράψετε τη διεύθυνση κάντε κλικ στο εικονίδιο του λογαριασμού) και το **μνημονικό κλειδί** του λογαριασμού Curiosity (που αποκτήθηκε κατά τη δημιουργία του λογαριασμού)
Μεταφέρετε κάποια χρήματα (μονάδες) σε αυτούς τους λογαριασμούς. Μπορείτε να διαβάσετε περισσότερα σχετικά με τους λογαριασμούς στο Robonomics [εδώ](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


Προσθέστε αυτές τις διευθύνσεις, το μνημονικό κλειδί και τη διεύθυνση του κόμβου (προεπιλογή σε `ws://127.0.0.1:9944` για τον κόμβο του προγραμματιστή) στο `config.config` στο `robonomics_ws/src/robonomics_sample_controller/src`. Χωρίς εισαγωγικά.

------------

<br/>

### 4. Έναρξη Robonomics

Πριν προχωρήσετε περαιτέρω, βεβαιωθείτε ότι έχετε εγκαταστήσει την [Επέκταση IPFS Companion](https://github.com/ipfs/ipfs-companion).

Σε ένα ξεχωριστό τερματικό εκκινήστε το IPFS:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #χρειάζεται να το κάνετε μόνο μια φορά ανά εγκατάσταση του IPFS
ipfs daemon
</LessonCodeWrapper>

Σε ένα άλλο ξεχωριστό τερματικό εκκινήστε την προσομοίωση Curiosity αν δεν είναι ζωντανή:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

Περιμένετε μέχρι να μείνει ακίνητη

Σε ένα άλλο τερματικό εκκινήστε τον ελεγκτή:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

Τώρα μπορείτε να στείλετε μια συναλλαγή που ενεργοποιεί τον Rover να αρχίσει να κινείται και να συλλέγει δεδομένα. Για να το κάνετε αυτό, μπορείτε να χρησιμοποιήσετε την ίδια [πύλη Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/).
Μεταβείτε σε `Developer->Extrinsics` και επιλέξτε τον λογαριασμό εργοδότη του Curiosity, το εξωτερικό `launch`, τον λογαριασμό του Curiosity ως στόχο και το `ναι` ως παράμετρο.
Υποβάλετε το εξωτερικό.

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

Ο ρομπότ πρέπει να αρχίσει να κινείται. Δεν θα δέχεται εντολές από άλλους λογαριασμούς ούτε εντολές με παράμετρο `όχι`. Ο ρόβερ θα κινηθεί γύρω και θα συλλέξει δεδομένα για περίπου ένα λεπτό.
Αργότερα, όταν η εργασία ολοκληρωθεί:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


Στην πύλη Robonomics πηγαίνετε σε `Developer -> Chain state` και αποκτήστε ένα δεδομένακαταγραφής `CURIOSITY` χρησιμοποιώντας το κουμπί “+” με επιλεγμένο `datalog -> RingBufferItem` ως ερώτημα: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


Τώρα το hash του τηλεμετρίας IPFS είναι αποθηκευμένο στο blockchain. Για να δείτε τα δεδομένα απλά αντιγράψτε το hash και βρείτε το σε ένα πύλη:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


Αυτή η τηλεμετρία διατηρείται σε αποκεντρωμένη αποθήκευση και το hash της αποθηκεύεται σε ένα blockchain!
