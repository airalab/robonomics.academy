---
title: "Les #7, Gebruik van Robonomics met Home Assistant"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: thuiscursus assistent
lessonNumber: 8
metaOptions: [Leer, Soevereine Slimme Woning met Robonomics en Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Waar gaat dit over

In deze les zul je proberen om de belangrijkste Robonomics IoT-services te gebruiken. De eerste kan de telemetrie van slimme thuisapparaten opvragen, waardoor je op afstand gegevens van Home Assistant kunt ontvangen. De tweede service genereert back-ups van je Home Assistant-configuratie en herstelt deze wanneer dat nodig is (bijvoorbeeld bij een defecte SD-kaart).


## Over parachain functies

Hierna zul je zien hoe de functies van de Robonomics parachain worden gebruikt om de Home Assistant-gebruiker van de benodigde service te voorzien. 

Het verkrijgen van telemetrie is gebaseerd op het <code>datalog</code> pallet dat je al kent. Elke bepaalde periode (maar niet minder dan het toegestane gewicht toelaat), wordt een <code>datalog.record()</code> transactie vanaf het <code>SUB_CONTROLLER</code> adres naar de parachain gestuurd met de IPFS-hash van het versleutelde bestand, waarin alle gegevens van je IoT-apparaten zijn verzameld. Om de telemetrie te verkrijgen, vraag je de benodigde datalogs op bij de parachain die verband houden met je IoT-abonnement en ontsleutel je ze vervolgens met je sleutels.

Om een back-up te maken, wordt een ander Robonomics pallet genaamd <code>digitalTwin</code> gebruikt, wat een implementatie is van het idee van een digitale tweeling, een digitale versie van echt apparatuur die de technische kenmerken en historische gegevens kopieert. Eerst wordt er een unieke ID aangemaakt voor de digitale tweeling van je Home Assistant met behulp van de <code>digitalTwin.create()</code> extrinsieke. Vervolgens wordt met behulp van de <code>digitalTwin.setSource()</code> extrinsieke deze ID gebonden aan enkele gegevens (het <code>topic</code> veld) en aan een adres in de parachain (het <code>source</code> veld). Voor de Home Assistant-back-up wordt de hash van het back-upbestand opgeslagen in <code>topic</code>, en het adres van <code>SUB_OWNER</code> wordt opgeslagen in <code>source</code>.

## Instructies

<List type="numbers">

<li>

Telemetrie verkrijgen

<List>


<li>

Ga naar dapp en kies de [SmartHome Telemetry](https://dapp.robonomics.network/#/smarthome-telemetry) service.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmao9RoWcKo2qs4PAGtm5gqHzyAHJcpDqNLgciU35FJeVm', type:'mp4'}]" />

</li>

<li>

Voer in het veld <code>CONTROLLER</code> het <code>SUB_CONTROLLER</code> adres in. Voer de seed-zin in om gegevens te versleutelen.

</li>

<li>

Kies in het blok <code>Get telemetry</code> een tijdstempel uit de vervolgkeuzelijst en druk op de knop <code>DOWNLOAD TELEMETRY</code>.


Het downloaden van telemetrie kan enige tijd in beslag nemen. Na voltooiing zie je de informatie van je sensoren.

</li>
</List>
</li>


<li>

Back-up maken

<List>

<li>

Om back-ups te maken, wordt een service aangeroepen die een veilig archief met configuratiebestanden genereert. Deze service voegt vervolgens het archief toe aan IPFS en slaat de resulterende CID op in Robonomics Digital Twin.

<robo-academy-note type="warning" title="WARNING">
Om je configuratie te herstellen, is het noodzakelijk om een aangepaste IPFS-gateway te gebruiken zoals Pinata (pinata.cloud) of Crust Network (crust.network). Zonder dit zal je back-up alleen worden opgeslagen op je lokale IPFS-node, wat je kan beletten om je Home Assistant-configuratie te herstellen in geval van een storing van de lokale node. 
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVo91dLaAYgFDM1vrL2PYfAffM6SGGC59ZERbfHR44tqW', type:'mp4'}]" />

</li>

<li>

In de webinterface van Home Assistant ga naar <code>Ontwikkelaarshulpmiddelen</code> -> <code>Services</code>. Zoek naar <code>Robonomics: Backup opslaan naar Robonomics</code> en druk op <code>CALL SERVICE</code>.

</li>

<li>

Wacht tot je de melding <code>Backup is bijgewerkt in Robonomics</code> ziet verschijnen in <code>Meldingen</code>.

</li>

<li>

Om uw configuratie te herstellen, moet u een nieuwe Home Assistant-instantie installeren (en alle vorige stappen herhalen) met Robonomics Home Assistant-integratie met behulp van dezelfde seeds die u eerder heeft aangemaakt. U moet ook een MQTT-broker instellen met dezelfde gebruikersnaam en wachtwoord.

<robo-academy-note type="warning" title="WARNING">
Aangezien sommige apparaten die via Wi-Fi of MQTT met Home Assistant zijn verbonden, vereisen dat u het lokale IP-adres van uw Raspberry Pi expliciet opgeeft, kunnen ze bij het herstellen van een back-up niet beschikbaar zijn vanwege een wijziging in dit IP-adres. U moet het nieuwe IP-adres opnieuw invoeren in de instellingen van deze apparaten. Om dit te voorkomen, kunt u een statisch lokaal IP instellen voor uw Raspberry Pi in de instellingen van uw router (indien deze functie wordt ondersteund).
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmWmnmkXUcPXsAnQzwN3UEuki2GMYnQDx3vhgjEypCU8aR', type:'mp4'}]" />


</li>

<li>

In de webinterface van Home Assistant ga naar <code>Ontwikkelaarshulpmiddelen</code> -> <code>Services</code>. Zoek naar <code>Robonomics: Herstellen van de back-up in Robonomics</code> en druk op <code>CALL SERVICE</code>. Ga naar de pagina <code>Overzicht</code> om de status van uw back-up te controleren.

</li>

<li>

Zodra Home Assistant klaar is met opnieuw opstarten, wordt uw configuratie hersteld. Als de status verandert in <code>hersteld</code> maar Home Assistant niet automatisch opnieuw opstart, moet u dit handmatig doen door naar <code>Instellingen</code> > <code>Systeem</code> te navigeren en te klikken op de knop <code>HERSTARTEN</code> in de rechterbovenhoek.

</li>

</List>
</li>

</List>

## Cursus voltooid

<List>

<li class="flex"> 

Gefeliciteerd! U heeft met succes de volledige installatie en implementatie van uw soevereine slimme huis voltooid. U kunt nu een cursusvoltooiingscertificaat bij ons aanvragen door onze Discord-kanaal te bezoeken. Schrijf ons in de [robonomics-academie](https://discord.com/channels/803947358492557312/803947358492557315) chat en onze vertegenwoordiger zal contact met u opnemen.
</li>

<li class="flex">

Bewijs van cursusvoltooiing zijn overeenkomstige transacties die kunnen worden geverifieerd in [Polkadot explorer](https://robonomics.subscan.io/). Dit zijn transacties over het kopen van een abonnement, het toevoegen van een apparaat aan een abonnement en het verzenden van datalogs van apparaten.

</li>

</List>