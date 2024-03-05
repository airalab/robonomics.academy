---
title: 무인 항공기 연결
lastUpdate: Thu May 04 2023 12:53:05 GMT+0400 (Samara Standard Time)
description: 무인 항공기 연결
metaOptions: [배우다]
defaultName: 연결 unmanned aerial vehicle
---

**트랜잭션 후 드론이 이동을 시작하고 좌표와 함께 파일을 IPFS에 저장합니다. 제어 스크립트는 [GAAS 데모 스크립트](https://github.com/generalized-intelligence/GAAS)를 기반으로 합니다**  

https://youtu.be/4CwtGAX1OwM

<br/>

## 요구 사항

<List>

<li> 제어를 위한 종속성:

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

ROS Melodic + Gazebo [설치 튜토리얼](http://wiki.ros.org/melodic/설치)
</li>

<li>추가 패키지:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
sudo apt-get install python-jinja2
sudo apt-get install python-catkin-pkg
sudo apt-get install python3-catkin-pkg-modules
</LessonCodeWrapper>

</li>

<li>IPFS 버전 0.4.22

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

Robonomics 노드 (바이너리 파일) (최신 릴리스 다운로드 [여기](https://github.com/airalab/robonomics/releases))
</li>

</List>

<br/>

## 환경 설정

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

`.bashrc` 파일 수정하여 다음 라인을 맨 아래에 추가하십시오:  

<LessonCodeWrapper language="json" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash   
source ~/catkin_ws/src/Firmware/Tools/setup_gazebo.bash ~/catkin_ws/src/Firmware/ ~/catkin_ws/src/Firmware/build posix_sitl_default 
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware 
export ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:~/catkin_ws/src/Firmware/Tools/sitl_gazebo
export GAZEBO_MODEL_PATH=:~/catkin_ws/src/simulator/models:~/catkin_ws/src/GAAS/simulator/models
</LessonCodeWrapper>  

  
## 제어 패키지 설치
새 터미널에서:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd catkin_ws/src
git clone https://github.com/tubleronchik/robonomics_drone_sim.git
cd ..
catkin build
</LessonCodeWrapper>

## Robonomics 네트워크

로컬 robonomics 네트워크를 만들려면 robonomic 바이너리 파일이 있는 폴더로 이동하여 다음을 실행하십시오:  

<LessonCodeWrapper language="bash">
./robonomics --dev --rpc-cors all
</LessonCodeWrapper>

`config.py`에 robonomics 경로 추가

<LessonImages imageClasses="mb" src="iris-drone/IPFS.jpg" alt="IPFS"/>

[Robonomics Parachain 포털](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)로 이동하여 로컬 노드로 전환하십시오.

<LessonImages imageClasses="mb" src="iris-drone/localNode.jpg" alt="localNode"/>

**계정**으로 이동하여 **DRONE** 및 **EMPLOYER** 계정을 생성하십시오. 계정 이름과 키 및 **robonomics** 경로를 `~/catkin_ws/src/drone_sim/src/config.py`에 저장하십시오. 계정에 일정 금액을 이체하십시오.

<LessonImages imageClasses="mb" src="iris-drone/addingAcc.jpg" alt="accounts"/>

## 시뮬레이션 실행
IPFS 데몬 실행

<LessonCodeWrapper language="bash">
cd go-ipfs
ipfs daemon
</LessonCodeWrapper>

다른 터미널에서 시뮬레이션 시작:

<LessonCodeWrapper language="bash">
roslaunch px4 mavros_posix_sitl.launch
cd ~/catkin_ws/src/robonomics_drone_sim/src
python3 takeoff.py
</LessonCodeWrapper>

"결제 대기 중"까지 기다리기 

<LessonImages imageClasses="mb" src="iris-drone/launch.jpg" alt="launch"/>

트랜잭션을 보내려면 다른 창에서 다음을 실행하십시오:
`echo "ON" | ./robonomics io write launch -r <drone_addres> -s <employer_key>` - 여기서 **<drone_address>**와 **<employer_key>**는 `config.py`의 문자열로 대체되어야 합니다.

데이터가 IPFS로 전송된 후 [Robonomics Parachain 포털](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/)의 **Chain State**로 이동하십시오. 쿼리에서 **datalog**을 선택하고 `+` 버튼을 사용하여 DRONE 데이터로그를 추가하십시오.


<LessonImages imageClasses="mb" src="iris-drone/datalog.jpg" alt="datalog"/>

위의 해시를 삽입하여 드론의 텔레메트리를 찾을 수 있습니다: `https://gateway.ipfs.io/ipfs/<hash>`

<LessonImages imageClasses="mb" src="iris-drone/output.jpg" alt="output"/>

다음 발사 시 `db` 디렉토리를 제거하는 것이 중요합니다  
` rm -rf ~/.local/share/robonomics/chains/dev/db`