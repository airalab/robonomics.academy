---
title: Σύνδεση μη επανδρωμένου αεροσκάφους
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: Συνδεθείτε με αυτόματο αεροσκάφος
metaOptions: [Μάθετε]
defaultName: Connect unmanned aerial vehicle
---

**Το Drone αρχίζει να μετακινείται μετά τη συναλλαγή και αποθηκεύει το αρχείο με τις συντεταγμένες στο IPFS. Το σενάριο ελέγχου βασίζεται στο [σενάριο επίδειξης GAAS](https://github.com/generalized-intelligence/GAAS)**  

https://youtu.be/4CwtGAX1OwM

<br/>

## Απαιτήσεις

<List>

<li> εξαρτήσεις για τον έλεγχο:

<LessonCodeWrapper language="bash">
sudo apt install -y \
	python3-pip \
	ninja-build \
	exiftool \
	python-argparse \
	python-empy \
	python-toml \
	python-numpy \
	python-yaml \
	python-dev \
	python-pip \
	ninja-build \
	protobuf-compiler \
	libeigen3-dev \
	genromfs
</LessonCodeWrapper>

<LessonCodeWrapper language="bash">
pip3 install \
	pandas \
	jinja2 \
	pyserial \
	cerberus \
	pyulog \
	numpy \
	toml \
	pyquaternion
</LessonCodeWrapper>

</li>

<li class="flex">

ROS Melodic + Gazebo [οδηγός εγκατάστασης](http://wiki.ros.org/melodic/Εγκατάσταση)
</li>

<li>επιπλέον πακέτα:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>Έκδοση IPFS 0.4.22

<LessonCodeWrapper language="bash" codeClass="big-code">
wget https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-amd64.tar.gz
tar -xvzf go-ipfs_v0.4.22_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash" codeClass="big-code">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li class="flex">

Κόμβος Robonomics (δυαδικό αρχείο) (κατεβάστε την τελευταία έκδοση [εδώ](https://github.com/airalab/robonomics/releases))
</li>

</List>

<br/>

## Ρύθμιση Περιβάλλοντος

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-mavros ros-melodic-mavros-extras
wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh
sudo ./install_geographiclib_datasets.sh
cd ~/catkin_ws/src
git clone https://github.com/PX4/Firmware.git
cd Firmware
git checkout v1.9.0
bash ./Tools/setup/ubuntu.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/catkin_ws/src
git clone https://github.com/generalized-intelligence/GAAS.git
cp -r ~/catkin_ws/src/GAAS/simulator/models/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/models/
cp -r ~/catkin_ws/src/GAAS/simulator/worlds/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/worlds/
cp -r ~/catkin_ws/src/GAAS/simulator/posix-config/* ~/catkin_ws/src/Firmware/posix-configs/SITL/init/ekf2/
</LessonCodeWrapper>

Τροποποίηση του αρχείου `.bashrc`, προσθήκη των παρακάτω γραμμών στο τέλος:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## Εγκατάσταση Πακέτου Ελέγχου
Σε ένα νέο Τερματικό:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## Δίκτυο Robonomics

Για να δημιουργήσετε ένα τοπικό δίκτυο robonomics πηγαίνετε στον φάκελο με το δυαδικό αρχείο robonomic και τρέξτε:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

Προσθέστε τη διαδρομή του robonomic στο `config.py`

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

Πηγαίνετε στην [Πύλη Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) και μεταβείτε στο τοπικό κόμβο.

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

Πηγαίνετε στα **Λογαριασμοί** και δημιουργήστε λογαριασμούς **DRONE** και **EMPLOYER**. Αποθηκεύστε τα ονόματα και τα κλειδιά των λογαριασμών και τη διαδρομή προς το **robonomics** στο `~/catkin_ws/src/drone_sim/src/config.py`. Μεταφέρετε κάποια χρήματα στους λογαριασμούς.

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## Εκτέλεση Προσομοίωσης
Εκκίνηση του IPFS daemon

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

Σε ένα άλλο τερματικό εκκινήστε την προσομοίωση:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

Αναμονή μέχρι το "Αναμονή πληρωμής" 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

Για να στείλετε μια συναλλαγή τρέξτε σε ένα άλλο παράθυρο:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - όπου **<drone_address>** και **<employer_key>** πρέπει να αντικατασταθούν με τις συμβολοσειρές από το `config.py` αντίστοιχα.

Αφού τα δεδομένα μεταφρθούν στο IPFS, πηγαίνετε στην **Κατάσταση Αλυσίδας** στην [Πύλη Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/). Επιλέξτε **datalog** στο ερώτημα και προσθέστε το datalog DRONE χρησιμοποιώντας το κουμπί `+`.


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

Μπορείτε να βρείτε τηλεμετρία του drone τρέχοντας `https://gateway.ipfs.io/ipfs/<hash>` εισάγοντας το hash από πάνω.

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

Είναι σημαντικό να αφαιρέσετε τον κατάλογο `db` πριν από τις επόμενες εκτοξεύσεις  
` rm -rf ~/.local/share/robonomics/chains/dev/db`