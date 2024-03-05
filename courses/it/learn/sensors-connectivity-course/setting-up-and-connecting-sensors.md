---
title: "Lezione n. 3, Configurazione e connessione dei sensori"
description: 'CONFIGURAZIONE E CONNESSIONE DEI SENSORI'
lessonNumber: 3
metaOptions: [Imparare, Connettività dei sensori e Rete decentralizzata di sensori]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

I nostri sensori utilizzano il firmware Robonomics, una versione estesa del firmware sensor.community, con alcuni sensori aggiunti e modificato lo schema di invio dei dati. Il codice sorgente può essere trovato [al link.](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

Se hai una scheda Robonomics pronta all'uso, puoi andare alla sezione "Connetti".

## Requisiti

**Per Linux:**

<List type="numbers">

<li>

Aggiungi un utente al gruppo `dialout` (per Ubuntu) per ottenere l'accesso alla porta USB:

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>Riavvia il computer.</li>

<li>

Scarica l'eseguibile Robonomics `airrohr-flasher` da [releases](https://github.com/airalab/sensors-connectivity/releases).

</li>

<li>

Cambia i permessi del file ed eseguilo:

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**Per Windows:**

<List type="numbers">

<li>

Installare i driver per USB2serial (in Windows 10 dovrebbe partire automaticamente) — Driver per NodeMCU v3 (CH340): [link](http://www.wch.cn/downloads/file/5.html), [link alternativo](https://d.inf.re/luftdaten/CH341SER.ZIP). 

</li>

<li>

Scarica l'eseguibile Robonomics `airrohr-flasher` da [releases](https://github.com/airalab/sensors-connectivity/releases) ed eseguilo.

</li>

</List>

**Per MacOS:**

<List type="numbers">

<li>

Installa i driver per USB2serial — Driver per NodeMCU v3 (CH340): [link](http://www.wch.cn/downloads/file/178.html), [link alternativo](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

Scarica l'eseguibile Robonomics `airrohr-flasher` da [releases](https://github.com/airalab/sensors-connectivity/releases) ed eseguilo.

</li>

</List>


## Configurazione

<List type="numbers">

<li>

Collegare il sensore al PC e avviare il programma `airrohr-flasher`. Dopo aver aperto il programma vedrai quanto segue (a seconda del tuo sistema operativo):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

Il campo `Board` dovrebbe compilarsi automaticamente; se non lo fa, scegli la porta richiesta dal menu a discesa.

<RoboAcademyNote type="okay" title="INFO">
Se <code>airrohr-flasher</code> non riesce a trovare la tua scheda, assicurati di aver seguito correttamente la parte dei <b>Requisiti</b>.
</RoboAcademyNote>

</li>

<li>

Seleziona il firmware con la lingua preferita e clicca su `Upload`. Il caricamento del firmware richiederà del tempo. Se in seguito decidi di cambiare lingua o fare un'installazione pulita (per ripristinare la configurazione), vai alla pagina `Erase flash` e premi il pulsante per cancellare la memoria flash del sensore.

</li>

<li>

Dopo aver scaricato il firmware, riavvia l'ESP (basta scollegare e ricollegare la porta USB).

</li>

<li>

Scegli i sensori dal menu a checkbox. Scegli SDS011 e eventuali sensori aggiuntivi. Premi `Salva configurazione`.

</li>

<li>

Dopo aver scaricato la configurazione, riavvia l'ESP (basta scollegare e ricollegare la porta USB).

</li>

</List>

## Collegare

<List type="numbers">

<li>

Dopo il riavvio, la scheda creerà una rete Wi-Fi denominata `RobonomicsSensor-xxxxxxxxx`. Collegati dal tuo telefono o computer: vedrai la finestra di autorizzazione (in caso contrario, apri il browser e vai su `192.168.4.1`).

</li>

<li>

Seleziona la tua rete Wi-Fi dalla lista (o scrivila tu stesso se non è nella lista) e compila il campo della password.

</li>

<li>

Scrivi le coordinate del luogo in cui verrà installato il sensore.

<RoboAcademyNote type="warning" title="WARNING">
Le coordinate del sensore verranno poi visualizzate su una mappa pubblicamente disponibile. Se non vuoi mostrare le tue informazioni private, scrivi coordinate approssimative, ma non esatte.
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

Fare clic su `Salva configurazione e riavvia`. La scheda si riavvierà e si connetterà alla rete Wi-Fi specificata.

</li>

<li>

Apri [Mappa dei sensori Robonomics](https://sensors.robonomics.network/#/) e trova il luogo in cui hai installato il sensore. In un paio di minuti potrai vedere il tuo sensore con i dati sulla mappa.


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

Questo è tutto con l'installazione predefinita. Per una configurazione più avanzata (invio dati al proprio server), leggi la sezione successiva.

## Ulteriori Configurazione

Prima della configurazione, è necessario trovare l'indirizzo del sensore nella tua rete Wi-Fi. Per farlo, puoi utilizzare `airrohr-flasher` (il tuo computer deve essere sulla stessa rete del sensore). Avvialo e vai alla scheda `Discovery`, quindi premi `Refresh`, aspetta un momento e apparirà l'indirizzo del tuo sensore.

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

Fai doppio clic su questo indirizzo (o digita nel tuo browser), arriverai al menu del sensore:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

Ora puoi iniziare a personalizzare la tua configurazione.


## API personalizzata

Puoi anche configurare l'invio dei dati al tuo server. Per farlo, nella scheda `APIs` clicca su `Invia al proprio API` e specifica l'indirizzo del server e la porta (`65` per la connettività dei sensori):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

Fare clic su `Save and restart` per salvare le impostazioni.