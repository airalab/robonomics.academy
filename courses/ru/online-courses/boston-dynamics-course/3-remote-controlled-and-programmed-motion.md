---
title: "Урок #3, дистанционное управление и запрограммированное движение"
description: На втором уроке вы узнаете, как использовать службы Spot Command и гулять со Spot.
lessonNumber: 3
courseID: 2
metaOptions: [Онлайн Курсы, Разработка программного обеспечения для Spot от Boston Dynamics]
---

<section class="container__narrow">

## О чем вы узнаете

На втором уроке вы узнаете, как использовать службы Spot Command и гулять со Spot.

</section>


<section class="container__narrow">

Задача

У вас есть список точек с их локальными координатами в директории <code>/home/student/lessons</code>.

Список движений:

<List>
<li>Кружиться вокруг себя</li>
<li>Кивать</li>
<li>Изменить положение ног робота</li>
<li>Перейти к следующей точке</li>
<li>Лечь в позу для замены батареи (эта команда должна выполняться последней, потому что она отключает питание двигателей).</li>
</List>

<br>

Вы можете найти локальные координаты Spot с помощью кода: (прежде чем вам понадобится создать  <code>state_client</code>, вы можете найти информацию об этом в разделе [Understanding Spot Programming](https://dev.bostondynamics.com/docs/python/understanding_spot_programming)):


<lessonCodeWrapper language="python" codeClass="big-code">
from bosdyn.client.frame_helpers import get_vision_tform_body
get_vision_tform_body(state_client.get_robot_state().kinematic_state.transforms_snapshot
</lessonCodeWrapper>

</section>

<section class="container__reg">

## Инструкция

<List type="numbers">

<li>

Вы можете управлять Spot с помощью <code>Robot Command Service</code>. Во-первых, вам нужно создать команду, чтобы предоставить ее службе команд. Для Spot SDK есть специальный класс <code>RobotCommandBuilder</code>.

Полный список методов и их описание вы можете найти [здесь](https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/bosdyn-client/src/bosdyn/client/robot_command.py#L593). В этом уроке вам понадобится:

\- Команда стоять

<lessonCodeWrapper language="python" codeClass="big-code">
def stand_command(params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY())
</lessonCodeWrapper>

\- Перейти к точке 

<lessonCodeWrapper language="python" codeClass="big-code">
def synchro_se2_trajectory_point_command(goal_x, goal_y, goal_heading, frame_name, params=None, body_height=0.0, locomotion_hint=spot_command_pb2.HINT_AUTO, build_on_command=None)
</lessonCodeWrapper>

Проверка использования [здесь]("https://github.com/boston-dynamics/spot-sdk/blob/master/python/examples/frame_trajectory_command/frame_trajectory_command.py).

Внимание! В примере рассматривается движение робота относительно текущего положения. В вашем случае необходимо указать движения относительно точки включения робота. Это означает, что вы можете установить значения <code>goal_x</code> и <code>goal_y</code> из задачи.

\- Команда скорости

<lessonCodeWrapper language="python" codeClass="big-code">
def synchro_velocity_command(v_x, v_y, v_rot, params=None, body_height=0.0, locomotion_hint=spot_command_pb2.HINT_AUTO, frame_name=BODY_FRAME_NAME
</lessonCodeWrapper>

\- Команда положения ног

<lessonCodeWrapper language="python" codeClass="big-code">
def stance_command(se2_frame_name, pos_fl_rt_frame, pos_fr_rt_frame, pos_hl_rt_frame, pos_hr_rt_frame, accuracy=0.05, params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY(), build_on_command=None)
</lessonCodeWrapper>

Пример использования [здесь](https://github.com/boston-dynamics/spot-sdk/blob/91ed30607264e795699995d6d7834ba0c8a94d36/python/examples/stance/stance_in_place.py).


\- Поза для замены батареи

<code>def battery_change_pose_command(dir_hint=1)</code>

Пример построения и запуска команды скорости:

<lessonCodeWrapper language="python" codeClass="big-code">
from bosdyn.client.robot_command import RobotCommandClient, RobotCommandBuilder
import time

command_client=robot.ensure_client(RobotCommandClient.default_service_name)
cmd=RobotCommandBuilder.velocity_command(0.5, 0, 0.5)
command_client.robot_command(cmd, end_time_secs=time.time() + 2)
</lessonCodeWrapper>

</li>

<li>
Подключитесь к Spot с терминала или с помощью функции удаленного выполнения вашей среды разработки.
</li>

<li>

Разработайте и продемонстрируйте свое решение задачи.

Мы создаем [конечную точку E-Stop](https://dev.bostondynamics.com/python/examples/estop/readme) для вас, поэтому вам не нужно ее создавать. Для аутентификации Spot используйте имя пользователя и пароль из файла - <code>/home/student/credentials</code>. Адрес Spot: <code>192.168.50.3</code>.

</li>

</List>
</section>

<section class="container__narrow">

### Готовы приступить к практике?

Как только почувствуете, что готовы, вы можете купить часовой практический сеанс, указав свои учетные данные для доступа (SSH-ключ) и время, когда вы хотите подключиться к Spot для решения задачи.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Арендовать Spot" />

</section>