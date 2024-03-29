---
title: "Assemblaggio della scheda Smart Home"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: Imparerai come assemblare la scheda smart home!
metaOptions: [Imparare]
defaultName: Introduction to open source solution for private smart homes
---

<LessonImages imageClasses="mb" src="smart-home-intro/spring-school-2023-smart-stand-intro.gif" />

## Pannello Smart Home 

Questo pannello è destinato ad essere utilizzato come dispositivo di controllo centrale con gli interruttori più utilizzati e i dati visualizzati su di esso. È anche possibile collegare un citofono e utilizzarlo come monitor interno. Fondamentalmente è solo un tablet che esegue il sistema operativo Android nel nostro caso. Tutto ciò che devi fare è fornire alimentazione. Pensiamo che questo pannello dovrebbe essere installato dove si posizionerebbe un monitor interno

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcbdAJqbwHAQ3NeyWQUwSoS4drDexa3AEs7HXuM1BrUT1', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />


## Interruttore della luce

Gli interruttori intelligenti per la luce assomigliano più o meno a quelli ordinari, tranne che vengono utilizzati pulsanti anziché interruttori. Un pulsante torna alla sua posizione dopo essere stato premuto. Non c'è differenza nella connessione tra un interruttore normale e uno intelligente: collegare il filo neutro a N, il filo di alimentazione a L e la linea di illuminazione a L1. Dopo aver assemblato l'interruttore per accoppiarlo tramite ZigBee, premere il pulsante per almeno 5 secondi.

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/Qmb138DiQWWBgowMj2fC9kmiGYh9WEeytteSkqumWCv2LB', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-2.png" />

Nel caso dell'interruttore a due pulsanti (o più), l'unica differenza è la seconda (terza, ...) linea di luci. 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZiStYZG4rmyNPXXmCXsVPm7witPpnNJMBzD8GtxedgPo', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-3.png" />

## Lampadina Intelligente 

Le lampadine intelligenti sono probabilmente il modo più semplice per provare qualcosa di smart, non è nemmeno necessario essere un elettricista. Possono essere controllate a distanza e possono cambiare luminosità o colore. Puoi installarle insieme a interruttori intelligenti o separatamente. Utilizzare tali dispositivi può aprire una pagina intera di automazioni a seconda del tuo umore o delle condizioni esterne! Le nuove lampadine sono pronte per essere connesse tramite ZigBee. Nel caso in cui non ne trovi una, accendila e spegnila 5 volte


<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbiMHLJqnDpr1Whzvo6Y7zE33cQPuTs7furbt3JW2uiek', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-4.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmTzK4dY168HVgLvVBsRxR4M4vda55XC7pFhpW5kRexujQ', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-5.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZFpvVUavKc1Za9SeXqikrfySsfFHuVrkdzgbVB8um7T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-6.png" />

## Presa Intelligente 

Esistono numerosi dispositivi “non intelligenti” che di solito abbiamo bisogno di accendere e spegnere a volte. Se accendiamo un dispositivo di questo tipo tramite la presa intelligente, possiamo accenderlo/spegnerlo in base alle nostre esigenze, orari o condizioni. Inoltre, tali prese possono monitorare il consumo energetico, quindi abbiamo dati su quanto consuma questo dispositivo. La connessione è abbastanza semplice, basta accoppiare il pulsante della presa intelligente per 5 secondi

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRtmKXSv7csHLbKVuZkoA5Eb2zyTkEAbUxLYT6Qt1yxZH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-7.png" />

## Interruttore del boiler 

Il motivo per cui l'interruttore del boiler esiste come dispositivo dedicato è che può sopportare un carico maggiore. Di solito i boiler consumano 3 kWh o anche di più, quindi gli interruttori regolari (anche intelligenti) non sono adatti in questa situazione. L'interruttore del boiler è progettato per funzionare in queste condizioni. Le connessioni e l'accoppiamento sono praticamente gli stessi dell'interruttore della luce

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZyRtXXRYCrAQe6s6ZFJLXtUrH7SZHJC1Bt61kTrRX54', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-8.png" />

## Termostato Wifi/Zigbee

