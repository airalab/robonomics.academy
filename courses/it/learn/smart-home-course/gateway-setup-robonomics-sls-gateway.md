---
title: "Lezione n. 4b, Configurazione del Gateway: Robonomics SLS Gateway"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: corso di assistente domestico
lessonNumber: 5
metaOptions: [Impara, Casa Intelligente Sovrana con Robonomics e Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Di cosa si tratta

Si tratta di una configurazione di scenario per collegare dispositivi utilizzando il Gateway Robonomics SLS. Robonomics ha preso ispirazione dal gateway sviluppato dal progetto [Smart Logic System](https://github.com/slsys/Gateway) e ha modificato parte del circuito. Puoi ordinare un gateway da Robonomics o costruirne uno utilizzando i nostri [progetti](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01).

Installerai il software richiesto per il gateway, lo configurerai e lo collegherai a Home Assistant.

<robo-academy-note type="note" title="Attention">
  SmartRF Flash Programmer, un programma per l'aggiornamento del firmware, richiede il sistema operativo Windows.
</robo-academy-note>

## Istruzioni

<List type="numbers">

<li>

Installazione del Firmware del Microcontrollore Zigbee

<List>

<li>

Prima devi flashare il microcontrollore CC2652P del gateway. Imposta su <code>ON</code> gli switch <code>2</code>, <code>4</code> e <code>7</code> nella parte inferiore del Gateway SLS, gli altri devono essere <code>OFF</code>.

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

Collega il gateway al computer con un cavo USB-A<>USB-C.

<robo-academy-note type="warning" title="WARNING">
  Si prega di utilizzare solo cavi di tipo USB-A<>USB-C, perché al momento il gateway non supporta il tipo USB-C<>USB-C.
</robo-academy-note>

</li>

<li>

Il firmware CC2652 richiede SmartRF Flash Programmer v2 di Texas Instrument. Scaricalo dal [sito ufficiale](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2) e poi installalo.

</li>

<li>

Scarica il firmware per il microcontrollore CC2652P da [repository GitHub](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator).

</li>

<li>

Esegui il programma. Nella finestra <code>Dispositivo connesso</code> seleziona il microcontrollore CC2652P, imposta il percorso del firmware, imposta i flag su <code>Erase, Program, Verify</code> come nella foto e premi <code>Start</code>.

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

Dopo un flash riuscito, vedrai un messaggio <code>Success!</code>. Ora puoi scollegare il cavo USB.

</li>
</List>
</li>

<li>

Installazione del Firmware del Microcontrollore

<List>

<li>

Ora devi configurare il gateway per l'installazione del software. Ti consigliamo di aggiornare il firmware collegando il gateway direttamente al tuo Raspberry Pi e inserendo tutti i seguenti comandi su quel dispositivo. 

</li>

<li>

Imposta gli switch <code>ON</code> <code>1</code> e <code>3</code> nella parte inferiore del gateway SLS, gli altri devono essere <code>OFF</code>. Quindi collega il gateway al tuo Raspberry Pi alla porta USB di tipo C.

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Collegati al Raspberry Pi tramite SSH.

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

Clona il repository con il firmware:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

Per flashare il gateway SLS devi eseguire gli script <code>Clear</code> e <code>Flash_16mb</code>:

<LessonCodeWrapper language="bash" noLines>
cd robonomics-hass-utils/esp_firmware/linux
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Flash_16mb.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Flash_16mb.sh
</LessonCodeWrapper>
</li>

<li class="no-bullet">

\- **Risoluzione dei problemi**

Se stai riscontrando problemi nell'aggiornare il firmware del gateway, devi seguire ulteriori passaggi:

<List>

<li>

Assicurati di avere installato il modulo pySerial:

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

Concedi al tuo utente i diritti di accesso alla porta USB:

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

In alcuni casi, è necessario modificare l'impostazione della larghezza di banda nello script per aggiornare il firmware. Apri lo script <code>Flash_16mb.sh</code> con l'editor nano e cambia il parametro di baud da <code>921600</code> a un valore più piccolo (ad esempio, <code>115200</code>).
</li>
</List>
</li>

<li class="no-bullet">

\- **Extra**

Forniamo anche opzioni per aggiornare il firmware utilizzando altri sistemi operativi (macOS e Windows). Puoi trovare gli script corrispondenti in una cartella, il cui nome dipende dal tuo OS.

</li>
</List>
</li>

<li>

Configurazione del Gateway

<List>

<li>

Imposta gli interruttori sul retro del gateway nella loro nuova posizione. Gli interruttori <code>5</code> (RX Zigbee a ESP) e <code>6</code> (TX Zigbee a ESP) devono essere nella posizione <code>ON</code>, gli altri devono essere <code>OFF</code>.


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Collega il cavo di alimentazione di tipo C. La luce indicatrice al centro dovrebbe diventare verde.

</li>

<li>

Al primo avvio, il gateway inizierà a condividere il Wi-Fi con l'SSID <code>zgw****</code>. Connettiti a questa rete. Tieni presente che il segnale potrebbe essere piuttosto debole, quindi è meglio tenere il gateway SLS più vicino al tuo computer.

Se la connessione ha successo, si aprirà l'interfaccia web (o la puoi trovare all'indirizzo 192.168.1.1).

</li>

<li>

Vai alla pagina Wi-Fi e inserisci le tue credenziali Wi-Fi inserendo l'utente / pass e premi il pulsante <code>Salva</code>. Dopo di che premi il pulsante <code>Riavvia</code>. Il gateway si riavvierà e si connetterà alla tua rete WI-Fi.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

Trova l'IP locale del gateway SLS per accedere all'interfaccia web. Per fare ciò puoi utilizzare l'app [Fing](https://www.fing.com/products) o <code>arp -a</code> nel tuo terminale o Nmap: 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

dove <code class="bold">xxx</code> è il tuo indirizzo IP nella rete locale. Il nome del gateway dovrebbe essere simile a questo: <code>zgw****</code>. Apri l'interfaccia web del gateway incollando l'IP del gateway in un browser.
</li>

<li>

Vai su <code>Impostazioni</code> -> <code>Hardware</code> e assicurati che le impostazioni siano come nell'immagine. Correggi le impostazioni se necessario e clicca sul pulsante <code>Salva</code>:

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

La tabella con i valori richiesti:


| Field        	         | **Value**          |                                                                     	
|------------------------|--------------------|
| Zigbee module          | TI                 |
| Zigbee UART RX         | 22                 |
| Zigbee UART TX         | 23                 |
| Zigbee RST Pin         | 18                 |
| Zigbee BSL Pin         | 19                 |
| Button Mode            | 33 (pullUP - true) |
| Number addressable leds| 0                  |
| Led Red (or addr)      | 21                 |
| Led Green              | 5                  |
| Led Blue               | 27                 |
| I2C SDA                | 255                |
| I2C SCL                | 255                |

</li>

<li>

Poi riavvia il gateway. Scegli <code>Azioni</code> -> <code>Riavvia sistema</code> nell'angolo in alto a destra. Assicurati che il gateway funzioni correttamente con il microcontrollore CC2652P nella finestra delle informazioni Zigbee. Lo stato del dispositivo dovrebbe essere <code>OK</code>.

</li>

<li>

Riavvia il gateway. Scegli <code>Azioni</code> -> <code>Riavvia</code> sistema nell'angolo in alto a destra.

</li>

<li>

Configura l'aggiunta automatica dei dispositivi a Home Assistant. Vai su <code>Zigbee</code> -> <code>Config</code> poi scegli <code>Home Assistant MQTT Discovery</code> e <code>Cancella Stati</code>. Salva le modifiche e riavvia nuovamente il gateway SLS.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **Extra**:

Se hai già un gateway SLS attivo in casa tua, e stai configurandone un altro, allora entreranno in conflitto tra loro. Per risolvere questo problema devi cambiare il canale sul nuovo dispositivo.

Per fare questo, vai su <code>Zigbee</code> -> <code>Config</code> e cambia il canale con un altro (ad esempio il canale 15).

</li>

<li>

Collega i tuoi dispositivi andando su <code>Zigbee</code> -> <code>Unisciti</code>. Metti i tuoi sensori in modalità di accoppiamento, il modo più comune per passare un dispositivo alla modalità di connessione è tenere premuto il suo pulsante di accensione o accenderli/spegnere per 5 volte. Premi il pulsante <code>Abilita Unione</code> per iniziare la ricerca dei dispositivi Zigbee. Vedrai i sensori attivi.

</li>
</List>
</li>

<li>

Collegamento del Gateway SLS a Home Assistant

<List>

<li>

Devi configurare MQTT sul Gateway SLS. Torna all'interfaccia web del tuo Gateway SLS e vai su <code>Impostazioni</code> -> <code>Collegamento</code> -> <code>Configurazione MQTT</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

Aggiungi l'indirizzo del tuo broker (indirizzo del Raspberry Pi con Home Assistant nella rete locale, puoi trovarlo con l'app [Fing](https://www.fing.com/products) o usando il comando <code>ip -a</code> sul tuo RPi), la porta (di default è 1883) il nome utente e la password del tuo broker (che hai creato in precedenza) e il nome del topic (puoi sceglierne uno qualsiasi). Inoltre, l'indirizzo IP locale del Raspberry Pi deve essere statico.

Non dimenticare di cliccare su <code>Abilita</code> e <code>Mantieni stati</code>.

</li>

<li>

Salva le modifiche. Ora i dispositivi verranno mostrati automaticamente in Home Assistant.

</li>
</List>

</li>

<li>

Collegare i dispositivi 

<List>

<li>

Collega i tuoi dispositivi andando su <code>Zigbee</code> -> <code>Unisciti</code>. Metti i tuoi sensori in modalità di accoppiamento, il modo più comune per passare un dispositivo alla modalità di connessione è tenere premuto il suo pulsante di accensione o accenderli/spegnere per 5 volte.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

Premi il pulsante Abilita Unione per iniziare la ricerca dei dispositivi Zigbee. Vedrai i sensori attivi.

</li>

</List>
</li>

</List>