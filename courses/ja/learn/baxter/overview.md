---
title: Baxterロボットを制御する
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: Baxterロボットを制御する
metaOptions: [学ぶ]
defaultName: Control Baxter robot
---
仕組みの例:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## 要件：

<List>

<li class="flex">

ROS Melodic + Gazebo（インストールマニュアルは[こちら][db2]）  

</li>

<li>追加パッケージ：

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effまたはt-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS 0.6.0まで（[こちら][db3]からダウンロードしてインストール）

</li>

<li> Pythonパッケージ：

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomicsノードの最新バージョンを[こちら][db4]からダウンロードしてインストール（最後にテストされたリリースv1.1）

</li>

<li>IPFSブラウザ拡張機能（必須ではない）</li>

</List>

<br/>

## 0. Python3 用の CV Bridge 拡張機能をインストールします。

<List>

<li> Catkinワークスペースを作成

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Catkinにcmake変数を設定するよう指示します。現在の`python`のバージョンを使用してください。私の場合は`python3.6`です。

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> cv_bridgeのソースをクローン：

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> リポジトリ内のcv_bridgeのバージョンを見つける：

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> 正しいバージョンをgitリポジトリでチェックアウトします。私たちの場合、1.12.8です。

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> ビルド：

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> 新しいパッケージで環境を拡張：

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> テスト：

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

## 1. シミュレーションとコントローラーパッケージをダウンロード
パッケージをダウンロード：

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
git checkout old_version
pip3 install -r requirements.txt
cd ../..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

ソースコマンドを追加するのを忘れないでください：

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. シミュレーションを開始
Gazeboワールドを開始し、baxterを配置します：

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

ターミナルでさらに1つのウィンドウを開いてください：

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

baxterの前にいくつかのモデルを配置できます。より面白くなります。

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. DAPPでアカウントを管理

テスト中なので、ローカルのrobonomicsネットワークをrobonomicsバイナリファイルで作成します。robonomicsファイルがあるフォルダに移動して、次のコマンドを実行します：

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

[Robonomics Parachainポータル][db5]に移動して、ローカルノードに切り替えます

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

アカウントに移動して、__Baxter__と__Employer__アカウントを作成します（__Robot__は必要ありません）

__重要！__各アカウントの**ニーモニック**と**アドレス**をコピーしてください（アドレスをコピーするには、アカウントのアイコンをクリックしてください）。**ニーモニック**はアカウントの秘密鍵です。
これらのアカウントにいくらかのお金（単位）を送金してください：

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Baxterの**ニーモニック**と**アドレス**を`robot_ws/src/Baxter_simulation_controller/config/`の`config.yaml`に追加してください

## 4. シミュレーションを開始

新しいウィンドウで次のコマンドを実行します：


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

別のターミナルを開いて*コントローラーパッケージ*を起動します：

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Baxterを動かしてデータを収集するトランザクションを送信できるようになりました。[Robonomics Parachainポータル][db5]を使用してください。**Developer->Extrinsics**に移動し、Baxterの雇用主アカウント、`launch` extrinsic、Baxterのアカウントをターゲットアカウントとして選択し、パラメーターに`yes`を入力してください。Extrinsicを送信します。


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

ロボットが動き始めるはずです。他のアカウントからのコマンドや`no`パラメーターを持つコマンドは受け付けません。
次のように表示されるはずです：

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

作業が終了したら、Robonomics Portalに移動して`Developer > Chain state`を選択します。**state query**で`datalog.datalogItem(AccountId,u64)`を選択します。すべてのdatalogを表示したい場合は、`include option`をオフにして、`+`ボタンを使用してBaxterのdatalogメッセージを表示します。

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

今、テレメトリと写真のIPFSハッシュがブロックチェーンに保存されました。データを表示するには、単にハッシュをコピーして、URL：gateway.ipfs.io/ipfs/<brここにハッシュを挿入>の検索バーに挿入してください

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

__Gatewayで表示__をクリックして、それで終わりです！

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Baxterシミュレーションv2.0

動作方法の例：

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## 要件：

<List>

<li class="flex">


ROS Melodic + Gazebo（インストールマニュアルは[こちら][db2]）  

</li>

<li>追加パッケージ：

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS 0.6.0まで（[こちら][db3]からダウンロードしてインストール）

</li>

<li> Pythonパッケージ：

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomicsノード（バイナリファイル）（最新の[リリース][db4]はこちらからダウンロードしてください）

</li>

<li class="flex">

