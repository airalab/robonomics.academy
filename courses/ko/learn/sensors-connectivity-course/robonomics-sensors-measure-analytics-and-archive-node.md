---
title: "레슨 #7, 로보노믹스 센서는 분석을 측정하고 아카이브 노드를 측정합니다"
description: '로보노믹스 센서 측정 분석 및 아카이브 노드'
lessonNumber: 7
metaOptions: [배우기, 센서 연결 및 분산 센서 네트워크]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

로보노믹스 센서 측정 분석 및 아카이브 노드 또는 RoSeMAN은 센서 데이터를 축적하여 측정 이력을 보여주는 서비스입니다. 이 기사에서는 서비스를 설정하는 방법을 설명합니다.

## 요구 사항

RoSeMAN은 [MongoDB](https://www.mongodb.com/docs/manual/introduction/) 데이터베이스 서버가 필요하며, 이미 설치되어 있다고 가정합니다. 또한, Sensors 연결ivity 모듈의 데이터 로깅 옵션을 켜야 하며, 시나리오 #3에 표시된 대로 해야 합니다. Sensors Connectivity 모듈에 연결된 Robonomics 계정에는 무료 XRT 토큰이 있어야 합니다. 


## 설정

<List type="numbers">

<li>

저장소 다운로드:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/RoSeMAN.git
cd RoSeMAN</LessonCodeWrapper>

</li>


<li>

구성 파일 생성:

<LessonCodeWrapper codeClass="big-code" language="bash">cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

`config.json` 파일 열고 데이터베이스 경로 편집:

<LessonCodeWrapper codeClass="big-code" language="json">...
  "DB": {
    "path": "mongodb://localhost:27017/rosemandb"
  },
...</LessonCodeWrapper>

</li>


<li>

`agents.json` 파일에 계정의 공개 주소 추가. 여러 주소를 파일에 추가할 수 있으며, 다른 Sensors Connectivity 모듈에서 데이터를 수집하려면 여러 주소를 추가할 수 있습니다.

</li>


<li>

의존성 설치 및 서버 빌드:

<LessonCodeWrapper language="bash">yarn install
yarn build</LessonCodeWrapper>

</li>


<li>

RoSeMAN 서버 시작:

<LessonCodeWrapper language="bash">yarn start</LessonCodeWrapper>

웹 서버는 `http://127.0.0.1:3000`에서 시작됩니다.

</li>

</List>

## 설치 후

RoSeMAN 서버에 배포한 후에는 서버의 공개 IP 주소 또는 URL을 가져와야 합니다. 또는 RoSeMAN과 센서 맵을 동일한 서버에서 실행하는 경우 로컬 IP 주소를 사용할 수 있습니다.

다음으로, 센서 맵 구성 파일을 열고 `config.json` 파일에 URL을 `REMOTE_PROVIDER` 필드에 삽입해야 합니다:


<LessonCodeWrapper codeClass="big-code" language="json">...
  },
  REMOTE_PROVIDER: "https://your.roseman.example.org/",
  WIND_PROVIDER: "",
  MAP: {
...</LessonCodeWrapper>

`yarn build`로 맵을 다시 빌드하고 다시 시작하면 측정 이력을 볼 수 있습니다.