---
title: Σύνδεση με τον χειριστή Kuka
description: Σύνδεση με τον Χειριστή
metaOptions: [Μάθετε]
defaultName: Σύνδεση Kuka manipulator
---

Το βίντεο με ένα παράδειγμα εργασίας μπορεί να βρεθεί εδώ:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## Απαιτήσεις

<List>

<li class="flex">

ROS μελωδικό, Gazebo (οδηγίες εγκατάστασης [εδώ](http://wiki.ros.org/melodic/Εγκατάσταση/Ubuntu))
</li>

<li>Μερικά επιπλέον πακέτα

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(κατεβάστε από [εδώ](https://www.npackd.org/p/ipfs/0.4.22) και εγκαταστήστε)

<LessonCodeWrapper language="bash" codeClass="big-code">
tar -xvzf go-ipfs_v0.4.22_linux-386.tar.gz
cd go-ipfs/
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>pip3

<LessonCodeWrapper language="bash">
sudo apt-get install python3-pip
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li>substrate-interface

<LessonCodeWrapper language="bash">
pip3 install substrate-interface
</LessonCodeWrapper>

</li>

<li class="flex">

Κόμβος Robonomics (δυαδικό αρχείο) (κατεβάστε την τελευταία έκδοση [εδώ](https://github.com/airalab/robonomics/releases))

</li>

<li>Επέκταση περιήγησης IPFS (δεν είναι απαραίτητη)</li>

</List>

<br/>

***

<br/>

## Εγκατάσταση
Εγκατάσταση του χειριστή Kuka και των πακέτων ελέγχου

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## Εκτέλεση μοντέλου gazebo

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

Σε ένα νέο παράθυρο

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## Εκτέλεση robonomics
Πηγαίνετε στον φάκελο με το αρχείο robonomics και δημιουργήστε ένα τοπικό δίκτυο robonomics:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

Πηγαίνετε στο [Robonomics Parachain portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) και αλλάξτε σε τοπικό κόμβο

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

Στη συνέχεια πηγαίνετε στους Λογαριασμούς και δημιουργήστε έναν λογαριασμό `KUKA`. Αποθηκεύστε το μνημονικό κλειδί του λογαριασμού, θα το χρειαστείτε αργότερα. 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

Στείλτε μερικές μονάδες στον νέο λογαριασμό από έναν από τους προεπιλεγμένους λογαριασμούς.

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## Εκτέλεση ipfs
Εκτέλεση ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## Εκτέλεση πακέτου ελέγχου
Στον κατάλογο ρύθμισης στο πακέτο ελέγχου kuka_control πρέπει να δημιουργήσετε αρχείο ρύθμισης με αυτές τις γραμμές, όπου `<το_mnemonic_σας>` είναι το αποθηκευμένο μνημονικό seed:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


Τώρα μπορείτε να εκτελέσετε το σενάριο ελέγχου:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## Αποστολή συναλλαγής
Στο [Robonomics Parachain portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) πηγαίνετε σε `Προγραμματιστής/Εξωτερικές`, αλλάξτε το `εξωτερικό` σε `εκκίνηση`. Επιλέξτε τον λογαριασμό `KUKA` στο `ρομπότ` και αλλάξτε το `παράμετρο` σε `Ναι`. Πατήστε `Υποβολή Συναλλαγής`

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

Στο παράθυρο με το πακέτο ελέγχου kuka_control θα δείτε:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

Στη συνέχεια πηγαίνετε στο `Προγραμματιστής/Κατάσταση Αλυσίδας` στο portal του Robonomics, επιλέξτε `datalog` και `datalogItem((AccountId,u64)): RingBufferItem` στο ερώτημα και προσθέστε το datalog `KUKA` με το κουμπί '+':

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

Τώρα μπορείτε να βρείτε τηλεμετρία ρομπότ στο IPFS μέσω αυτού του συνδέσμου με το hash σας `https://gateway.ipfs.io/ipfs/<hash>`.

## Αντιμετώπιση προβλημάτων

Αν το `catkin_make` δεν λειτουργεί με το μήνυμα ότι δεν μπορεί να βρει το MoveArm.h, δοκιμάστε να αφαιρέσετε τις τελευταίες τέσσερις γραμμές από το CMakeLists.txt στο πακέτο kuka_manipulator_gazebo:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

Κάντε `catkin_make` χωρίς αυτές τις γραμμές, στη συνέχεια επαναφέρετε τις και κάντε ξανά `catkin_make`.