**Robonomics Portal**で__Baxter__と__Employer__アカウントを作成します（チュートリアルは[こちら][db8]で見つけることができます）。
</li>

<li>IPFSブラウザ拡張機能（必須ではない）</li>

</List>

<br/>

## 0. Python3用のCV Bridge拡張機能をインストール

<List>

<li> Catkinワークスペースを作成

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Catkinにcmake変数を設定するよう指示します。現在の`python`のバージョンを使用してください。私の場合は`python3.6`です。

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> cv_bridgeのソースをクローン：

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> リポジトリ内のcv_bridgeのバージョンを見つける：

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> 正しいバージョンをgitリポジトリでチェックアウトします。私たちの場合、1.12.8です。

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> ビルド：

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> 新しいパッケージで環境を拡張：

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> テスト：

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

<br/>

## 1. シミュレーションとコントローラーパッケージをダウンロード
メインのBaxterパッケージ用のワークスペースとメインの制御プログラム用のワークスペースを作成する必要があります。
最初のワークスペース。これはメインの制御プログラムです。Python3で実行されます。

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

2番目のワークスペース。すべてのBaxterパッケージが含まれます。シミュレーションは非常に古いため、Python2でのみ実行できます。

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

これらのパッケージはROS indigo用に作成されました。これをROS melodicで実行するために、いくつかのファイルを変更する必要があります。
**パッチ**ファイルを使用します。

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

そして、すべてのパッケージを構築しましょう：  
まず、Baxterのパッケージをビルドします

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

次に、最初ワークスペースに戻り、それもビルドします：

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

ソースコマンドを追加するのを忘れないでください：

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. シミュレーションを開始
### シミュレーションを開始しましょう：
まず、`robot_ws`に移動して、baxter.shをコピーして編集します

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

次のコマンドでローカルIPアドレスを見つけてください：

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

`baxter.sh`で次の値を編集します：

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- your_ip - ローカルIPアドレスを入力してください。`ip a`を参照してください
- ros_version - 例えば"melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

simを指定してbaxterシェルスクリプトを実行します：

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

baxterの前にいくつかのモデルを配置できます。より面白くなります。

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. DAPPでアカウントを管理

テスト中なので、ローカルのrobonomicsネットワークをrobonomicsバイナリファイルで作成します。robonomicsファイルがあるフォルダに移動して、次のコマンドを実行します：

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

[Robonomics Parachainポータル][db5]に移動して、ローカルノードに切り替えます

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

アカウントに移動して、__Baxter__と__Employer__アカウントを作成してください。

Robonomics Portalで"Robonomics Portalでアカウントを作成する"マニュアルを[こちら][db8]で見つけることができます

__重要！__各アカウントの**ニーモニック**と**アドレス**をコピーしてください（アドレスをコピーするには、アカウントのアイコンをクリックしてください）。**ニーモニック**はアカウントの秘密鍵です。

これらのアカウントにいくらかのお金（単位）を送金してください：

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

`config.yaml`内の`robonomics_ws/src/Baxter_simulation_controller/config/`にBaxterの**ニーモニック**と**アドレス**を追加してください。

## 4. シミュレーションを開始

新しいウィンドウで次のコマンドを実行します：

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

別のターミナルを開いて*コントローラーパッケージ*を起動します：

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

これで、Baxterを動かしてデータを収集するトランザクションを送信できるようになりました。これを行うには、同じポータル[Robonomics Parachain portal][db5]を使用できます。**Developer->Extrinsics**に移動し、Baxterの雇用主アカウント、`launch` extrinsic、Baxterのアカウントをターゲットアカウントとして選択し、パラメーターとして`yes`を使用します。Extrinsicを送信してください。


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

ロボットが動き始めるはずです。他のアカウントからのコマンドや`no`パラメーターを持つコマンドは受け付けません。
次のように表示されるはずです：

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

作業が終了したら、Robonomics Portalに移動して`Developer > Chain state`を選択してください。**state query**で`datalog.datalogItem(AccountId,u64)`を選択します。すべてのdatalogを表示したい場合は、`include option`をオフにして、`+`ボタンを使用してBaxterのdatalogメッセージを表示します。

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

今、テレメトリと写真のIPFSハッシュがブロックチェーンに保存されました。データを見るには、単にハッシュをコピーして、URLと共に検索バーに挿入してください：  
#### gateway.ipfs.io/ipfs/<ここにハッシュを入力>

以上です！

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/インストール>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>