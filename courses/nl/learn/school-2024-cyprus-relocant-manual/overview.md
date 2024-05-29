---
title: "Robonomics School 2024 / Cyprus Relocant Handleiding: Slim Huis"
lastUpdate: 
description: "Cyprus Relocant Handleiding: Slim Huis"
metaOptions: [Leer, "Robonomics School 2024 / Cyprus Relocant Handleiding: Slim Huis"]
defaultName: "Robonomics School 2024 / Cyprus Relocant Manual: Smart Home"
---

<LessonImages imageClasses="mb"  src='school-2024-cyprus-relocant-manual/Setup_SmartHome-Academy.jpg' alt="Cyprus Relocant Manual Cover" />

Het veranderen van uw land van verblijf brengt altijd niet alleen nieuwe kansen met zich mee, maar ook uitdagingen. Het gebeurde zo dat in mijn geval het nieuwe land Cyprus was, waar ik kwam om een bedrijf op te bouwen. De laatste 10 jaar voordat ik verhuisde, woonde ik in een grote stad, waar ik gewend was geraakt aan bepaalde voordelen in de vorm van centrale verwarming vanuit de stad, warmwatervoorziening en goedkope elektriciteit. In Cyprus is elk huis en elk appartement veel autonomer wat betreft levensondersteuning, maar de zorgen over het behouden van een comfortabel leven vallen op de eigenaar. Neem bijvoorbeeld warm water. In de koude maanden moet je de boiler zelf aanzetten om het op te warmen. Het appartement moet ook door uzelf worden verwarmd. In de winter zetten we de thermische deken en boiler aan/uit, en in de zomer de airconditioner en muggenwerend middel. Dit vereist niet alleen tijd en energie, maar ook geld.

Mijn eerste winter in Cyprus resulteerde in astronomische elektriciteitsrekeningen. Dit was een serieuze klap voor mijn budget. Een mogelijke oplossing: verander uw gewoonten en pas u aan nieuwe omstandigheden aan. Maar na de verhuizing zult u al genoeg zorgen hebben. Als ingenieur begon ik op zoek te gaan naar oplossingen die me zouden helpen de kosten onder controle te houden en mijn leven comfortabeler te maken, en ik wil mijn ervaring met u delen.

## Hardware Kiezen

