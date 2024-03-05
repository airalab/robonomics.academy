---
title: "분석 배포"
description: 이 강좌는 Feecc 시스템 및 그 구성 요소를 알아보는 데 관한 것입니다.
metaOptions: [배우기, Feecc에 익숙해지기]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
이 강의에서는 Feecc 분석 구성 요소를 배포하는 방법을 배우게 됩니다.
</RoboAcademyText>

## 분석 백엔드 시작

1. 저장소 복제:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. `.env` 파일을 사용하여 백엔드 서비스를 필요에 맞게 구성하십시오:
    - `MONGO_CONNECTION_URL` — MongoDB에 대한 연결 URI;
    - `MONGO_DATABASE_NAME` — MongoDB의 데이터베이스 이름;
    - `SECRET_KEY` — 해싱 및 해싱을 위한 비밀 키;
    - `IPFS_GATEWAY_HOST` — IPFS 게이트웨이의 URL;
    - `USE_DATALOG` — Robonomics에 분석 데이터를 보내는지 여부 (`true` 또는 `false`);
    - `ROBONOMICS_SEED` — Robonomics 계정의 시드 구문.

3. 백엔드 컨테이너 시작:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. 기능을 확인하십시오. 브라우저로 이동하여 `http://localhost:5002/docs` 페이지를 엽니다. 올바르게 수행하면 모든 Feecc 분석 REST API 엔드포인트가 있는 페이지(Swagger에 의해 생성됨)가 표시됩니다. 이제 프론트엔드를 시작할 준비가 되었습니다.

## 분석 프론트엔드 시작

1. 저장소를 복제합니다.

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. `src`로 이동하여 `config.json` 파일을 사용하여 프론트엔드 서비스를 필요에 맞게 구성하십시오. `base_url` 매개변수에 Feecc 분석 백엔드의 URL을 입력해야 합니��(`xx.xx.xx.xx:port` 형식으로).

3. 프론트엔드 컨테이너 시작:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. 기능을 확인하십시오. 브라우저로 이동하여 `http://localhost:8081/docs` 페이지를 엽니다.

<RoboAcademyText fWeight="500">
이로써 Feecc 시스템에 대한 알아보기를 완료할 수 있습니다. 추가 질문이 있으면 Multi-Agent Systems(multi-agent.io)의 개발자에게 문의하거나 GitHub(github.com/Multi-Agent-io)에 이슈를 남길 수 있습니다.
</RoboAcademyText>