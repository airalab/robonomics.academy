---
title: Connect Mars Curiosity Rover
description: Connect Mars Curiosity rover under Robonomics parachain control.
docId: 1
metaOptions: [Playground]
---

**Let's see how Robonomics Parachain control allows to make Mars Curiosity rover move. Requirements:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz (installation manual [here](http://wiki.ros.org/melodic/Installation))

</li>


<li>extra packages:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS up to [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[IPFS Companion Extension](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

Robonomics node (binary file) (download latest release [here](https://github.com/airalab/robonomics/releases). This tutorial tested fine on v1.1)

</li>

</List>

<br/>

Here is the video showing successful launch:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. Set up a simulation

Download Curiosity rover package:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

We need to adjust starting conditions to make our rover spawn smoothly:

<List>

<li>Go to

`src/master/curiosity_mars_rover_description/worlds` and change line 14 of the file` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>Go to

`src/master/curiosity_mars_rover_description/launch` and change line 4 of the file  `mars_curiosity_world.launch` to 
`<arg name="paused" default="false"/>`

Don't forget to add source command to `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> Reboot console and launch the simulation:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

Note: if the image is dark, e.g. shadowed, change `Camera` to `Orthorgraphic` in Gazebo toolbar.
The simulation can be closed for a while.

------------

<br/>

### 2. Download Robonomics controller package
To download a controller package for Rover type in terminal:

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

### 3. Manage accounts in DAPP
Since we are testing, let us create a local robonomics network with robonomics binary file:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="Running node"/>


Go to [Robonomics Parachain portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) and switch to local node 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


Go to Accounts and create **CURIOSITY** and **EMPLOYER** accounts.

**Important**! Copy each account's address (to copy address click on account's icon) and Curiosity's account **mnemonic seed** (obtained while creating the account)
Transfer some money (units) to these accounts. You can read more about accounts in Robonomics [here](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


Add these addresses, seed and node address (defaults to `ws://127.0.0.1:9944` for developer node) in `config.config` in `robonomics_ws/src/robonomics_sample_controller/src`. No quotes.

------------

<br/>

### 4. Start Robonomics

Before going further, make sure that you have installed [IPFS Companion Extension](https://github.com/ipfs/ipfs-companion).

In a separate terminal launch IPFS:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #you only need to do this once per IPFS installation
ipfs daemon
</LessonCodeWrapper>

In another separate terminal launch Curiosity simulation if it's not live:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

Wait till it stays still

In another terminal launch the controller:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

Now you can send a transaction triggering the Rover to start moving and collecting data. To do so, you can use the same [Robonomics Parachain portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/).
Go to `Developer->Extrinsics` and select Curiosity's employer account, `launch` extrinsic, Curiosity's account as a target account and `yes` as a parameter.
Submit the extrinsic.

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

The robot should start moving. It won't accept commands from other accounts neither commands with `no` parameter. The rover will move around and collect data for about a minute.
Later, when the job is done:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


On the Robonomics portal go to `Developer -> Chain state` and obtain a `CURIOSITY` datalog using “+” button with selected `datalog -> RingBufferItem` as query: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


Now the IPFS hash of the telemetry is saved in the blockchain. To see the data simply copy the hash and find it on a gateway:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


This telemetry is kept in a decentralized storage, and it's hash is stored in a blockchain!
