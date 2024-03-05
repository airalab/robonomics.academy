---
title: "Lezione n. 2, Configurazione di Raspberry Pi"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: corso di assistente domestico
lessonNumber: 2
metaOptions: [Impara, Casa Intelligente Sovrana con Robonomics e Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Introduzione

In questa lezione, preparerai il tuo Raspberry Pi per diventare un hub IoT. Installerai e configurerai sequenzialmente tutti i componenti necessari, ovvero:

<List>

- Distribuzione Ubuntu Linux per Raspberry Pi come sistema operativo server;
- Pacchetti Home Assistant;
- Pacchetti IPFS;
- libreria robonomics-interface.

</List>

## Istruzioni

<List type="numbers">

<li>

Preparazione e configurazione di Raspberry Pi

<List>

  <li>

  Scarica l'immagine di [Ubuntu Server 22.04 LTS a 64 bit](https://ubuntu.com/download/raspberry-pi) o successiva per Raspberry Pi.
  </li>

  <li>

  Scarica e installa uno strumento per scrivere file immagine chiamato [Raspberry Pi Imager](https://www.raspberrypi.com/software/) sul tuo computer.
  </li>

  <li>

  Inserisci la scheda SD ed esegui Raspberry Pi Imager. Seleziona l'immagine richiesta (che hai appena scaricato) come sistema operativo e assicurati di selezionare la tua scheda SD dal menu a discesa dello storage.

  </li>

  <li>

  Apri le impostazioni e seleziona l'opzione <code>Abilita SSH</code> con il parametro <code>Usa autenticazione password</code>.

  \- In <code>Imposta nome utente e password</code> aggiungi nome utente e password per il tuo utente Raspberry Pi.

  \- In <code>Configura LAN wireless</code> fornisci il tuo Wi-Fi con la relativa password e scegli il tuo paese dal menu a discesa. Quindi <code>Scrivi</code> l'immagine.

  <robo-academy-note type="okay">
  Assicurati di inserire il nome effettivo del tuo Wi-Fi e la relativa password.
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  Attendi fino al termine della scrittura, quindi inserisci la scheda SD nel Raspberry Pi e accendilo. Dovrebbe connettersi alla tua rete Wi-Fi, il che richiederà del tempo.

  </li>
  
  <li>

  Ora devi trovare un indirizzo del dispositivo. Per farlo puoi utilizzare vari metodi per la scansione di rete, come [Fing App](https://www.fing.com/products), il comando <code>arp -a</code> o [nmap](https://nmap.org/download.html). Quest'ultimo verrà utilizzato successivamente.

  Installa nmap con un comando

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  Quindi trova il tuo indirizzo nella tua rete locale. Dovrebbe assomigliare a <code>192.168.xxx.xxx</code> o <code>172.xxx.xxx.xxx.</code> Presta attenzione poiché nmap può trovare molti indirizzi nella tua rete locale.

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  Quindi esegui la scansione della tua rete come mostrato di seguito sostituendo l'ultimo ottetto dell'indirizzo con <code>0</code>:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  L'output del comando sarà qualcosa del genere:

<LessonCodeWrapper language="bash" codeClass="big-code" noCopyIcon noLines>
Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST
Nmap scan report for _gateway (192.168.43.1)
Host is up (0.015s latency).
MAC Address: 8E:F5:A3:DB:02:24 (Unknown)
Nmap scan report for ubuntu (192.168.43.56)
Host is up (0.049s latency).
MAC Address: DC:A6:32:04:45:50 (Raspberry Pi Trading)
Nmap scan report for LAPTOP-NO7 (192.168.43.234)
Host is up (0.00057s latency).
MAC Address: 7C:B3:7D:9E:94:DA (Intel Corporate)
Nmap scan report for ed-vm (192.168.43.138)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds
</LessonCodeWrapper>

  In questo esempio l'indirizzo è <code>192.168.43.56.</code>

  </li>

  <li>

  Connettiti al Raspberry Pi tramite SSH con l'IP trovato. Utilizza il nome utente e la password che hai creato in precedenza.
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  Ulteriori istruzioni vengono eseguite tramite SSH sul Raspberry Pi stesso.
  
  </li>
</List>
</li>

<li>

Installazione di Home Assistant

<List>
  <li>

  <robo-academy-note type="okay">

Alcune versioni del software mostrate di seguito potrebbero essere obsolete. Per le versioni più recenti, puoi fare riferimento al [repository di installazione per l'immagine di Robonomics Home Assistant](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage).

  </robo-academy-note>

  Prima di iniziare, aggiorna il sistema del Raspberry Pi e installa i pacchetti necessari. Durante l'installazione vedrai una finestra con la richiesta di riavvio del servizio. Scegli semplicemente <span class="accent">ok</span> con il pulsante <code>tab</code> e premi invio.

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  Crea l'utente <code>homeassistant</code> e la directory per Home Assistant Core:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  Crea un ambiente virtuale per Home Assistant Core e passa ad esso. Questo dovrebbe essere fatto come utente <code>homeassistant</code>, quindi dopo aver eseguito i comandi il tuo utente sembrerà <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  Come risultato, troverai un nome dell'ambiente virtuale tra parentesi:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  Installa i pacchetti Python richiesti:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  Avvia Home Assistant Core per la prima volta. Questo completerà l'installazione creando automaticamente la directory di configurazione <code class="nowb">.homeassistant</code> nella directory <code>/home/homeassistant</code> e installando le dipendenze di base:
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  Mentre l'impostazione iniziale è in corso, controlla la tua installazione tramite l'interfaccia web su <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. In questo esempio: <code>http://192.168.43.56:8123</code>. Puoi aprire un'interfaccia web da qualsiasi computer connesso alla tua rete locale.

  Aspetta fino a quando non comparirà la finestra di benvenuto con la creazione di login/password e poi arresta Home Assistant con <code>Ctrl+C</code>.
  </li>
</List>
</li>

<li>

Installazione di IPFS

<List>

  <li>

  Per l'installazione di IPFS puoi utilizzare il nostro script per scaricare IPFS e creare un servizio systemd con esso. Prima, esci dall'ambiente virtuale di Home Assistant:

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  Quindi esegui:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Servizi Systemd

<List>

<li>

Il servizio Systemd è utile per automatizzare l'avvio di Home Assistant. Crea un nuovo servizio per Home Assistant:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

Incolla quanto segue

<LessonCodeWrapper language="bash">
[Unit]
Description=Home Assistant
After=network-online.target
[Service]
Type=simple
Restart=on-failure
User=%i
WorkingDirectory=/srv/%i/
ExecStart=/srv/homeassistant/bin/hass -c "/srv/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"
[Install]
WantedBy=multi-user.target
</LessonCodeWrapper>

</li>

<li>

Abilita e avvia il servizio:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl enable home-assistant@homeassistant.service
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl start home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Integrazione Robonomics

<List>

<li>

Accedi con l'utente <code>homeassistant</code> sul tuo Raspberry Pi:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

Attiva l'ambiente virtuale e installa i pacchetti Python richiesti:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

Quindi vai alla directory <code>.homeassistant</code>, crea la cartella <code class="nowb">custom_components</code> e clona lì il repository con l'integrazione:


<LessonCodeWrapper language="bash" noLines>
cd ~/.homeassistant
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
mkdir custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
cd custom_components
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
svn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics
</LessonCodeWrapper>

</li>


<li>

Dopo di che esci dall'utente homeassistant e riavvia il servizio:

<LessonCodeWrapper language="bash" noLines>
exit
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo systemctl restart home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>
</List>
</li>

</List>



