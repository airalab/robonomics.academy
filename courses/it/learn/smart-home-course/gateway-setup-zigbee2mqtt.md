---
title: "Lezione n. 4a, Configurazione del gateway: Zigbee2MQTT"
lastUpdate: Thu May 04 2023 12:54:33 GMT+0400 (Samara Standard Time)
description: corso di assistente domestico
lessonNumber: 4
metaOptions: [Impara, Casa Intelligente Sovrana con Robonomics e Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Introduzione

Questo è un setup di scenario per connettere dispositivi utilizzando l'adattatore Zigbee e il ponte Zigbee2MQTT. Se possiedi il [JetHome USB JetStick Z2](https://jethome.ru/z2/?sl=en) (che ha tutto il firmware necessario), puoi procedere semplicemente con queste istruzioni. Tuttavia, se possiedi un altro adattatore, la prima cosa da fare è flasharlo con il software Zigbee2MQTT. Puoi trovare le istruzioni per il tuo dispositivo [qui](https://www.zigbee2mqtt.io/guide/adapters/).

Avrai anche bisogno di un dispositivo smart per testare la sua connessione con Home Assistant.


## Istruzioni

<List type="numbers">

<li>

Installazione del Software

<List>

  <li>
    Configura il repository dell'ambiente di runtime Node.js e installalo con le dipendenze richieste:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - </LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo apt-get install -y nodejs git make g++ gcc</LessonCodeWrapper>

  </li>

  <li>
    Verifica che le versioni corrette di Node.js (v14.X, V16.x, V17.x o V18.X) e del gestore di pacchetti <code class="nowb">npm</code> (6.X, 7.X o 8.X) installate automaticamente con Node.js, siano state installate:
    <LessonCodeWrapper language="bash" noLines>node --version</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm --version</LessonCodeWrapper>
  </li>

  <li>
    Crea una directory per Zigbee2MQTT e imposta il tuo utente come proprietario di essa:
    <LessonCodeWrapper language="bash" noLines>sudo mkdir /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>sudo chown -R ${USER}: /opt/zigbee2mqtt</LessonCodeWrapper>
  </li>

  <li>
    Clona il repository di Zigbee2MQTT:
    <LessonCodeWrapper language="bash" codeClass="big-code" noLines>
    git clone --depth 1 --branch 1.28.4 https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
    </LessonCodeWrapper>
  </li>

  <li>
    Installare le dipendenze. Nota che il <code>npm ci</code> potrebbe produrre alcuni avvisi che possono essere ignorati.
    <LessonCodeWrapper language="bash" noLines>cd /opt/zigbee2mqtt</LessonCodeWrapper>
    <LessonCodeWrapper language="bash" noLines>npm ci</LessonCodeWrapper>
  </li>

</List>
</li>

<li>

Connessione e Configurazione dell'Adattatore

<List>

<li>

Collega l'adattatore Zigbee al Raspberry Pi. Poi devi trovare la posizione della chiavetta. Per fare ciò, digita il comando successivo:

<LessonCodeWrapper language="bash" noLines>
ls -l /dev/serial/by-id
</LessonCodeWrapper>

L'output dovrebbe assomigliare a:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon>
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
</LessonCodeWrapper>

In questo esempio la directory di connessione del stick è <code>ttyUSB0</code>.
</li>

<li>

Modificare il file <code>configuration.yaml</code> prima di avviare Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
nano /opt/zigbee2mqtt/data/configuration.yaml
</LessonCodeWrapper>

La configurazione di base necessita di alcune modifiche. Cambiare le seguenti dichiarazioni:

\- <code>homeassistant:</code> in <code>true</code>, si connetterà automaticamente ai sensori di Home Assistant;

\- decommentare <code>user</code> e <code>password</code> sotto <code>mqtt</code> e inserire il tuo nome utente e password (come stringa, tra virgolette) dal Broker MQTT;

\- cambiare la porta in <code>serial</code> -> <code>port</code> con la directory di connessione del stick. In questo esempio: <code>/dev/ttyUSB0</code>.

Il file di configurazione modificato dovrebbe apparire così:

<LessonCodeWrapper language="yaml">
# Home Assistant integration (MQTT discovery)
homeassistant: true
# allow new devices to join
permit_join: true
# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  user: 'YOUR_USERNAME'
  password: 'YOUR_PASSWORD'
# Serial settings
serial:
  # Location of CC2531 USB sniffer
  port: /dev/YOUR_PORT
</LessonCodeWrapper>


**Extra:**

Se hai già un adattatore Zigbee attivo o un gateway nella tua casa, e stai configurando un altro stick, allora entreranno in conflitto tra loro. Per risolvere questo problema è necessario cambiare il canale sul nuovo dispositivo. Per fare ciò aggiungi le seguenti stringhe alla fine del file di configurazione:


<LessonCodeWrapper language="yaml" codeClass="big-code">
advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
</LessonCodeWrapper>
</li>

<li>

Avvia Zigbee2MQTT:

<LessonCodeWrapper language="bash" noLines>
cd /opt/zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
npm start
</LessonCodeWrapper>

Se avviato con successo, vedrai qualcosa del genere:

<LessonImages src="smart-house-course/lesson-4-a-1.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Accoppiamento Dispositivo

<List>

<li>

È il momento di collegare il tuo dispositivo intelligente. Il modo più comune per passare un dispositivo alla modalità di connessione è tenere premuto il pulsante di accensione o accenderli/spegnere 5 volte. Assicurati che Zigbee2MQTT sia in esecuzione.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="code" imageClasses="mb"/>

Quando il dispositivo si connette, dovresti vedere un messaggio del genere:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired
</LessonCodeWrapper>

Ricorda l'ID del sensore: in questo esempio — <code>0x00158d0003eeeacf</code>.

Ora dovresti vedere questo sensore con ID nella tua Home Assistant WebUI. Vai su <code>Impostazioni</code> -> <code>Dispositivi e Servizi</code> -> <code>Dispositivi</code> per controllarlo:

<LessonImages src="smart-house-course/lesson-4-a-2.jpg" alt="code" imageClasses="mb"/>

Dopo aver aggiunto tutti i sensori, puoi interrompere il programma con <code>Ctrl+C</code>. Se non vuoi aggiungere altri dispositivi, puoi aprire nuovamente il file di configurazione e impostare <code>permit_join:</code> su <code>false</code>.
</li>

</List>
</li>

<li>

Creazione Servizio per l'Avvio Automatico

<List>

<li>

Ora devi creare un servizio. Crea il file:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/systemd/system/zigbee2mqtt.service
</LessonCodeWrapper>

Aggiungi quanto segue a questo file cambiando <code>IL_TUO_NOME_UTENTE_RASPPI_QUI</code>. Se non conosci il tuo nome utente, utilizza il comando <code>whoami</code>.

<LessonCodeWrapper language="bash">
[Unit]
Description=zigbee2mqtt
After=network.target 
[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=YOUR_RASPPI_USERNAME_HERE
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>
</li>

<li>

Verifica che la configurazione funzioni:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl start zigbee2mqtt
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
systemctl status zigbee2mqtt.service
</LessonCodeWrapper>

L'output dovrebbe assomigliare a:

<LessonImages src="smart-house-course/lesson-4-a-3.jpg" alt="code" imageClasses="mb"/>
</li>

<li>

Abilita il servizio per avviare automaticamente Zigbee2MQTT all'avvio:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl enable zigbee2mqtt.service
</LessonCodeWrapper>

</li>
</List>
</li>
</List>