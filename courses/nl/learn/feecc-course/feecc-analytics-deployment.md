---
title: "Implementatie van Analytics"
description: Deze cursus gaat helemaal over het leren kennen van het Feecc-systeem en al zijn componenten.
metaOptions: [Leren, wennen aan Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In deze les leer je hoe je de componenten van Feecc Analytics implementeert.
</RoboAcademyText>

## Starten van Analytics Backend

1. Kloon het repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. Configureer de backend-service naar uw behoeften met behulp van het `.env`-bestand:
    - `MONGO_CONNECTION_URL` — uw verbindings-URI naar MongoDB;
    - `MONGO_DATABASE_NAME` — een databasenaam van MongoDB;
    - `SECRET_KEY` — geheime sleutel voor hashen en dehashen;
    - `IPFS_GATEWAY_HOST` — URL van IPFS Gateway;
    - `USE_DATALOG` — het verzenden van analytische gegevens naar Robonomics (`true` of `false`);
    - `ROBONOMICS_SEED` — seed-phrase voor Robonomics-account.

3. Start de backend-container:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Controleer de functionaliteit. Ga naar de browser en open de pagina `http://localhost:5002/docs`. Als dit correct is gedaan, ziet u een pagina (gegenereerd door Swagger) met alle Feecc Analytics REST API-eindpunten. Nu ben je klaar om de frontend te starten.

## Starten van Analytics Frontend

1. Kloon de repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. Ga naar `src` en configureer de frontend-service naar uw behoeften met behulp van het `config.json`-bestand. Zorg ervoor dat u de URL van Feecc Analytics Backend invoert in de parameter `base_url` (in de vorm van `xx.xx.xx.xx:port`).

3. Start de frontend-container:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Controleer de functionaliteit. Ga naar de browser en open de pagina `http://localhost:8081/docs`.

<RoboAcademyText fWeight="500">
Hiermee kan de kennismaking met het Feecc-systeem als voltooid worden beschouwd. Als u nog vragen heeft, kunt u contact opnemen met de ontwikkelaars bij Multi-Agent Systems (multi-agent.io) of een probleem achterlaten op hun GitHub (github.com/Multi-Agent-io).
</RoboAcademyText>