---
title: "Έκτακτος Σταματήστε, Αρχικοποίηση, Έλεγχος Θέσης Σώματος"
description: Κατά τη διάρκεια αυτού του μαθήματος θα μάθετε πώς να εξουσιοδοτήσετε τον εαυτό σας ως χρήστη, να αποκτήσετε έλεγχο ενέργειας κινητήρα και να στείλετε βασικές εντολές στο Spot.
metaOptions: [Μάθετε, Ανάπτυξη Λογισμικού για το Boston Dynamics Spot]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
Κατά τη διάρκεια αυτού του μαθήματος θα μάθετε πώς να εξουσιοδοτήσετε τον εαυτό σας ως χρήστη, να αποκτήσετε έλεγχο ενέργειας κινητήρα και να στείλετε βασικές εντολές στο Spot.
</RoboAcademyText>

## Θεωρία

Όπως και όλοι οι σοβαροί ρομπότ, το Boston Dynamics Spot έχει ένα μηχανισμό προστασίας - [Υπηρεσία E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) (Έκτακτη Διακοπή) που πρέπει να είναι πάντα ενεργό κατά τη λειτουργία του Spot για να αποφευχθεί πιθα��ή φυσική ζημιά. Η ενεργοποίηση του E-Stop παγώνει αμέσως όλες τις αρθρώσεις (αυτό συμβαίνει χωρίς να απενεργοποιηθούν οι κινητήρες εάν το ρομπότ ήταν ενεργοποιημένο).

Καταρχάς, πρέπει να ενοικιάσουμε τον έλεγχο επί του ρομπότ. Υπάρχουν δύο τρόποι για να το κάνουμε - *απόκτηση* ή *πήρα*. Η *απόκτηση* σημαίνει να ζητήσετε τον έλεγχο με ευγενικό τρόπο, εάν κάποιος ελέγχει το ρομπότ τώρα, το αίτημά σας θα απορριφθεί. Αντίθετα, η *πήρα* σημαίνει να πάρετε βίαια τον έλεγχο, δεν έχει σημασία αν ο τρέχων χειριστής υπάρχει.

Έτσι, για να κάνετε κάποια κίνηση, πρέπει να ακολουθήσετε το σχήμα:

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="Καταστάσεις Εκτέλεσης Ρομπότ" imageClasses="mb"/>

Robot Execution States

Σε αυτό το μάθημα θα μάθετε πώς να ελέγχετε την περιστροφή του ρομπότ αλλάζοντας το *yaw*, *roll* και *pitch* του. Στην παρακάτω εικόνα φαίνεται το σύστημα συντεταγμένων του σώματος:

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="Συντεταγμένες Spot" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
Οι γωνίες σε έναν κώδικα αναπαρίστανται σε ακτίνες.
</RoboAcademyText>

Ως αποτέλεσμα του μαθήματος, θα σχεδιάσετε το πρώτο γράμμα του ονόματός σας στον αέρα με το πρόσωπο του Spot. Ας ξεκινήσουμε την εγκατάσταση!

## Εγκατάσταση Gitpod

Για αυτό το μάθημα, θα χρησιμοποιήσουμε το Gitpod, ένα cloud-based IDE που σας επιτρέπει να εξασκηθείτε χωρίς να εγκαταστήσετε κάποιο ειδικό λογισμικό στον υπολογιστή σας.

