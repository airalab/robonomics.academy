---
title: "Schreiben: Ergebnisse"
description: Starten Sie Ihre Bachelorarbeit schnell mit KI-gestützten Tools
metaOptions: [Lernen Sie, starten Sie Ihre Bachelorarbeit schnell mit KI-gestützten Tools]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Der Abschnitt, der der Verarbeitung der Ergebnisse einer Bachelorarbeit gewidmet ist, besteht in der Regel aus einem demonstrativen Teil, in dem Sie bestimmte Indikatoren in Diagrammen und Tabellen visualisieren sowie eine Diskussion dieser Ergebnisse führen. Können KI-Tools bei dieser Aufgabe helfen? Die Antwort ist offensichtlich ja, aber mit einigen Feinheiten.
</RoboAcademyText>

## Datenrepräsentation und -transformation

Vielleicht ist die Verarbeitung und Präsentation von Rohdaten das, was KI-Assistenten am besten können. In einem früheren Leitfaden haben wir erfolgreich ein UML-Diagramm mit KI erstellt, aber im Allgemeinen kann jedes strukturierte Datenarray leicht in ein Diagramm oder eine Tabelle mit einigen Statistiken umgewandelt werden. Zum Beispiel wurde ChatGPT beauftragt, die Anzahl erfolgreicher Datalog-Transaktionen aus einem Smart Home zu zählen und diese basierend auf Rohdaten aus der Robonomics-Parachain auf [Subscan](https://robonomics.subscan.io/) nach Stunden zu verteilen. Hier ist ein Teil des resultierenden Outputs:

| Hour  | Successful Transactions | Total Transactions | Percentage of Success |
|-------|-------------------------|--------------------|-----------------------|
| 13:00 | 4                       | 4                  | 100%                  |
| 14:00 | 5                       | 5                  | 100%                  |
| 15:00 | 6                       | 6                  | 100%                  |
| 16:00 | 5                       | 5                  | 100%                  |
| 17:00 | 5                       | 5                  | 100%                  |
| 18:00 | 6                       | 6                  | 100%                  |

ChatGPT hat nicht nur die Anzahl der Transaktionen pro Stunde gezählt, sondern auch deren Prozentsatz abgeleitet. 

## Tiefe Analyse

Aber was ist, wenn wir KI bitten, eine tiefere Analyse auf der Grundlage von unstrukturierten Daten durchzuführen? Leider beginnen hier die Probleme, mit denen wir bereits konfrontiert waren: Kontextbeschränkungen und Halluzinationen. Als Beispiel wurden die Protokolldateien des Home Assistant des zuvor erstellten Smart Homes genommen, und die folgende Anfrage wurde an ChatGPT gestellt:

<RoboAcademyDialog>

Based this logs of smart home system, write section called "Analysis of IoT Hub Logs" in 1000 words. Add precise statistics of occurrences of found events and recommendations for solution of found problems.

</RoboAcademyDialog>

Die Protokolle sehen ungefähr so aus (insgesamt etwa 500 Zeilen Protokolle):

<LessonCodeWrapper language="bash" noCopyIcon noLines codeClass="big-code">
    2023-05-29 14:17:18.301 DEBUG (MainThread) [custom_components.robonomics] Time changed: 2023-05-29 14:17:18.299347+00:00
    2023-05-29 14:17:18.309 DEBUG (MainThread) [custom_components.robonomics.get_states] Start getting info about dashboard and services
    2023-05-29 14:17:18.321 DEBUG (SyncWorker_0) [custom_components.robonomics.ipfs] Getting last file hash from /ha_robonomics_config with prefix config-
    2023-05-29 14:17:18.341 DEBUG (SyncWorker_0) [custom_components.robonomics.ipfs] Last /ha_robonomics_config file config-1685367962.12049, with hash QmbQ4STfozcCPeHpKkcrH26hNTnupU1o4LD1JQTFWKpran
    2023-05-29 14:17:18.352 DEBUG (SyncWorker_10) [custom_components.robonomics.ipfs] Read data from local file: /ha_robonomics_config/config-1685367962.12049
    2023-05-29 14:17:19.439 DEBUG (MainThread) [custom_components.robonomics.get_states] Got states to send datalog
    2023-05-29 14:17:21.469 DEBUG (SyncWorker_9) [custom_components.robonomics.ipfs] Time from the last pin: 1:07:04.863542
    2023-05-29 14:17:21.469 DEBUG (SyncWorker_9) [custom_components.robonomics.ipfs] Telemetry must not be pinned
    2023-05-29 14:17:21.471 DEBUG (SyncWorker_1) [custom_components.robonomics.ipfs] Getting last file hash from /ha_robonomics_telemetry with prefix None
    2023-05-29 14:17:21.491 DEBUG (SyncWorker_1) [custom_components.robonomics.ipfs] Last /ha_robonomics_telemetry file data-1685369332.9767303, with hash QmNY2kPBA4Xi2L2DjTWzqhRk5BXS5KyDqjvtYb8mcA43mx
    2023-05-29 14:17:21.492 DEBUG (SyncWorker_4) [custom_components.robonomics.ipfs] Start adding /tmp/data-1685369841.445844 to local node, pin: False
    2023-05-29 14:17:21.631 DEBUG (SyncWorker_4) [custom_components.robonomics.ipfs] File /tmp/data-1685369841.445844 was added to local node with cid: QmdmmUXEvmtW1UnttcEDhc8pee8CwVdEFH4aax9XZj76m8
    2023-05-29 14:17:21.692 DEBUG (SyncWorker_4) [custom_components.robonomics.ipfs] File data-1685369332.9767303 with was unpinned
    2023-05-29 14:17:27.165 DEBUG (SyncWorker_6) [custom_components.robonomics.ipfs] Actual balance in crust network - 604385098
    2023-05-29 14:17:28.617 DEBUG (SyncWorker_6) [custom_components.robonomics.ipfs] approximate cost to store the file - 1000067848
    2023-05-29 14:17:28.617 WARNING (SyncWorker_6) [custom_components.robonomics.ipfs] Not enough account balance to store the file in Crust Network
    2023-05-29 14:17:28.634 DEBUG (MainThread) [custom_components.robonomics.robonomics] Send datalog states request, another datalog: False
    2023-05-29 14:17:28.638 DEBUG (SyncWorker_0) [custom_components.robonomics.robonomics] Start creating rws datalog
    2023-05-29 14:17:55.573 DEBUG (SyncWorker_0) [custom_components.robonomics.robonomics] Datalog created with hash: 0x396f26a5e3fdaa89910e7f78491f90150d6f9e59e9c7e85f6b9d090ade235077
    2023-05-29 14:19:40.007 WARNING (MainThread) [custom_components.local_luftdaten.sensor] REST request error: Cannot connect to host 192.168.13.141:80 ssl:default [Verbinden call failed ('192.168.13.141', 80)]

</LessonCodeWrapper>

Als Antwort begann das KI-Tool oft zu halluzinieren und bot eine Analyse von anscheinend anderen, nicht vorhandenen Daten an:

<RoboAcademyDialog>

<ChatGPT/>

The logs revealed a significant number of connectivity issues encountered by the IoT devices. Out of a total of 10,000 recorded events, 1,200 (12%) were related to connectivity problems.

...

The analysis identified a notable number of unauthorized access attempts to the smart home system. Approximately 300 (3%) events were logged, indicating potential security breaches. These attempts could lead to unauthorized control or access to sensitive information within the smart home.

...

The logs revealed a lack of regular firmware updates for the IoT devices, with only 20 (0.2%) events indicating successful updates. This finding raises concerns regarding the security and performance of the devices.

</RoboAcademyDialog>

In anderen Fällen verlor die KI den Kontext. Zum Beispiel wurde die folgende Anfrage für Subscan-Transaktionsprotokolle gestellt:

<RoboAcademyDialog>

Analyze the logs below and tell me what kind of Smart Home System analysis can be done on them. These are the transaction logs for the SUB_CONTROLLER address received from the Robonomics parachain, related to the subscription IoT.

</RoboAcademyDialog>

Trotz der Tatsache, dass der KI speziell der Kontext der Bachelorarbeit und der Text des Online-Kurses für das Smart Home erneut zugeführt wurde, generierte er dennoch eine irreführende Antwort mit Daten, die einfach nicht in den Protokollen existierten:

<RoboAcademyDialog>

<ChatGPT/>

User Behavior Analysis:

Analyzing the logs provided insights into user behavior within the Smart Home System. By examining the transaction details, we observed the following user behavior patterns:
- Most Frequently Used Features: Lighting control was the most frequently used feature, accounting for 45% of total transactions. Temperature control followed closely with 30% of total transactions, while security system monitoring and appliance automation accounted for 15% and 10% respectively.
- Usage Patterns: Users tended to interact with the Smart Home System more frequently during weekdays compared to weekends. This suggests that the system is primarily utilized for regular daily activities, such as lighting and temperature control, rather than special occasions or leisure activities.

</RoboAcademyDialog>

Insgesamt kann die Verwendung von KI-Assistenten für das Schreiben des Ergebnisteils eher als erfolglos denn als erfolgreich angesehen werden. Ja, KI kann bei der Präsentation und Verarbeitung von Daten helfen, aber im Wesentlichen spart sie im Vergleich zu klassischen Data-Science-Tools sehr wenig Zeit. Darüber hinaus müssen Benutzer ständig die Genauigkeit der bereitgestellten Antworten überprüfen und diese überprüfen.

<RoboAcademyText fWeight="500">
Now we can move on to the final section of our bachelor's thesis — Conclusions, where we will not only finish writing the thesis, but also make overall conclusions on the use of AI for this purpose.
</RoboAcademyText>