Sembra un termostato ordinario ma ha la capacità di essere controllato senza fili. Ci sono opzioni: collegare direttamente un sistema di riscaldamento al termostato o separarli. In quest'ultimo caso il termostato ci dirà la modalità (calore, fresco, ventilatore, ecc.) e la temperatura

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRjxo9EGUvQiMm84xvXCL6LfrQJYza71vmFsa9Zpy7qmz', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-9.png" />

## Interruttore per tende

Un altro interruttore dedicato, questa volta per le tende. Da un punto di vista tecnico non è necessario utilizzare solo questo interruttore, potremmo utilizzare qualsiasi interruttore a tre pulsanti e collegarlo al motore della tenda, ma questo ha icone speciali. Per accoppiare l'interruttore premere a lungo sul pulsante centrale

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRpEpZbyNkzby8Sk22Ymz59DbAcnty1B1osWc2kZr5FZ7', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-10.png" />

## Controller per valvole intelligenti

Scegli un controller in base alle valvole che hai. Lo scenario più ovvio è combinare questo controller con un sensore di perdite d'acqua. Per accoppiare il dispositivo tenere premuto il pulsante per 5 secondi

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcjZcJ6P8Q5yUfSRx8R2mR4A7r2fi5bLs5uoUr3EAXLZs', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-11.png" />

## Sensore di perdite d'acqua

Un dispositivo piuttosto semplice che invia un segnale quando i suoi due contatti sono collegati. L'acqua conduce l'elettricità e quando c'è acqua sotto il sensore i suoi contatti si chiudono. Il sensore funziona con una batteria e di solito dura 1-2 anni. Per accoppiare il sensore tramite ZigBee premere a lungo sul suo pulsante per un po' 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbgetJK1E8qQMcnBVREutpy8tKfbesqaxXiebjzpoyrdV', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-12.png" />

## Controller IR

Pensalo come il telecomando della tua TV... ma intelligente! E non è limitato a funzionare solo con le TV. Se il tuo condizionatore d'aria ha un telecomando, potrebbe essere sostituito con questo intelligente. Per accoppiarlo, premere il pulsante di reset sul retro del controller per un po'. Ci sono un sacco di librerie con comandi pronti all'uso, ad esempio [https://github.com/smartHomeHub/SmartIR](https://github.com/smartHomeHub/SmartIR). Tutto quello che devi fare è trovare il modello della tua TV o del tuo condizionatore

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmVjj92fMLbA6QJ5QhnmiqBT1huD5b7xyfi3VadHFDYwtm', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-13.png" />

## Sensore per porte/finestre

Un altro sensore che funziona con una batteria ma aiuta a costruire un semplice sistema di sicurezza o a collegarlo a luci e altri dispositivi. Per accoppiarlo tramite ZigBee, mettere un ago nel foro e premere per un po'

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZyb66dKEqk9iCVKhaBk5ZKASi7dXdFSg2CBXY1fwuu5J', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-14.png" />

## Sensore di movimento
Come il sensore per porte/finestre, può essere utilizzato in vari scenari. I più ovvi sono il controllo delle luci o il rilevamento dei movimenti quando sei lontano

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmUA7TLg12pkhkbdGH6fwNDasU1kiyLHBJSutA2YG71Mka', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-15.png" />


## Sensore di temperatura e umidità

È utile conoscere le condizioni in cui vivi, giusto? Questo sensore ti fornirà misurazioni di temperatura e umidità. Poi puoi utilizzare questi dati per accendere/spegnere il tuo condizionatore d'aria o altri sistemi di riscaldamento/raffreddamento. Per accoppiare il sensore c'è un pulsante sul retro 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmayYFowfJVwQBVxPUSvi5inedqKzhyRZXp8fBUUayJnqH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-16.png" />

## Telecamera di sicurezza

Alla fine è utile dare un'occhiata a cosa succede a casa tua. Una buona automazione sarebbe collegare il sensore di movimento alla telecamera in modo da avere un video di 10 secondi quando viene rilevato un movimento 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmX8nnDCgTx2kuwfAGv6B4orkEg4w6phtJtxSp44HfdD9T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-17.png"  />


## Smart Board 
Guarda i risultati [https://www.youtube.com/watch?v=B3er7bwtvkw](https://www.youtube.com/watch?v=B3er7bwtvkw )
E gioca con esso tu stesso [https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20](https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20)

