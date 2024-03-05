---
title: "Les #5, IoT-abonnementen Gebruiken van Robonomics Parachain"
lastUpdate: Thu May 04 2023 12:53:55 GMT+0400 (Samara Standard Time)
description: Je leert hoe je een IoT-abonnement kunt kopen op Robonomics Parachain met echte tokens van ons netwerk.
lessonNumber: 5
metaOptions: [Leren, Kennismaking met de ideeën van Robonomics]
defaultName:  Introduction to the ideas of Robonomics
---

De laatste les van onze Introductiecursus is zeer waarschijnlijk de meest uitdagende, omdat het wat geduld van je zal vergen. Je leert hoe je een IoT-abonnement kunt kopen op Robonomics Parachain met echte tokens van ons netwerk.


## Intro

Een IoT-abonnement is een toegangssleutel tot alle functies die verband houden met het veranderen van de status van de digitale tweeling van een cyber-fysiek systeem en het opslaan van infofmatie hierover met behulp van het Polkadot / Kusama-ecosysteem. Het bezitten van een abonnement ontdoet de gebruiker van de noodzaak om transactiekosten te betalen. In plaats daarvan kan de gebruiker één gratis transactie verzenden in een bepaalde periode.

De belangrijkste manier om een abonnement te kopen is doof deel te nemen aan de abonnementsveiling, en daarom moet je in deze les XRT-tokens krijgen om biedingen te doen en transacties in te dienen. Meer infofmatie over dit proces is ook beschikbaar op [onze wiki](https://wiki.robonomics.network/docs/get-subscription).

## Instructies

<List type="numbers">

<li>

Je hebt ongeveer 2 XRT Robonomics Parachain-tokens nodig ([over token](https://robonomics.network/xrt/)). Als je ze niet hebt, heb je verschillende opties:

a) Als je beide tests na Les 2 en Les 4 haalt met 90% correcte antwoorden, kun je gratis tokens aanvragen voor de les. Controleer je scores op [de speciale controle-dapp](https://lk.robonomics.academy/). Specifiek moet je 15 van de 17 scoren voor Les 2 en 10 van de 11 voor Les 4, en je hebt twee pogingen om dit te doen. Neem contact op met de Academy Administrator op onze [Discord](https://discord.gg/xqDgG3EGm9) (IBerman#5862) om tokens te krijgen.

b) Koop XRT-tokens op een van de beurzen (bekijk de [lijst van beurzen](https://www.coingecko.com/en/coins/robonomics-network#markets/)). Wees voorzichtig als je niet bekend bent met cryptocurrency-beurzen, onthoud dat alle aankopen op cryptocurrency-beurzen mogelijke risico's met zich meebrengen, koop alleen de vereiste hoeveelheid tokens om deze les te halen. Houd ook in gedachten dat Robonomics bestaat op twee netwerken, Ethereum en Kusama, dus elk netwerk heeft zijn eigen XRT-token. Je hebt een token nodig dat wordt gebruikt door parachain in het Kusama-netwerk.

c) Als je XRT-token hebt in het Ethereum-netwerk (ERC-20-formaat), gebruik het [Exodus](https://old.dapp.robonomics.network/#/exodus) proces om tokens van het Ethereum-netwerk naar Kusama over te zetten. Houd er rekening mee dat de overdracht van tokens eenmaal per week wordt uitgevoerd.

</li>

<li>

IoT-abonnementen worden gekocht via een veilingproces waarbij de hoogste bieder een abonnement krijgt.

Voordat je probeert deel te nemen aan de veiling, moet je controleren of er een beschikbaar is. Open Robonomics [Polkadot/Substraat portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/chainstate) met Chain state menu. Selecteer <code>rws</code> query met <code>auctionQueue()</code> en druk op de '+' knop. Je zou de ID's van beschikbare veilingen moeten zien; onthoud de ID van een van hen. Als er geen veilingen worden getoond of beschikbaar zijn, neem dan contact met ons op via onze Discord in het "[🎓robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315)" kanaal.

Nu, op hetzelfde Chain state menu, selecteer <code>rws</code> met <code>auction(u32): Option&lt;PalletRobonomicsRwsAuctionLedger&gt;</code> en vul in de velden <code>u32</code> de onthouden ID van de veiling in. Na het indrukken van de "+" knop zie je informatie over een interessante veiling. Als het veld <code>winner</code> de waarde <code>null</code> heeft, heeft niemand dit abonnement en kun je proberen het te krijgen.

</li>

<li>

Doe een bod met je XRT-tokens.

Ga naar het menu Ontwikkelaar -> Extern en kies voor hetzelfde Polkadot.js-account dat je hebt gebruikt in de vorige les externe <code>rws</code> met <code>bid(index, bedrag)</code>. Vul in het veld <code>index</code> het ID van de interessante veiling in. In het veld <code>bedrag</code> moet je het aantal tokens voor het bod invoeren, omgerekend naar "wieners" (1 XRT = 1 000 000 000 Wn). Controleer de huidige minimale abonnementsprijs in onze [dapp](https://dapp.robonomics.network/#/subscription). 

Dien de transactie in en als je geluk hebt, krijg je het IoT-abonnement. Je kunt controleren of jouw Polkadot-adres het abonnement bezit via hetzelfde Chain state-menu.

</li>

<li>

De laatste stap is om apparaten toe te voegen voor jouw IoT-abonnement.

Dit betekent eenvoudigweg dat je extra Polkadot-adressen toewijst aan je abonnement zodat ze extrinsieke handelingen kunnen uitvoeren (bijvoorbeeld om apparaten te starten of apparaatgegevens naar de blockchain te sturen).

Maak eerst een nieuw account aan voor de Robonomics Parachain (handleiding op [onze wiki](https://wiki.robonomics.network/docs/create-account-in-dapp/)), en noem het "slim apparaat" voor het gemak.

Ga vervolgens naar het menu Ontwikkelaar -> Extern en selecteer <code>rws</code> met <code>setDevices()</code>. Gebruik de knop "Item toevoegen" in de lijst met apparaten om apparaten toe te voegen en selecteer een recent aangemaakt account. Dien daarna de transactie in.

Het apparaatadres moet aan het abonnement worden toegevoegd. Je kunt dit controleren in het Chain state-menu via query <code>rws</code> met <code>devices()</code> voor jouw Polkadot.js-account dat het abonnement heeft.

</li>

</List>

<Result>

De les wordt als voltooid beschouwd na het verzenden van een succesvolle transactie voor het kopen van een IoT-abonnement en het toevoegen van één apparaat eraan. Transacties moeten verschijnen in de Polkadot explorer voor jouw account.

Je kunt je resultaten controleren op [de speciale controle dapp](https://lk.robonomics.academy/). Voor autorisatie op de controle dapp gebruik je hetzelfde account in Polkadot.js dat tijdens de cursus is gebruikt.

</Result>