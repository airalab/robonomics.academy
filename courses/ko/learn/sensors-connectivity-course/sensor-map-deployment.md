---
title: "레슨 #6, 센서 맵 배포"
description: '센서 맵 배포'
lessonNumber: 6
metaOptions: [배우기, 센서 연결 및 분산 센서 네트워크]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

센서를 조립하고 센서 연결성 모듈을 설정한 후 개인 분산형 센서 맵을 배포할 시간입니다.


## 요구 사항 및 설치

<List type="numbers">

<li>

센서 맵은 JavaScript로 구동되므로 먼저 `node`와 `yarn` 매니저를 설치해야 합니다:

<LessonCodeWrapper codeClass="big-code" language="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install --global yarn</LessonCodeWrapper>

</li>

<li>

맵 다운로드 및 빌드:

<LessonCodeWrapper codeClass="big-code" language="bash">git clone https://github.com/airalab/sensors.robonomics.network.git
cd sensors.robonomics.network/
yarn install</LessonCodeWrapper>

</li>

<li>

테스트를 위해 `개발` 모드에서 지도를 실행하세요.

<LessonCodeWrapper language="bash">yarn serve</LessonCodeWrapper>

</li>

<li>

터미널에서 URL로 이동하면 센서 맵이 표시됩니다. 그 후 `Ctrl+C`로 중지하세요.

</li>

</List>

## 구성

<List type="numbers">

<li>

다음을 사용하여 IPFS ID를 찾으세요:

<LessonCodeWrapper codeClass="big-code" language="bash">$ ipfs id
{
	"ID": "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/uMV3rLM/C+LOh2DGPo3chr+VM+vyYMKi...
    ...</LessonCodeWrapper>

</li>

<li>

`src` 폴더로 이동하고 파일 이름을 변경하세요:

<LessonCodeWrapper codeClass="big-code" language="bash">cd src
cp config.template.json config.json
cp agents.template.json agents.json</LessonCodeWrapper>

</li>

<li>

`agents.json`에 IPFS ID를 삽입하세요:

<LessonCodeWrapper codeClass="big-code" language="json">[
  "QmUZxw8jsRpSx5rWkTpJokPGKvWihTrt5rbRCFXzJ4eCAP"
]</LessonCodeWrapper>

</li>

<li>

`config.json` 파일을 열고 구성 파일의 다음 부분을 변경하세요:

<LessonCodeWrapper codeClass="big-code" language="json">...
  REMOTE_PROVIDER: "",
  WIND_PROVIDER: "",
  MAP: {
    zoom: "8",
    position: {
      lat: "",
      lng: "",
    },
  },
  SHOW_MESSAGES: true,
};</LessonCodeWrapper>


여기에 도시의 위도(`lat`)와 경도(`lng`)를 삽입해야 합니다. 선택적으로 [풍향 서비스](https://github.com/danwild/wind-js-server)를 설정하고 `WIND_PROVIDER` 필드에 URL을 제공할 수 있습니다.

</li>

</List>


## 빌드

<List type="numbers">

<li>

릴리스용 파일을 빌드하려면 다음 명령을 실행하세요:

<LessonCodeWrapper language="bash">yarn build</LessonCodeWrapper>

모든 정적 웹사이트 구성 요소가 있는 `dist` 디렉토리가 생성됩니다.

</li>

<li>

모든 것이 올바른지 확인하려면 `dist` 디렉토리로 이동하여 `index.html` 파일을 열어보세요. 시간이 지나면 센서 연결성 모듈에서 센서 데이터가 맵에 표시됩니다.

</li>

</List>

