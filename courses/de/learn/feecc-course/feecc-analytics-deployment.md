---
title: "Bereitstellung von Analytics"
description: Dieser Kurs dreht sich darum, das Feecc-System und alle seine Komponenten kennenzulernen.
metaOptions: [Lernen, sich an Feecc zu gewöhnen]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In dieser Lektion lernen Sie, wie Sie die Komponenten von Feecc Analytics bereitstellen.
</RoboAcademyText>

## Starten des Analytics-Backends

1. Klonen Sie das Repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. Konfigurieren Sie den Backend-Dienst nach Ihren Bedürfnissen mithilfe der Datei `.env`:
    - `MONGO_CONNECTION_URL` — Ihre Verbindungs-URI zu MongoDB;
    - `MONGO_DATABASE_NAME` — ein Datenbankname von MongoDB;
    - `SECRET_KEY` — Geheimschlüssel für das Hashen und Dehashen;
    - `IPFS_GATEWAY_HOST` — URL des IPFS-Gateways;
    - `USE_DATALOG` — Senden von Analyse-Daten an Robonomics (`true` oder `false`);
    - `ROBONOMICS_SEED` — Seed-Phrase für das Robonomics-Konto.

3. Starten Sie den Backend-Container:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Überprüfen Sie dessen Funktionalität. Gehen Sie zum Browser und öffnen Sie die Seite `http://localhost:5002/docs`. Wenn alles richtig gemacht wurde, sehen Sie eine Seite (generiert von Swagger) mit allen Feecc Analytics REST-API-Endpunkten. Jetzt sind Sie bereit, das Frontend zu starten.

## Starten des Analytics-Frontends

1. Klonen Sie das Repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. Gehen Sie zu `src` und konfigurieren Sie den Frontend-Dienst nach Ihren Bedürfnissen mithilfe der Datei `config.json`. Stellen Sie sicher, dass Sie die URL des Feecc Analytics Backends im Parameter `base_url` eingeben (in Form von `xx.xx.xx.xx:port`).

3. Starten Sie den Frontend-Container:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Überprüfen Sie dessen Funktionalität. Gehen Sie zum Browser und öffnen Sie die Seite `http://localhost:8081/docs`.

<RoboAcademyText fWeight="500">
Damit ist die Bekanntschaft mit dem Feecc-System abgeschlossen. Wenn Sie weitere Fragen haben, können Sie sich an die Entwickler von Multi-Agent Systems (multi-agent.io) wenden oder ein Problem auf ihrem GitHub (github.com/Multi-Agent-io) hinterlassen.
</RoboAcademyText>