---
title: "Robonomics Schule 2024 / Zypern Relocant Handbuch: Smart Home"
lastUpdate: 
description: "Zypern Relocant Handbuch: Smart Home"
metaOptions: [Lernen, "Robonomics Schule 2024 / Zypern Relocant Handbuch: Smart Home"]
defaultName: "Robonomics School 2024 / Cyprus Relocant Manual: Smart Home"
---

<LessonImages imageClasses="mb"  src='school-2024-cyprus-relocant-manual/Setup_SmartHome-Academy.jpg' alt="Cyprus Relocant Manual Cover" />

Ein Land zu wechseln bringt immer nicht nur neue Möglichkeiten, sondern auch Herausforderungen mit sich. In meinem Fall war das neue Land Zypern, wo ich herkam, um ein Unternehmen aufzubauen. In den letzten 10 Jahren vor meinem Umzug lebte ich in einer großen Stadt, wo ich mich an bestimmte Vorteile wie Zentralheizung, Warmwasserversorgung und günstigen Strom gewöhnt hatte. In Zypern ist jedes Haus und jede Wohnung in Bezug auf die Lebensunterstützung viel autonomer, aber die Sorge um ein komfortables Leben liegt beim Besitzer. Nehmen wir zum Beispiel warmes Wasser. In den kalten Monaten müssen Sie den Boiler selbst einschalten, um es zu erwärmen. Die Wohnung muss auch von Ihnen beheizt werden. Im Winter schalten wir die Wärmedecke und den Boiler ein/aus, und im Sommer die Klimaanlage und das Mückenschutzmittel. Dies erfordert nicht nur Zeit und Energie, sondern auch Geld.

Mein erster Winter in Zypern führte zu astronomischen Stromrechnungen. Das war ein schwerer Schlag für mein Budget. Eine mögliche Lösung: Ändern Sie Ihre Gewohnheiten und passen Sie sich an neue Bedingungen an. Aber nach dem Umzug haben Sie bereits genug Sorgen. Als Ingenieur begann ich nach Lösungen zu suchen, die mir helfen würden, die Kosten zu kontrollieren und mein Leben komfortabler zu gestalten, und ich möchte meine Erfahrungen mit Ihnen teilen.

## Hardwareauswahl