Het eerste waar ik mee wil beginnen is het kiezen van een ecosysteem. Bedrade systemen vallen meteen af, omdat ze grote budgetten en serieuze ingrepen in de infrastructuur van het appartement/huis vereisen. Van de draadloze apparaten zijn er een groot aantal apparaten onder de merken Sonoff en Tyua, maar ze werken allemaal via het internet, wat niet altijd betrouwbaar werkt op het eiland. Dit laat nog buiten beschouwing het probleem van privacy en veiligheid van uw persoonlijke gegevens op de servers van andere bedrijven. Ik raad aan om uw slimme huis te bouwen met [Home Assistant](https://www.home-assistant.io) als hoofdthuisserver. Voordelen: kan werken zonder toegang tot het externe internet; het is mogelijk om het mee te nemen bij het verhuizen en het in een nieuwe plaats in te zetten zonder de instellingen te verliezen; ondersteunt een groot aantal apparaten, waaronder slimme tv's, stofzuigers en nog veel meer.

De meest populaire protocollen voor draadloze verbinding van apparaten zijn Wi-Fi, Zigbee, Bluetooth. In een appartement kunnen alle drie soorten verbindingen tegelijk worden gevonden, maar wat betreft apparaten die slimme dingen maken van gewone dingen, is het handiger om met het Zigbee-protocol te werken. In dit geval hoeven we ons geen zorgen te maken over hun adressen en dekking, plus ze kunnen op batterijen werken. Wi-Fi-apparaten hebben een constante verbinding met stroom nodig en zijn afhankelijk van de sterkte van het Wi-Fi-signaal. Zelfs in een klein appartement, waar een paar muren tussen de router en uw slaapkamer staan, moet u soms een Wi-Fi-extender installeren. In het geval van Zigbee fungeren de apparaten zelf als repeaters.

Terugkomend op Cyprus, bleek mijn vereiste minimum aan apparaten als volgt te zijn:

## Computer - Thuisserver

De ultieme taak voor de server is om een slim huis te bedienen dat wordt gecontroleerd door Home Assistant. De makkelijkste manier is om de al voorgeconfigureerde [Home Assistant Green](https://www.home-assistant.io/green/) te nemen. Kosten [€70 exclusief belasting](https://thepihut.com/products/home-assistant-green).

<LessonImages src="school-2024-cyprus-relocant-manual/home-assistant-green.png" alt="Home Assistant green"/>

De optie is iets geavanceerder, maar je kunt zelfs controle hebben over het besturingssysteem, dit is te vinden/te koop [Raspberry Pi](https://www.raspberrypi.com). Kosten [€90 exclusief belasting](https://https://thepihut.com/products/raspberry-pi-5-starter-kit). De [Installatie](https://www.home-assistant.io/installation/) pagina heeft veel opties om aan alle smaken te voldoen.

<LessonImages imageClasses="small" src="school-2024-cyprus-relocant-manual/raspberry-pi.png" alt="Raspberry Pi"/>

Als Zigbee Coordinator nemen we [Sonoff Zigbee Dongle P of E](https://sonoff.tech/product/gateway-and-sensors/sonoff-zigbee-3-0-usb-dongle-plus-p/), ze zijn praktisch altijd beschikbaar op het eiland. Kosten ongeveer [€35](https://www.amazon.de/-/en/dp/B09KXTCMSC/). Je kunt ook een stick kiezen uit [deze lijst](https://www.zigbee2mqtt.io/guide/adapters/).

<LessonImages imageClasses="small" src="school-2024-cyprus-relocant-manual/sonoff-zigbee-stick.png" alt="Sonoff Zigbee USB Stick"/>

Ik raad ten zeerste aan om een statisch lokaal IP-adres toe te wijzen aan je thuisserver. Als het niet mogelijk is om in de routerinstellingen te komen, dan kun je bovendien een tweede router installeren (ik heb [MikroTik](https://mikrotik.com/product/hap_ax2), ongeveer [€80](https://www.mstronics.com/c/337_1345_485/networking-devices-routers.html?filter_id=154)), en configureer het internet erop. En in het algemeen is het beter om alle slimme Wi-Fi apparaten een statisch IP toe te wijzen. Dit is vaak belangrijk voor Home Assistant integraties om goed te werken.

## Schakelaar voor de ketel

De ketel verbruikt 3-3,5 kWh en een gewone slimme schakelaar zal niet werken. Bij het kiezen, let erop dat de toegestane stroom minstens 16A moet zijn, en bij voorkeur 20A. Het is moeilijk om snel een Zigbee-schakelaar op het eiland zelf te vinden, ik heb er een besteld uit [China](https://vi.aliexpress.com/item/1005006833309900.html), het kostte ongeveer €20.

<robo-academy-grid :columns="2" textAlign="center">
    <robo-academy-grid-element>
      <LessonImages src="school-2024-cyprus-relocant-manual/boiler-switch-dimension.png" alt="Boiler Switch"/>
    </robo-academy-grid-element>
    <robo-academy-grid-element>
      <LessonImages src="school-2024-cyprus-relocant-manual/boiler-switch-wiring.png" alt="Boiler Switch Wiring"/>
    </robo-academy-grid-element/>
</robo-academy-grid>

De eerste en belangrijkste automatisering is om de knop N minuten na elke activering uit te schakelen. We stellen het in en denken niet langer na of je vergeten bent de knop uit te zetten of dat hij al drie dagen aan het werken is. Een voorbeeld van automatisering voor Home Assistant, je moet het vervangen door je `device_id` en `entity_id`:

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

Je kunt de tijd gedurende het jaar aanpassen. Bijvoorbeeld, in februari moet ik het water een uur verwarmen, en in april is 30 minuten genoeg. Iets nuttigs is om een melding naar je telefoon te sturen wanneer het water is verwarmd.

<robo-academy-note type="note" title="Homework">
  Maak een automatisering die de ketel na een bepaalde X minuten uitschakelt. Om de tijd als variabele in te stellen, bekijk <a href="https://www.home-assistant.io/integrations/input_number/">deze integratie</a>
</robo-academy-note>

## IR Afstandsbedieningen voor airconditioners en tv

Afstandsbedieningen komen met Wi-Fi-verbinding (vereisen constante stroom) en Zigbee-verbinding (batterijgevoed).

De Wi-Fi-optie die ik heb geprobeerd was van de fabrikant [Broadlink](https://www.ibroadlink.com/productinfo/762674.html), gekocht op [Amazon](https://www.amazon.de/-/en/dp/B07ZSG9Y67/), ongeveer €30. Voor de initiële installatie moet je hun applicatie op je telefoon installeren en een account aanmaken, maar daarna zal de IR-afstandsbediening werken op het lokale netwerk, verbinding maken met HA gebeurt via [integratie](https://www.home-assistant.io/integrations/broadlink/). Om de afstandsbediening verder aan te passen aan je behoeften, raad ik aan om te kijken naar het [SmartIR](https://github.com/smartHomeHub/SmartIR) repository - dit is een grote bibliotheek van kant-en-klare commando's voor verschillende airconditioners en tv's.

<robo-academy-note type="note" title="Tip">
  Als je specifieke A/C-model niet wordt gevonden, probeer dan andere modellen van dezelfde fabrikant. De commando's zullen waarschijnlijk hetzelfde zijn en je kunt je A/C verbinden.
</robo-academy-note>

<LessonImages src="school-2024-cyprus-relocant-manual/broadlink-ir.png" alt="Broadlink IR Remote Control"/>

Voorbeeldconfiguratie voor Broadlink IR Remote:

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

Afstandsbedieningen die op Zigbee draaien hebben geen constante stroomverbinding nodig, maar werken op batterijen. Aan de ene kant is dit een pluspunt, omdat je het apparaat op elke handige plek in de kamer kunt plaatsen. Aan de andere kant moeten de batterijen indien nodig worden vervangen. Het installatieproces voor dergelijke afstandsbedieningen kan ook verschillen van Broadlink. Als je de SmartIR-bibliotheek niet kunt gebruiken, moet de afstandsbediening voor elke opdracht afzonderlijk worden getraind en opgeslagen in de Home Assistant-configuratie.

Programmeerbare afstandsbedieningen zijn zeer eenvoudig te installeren en configureren; ze vereisen geen wandmontage of aansluiting op een airconditionerbus. Er is echter een lichte beperking vanwege het ontbreken van feedback tussen apparaten. We kunnen niet verifiëren dat de A/C is ingeschakeld en precies de opdracht uitvoert die we hebben verzonden. Toch doen we het snel en zonder schade aan het appartement. Om de afstandsbediening wat meer informatie te geven, kun je bijvoorbeeld een Zigbee-temperatuur- en vochtigheidssensor installeren, zoals [deze](https://vi.aliexpress.com/item/1005005595631552.html) voor €10, en de metingen koppelen aan de afstandsbediening. Op deze manier hebben we eenvoudige feedback en neemt het aantal interessante scenario's toe.

## Energiemeter

Er zijn semi-invasieve meters voor elektriciteitsverbruik, zoals degene in de onderstaande afbeelding:

<LessonImages imageClasses="small" src="school-2024-cyprus-relocant-manual/energy-meter.png" alt="Energy Meter"/>

Ze moeten worden gevoed door L en N aan de ingang aan te sluiten. Aan de andere kant is een inductiering verbonden met de meter, die we aan een fase- of verbruikslijn hangen voor meting. De meeste huizen en appartementen hebben 3 fasen, wat betekent dat je 3 van zulke modules moet installeren. Ik heb het gekocht op [Amazon](https://www.amazon.de/gp/product/B0C37DJXVD/) voor €60, één voor elke fase. Oudere huizen hebben misschien maar één fase.

## Conclusie

Voor mij is een slim huis geen luxe, maar een noodzaak. Dit is een plek waar ik wil ontspannen en tijd wil doorbrengen met mijn familie, zonder energie te verspillen aan het oplossen van alledaagse problemen. De kosten van het bovenstaande pakket in mijn geval waren ongeveer €500 en een paar avonden. Het resultaat is onschatbaar!