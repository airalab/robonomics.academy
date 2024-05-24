---
title: 控制 Baxter 机器人
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: 控制 Baxter 机器人
metaOptions: [学习]
defaultName: Control Baxter robot
---
其工作原理示例：

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## 要求:

<List>

<li class="flex">

ROS Melodic + Gazebo (安装手册[这里][db2])  

</li>

<li>额外的软件包:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-eff或t-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS 高达 0.6.0 (从[这里][db3]下载并安装)

</li>

<li> Python 软件包:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics 节点下载最新的[发布][db4]在这里(上次测试的发布版本为 v1.1)

</li>

<li>IPFS 浏览器扩展(不是必需的)</li>

</List>

<br/>

## 0.安装python3的CV Bridge扩展

<List>

<li> 创建 catkin 工作空间

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> 指导 catkin 设置 cmake 变量。使用您当前的 `python` 版本。对我来说，它是 `python3.6`

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> 克隆 cv_bridge 源码:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> 在您的存储库中找到 cv_bridge 的版本:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> 在 git 存储库中检出正确的版本。在我们的情况下，它是 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> 构建:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> 用新软件包扩展环境:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> 测试:

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

## 1. 下载模拟和控制器软件包
下载软件包:

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

不要忘记添加源命令:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. 启动模拟
让我们启动 gazebo 世界并把我们的 baxter 放进去:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

在终端中打开一个新窗口:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

您可以在我们的 baxter 前面放一些模型。这将更有趣。

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. 在 DAPP 中管理账户

由于我们正在测试，让我们使用 robonomics 二进制文件创建一个本地 robonomics 网络。转到带有 robonomics 文件的文件夹并运行:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

转到[Robonomics Parachain 门户][db5]并切换到本地节点

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

转到账户并创建 __Baxter__ 和 __雇主__ 账户(__机器人__ 不是必需的)

__重要!__ 复制每个账户的 **助记词** 和 **地址** (要复制地址，请点击账户图标)。**助记词** 是账户的私钥。
向这些账户转账一些货币(单位):

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

将 Baxter 的 **助记词** 和 **地址** 添加到 `robot_ws/src/Baxter_simulation_controller/config/` 中的 `config.yaml`

## 4. 启动模拟

在新窗口中运行:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

打开单独的终端并启动 *控制器软件包*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

现在您可以发送一个交易来触发 Baxter 开始移动和收集数据。为此，您可以使用相同的[Robonomics Parachain 门户][db5]。转到 **Developer->Extrinsics** 并选择 Baxter 的雇主账户，`launch` extrinsic，Baxter 的账户作为目标账户，`yes` 作为参数。提交 extrinsic。


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

机器人应该开始移动。它不会接受来自其他账户的命令，也不会接受带有 `no` 参数的命令。
您应该看到以下内容:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

工作结束后，转到 Robonomics 门户的 `Developer > Chain state`。在 **state query** 中选择 `datalog.datalogItem(AccountId,u64)`。如果要显示所有 datalog，请关闭 `include option` 并使用 "+" 按钮查看 Baxter 的 datalog 消息。

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

现在遥测和照片的 IPFS 哈希已保存在区块链中。要查看数据只需复制哈希并将其插入到 URL 为：gateway.ipfs.io/ipfs/<br 放入您的哈希 > 的搜索栏中

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

点击 __在网关上查看__，就这样!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Baxter 模拟 v2.0

它是如何工作的示例:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## 要求:

<List>

<li class="flex">


ROS Melodic + Gazebo (安装手册[这里][db2])  

</li>

<li>额外的软件包:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS 高达 0.6.0 (从[这里][db3]下载并安装)

</li>

<li> Python 软件包:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics 节点(二进制文件)(在这里下载最新的[发布][db4])

</li>

<li class="flex">

在 **Robonomics 门户** 上创建 __Baxter__ 和 __雇主__ 账户(您可以在这里找到教程["在 Robonomics 门户上创建账户"][db8])。
</li>

<li>IPFS 浏览器扩展(不是必需的)</li>

</List>

<br/>

## 0. 安装用于 python3 的 CV Bridge 扩展

<List>

<li> 创建 catkin 工作空间

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> 指导 catkin 设置 cmake 变量。使用您当前的 `python` 版本。对我来说，它是 `python3.6`

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> 克隆 cv_bridge 源码:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> 在您的存储库中找到 cv_bridge 的版本:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> 在 git 存储库中检出正确的版本。在我们的情况下，它是 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> 构建:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> 用新软件包扩展环境:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> 测试:

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

## 1. 下载模拟和控制器软件包
我们需要创建 2 个工作空间 - 一个用于主要的 Baxter 软件包，另一个用于主要的控制程序。
第一个工作空间。这是主要的控制程序。它将在 python3 下运行。

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

第二个工作空间。那里有所有 Baxter 的软件包。模拟非常古老，所以它只能在 python2 下运行。

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

这些软件包是为 ROS indigo 创建的。我们必须更改一些文件才能在 ROS melodic 上运行它们。
我们将使用 **patch** 文件。

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

让我们构建所有我们的软件包：  
首先构建 Baxter 的软件包

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

然后返回到第一个工作空间并构建它:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

不要忘记添加源命令:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. 启动模拟
### 让我们开始我们的模拟:
首先转到 `robot_ws` 并复制并编辑 baxter.sh

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

使用命令找到您的本地 IP 地址:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

编辑 `baxter.sh` 中的以下值:

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- your_ip - 输入您的本地 IP 地址。查看 `ip a`
- ros_version - 例如 "melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

运行带有 sim 指定 baxter shell 脚本:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

您可以在我们的 baxter 前面放一些模型。这将更有趣。

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. 在 DAPP 中管理账户

由于我们正在测试，让我们使用 robonomics 二进制文件创建一个本地 robonomics 网络。转到带有 robonomics 文件的文件夹并运行:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

转到[Robonomics Parachain 门户][db5]并切换到本地节点

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

转到账户并创建 __Baxter__ 和 __雇主__ 账户。

您可以在这里找到手册"在 Robonomics 门户上创建账户"[这里][db8]

__重要!__ 复制每个账户的 **助记词** 和 **地址** (要复制地址，请点击账户图标)。**助记词** 是账户的私钥。

向这些账户转账一些货币(单位):

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

将Baxter的**助记词**和**地址**添加到`robonomics_ws/src/Baxter_simulation_controller/config/`中的`config.yaml`中

## 4. 启动模拟

在新窗口中运行:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

打开单独的终端并启动 *控制器软件包*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

现在您可以发送一个交易来触发Baxter开始移动和收集数据。要这样做，您可以使用相同的门户[Robonomics Parachain门户][db5]。转到**开发人员->外部函数**，选择Baxter的雇主账户，`launch`外部函数，Baxter的账户作为目标账户，`yes`作为参数。提交外部函数。


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

机器人应该开始移动。它不会接受来自其他账户的命令，也不会接受带有 `no` 参数的命令。
您应该看到以下内容:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

工作结束后，转到Robonomics门户的`开发人员>链状态`。在**状态查询**中选择`datalog.datalogItem(AccountId,u64)`。如果要显示所有datalog，请关闭`包括选项`，然后使用“+”按钮查看Baxter的datalog消息。

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

现在遥测和照片的IPFS哈希已保存在区块链中。要查看数据，只需复制哈希并将其插入搜索栏中的URL：  
#### gateway.ipfs.io/ipfs/<在此处放置您的哈希>

就这些了！

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/安装>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>