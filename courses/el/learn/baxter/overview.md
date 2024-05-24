---
title: Έλεγχος ρομπότ Baxter
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: Έλεγχος ρομπότ Baxter
metaOptions: [Μάθηση]
defaultName: Control Baxter robot
---
Παράδειγμα πώς λειτουργεί:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## Απαιτήσεις:

<List>

<li class="flex">

ROS Melodic + Gazebo (εγχειρίδιο εγκατάστασης [εδώ][db2])  

</li>

<li>επιπλέον πακέτα:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effήt-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS μέχρι 0.6.0 (κατεβάστε από [εδώ][db3] και εγκαταστήστε)

</li>

<li> πακέτα python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Λήψη τελευταίας έκδοσης του κόμβου Robonomics [εδώ][db4] (τελευταία δοκιμασμένη έκδοση v1.1)

</li>

<li>Επέκταση περιήγησης IPFS (δεν είναι απαραίτητη)</li>

</List>

<br/>

## 0. εγκαταστήστε την επέκταση CV Bridge για python3

<List>

<li> Δημιουργία χώρου εργασίας catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Οδηγίες catkin για την ρύθμιση μεταβλητών cmake. Χρησιμοποιήστε την τρέχουσα έκδοση του `python`. Για εμένα, είναι `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Κλωνοποίηση πηγαίου κώδικα cv_bridge:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Εύρεση έκδοσης του cv_bridge στο αποθετήριό σας:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Ελέγξτε τη σωστή έκδοση στο αποθετήριο git. Στην περίπτωσή μας είναι 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Κατασκευή:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Επέκταση περιβάλλοντος με νέο πακέτο:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Δοκιμή:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

## 1. Λήψη πακέτων προσομοίωσης και ελεγκτή
Λήψη πακέτων:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
git checkout old_version
pip3 install -r requirements.txt
cd ../..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

Μην ξεχάσετε να προσθέσετε την εντολή πηγής:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Έναρξη προσομοίωσης
Ας ξεκινήσουμε τον κόσμο gazebo και να βάλουμε τον baxter μας μέσα:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

Ανοίξτε ένα ακόμη παράθυρο στο τερματικό:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

Μπορείτε να βάλετε μερικά μοντέλα μπροστά από τον baxter μας. Θα είναι πιο ενδιαφέρον.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Διαχείριση λογαριασμών στο DAPP

Δεδομένου ότι κάνουμε δοκιμές, ας δημιουργήσουμε ένα τοπικό δίκτυο robonomics με το δυαδικό αρχείο robonomics. Πηγαίνετε στον φάκελο με το αρχείο robonomics και εκτελέστε:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Πηγαίνετε στο [Πύλη Robonomics Parachain][db5] και μεταβείτ σε τοπικό κόμβο

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Πηγαίνετε στους λογαριασμούς και δημιουργήστε λογαριασμούς __Baxter__ και __Εργοδότη__ (ο λογαριασμός __Ρομπότ__ δεν είναι απαραίτητος)

__Σημαντικό!__ Αντιγράψτε το **Μνημονικό** και τη **διεύθυνση** κάθε λογαριασμού (για να αντιγράψετε τη διεύθυνση κάντε κλικ στο εικονίδιο του λογαριασμού). Το **Μνημονικό** είναι ο ιδιωτικός κλειδί για τον λογαριασμό.
Μεταφέρετε κάποια χρήματα (μονάδες) σε αυτούς τους λογαριασμούς:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Προσθέστε το **Μνημονικό** και τη **διεύθυνση** του Baxter στο `config.yaml` στο `robot_ws/src/Baxter_simulation_controller/config/`

## 4.Έναρξη προσομοίωσης

Σε νέο παράθυρο εκτελέστε:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Ανοίξτε ξεχωριστό τερματικό και ξεκινήστε το πακέτο *ελεγκτή*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Τώρα μπορείτε να στείλετε μια συναλλαγή που ενεργοποιεί τον Baxter να αρχίσει τη μετακίνηση και τη συλλογή δεδομένων. Για να το κάνετε αυτό, μπορείτε να χρησιμοποιήσετε την ίδια [Πύλη Robonomics Parachain][db5]. Πηγαίνετε στο **Προγραμματιστής->Εξωτερικές** και επιλέξτε το λογαριασμό εργοδότη του Baxter, την εξωτερική `εκκίνηση`, το λογαριασμό του Baxter ως στόχο και το `ναι` ως παράμετρο. Υποβάλετε την εξωτερική.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

Ο ρομπότ πρέπει να αρχίσει να κινείται. Δεν θα δέχεται εντολές από άλλους λογαριασμούς ούτ εντολές με παράμετρο `όχι`.
Θα πρέπει να δείτε τα ακόλουθα:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

όταν η εργασία τελειώσει πηγαίνετε στην Πύλη Robonomics στο `Προγραμματιστής > Κατάσταση αλυσίδας`. Επιλέξτε `datalog.datalogItem(AccountId,u64)` στο **ερώτημα κατάστασης**. Αν θέλετε να εμφανίσετε όλα τα datalog's, τότε απενεργοποιήστε την επιλογή `συμπερίληψη` προσθέστε την προβολή του μηνύματος datalog του Baxter χρησιμοποιώντας το κουμπί "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Τώρα το hash του IPFS της τηλεμετρίας και των φωτογραφιών αποθηκεύεται στη blockchain. Για να δείτε τα δεδομένα απλά αντιγράψτε το hash και εισάγετε το στη γραμμή αναζήτησης με URL: gateway.ipfs.io/ipfs/<br>βάλτε το hash σας εδώ >

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

Κάντε κλικ στο __Προβολή στην Πύλη__ και αυτό είναι όλο!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Προσομοίωση Baxter v2.0

Παράδειγμα πώς λειτουργεί:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## Απαιτήσεις:

<List>

<li class="flex">


ROS Melodic + Gazebo (εγχειρίδιο εγκατάστασης [εδώ][db2])  

</li>

<li>επιπλέον πακέτα:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS μέχρι 0.6.0 (κατεβάστε από [εδώ][db3] και εγκαταστήστε)

</li>

<li> πακέτα python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Κόμβος Robonomics (δυαδικό αρχείο) (κατεβάστε την τελευταία [έκδοση][db4] εδώ)

</li>

<li class="flex">

Δημιουργία λογαριασμών __Baxter__ και __Εργοδότη__ στο **Robonomics Portal** (μπορείτε να βρείτε οδηγίες ["Δημιουργία Λογαριασμού στο Robonomics Portal"][db8] εδώ).
</li>

<li>Επέκταση περιήγησης IPFS (δεν είναι απαραίτητη)</li>

</List>

<br/>

## 0. εγκατάσταση επέκτασης CV Bridge για python3

<List>

<li> Δημιουργία χώρου εργασίας catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Οδηγίες catkin για την ρύθμιση μεταβλητών cmake. Χρησιμοποιήστε την τρέχουσα έκδοση του `python`. Για εμένα, είναι `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Κλωνοποίηση πηγαίου κώδικα cv_bridge:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Εύρεση έκδοσης του cv_bridge στο αποθετήριό σας:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Ελέγξτε τη σωστή έκδοση στο αποθετήριο git. Στην περίπτωσή μας είναι 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Κατασκευή:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Επέκταση περιβάλλοντος με νέο πακέτο:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Δοκιμή:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

