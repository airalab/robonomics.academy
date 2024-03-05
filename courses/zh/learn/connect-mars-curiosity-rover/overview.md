---
title: 连接火星好奇号探测器
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: 将火星好奇号探测器连接到Robonomics空投控制下。
metaOptions: [学习]
defaultName: Connect Mars Curiosity Rover
---

**让我们看看Robonomics Parachain控制如何使火星好奇号探测器移动。要求:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz（安装手册[在这里](http://wiki.ros.org/melodic/安装)）

</li>


<li>额外软件包:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS 高达 [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[IPFS 配套扩展](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

Robonomics节点（二进制文件）（在此处下载最新版本[here](https://github.com/airalab/robonomics/releases)。本教程在v1.1上测试通过）

</li>

</List>

<br/>

这是显示成功启动的视频:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. 设置模拟

下载好奇号探测器软件包:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

我们需要调整起始条件，使我们的探测器平稳生成:

<List>

<li>前往

`src/master/curiosity_mars_rover_description/worlds` and change line 14 of the file` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>前往

`src/master/curiosity_mars_rover_description/launch`并更改文件`mars_curiosity_world.launch`的第4行 
`<arg name="paused" default="false"/>`

不要忘记添加源命令 `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> 重新启动控制台并启动模拟:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

注意: 如果图像很暗，例如有阴影，请在Gazebo工具栏中将`Camera`更改为`Orthorgraphic`。
模拟可以暂时关闭。

------------

<br/>

### 2. 下载Robonomics控制器软件包
要在终端中下载Rover的控制器软件包:

<LessonCodeWrapper language="bash" codeClass="long-code">
cd ~/robonomics_ws/src
git clone https://github.com/PaTara43/robonomics_sample_controller
cd robonomics_sample_controller
pip3 install -r requirements.txt
pip3 install rospkg
cd ..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3 # The controller supports python3
</LessonCodeWrapper>


------------

<br/>

### 3. 在DAPP中管理帐户
由于我们正在测试，让我们使用robonomics二进制文件在本地创建一个robonomics网络:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="运行ning node"/>


转到[Robonomics Parachain门户](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)并切换到本地节点 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


转到帐户并创建**CURIOSITY**和**EMPLOYER**帐户。

**重要**！复制每个帐户的地址（单击帐户图标即可复制地址）和Curiosity的帐户**助记词种子**（在创建帐户时获得）
向这些帐户转账一些资金（单位）。您可以在Robonomics [here](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)中阅读有关帐户的更多信息

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


在`robonomics_ws/src/robonomics_sample_controller/src`的`config.config`中添加这些地址、种子和节点地址（默认为`ws://127.0.0.1:9944`，用于开发节点）。不带引号。

------------

<br/>

### 4. 启动Robonomics

在继续之前，请确保您已安装[IPFS Companion Extension](https://github.com/ipfs/ipfs-companion)。

在单独的终端中启动IPFS:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #每次IPFS安装只需执行一次
ipfs daemon
</LessonCodeWrapper>

在另一个单独的终端中启动好奇号模拟（如果尚未启动）:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

等待直到它保持静止

在另一个终端中启动控制器:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

现在，您可以发送一个交易来触发Rover开始移动和收集数据。为此，您可以使用相同的[Robonomics Parachain portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/).
转到`Developer->Extrinsics`并选择Curiosity的雇主帐户，`launch`外部，Curiosity的帐户作为目标帐户，`yes`作为参数。
提交外部。

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

机器人应该开始移动。它不会接受来自其他帐户的命令，也不会接受带有`no`参数的命令。探测器将在周围移动并收集数据约一分钟。
稍后，当工作完成时:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


在Robonomics门户网站上转到`Developer -> Chain state`并使用“+”按钮获取`CURIOSITY`数据日志，选择`datalog -> RingBufferItem`作为查询: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


现在，遥测的IPFS哈希已保存在区块链中。要查看数据，只需复制哈希并在网关上查找:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


这些遥测数据保存在分散存储中，其哈希存储在区块链中！
