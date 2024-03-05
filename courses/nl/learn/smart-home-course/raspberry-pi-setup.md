---
title: "Les #2, Raspberry Pi Setup"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: thuiscursus assistent
lessonNumber: 2
metaOptions: [Leer, Soevereine Slimme Woning met Robonomics en Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Intro

In deze les zul je je Raspberry Pi voorbereiden om een IoT-hub te worden. Je zult alle benodigde componenten sequentieel installeren en configureren, namelijk:

<List>

- Ubuntu Linux distributie voor Raspberry Pi als server besturingssysteem;
- Home Assistant pakketten;
- IPFS pakketten;
- robonomics-interface bibliotheek.

</List>

## Instructies

<List type="numbers">

<li>

Voorbereiden en configureren van de Raspberry Pi

<List>

  <li>

  Download de afbeelding van [64-bit Ubuntu Server 22.04 LTS](https://ubuntu.com/download/raspberry-pi) of nieuwer voor Raspberry Pi.
  </li>

  <li>

  Download en installeer een tool voor het schrijven van afbeeldingsbestanden genaamd [Raspberry Pi Imager](https://www.raspberrypi.com/software/) op je computer.
  </li>

  <li>

  Plaats de SD-kaart en start de Raspberry Pi Imager. Selecteer de vereiste afbeelding (die je zojuist hebt gedownload) als het besturingssysteem en zorg ervoor dat je je SD-kaart selecteert uit het opslagkeuzemenu.

  </li>

  <li>

  Open instellingen en vink de optie <code>SSH inschakelen</code> aan met de parameter <code>Gebruik wachtwoordverificatie</code>.

  \- Voeg in <code>Gebruikersnaam en wachtwoord instellen</code> gebruikersnaam en wachtwoord toe voor je Raspberry Pi-gebruiker.

  \- Bij <code>Draadloos LAN configureren</code> geef je je Wi-Fi met het wachtwoord en kies je je land uit de keuzelijst. Klik vervolgens op <code>Schrijven</code> afbeelding.

  <robo-academy-note type="okay">
  Zorg ervoor dat je daadwerkelijke Wi-Fi naam en je Wi-Fi wachtwoord invoert.
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  Wacht tot het schrijven is voltooid, plaats dan de SD-kaart in de Raspberry Pi en zet hem aan. Het zou verbinding moeten maken met je Wi-Fi-netwerk, wat enige tijd zal duren.

  </li>
  
  <li>

  Nu moet je het adres van het apparaat vinden. Hiervoor kun je verschillende methoden voor netwerkscannen gebruiken, zoals [Fing App](https://www.fing.com/products), <code>arp -a</code> commando of [nmap](https://nmap.org/download.html). De laatste zal hierna worden gebruikt.

  Installeer nmap met een commando

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  Vind vervolgens uw adres in uw lokale netwerk. Het zou eruit moeten zien als <code>192.168.xxx.xxx</code> of <code>172.xxx.xxx.xxx.</code> Let op, want nmap kan veel adressen op uw lokale netwerk vinden.

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  Scan vervolgens uw netwerk zoals hieronder weergegeven en vervang het laatste octet van het adres door <code>0</code>:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  De uitvoer van het commando zal er ongeveer zo uitzien:

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

  In dit voorbeeld is het adres <code>192.168.43.56.</code>

  </li>

  <li>

  Verbind met de Raspberry Pi via SSH met het gevonden IP-adres. Gebruik de gebruikersnaam en wachtwoord die u eerder heeft aangemaakt.
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  Verdere instructies worden uitgevoerd via SSH op de Raspberry Pi zelf.
  
  </li>
</List>
</li>

<li>

Home Assistant installatie

<List>
  <li>

  <robo-academy-note type="okay">

Sommige hieronder getoonde softwareversies kunnen verouderd zijn. Voor de nieuwste versies kunt u verwijzen naar het [installatierepository voor Robonomics Home Assistant image](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage).

  </robo-academy-note>

  Voordat u begint, update het Raspberry Pi-systeem en installeer de benodigde pakketten. Tijdens de installatie ziet u een venster met een verzoek tot herstart van de service. Kies gewoon <span class="accent">ok</span> met de <code>tab</code>-knop en druk op enter.

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  Maak gebruiker <code>homeassistant</code> en de map voor Home Assistant Core aan:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  Maak een virtuele omgeving aan voor Home Assistant Core en schakel hier naar over. Dit moet worden gedaan als de gebruiker <code>homeassistant</code>, dus na het uitvoeren van de commando's zal uw gebruiker eruit zien als <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  Als resultaat vindt u een naam van de virtuele omgeving tussen haakjes:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  Installeer vereiste Python-pakketten:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  Start Home Assistant Core voor de eerste keer. Dit zal de installatie voltooien door automatisch de <code class="nowb">.homeassistant</code> configuratiemap aan te maken in de <code>/home/homeassistant</code> map, en het installeren van eventuele basisafhankelijkheden:
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  Terwijl de initiële setup bezig is, controleer je installatie via de webinterface op <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. In dit voorbeeld: <code>http://192.168.43.56:8123</code>. Je kunt een web-UI openen vanaf elke computer die is verbonden met je lokale netwerk.

  Wacht tot je het welkomstvenster met inloggen / wachtwoordcreatie krijgt en stop dan Home Assistant met <code>Ctrl+C</code>.
  </li>
</List>
</li>

<li>

IPFS Installatie

<List>

  <li>

  Voor IPFS installatie kun je onze script gebruiken om IPFS te downloaden en een systemd-service mee te maken. Verlaat eerst de virtuele omgeving voor Home Assistant:

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  Voer vervolgens uit:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Systemd Services

<List>

<li>

Systemd-service is handig voor het automatiseren van de lancering van Home Assistant. Maak een nieuwe service voor Home Assistant aan:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

Plak het volgende

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

Activeer en start de service:

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

Robonomics Integratie

<List>

<li>

Log in met de gebruiker <code>homeassistant</code> op je Raspberry Pi:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

Activeer de virtuele omgeving en installeer de vereiste Python-pakketten:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

Ga vervolgens naar de <code>.homeassistant</code> map, maak de map <code class="nowb">custom_components</code> aan en kloon daar de repository met de integratie:


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

Verlaat daarna de homeassistant gebruiker en herstart de service:

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



