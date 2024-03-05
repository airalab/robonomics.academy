---
title: "紧急停止，初始化，身体位置控制"
description: 在这节课中，您将学习如何授权自己作为用户，获得电机功率控制并向Spot发送基本命令。
metaOptions: [学习，为波士顿动力Spot开发软件]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
在这节课中，您将学习如何授权自己作为用户，获得电机功率控制并向Spot发送基本命令。
</RoboAcademyText>

## 理论

作为一款严肃的机器人，波士顿动力Spot具有一种保护机制 - [E-Stop服务](https://dev.bostondynamics.com/docs/concepts/estop_service)（紧急停止），在Spot操作期间应始终处于活动状态，以避免潜在的物理损坏。打开E-Stop会立即冻结所有关节（如果机器人已经打开，则不会关闭引擎）。

首先，我们应该控制机器人。有两种方法可以做到这一点 - *获取*或*接管*。*获取*意味着以温和的方式请求控制，如果现在有人控制机器人，您的请求将被拒绝。另一种方式，*接管*意味着强制控制，无论当前操作员是否存在。

因此，要进行一些移动，您应该遵循以下方案：

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="机器人执行状态" imageClasses="mb"/>

Robot Execution States

在这节课中，您将学习如何通过更改*偏航*，*横滚*和*俯仰*来控制机器人的旋转。下图显示了身体框架坐标系：

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="Spot坐标" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
���码中的角度以弧度表示。
</RoboAcademyText>

作为课程的结果，您将用Spot的面部在空中画出您姓名的第一个字母。让我们开始设置吧！

## 设置Gitpod

在本课程中，我们将使用Gitpod，这是一种基于云的IDE，允许您在计算机上不安装任何特殊软件的情况下进行练习。

1. 注册[Gitpod](https://gitpod.io/)。
2. 转到我们的[Spot教育环境](https://gitpod.io/#github.com/merklebot/spot-edu-environment)并在浏览器中打开。您将看到具有典型IDE功能的窗口。 
3. 单击菜单图标，然后转到终端并创建一个新终端。

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. 复制粘贴此命令：

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

并按`Enter`键。

1. 打开新终端（现在您可以通过按`+`按钮来做到）并使用命令测试连接

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

您应该看到类似于这样的内容：

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

1. 在预定时间之前，我们将向您发送私钥以建立SSH连接。
2. 将您的私钥复制到文件`id_ed25519`。您可以在*stop-edu-enviroment*的侧边栏资源管理器中找到该文件。
3. **在** `id_ed25519` ***文件末尾添加一行空行，这对于SSH正常工作是必要的。***按`Ctrl+S`保存更改。

如果一切正常，您可以通过编辑`lesson1.py`开始完成课程

要执行代码，请使用命令：


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
请确保此时没有其他人在运行他们的程序。
</RoboAcademyText>


## 安排练习时间

���用Spot排程网站选择练习时间段：

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## 练习

现在我们将为Spot制作一个简单的脚本，用于使用其头部运动在屏幕上绘图。 

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
如果我们需要将Spot的头部移动到相机中的某个点，我们应该进行许多具有许多非线性参数的大量计算，这绝非易事。但是我们可以说，在局部范围内，偏航和俯仰角可以近似用作具有某些系数的笛卡尔坐标在图片上。
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

现在您可以尝试运行脚本并查看结果。不要忘记使用Ctrl+S保存您的代码：

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### Spot的视频可以在这里找到：
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## 挑战
创建一个Python脚本，用一系列动作控制机器人的身体位置：

1. 站起来
2. 用它的面部追踪您的姓名首字母（一个字母，至少3个点）
3. 坐下

## 结果

现在，您知道如何：

- 使用Spot SDK
- 构建基本命令
- 旋转机器人身体
- 连接到Spot

甚至画了一个字母。恭喜！


<RoboAcademyText fWeight="500">

我们收集了一个[rosbag](http://wiki.ros.org/rosbag)，其中包含Spot的关节数据，因此您可以将它们可视化（例如使用[foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)）。证书将很快发送到您的电子邮件。

</RoboAcademyText> 


## [安排您的第一堂课](https://meetings.hubspot.com/strelka)