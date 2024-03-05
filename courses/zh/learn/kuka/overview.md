---
title: 连接Kuka机械手
description: 连接机械手
metaOptions: [学习]
defaultName: 连接 Kuka manipulator
---

这里可以找到工作示例视频:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## 要求

<List>

<li class="flex">

ROS melodic，Gazebo（安装指南[在这里](http://wiki.ros.org/melodic/安装/Ubuntu)）
</li>

<li>一些额外的软件包

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

（从[这里](https://www.npackd.org/p/ipfs/0.4.22)下载并安装）

<LessonCodeWrapper language="bash" codeClass="big-code">
tar -xvzf go-ipfs_v0.4.22_linux-386.tar.gz
cd go-ipfs/
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>pip3

<LessonCodeWrapper language="bash">
sudo apt-get install python3-pip
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li>substrate-interface

<LessonCodeWrapper language="bash">
pip3 install substrate-interface
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics节点（二进制文件）（从[这里](https://github.com/airalab/robonomics/releases)下载最新版本）

</li>

<li>IPFS浏览器扩展（非必需）</li>

</List>

<br/>

***

<br/>

## 安装
安装Kuka机械手和控制软件包

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## 运行gazebo模型

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

在新窗口中

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## 运行robonomics
转到带有robonomics文件的文件夹并创建本地robonomics网络:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

转到[Robonomics Parachain门户](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)并切换到本地节点

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

然后转到帐户并创建`KUKA`帐户。保存帐户的助记词密钥，稍后会用到。 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

从默认帐户中向新帐户发送一些单位。

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## 运行ipfs
运行 ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## 运行控制软件包
在kuka_control软件包的配置目录中，您需要创建带有以下行的配置文件，其中`<your_mnemonic>`是保存的助记词种子:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


现在您可以运行控制脚本:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## 发送交易
在[Robonomics Parachain门户](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)中转到`Developer/Extrinsics`，将`extrinsic`更改为`launch`。在`robot`中选择您的`KUKA`帐户，并将`param`更改为`Yes`。然后按`提交交易`

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

在kuka_control软件包的窗口中，您将看到:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

然后在Robonomics门户上转到`Developer/Chain State`，选择`datalog`和`datalogItem((AccountId,u64)): RingBufferItem`，并使用按钮'+'添加`KUKA`数据日志:

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

现在您可以通过此链接在IPFS中找到机器人的遥测数据，其中包含您的哈希`https://gateway.ipfs.io/ipfs/<hash>`。

## 故障排除

如果`catkin_make`无法找到MoveArm.h并显示消息，则尝试在kuka_manipulator_gazebo软件包的CMakeLists.txt中删除最后四行:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

在没有这些行的情况下进行`catkin_make`，然后将它们恢复并再次进行`catkin_make`。