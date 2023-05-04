---
title: Connect ROS-compatible drone
description: Connect any ros compatible robot under robonomics parachain control.
metaOptions: [Learn]
defaultName: Connect ROS-compatible drone
---


## Part 1. Launch by Transaction

**In this article we will show that with the help of Robonomics tools you can control any ROS-compatible device. We will find a random drone simulation package on the web and adjust it to run with Robonomics.**
**Requirements:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (installation manual [here](http://wiki.ros.org/melodic/Installation))

</li>

<li class="flex">

Robonomics node (binary file) (download latest release [here](https://github.com/airalab/robonomics/releases))

</li>

</List>

<br/>

The entire process of coding this part of demo is presented in a video below.

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. Find a simulation
Let's surf the web. Google for `ROS drone simulator`. The first link will mostly likely show you the `tum_simulator` page on [http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

It's pretty outdated, so we better find a fork for our system. Google for `tum_simulator Ubuntu 18 Gazebo 9 fork`. The first result is a GitHub [repo](https://github.com/tahsinkose/sjtu-drone) with an appropriate package. Download it

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

Don’t forget to add source command to `~/.bashrc`:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

Now we can run the simulation to see what do we need to do to take the drone under parachain control.

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. Inspect ROS topics
When the simulation is runnung, in a new tab run the following command to see the list of topics used by the drone:

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

Let's take a look at `/cmd_vel`, `/drone/takeoff` and `/drone/land`:

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

As may be seen, there should be messages of `Twist` and `Empty` types, they are parts of `std_msgs` and `geometry_msgs`, we'll use this in the controller. Shut the simulation for a while.

## 3. Download controller package
Globally, the main difference from the casual ROS robot controller is a block of code, which checks all the transactions in the network using [Robonomics IO](https://wiki.robonomics.network/docs/rinterface/). The package itself is available on GitHub. Download it and build the workspace:

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. Manage accounts in DAPP
Since we are testing, let's create a local robonomics network node with robonomics binary file:

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Important!** Before next launches it is necessary to remove a directory `db` with

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

After a successful launch create accounts following [this](https://wiki.robonomics.network/docs/create-account-in-dapp/) manual. **Do not forget to save each account's seed and address! You will need them for transactions**. Add these addresses, seeds and path to robonomics binary file to file `config.config` in `robonomics_ws/src/robonomics_sample_controller/src`. Transfer some money (units) to these accounts:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. Launching the drone under parachain control

Up to now the **only thing running** should be the robonomics local node. In a separate terminal launch drone simulation:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

Run the script:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

Now you can send a transaction triggering the drone to start flying. To do so, you should use the Robonomics IO `write` subcommand of robonomics binary file:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Where `<DRONE_ADDRESS>`  and `<EMPLOYER’S_KEY>` are replaced with  previously saved strings accordingly.
You should see the log `"Taking Off"` and the drone should start flying:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

That's how any ROS-compatible robot can be controlled by Robonomics parachain control.


##  Part 2. Saving Data To Blockchain

**In this part we will continue using Robonomics tools to make a drone be controlled by a parachain. This time we will add sending data to IPFS and hash storing in chain options. Below is the instruction and code snippets. Requirements:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (installation manual [here](http://wiki.ros.org/melodic/Installation))
</li>

<li class="flex">

IPFS 0.4.22 (download from [here](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) and install)
</li>

<li class="flex">

Robonomics node (binary file) (download latest release [here](https://github.com/airalab/robonomics/releases))
</li>

<li>Python dependencies:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

The entire process of coding this part of demo is presented in a video below.

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. Add dependencies
If we launch a simulation and look at the topic list (see part 1), we will see, that there is one topic containing front camera data and using `sensor_msgs/Image` message type:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

Let's try to take a picture every 1 second and after the flight publish these photos to IPFS. If you have completed the first tutorial, you don't need to download anything else. It's the `drone_sample_controller_pictures.py` script.

## 2. Manage accounts in DAPP
As done in a previous tutorial, create a local robonomics network node with robonomics binary file:
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**Important!** Before next launches it is necessary to remove a directory `db` with

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

After a successful launch create accounts following [this](https://wiki.robonomics.network/docs/create-account-in-dapp/) manual. **Do not forget to save each account's seed and address! You will need them for transactions**. Add these addresses, seeds and path to robonomics binary file to file `config.config` in `robonomics_ws/src/robonomics_sample_controller/src`. Transfer some money (units) to these accounts:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. Launch
Up to now the **only thing running** should be the robonomics local node. In a separate terminal launch drone simulation:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

In another one launch ipfs daemon:
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Run the script:
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

Now you can send a transaction triggering the drone to start flying and taking pictures. To do so, you should use the Robonomics IO `write` subcommand of robonomics binary file:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

Where `<DRONE_ADDRESS>`  and `<EMPLOYER’S_KEY>` are replaced with  previously saved strings accordingly.
You should see the log `"Taking Off"` and the drone should start flying and taking pictures:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

Later, when the job is done, on the Robonomics portal go to `Developer` -> `Chain state` and add a `DRONE` datalog using `“+”` button with selected `datalog` as state query. The IPFS hash of the telemetry has been saved in the blockchain. To see the data simply copy the hash and add it to the local [gateway](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) address `localhost:8080/ipfs/`:


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>