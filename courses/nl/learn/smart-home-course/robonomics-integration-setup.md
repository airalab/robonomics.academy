---
title: "Les #6, Robonomics-integratie instellen"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: thuiscursus assistent
lessonNumber: 7
metaOptions: [Leer, Soevereine Slimme Woning met Robonomics en Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## Waar gaat dit over

In deze les voeg je Robonomics toe aan Home Assistant en maak je een account aan dat is gekoppeld aan het abonnement. Deze integratie stelt Home Assistant in staat om Robonomics parachain functies te gebruiken, in de eerste plaats om versleutelde slimme thuisgegevens naar een gedecentraliseerde cloud te sturen.


## Theorie

Je slimme thuisgegevens worden verzonden met behulp van de <code>record()</code> extrinsieke van het <code>datalog</code> pallet dat je in staat stelt om versleutelde apparaatgegevens op de blockchain op te slaan. 

Om preciezer te zijn, gebruikt de integratie IPFS om gegevens op te slaan en vervolgens IPFS-hashes naar de datalog extrinsieke te sturen, die op zijn beurt in de blockchain wordt opgeslagen. Maar aangezien deze functie wordt aangeroepen via een IoT-abonnement, ziet de hele functie er als volgt uit: <code>rws.call(datalog.record(JOUW_IPFS_HASH))</code>.

## Instructies

<List type="numbers">

<li>

Robonomics toevoegen aan Home Assistant

<List>

<li>

Ga in de webinterface van Home Assistant naar <code>Instellingen</code>-><code>Apparaat & Services</code> en druk op <code>INTEGRATIE TOEVOEGEN</code>. Zoek naar <code>Robonomics</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQp66J943zbF6iFdkKQpBikSbm9jV9La25bivKd7cz6fD', type:'mp4'}]" />

</li>

<li>

Klik op Robonomics en vul de configuratie in: 

\- Voeg de seed toe van het <code>SUB_CONTROLLER</code> account aan het admin account seed

\- Voeg het openbare adres toe van het <code>SUB_OWNER</code> account (dat je eerder hebt aangemaakt) aan het abonnee-eigenaar adres

\- Stel het interval in voor het verzenden van gegevens (standaard is dit 10 minuten)

\- (Optioneel) Je kunt referenties toevoegen voor de pinning service Pinata om je gegevens breder te verspreiden over het IPFS-netwerk

</li>

<li>

Druk op <code>VERZENDEN</code> nadat je de configuratie hebt voltooid. Als je alles correct hebt ingevuld, zie je het Succes venster.

</li>
</List>
</li>

<li>

Gebruikers toevoegen in Robonomics Dapp 

<List>

<li>

Je moet een aparte gebruiker aanmaken voor Home Assistant, die de slimme apparaten in huis zal bedienen. Je kunt geen eerder aangemaakte accounts gebruiken omdat <code>SUB_OWNER</code> en <code>SUB_CONTROLLER</code> beveiliging bieden, en de eerste gebruiker die je hebt aangemaakt toen je Home Assistant voor het eerst startte, heeft geen Robonomics Parachain-account.

</li>

<li>
Begin met het aanmaken van een account op Robonomics Parachain, zoals je deed in de vorige les.
</li>

<li>

Voeg dit account toe aan de abonnement in de [dapp](https://dapp.robonomics.network/#/subscription/devices). Nu zouden er drie adressen in de toegangslijst moeten staan: <code>SUB_OWNER</code>, <code>SUB_CONTROLLER</code> en <code>USER</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSxzram7CF4SXpVgEyv98XetjYsxNFQY2GY4PfyhJak7H', type:'mp4'}]" />

</li>

<li>

Ga naar de dapp-service genaamd [Home Assistant Account](https://dapp.robonomics.network/#/home-assistant). Kies het account dat je zojuist hebt aangemaakt aan de rechterkant (controleer of je het juiste account hebt gekozen door op het profielpictogram te drukken).

Voer de <code>USER</code> seed in het vereiste veld in. Voeg <code>SUB_OWNER</code> en <code>SUB_CONTROLLER</code> adressen toe in de velden voor beheerderscredits. Als alles correct is, zie je de verificatiestatus <code>VERIFIED</code>.

</li>

<li>

Maak een wachtwoord aan voor een nieuwe gebruiker die je zojuist hebt geregistreerd en bevestig vervolgens de transactie, die nu zonder kosten zal zijn vanwege het abonnement. Later kun je het wachtwoord herstellen in het <code>Herstellen</code> tabblad.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmW2TXuwCYXzgcRfEUx4imZU5ZerEzkuD5P53u9g2WnxDh', type:'mp4'}]" />

</li>

<li>

Na het registratieproces, log in op Home Assistant met je gebruikersadres als login en een nieuw aangemaakt wachtwoord. Nu kun je de Robonomics dapp gebruiken om je huis te bedienen via Robonomics.

</li>
</List>
</li>
</List>