---
title: Έργα βασισμένα σε ROS για έξυπνους χώρους
lastUpdate: Thu May 04 2023 12:53:19 GMT+0400 (Samara Standard Time)
description: Έργα βασισμένα σε ROS για έξυπνους χώρους
metaOptions: [Μάθετε]
defaultName: ROS-based projects for smart spaces
---

Καθ' όλη τη διάρκεια των 15 ετών ανάπτυξής του, το πλαίσιο λειτουργίας του ρομπότ Robot ενσωματώθηκε με δεκάδες [διάφορες ρομποτικές συσκευές](https://robots.ros.org/), και υπάρχουν ακόμα περισσότερα πακέτα με αλγόριθμους και εργαλεία που αναπτύχθηκαν από την κοινότητα. Αλήθεια, υπάρχουν τώρα τόσα πολλά έργα, και το χάος του στυλ περιγραφής των αποθετηρίων τους αυξήθηκε τόσο πολύ που είναι προς το παρόν αρκετά προβληματικό να βρείτε έργα που είναι αφιερωμένα σε ένα συγκεκριμένο θέμα. 

Εδώ θα βρείτε μια μικρή λίστα με έργα βασισμένα σε ROS που είναι αφιερωμένα σε ρομπότ και συσκευές IoT που προορίζονται για χρήση σε οικιακό ή γραφειακό περιβάλλον. Αυτό το θέμα είναι νας από τους πυλώνες της πλατφόρμας Robonomics. Ο στόχος μας είναι να προσπαθήσουμε να φέρουμε αυτά τα έργα στη σωστή πορεία με το Robonomics, τόσο από την τεχνική ολοκλήρωση όσο και από την οπτική γωνία μιας ενδιαφέρουσας εφαρμογής αυτών των συσκευών σε μια ρομποτική οικονομία. Μη διστάσετε να χρησιμοποιήσετε αυτήν τη λίστα στην αναζήτησή σας για ιδέες και έμπνευση.

Μπορείτε να ελέγξετε μερικά παραδείγματα έργων ROS που ενσωματώθηκαν με το Robonomics στην [ενότητα Μάθησης](/learn) μας.

<! - Προς το παρόν (** Απρίλιος 2021 **), το Robonomics είναι προσανατολισμένο προς τις εκδόσεις ROS ** Melodic ** και ** Noetic **. Οι παλαιότερες εκδόσεις μπορεί επίσης να λειτουργούν, αλλά μπορεί να χρειαστεί επιπλέον εργασία ολοκλήρωσης. Στο μέλλον, θα προστεθεί υποστήριξη για την έκδοση 2 του ROS. -->

