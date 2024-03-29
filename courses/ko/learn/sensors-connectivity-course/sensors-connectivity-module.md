---
title: "레슨 #4, 센서 연결 모듈"
description: '센서 연결 모듈'
lessonNumber: 4
metaOptions: [배우기, 센서 연결 및 분산 센서 네트워크]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

다음 기사에서 센서 연결 모듈에 대해 더 많이 배울 수 있습니다. 그 후에는 분산 센서 네트워크를 호스팅하거나 자체 센서 맵을 만들 수 있습니다.

## 센서 연결에 대해

분산 센서 네트워크는 `sensors-connectivity` Python 모듈을 사용합니다 ([소스 코드](https://github.com/airalab/sensors-connectivity)). 이 모듈을 사용하면 사용자는 자신의 서버를 시작하여 센서로부터 데이터를 수신하고 추가로 처리할 수 있습니다. 현재 개발자들은 이러한 서버를 여러 대 시작했고 어떤 센서든 데이터를 보낼 수 있습니다. 여러 서버를 실행함으로써 한 대의 서버에 문제가 발생했을 때 데이터 손실을 방지할 수 있습니다. 센서는 작동하지 않는 서버에서 작동하는 서버로 전환합니다. 기본적으로 센서 연결 모듈은 하나의 입력(센서 데이터)과 여러 출력이 있는 블랙 박스로 생각할 수 있습니다.

<LessonImages  figure figureCaption="Module architecture" src="sensors-connectivity-course/lesson-4-1.png" alt="Module architecture"/>

센서 연결 모듈은 다양한 데이터(센서 데이터를 포함한)를 HTTP 프로토콜을 통해 수신하는 스테이션들(station_1, station_2 ... station_n)의 집합입니다. 또한 USB나 다른 데이터 소스를 통해 컴퓨터에 연결된 센서일 수도 있습니다. 스테이션에서 수신된 데이터는 모듈에 의해 처리되고 피더(feeders)에 전달됩니다(feeder_1, feeder_2 ... feeder_n). 피더는 처리된 데이터를 사용자에게 보냅니다; 우리의 경우 데이터는 분산 IPFS 채널로 전송됩니다. 

[분산 센서 네트워크](https://sensors.robonomics.network/#/) 지도는 컴퓨터에서 실행되는 분산 애플리케이션(dapp)입니다. 이는 IPFS 채널에서 데이터를 읽고 지도에 표시합니다. 센서로부터 데이터를 수집하는 서버와 사용자가 보는 지도 사이에는 직접적인 연결이 없습니다. 데이터는 IPFS pubsub을 통해 서로 전송되어 서버에 부하를 줄입니다. 

또한, 때때로 IPFS에 지난 시간 동안의 데이터가 저장되고 해당 데이터의 해시가 블록체인에 기록됩니다. IPFS는 콘텐츠 주소 지정 네트워크이므로 데이터를 저장하면 어떤 데이터 변경도 눈에 띄지 않게 됩니다. 필요한 파일의 주소에는 콘텐츠의 해시가 포함되어 있으며 이는 데이터 변경 시 변경될 것입니다. 블록체인은 사용자에게 해시를 전달하기 위해 사용되며 사용자는 이를 사용하여 IPFS에서 필요한 데이터를 가져올 수 있습니다(지도의 이력을 요청할 때 이렇게 발생합니다).

## Linux용 모듈 설정

**사전 요구 사항 및 설치**

<List type="numbers">

<li>

`sensors-connectivity` 모듈을 빌드하려면 IPFS 데몬이 설치되어 있어야 하며 버전은 `0.8.x`보다 크지 않아야 합니다. Linux에서 작업 중이라고 가정하고 다음을 실행하십시오(`0.8.0` 버전을 위해):

<LessonCodeWrapper codeClass="big-code" language="bash">wget https://dist.ipfs.io/go-ipfs/v0.8.0/go-ipfs_v0.8.0_linux-amd64.tar.gz
tar -xzf go-ipfs_v0.8.0_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh
ipfs init</LessonCodeWrapper>

</li>


<li>

개발 도구 `python3-dev` 및 Python 패키지 설치 프로그램 `pip`으로 패키지 설치:

<LessonCodeWrapper codeClass="long-code" language="bash">sudo apt install python3-dev python3-pip</LessonCodeWrapper>

</li>


<li>

모듈을 PyPI 패키지로 설치:

<LessonCodeWrapper codeClass="long-code" language="bash">pip3 install sensors-connectivity</LessonCodeWrapper>

다음 경고가 표시되면: 

<LessonCodeWrapper codeClass="big-code" language="bash">WARNING: The script sensors_connectivity is installed in '/home/test2/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.</LessonCodeWrapper>

다음 명령을 실행:

<LessonCodeWrapper  language="bash">cd ~
export PATH="/usr/local/bin:$PATH"
source .profile</LessonCodeWrapper>

</li>

</List>

## 구성

<List type="numbers">

<li>

원하는 위치에 구성 파일 및 데이터베이스 파일을 만듭니다. 이 데이터베이스는 센서 데이터의 IPFS 해시, 타임스탬프 및 서비스 상태를 저장합니다:

<LessonCodeWrapper language="bash">cd ~
mkdir sensors_connectivity
cd sensors_connectivity
touch database.db</LessonCodeWrapper>

<RoboAcademyNote type="okay" title="INFO">
데이터베이스 파일의 이름은 아무 것이나 될 수 있지만 확장자는 반드시 <code>.db</code>
</RoboAcademyNote>

</li>


<li>

동일한 디렉토리에 구성 파일을 만듭니다:

<LessonCodeWrapper language="bash">touch my_config.json</LessonCodeWrapper>

</li>


<li>

다음을 파일에 복사하여 db_path 필드에 데이터베이스 파일의 전체 경로를 삽입하십시오. 이 구성은 HTTP를 통해 센서 데이터를 가져와 Robonomics 지도로 보내는 데 충분합니다:

<LessonCodeWrapper codeClass="big-code" language="json">{
   "general": {
      "publish_interval": 30,
      "db_path": "<YOUR/PATH/TO/DATABASE>"
   },
   "comstation": {
      "enable": false,
      "port": "/dev/<YOUR/PATH/TO/BOARD>",
      "work_period": 300,
      "geo": "00.000000,00.000000",
      "public_key": ""
   },
   "httpstation": {
      "enable": true,
      "port": 8001
   },
   "mqttstation": {
      "enable": false,
      "host": "localhost",
      "port": 1883,
      "topic": "/freertos_mqtt_robonomics_example/#",
      "username": "",
      "password": ""
   },
   "robonomics": {
      "enable": true,
      "ipfs_provider": "/ip4/127.0.0.1/tcp/5001/http",
      "ipfs_topic": "airalab.lighthouse.5.robonomics.eth"
   },
   "datalog": {
      "enable": false,
      "suri": "",
      "dump_interval": 60,
      "temporal_username": "",
      "temporal_password": "",
      "pinata_api": "",
      "pinata_secret": ""
   },
   "dev": {
      "sentry": ""
   },
   "frontier": {
      "enable": false,
      "suri": ""
   },
   "trackagro": {
      "enable": false,
      "token": ""
   }
}</LessonCodeWrapper>

</li>

</List>

## 시작


<List type="numbers">

<li>

IPFS 데몬 시작:

<LessonCodeWrapper codeCLass="big-code" language="bash">ipfs daemon --enable-pubsub-experiment</LessonCodeWrapper>

</li>


<li>

구성이 설정된 후 다른 터미널에서 구성 파일 경로로 서비스를 실행하십시오:

<LessonCodeWrapper language="bash">sensors_connectivity "path/to/your/config/file”</LessonCodeWrapper>

</li>


<li>

터미널에 로그가 표시됩니다(`~/.logs`에도 추가됨). 예:

<LessonCodeWrapper codeClass="big-code" language="bash">$ sensors_connectivity test.json
2022-09-02 14:08:48,408 - INFO - Getting data from the stations...
2022-09-02 14:08:48,409 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:08:48,409 - INFO - Sending result to the feeders...
2022-09-02 14:08:48,411 - INFO - Checking data base...
2022-09-02 14:09:18,410 - INFO - Sending result to the feeders...
2022-09-02 14:09:18,410 - INFO - Getting data from the stations...
2022-09-02 14:09:18,411 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:09:48,411 - INFO - Sending result to the feeders...
2022-09-02 14:09:48,412 - INFO - Getting data from the stations...
2022-09-02 14:09:48,413 - INFO - airalab-http-v0.8.0: [[]]
2022-09-02 14:10:18,413 - INFO - Sending result to the feeders...
2022-09-02 14:10:18,413 - INFO - Getting data from the stations...</LessonCodeWrapper>

</li>

</List>

## 설치 후

`sensors-connectivity` 모듈을 분산형 센서 네트워크에 연결하여 맵에서 데이터를 볼려면 IPFS ID를 [vm@multi-agent.io](mailto:vm@multi-agent.io) 또는 [ping@airalab.org](mailto:ping@airalab.org)로 보내야 합니다. 우리는 당신의 ID를 액세스 제어 목록에 추가할 것입니다.

IPFS 데몬을 실행한 후 다음 명령으로 IPFS `ID`를 가져옵니다:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>