---
title: "Robonomics School 2024 / Manuale del Relocante di Cipro: Casa Intelligente"
lastUpdate: 
description: "Manuale del Relocante di Cipro: Casa Intelligente"
metaOptions: [Imparare, "Robonomics School 2024 / Manuale del Relocante di Cipro: Casa Intelligente"]
defaultName: "Robonomics School 2024 / Cyprus Relocant Manual: Smart Home"
---

<LessonImages imageClasses="mb"  src='school-2024-cyprus-relocant-manual/Setup_SmartHome-Academy.jpg' alt="Cyprus Relocant Manual Cover" />

Cambiare il paese di residenza porta sempre non solo nuove opportunità, ma anche sfide. È successo che nel mio caso, il nuovo paese fosse Cipro, dove sono venuto a costruire un'azienda. Negli ultimi 10 anni prima del trasferimento, ho vissuto in una grande città, dove mi ero abituato a certi vantaggi sotto forma di riscaldamento centralizzato dalla città, fornitura di acqua calda e elettricità economica. A Cipro, ogni casa e ogni appartamento sono molto più autonomi in termini di supporto alla vita, ma le preoccupazioni per mantenere una vita confortevole ricadono sul proprietario. Prendi ad esempio l'acqua calda. Nei mesi freddi, devi accendere il boiler da solo per scaldarlo. Anche l'appartamento deve essere riscaldato da solo. In inverno accendiamo/spegniamo la coperta termica e il boiler, e in estate l'aria condizionata e il repellente per zanzare. Questo richiede non solo tempo ed energia, ma anche denaro.

Il mio primo inverno a Cipro si è tradotto in bollette elettriche astronomiche. Questo è stato un colpo serio al mio budget. Una possibile soluzione: cambiare le tue abitudini e adattarti alle nuove condizioni. Ma dopo il trasferimento, avrai già abbastanza preoccupazioni. Come ingegnere, ho iniziato a cercare soluzioni che mi aiutassero a controllare i costi e rendere la mia vita più confortevole, e voglio condividere la mia esperienza con te.

## Scelta dell'Hardware