Οι κύριοι πόροι για την αναζήτηση αποθετηρίων και πακέτων ROS μπορούν να βρεθούν [εδώ](https://index.ros.org/).

## Προσομοίωση

Πριν μετακινήσουμε την προσοχή μας αποκλειστικά στις συσκευές, αξίζει να θυμόμαστε ότι για μια μεγάλη ποσότητα έργων ROS, υπάρχει η δυνατότητα να τα δοκιμάσουμε σε προσομοίωση. Το πιο δημοφιλές εργαλείο για το 3D μοντελοποίηση διαφόρων ρομπότ υπό το ROS είναι ο προσομοιωτής [Gazebo](http://gazebosim.org/) και το παράγωγο έργο του, [Ignition](https://index.ros.org/r/ros_ign/). Και οι δύο προσομοιωτές επιτρέπουν τη μοντελοποίηση συσκευών σε διάφορα δύσκολα εσωτερικά και εξωτερικά περιβάλλοντα, την τροποποίηση του μοντέλου και του περιβάλλοντος ίδιου, τη δοκιμή αλγορίθμων ελέγχου και την αποσφαλμάτωση πριν μεταβούμε στην πραγματική συσκευή. Επίσης, αυτό είναι ένα εξαιρετικό εργαλείο για εκπαίδευση και καταστάσεις όπου μια πραγματική συσκευή απουσιάζει.

Συνολικά, αυτή είναι μία από τις καλύτερες επιλογές για να προσπαθήσετε να ενσωματώσετε το Robonomics με μια συσκευή ROS χωρίς καθόλου δαπάνες. Ένα πραγματικό σενάριο θα απαιτούσε απλώς μικρές τροποποιήσεις κώδικα. Για το Gazebo, το Robonomics έχει ένα λεπτομερές οδηγό που αποτελείται από δύο μέρη που καλύπτουν [ρυθμίσεις](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-1/) και [ολοκληρώσεις](https://wiki.robonomics.network/docs/en/connect-any-ros-compatible-robot-under-robonomics-parachain-control-2/) (χρησιμοποιώντας ένα drone ως παράδειγμα). Η κύρια πρόκληση είναι να βρείτε ένα έτοιμο μοντέλο (για παράδειγμα, [εδώ](https://github.com/osrf/gazebo_models)) για το Gazebo ή να προσπαθήσετε να δημιουργήσετε το δικό σας οντέλο χρησιμοποιώντας το [SDFormat](http://sdformat.org/) που αναπτύχθηκε για προσομοιωτές. 

## Μονοπλακέτες και άλλες πλακέτες

Τέτοια ταμπλό λειτουργούν ως βασικό στοιχείο για τη σύνδεση άλλων συσκευών στο ROS, κυρίως αισθητήρων και συσκευών εγγραφής (ήχου, φωτογραφίας και βίντεο, κάμερες, αισθητήρες θερμοκρασίας, πίεσης και συγκέντρωσης ουσιών), επειδή το concept ενός έξυπνου χώρου υπονοεί τη δημιουργία ενός [ψηφιακού διπλού](https://gateway.pinata.cloud/ipfs/QmNNdLG3vuTsJtZtNByWaDTKRYPcBZSZcsJ1FY6rTYCixQ/Robonomics_keypoint_March_2021.pdf) αντικειμένων υποδομής. Επίσης, τα ταμπλό μπορούν να λειτουργήσουν ως κύρια συσκευή υπολογιστικής επεξεργασίας και ελεγκτής για την κατασκευή ενός ρομποτικού κινητού μηχανήματος. Παρατίθεται παρακάτω μια λίστα ταμπλό που υποστηρίζουν το ROS:

| Name and link                                                                                         |                                    Description                                  | ROS version | Last update |
|:-----------------------------------------------------------------------------------------------------:|---------------------------------------------------------------------------------|:-----------:|:-----------:|
|  [Raspberry Pi](http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Melodic%20on%20the%20Raspberry%20Pi)| single board computer; RaspPi versions 2, 3 and 4 are available                 |   melodic   |     2020    |
|    [Arduino](http://wiki.ros.org/rosserial_arduino)                                                   | single board computer                                                           |    noetic   |     2021    |
|    [Phidgets](http://wiki.ros.org/phidgets)                                                           | sets of boards, various sensors and devices: Ph sensor, LED, RFID, motor control|    noetic   |     2020    |
|   [Sense HAT](https://wiki.ros.org/sensehat_ros)                                                      | shield for RaspPi with a set of sensors and LED                                 |    noetic   |     2020    |
|     [Navio2](https://navio2.emlid.com/)                                                               | autopliot shield for RaspPi 2,3,4                                               |    noetic   |     2020    |
|     [OpenCR](http://wiki.ros.org/opencr)                                                              | robot controller                                                                |    noetic   |     2021    |

<br/>

## Συσκευές έξυπνου σπιτιού και οικιακοί ρομπότ

Εδώ παρουσιάζονται συσκευές ROS οι οποίες η αρχική τους χρήση ήταν για έξυπνα σπίτια ή γραφεία. Η λίστα ποικίλει ευρέως, από ηλεκτρικές σκούπες και ρομποτική υποστήριξη έως συστήματα ελέγχου σπιτιού.

| Name and link                                             | Description                                                 |          ROS version          | Last update |
|:---------------------------------------------------------:|-------------------------------------------------------------|:-----------------------------:|:-----------:|
|  [Care-O-bot 4](http://wiki.ros.org/care-o-bot)           | household robot-assistant; a simulation is available        |            melodic            |     2021    |
|     [Kobuki](http://wiki.ros.org/kobuki)                  | mobile platform with different use cases (e.g. a waiter)    |            melodic            |     2020    |
|    [QTrobot](http://wiki.ros.org/Robots/qtrobot)          | humanoid social robot                                       | kinetic (melodic can be used) |     2020    |
|      [Nao](http://wiki.ros.org/nao)                       | humanoid robot; a simulation is available                   |            Melodic            |     2020    |
|     [TIAGo](http://wiki.ros.org/Robots/TIAGo)             | service robot with a manipulator; a simulation is available |            kinetic            |     2020    |
|     [Roomba](https://github.com/AutonomyLab/create_robot) | robot vacuum cleaner                                        |            melodic            |     2020    |
|    [OpenHAB](http://wiki.ros.org/iot_bridge)              | home automation system                                      |            kinetic            |     2017    |
|     [Sesame](https://index.ros.org/p/sesame_ros/)         | smart lock                                                  |            melodic            |     2021    |

<br/>

## Κινητές πλατφόρμες και μανιπουλάτορες

Καταρχάς, το ROS είναι γνωστό για την υποστήριξη κινητής ρομποτικής, από drones έως βιομηχανικούς μανιπουλάτορες, για τους οποίους δημιουργήθηκαν πολλά πακέτα που υλοποιούν ταυτόχρονη εντοπισμό και χαρτογράφηση ([SLAM](http://wiki.ros.org/rtabmap_ros)), λύνουν το άμεσο και αντίστροφο πρόβλημα κινηματικής, [σχεδιασμό πορείας](https://moveit.ros.org/), κλπ. Η κινητή ρομποτική εισβάλλει στην καθημερινή ζωή, γι' αυτό είναι σίγουρα ενδιαφέρον να δοκιμάσετε τα υπάρχοντα ROS-ρομπότ στη χρήση τους εντός ενός έξυπνου χώρου. Η γενική λίστα βασισμένων σε ROS κινητών πλατφορμών είναι αρκετά εγάλη, γι' αυτό εδώ έχουμε επιλέξει αυτές που είναι δυνητικά βολικές για λειτουργία σε χώρο σπιτιού ή γραφείου. 

| Name and link                                             | Description                                | ROS version | Last update |
|:---------------------------------------------------------:|--------------------------------------------|:-----------:|:-----------:|
|   [turtlebot](http://wiki.ros.org/turtlebot3)             | mobile platform tailored for ROS           |    noetic   |     2020    |
|    [GoPiGo3](http://wiki.ros.org/Robots/gopigo3)          | mobile robot based on RaspPi               |   melodic   |     2020    |
|    [LoCoBot](http://wiki.ros.org/locobot)                 | mobile manipulator                         |   kinetic   |     2020    |
|   [ROSbot 2.0](http://wiki.ros.org/Robots/ROSbot-2.0)     | mobile platform; a simulation is available |    noetic   |     2021    |
|     [VOLTA](http://wiki.ros.org/Robots/Volta)             | mobile platform; a simulation is available |   melodic   |     2021    |
|    [evarobot](http://wiki.ros.org/Robots/evarobot)        | mobile platform; a simulation is available |    noetic   |     2020    |
|    [Freight](http://wiki.ros.org/Robots/freight)          | mobile platform; a simulation is available |   melodic   |     2021    |
|      [PR2](http://wiki.ros.org/Robots/PR2)                | mobile platform; a simulation is available |   melodic   |     2021    |