1. Εγγραφείτε στο [Gitpod](https://gitpod.io/).
2. Πηγαίνετε στο [περιβάλλον εκπαίδευσης Spot](https://gitpod.io/#github.com/merklebot/spot-edu-environment) μας και ανοίξτε το στον περιηγητή σας. Θα δείτε το παράθυρο με τις τυπικές λειτουργίες του IDE. 
3. Κάντε κλικ στο εικονίδιο Μενού, στη συνέχεια πηγαίνετε στο Terminal και δημιουργήστε ένα νέο τερματι��ό.

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. Αντιγράψτε και επικολλήστε αυτή την εντολή:

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

και πατήστε `Enter`.

1. Ανοίξτε ένα νέο τερματικό (τώρα μπορείτε να το κάνετε πατώντας το κουμπί `+`) και δοκιμάστε τη σύνδεση με την εντολή

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

Θα πρέπει να δείτε κάτι παρόμοιο με αυτό:

<LessonCodeWrapper language="bash" codeClass="big-code">
gitpod /workspace/spot-edu-environment (main) $ ping6 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09
PING 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09(202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09) 56 data bytes
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=1 ttl=64 time=846 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=2 ttl=64 time=172 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=3 ttl=64 time=172 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=4 ttl=64 time=197 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=5 ttl=64 time=219 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=6 ttl=64 time=242 ms

</LessonCodeWrapper>

1. Πριν από την προγραμματισμένη ώρα θα σας στείλουμε ιδιωτικό κλειδί για να καθιερώσετε τη σύνδεση SSH.
2. Αντιγράψτε το ιδιωτικό κλειδί σας στο αρχείο `id_ed25519`. Μπορείτε να βρείτε το αρχείο στον περιηγητή πλευρικής μπάρας του *stop-edu-enviroment*.
3. **Προσθέστε μια κενή γραμμή στο τέλος του** `id_ed25519` ***αρχείου, αυτό είναι απαραίτητο για τη σωστή λειτουργία του SSH.*** Πατήστε `Ctrl+S` για να αποθηκεύσετε τις αλλαγές.

Αν όλα είναι εντάξει, μπορείτε να ξεκινήσετε την ολοκλήρωση του μαθήματος επεξεργάζοντας το `lesson1.py`

Για να εκτελέσετε τον κώδικα, χρησιμοποιήστε την εντολή:


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
Θυμηθείτε να βεβαιωθείτε ότι κανείς άλλος δεν εκτελεί το πρόγραμμά του αυτή τη στιγμή.
</RoboAcademyText>


## Προγραμματίστε την πρακτική συνεδρία

Χρησιμοποιήστε την ιστοσελίδα προγραμματισμού Spot για να επιλέξετε το χρονικό διάστημα για την πρακτική συνεδρία σας:

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## Πρακτική

Τώρα θα φτιάξουμε ένα απλό σενάριο για το Spot για να σχεδιάσει στην οθόνη χρησιμοποιώντας τις κινήσεις του κεφαλιού του. 

<LessonCodeWrapper language="python" codeClass="big-code">
# Import Spot Control modules
import bosdyn.client
from bosdyn.client.robot_command import RobotCommandClient, blocking_stand
from bosdyn.client.robot_command import RobotCommandBuilder
from bosdyn.geometry import EulerZXY
import time
# ENTER YOUR AUTH DATA HERE
ROBOT_IP="192.168.50.3"
SPOT_USERNAME="student"
SPOT_PASSWORD=""
# Helpers to control camera drawing (you don't need to modify it)
import requests
VIDEOSERVER_URL="http://luke.merklebot:8000/"
VIDEOSERVER_TOKEN="1234"
def notify_start_line():
  requests.post(VIDEOSERVER_URL + "start_line", json={"token": VIDEOSERVER_TOKEN})
def notify_stop_line():
  requests.post(VIDEOSERVER_URL + "stop_line", json={"token": VIDEOSERVER_TOKEN})
def notify_clear_canvas():
    requests.post(VIDEOSERVER_URL + "clear_canvas", json={"token": VIDEOSERVER_TOKEN})
# Start with registering out SDK
sdk = bosdyn.client.create_standard_sdk('LessonOneClient')
# Create instance of robot and auth with credentials
robot = sdk.create_robot(ROBOT_IP)
robot.authenticate(SPOT_USERNAME, SPOT_PASSWORD)
# Create lease client and take exclusive control over Spot.  
lease_client = robot.ensure_client('lease')
lease = lease_client.take()
lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)
# Try to power on the robot
robot.power_on(timeout_sec=20)
if robot.is_powered_on():
    print("Powered On")
		# If everything went smooth, Spot face lights should turn green
else:
		# In case of some problems, e.g. somebody stole control over robot
    print("Failed")
    exit(0)
# Synchronize Spor inner time with ours - to avoid outdated commands
robot.time_sync.wait_for_sync()
# To execute robot movement, create command client through which orders are sent
command_client = robot.ensure_client(RobotCommandClient.default_service_name)
# Start movement with simple stand up
blocking_stand(command_client, timeout_sec=10)
# Rotate robot body:
#  1. Build command for body rotation. It’s not an easy task to control robot motion with commands on low level. 
#     Bosdyn Client allow as to use a shortcut - RobotCommandBuilder. It contains a number of predefined commands, 
#     you need just to choose one of your liking and insert parameters
footprint_R_body = EulerZXY(yaw=0.1, roll=0.1, pitch=0.1)
cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
#  2. Execute builded command
command_client.robot_command(cmd)
time.sleep(2)
# Return robot state back
command_client.robot_command(RobotCommandBuilder.synchro_stand_command(footprint_R_body=EulerZXY(yaw=0, roll=0, pitch=0)))
time.sleep(2)
# Change robot height
cmd = RobotCommandBuilder.synchro_stand_command(body_height=0.1)
command_client.robot_command(cmd)
# Now we are ready to draw letter. 
def draw_letter(command_client):
		# Choose points to draw (see the coords explanation bellow)
    points_xy_draw = (
        (125, 125),
        (375, 875),
        (500, 500),
        (250, 500),
        (500, 500),
        (625, 125),
    )
    for x, y in points_xy_draw:
        convert = lambda x: (x / 1000 - 0.5) * -1
        x, y = map(convert, (x, y))
        footprint_R_body = EulerZXY(
            yaw=x, 
            roll=0.0, 
            pitch=y,
        )
        cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
        command_client.robot_command(cmd)
        time.sleep(1)
notify_clear_canvas()
notify_start_line()
draw_letter(command_client)
notify_stop_line()
# Turn off the robot gracefully
robot.power_off(cut_immediately=False)

</LessonCodeWrapper>

<RoboAcademyText fWeight="300" fSize="90%">
Αν χρειαστεί να μετακινήσουμε το κεφάλι του Spot σε κάποιο σημείο στην κάμερα, θα πρέπει να κάνουμε μερικούς μεγάλους υπολογισμούς με πολλές μη γραμμικές παραμέτρους, το οποίο δεν είναι καθόλου απλή εργασία. Αλλά θα μπορούσαμε να πούμε ότι τοπικά, οι γωνίες yaw και pitch θα μπορούσαν να χρησιμοποιηθούν περίπου ως καρτεσιανές συντεταγμένες με κάποιο συντελεστή σε μια εικόνα.
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

Τώρα μπορείτε να δοκιμάσετε να εκτελέσετε το σενάριο και να δείτε το αποτέλεσμα. Μην ξεχάσετε να αποθηκεύσετε τον κώδικά σας με το Ctrl+S:

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### Το βίντεο του Spot μπορεί να βρεθεί εδώ:
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## Πρόκληση
Δημιουργήστε ένα σενάριο Python που ελέγχει τη θέση του σώματος του ρομπότ με μια ακολουθία κινήσεων:

1. Σηκωθείτε
2. Αναγράψτε τα αρχικά σας με το πρόσωπό του (ένα γράμμα, τουλάχιστον 3 σημεία)
3. Καθίστε

## Αποτελέσματα

Τώρα, ξέρετε πώς:

- να δουλέψετε με το Spot SDK
- να κατασκευάσετε μια βασική εντολή
- να περιστρέψετε το σώμα του ρομπότ
- να συνδεθείτε με το Spot

Και ακόμα να ζωγραφίσετε ένα γράμμα. Συγχαρητήρια!


<RoboAcademyText fWeight="500">

Συλλέξαμε ένα [rosbag](http://wiki.ros.org/rosbag) με δεδομένα αρθρωτών του Spot, ώστε να μπορείτε να τα οπτικοποιήσετε (για παράδειγμα με το [foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)). Το πιστοποιητικό θα σταλεί στο email σας σύντομα.

</RoboAcademyText> 


## [Προγραμματίστε το πρώτο μάθημά σας](https://meetings.hubspot.com/strelka)