<br/>

## 1. Λήψη πακέτων προσομοίωσης και ελεγκτή
Θα πρέπει να δημιουργήσουμε 2 χώρους εργασίας - έναν για τα κύρια πακέτα του Baxter και έναν για το κύριο πρόγραμμα ελέγχου.
Πρώτος χώρος εργασίας. Είναι το κύριο πρόγραμμα ελέγχου. Θα τρέξει με python3.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

Δεύτερος χώρος εργασίας. Εκεί θα είναι όλα τα πακέτα του Baxter. Η προσομοίωση είναι πολύ παλιά, οπότε μπορεί να τρέξει μόνο με python2.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

Αυτά τα πακέτα δημιουργήθηκαν για το ROS indigo. Θα πρέπει να αλλάξουμε μερικά αρχεία για να τα τρέξουμε στο ROS melodic.
Θα χρησιμοποιήσουμε **αρχεία patch**.

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

Και ας χτίσουμε όλα τα πακέτα μας:  
Πρώτα χτίστε τα πακέτα του Baxter

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

Στη συνέχεια επιστρέψτε στον πρώτο χώρο εργασίας και χτίστε τον επίσης:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

Μην ξεχάσετε να προσθέσετε την εντολή πηγής:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Έναρξη προσομοίωσης
### Ας ξεκινήσουμε την προσομοίωσή μας:
Αρχικά πηγαίνετε στο `robot_ws` και αντιγράψτε και επεξεργαστείτε το baxter.sh

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

