---
title: 無人航空機を接続する
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: 無人航空機を接続する
metaOptions: [学ぶ]
defaultName: Connect unmanned aerial vehicle
---

**トランザクション後にドローンが移動を開始し、座標をIPFSに保存します。制御スクリプトは[GAASデモスクリプト](https://github.com/generalized-intelligence/GAAS)に基づいています**  

https://youtu.be/4CwtGAX1OwM

<br/>

## 要件

<List>

<li> 制御のための依存関係:

<LessonCodeWrapper language="bash">
sudo apt install -y \
	python3-pip \
	ninja-build \
	exiftool \
	python-argparse \
	python-empy \
	python-toml \
	python-numpy \
	python-yaml \
	python-dev \
	python-pip \
	ninja-build \
	protobuf-compiler \
	libeigen3-dev \
	genromfs
</LessonCodeWrapper>

<LessonCodeWrapper language="bash">
pip3 install \
	pandas \
	jinja2 \
	pyserial \
	cerberus \
	pyulog \
	numpy \
	toml \
	pyquaternion
</LessonCodeWrapper>

</li>

<li class="flex">

ROS Melodic + Gazebo [インストールチュートリアル](http://wiki.ros.org/melodic/インストール)
</li>

<li>追加パッケージ:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>IPFSバージョン0.4.22

<LessonCodeWrapper language="bash" codeClass="big-code">
wget https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-amd64.tar.gz
tar -xvzf go-ipfs_v0.4.22_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash" codeClass="big-code">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomicsノード（バイナリファイル）（最新リリースは[こちら](https://github.com/airalab/robonomics/releases)からダウンロード）
</li>

</List>

<br/>

## 環境のセットアップ

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-mavros ros-melodic-mavros-extras
wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh
sudo ./install_geographiclib_datasets.sh
cd ~/catkin_ws/src
git clone https://github.com/PX4/Firmware.git
cd Firmware
git checkout v1.9.0
bash ./Tools/setup/ubuntu.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/catkin_ws/src
git clone https://github.com/generalized-intelligence/GAAS.git
cp -r ~/catkin_ws/src/GAAS/simulator/models/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/models/
cp -r ~/catkin_ws/src/GAAS/simulator/worlds/* ~/catkin_ws/src/Firmware/Tools/sitl_gazebo/worlds/
cp -r ~/catkin_ws/src/GAAS/simulator/posix-config/* ~/catkin_ws/src/Firmware/posix-configs/SITL/init/ekf2/
</LessonCodeWrapper>

`.bashrc`ファイルを変更し、以下の行を最下部に追加します:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## 制御パッケージのインストール
新しいターミナルで:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## Robonomicsネットワーク

ローカルのrobonomicsネットワークを作成するには、robonomicバイナリファイルがあるフォルダに移動し、次のコマンドを実行します:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

`config.py`にrobonomicsのパスを追加します

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

[Robonomics Parachainポータル](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)に移動し、ローカルノードに切り替えます。

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

**アカウント**に移動し、**DRONE**と**EMPLOYER**アカウントを作成します。アカウント名、キー、および**robonomics**のパスを`~/catkin_ws/src/drone_sim/src/config.py`に保存します。アカウントに一定額のお金を送金します。

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## シミュレーションの実行
IPFSデーモンを実行します

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

別のターミナルでシミュレーションを起動します:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

"支払い待ち"まで待機 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

トランザクションを送信するには、別のウィンドウで次のコマンドを実行します:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - **<drone_address>**と**<employer_key>**は`config.py`から適切に置き換えられた文字列です。

データがIPFSにプッシュされた後、[Robonomics Parachainポータル](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)の**Chain State**に移動し、クエリで**datalog**を選択し、**+**ボタンを使用してDRONE datalogを追加します。


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

ドローンのテレメトリーは、上記のハッシュを挿入して`https://gateway.ipfs.io/ipfs/<hash>`を実行することで見つけることができます。

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

次の起動前に`db`ディレクトリを削除することが重要です  
` rm -rf ~/.local/share/robonomics/chains/dev/db`