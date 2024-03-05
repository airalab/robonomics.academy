---
title: 连接ROS兼容的无人机
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: 将任何兼容Robonomics空投链控制的ROS兼容机器人连接起来。
metaOptions: [学习]
defaultName: 连接ROS兼容的无人机
---


## 第1部分。通过交易启动

**在本文中，我们将展示如何借助Robonomics工具控制任何ROS兼容设备。我们将在网络上找到一个随机的无人机模拟包，并调整它以与Robonomics一起运行。**
**要求:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz（安装手册[在这里](http://wiki.ros.org/melodic/安装)）

</li>

<li class="flex">

Robonomics节点（二进制文件）（下载最新版本[在这里](https://github.com/airalab/robonomics/releases)）

</li>

</List>

<br/>

编码此演示部分的整个过程在下面的视频中呈现。

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. 找到一个模拟
让我们上网搜索。在Google上搜索`ROS无人机模拟器`。第一个链接很可能会显示` tum_simulator`页面，网址为[http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

它相当过时，所以我们最好为我们的系统找到一个分支。在Google上搜索`tum_simulator Ubuntu 18 Gazebo 9 fork`。第一个结果是一个GitHub [repo](https://github.com/tahsinkose/sjtu-drone)，其中包含一个合适的软件包。下载它

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

不要忘记将源命令添加到`~/.bashrc`中：

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

现在我们可以运行模拟以查看我们需要做什么来将无人机置于空投链控制之下。

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. 检查ROS主题
当模拟正在运行时，在新标签页中运行以下命令以查看无人机使用的主题列表：

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

让我们看看`/cmd_vel`，`/drone/takeoff`和`/drone/land`：

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

可以看到，应该有`Twist`和`Empty`类型的消息，它们是`std_msgs`和`geometry_msgs`的一部分，我们将在控制器中使用这些。暂时关闭模拟。

## 3. 下载控制器软件包
从全局来看，与普通的ROS机器人控制器的主要区别是一段代码块，它使用[Robonomics IO](https://wiki.robonomics.network/docs/rinterface/)检查网络中的所有交易。软件包本身在GitHub上可用。下载并构建工作空间：

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. 在DAPP中管理帐户
由于我们正在测试，让我们使用robonomics二进制文件创建一个本地robonomics网络节点：

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**重要！**在下次启动之前，必须删除带有`db`的目录

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

成功启动后，按照[此](https://wiki.robonomics.network/docs/create-account-in-dapp/)手册创建帐户。**不要忘记保存每个帐户的种子和地址！您将需要它们进行交易**。将这些地址、种子和路径添加到`robonomics_ws/src/robonomics_sample_controller/src`目录中的`config.config`文件中的robonomics二进制文件。向这些帐户转账（单位）：

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. 启动无人机在空投链控制下

到目前为止，**唯一正在运行的**应该是robonomics本地节点。在单独的终端中启动无人机模拟：

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

运行脚本：

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

现在您可以发送一个交易，触发无人机开始飞行。为此，您应该使用robonomics二进制文件的Robonomics IO `write`子命令：

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

其中`<DRONE_ADDRESS>`和`<EMPLOYER’S_KEY>`应相应地替换为先前保存的字符串。
您应该看到日志`"Taking Off"`，无人机应该开始飞行：

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

这就是任何ROS兼容机器人如何通过Robonomics空投链控制。


##  第2部分。将数据保存到区块链

**在本部分中，我们将继续使用Robonomics工具，使无人机受到空投链的控制。这次我们将添加将数据发送到IPFS并在链上存储哈希的选项。以下是说明和代码片段。要求:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz（安装手册[在这里](http://wiki.ros.org/melodic/安装)）
</li>

<li class="flex">

IPFS 0.4.22（从[这里](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz)下载并安装）
</li>

<li class="flex">

Robonomics节点（二进制文件）（下载最新版本[在这里](https://github.com/airalab/robonomics/releases)）
</li>

<li>Python依赖项：
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

编码此演示部分的整个过程在下面的视频中呈现。

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. 添加依赖项
如果我们启动模拟并查看主题列表（请参阅第1部分），我们将看到有一个主题包含前置摄像头数据，并使用`sensor_msgs/Image`消息类型：

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

让我们尝试每1秒拍摄一张照片，在飞行后将这些照片发布到IPFS。如果您已经完成了第一个教程，就不需要再下载其他内容了。这是`drone_sample_controller_pictures.py`脚本。

## 2. 在DAPP中管理账户
如在之前的教程中所做的那样，使用robonomics二进制文件创建一个本地的robonomics网络节点：
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**重要！**在下次启动之前，必须删除带有`db`的目录

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

成功启动后，按照[此](https://wiki.robonomics.network/docs/create-account-in-dapp/)手册创建帐户。**不要忘记保存每个帐户的种子和地址！您将需要它们进行交易**。将这些地址、种子和路径添加到`robonomics_ws/src/robonomics_sample_controller/src`目录中的`config.config`文件中的robonomics二进制文件。向这些帐户转账（单位）：

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. 启动
到目前为止，**唯一正在运行的**应该是robonomics本地节点。在单独的终端中启动无人机模拟：

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

在另一个窗口启动ipfs守护进程：
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

运行脚本：
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

现在您可以发送一个交易来触发无人机开始飞行并拍照。为此，您应该使用robonomics二进制文件的Robonomics IO `write`子命令：

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

其中`<DRONE_ADDRESS>`和`<EMPLOYER’S_KEY>`应相应地替换为先前保存的字符串。
您应该看到日志`"Taking Off"`，无人机应该开始飞行并拍照：

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

稍后，当任务完成时，在Robonomics门户网站中转到`Developer` -> `Chain state`，并使用选定的`datalog`作为状态查询，通过`“+”`按钮添加一个`DRONE`数据日志。遥测的IPFS哈希已保存在区块链中。要查看数据，只需复制哈希并将其添加到本地[网关](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/)地址`localhost:8080/ipfs/`：


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>