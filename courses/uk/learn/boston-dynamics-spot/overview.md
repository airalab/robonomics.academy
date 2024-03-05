---
title: "Екстрене зупинення, Ініціалізація, Контроль позиції тіла"
description: Під час цього уроку ви дізнаєтеся, як авторизувати себе як користувача, отримати контроль над потужністю двигуна та надсилати базові команди на Spot.
metaOptions: [Вивчення, Розробка програмного забезпечення для Boston Dynamics Spot]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
Під час цього уроку ви дізнаєтеся, як авторизувати себе як користувача, отримати контроль над потужністю двигуна та надсилати базові команди на Spot.
</RoboAcademyText>

## Теорія

Як і всі серйозні роботи, у Boston Dynamics Spot є механізм захисту — [Служба E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) (Екстрене зупинення), яка завжди повинна бути активною під час роботи Spot, щоб уникнути потенційних фізичних пошкоджень. Увімкнення E-Stop миттєво заморожує всі з'єдн��ння (це відбувається без вимкнення двигунів, якщо робот був увімкнений).

Спочатку ми повинні взяти під контроль робота. Є два способи це зробити - *здобути* або *взяти*. *Здобути* означає запит контролю в лагідний спосіб, якщо хтось контролює робота зараз, ваш запит буде відхилений. Інакше, *взяти* означає насильницьке взяття контролю, не має значення, чи існує поточний оператор.

Таким чином, щоб зробити деякий рух, вам слід дотримуватися схеми:

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="Стани виконання робота" imageClasses="mb"/>

Robot Execution States

На цьому уроці ви дізнаєтеся, як керувати обертанням робота, змінюючи його *yaw*, *roll* та *pitch*. На малюнку нижче показана система координат тіла:

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="Координати Spot" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
Кути в коді представлені в радіанах.
</RoboAcademyText>

В результаті уроку ви намалюєте першу літеру свого імені у повітрі з облич��ям Spot. Давайте почнемо налаштування!

## Налаштування Gitpod

На цьому уроці ми будемо використовувати Gitpod, хмарне середовище розробки, яке дозволяє вам практикуватися без встановлення спеціального програмного забезпечення на вашому комп'ютері.

1. Зареєструйтеся на [Gitpod](https://gitpod.io/).
2. Перейдіть на наше [навчальне середовище Spot](https://gitpod.io/#github.com/merklebot/spot-edu-environment) та відкрийте його у нашому браузері. Ви побачите вікно з типовими функціями IDE. 
3. Клацніть на піктограму Меню, потім перейдіть в Термінал та створіть новий термінал.

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. Скопіюйте та вставте цю команду:

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

та натисніть `Enter`.

1. Відкрийте новий термінал (зараз ви можете це зробити, натиснув��и кнопку `+`) та перевірте підключення за допомогою команди

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

Ви повинні побачити щось на кшталт цього:

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

1. Перед запланованим часом ми надішлемо вам приватний ключ для встановлення SSH-з'єднання.
2. Скопіюйте свій приватний ключ у файл `id_ed25519`. Ви можете знайти файл у бічному експлорері *stop-edu-enviroment*.
3. **Додайте порожній рядок в кінці** `id_ed25519` ***файлу, це необхідно для правильної роботи SSH.*** Натисніть `Ctrl+S`, щоб зберегти зміни.

Якщо все в порядку, ви можете почати виконання уроку, редагуючи `lesson1.py`

Для виконання коду використовуйте команду:


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
Не забудьте переконатися, що ніхто інший не запускає свою програму в даний момент.
</RoboAcademyText>


## Розклад практичної сесії

Використовуйте веб-сайт планування Spot, щоб вибрати часовий інтервал для вашої практичної сесії:

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## Практика

Тепер ми створимо простий скрипт для Spot для малювання на екрані за допомогою рухів його голови. 

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
Якщо нам потрібно перемістити голову Spot в певну точку на камері, нам потрібно виконати великі обчислення з багатьма нелінійними параметрами, що взагалі не є простим завданням. Але ми можемо сказати, що локально кути yaw та pitch можуть бути приблизно використані як декартові координати з певним коефіцієнтом на малюнку.
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

Тепер ви можете спробувати запустити скрипт і побачити результат. Не забудьте зберегти свій код за допомогою Ctrl+S:

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### Відео Spot можна знайти тут:
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## Виклик
Створіть скрипт Python, який керує позицією тіла робота за допомогою послідовності рухів:

1. Підніміться
2. Простежте ваші ініціали обличчям (одна літера, принаймні 3 точки)
3. Сядьте

## Результати

Тепер ви знаєте, як:

- працювати з SDK Spot
- створити базову команду
- обертати тіло робота
- підключитися до Spot

І навіть намалювали літеру. Вітаємо!


<RoboAcademyText fWeight="500">

Ми зібрали [rosbag](http://wiki.ros.org/rosbag) з даними про з'єднання Spot, щоб ви могли їх візуалізувати (наприклад, за допомогою [foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)). Сертифікат буде надіслано на вашу електронну пошту незабаром.

</RoboAcademyText> 


## [Заплануйте свій перший урок](https://meetings.hubspot.com/strelka)