Das erste, worüber ich sprechen möchte, ist die Auswahl eines Ökosystems. Verdrahtete Systeme werden sofort ausgeschlossen, da sie hohe Budgets und ernsthafte Eingriffe in die Infrastruktur der Wohnung/des Hauses erfordern. Von den drahtlosen Geräten gibt es eine riesige Anzahl von Geräten unter den Marken Sonoff und Tyua, aber sie alle funktionieren über das Internet, das auf der Insel nicht immer zuverlässig funktioniert. Das ganz zu schweigen von der Frage der Privatsphäre und Sicherheit Ihrer persönlichen Daten auf den Servern anderer Unternehmen. Ich empfehle, Ihr Smart Home mit [Home Assistant](https://www.home-assistant.io) als Haupt-Home-Server aufzubauen. Vorteile: kann ohne Zugang zum externen Internet arbeiten; es ist möglich, es bei einem Umzug mitzunehmen und an einem neuen Ort ohne Verlust der Einstellungen einzurichten; unterstützt eine riesige Anzahl von Geräten, einschließlich Smart-TVs, Staubsauger und vieles mehr.

Die beliebtesten Protokolle für die drahtlose Verbindung von Geräten sind Wi-Fi, Zigbee, Bluetooth. In einer Wohnung können alle drei Arten von Verbindungen gleichzeitig gefunden werden, aber was Geräte betrifft, die aus gewöhnlichen Dingen intelligente Dinge machen, ist es bequemer, mit dem Zigbee-Protokoll zu arbeiten. In diesem Fall müssen wir uns keine Sorgen um ihre Adressen und Abdeckungsbereiche machen, außerdem können sie batteriebetrieben sein. Wi-Fi-Geräte benötigen eine ständige Stromversorgung und sind abhängig von der Stärke des Wi-Fi-Signals. Selbst in einer kleinen Wohnung, in der sich ein paar Wände zwischen dem Router und Ihrem Schlafzimmer befinden, müssen Sie manchmal einen Wi-Fi-Extender installieren. Im Falle von Zigbee fungieren die Geräte selbst als Repeater.

Zurück nach Zypern stellte sich mein erforderliches Minimum an Geräten wie folgt heraus:

## Computer - Heimserver

Die ultimative Aufgabe für den Server besteht darin, ein Smart Home zu bedienen, das von Home Assistant gesteuert wird. Der einfachste Weg ist, den bereits vorkonfigurierten [Home Assistant Green](https://www.home-assistant.io/green/) zu nehmen. Kosten [€70 ohne Steuern](https://thepihut.com/products/home-assistant-green).

<LessonImages src="school-2024-cyprus-relocant-manual/home-assistant-green.png" alt="Home Assistant green"/>

Die Option ist etwas fortgeschrittener, aber Sie können sogar die Kontrolle über das Betriebssystem haben, das ist zu finden/kaufen [Raspberry Pi](https://www.raspberrypi.com). Kosten [€90 ohne Steuern](https://https://thepihut.com/products/raspberry-pi-5-starter-kit). Die [Installations](https://www.home-assistant.io/installation/) Seite bietet viele Optionen, um allen Geschmäckern gerecht zu werden.

<LessonImages imageClasses="small" src="school-2024-cyprus-relocant-manual/raspberry-pi.png" alt="Raspberry Pi"/>

Als Zigbee-Koordinator nehmen wir [Sonoff Zigbee Dongle P oder E](https://sonoff.tech/product/gateway-and-sensors/sonoff-zigbee-3-0-usb-dongle-plus-p/), sie sind praktisch immer auf der Insel verfügbar. Kosten ca. [€35](https://www.amazon.de/-/en/dp/B09KXTCMSC/). Sie können auch einen Stick aus [dieser Liste](https://www.zigbee2mqtt.io/guide/adapters/) wählen.

<LessonImages imageClasses="small" src="school-2024-cyprus-relocant-manual/sonoff-zigbee-stick.png" alt="Sonoff Zigbee USB Stick"/>

Ich empfehle dringend, Ihrem Heimserver eine statische lokale IP-Adresse zuzuweisen. Wenn es nicht möglich ist, in die Router-Einstellungen zu gelangen, können Sie zusätzlich einen zweiten Router installieren (ich habe [MikroTik](https://mikrotik.com/product/hap_ax2), ungefähr [€80](https://www.mstronics.com/c/337_1345_485/networking-devices-routers.html?filter_id=154)), und das Internet darauf konfigurieren. Und im Allgemeinen ist es besser, allen intelligenten WLAN-Geräten eine statische IP zuzuweisen. Dies ist oft wichtig, damit Home Assistant-Integrationen ordnungsgemäß funktionieren.

## Schalter für den Kessel

Der Kessel verbraucht 3-3,5 kWh und ein normaler intelligenter Schalter funktioniert nicht. Bei der Auswahl sollten Sie darauf achten, dass der zulässige Strom mindestens 16A und vorzugsweise 20A beträgt. Es ist schwierig, einen Zigbee-Schalter auf der Insel selbst schnell zu finden. Ich habe ihn aus [China](https://vi.aliexpress.com/item/1005006833309900.html) bestellt, er kostete etwa 20 €.

<robo-academy-grid :columns="2" textAlign="center">
    <robo-academy-grid-element>
      <LessonImages src="school-2024-cyprus-relocant-manual/boiler-switch-dimension.png" alt="Boiler Switch"/>
    </robo-academy-grid-element>
    <robo-academy-grid-element>
      <LessonImages src="school-2024-cyprus-relocant-manual/boiler-switch-wiring.png" alt="Boiler Switch Wiring"/>
    </robo-academy-grid-element/>
</robo-academy-grid>

Die erste und wichtigste Automatisierung besteht darin, den Schalter N Minuten nach jeder Aktivierung auszuschalten. Wir richten es ein und denken nicht mehr darüber nach, ob Sie vergessen haben, den Schalter auszuschalten oder ob er bereits den dritten Tag funktioniert. Ein Beispiel für die Automatisierung für Home Assistant, Sie müssen es durch Ihre `device_id` und `entity_id` ersetzen:

<LessonCodeWrapper language="yaml" noCopyIcon>
    alias: Boiler turn off after 30 min
    description: ""
    trigger:
    - platform: device
        type: turned_on
        device_id: a7ee4b26ec5b9e36d959f7b4b8490c42
        entity_id: 61230c7b5528330e3b60ee38c5fe1f12
        domain: switch
        for:
        hours: 0
        minutes: 30
        seconds: 0
    condition: []
    action:
    - type: turn_off
        device_id: a7ee4b26ec5b9e36d959f7b4b8490c42
        entity_id: 61230c7b5528330e3b60ee38c5fe1f12
        domain: switch
    mode: single
</LessonCodeWrapper>

Sie können die Zeit im Laufe des Jahres ändern. Zum Beispiel muss ich im Februar das Wasser eine Stunde lang heizen, und im April reichen 30 Minuten aus. Es ist nützlich, eine Benachrichtigung auf Ihr Telefon zu senden, wenn das Wasser erhitzt ist.

<robo-academy-note type="note" title="Homework">
  Erstellen Sie eine Automatisierung, die den Boiler nach einer bestimmten Zeit von X Minuten ausschaltet. Um die Zeit als Variable festzulegen, sehen Sie sich <a href="https://www.home-assistant.io/integrations/input_number/">diese Integration</a> an
</robo-academy-note>

## IR-Fernbedienungen für Klimaanlagen und Fernseher

Fernbedienungen sind mit Wi-Fi-Verbindung (benötigen konstante Stromversorgung) und Zigbee-Verbindung (batteriebetrieben) erhältlich.

Die Wi-Fi-Option, die ich ausprobiert habe, stammt vom Hersteller [Broadlink](https://www.ibroadlink.com/productinfo/762674.html), gekauft auf [Amazon](https://www.amazon.de/-/en/dp/B07ZSG9Y67/), etwa 30 €. Für die Ersteinrichtung müssen Sie ihre Anwendung auf Ihrem Telefon installieren und ein Konto erstellen, aber danach funktioniert die IR-Fernbedienung im lokalen Netzwerk und die Verbindung zu HA erfolgt über [Integration](https://www.home-assistant.io/integrations/broadlink/). Um die Fernbedienung weiter anzupassen, empfehle ich, das [SmartIR](https://github.com/smartHomeHub/SmartIR) Repository anzusehen - dies ist eine große Bibliothek mit fertigen Befehlen für verschiedene Klimaanlagen und Fernseher.

<robo-academy-note type="note" title="Tipp">
  Wenn Ihr spezifisches Klimaanlagenmodell nicht gefunden wird, versuchen Sie es mit anderen Modellen desselben Herstellers. Die Befehle werden wahrscheinlich die gleichen sein und Sie können Ihre Klimaanlage anschließen.
</robo-academy-note>

<LessonImages src="school-2024-cyprus-relocant-manual/broadlink-ir.png" alt="Broadlink IR Remote Control"/>

Beispielkonfiguration für Broadlink IR Remote:

<LessonCodeWrapper language="yaml" noCopyIcon>
    climate:
    - platform: smartir
        name: Living Room AC
        unique_id: living_room_ac
        device_code: 1390
        controller_data: remote.living_room_ir_remote_control
        temperature_sensor: sensor.0xa4c138b6ad623598_temperature
        humidity_sensor: sensor.0xa4c138b6ad623598_humidity 
</LessonCodeWrapper>

Fernbedienungen, die mit Zigbee betrieben werden, benötigen keine konstante Stromverbindung, sondern laufen mit Batterien. Einerseits ist dies ein Pluspunkt, da Sie das Gerät an einem beliebigen bequemen Ort im Raum platzieren können. Andererseits müssen die Batterien bei Bedarf gewechselt werden. Der Einrichtungsprozess für solche Fernbedienungen kann auch von Broadlink abweichen. Wenn Sie die SmartIR-Bibliothek nicht verwenden können, muss die Fernbedienung für jede einzelne Befehl separat geschult und in der Home Assistant-Konfiguration gespeichert werden.

Programmierbare Fernbedienungen sind sehr einfach zu installieren und zu konfigurieren; sie erfordern keine Wandmontage oder Anschluss an einen Klimaanlagenbus. Es gibt jedoch eine leichte Einschränkung aufgrund des fehlenden Feedbacks zwischen den Geräten. Wir können nicht überprüfen, ob die Klimaanlage eingeschaltet ist und genau den Befehl ausführt, den wir gesendet haben. Wir tun es jedoch schnell und ohne Schaden an der Wohnung. Um der Fernbedienung etwas mehr Informationen zu geben, können Sie z.B. einen beliebigen Zigbee-Temperatur- und Feuchtigkeitssensor installieren, z.B. [diesen](https://vi.aliexpress.com/item/1005005595631552.html) für 10 €, und die Messwerte mit der Fernbedienung verknüpfen. Auf diese Weise haben wir einfaches Feedback, und die Anzahl interessanter Szenarien steigt.

## Energiemesser

Es gibt halb invasive Zähler für den Stromverbrauch, wie den im Bild unten:

<LessonImages imageClasses="small" src="school-2024-cyprus-relocant-manual/energy-meter.png" alt="Energy Meter"/>

Sie müssen durch Anlegen von L und N an den Eingang mit Strom versorgt werden. Auf der anderen Seite ist ein Induktionsring mit dem Zähler verbunden, den wir an einer Phase oder Verbraucherleitung zur Messung aufhängen. Die meisten Häuser und Wohnungen haben 3 Phasen, was bedeutet, dass Sie 3 solche Module installieren müssen. Ich habe es auf [Amazon](https://www.amazon.de/gp/product/B0C37DJXVD/) für 60 € gekauft, eins für jede Phase. Ältere Häuser haben möglicherweise nur eine Phase.

## Fazit

Für mich ist ein Smart Home keine Luxus, sondern eine Notwendigkeit. Dies ist ein Ort, an dem ich mich entspannen und Zeit mit meiner Familie verbringen möchte, ohne Energie für die Lösung alltäglicher Probleme zu verschwenden. Die Kosten des oben genannten Kits betrugen in meinem Fall etwa 500 € und ein paar Abende. Das Ergebnis ist unbezahlbar!