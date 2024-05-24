---
title: "緊急停止、初期化、ボディポジション制御"
description: このレッスンでは、ユーザーとして自分自身を認証し、モーターパワーコントロールを取得し、Spotに基本的なコマンドを送信する方法を学びます。
metaOptions: [Boston Dynamics Spotのソフトウェア開発を学ぶ]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
このレッスンでは、ユーザーとして自分自身を認証し、モーターパワーコントロールを取得し、Spotに基本的なコマンドを送信する方法を学びます。
</RoboAcademyText>

## 理論

真剣なロボットと同様に、Boston Dynamics Spotには、潜在的な物理的損傷を避けるためにSpotの操作中に常にアクティブである必要がある[E-Stopサービス](https://dev.bostondynamics.com/docs/concepts/estop_service)（緊急停止）という保護メカニズムがあります。 E-Stopをオンにすると、すべての関節が即座に凍結します（これは、ロボットがオンになっている場合でもエンジンを切らずに発生します）。

まず、ロボットの制御をリースする必要があります。これを行う方法は2つあります - *取得*または*取得*。 *取得*は、誰かが現在ロボットを制御している場合、制を要求する穏やかな方法を意味します。別の方法では、*取得*は、現在のオペレーターが存在しているかどうかに関係なく、制御を強制的に取得することを意味します。

したがって、いくつかの動きを行うには、次の手順に従う必要があります。

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="ロボットの実行状態" imageClasses="mb"/>

Robot Execution States

このレッスンでは、ロボットの*ヨー*、*ロール*、*ピッチ*を変更してロボットの回転を制御する方法を学びます。下の図には、ボディフレーム座標系が示されています。

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="Spot座標" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
コード内の角度はラジアンで表されます。
</RoboAcademyText>

レッスンの結果、Spotの顔で空中に自分の名前の最初の文字を描きます。セットアップを開始しましょう！

## Gitpodのセットアップ

このレッスンでは、特別なソフトウェアをコンピュータにインストールすることなく練習できるクラウドベースのIDEであるGitpodを使用します。

1. [Gitpod](https://gitpod.io/)にサインアップしてください。
2. [Spot教育環境](https://gitpod.io/#github.com/merklebot/spot-edu-environment)に移動して、ブラウザで開いてください。典型的なIDE機能が表示されるウィンドウが表示されます。 
3. メニューアコンをクリックして、次にターミナルに移動して新しいターミナルを作成します。

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. このコマンドをコピーして貼り付けてください。

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

そして`Enter`を押してください。

1. 新しいターミナルを開きます（`+`ボタンを押すことで行うことができます）そして次のコマンドで接続をテストします

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

次のようなものが表示されるはずです：

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

1. 予定された時間の前に、SSH接続を確立するためのプライベートキーをお送りします。
2. プライベートキーを`id_ed25519`ファイルにコピーします。*stop-edu-enviroment*のサイドバーエクスプローラでファイルを見つけることができます。
3. **`id_ed25519`ファイルの末尾に空行を追加してください。これはSSHが正常に機能するために必要です。**変更を保存するには`Ctrl+S`を押してください。

すべてが正常であれば、`lesson1.py`を編集してレッスンを完了できます

コードを実行するには、次のコマンドを使用してください：


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
他の誰もがその時点でプログラムを実行していないことを確認してください。
</RoboAcademyText>


## 練習セッションをスケジュールする

Spotスケジューリングウェブサイトを使用して、練習セッションのためのタイムスロットを選択してください：

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## 練習

今度は、Spotの頭の動きを使って画面に描画するための簡単なスクリプトを作成します。 

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
Spotの頭をカメラのある点に移動する必要がある場合、多くの非線形パラメータを使用した大規模な計算が必要です。これは非常に簡単なタスクではありません。しかし、局所的には、ヨー角とピッチ角は、画像上でカーテシアン座標として使用できると言えます。
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

スクリプトを実行して結果を確認できます。コードを保存するのを忘れないでください（Ctrl+Sを使用）：

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### Spotのビデオはこちらで見つけることができます：
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## チャレンジ
Pythonスクリプトを作成して、次のモーションのシーケンスでロボットのボディポジションを制御します：

1. 立ち上がる
2. 顔でイニシャルをトレースする（1文字、少なくとも3点）
3. 座る

## 結果

今では、次のことができます：

- Spot SDKと連携する
- 基本的なコマンドを構築する
- ロボットのボディを回転させる
- Spotに接続する

そして、文字を描きました。おめでうございます！


<RoboAcademyText fWeight="500">

Spotの関節データを収集した[rosbag](http://wiki.ros.org/rosbag)を送信します。これにより、それらを視覚化できます（たとえば、[foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)を使用して）。証明書は近日中にメールで送信されます。

</RoboAcademyText> 


## [最初のレッスンをスケジュールする](https://meetings.hubspot.com/strelka)