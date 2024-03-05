---
title: "Lektion #2, Raspberry Pi Einrichtung"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: Home Assistant Kurs
lessonNumber: 2
metaOptions: [Lernen Sie, Souveränes Smart Home mit Robonomics und Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Einführung

In dieser Lektion bereiten Sie Ihren Raspberry Pi darauf vor, ein IoT-Hub zu werden. Sie werden nacheinander alle notwendigen Komponenten installieren und konfigurieren, nämlich:

<List>

- Ubuntu Linux-Distribution für Raspberry Pi als Server-Betriebssystem;
- Home Assistant-Pakete;
- IPFS-Pakete;
- robonomics-interface Bibliothek.

</List>

## Anweisungen

<List type="numbers">

<li>

Vorbereitung und Konfiguration des Raspberry Pi

<List>

  <li>

  Laden Sie das Bild von [64-Bit Ubuntu Server 22.04 LTS](https://ubuntu.com/download/raspberry-pi) oder neuer für Raspberry Pi herunter.
  </li>

  <li>

  Laden Sie ein Tool zum Schreiben von Abbilddateien namens [Raspberry Pi Imager](https://www.raspberrypi.com/software/) auf Ihren Computer herunter und installieren Sie es.
  </li>

  <li>

  Legen Sie die SD-Karte ein und starten Sie den Raspberry Pi Imager. Wählen Sie das erforderliche Bild (das Sie gerade heruntergeladen haben) als Betriebssystem aus und stellen Sie sicher, dass Sie Ihre SD-Karte aus dem Speicher-Dropdown-Menü auswählen.

  </li>

  <li>

  Öffnen Sie die Einstellungen und aktivieren Sie die Option <code>SSH aktivieren</code> mit dem Parameter <code>Passwortauthentifizierung verwenden</code>.

  \- Fügen Sie im Abschnitt <code>Benutzername und Passwort festlegen</code> Benutzername und Passwort für Ihren Raspberry Pi-Benutzer hinzu.

  \- Geben Sie im Abschnitt <code>Wireless LAN konfigurieren</code> Ihr WLAN mit seinem Passwort ein und wählen Sie Ihr Land aus der Dropdown-Liste aus. Klicken Sie dann auf <code>Schreiben</code>.

  <robo-academy-note type="okay">
  Stellen Sie sicher, dass Sie Ihren tatsächlichen WLAN-Namen und Ihr WLAN-Passwort eingeben.
  </robo-academy-note>

  <LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmY3mEGvUNDT9bKhVhR21JY8RaWp3CB8JNAX1VDHMnwjxw', type:'mp4'}]" />

  </li>

  <li>

  Warten Sie, bis der Schreibvorgang abgeschlossen ist, legen Sie dann die SD-Karte in den Raspberry Pi ein und schalten Sie ihn ein. Er sollte sich mit Ihrem WLAN-Netzwerk verbinden, was einige Zeit in Anspruch nehmen wird.

  </li>
  
  <li>

  Jetzt müssen Sie die Adresse des Geräts finden. Dazu können Sie verschiedene Methoden für die Netzwerkscannung verwenden, wie z.B. [Fing App](https://www.fing.com/products), den Befehl <code>arp -a</code> oder [nmap](https://nmap.org/download.html). Letzteres wird als nächstes verwendet.

  Installieren Sie nmap mit einem Befehl

  <LessonCodeWrapper language="bash" noLines>sudo apt-get install nmap</LessonCodeWrapper>

  Dann finden Sie Ihre Adresse in Ihrem lokalen Netzwerk. Es sollte so aussehen: <code>192.168.xxx.xxx</code> oder <code>172.xxx.xxx.xxx.</code> Achten Sie darauf, da nmap viele Adressen in Ihrem lokalen Netzwerk finden kann.

  <LessonCodeWrapper language="bash" noLines>ip a</LessonCodeWrapper>

  Scannen Sie dann Ihr Netzwerk wie unten gezeigt und ersetzen Sie den letzten Oktett der Adresse durch <code>0</code>:

  <LessonCodeWrapper language="bash" noLines>sudo nmap -sP 192.168.xxx.0/24</LessonCodeWrapper>

  Die Ausgabe des Befehls wird ungefähr so aussehen:

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

  In diesem Beispiel lautet die Adresse <code>192.168.43.56.</code>

  </li>

  <li>

  Verbinden Sie sich über SSH mit der gefundenen IP mit dem Raspberry Pi. Verwenden Sie den Benutzernamen und das Passwort, die Sie zuvor erstellt haben.
  
  <LessonCodeWrapper language="bash" noLines>ssh ubuntu@192.168.43.56</LessonCodeWrapper>

  Weitere Anweisungen werden über SSH auf dem Raspberry Pi selbst ausgeführt.
  
  </li>
</List>
</li>

<li>

Installation des Home Assistant

<List>
  <li>

  <robo-academy-note type="okay">

Einige unten gezeigte Softwareversionen können veraltet sein. Für die neuesten Versionen können Sie sich auf das [Installations-Repository für das Robonomics Home Assistant-Image](https://github.com/airalab/Robonomics-HomeAssistant-image/tree/main/robonomics-stage) beziehen.

  </robo-academy-note>

  Bevor Sie beginnen, aktualisieren Sie das Raspberry Pi-System und installieren Sie die erforderlichen Pakete. Während der Installation wird ein Fenster mit der Aufforderung zur Dienstneustart angezeigt. Wählen Sie einfach <span class="accent">ok</span> mit der <code>tab</code>-Taste und drücken Sie die Eingabetaste.

  <LessonCodeWrapper language="bash" noLines>sudo apt-get update</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>sudo apt-get upgrade -y</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>sudo apt-get install -y python3 python3-dev python3-venv python3-pip bluez libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev subversion libturbojpeg0-dev python3-serial curl</LessonCodeWrapper>

  </li>

  <li>
  
  Erstellen Sie den Benutzer <code>homeassistant</code> und das Verzeichnis für Home Assistant Core:

  <LessonCodeWrapper language="bash" noLines>sudo useradd -rm homeassistant -d /srv/homeassistant -G dialout</LessonCodeWrapper>
  
  </li>

  <li>

  Erstellen Sie eine virtuelle Umgebung für Home Assistant Core und wechseln Sie zu dieser. Dies sollte als Benutzer <code>homeassistant</code> erfolgen, sodass Ihr Benutzer nach Ausführung der Befehle wie folgt aussieht: <code>(homeassistant) homeassistant@ubuntu</code>:

  <LessonCodeWrapper language="bash" noLines>sudo -u homeassistant -H -s</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>cd /srv/homeassistant</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>python3 -m venv .</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>source bin/activate</LessonCodeWrapper>

  Als Ergebnis finden Sie einen Namen der virtuellen Umgebung in den Klammern:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines noCopyIcon>
(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$
</LessonCodeWrapper>

  </li>

  <li>

  Installieren Sie die erforderlichen Python-Pakete:

  <LessonCodeWrapper language="bash" noLines>python3 -m pip install wheel~=0.37</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11</LessonCodeWrapper>

  <LessonCodeWrapper language="bash" noLines>pip3 install homeassistant~=2023.3.6 psutil-home-assistant~=0.0</LessonCodeWrapper>
  
  </li>

  <li>
  
  Starten Sie Home Assistant Core zum ersten Mal. Dadurch wird die Installation abgeschlossen, indem automatisch das Konfigurationsverzeichnis <code class="nowb">.homeassistant</code> im Verzeichnis <code>/home/homeassistant</code> erstellt und alle grundlegenden Abhängigkeiten installiert werden:
  
<LessonCodeWrapper language="bash" noLines>hass</LessonCodeWrapper>
  
  </li>

  <li>

  Während das erste Setup läuft, überprüfen Sie Ihre Installation über die Weboberfläche unter <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. In diesem Beispiel: <code>http://192.168.43.56:8123</code>. Sie können eine Weboberfläche von jedem Computer aus öffnen, der mit Ihrem lokalen Netzwerk verbunden ist.

  Warten Sie, bis Sie das Begrüßungsfenster mit der Login-/Passworterstellung erhalten, und beenden Sie dann Home Assistant mit <code>Ctrl+C</code>.
  </li>
</List>
</li>

<li>

IPFS-Installation

<List>

  <li>

  Für die IPFS-Installation können Sie unser Skript verwenden, um IPFS herunterzuladen und einen systemd-Dienst damit zu erstellen. Verlassen Sie zunächst die virtuelle Umgebung für Home Assistant:

<LessonCodeWrapper language="bash" noLines>exit</LessonCodeWrapper>

  Führen Sie dann aus:

  <LessonCodeWrapper language="bash" noLines>cd ~</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" codeClass="big-code" noLines>wget https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>sudo chmod +x install_ipfs.sh</LessonCodeWrapper>
  <LessonCodeWrapper language="bash" noLines>./install_ipfs.sh</LessonCodeWrapper>

</li>
</List>
</li>

<li>

Systemd-Dienste

<List>

<li>

Systemd-Dienst ist nützlich zur Automatisierung des Starts von Home Assistant. Erstellen Sie einen neuen Dienst für Home Assistant:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
sudo nano /etc/systemd/system/home-assistant@homeassistant.service
</LessonCodeWrapper>

</li>

<li>

Fügen Sie folgendes ein

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

Aktivieren und starten Sie den Dienst:

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

Robonomics-Integration

<List>

<li>

Melden Sie sich als <code>homeassistant</code>-Benutzer auf Ihrem Raspberry Pi an:

<LessonCodeWrapper language="bash" noLines>
sudo -u homeassistant -H -s
</LessonCodeWrapper>

</li>

<li>

Aktivieren Sie die virtuelle Umgebung und installieren Sie die erforderlichen Python-Pakete:


<LessonCodeWrapper language="bash" noLines>
source /srv/homeassistant/bin/activate
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
pip3 install robonomics-interface~=1.6.0
</LessonCodeWrapper>

</li>

<li>

Gehen Sie dann zum Verzeichnis <code>.homeassistant</code>, erstellen Sie den Ordner <code class="nowb">custom_components</code> und klonen Sie dort das Repository mit der Integration:


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

Danach den Benutzer homeassistant verlassen und den Dienst neu starten:

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



