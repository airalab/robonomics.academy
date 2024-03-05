---
title: "Lektion #7, Verwendung von Robonomics mit Home Assistant"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: Home Assistant Kurs
lessonNumber: 8
metaOptions: [Lernen Sie, Souveränes Smart Home mit Robonomics und Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Worum geht es hier

In dieser Lektion werden Sie versuchen, die Haupt-Robonomics-IoT-Services zu verwenden. Der erste kann die Telemetrie von Smart-Home-Geräten abfragen, was es Ihnen ermöglicht, Daten von Home Assistant remote zu empfangen. Der zweite Service erstellt Backups Ihrer Home Assistant-Konfiguration und stellt sie bei Bedarf wieder her (zum Beispiel im Falle eines Ausfalls von SD-Karten).


## Über Parachain-Funktionen

Als nächstes werden Sie sehen, wie die Funktionen der Robonomics-Parachain verwendet werden, um dem Home Assistant-Benutzer den erforderlichen Service bereitzustellen. 

Die Telemetrie basiert auf dem <code>datalog</code>-Pallet, das Sie bereits kennen. In regelmäßigen Abständen (aber nicht weniger als das akkumulierte Gewicht zulässt) wird eine <code>datalog.record()</code>-Transaktion von der Adresse <code>SUB_CONTROLLER</code> mit dem IPFS-Hash der verschlüsselten Datei an die Parachain gesendet, in der alle Daten Ihrer IoT-Geräte gesammelt sind. Tatsächlich fordern Sie die erforderlichen Datalogs von der Parachain im Zusammenhang mit Ihrem IoT-Abonnement an und entschlüsseln sie dann mit Ihren Schlüsseln.

Um ein Backup zu erstellen, wird ein weiteres Robonomics-Pallet namens <code>digitalTwin</code> verwendet, das eine Implementierung der Idee eines digitalen Zwillings ist, eine digitale Version realer Ausrüstung, die ihre technischen Merkmale und historischen Daten kopiert. Zunächst wird eine eindeutige ID für den digitalen Zwilling Ihres Home Assistant mit dem Extrinsikum <code>digitalTwin.create()</code> erstellt. Dann wird mit dem Extrinsikum <code>digitalTwin.setSource()</code> diese ID mit einigen Daten (dem Feld <code>topic</code>) und mit einer Adresse in der Parachain (dem Feld <code>source</code>) verbunden. Für das Home Assistant-Backup wird der Hash der Backup-Datei im <code>topic</code> gespeichert und die Adresse <code>SUB_OWNER</code> im <code>source</code> gespeichert.

## Anweisungen

<List type="numbers">

<li>

Telemetrie abrufen

<List>


<li>

Gehen Sie zur Dapp und wählen Sie den [SmartHome Telemetry](https://dapp.robonomics.network/#/smarthome-telemetry)-Service aus.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmao9RoWcKo2qs4PAGtm5gqHzyAHJcpDqNLgciU35FJeVm', type:'mp4'}]" />

</li>

<li>

Geben Sie im Feld <code>CONTROLLER</code> die Adresse <code>SUB_CONTROLLER</code> ein. Geben Sie den Seed-Phrasen ein, um die Daten zu verschlüsseln.

</li>

<li>

Wählen Sie im Block <code>Telemetrie abrufen</code> einen Zeitstempel aus der Dropdown-Liste aus und drücken Sie die Schaltfläche <code>TELEMETRIE HERUNTERLADEN</code>.


Das Herunterladen der Telemetrie kann einige Zeit in Anspruch nehmen. Nach Abschluss sehen Sie die Informationen von Ihren Sensoren.

</li>
</List>
</li>


<li>

Backup erstellen

<List>

<li>

Um Backups zu erstellen, wird ein Dienst aufgerufen, der ein sicheres Archiv mit Konfigurationsdateien generiert. Dieser Dienst fügt dann das Archiv zu IPFS hinzu und speichert die resultierende CID im Robonomics Digital Twin.

<robo-academy-note type="warning" title="WARNING">
Um Ihre Konfiguration wiederherzustellen, ist es erforderlich, einen benutzerdefinierten IPFS-Gateway wie Pinata (pinata.cloud) oder Crust Network (crust.network) zu verwenden. Ohne dies wird Ihr Backup ausschließlich auf Ihrem lokalen IPFS-Node gespeichert, was Sie daran hindern kann, Ihre Home Assistant-Konfiguration im Falle eines Ausfalls des lokalen Nodes wiederherzustellen. 
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVo91dLaAYgFDM1vrL2PYfAffM6SGGC59ZERbfHR44tqW', type:'mp4'}]" />

</li>

<li>

Im Webinterface von Home Assistant gehen Sie zu <code>Entwicklerwerkzeuge</code> -> <code>Dienste</code>. Suchen Sie nach <code>Robonomics: Backup in Robonomics speichern</code> und drücken Sie <code>Dienst aufrufen</code>.

</li>

<li>

Warten Sie, bis Sie die Benachrichtigung <code>Backup wurde in Robonomics aktualisiert</code> im <code>Benachrichtigung</code>-Bereich sehen.

</li>

<li>

Um Ihre Konfiguration wiederherzustellen, müssen Sie eine frische Home Assistant-Instanz installieren (und alle vorherigen Schritte wiederholen) mit Robonomics Home Assistant-Integration unter Verwendung der gleichen Seeds, die Sie zuvor erstellt haben. Sie müssen auch einen MQTT-Broker mit dem gleichen Benutzernamen und Passwort einrichten.

<robo-academy-note type="warning" title="WARNING">
Da einige Geräte, die über WLAN oder MQTT mit Home Assistant verbunden sind, Sie auffordern, die lokale IP-Adresse Ihres Raspberry Pi explizit anzugeben, wenn Sie ein Backup wiederherstellen, möglicherweise nicht verfügbar sind aufgrund einer Änderung dieser IP. Sie müssen die neue IP-Adresse in den Einstellungen dieser Geräte erneut eingeben. Um dies zu vermeiden, können Sie eine statische lokale IP für Ihren Raspberry Pi in den Router-Einstellungen einrichten (sofern diese Funktion unterstützt wird).
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmWmnmkXUcPXsAnQzwN3UEuki2GMYnQDx3vhgjEypCU8aR', type:'mp4'}]" />


</li>

<li>

Im Webinterface von Home Assistant gehen Sie zu <code>Entwicklerwerkzeuge</code> -> <code>Dienste</code>. Suchen Sie nach <code>Robonomics: Wiederherstellen aus dem Backup in Robonomics</code> und drücken Sie <code>Dienst aufrufen</code>. Navigieren Sie zur <code>Übersicht</code>-Seite, um den Status Ihres Backups zu überprüfen.

</li>

<li>

Sobald Home Assistant mit dem Neustarten fertig ist, wird Ihre Konfiguration wiederhergestellt. Wenn der Status auf <code>wiederhergestellt</code> wechselt, aber Home Assistant nicht automatisch neu startet, müssen Sie ihn manuell neu starten, indem Sie zu <code>Einstellungen</code> > <code>System</code> navigieren und auf die <code>NEUSTART</code>-Schaltfläche in der oberen rechten Ecke klicken.

</li>

</List>
</li>

</List>

## Kurs abschließen

<List>

<li class="flex"> 

Herzlichen Glückwunsch! Sie haben die vollständige Einrichtung und Bereitstellung Ihres souveränen Smart Homes erfolgreich abgeschlossen. Sie können jetzt von uns ein Kursabschlusszertifikat anfordern, indem Sie unseren Discord-Kanal besuchen. Schreiben Sie uns im [robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315)-Chat und unser Vertreter wird sich mit Ihnen in Verbindung setzen.
</li>

<li class="flex">

Der Nachweis des Kursabschlusses sind entsprechende Transaktionen, die im [Polkadot-Explorer](https://robonomics.subscan.io/) überprüft werden können. Dies sind Transaktionen über den Kauf eines Abonnements, das Hinzufügen eines Geräts zu einem Abonnement und das Senden von Datalogs von Geräten.

</li>

</List>