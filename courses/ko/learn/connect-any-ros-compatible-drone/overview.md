---
title: ROS 호환 드론 연결
lastUpdate: Thu May 04 2023 12:52:55 GMT+0400 (Samara Standard Time)
description: 로보노믹스 파라체인 제어 하에 모든 ros 호환 로봇 연결
metaOptions: [배우다]
defaultName: ROS 호환 드론 연결
---


## 부분 1. 거래에 의한 시작

**이 기사에서는 Robonomics 도구를 사용하여 모든 ROS 호환 장치를 제어할 수 있다는 것을 보여줄 것입니다. 우리는 웹에서 무작위 드론 시뮬레이션 패키지를 찾아 Robonomics와 함께 실행되도록 조정할 것입니다.**
**요구 사항:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (설치 매뉴얼 [여기](http://wiki.ros.org/melodic/설치))

</li>

<li class="flex">

Robonomics 노드 (바이너리 파일) (최신 릴리스 다운로드 [여기](https://github.com/airalab/robonomics/releases))

</li>

</List>

<br/>

이 데모의 이 부분을 코딩하는 전체 과정은 아래 비디오에서 제시됩니다.

https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be

<br/>

## 1. 시뮬레이션 찾기
웹을 서핑합시다. `ROS 드론 시뮬레이터`로 구글링해보세요. 첫 번째 링크는 대부분 [http://wiki.ros.org/tum_simulator](http://wiki.ros.org/tum_simulator)의 `tum_simulator` 페이지를 보여줄 것입니다.


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/tum_simulator.jpg" alt="tum_simulator"/>

상당히 오래되었으므로 시스템에 맞는 포크를 찾는 것이 좋습니다. `tum_simulator Ubuntu 18 Gazebo 9 fork`로 구글링해보세요. 첫 번째 결과는 적절한 패키지가 있는 GitHub [repo](https://github.com/tahsinkose/sjtu-drone)입니다. 다운로드하세요

<LessonCodeWrapper language="bash">
mkdir -p drone_simulator_ws/src
cd drone_simulator_ws/src
git clone https://github.com/tahsinkose/sjtu-drone
cd ..
catkin build
</LessonCodeWrapper>

`~/.bashrc`에 소스 명령을 추가하는 것을 잊지 마세요:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc
source "~/.bashrc"
</LessonCodeWrapper>

이제 시뮬레이션을 실행하여 드론을 파라체인 제어하려면 무엇을 해야 하는지 확인할 수 있습니다.

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

## 2. ROS 토픽 검사
시뮬레이션이 실행 중일 때, 새 탭에서 다음 명령을 실행하여 드론이 사용하는 토픽 목록을 확인하세요:

<LessonCodeWrapper language="bash">
rostopic list
</LessonCodeWrapper>

`/cmd_vel`, `/drone/takeoff`, `/drone/land`를 살펴보겠습니다:

<LessonCodeWrapper language="bash">
rostopic info /cmd_vel
rostopic info /drone/takeoff
rostopic info /drone/land
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/topics_info.jpg" alt="topics_info"/>

보이는 바와 같이 `Twist` 및 `Empty` 유형의 메시지가 있어야 하며, 이는 `std_msgs` 및 `geometry_msgs`의 일부입니다. 이를 컨트롤러에서 사용할 것입니다. 잠시 시뮬레이션을 중지하세요.

## 3. 컨트롤러 패키지 다운로드
일반적으로, 일반 ROS 로봇 컨트롤러와의 주요 차이점은 [Robonomics IO](https://wiki.robonomics.network/docs/rinterface/)를 사용하여 네트워크의 모든 거래를 확인하는 코드 블록입니다. 패키지 자체는 GitHub에서 사용할 수 있습니다. 다운로드하고 워크스페이스를 빌드하세요:

<LessonCodeWrapper language="bash">
cd ~/drone_simulator_ws/src
git clone https://github.com/PaTara43/drone_simulator_controller
cd drone_simulator_controller/src
chmod +x *.py
cd ~/drone_simulator_ws/src
catkin build
</LessonCodeWrapper>

## 4. DAPP에서 계정 관리
테스트 중이므로 로컬 robonomics 네트워크 노드를 robonomics 바이너리 파일로 생성하세요:

<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**중요!** 다음 실�� 전에 `db` 디렉토리를 제거해야 합니다

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

성공적인 시작 후 [이](https://wiki.robonomics.network/docs/create-account-in-dapp/) 매뉴얼을 따라 계정을 생성하세요. **각 계정의 시드 및 주소를 저장하는 것을 잊지 마세요! 거래에 필요합니다**. 이러한 주소, 시드 및 robonomics 바이너리 파일 경로를 `robonomics_ws/src/robonomics_sample_controller/src`의 `config.config` 파일에 추가하세요. 이러한 계정에 일부 돈(단위)을 이체하세요:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 5. 파라체인 제어 하에 드론 시작

지금까지 **작동 중인 것은 로컬 robonomics 노드뿐**입니다. 별도의 터미널에서 드론 시뮬레이션을 시작하세요:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

스크립트를 실행하세요:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/launched_drone.jpg" alt="launched_drone"/>

이제 드론이 날기 시작하도록 트리거하는 거래를 보낼 수 있습니다. 이를 위해 robonomics 바이너리 파일의 Robonomics IO `write` 하위 명령을 사용해야 합니다:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

`<DRONE_ADDRESS>` 및 `<EMPLOYER’S_KEY>`를 이전에 저장한 문자열로 대체하세요.
로그 `"Taking Off"`을 볼 수 있어야 하며, 드론이 날기 시작해야 합니다:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying.jpg" alt="flying"/>

이것이 Robonomics 파라체인 제어에 의해 어떤 ROS 호환 로봇이 제어될 수 있는 방법입니다.


##  부분 2. 블록체인에 데이터 저장

**이 부분에서는 드��이 파라체인에 의해 제어되도록 하는 데 Robonomics 도구를 계속 사용할 것입니다. 이번에는 데이터를 IPFS로 보내고 해시를 체인 옵션에 저장할 것입니다. 아래는 지침 및 코드 스니펫입니다. 요구 사항:**

<List>

<li>Ubuntu 18.04 LTS</li>

<li class="flex">

ROS Melodic + Gazebo + RViz (설치 매뉴얼 [여기](http://wiki.ros.org/melodic/설치))
</li>

<li class="flex">

IPFS 0.4.22 (여기서 다운로드 [here](https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz) 및 설치)
</li>

<li class="flex">

Robonomics 노드 (바이너리 파일) (최신 릴리스 다운로드 [여기](https://github.com/airalab/robonomics/releases))
</li>

<li>Python 종속성:
<LessonCodeWrapper language="bash">
pip install cv_bridge ipfshttpclient
</LessonCodeWrapper>
</li>

</List>

이 데모의 이 부분을 코딩하는 전체 과정은 아래 비디오에서 제시됩니다.

https://www.youtube.com/watch?v=dliLb6GHgpo&feature=youtu.be

<br/>

## 1. 종속성 추가
시뮬레이션을 시작하고 토픽 목록을 살펴보면 (부분 1 참조), 전면 카메라 데이터를 포함하고 `sensor_msgs/Image` 메시지 유형을 사용하는 토픽이 하나 있다는 것을 알 수 있습니다.

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/front_camera.jpg" alt="front_camera"/>

1 초마다 사진을 찍어 비행 후 이 사진들을 IPFS에 게시하려고 시도해 봅시다. 첫 번째 튜토리얼을 완료했다면 다른 것을 다운로드할 필요가 없습니다. 'drone_sample_controller_pictures.py' 스크립트입니다.

## 2. DAPP에서 계정 관리
이전 튜토리얼에서와 같이 로컬 robonomics 네트워크 노드를 robonomics 이진 파일로 생성하십시오.
<LessonCodeWrapper language="bash">
./robonomics --dev
</LessonCodeWrapper>

**중요!** 다음 실�� 전에 `db` 디렉토리를 제거해야 합니다

<LessonCodeWrapper language="bash" codeClass="big-code">
rm -rf /home/$USER/.local/share/robonomics/chains/dev/db
</LessonCodeWrapper>

성공적인 시작 후 [이](https://wiki.robonomics.network/docs/create-account-in-dapp/) 매뉴얼을 따라 계정을 생성하세요. **각 계정의 시드 및 주소를 저장하는 것을 잊지 마세요! 거래에 필요합니다**. 이러한 주소, 시드 및 robonomics 바이너리 파일 경로를 `robonomics_ws/src/robonomics_sample_controller/src`의 `config.config` 파일에 추가하세요. 이러한 계정에 일부 돈(단위)을 이체하세요:

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/balances.jpg" alt="balances"/>

## 3. 시작
지금까지 **작동 중인 것은 로컬 robonomics 노드뿐**입니다. 별도의 터미널에서 드론 시뮬레이션을 시작하세요:

<LessonCodeWrapper language="bash">
roslaunch sjtu_drone simple.launch
</LessonCodeWrapper>

다른 하나에서 ipfs 데몬을 시작하십시오.
<LessonCodeWrapper language="bash">
ifps init # you only need to do this once
ipfs daemon
</LessonCodeWrapper>

스크립트를 실행하세요:
<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun drone_simulator_controller drone_sample_controller_pictures.py
</LessonCodeWrapper>

이제 드론을 이륙시키고 사진을 찍도록 트리거하는 트랜잭션을 보낼 수 있습니다. 이를 위해 robonomics 이진 파일의 Robonomics IO 'write' 하위 명령을 사용해야 합니다.

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "ON" | ./robonomics io write launch -r [DRONE_ADDRESS] -s [EMPLOYER’S_KEY]
</LessonCodeWrapper>

`<DRONE_ADDRESS>` 및 `<EMPLOYER’S_KEY>`를 이전에 저장한 문자열로 대체하세요.
로그 'Taking Off'을 볼 수 있어야 하며 드론은 비행을 시작하고 사진을 찍기 시작해야 합니다.

<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/flying_picturing.jpg" alt="flying_picturing"/>

나중에 작업이 완료되면 Robonomics 포털에서 'Developer' -> 'Chain state'로 이동하여 선택한 'datalog'을 상태 쿼리로 사용하여 'DRONE' 데이터로그를 추가하십시오. 텔레메트리의 IPFS 해시가 블록체인에 저장되었습니다. 데이터를 보려면 해시를 복사하여 로컬 [게이트웨이](https://gateway.ipfs.io/ipfs/QmeYYwD4y4DgVVdAzhT7wW5vrvmbKPQj8wcV2pAzjbj886/docs/getting-started/) 주소 'localhost:8080/ipfs/'에 추가하십시오.


<LessonImages imageClasses="mb" src="connect-any-ros-compatible-drone/datalog.jpg" alt="Voila"/>