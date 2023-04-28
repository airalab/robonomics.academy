---
title: Control Baxter robot
description: Control Baxter robot
courseID: 555
metaOptions: [Learn]
defaultName: Control Baxter robot
---
Example of how it works:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## Requirements:

<List>

<li class="flex">

ROS Melodic + Gazebo (installation manual [here][db2])  

</li>

<li>extra packages:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS up to 0.6.0 (download from [here][db3] and install)

</li>

<li> python packages:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics node download latest [release][db4] here (last tested release v1.1)

</li>

<li>IPFS browser extension (not necessary)</li>

</List>

<br/>

## 0. install CV Bridge extension for python3

<List>

<li> Create catkin workspace

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Instruct catkin to set cmake variables. Use your current version of `python`. For me, it is `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Clone cv_bridge src:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Find version of cv_bridge in your repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Checkout right version in git repo. In our case it is 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Build:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Extend environment with new package:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Test:

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

## 1. Download simulation and controller packages
Download packages:

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

Don't forget to add source command:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Start simulation
Let's start gazebo world and put our baxter in it:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

Open one more window in terminal:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

You can put some models in front of our baxter. It will be more interesting.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3.Manage accounts in DAPP

Since we are testing, let us create a local robonomics network with robonomics binary file. Go to folder with robonomics file and run:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Go to [Robonomics Parachain portal][db5] and switch to local node

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Go to Accounts and create __Baxter__ and __Employer__ accounts (__Robot__ is not necessary)

__Important!__ Copy each account's **Mnemonic** and **address** (to copy address click on account's icon). **Mnemonic** is the private key for account.
Transfer some money (units) to these accounts:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Add Baxter's **Mnemonic** and **address** to `config.yaml` in `robot_ws/src/Baxter_simulation_controller/config/`

## 4.Start simulation

In new window run:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Open separate terminal and start *controller package*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Now you can send a transaction triggering the Baxter to start moving and collecting data. To do so, you can use the same [Robonomics Parachain portal][db5]. Go to **Developer->Extrinsics** and select Baxter's employer account, `launch` extrinsic, Baxter's account as a target account and `yes` as a parameter. Submit the extrinsic.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

The robot should start moving. It won't accept commands from other accounts neither commands with `no` parameter.
You should see the following:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

when the work is over go to the Robonomics Portal to `Developer > Chain state`. Choose `datalog.datalogItem(AccountId,u64)` in **state query**.If you want to show all datalog's, then turn off `include option` add view Baxter's datalog message using "+" button.

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Now the IPFS hash of the telemetry and photos is saved in the blockchain. To see the data simply copy the hash and insert it in the search bar with URL: gateway.ipfs.io/ipfs/<br put your hash here >

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

Click  __View on Gateway__ and that's all!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Baxter simulation v2.0

Example of how it works:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## Requirements:

<List>

<li class="flex">


ROS Melodic + Gazebo (installation manual [here][db2])  

</li>

<li>extra packages:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS up to 0.6.0 (download from [here][db3] and install)

</li>

<li> python packages:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Robonomics node (binary file) (download latest [release][db4] here)

</li>

<li class="flex">

Create __Baxter__ and __Employer__ accounts  on **Robonomics Portal** (you can find tutorial ["Create an Account on Robonomics Portal"][db8] here).
</li>

<li>IPFS browser extension (not necessary)</li>

</List>

<br/>

## 0. install CV Bridge extension for python3

<List>

<li> Create catkin workspace

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Instruct catkin to set cmake variables. Use your current version of `python`. For me, it is `python3.6`:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Clone cv_bridge src:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Find version of cv_bridge in your repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Checkout right version in git repo. In our case it is 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Build:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Extend environment with new package:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Test:

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

## 1. Download simulation and controller packages
We will need to create 2 workspaces - one for main Baxter's packages and other for main control programme.
First workspace. It's main control programme. It will run under python3.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

Second workspace. There will be all Baxter's packages. Simulation is very old, so it could run only under python2.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

These packages were created for ROS indigo. We have to change some files to run them on ROS melodic.
We will use **patch** files.

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

And let's build  all our packages:  
First build Baxter's packages

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

Then return to first workspace and build it too:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

Don't forget to add source command:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Start simulation
### Let's start our simulation:
At first go to `robot_ws` and copy and edit baxter.sh

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

Find your local ip address with command:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

Edit the following values in `baxter.sh` :

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- your_ip - put your local ip address. See `ip a`
- ros_version - for example "melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

Run the baxter shell script with sim specified:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

You can put some models in front of our baxter. It will be more interesting.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3.Manage accounts in DAPP

Since we are testing, let us create a local robonomics network with robonomics binary file. Go to folder with robonomics file and run:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Go to [Robonomics Parachain portal][db5] and switch to local node

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Go to Accounts and create __Baxter__ and __Employer__ accounts.

You can find The manual "Create an Account on Robonomics Portal" [here][db8]

__Important!__ Copy each account's **Mnemonic** and **address** (to copy address click on account's icon). **Mnemonic** is the private key for account.

Transfer some money (units) to these accounts:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Add Baxter's **Mnemonic** and **address** to `config.yaml` in `robonomics_ws/src/Baxter_simulation_controller/config/`

## 4.Start simulation

In new window run:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Open separate terminal and start *controller package*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Now you can send a transaction triggering the Baxter to start moving and collecting data. To do so, you can use the same portal [Robonomics Parachain portal][db5]. Go to **Developer->Extrinsics** and select Baxter's employer account, `launch` extrinsic, Baxter's account as a target account and `yes` as a parameter. Submit the extrinsic.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

The robot should start moving. It won't accept commands from other accounts neither commands with `no` parameter.
You should see the following:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

When the work is over go to the Robonomics Portal to `Developer > Chain state`. Choose `datalog.datalogItem(AccountId,u64)` in **state query**.If you want to show all datalog's, then turn off `include option` add view Baxter's datalog message using "+" button.

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Now the IPFS hash of the telemetry and photos is saved in the blockchain. To see the data simply copy the hash and insert it in the search bar with URL:  
#### gateway.ipfs.io/ipfs/< put your hash here>

That's all!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/Installation>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>