---
title: Sensoren Konnektivität & Dezentrales Sensorennetzwerk
description:  Erfahren Sie, wie ein ziviles Luftqualitätsüberwachungsnetzwerk funktionieren kann und welche Vorteile eine dezentrale Lösung für die Überwachung der Luftqualität in Ihrem Zuhause oder Ihrer Gemeinde bietet.
lessonNumber: 1
metaOptions: [Lernen, Sensoren Konnektivität & Dezentrales Sensorennetzwerk]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

## Über den Kurs

Erfahren Sie, wie ein ziviles Luftqualitätsüberwachungsnetzwerk funktionieren kann und welche Vorteile eine dezentrale Lösung für die Überwachung der Luftqualität in Ihrem Zuhause oder Ihrer Gemeinde bietet.

## Was ist ein Dezentrales Sensorennetzwerk?

Das Sensorennetzwerk von Robonomics ist ein ziviles Luftqualitätsüberwachungsnetzwerk. Jeder kann seinen eigenen Sensor zusammenbauen oder eine Lösung von dem Entwicklungsteam verwenden und in seinem Zuhause installieren. Das Sensorsnetzwerk verwendet Open-Source-Software und offene Komponentenverkabelungsdiagramme. Insbesondere wird einer der Hauptensoren verwendet, der PM10- und PM2,5-Feinstpartikelsensor.


## Was ist PM10 und PM2.5?

PM10 ist ein Partikel einer Substanz von 10 Mikrometern oder kleiner, PM2,5 ist ein Partikel mit einem Durchmesser von 2,5 Mikrometern oder kleiner. Sie schweben ständig in der Luft und setzen sich aufgrund ihrer geringen Größe nicht ab (zum Vergleich, die Dicke eines menschlichen Haares beträgt 100 Mikrometer). Diese Partikel können aus verschiedenen Gründen auftreten, einschließlich industrieller Prozesse im Zusammenhang mit der Handhabung von Schüttgütern oder der Verbrennung und Verarbeitung von Mineralien. Sie werden auch nach Waldbränden und Staubstürmen freigesetzt. Darüber hinaus können sie aus konventionellem Verkehr stammen, wenn Treibstoff verbrannt wird oder durch Abrieb an Reifen und Straßenbelägen. Autoreifen werden zu feinen Krümeln zermahlen und der Wind trägt sie von den Straßen in die ganze Stadt.

## Warum müssen wir sie messen?

PM10 und PM2,5 sind am gefährlichsten, weil ihre Größe es ihnen ermöglicht, in die Lungen der Menschen einzudringen, während größere Partikel dazu neigen, in Nase oder Rachen stecken zu bleiben. Größere PM10-Partikel reizen die Atemwege, Nase, Rachen und Augen. Partikel kleiner als 2,5 Mikrometer können tief in die Lungen eindringen und sogar in den Blutkreislauf gelangen. Die Auswirkungen dieser Partikel auf den menschlichen Körper können verheerend sein:

<List>

<li>Vergiftung durch schädliche Substanzen</li>
<li>allergische Reaktionen</li>
<li>bakterielle und Pilzinfektionen</li>
<li>Krebs</li>
<li>Reizung der Schleimhäute</li>
<li>Verschlimmerung von Atemwegssymptomen</li>

</List>

## Warum ein Dezentrales Sensorennetzwerk?

Es gibt öffentliche Überwachungsnetzwerke wie das deutsche Projekt [sensor.community](https://sensor.community), aber sie verwenden die übliche Client-Server-Architektur, was in diesem Fall ein Nachteil ist. Daten von allen Sensoren zusammen mit Benutzeranfragen werden alle an einen Server gesendet, der eine solche Last nicht immer bewältigen kann. Es gibt also Situationen, in denen die Karte mit Daten in den wichtigsten Momenten nicht verfügbar ist.

Mit dem Robonomics-Netzwerk senden Sensoren Daten an mehrere verschiedene Server, und jeder Benutzer kann den Sensoren-Konnektivitätsserver für seinen Sensor aufrufen und ihn auf der Karte sehen. Die Karte selbst ist nicht überlastet, da es sich um eine dezentrale Anwendung (dapp) handelt, die direkt von Ihrem Browser mit den Daten funktioniert, die die Server an den IPFS-Pub-Sub-Kanal senden.