---
title: "Zusammenbau des Smart Home Boards"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: Sie lernen, wie man das Smart Home Board zusammenbaut!
metaOptions: [Lernen]
defaultName: Einführungduction to open source solution for private smart homes
---

<LessonImages imageClasses="mb" src="smart-home-intro/spring-school-2023-smart-stand-intro.gif" />

## Smart Home Panel 

Dieses Panel ist dazu gedacht, als zentrales Steuergerät mit den am häufigsten verwendeten Schaltern und Daten verwendet zu werden. Es ist auch möglich, ein Gegensprechanlage anzuschließen und es als Innenmonitor zu verwenden. Im Grunde genommen handelt es sich nur um ein Tablet mit Android-Betriebssystem in unserem Fall. Alles was Sie tun müssen, ist Strom bereitzustellen. Wir denken, dass dieses Panel dort installiert werden sollte, wo Sie einen Innenmonitor platzieren würden

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcbdAJqbwHAQ3NeyWQUwSoS4drDexa3AEs7HXuM1BrUT1', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />


## Lichtschalter

Intelligente Lichtschalter sehen mehr oder weniger wie die gewöhnlichen aus, außer dass anstelle von Schaltern Druckknöpfe verwendet werden. Ein Druckknopf kehrt nach dem Drücken in seine Position zurück. Es gibt keinen Unterschied in der Verbindung zwischen einem regulären Schalter und einem intelligenten: schließen Sie den Neutralleiter an N, den Stromleiter an L und die Beleuchtungsleitung an L1 an. Nach dem Zusammenbau des Schalters, um ihn über ZigBee zu koppeln, drücken Sie den Knopf mindestens 5 Sekunden lang.

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/Qmb138DiQWWBgowMj2fC9kmiGYh9WEeytteSkqumWCv2LB', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-2.png" />

Im Falle des Zwei-Tasten-Schalters (oder mehr) besteht der einzige Unterschied in der zweiten (dritten, ...) Lichtzeile. 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZiStYZG4rmyNPXXmCXsVPm7witPpnNJMBzD8GtxedgPo', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-3.png" />

## Intelligente Glühbirne 

Intelligente Glühbirnen sind wahrscheinlich der einfachste Weg, um etwas Intelligentes auszuprobieren, Sie müssen nicht einmal Elektriker sein. Sie können ferngesteuert werden und ihre Helligkeit oder Farbe ändern. Sie können sie zusammen mit intelligenten Schaltern oder separat installieren. Die Verwendung solcher Geräte kann je nach Stimmung oder Wetterbedingungen eine ganze Seite von Automatisierungen öffnen! Neue Glühbirnen sind bereit, über ZigBee verbunden zu werden. Falls Sie keine finden können, schalten Sie sie 5 Mal ein und aus


<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbiMHLJqnDpr1Whzvo6Y7zE33cQPuTs7furbt3JW2uiek', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-4.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmTzK4dY168HVgLvVBsRxR4M4vda55XC7pFhpW5kRexujQ', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-5.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZFpvVUavKc1Za9SeXqikrfySsfFHuVrkdzgbVB8um7T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-6.png" />

## Intelligente Steckdose 

Es gibt eine Reihe „nicht intelligenter“ Geräte, die wir normalerweise manchmal ein- und ausschalten müssen. Wenn wir ein solches Gerät über die Smart-Steckdose mit Strom versorgen, können wir es je nach Bedarf, Zeitplan oder Bedingungen ein- und ausschalten. Außerdem können solche Steckdosen den Energieverbrauch überwachen, sodass wir Daten darüber haben, wie viel dieses Gerät verbraucht. Die Verbindung ist ganz einfach, indem Sie den Smart-Socket-Druckknopf für 5 Sekunden koppeln

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRtmKXSv7csHLbKVuZkoA5Eb2zyTkEAbUxLYT6Qt1yxZH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-7.png" />

## Kesselumschalter 

Der Grund, warum der Kesselumschalter als eigenständiges Gerät existiert, ist, dass er eine höhere Last tragen kann. Normalerweise verbrauchen Kessel 3 kWh oder sogar mehr, daher sind die üblichen (auch intelligenten) Schalter in dieser Situation nicht geeignet. Der Kesselumschalter ist so konzipiert, dass er unter diesen Bedingungen funktioniert. Die Verbindungen und das Pairing sind weitgehend die gleichen wie beim Lichtschalter

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZyRtXXRYCrAQe6s6ZFJLXtUrH7SZHJC1Bt61kTrRX54', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-8.png" />

## Wifi/Zigbee Thermostat

Es sieht aus wie ein gewöhnlicher Thermostat, kann aber drahtlos gesteuert werden. Es gibt Optionen: Heizsystem direkt mit dem Thermostat verbinden oder getrennt betreiben. In letzterem Fall teilt uns der Thermostat den Modus (Heizen, Kühlen, Lüften usw.) und die Temperatur mit

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRjxo9EGUvQiMm84xvXCL6LfrQJYza71vmFsa9Zpy7qmz', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-9.png" />