Βρείτε την τοπική σας διεύθυνση ip με την εντολή:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

Επεξεργαστείτε τις παρακάτω τιμές στο `baxter.sh` :

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- your_ip - βάλτε την τοπική σας διεύθυνση ip. Δείτε την εντολή `ip a`
- ros_version - για παράδειγμα "melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

Εκτελέστε το σενάριο εκκίνησης baxter με την προσδιορισμένη προσομοίωση:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

Μπορείτε να βάλετε μερικά μοντέλα μπροστά από τον baxter μας. Θα είναι πιο ενδιαφέρον.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Διαχείριση λογαριασμών στο DAPP

Δεδομένου ότι κάνουμε δοκιμές, ας δημιουργήσουμε ένα τοπικό δίκτυο robonomics με το δυαδικό αρχείο robonomics. Πηγαίνετε στον φάκελο με το αρχείο robonomics και εκτελέστε:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Πηγαίνετε στο [Πύλη Robonomics Parachain][db5] και μεταβείτ σε τοπικό κόμβο

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Πηγαίνετε στους Λογαριασμούς και δημιουργήστε τους λογαριασμούς __Baxter__ και __Εργοδότη__.

Μπορείτε να βρείτε το εγχειρίδιο "Δημιουργία Λογαριασμού στο Robonomics Portal" [εδώ][db8]

__Σημαντικό!__ Αντιγράψτε το **Μνημονικό** και τη **διεύθυνση** κάθε λογαριασμού (για να αντιγράψετε τη διεύθυνση κάντε κλικ στο εικονίδιο του λογαριασμού). Το **Μνημονικό** είναι ο ιδιωτικός κλειδί για τον λογαριασμό.

Μεταφέρετε κάποια χρήματα (μονάδες) σε αυτούς τους λογαριασμούς:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Προσθέστε το **Μνημονικό** και τη **διεύθυνση** του Baxter στο `config.yaml` στο `robonomics_ws/src/Baxter_simulation_controller/config/`

## 4.Έναρξη προσομοίωσης

Σε νέο παράθυρο εκτελέστε:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Ανοίξτε ξεχωριστό τερματικό και ξεκινήστε το πακέτο *ελεγκτή*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Τώρα μπορείτε να στείλετε μια συναλλαγή που ενεργοποιεί τον Baxter να αρχίσει να κινείται και να συλλέγει δεδομένα. Για να το κάνετε αυτό, μπορείτε να χρησιμοποιήσετε το ίδιο portal [Robonomics Parachain portal][db5]. Πηγαίνετε στο **Προγραμματιστής->Εξωτερικές** και επιλέξτε τον λογαριασμό εργοδότη του Baxter, την εξωτερική `launch`, τον λογαριασμό του Baxter ως στόχο και `ναι` ως παράμετρο. Υποβάλετε την εξωτερική.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

Ο ρομπότ πρέπει να αρχίσει να κινείται. Δεν θα δέχεται εντολές από άλλους λογαριασμούς ούτ εντολές με παράμετρο `όχι`.
Θα πρέπει να δείτε τα ακόλουθα:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

Όταν ο χρόνος εργασίας τελειώσει, πηγαίνετε στο Robonomics Portal στο `Προγραμματιστής > Κατάσταση Αλυσίδας`. Επιλέξτε `datalog.datalogItem(AccountId,u64)` στο **ερώτημα κατάστασης**. Αν θέλετε να εμφανίσετε όλα τα datalog's, τότε απενεργοποιήστε την επιλογή `συμπερίληψη` και προσθέστε το μήνυμα datalog του Baxter χρησιμοποιώντας το κουμπί "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Τώρα ο IPFS hash της τηλεμετρίας και των φωτογραφιών αποθηκεύεται στη blockchain. Για να δείτε τα δεδομένα απλά αντιγράψτε το hash και εισάγετέ το στη γραμμή αναζήτησης με το URL:  
#### gateway.ipfs.io/ipfs/<βάλτε το hash σας εδώ>

Αυτά είναι όλα!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/Εγκατάσταση>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>