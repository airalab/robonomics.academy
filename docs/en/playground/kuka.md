---
title: Connect Kuka manipulator
description: Connect Manipulator
docId: 3
metaOptions: [Playground]
---

Video with an example of work can be found here:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## Requirements

<List>

<li class="flex">

ROS melodic, Gazebo (installation instraction [here](http://wiki.ros.org/melodic/Installation/Ubuntu))
</li>

<li>Some extra packages

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(download from [here](https://www.npackd.org/p/ipfs/0.4.22) and install)

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

Robonomics node (binary file) (download latest release [here](https://github.com/airalab/robonomics/releases))

</li>

<li>IPFS browser extension (not necessary)</li>

</List>

<br/>

***

<br/>

## Installation
Install Kuka manipulator and control packages

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## Running gazebo model

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

In a new window

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## Running robonomics
Go to the folder with robonomics file ad create a local robonomics network:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

Go to [Robonomics Parachain portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) and switch to local node

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

Then go to Accounts and create `KUKA` account. Save account's mnemonic key, you will need it later. 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

Send some units to the new account from one of default accounts.

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## Running ipfs
Run ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## Running control package
In config directory in kuka_control package you need to create config file with this lines, where `<your_mnemonic>` is saved mnemonic seed:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


Now you can run control script:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## Sending transaction
In [Robonomics Parachain portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) go to `Developer/Extrinsics`, change `extrinsic` to `launch`. Chose your `KUKA` account in `robot` and change `param` to `Yes`. The press `Submit Transaction`

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

In the window with kuka_control package you will see:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

Then go `Developer/Chain State` on the Robonomics portal, select `datalog` and `datalogItem((AccountId,u64)): RingBufferItem` in query and add `KUKA` datalog with button '+':

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

Now you can find robot's telemetry in IPFS via this link with your hash `https://gateway.ipfs.io/ipfs/<hash>`.

## Troubleshooting

If `catkin_make` doesn't work with the message that it can't find MoveArm.h, try to remove last four lines in CMakeLists.txt in kuka_manipulator_gazebo package:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

Do `catkin_make` without these lines, then returm them and do `catkin_make` again.