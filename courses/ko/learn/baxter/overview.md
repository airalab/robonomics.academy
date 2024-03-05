---
title: 백스터 로봇 제어
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: 백스터 로봇 제어
metaOptions: [학습]
defaultName: Control Baxter robot
---
작동 방식의 예:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## 요구 사항:

<List>

<li class="flex">

ROS Melodic + Gazebo (설치 매뉴얼 [여기][db2])  

</li>

<li>추가 패키지:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-eff또는t-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS 최대 0.6.0 (여기서 다운로드 [db3] 및 설치)

</li>

<li> 파이썬 패키지:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

로보노믹스 노드 최신 [릴리스][db4] 다운로드 (최근 테스트된 릴리스 v1.1)

</li>

<li>IPFS 브라우저 확장 프로그램 (필수 아님)</li>

</List>

<br/>

## 0. Python3용 CV 브리지 확장 설치

<List>

<li> catkin 워크스페이스 생성

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> catkin에 cmake 변수 설정 지시. 현재 버전의 `python`을 사용하십시오. 제 경우에는 `python3.6`입니다:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> cv_bridge 소스 복제:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> 저장소에서 cv_bridge 버전 찾기:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> git 저장소에서 올바른 버전 확인. 우리의 경우에는 1.12.8입니다:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> 빌드:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> 새 패키지로 환경 확장:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> 테스트:

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

## 1. 시뮬레이션 및 컨트롤러 패키지 다운로드
패키지 다운로드:

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

source 명령어를 추가하는 것을 잊지 마십시오:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. 시뮬레이션 시작
가제보 월드를 시작하고 백스터를 넣어봅시다:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

터미널에서 하나 더 열어봅시다:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

백스터 앞에 몇 가지 모델을 놓을 수 있습니다. 더 흥미로울 것입니다.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. DAPP에서 계정 관리

테스트 중이므로 로컬 로보노믹스 네트워크��� robonomics 이진 파일로 생성합시다. robonomics 파일이 있는 폴더로 이동하여 다음을 실행하십시오:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

[로보노믹스 파라체인 포털][db5]로 이동하여 로컬 노드로 전환

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

계정으로 이동하여 __백스터__ 및 __고용주__ 계정을 생성하십시오 (__로봇__은 필요하지 않습니다)

__중요!__ 각 계정의 **니모닉** 및 **주소**를 복사하십시오 (**주소**를 복사하려면 계정 아이콘을 클릭하십시오). **니모닉**은 계정의 개인 키입니다.
이 계정에 일부 돈(단위)을 이체하십시오:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

백스터의 **니모닉** 및 **주소**를 `robot_ws/src/Baxter_simulation_controller/config/`의 `config.yaml`에 추가하십시오

## 4. 시뮬레이션 시작

새 창에서 다음을 실행하십시오:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

별도의 터미널을 열고 *컨트롤러 패키지*를 시작하십시오:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

이제 백스터가 움직이고 데이터를 수집하기 시작하는 트랜잭션을 보낼 수 있습니다. 이를 위해 동일한 [로보노믹스 파라체인 포털][db5]을 사용할 수 있습니다. **개발자->Extrinsics**로 이동하여 백스터의 고용주 계정을 선택하고 `launch` extrinsic, 백스터의 계정을 대상 계정으로 선택하고 매개 변수로 `yes`를 선택하십시오. Extrinsic을 제출하십시오.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

로봇은 움직이기 시작해야 합니다. 다른 계정에서의 명령 또는 `no` 매개 변수가 있는 명령을 수락하지 않을 것입니다.
다음이 표시되어야 합니다:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

작업이 끝나면 로보노믹스 포털로 이동하여 `개발자 > 체인 상태`로 이동하십시오. **상태 쿼리**에서 `datalog.datalogItem(AccountId,u64)`를 선택하십시오. 모든 데이터로그를 표시하려면 `include 옵션`을 끄고 "+" 버튼을 사용하여 백스터의 데이터로그 메시지를 볼 수 있습니다.

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

이제 텔레메트리 및 사진의 IPFS 해시가 블록체인에 저장되었습니다. 데이터를 보려면 해시를 복사하여 URL에 삽입하십시오: gateway.ipfs.io/ipfs/<br 여기에 해시를 입력하십시오 >

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

__게이트웨이에서 보기__를 클릭하면 됩니다!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## 백스터 시뮬레이션 v2.0

작동 방식 예시:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## 요구 사항:

<List>

<li class="flex">


ROS Melodic + Gazebo (설치 매뉴얼 [여기][db2])  

</li>

<li>추가 패키지:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS 최대 0.6.0 (여기서 다운로드 [db3] 및 설치)

</li>

<li> 파이썬 패키지:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

로보노믹스 노드 (이진 파일) (최신 [릴리스][db4] 다운로드)

</li>

<li class="flex">