## Curtain Switch

Ein weiterer spezieller Schalter, diesmal für Vorhänge. Technisch gesehen ist es nicht unbedingt erforderlich, nur diesen Schalter zu verwenden, wir könnten jeden Dreitastenschalter verwenden und ihn mit dem Vorhangsmotor verbinden, aber dieser hier kommt mit speziellen Symbolen. Um den Schalter zu koppeln, drücken Sie lange auf die mittlere Taste

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRpEpZbyNkzby8Sk22Ymz59DbAcnty1B1osWc2kZr5FZ7', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-10.png" />

## Smart Valve Controller

Wählen Sie einen Controller entsprechend den Ventilen, die Sie haben. Das offensichtlichste Szenario ist, diesen Controller mit einem Wasserleck-Sensor zu kombinieren. Um das Gerät zu koppeln, halten Sie die Taste 5 Sekunden lang gedrückt

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcjZcJ6P8Q5yUfSRx8R2mR4A7r2fi5bLs5uoUr3EAXLZs', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-11.png" />

## Wasserleck-Sensor

Ein ziemlich einfaches Gerät, das ein Signal sendet, wenn seine beiden Kontakte verbunden sind. Wasser leitet Elektrizität und wenn sich Wasser unter dem Sensor befindet, sind seine Kontakte kurzgeschlossen. Der Sensor funktioniert mit einer Batterie und hält normalerweise 1-2 Jahre. Um den Sensor über ZigBee zu koppeln, drücken Sie eine Weile lang auf seine Taste 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbgetJK1E8qQMcnBVREutpy8tKfbesqaxXiebjzpoyrdV', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-12.png" />

## IR-Controller

Denken Sie an Ihren Fernsehfernbedienung... aber smart! Und er ist nicht nur auf TVs beschränkt. Wenn Ihre Klimaanlage eine Fernbedienung hat, kann sie durch diese smarte ersetzt werden. Um sie zu koppeln, drücken Sie eine Weile lang auf die Reset-Taste auf der Rückseite des Controllers. Es gibt eine Vielzahl von Bibliotheken mit fertigen Befehlen, zum Beispiel [https://github.com/smartHomeHub/SmartIR](https://github.com/smartHomeHub/SmartIR). Alles, was Sie tun müssen, ist das Modell Ihres TVs oder Ihrer Klimaanlage zu finden

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmVjj92fMLbA6QJ5QhnmiqBT1huD5b7xyfi3VadHFDYwtm', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-13.png" />

## Tür-/Fenstersensor

Ein weiterer Sensor, der mit einer Batterie funktioniert, aber beim Aufbau eines einfachen Sicherheitssystems hilft oder ihn mit Lichtern und anderen Geräten verbindet. Um ihn über ZigBee zu koppeln, stecken Sie eine Nadel in das Loch und drücken Sie eine Weile lang

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZyb66dKEqk9iCVKhaBk5ZKASi7dXdFSg2CBXY1fwuu5J', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-14.png" />

## Bewegungssensor
Das gleiche wie der Tür-/Fenstersensor, kann in verschiedenen Szenarien verwendet werden. Die offensichtlichsten sind die Steuerung von Lichtern oder die Erkennung von Bewegungen, wenn Sie nicht zu Hause sind

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmUA7TLg12pkhkbdGH6fwNDasU1kiyLHBJSutA2YG71Mka', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-15.png" />


## Temperatur- und Luftfeuchtigkeitssensor

Es ist gut zu wissen, in welchen Bedingungen Sie leben, oder? Dieser Sensor liefert Ihnen Temperatur- und Luftfeuchtigkeitsmessungen. Dann können Sie diese Daten verwenden, um Ihre Klimaanlage ein-/auszuschalten oder andere Heiz-/Kühlsysteme zu steuern. Um den Sensor zu koppeln, gibt es eine Taste auf der Rückseite 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmayYFowfJVwQBVxPUSvi5inedqKzhyRZXp8fBUUayJnqH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-16.png" />

## Sicherheitskamera

Am Ende ist es gut, einen Blick darauf zu werfen, was in Ihrem Zuhause passiert. Eine gute Automatisierung wäre es, den Bewegungssensor mit der Kamera zu verbinden, damit Sie ein 10 Sekunden langes Video haben, wenn eine Bewegung erkannt wird 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmX8nnDCgTx2kuwfAGv6B4orkEg4w6phtJtxSp44HfdD9T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-17.png"  />


## Smart Board 
Schauen Sie sich die Ergebnisse an [https://www.youtube.com/watch?v=B3er7bwtvkw](https://www.youtube.com/watch?v=B3er7bwtvkw )
Und spielen Sie selbst damit [https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20](https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20)

