---
title: "Μάθημα #2, Υλικό αισθητήρα"
description: 'ΥΛΙΚΟ ΑΙΣΘΗΤΗΡΑ'
lessonNumber: 2
metaOptions: [Μάθετε, Σύνδεση Αισθητήρων & Αποκεντρωμένο Δίκτυο Αισθητήρων]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Εάν επιθυμείτε να συμμετάσχετε στην παρακολούθηση της ατμοσφαιρικής ρύπανσης με το Διακεντρωμένο Δίκτυο Αισθητήρων, πρέπει να αποκτήσετε ένα πίνακα ατμοσφαιρικής ρύπανσης με αισθητήρες. Υπάρχουν δύο τρόποι για να το κάνετε:

<List>

<li>παραγγείλτε όλα τα απαραίτητα εξαρτήματα και συναρμολογήστε τον προσαρμοσμένο πίνακα μόνοι σας.</li>
<li>παραγγείλτε έναν έτοιμο πίνακα από την ομάδα Robonomics.</li>

</List>

## Χειροκίνητη Συναρμολόγηση Πίνακα

Για να κατασκευάσετε τον δικό σας πίνακα, πρέπει να βρείτε τα ακόλουθα εξαρτήματα:

- Αισθητήρας Laser PM2.5 και PM10 [SDS011](https://www.amazon.com/SDS011-Quality-Detection-Conditioning-Monitor/dp/B07FSDMRR5)

- Σειρικό ασύρματο μοντούλο [NodeMcu V3 CH340](https://www.amazon.com/ACEIRMC-Wireless-Development-Compatible-MicroPython/dp/B092ZCG2X2) βασισμένο στο ESP8266

- Μετατροπέας DC-DC mini560 5Α [(παράδειγμα)](https://www.amazon.com/Alinan-Efficiency-Converter-Regulator-Stabilized/dp/B09W8P1QNM)

- Σύνδεσμος DC [(παράδειγμα)](https://www.amazon.com/CenryKay-DC-099-Threaded-Σύνδεσηor-Adapter/dp/B08CMMQMP6?th=1)

- Τροφοδοτικό 12V/2Α [(παράδειγμα)](https://www.amazon.com/TMEZON-Power-Adapter-Supply-2-1mm/dp/B00Q2E5IXW)

- κουτί τοποθέτησης [(παράδειγμα)](https://www.amazon.com/LeMotech-Dustproof-Waterproof-Electrical-300mmx250mmx120mm/dp/B075DHT7X2/ref=sxin_18_ac_d_mf_brs?ac_md=7-4-TGVNb3RlY2g%3D-ac_d_mf_brs_brs&content-id=amzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d%3Aamzn1.sym.1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&crid=2ZDX87O7MINYG&cv_ct_cx=junction+box+plastic&keywords=junction+box+plastic&pd_rd_i=B075DHT7X2&pd_rd_r=2bbd50d4-9ef9-4fa1-a1a2-e55c482bce49&pd_rd_w=EcHLy&pd_rd_wg=z42mC&pf_rd_p=1ad31f34-ba12-4dca-be4b-f62f7f5bb10d&pf_rd_r=WDAX58YZKG6YKZ70X5QE&qid=1676642125&sprefix=Junction+Box%2Caps%2C451&sr=1-4-8b2f235a-dddf-4202-bbb9-592393927392)

Επίσης, μπορείτε να εγκαταστήσετε επιπλέον αισθητήρες:

<List  type="numbers">

<li>

Με διεπαφή I2C:

<List>

<li>

[BMP180](https://cdn-shop.adafruit.com/datasheets/BST-BMP180-DS000-09.pdf) — θερμοκρασία και υγρασία

</li>

<li>

[BME/P280](https://www.mouser.com/datasheet/2/783/BST-BME280-DS002-1509607.pdf) — θερμοκρασία, υγρασία, ατμοσφαιρική πίεση

</li>

<li>

[HTU21D](https://eu.mouser.com/ProductDetail/Measurement-Specialties/HTU21D?qs=tx5doIiTu8oixw1WN5Uy8A%3D%3D) — θερμοκρασία και υγρασία

</li>

<li>

[CCS811 VOC SENSOR](https://www.sciosense.com/wp-content/uploads/documents/Application-Note-Baseline-Save-and-Restore-on-CCS811.pdf) — ενώσεις αρωματικών υδρογονανθράκων, ισοδύναμο CO2

</li>

</List>

</li>

<li>

Με διεπαφή 1-Wire:

<List>

<li>

[DHT22(AM2302)](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf) — θερμοκρασία και υγρασία

</li>

<li>

[DS18B20](https://cdn.sparkfun.com/datasheets/Sensors/Temp/DS18B20.pdf) — θερμοκρασία

</li>

</List>

</li>

</List>

Μπορείτε να βρείτε τη διαδικασία συναρμολόγησης στο παρακάτω βίντεο. Επίσης δείχνει τη διαδικασία φλασαρίσματος, αλλά θα μιλήσουμε γι' αυτό αργότερα.

<RoboAcademyYoutube link="https://www.youtube.com/watch?v=OdTd1sacCso" />

## Ζητήστε το Πίνακα Robonomics

Εναλλακτικά, μπορείτε να ζητήσετε τον Πίνακα Robonomics. Για να το κάνετε αυτό, στείλτε email σε μία από τις παρακάτω διευθύνσεις:

- vm@multi-agent.io
- ping@airalab.org

Ο πίνακας Robonomics βασίζεται στο ESP8266 και σχεδιάστηκε για τροφοδοσία 6-24V, χρησιμοποιώντας το μετατροπέα DC-DC DC MINI560. Αυτός ο πίνακας σάς επιτρέπει να συνδέσετε τον αισθητήρα σωματιδίων SDS011 και αρκετούς επιπλέον αισθητήρες (ελέγξτε τη λίστα παραπάνω). Υπάρχει επίσης ένα μικρότερο μοντέλο MINI με μια συντομευμένη λίστα συνδέσιμων συσκευών.

<LessonImages figure figureCaption="Full model of Robonomics board" src="sensors-connectivity-course/lesson-2-1.png" alt="Full model of Robonomics board"/>

<LessonImages  figure figureCaption="Mini model of Robonomics board" src="sensors-connectivity-course/lesson-2-2.png" alt="Mini model of Robonomics board"/>

Τα σχέδια για και τα δύο μοντέλα μπορούν να βρεθούν εδώ: για το [πλήρες μοντέλο](https://oshwlab.com/ludovich88/aira_sensor_rev0-1) και για το [μικρό μοντέλο](https://oshwlab.com/ludovich88/aira_sensor_d1_mini).

Ας ρίξουμε μια πιο προσεκτική ματιά στον πίνακα. Διαθέτει αρκετές θύρες σύνδεσης (είναι επισημασμένες με μπλε και πράσινο).

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-2-3.png" alt="Full model of Robonomics board"/>

Μπλε τερματικός συγκρότημα, από αριστερά προς τα δεξιά (όλοι οι τερματικοί είναι υπογεγραμμένοι):

<List>
  <li class="flex">

  <code>12V</code> — τερματικός για σύνδεση της τροφοδοσίας στον πίνακα· η συνιστώμενη τάση είναι 12 βολτ.

  </li>

  <li class="flex">

  <code>GND</code> γείωση (σημείο μηδενικής δυναμικής) — χρησιμεύει τόσο για τη σύνδεση της μηδενικής δυναμικής της τροφοδοσίας, όσο και για τη σύνδεση των αισθητήρων.

  </li>

  <li class="flex">

  <code>POWER SENSOR</code> — ρυθμιζόμενη έξοδος ισχύος στην οποία συνδέονται οι αισθητήρες· η έξοδος μπορεί να ρυθμιστεί σε 3,3 ή 5 βολτ.

  </li>

  <li class="flex">

  <code>SDA</code> — σειριακή γραμμή δεδομένων, χρησιμοποιείται για τη σύνδεση των αισθητήρων μέσω της διεπαφής I2C.

  </li>

  <li class="flex">

  <code>SCL/1WIRE</code> — ρυθμιζόμενος τερματικός στον οποίο συνδέεται η σειριακή γραμμή ρολογιού· χρησιμοποιείται για τη σύνδεση των αισθητήρων μέσω της διεπαφής I2C ή 1-Wire.

  </li>
</List>

Η ρύθμιση της έξοδυ ισχύος για τον αισθητήρα και η επιλογή της διεπαφής γίνεται με τη ρύθμιση των jumpers, που είναι χρωματισμένοι με κίτρινο στην εικόνα (`5V`, `3V`, `I2C`, `1WIRE`). Τα jumpers τοποθετούνται οριζόντια, οι θέσεις για την τοποθέτηση των jumpers είναι υπογεγραμμένες.


<RoboAcademyNote type="warning" title="WARNING">
Μπορείτε να επιλέξετε την τάση για την τροφοδοσία ρυθμίζοντας μόνο ένα jumper σε 3,3 βολτ ή 5 βολτ. Η τοποθέτηση δύο jumpers σε 3,3 και 5 βολτ θα προκαλέσει ζημιά στη συσκευή. Η ίδια αρχή ισχύει όταν επιλέγετε μια διεπαφή για τους αισθητήρες, τοποθετήστε μόνο ένα jumper στη θέση του I2C ή 1-Wire. Η τοποθέτηση δύο jumpers μπορεί να προκαλέσει ζημιά στη συσκευή.
</RoboAcademyNote>

Ο πίνακας διαθέτει επιπλέον τμήμα εισόδων, επισημασμένο με πράσινο στην εικόνα (`GND`, `5V`, `SDA`, `SCL`).

Στην αριστερή πλευρά του μπλε κουτιού υπάρχει ένας διακόπτης τροφοδσίας για να επιβάλετε την επανεκκίνηση του πίνακα. Βρίσκεται στη θέση `ON` από προεπιλογή.

Μετά τη ρύθμιση του αισθητήρα, όλο που απομένει είναι να το φλασάρετε και να το ρυθμίσετε.
