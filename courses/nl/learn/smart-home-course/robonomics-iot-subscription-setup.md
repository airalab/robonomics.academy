---
title: "Les #5, Robonomics IoT Abonnement Setup"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: thuiscursus assistent
lessonNumber: 6
metaOptions: [Leer, Soevereine Slimme Woning met Robonomics en Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## Waar gaat dit over

Robonomics IoT Abonnement stelt gebruikers in staat om alle functies van de parachain te gebruiken voor een bepaalde periode zonder de standaard transactiekosten te betalen. Door het abonnement te activeren, kunnen apparaten transacties met prioriteit verzenden.

In deze les zul je de nodige slimme huisbeveiligingsaccounts aanmaken en een IoT-abonnement aanschaffen.

## Theorie

Een IoT-abonnement, evenals de manier waarop het wordt aangeschaft en beheerd, wordt geïmplementeerd met behulp van een <code>rws</code> pallet, die alle noodzakelijke functies bevat. Over het algemeen worden abonnementen in Robonomics verkocht met een veilingmodel, dat een <code>rws.startAuction()</code> extrinsieke gebruikt om een veiling voor een specifiek abonnements-ID te creëren. Gebruikers kunnen toegang krijgen tot de veiling via ID en bieden met behulp van een <code>rws.bid()</code> extrinsieke.

Na het einde van de veiling wordt het adres met het winnende bod toegewezen aan het abonnement. Nu kan dit adres transacties verzenden via de <code>rws.call()</code> extrinsieke zonder kosten. Dit betekent echter niet dat het adres dit ongecontroleerd op elk moment kan doen: elk abonnement heeft een bepaalde hoeveelheid van een <code>weight</code> waarde, die moet worden opgebouwd voordat een gratis transactie kan worden uitgevoerd. Er wordt wat <code>weight</code> waarde toegevoegd aan het abonnement bij elke gegenereerde blok in de parachain, hierdoor regelt Robonomics de bandbreedte van de parachain.

Bovendien kan de eigenaar van het abonnement de <code>rws.setDevices()</code> extrinsieke gebruiken, die het gebruik van het abonnement deelt met de opgegeven adressen. Tegelijkertijd blijft de <code>weight</code> hetzelfde, dus hoe meer adressen in het abonnement, hoe langer elk van hen zal moeten wachten voordat ze de gratis transactie kunnen verzenden.

Om Home Assistant te besturen met Robonomics, heb je twee accounts nodig op de Robonomics parachain. Deze accounts zullen beveiliging bieden voor je Home Assistant.

Met een van de accounts (<code>SUB_OWNER</code>) koop je een Robonomics abonnement. Dit account fungeert als de hoofdbeheerder van het IoT-abonnement en biedt toegang tot Home Assistant aan andere gebruikers (met behulp van <code>rws.setDevices()</code>). Dit account moet wat XRT-tokens hebben om transacties voor abonnementsaankopen te voltooien.

Het tweede account (<code>SUB_CONTROLLER</code>) zal alle Home Assistant-processen van apparaten controleren (zoals telemetrie). Transacties van je apparaten worden namens het <code>SUB_CONTROLLER</code> account verzonden. Jij (en anderen) zullen deze transacties kunnen zien in elke parachain-verkenner zoals [Subscan](https://robonomics.subscan.io/). Echter, alleen jij zult in staat zijn om de inhoud van deze transacties te decoderen zolang je veilig de nodige seedfrases bezit.

## Instructies

<List type="numbers">

<li>

Aanmaken van Eigenaar en Controller Parachain Accounts

<List>

<li>

<robo-academy-note type="warning" title="WARNING">
Beide accounts moeten worden aangemaakt met ed25519-encryptie.
</robo-academy-note>

</li>

<li>

Ga naar [Robonomics Parachain app](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) op Polkadot / Substrate Portal. Controleer de linkerbovenhoek om ervoor te zorgen dat je verbonden bent met Robonomics Parachain.

</li>

<li>

Vanwege het gebruik van het *ed25519* formaat, moet je een account aanmaken met behulp van de Polkadot-JS UI en de vereiste versleuteling selecteren. 

Deze functie is standaard uitgeschakeld op de Polkadot-JS UI. Om het in te schakelen, ga naar <code>Instellingen</code> -> <code>Algemeen</code> -> <code>accountopties</code> en selecteer <code>Lokale opslag van accounts in de browser toestaan</code> in het vervolgkeuzemenu <code>accountcreatie in de browser</code>.
 
</li>

<li>

Ga naar <code>Accounts</code> -> <code>Accounts</code> en druk op de knop <code>Account toevoegen</code>. Je ziet het pop-upmenu met accountseed. Het heeft twee vormen: *Mnemonic* (menselijk leesbaar) en *Raw* (een reeks cijfers en letters).

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQiJYPYajUJXENX2PzSJMSKGSshyWyPNqugSYxP5eCNvm', type:'mp4'}]" />

</li>

<li>

Open <code>Geavanceerde creatieopties</code>, verander het cryptotype van het aanmaken van een account naar <code>Edwards - ed25519</code>. Bewaar de mnemonische seedzin veilig en druk op <code>Volgende</code>.

</li>

<li>

In het volgende menu moet je de accountnaam en het wachtwoord instellen. Geef het de naam <code>SUB_OWNER</code> voor het gemak en druk op <code>Volgende</code>.

</li>

<li>

Klik op het laatste venster op <code>Opslaan</code> om het aanmaken van het account te voltooien. Er worden ook back-up JSON-bestanden gegenereerd die je veilig moet opslaan. Je kunt dit bestand later gebruiken om je account te herstellen als je het wachtwoord herinnert.

</li>

<li>

Herhaal deze stappen voor het account <code>SUB_CONTROLLER</code>.

</li>
</List>
</li>

<li>

Accounts toevoegen aan Polkadot.js Extension

<List type="numbers">

<li>

Voor het gemak moet je de Polkadot.js-extensie gebruiken en deze nieuw aangemaakte accounts eraan toevoegen. Voor een ed25519-account kun je dat alleen doen met een back-up JSON-bestand. Je kunt de bestanden gebruiken die zijn opgeslagen toen je de accounts aanmaakte.

Je kunt deze bestanden opnieuw krijgen door een back-upbestand van het account te maken. Druk op de drie puntjes op je account, kies <code>Maak een back-upbestand voor dit account</code> en typ je wachtwoord in.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmRd7gztUjWkLF4W2XuJwy5aXBwzNV2aPCU6CQQLvUpSNj', type:'mp4'}]" />

</li>

<li>

Open een extensie en druk op de knop <code>+</code> rechtsboven, kies vervolgens <code>Herstel account van back-up JSON-bestand</code>.

</li>

<li>

Upload in een geopend venster het JSON-bestand, voer het wachtwoord in en druk op <code>Herstellen</code>

</li>

<li>

Zorg ervoor dat het Robonomics-netwerk is geselecteerd voor accounts in de Polkadot.js-extensie. Ga op Polkadot / Substrate Portal naar <code>Instellingen</code> -> <code>Metadata</code> en klik op de knop <code>Metadata bijwerken</code>. 

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmT5sTNP9t8gpbD4RJJw6ETwG4wiziiChAh2uHHBk9Zsyd', type:'mp4'}]" />

</li>

<li>

Bevestig de metadata-update in het pop-upvenster. Nu zal de extensie het label van het netwerk tonen waarvoor het adres wordt gebruikt.

</li>

</List>
</li>

<li>

Activering van Robonomics-abonnement

<List >

<li>

<robo-academy-note type="okay">
Voor deze stap moet je een voldoende hoeveelheid XRT-tokens (minimaal 2-3 XRT's) hebben in je <code>SUB_OWNER</code> account.
</robo-academy-note>

Ga naar de Robonomics dapp naar de [abonnementspagina](https://dapp.robonomics.network/#/subscription) en druk op <code>account verbinden</code> aan de rechterkant.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmXrFCajmJgkRDSbshGD3QehjnoyS6jafEPSjHdYkoBHum', type:'mp4'}]" />

</li>

<li>

Verbind in het volgende pop-upmenu de Polkadot.js-extensie. Je ziet je accountadres met saldo.

</li>

<li>

Controleer voordat je koopt of je het <code>SUB_OWNER</code> account hebt gekozen. Druk op het adresprofielpictogram, je zou het <code>SUB_OWNER</code> account moeten zien onder het veld <code>Controleer eigenaarsaccount</code>.

</li>

<li>

Druk tot slot op de <code>VERZENDEN</code> knop en voer het wachtwoord voor je account in. Wacht daarna tot het activeringsproces is voltooid. Je zult na een tijdje de status van je abonnement zien.

Als er geen abonnementen beschikbaar zijn, **neem dan contact op** met het Robonomics-team.

</li>
</List>
</li>

<li>

Account toevoegen aan abonnement

<List type="numbers">

<li>

Nu moet je het <code>SUB_CONTROLLER</code> account toevoegen aan **de toegangslijst**. Open de extensie en klik op het pictogram bij de accountnaam. Het zal het accountadres kopiëren.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmV1gkwtcXsWv54ov9tuXfcHg7nqs1foM8cRwts4sqnqtX', type:'mp4'}]" />

</li>

<li>

Plak dit adres in het veld <code>Robonomics parachain-adres</code> in het **Toegang beheren** gedeelte.

Geef het een naam en druk op de <code>+</code> knop. Voer je <code>SUB_OWNER</code> wachtwoord in het pop-upvenster in en wacht tot het activeringsproces is voltooid.

</li>

<li>

Herhaal de stappen voor het <code>SUB_OWNER</code> account.
</li>
</List>
</li>
</List>