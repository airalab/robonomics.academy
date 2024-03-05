---
title: "Lezione n. 3, Configurazione del Broker MQTT e Inizializzazione di Hass"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: corso di assistente domestico
lessonNumber: 3
metaOptions: [Impara, Casa Intelligente Sovrana con Robonomics e Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Introduzione

Dopo aver completato la configurazione del Raspberry Pi, il passo successivo è installare il Broker MQTT sul Raspberry Pi. Come già detto, il Broker è responsabile del routing dei messaggi tra i diversi client MQTT. Installerai e configurerai Eclipse Mosquitto, un broker MQTT open source.

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

Inoltre, completerai la configurazione di Home Assistant e aggiungerai l'integrazione MQTT ad esso.

## Istruzioni

<List type="numbers">

<li>


Installazione del Broker Mosquitto

<List>
<li>

Installa il [Broker Mosquitto](https://mosquitto.org/) sul tuo Raspberry Pi:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

Inserisci IL_TUO_USERNAME (usa quello che preferisci) e la password (ti verrà chiesto di inserire la password dopo il comando):

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

Modifica il file di configurazione:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

Aggiungi quanto segue al file:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

Salva il file e riavvia il servizio:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

Infine, controlla lo stato del broker:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

Dovresti vedere qualcosa del genere:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Configurazione di Home Assistant e MQTT

<List>

<li>

Apri il browser web e vai su <code>http://%INDIRIZZO_IP_RASPBERRY%:8123</code>. (con lo stesso indirizzo IP che hai trovato nella lezione precedente). Tieni presente che l'indirizzo del Raspberry Pi potrebbe cambiare nel tempo a causa delle impostazioni del router. 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

Nella prima pagina, inserisci qualsiasi nome, username, password desiderati e clicca su "<code>CREA ACCOUNT</code>"
</li>

<li>

Successivamente, inserisci un nome per la tua casa e imposta la tua posizione e il sistema di unità. Clicca su "<code>DETECT</code>" per trovare la tua posizione e impostare il fuso orario e il sistema di unità in base a quella posizione. Se preferisci non inviare la tua posizione, puoi impostare manualmente questi valori.

</li>

<li>

Nella schermata successiva, Home Assistant mostrerà tutti i dispositivi che ha scoperto nella tua rete. Non preoccuparti se vedi meno elementi rispetto a quelli mostrati di seguito; puoi sempre aggiungere manualmente dispositivi in seguito. Per ora, clicca su <code>FINISH</code> e sarai sulla schermata principale di Home Assistant.

</li>

<li>

Ora dobbiamo installare un'integrazione MQTT. Vai su <code>Impostazioni</code> -> <code>Dispositivi e Servizi.</code>

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

Premi il pulsante <code>AGGIUNGI INTEGRAZIONE</code> nell'angolo in basso a destra. Nella finestra aperta trova <code>MQTT</code>.

</li>

<li>

Seleziona MQTT e imposta l'indirizzo del tuo broker — <code>localhost</code> porta — <code>1883</code> e il tuo nome utente e password (gli stessi che hai creato in precedenza per il broker Mosquitto) poi premi <code>SUBMIT</code>.
</li>

</List>
</li>
</List>