---
title: "비상 정지, 초기화, 몸의 위치 제어"
description: 이 수업에서는 사용자로 승인하는 방법, 모터 전원 제어 및 Spot에 기본 명령을 보내는 방법을 배우게 됩니다.
metaOptions: [Boston Dynamics Spot를 위한 소프트웨어 개발 배우기]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
이 수업에서는 사용자로 승인하는 방법, 모터 전원 제어 및 Spot에 기본 명령을 보내는 방법을 배우게 됩니다.
</RoboAcademyText>

## 이론

보스턴 다이내믹스 스팟과 같은 모든 진지한 로봇은 작동 중에 잠재적인 물리적 손상을 피하기 위해 항상 활성화되어야 하는 보호 메커니즘인 [E-Stop 서비스](https://dev.bostondynamics.com/docs/concepts/estop_service) (비상 정지)를 갖고 있습니다. E-Stop을 켜면 모든 관절이 즉시 멈춥니다 (로봇이 켜져 있는 경우 엔진을 끄지 않고 발생합니다).

먼저 로봇 제어를 임대해야 합니다. 이를 위해 *획득* 또는 *가져오기* 두 가지 방법이 있습니다. *획득*은 로봇을 부드럽게 제어하도록 요청하는 것을 의미하며, 현재 누군가가 로봇을 제어 중이면 요청이 거부됩니다. 반면 *가져오기*는 강제로 제어를 가져오는 것을 의미하며, 현재 운영자가 존재하는지 여부는 중요하지 않습니다.

따라서 움직임을 만들려면 다음 계획을 따라야 합니다:

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="로봇 실행 상태" imageClasses="mb"/>

Robot Execution States

이 수업에서는 로봇의 *yaw*, *roll* 및 *pitch*를 변경하여 로봇 회전을 제어하는 방법을 배우게 됩니다. 아래 그림에서 본체 프레임 좌표계가 표시됩니다:

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="Spot 좌표" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
코드에서의 각도는 라디안으로 표시됩니다.
</RoboAcademyText>

이 수업의 결과로 Spot의 얼굴로 공중에 이름의 첫 글자를 그릴 것입니다. 설정을 시작합시다!

## Gitpod 설정

이 수업에서는 컴퓨터에 특별한 소프트웨어를 설치하지 않고 연습할 수 있는 클라우드 기반 IDE인 Gitpod를 사용할 것입니다.

1. [Gitpod](https://gitpod.io/)에 가입하세요.
2. [Spot 교육 환경](https://gitpod.io/#github.com/merklebot/spot-edu-environment)으로 이동하여 브라우저에서 엽니다. 전형적인 IDE 기능이 있는 창이 표시됩니다. 
3. 메뉴 아이콘을 클릭한 다음 터미널로 이동하여 새 터미널을 만듭니다.

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. 다음 명령을 복사하여 붙여넣기하고 `Enter`를 누릅니다.

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

1. 새 터미널을 엽니다 (이제 `+` 버튼을 눌러 수행할 수 있습니다) 및 명령으로 연결을 테스트합니다.

다음과 같은 내용이 표시되어야 합니다:

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

1. 예정된 시간 전에 SSH 연결을 설정하기 위해 개인 키를 보내드립니다.

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

2. 개인 키를 `id_ed25519` 파일에 복사합니다. *stop-edu-enviroment*의 사이드바 탐색기에서 파일을 찾을 수 있습니다.
3. **`id_ed25519` 파일 끝에 공백 줄을 추가하십시오. SSH가 올바르게 작동하려면 이 작업이 필요합니다.** 변경 사항을 저장하려면 `Ctrl+S`를 누릅니다.
모든 것이 정상이면 `lesson1.py`를 편집하여 수업을 완료할 수 있습니다.

코드를 실행하려면 다음 명령을 사용하십시오:

다른 사람이 현재 프로그램을 실행 중이지 않은지 확인하세요.


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
연습 세션 일정
</RoboAcademyText>


## Spot 일정 웹사이트를 사용하여 연습 세션의 시간대를 선택하세요:

연습

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## 이제 Spot을 사용하여 화면에 그리기 위한 간단한 스크립트를 만들 것입니다.

Spot의 머리를 카메라의 특정 지점으로 이동해야 하는 경우, 많은 비선형 매개변수를 사용한 큰 계산이 필요합니다. 이는 전혀 간단한 작업이 아닙니다. 그러나 지역적으로는 yaw 및 pitch 각도가 일부 계수와 함께 카테시안 좌표로 대략 사용될 수 있다고 말할 수 있습니다. 

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
이제 스크립트를 실행하고 결과를 확인해 볼 수 있습니다. 코드를 저장하는 것을 잊지 마세요. Ctrl+S를 사용하세요:
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

Spot의 비디오는 여기에서 찾을 수 있습니다:

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### 도전
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## 로봇 몸체 위치를 제어하는 Python 스크립트를 만들어보세요:
1. 일어서기

2. 얼굴로 이니셜을 그리기 (한 글자, 적어도 3개의 점)
3. 앉기
결과

## 이제 다음을 알게 되었습니다:

Spot SDK로 작업하기

- 기본 명령어 작성
- 로봇 몸체 회전
- Spot에 연결
- 그리고 글자를 그렸습니다. 축하합니다!

Spot의 관절 데이터를 시각화할 수 있는 [rosbag](http://wiki.ros.org/rosbag)를 수집했으므로 [foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)와 같은 도구를 사용할 수 있습니다. 인증서는 곧 이메일로 전송될 것입니다.


<RoboAcademyText fWeight="500">

[첫 번째 수업 일정을 예약하세요](https://meetings.hubspot.com/strelka)

</RoboAcademyText> 


## [첫 레슨 일정을 예약하세요](https://meetings.hubspot.com/strelka)