La prima cosa con cui voglio iniziare è la scelta di un ecosistema. I sistemi cablati vengono immediatamente eliminati, in quanto richiedono budget elevati e interventi seri nell'infrastruttura dell'appartamento/casa. Dei dispositivi wireless, esistono un'enorme quantità di dispositivi sotto i marchi Sonoff e Tyua, ma tutti funzionano tramite Internet, che non sempre funziona in modo affidabile sull'isola. Senza considerare la questione della privacy e della sicurezza dei tuoi dati personali sui server di altre aziende. Raccomando di costruire la tua casa intelligente con [Home Assistant](https://www.home-assistant.io) come server principale. Vantaggi: può funzionare senza accesso a Internet esterno; è possibile portarlo con te in caso di spostamento e installarlo in un nuovo luogo senza perdere le impostazioni; supporta un'enorme quantità di dispositivi, inclusi smart TV, aspirapolvere e molto altro.

I protocolli più popolari per la connessione wireless dei dispositivi sono Wi-Fi, Zigbee, Bluetooth. In un appartamento, si possono trovare contemporaneamente tutti e tre i tipi di connessioni, ma per quanto riguarda i dispositivi che trasformano le cose normali in cose intelligenti, è più conveniente lavorare con il protocollo Zigbee. In questo caso, non dobbiamo preoccuparci dei loro indirizzi e dell'area di copertura, inoltre possono funzionare a batteria. I dispositivi Wi-Fi richiedono una connessione costante all'alimentazione e dipendono dalla potenza del segnale Wi-Fi. Anche in un piccolo appartamento, dove ci sono un paio di pareti tra il router e la tua camera da letto, a volte devi installare un Wi-Fi Extender. Nel caso di Zigbee, i dispositivi stessi agiscono come ripetitori.

Tornando a Cipro, il mio minimo indispensabile di dispositivi si è rivelato essere il seguente:

## Computer - Server domestico

Il compito principale del server è servire una casa intelligente controllata da Home Assistant. Il modo più semplice è prendere il già preconfigurato [Home Assistant Green](https://www.home-assistant.io/green/). Costo [€70 esclusa IVA](https://thepihut.com/products/home-assistant-green).

<LessonImages src="school-2024-cyprus-relocant-manual/home-assistant-green.png" alt="Home Assistant green"/>

L'opzione è un po' più avanzata, ma è possibile avere il controllo anche sul sistema operativo, questo è da trovare/acquistare [Raspberry Pi](https://www.raspberrypi.com). Costo [€90 esclusa IVA](https://https://thepihut.com/products/raspberry-pi-5-starter-kit). La pagina di [Installazione](https://www.home-assistant.io/installation/) ha molte opzioni per accontentare tutti i gusti.

<LessonImages imageClasses="small" src="school-2024-cyprus-relocant-manual/raspberry-pi.png" alt="Raspberry Pi"/>

Come coordinatore Zigbee prendiamo [Sonoff Zigbee Dongle P o E](https://sonoff.tech/product/gateway-and-sensors/sonoff-zigbee-3-0-usb-dongle-plus-p/), sono praticamente sempre disponibili sull'isola. Costo circa [€35](https://www.amazon.de/-/en/dp/B09KXTCMSC/). È anche possibile scegliere una stick da [questa lista](https://www.zigbee2mqtt.io/guide/adapters/).

<LessonImages imageClasses="small" src="school-2024-cyprus-relocant-manual/sonoff-zigbee-stick.png" alt="Sonoff Zigbee USB Stick"/>

Consiglio vivamente di assegnare un indirizzo IP locale statico al server domestico. Se non è possibile accedere alle impostazioni del router, è possibile installare ulteriormente un secondo router (io ho [MikroTik](https://mikrotik.com/product/hap_ax2), circa [€80](https://www.mstronics.com/c/337_1345_485/networking-devices-routers.html?filter_id=154)), e configurare Internet su di esso. E in generale, è meglio assegnare un IP statico a tutti i dispositivi smart Wi-Fi. Spesso è importante per le integrazioni di Home Assistant funzionare correttamente.

## Interruttore della caldaia

La caldaia consuma da 3 a 3,5 kWh e un normale interruttore smart non funzionerà. Quando scegli, assicurati di prestare attenzione alla corrente ammessa; dovrebbe essere almeno di 16A, e preferibilmente di 20A. È difficile trovare rapidamente un interruttore Zigbee sull'isola stessa, ho ordinato dalla [Cina](https://vi.aliexpress.com/item/1005006833309900.html), è costato circa €20.

<robo-academy-grid :columns="2" textAlign="center">
    <robo-academy-grid-element>
      <LessonImages src="school-2024-cyprus-relocant-manual/boiler-switch-dimension.png" alt="Boiler Switch"/>
    </robo-academy-grid-element>
    <robo-academy-grid-element>
      <LessonImages src="school-2024-cyprus-relocant-manual/boiler-switch-wiring.png" alt="Boiler Switch Wiring"/>
    </robo-academy-grid-element/>
</robo-academy-grid>

L'automazione più importante è spegnere il pulsante N minuti dopo qualsiasi attivazione. Lo impostiamo e non pensiamo più se hai dimenticato di spegnere il pulsante o se è stato acceso per il terzo giorno. Un esempio di automazione per Home Assistant, devi sostituirlo con il tuo `device_id` e `entity_id`:

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

Puoi cambiare l'orario durante tutto l'anno. Ad esempio, a febbraio ho bisogno di riscaldare l'acqua per un'ora, e ad aprile 30 minuti sono sufficienti. Qualcosa di utile è aggiungere l'invio di una notifica al tuo telefono quando l'acqua è riscaldata.

<robo-academy-note type="note" title="Homework">
  Realizza un'automazione che spegnerà la caldaia dopo X minuti specificati. Per impostare l'ora come variabile, guarda <a href="https://www.home-assistant.io/integrations/input_number/">questa integrazione</a>
</robo-academy-note>

## Telecomandi IR per condizionatori d'aria e TV

I telecomandi sono dotati di connessione Wi-Fi (richiedono alimentazione costante) e connessione Zigbee (alimentati a batteria).

Ho provato l'opzione Wi-Fi del produttore [Broadlink](https://www.ibroadlink.com/productinfo/762674.html), acquistato su [Amazon](https://www.amazon.de/-/en/dp/B07ZSG9Y67/), circa €30. Per la configurazione iniziale, dovrai installare la loro applicazione sul tuo telefono e creare un account, ma dopo il telecomando IR funzionerà sulla rete locale, collegandosi a HA tramite [integrazione](https://www.home-assistant.io/integrations/broadlink/). Per personalizzare ulteriormente il telecomando IR in base alle tue esigenze, ti consiglio di guardare il repository [SmartIR](https://github.com/smartHomeHub/SmartIR) - si tratta di una grande libreria di comandi pronti per diversi condizionatori d'aria e TV.

<robo-academy-note type="note" title="Consiglio">
  Se il tuo modello specifico di A/C non viene trovato, prova altri modelli dello stesso produttore. I comandi probabilmente saranno gli stessi e sarai in grado di collegare il tuo A/C.
</robo-academy-note>

<LessonImages src="school-2024-cyprus-relocant-manual/broadlink-ir.png" alt="Broadlink IR Remote Control"/>

Configurazione di esempio per Broadlink IR Remote:

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

I telecomandi remoti che funzionano su Zigbee non richiedono una connessione costante all'alimentazione, ma funzionano a batterie. Da un lato, questo è un vantaggio, perché è possibile posizionare il dispositivo in qualsiasi punto comodo della stanza. D'altra parte, le batterie dovranno essere cambiate secondo necessità. Anche il processo di configurazione di tali telecomandi remoti potrebbe differire da Broadlink. Se non è possibile utilizzare la libreria SmartIR, il telecomando dovrà essere addestrato per ogni comando separatamente e salvato nella configurazione di Home Assistant.

I telecomandi programmabili sono molto facili da installare e configurare; non richiedono il montaggio a parete o la connessione a un bus del condizionatore d'aria. Tuttavia, c'è una leggera limitazione dovuta alla mancanza di feedback tra i dispositivi. Non possiamo verificare che l'A/C si sia acceso ed esegua esattamente il comando che abbiamo inviato. Tuttavia, lo facciamo rapidamente e senza danneggiare l'appartamento. Per dare un po' più di informazioni al telecomando, è possibile installare qualsiasi sensore di temperatura e umidità Zigbee, ad esempio [questo](https://vi.aliexpress.com/item/1005005595631552.html) per €10, e collegare le letture al telecomando. In questo modo abbiamo un feedback semplice, e il numero di scenari interessanti aumenta.

## Contatore Energetico

Ci sono contatori semi-invasivi per il consumo di elettricità, come quello nell'immagine qui sotto:

<LessonImages imageClasses="small" src="school-2024-cyprus-relocant-manual/energy-meter.png" alt="Energy Meter"/>

Devono essere alimentati applicando L e N all'ingresso. Dall'altro lato, un anello di induzione è collegato al contatore, che appendiamo a una fase o linea di consumo per la misurazione. La maggior parte delle case e degli appartamenti ha 3 fasi, il che significa che è necessario installare 3 moduli simili. L'ho comprato su [Amazon](https://www.amazon.de/gp/product/B0C37DJXVD/) per €60, uno per ogni fase. Le case più vecchie potrebbero avere solo una fase.

## Conclusione

Per me, una casa intelligente non è un lusso, ma una necessità. Questo è un luogo dove voglio rilassarmi e trascorrere del tempo con la mia famiglia, senza sprecare energia a risolvere questioni quotidiane. Il costo del kit sopra citato nel mio caso è stato di circa €500 e un paio di serate. Il risultato è inestimabile!