---
title: "Engineer Workbench 배포"
description: 이 강좌는 Feecc 시스템 및 그 구성 요소를 알아보는 데 관한 것입니다.
metaOptions: [배우기, Feecc에 익숙해지기]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
이번 강의에서는 Feecc Engineer Workbench의 필수 구성 요소를 직접 배포하는 방법을 배우게 됩니다.
</RoboAcademyText>

구성 요소 중 일부:

- Workbench 데몬
- Workbench 프론트엔드
- IPFS 게이트웨이
- HID 리더 데몬

모든 구성 요소는 [Docker](https://docs.docker.com/engine/install/ubuntu/) 및 [Docker compose](https://docs.docker.com/compose/)를 사용하여 시작됩니다. 설치되었습니다.

## 소프트웨어 준비

1. Feecc 구성 요소는 데이터를 저장하고 액세스하기 위해 [MongoDB](https://www.mongodb.com/) 데이터베이스를 사용합니다. Feecc를 사용하기 전에 편리한 방법으로 MongoDB를 배포해야 합니다. 다음은 일부 배포 옵션입니다: [자체 서버 사용](https://www.mongodb.com/try/download/community), [Atlas의 클라우드 데이터베이스](https://www.mongodb.com/atlas) (무료), [DigitalOcean의 클라우드 데이터베이스](https://www.digitalocean.com/products/managed-databases-mongodb) (유료). 
    
    어떤 경우에도 MongoDB에 대한 연결 URI를 얻어야 하며, 시스템의 모든 구성 요소에 대한 `MONGODB_URI` 변수의 값으로 입력해야 합니다.
    
2. 생산 시스템의 데이터를 신뢰할 수 있고 투명하게 저장하려면 Robonomics에 계정을 만들어야 합니다. 이를 위해 다음 링크에서 제공되는 지침을 사용하십시오: https://wiki.robonomics.network/docs/create-account-in-dapp/
    
    계정의 시드 구문을 나중에 `ROBONOMICS_ACCOUNT_SEED` 변수로 사용할 것이므로 저장해야 합니다.

## Workbench 준비

시작하기 전에 필요한 모든 장비를 컴퓨터 또는 서버에 연결하십시오:

- USB를 사용하여 라벨 프린터
- USB를 사용하여 RFID / 바코드 리더
- PoE 라우터/네트워크 스위치를 통해 IP 카메라
- USB 및 HDMI/VGA를 사용하여 키보드 및 마우스 또는 터치스크린을 사용하는 모니터 (선택 사항)

## HID 리더 데몬 시작

1. 저장소 복제:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon.git
cd feecc-hid-reader-daemon
</LessonCodeWrapper>

2. 데몬 시작:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Workbench 데몬 시작

1. Clone the repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon.git
cd feecc-workbench-daemon
</LessonCodeWrapper>

2. `docker-compose.yml` 파일을 사용하여 데몬을 필요에 맞게 구성하십시오. 파일에는 다양한 환경 변수가 포함되어 있습니다:

    - MongoDB 구성;
    - Robonomics 구성;
    - IPFS 구성;
    - 프린터 매개변수;
    - 카메라 매개변수;
    - RFID / 바코드 리더 매개변수.
    
    전체 변수 목록은 데몬 [저장소](https://github.com/Multi-Agent-io/feecc-workbench-daemon)에서 확인할 수 있습니다. 다음 매개변수는 필수입니다:
    
    - `MONGODB_URI`: MongoDB에 대한 연결 URI;
    - `MONGODB_DB_NAME`: MongoDB의 데이터베이스 이름;
    - `WORKBENCH_NUMBER`: 직원의 작업대 번호.

3. 데몬 시작:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. 기능을 확인하십시오. 브라우저로 이동하여 `http://127.0.0.1:5000/docs` 페이지를 열어 시스템의 REST API 인터페이스에 대한 문서를 확인하십시오. 페이지를 사용할 수 없는 경우 서버가 제대로 시작되지 않은 것입니다. 오류를 확인하고 수정한 후 빌드 및 실행 단계를 반복하십시오.

## IPFS 게이트웨이 시작

1. 저장소를 복제합니다.

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git
</LessonCodeWrapper>


2. 파일 `docker-compose.yml`을 사용하여 마이크로서비스를 필요에 맞게 구성하십시오. 파일에는 MongoDB, Robonomics 및 Pinata와의 연결을 위한 환경 변수가 포함되어 있습니다. 전체 변수 목록은 게이트웨이 [저장소](https://github.com/Multi-Agent-io/feecc-ipfs-gateway)에서 확인할 수 있습니다.

3. 마이크로서비스 시작:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

## Workbench Frontend 시작

1. 저장소를 복제합니다.

<LessonCodeWrapper language="bash">
git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git
</LessonCodeWrapper>

2. `configs` 디렉토리로 이동하여 `config.json` 파일을 사용하여 프론트엔드 서비스를 필요에 맞게 구성하십시오. 다음 매개변수가 특히 중요합니다:
    - `socket` — 여기에 Workbench 데몬 주소를 삽입하십시오;
    - `interface_language` — 인터페이스 언어, `en` 및 `ru` 옵션이 있습니다;
    - `dev_show_reducers` — 개발자 모드 활성화/비활성화;
    - `pulling_period` — 백엔드에서 데이터를 수신하는 주기(밀리초 단위);

3. 프론트엔드 컨테이너 시작:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. 기능을 확인하십시오. 브라우저로 이동하여 `http://localhost:3000` 페이지를 열면 인증 페이지가 표시됩니다.

<RoboAcademyText fWeight="500">
다음 수업에서는 Feecc Analytics 서비스를 살펴볼 것입니다.
</RoboAcademyText>