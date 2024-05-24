---
title: "توقف الطوارئ، التهيئة، التحكم في وضع الجسم"
description: خلال هذا الدرس ستتعلم كيفية تفويض نفسك كمستخدم، والحصول على تحكم في طاقة المحرك وإرسال الأوامر الأساسية إلى Spot.
metaOptions: [تعلم، تطوير البرمجيات لروبوت بوسطن ديناميكس سبوت]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
خلال هذا الدرس، ستتعلم كيفية تفويض نفسك كمستخدم، والحصول على تحكم في طاقة المحرك وإرسال الأوامر الأساسية إلى Spot.
</RoboAcademyText>

## نظرية

كجميع الروبوتات الجادة، يحتوي روبوت بوسطن ديناميكس سبوت على آلية حماية — [خدمة إيقاف الطوارئ](https://dev.bostondynamics.com/docs/concepts/estop_service) (توقف الطوارئ) التي يجب أن تكون دائمًا نشطة أثناء تشغيل Spot لتجنب الضرر الجسدي المحتمل. تشغيل توقف الطوارئ يجمد جميع المفاصل على الفور (يحدث هذا دون إيقاف المحركات إذا كان الروبوت مشغلًا).

أولاً، يجب علينا تأجير التحكم في الروبوت. هناك طريقتان للقيام بذلك - *اكتساب* أو *أخذ*. *اكتساب* يعني طلب التحكم بطريقة لطيفة، إذا كان أي شخص يتحكم في الروبوت الآن، سيتم رفض طلبك. بطريقة أخرى، *أخذ* يعني أخذ التحكم بقوة، لا يهم ما إذا كان المشغل الحالي موجودًا.

لذلك، للقيام ببعض الحركة، يجب عليك اتباع الخطة:

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="حالات تنفيذ الروبوت" imageClasses="mb"/>

Robot Execution States

خلال هذا الدرس ستتعلم كيفية التحكم في دوران الروبوت عن طريق تغيير *الميل*، *الميل* و *الميل*. في الصورة أدناه يتم عرض نظام إحداثيات الإطار الجسم:

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="إحداثيات Spot" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
الزوايا في الكود تمثل بالراديان.
</RoboAcademyText>

نتيجة للدرس، ستقوم برسم أول حرف من اسمك في الهواء باستخدام وجه Spot. لنبدأ الإعداد!

## إعداد Gitpod

لهذا الدرس، سنستخدم Gitpod، بيئة تطوير مبنية على السحابة تتيح لك الممارسة دون تثبيت أي برنامج خاص على جهاز الكمبيوتر الخاص بك.

1. قم بالتسجيل في [Gitpod](https://gitpod.io/).
2. انتقل إلى [بيئة تعليم Spot](https://gitpod.io/#github.com/merklebot/spot-edu-environment) وافتحها في متصفحك. سترى نافذة تحتوي على وظائف IDE النموذجية. 
3. انقر على أيقونة القائمة، ثم انتقل إلى الطرفية وأنشئ طرفية جديدة.

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. انسخ والصق هذا الأمر:

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

واضغط على `Enter`.

1. افتح طرفية جديدة (يمكنك القيام بذلك الآن عن طريق الضغط على زر `+`) واختبر الاتصال بالأمر

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

يجب أن ترى شيئًا مثل هذا:

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

1. قبل الوقت المحدد سنرسل لك مفتاح خاص لإنشاء اتصال SSH.
2. انسخ المفتاح الخاص الخاص بك إلى الملف `id_ed25519`. يمكنك العثور على الملف في مستكشف الشريط الجانبي لـ *stop-edu-enviroment*.
3. **أضف سطرًا فارغًا في نهاية** `id_ed25519` ***الملف، هذا ضروري لعمل SSH بشكل صحيح.*** اضغط `Ctrl+S` لحفظ التغييرات.

إذا كان كل شيء على ما يرام، يمكنك بدء إكمال الدرس عن طريق تحرير `lesson1.py`

لتنفيذ الكود، استخدم الأمر:


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
تذكر التأكد من عدم تشغيل أي شخص آخر لبرنامجه في الوقت الحالي.
</RoboAcademyText>


## جدولة جلسة الممارسة

استخدم موقع جدولة Spot لاختيار الفترة الزمنية لجلسة الممارسة الخاصة بك:

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## ممارسة

الآن سنقوم بإنشاء سكريبت بسيط لـ Spot للرسم على الشاشة باستخدام حركات رأسه. 

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
إذا كنا بحاجة إلى تحريك رأس Spot إلى نقطة ما في الكاميرا، يجب علينا إجراء حسابات كبيرة مع العديد من المعلمات غير الخطية، وهو أمر ليس بالأمر البسيط على الإطلاق. ولكن يمكننا أن نقول، أنه محليًا، يمكن استخدام زوايا الميل والميل تقريبًا كإحداثيات كارتيسية مع بعض العوامل على صورة.
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

الآن يمكنك محاولة تشغيل السكريبت ورؤية النتيجة. لا تنسى حفظ الكود الخاص بك بـ Ctrl+S:

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### يمكن العثور على فيديو لـ Spot هنا:
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## تحدي
إنشاء سكريبت Python يتحكم في وضع الجسم الروبوت بتسلسل من الحركات:

1. الوقوف
2. تتبع حروفك الأولى بوجهه (حرف واحد، على الأقل 3 نقاط)
3. الجلوس

## النتائج

الآن، أنت تعرف يفية:

- العمل مع SDK Spot
- بناء أمر أساسي
- تدوير جسم الروبوت
- الاتصال بـ Spot

وحتى رسمت حرفًا. تهانينا!


<RoboAcademyText fWeight="500">

لقد جمعنا [rosbag](http://wiki.ros.org/rosbag) مع بيانات المفاصل الخاصة بـ Spot، حتى تتمكن من تصورها (على سبيل المثال باستخدام [foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)). سيتم إرسال الشهادة إلى بريدك الإلكتروني قريبًا.

</RoboAcademyText> 


## [جدولة أول درس لك](https://meetings.hubspot.com/strelka)