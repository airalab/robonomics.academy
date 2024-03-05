---
title: 连接无人机
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: 连接无人机
metaOptions: [学习]
defaultName: 连接 unmanned aerial vehicle
---

**交易后，无人机开始移动，并将文件存储在IPFS中的坐标。控制脚本基于[GAAS演示脚本](https://github.com/generalized-intelligence/GAAS)**  

https://youtu.be/4CwtGAX1OwM

<br/>

## 要求

<List>

<li> 控制的依赖项:

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

ROS Melodic + Gazebo [安装教程](http://wiki.ros.org/melodic/安装)
</li>

<li>额外软件包:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>IPFS版本0.4.22

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

Robonomics节点（二进制文件）（下载最新版本[在此处](https://github.com/airalab/robonomics/releases)）
</li>

</List>

<br/>

## 环境设置

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

修改您的`.bashrc`文件，在底部添加以下行:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## 控制包安装
在新的终端中:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## Robonomics网络

要创建本地的robonomics网络，请转到包含robonomic二进制文件的文件夹并运行:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

将robonomic的路径添加到`config.py`

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

转到[Robonomics Parachain门户](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)并切换到本地节点。

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

转到**账户**并创建**DRONE**和**EMPLOYER**账户。保存帐户名称、密钥和路径到`~/catkin_ws/src/drone_sim/src/config.py`。向账户转账一些资金。

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## 运行模拟
运行IPFS守护程序

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

在另一个终端启动模拟:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

等待直到"等待付款" 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

要发送交易，请在另一个窗口运行:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - 其中**<drone_address>**和**<employer_key>**应分别替换为`config.py`中的字符串。

数据推送到IPFS后，转到[Robonomics Parachain门户](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)中的**Chain State**。选择查询中的**datalog**，并使用`+`按钮添加DRONE数据日志。


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

您可以通过运行`https://gateway.ipfs.io/ipfs/<hash>`来查找无人机的遥测数据，插入上述哈希。

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

在下次启动之前删除`db`目录是很重要的  
` rm -rf ~/.local/share/robonomics/chains/dev/db`