**로보노믹스 포털**에서 __백스터__ 및 __고용주__ 계정 생성 (튜토리얼 ["로보노믹스 포털에서 계정 생성하기"][db8] 여기에서 찾을 수 있음).
</li>

<li>IPFS 브라우저 확장 프로그램 (필수 아님)</li>

</List>

<br/>

## 0. python3용 CV Bridge 확장 설치

<List>

<li> catkin 워크스페이스 생성

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> catkin에 cmake 변수 설정 지시. 현재 버전의 `python`을 사용하십시오. 제 경우에는 `python3.6`입니다:

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> cv_bridge 소스 복제:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> 저장소에서 cv_bridge 버전 찾기:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> git 저장소에서 올바른 버전 확인. 우리의 경우에는 1.12.8입니다:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> 빌드:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> 새 패키지로 환경 확장:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> 테스트:

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

## 1. 시뮬레이션 및 컨트롤러 패키지 다운로드
주요 백스터 패키지와 주요 제어 프로그램을 위한 2개의 워크스페이스를 생성해야 합니다.
첫 번��� 워크스페이스. 주요 제어 프로그램입니다. python3에서 실행됩니다.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

두 번째 워크스페이스. 모든 백스터 패키지가 포함될 것입니다. 시뮬레이션이 매우 오래되어 python2에서만 실행될 수 있습니다.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

이 패키지들은 ROS indigo용으로 만들어졌습니다. ROS melodic에서 실행하려면 일부 파일을 수정해야 합니다.
**패치** 파일을 사용할 것입니다.

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

그리고 우리 모든 패키지를 빌드합시다:  
먼저 백스터 패키지를 빌드하십시오

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

그런 다음 첫 번째 워크스페이스로 돌아가서 빌드하십시오:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

source 명령어를 추가하는 것을 잊지 마십시오:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. 시뮬레이션 시작
### 시뮬레이션을 시작해봅시다:
먼저 `robot_ws`로 이동하여 baxter.sh를 복사하고 편집하십시오

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

명령어로 로컬 IP 주소를 찾으십시오:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

`baxter.sh`에서 다음 값을 편집하십시오:

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- your_ip - 로컬 IP 주소를 입력하십시오. `ip a`를 참조하십시오
- ros_version - 예를 들어 "melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

sim을 지정하여 baxter 쉘 스크립트를 실행하십시오:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

백스터 앞에 몇 가지 모델을 놓을 수 있습니다. 더 흥미로울 것입니다.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. DAPP에서 계정 관리

테스트 중이므로 로컬 로보노믹스 네트워크��� robonomics 이진 파일로 생성합시다. robonomics 파일이 있는 폴더로 이동하여 다음을 실행하십시오:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

[로보노믹스 파라체인 포털][db5]로 이동하여 로컬 노드로 전환

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

계정으로 이동하여 __백스터__ 및 __고용주__ 계정을 생성하십시오.

"로보노믹스 포털에서 계정 생성하기" 매뉴얼은 [여기][db8]에서 찾을 수 있습니다

__중요!__ 각 계정의 **니모닉** 및 **주소**를 복사하십시오 (**주소**를 복사하려면 계정 아이콘을 클릭하십시오). **니모닉**은 계정의 개인 키입니다.

이 계정에 일부 돈(단위)을 이체하십시오:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

`config.yaml` 파일의 `robonomics_ws/src/Baxter_simulation_controller/config/`에 Baxter의 **기억 코드**와 **주소**를 추가하십시오.

## 4. 시뮬레이션 시작

새 창에서 다음을 실행하십시오:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

별도의 터미널을 열고 *컨트롤러 패키지*를 시작하십시오:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

이제 Baxter가 움직이고 데이터를 수집하기 시작하는 트랜잭션을 보낼 수 있습니다. 이를 위해 동일한 포털 [Robonomics Parachain portal][db5]을 사용할 수 있습니다. **개발자->Extrinsics**로 이동하고 Baxter의 고용주 계정을 선택하고, `launch` extrinsic, Baxter의 계정을 대상 계정으로 선택하고 매개 변수로 `yes`를 입력하십시오. Extrinsics를 제출하십시오.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

로봇은 움직이기 시작해야 합니다. 다른 계정에서의 명령 또는 `no` 매개 변수가 있는 명령을 수락하지 않을 것입니다.
다음이 표시되어야 합니다:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

작업이 끝나면 Robonomics 포턈로 이동하여 `개발자 > Chain state`를 선택하십시오. **state query**에서 `datalog.datalogItem(AccountId,u64)`를 선택하십시오. 모든 datalog를 표시하려면 `include option`을 끄고 "+" 버튼을 사용하여 Baxter의 datalog 메시지를 볼 수 있습니다.

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

이제 텔레메트리와 사진의 IPFS 해시가 블록체인에 저장되었습니다. 데이터를 보려면 해시를 복사하여 URL이 있는 검색 창에 삽입하십시오:  
#### gateway.ipfs.io/ipfs/< 여기에 해시 입력>

모두입니다!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/설치>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>