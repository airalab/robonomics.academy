---
title: "Экстренная остановка, Инициализация, Управление положением тела"
description: Во время этого урока вы узнаете, как авторизоваться как пользователь, получить управление мотором и отправлять базовые команды Spot.
metaOptions: [Изучение, Разработка программного обеспечения для Boston Dynamics Spot]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
Во время этого урока вы узнаете, как авторизоваться как пользователь, получить управление мотором и отправлять базовые команды Spot.
</RoboAcademyText>

## Теория

Как и все серьезные роботы, у Boston Dynamics Spot есть механизм защиты — [Служба E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) (Экстренная остановка), который всегда должен быть активен во время работы Spot, чтобы избежать потенциального физического повреждения. Включение E-Stop мгновенно замораживает все сочленения (это происходит без выключения двигателей, если робот был включен).

Прежде всего, мы должны арендовать контроль над роботом. Есть два способа сделать это - *приобрести* или *взять*. *Приобрести* означает запрос контроля мягким способом, если кто-то управляет роботом сейчас, ваш запрос будет отклонен. В другом случае, *взять* означает насильственное захватывание контроля, не имеет значения, существует ли текущий оператор.

Итак, чтобы сделать какое-то движение, вы должны следовать схеме:

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="Состояния выполнения робота" imageClasses="mb"/>

Robot Execution States

На этом уроке вы узнаете, как управлять вращением робота, изменяя его *yaw*, *roll* и *pitch*. На рисунке ниже показана система координат корпуса:

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="Координаты Spot" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
Углы в коде представлены в радианах.
</RoboAcademyText>

В результате урока вы нарисуете первую букву своего имени в воздухе с лицом Spot. Давайте начнем настройку!

## Настройка Gitpod

Для этого урока мы будем использовать Gitpod, облачную среду IDE, которая позволяет практиковаться без установки какого-либо специального программного обеспечения на вашем компьютере.

1. Зарегистрируйтесь на [Gitpod](https://gitpod.io/).
2. Перейдите на нашу [среду обучения Spot](https://gitpod.io/#github.com/merklebot/spot-edu-environment) и откройте ее в нашем браузере. Вы увидите окно с типичными функциями IDE. 
3. Нажмите на значок Меню, затем перейдите в Терминал и создайте новый терминал.

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. Скопируйте и вставьте эту команду:

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

и нажмите `Enter`.

1. Откройте новый терминал (теперь вы можете сделать это, нажав кнопку `+`) и протестируйте подключение с помощью команды

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

Вы должны увидеть что-то вроде этого:

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

1. До назначенного времени мы отправим вам закрытый ключ для установления SSH-соединения.
2. Скопируйте ваш закрытый ключ в файл `id_ed25519`. Вы можете найти файл в боковом исследователе *stop-edu-enviroment*.
3. **Добавьте пустую строку в конце** `id_ed25519` ***файла, это необходимо для правильной работы SSH.*** Нажмите `Ctrl+S`, чтобы сохранить изменения.

Если все в порядке, вы можете начать выполнение урока, отредактировав `lesson1.py`

Для выполнения кода используйте команду:


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
Не забудьте убедиться, что никто другой не запускает свою программу в данный момент.
</RoboAcademyText>


## Запланируйте практическую сессию

Используйте веб-сайт планирования Spot, чтобы выбрать временной слот для вашей практической сессии:

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## Практика

Теперь мы создадим простой скрипт для Spot для рисования на экране с использованием движений его головы. 

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
Если нам нужно переместить голову Spot в какую-то точку на камере, нам нужно выполнить много больших вычислений с множеством нелинейных параметров, что вовсе не простая задача. Но мы могли бы сказать, что локально углы yaw и pitch могут быть приблизительно использованы как декартовы координаты с некоторым коэффициентом на изображении.
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

Теперь вы можете попробовать запустить скрипт и увидеть результат. Не забудьте сохранить свой код с помощью Ctrl+S:

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### Видео Spot можно найти здесь:
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## Задание
Создайте скрипт на Python, управляющий положением тела робота с последовательностью движений:

1. Встаньте
2. Нарисуйте свои инициалы его лицом (одна буква, как минимум 3 точки)
3. Сядьте

## Резултаты

Теперь вы знаете, как:

- работать с SDK Spot
- создавать базовую команду
- вращать тело робота
- подключаться к Spot

И даже нарисовали букву. Поздравляем!


<RoboAcademyText fWeight="500">

Мы собрали [rosbag](http://wiki.ros.org/rosbag) с данными сочленений Spot, чтобы вы могли визуализировать их (например, с помощью [foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)). Сертификат будет отправлен на вашу электронную почту в ближайшее время.

</RoboAcademyText> 


## [Запланируйте свой первый урок](https://meetings.hubspot.com/strelka)