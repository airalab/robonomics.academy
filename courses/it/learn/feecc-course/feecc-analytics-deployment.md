---
title: "Implementazione di Analytics"
description: Questo corso riguarda la conoscenza del sistema Feecc e di tutti i suoi componenti.
metaOptions: [Imparare, Abituarsi a Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In questa lezione imparerai come implementare i componenti di Feecc Analytics.
</RoboAcademyText>

## Avvio del Backend di Analytics

1. Clona il repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-backend.git
</LessonCodeWrapper>

2. Configura il servizio backend secondo le tue esigenze utilizzando il file `.env`:
    - `MONGO_CONNECTION_URL` — il tuo URI di connessione a MongoDB;
    - `MONGO_DATABASE_NAME` — un nome di database di MongoDB;
    - `SECRET_KEY` — chiave segreta per l'hashing e dehashing;
    - `IPFS_GATEWAY_HOST` — URL del Gateway IPFS;
    - `USE_DATALOG` — invio dei dati di analytics a Robonomics (`true` o `false`);
    - `ROBONOMICS_SEED` — frase seed per l'account Robonomics.

3. Avvia il container backend:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Controlla la sua funzionalità. Vai sul browser e apri la pagina `http://localhost:5002/docs`. Se fatto correttamente, vedrai una pagina (generata da Swagger) con tutti i punti finali dell'API REST di Feecc Analytics. Ora sei pronto per avviare il frontend.

## Avvio del Frontend di Analytics

1. Clona il repository:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/Multi-Agent-io/feecc-analytics-frontend.git
</LessonCodeWrapper>

2. Vai a `src` e configura il servizio frontend secondo le tue esigenze utilizzando il file `config.json`. Assicurati di inserire l'URL del Backend di Feecc Analytics nel parametro `base_url` (nella forma di `xx.xx.xx.xx:port`).

3. Avvia il container frontend:

<LessonCodeWrapper language="bash">
sudo docker-compose up -d --build
</LessonCodeWrapper>

4. Controlla la sua funzionalità. Vai sul browser e apri la pagina `http://localhost:8081/docs`.

<RoboAcademyText fWeight="500">
Con questo, la conoscenza del sistema Feecc può considerarsi completa. Se hai domande aggiuntive, puoi contattare gli sviluppatori di Multi-Agent Systems (multi-agent.io) o lasciare un problema sul loro GitHub (github.com/Multi-Agent-io).
</RoboAcademyText>