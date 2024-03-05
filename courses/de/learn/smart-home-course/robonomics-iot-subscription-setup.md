---
title: "Lektion #5, Robonomics IoT-Abonnement-Einrichtung"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: Home Assistant Kurs
lessonNumber: 6
metaOptions: [Lernen Sie, Souveränes Smart Home mit Robonomics und Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## Worum geht es hier

Robonomics IoT-Abonnement ermöglicht es Benutzern, alle Funktionen der Parachain für einen bestimmten Zeitraum zu nutzen, ohne die Standard-Transaktionsgebühren zu zahlen. Durch Aktivierung des Abonnements können Geräte Transaktionen mit Priorität senden.

In dieser Lektion erstellen Sie die erforderlichen Smart-Home-Sicherheitskonten und erwerben ein IoT-Abonnement.

## Theorie

Ein IoT-Abonnement sowie die Methode, wie es gekauft und verwaltet wird, werden mithilfe eines <code>rws</code>-Paletts implementiert, das alle erforderlichen Funktionen enthält. Im Allgemeinen werden Abonnements in Robonomics mit einem Auktionsmodell verkauft, das ein <code>rws.startAuction()</code>-Extrinsisches verwendet, um eine Auktion für eine bestimmte Abonnement-ID zu erstellen. Benutzer können auf die Auktion nach ID zugreifen und mit einem <code>rws.bid()</code>-Extrinsischen bieten.

Nach dem Ende der Auktion wird die Adresse mit dem höchsten Gebot dem Abonnement zugewiesen. Diese Adresse kann nun Transaktionen über das <code>rws.call()</code>-Extrinsische ohne Gebühren senden. Dies bedeutet jedoch nicht, dass die Adresse dies unkontrolliert zu jeder Zeit tun kann: Jedes Abonnement hat einen bestimmten Betrag eines <code>weight</code>-Werts, der sich ansammeln muss, bevor eine kostenlose Transaktion durchgeführt werden kann. Einige <code>weight</code>-Werte werden bei jedem erzeugten Block in der Parachain zum Abonnement hinzugefügt, wodurch Robonomics die Bandbreite der Parachain reguliert.

Darüber hinaus kann der Besitzer des Abonnements das <code>rws.setDevices()</code>-Extrinsische verwenden, um die Nutzung des Abonnements an die angegebenen Adressen zu teilen. Dabei bleibt das <code>weight</code> gleich, sodass je mehr Adressen im Abonnement enthalten sind, desto länger jede von ihnen warten muss, bevor sie die kostenlose Transaktion senden kann.

Um Home Assistant mit Robonomics zu steuern, benötigen Sie zwei Konten auf der Robonomics-Parachain. Diese Konten bieten Sicherheit für Ihren Home Assistant.

Mit einem der Konten (<code>SUB_OWNER</code>) kaufen Sie ein Robonomics-Abonnement. Dieses Konto fungiert als Hauptadministrator des IoT-Abonnements und gewährt anderen Benutzern Zugriff auf Home Assistant (unter Verwendung von <code>rws.setDevices()</code>). Dieses Konto muss einige XRT-Token haben, um Transaktionen zum Kauf des Abonnements abzuschließen.

Das zweite Konto (<code>SUB_CONTROLLER</code>) wird alle Home Assistant-Prozesse von Geräten steuern (wie Telemetrie). Die Transaktionen Ihrer Geräte werden im Namen des Kontos <code>SUB_CONTROLLER</code> gesendet. Sie (und jeder andere) können diese Transaktionen in jedem Parachain-Explorer wie [Subscan](https://robonomics.subscan.io/) sehen. Nur Sie können jedoch den Inhalt dieser Transaktionen entschlüsseln, solange Sie die erforderlichen Seed-Phrasen sicher besitzen.

## Anweisungen

<List type="numbers">

<li>

Erstellen von Besitzer- und Controller-Parachain-Konten

<List>

<li>

<robo-academy-note type="warning" title="WARNING">
Beide Konten müssen mit der ed25519-Verschlüsselung erstellt werden.
</robo-academy-note>

</li>

<li>

Gehen Sie zur [Robonomics Parachain-App](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) im Polkadot / Substrate-Portal. Überprüfen Sie die obere linke Ecke, um sicherzustellen, dass Sie mit der Robonomics-Parachain verbunden sind.

</li>

<li>

Aufgrund der Verwendung des *ed25519*-Formats müssen Sie ein Konto mit dem Polkadot-JS UI erstellen und die erforderliche Verschlüsselung auswählen. 

Diese Funktion ist standardmäßig im Polkadot-JS UI deaktiviert. Um sie zu aktivieren, navigieren Sie zu <code>Einstellungen</code> -> <code>Allgemein</code> -> <code>Kontooptionen</code> und wählen Sie <code>Lokale Speicherung von Konten im Browser zulassen</code> im Dropdown-Menü <code>Kontenerstellung im Browser</code> aus.
 
</li>

<li>

Gehen Sie zu <code>Konten</code> -> <code>Konten</code> und klicken Sie auf die Schaltfläche <code>Konto hinzufügen</code>. Es wird ein Popup-Menü mit dem Kontoschlüssel angezeigt. Es hat zwei Formen: *Mnemonic* (menschlich lesbar) und *Raw* (eine Abfolge von Zahlen und Buchstaben).

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQiJYPYajUJXENX2PzSJMSKGSshyWyPNqugSYxP5eCNvm', type:'mp4'}]" />

</li>

<li>

Öffnen Sie <code>Erweiterte Erstellungsoptionen</code>, ändern Sie den Kryptotyp zur Kontoerstellung in <code>Edwards - ed25519</code>. Speichern Sie den mnemonischen Seed-Satz sicher und klicken Sie auf <code>Weiter</code>.

</li>

<li>

Im nächsten Menü müssen Sie den Kontonamen und das Passwort festlegen. Geben Sie ihm für die Bequemlichkeit den Namen <code>SUB_OWNER</code> und klicken Sie auf <code>Weiter</code>.

</li>

<li>

Klicken Sie im letzten Fenster auf <code>Speichern</code>, um die Kontenerstellung abzuschließen. Es werden auch Backup-JSON-Dateien generiert, die Sie sicher aufbewahren sollten. Sie können diese Datei später verwenden, um Ihr Konto wiederherzustellen, wenn Sie sich an das Passwort erinnern.

</li>

<li>

Wiederholen Sie diese Schritte für das Konto <code>SUB_CONTROLLER</code>.

</li>
</List>
</li>

<li>

Hinzufügen von Konten zur Polkadot.js-Erweiterung

<List type="numbers">

<li>

Zur Vereinfachung sollten Sie die Polkadot.js-Erweiterung verwenden und diese neu erstellten Konten hinzufügen. Für ein ed25519-Konto können Sie dies nur mit einer Sicherungs-JSON-Datei tun. Sie können die Dateien verwenden, die beim Erstellen der Konten gespeichert wurden.

Sie können diese Dateien erneut erhalten, indem Sie eine Sicherungsdatei des Kontos erstellen. Drücken Sie auf drei Punkte auf Ihrem Konto, wählen Sie <code>Erstellen Sie eine Sicherungsdatei für dieses Konto</code> und geben Sie Ihr Passwort ein.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmRd7gztUjWkLF4W2XuJwy5aXBwzNV2aPCU6CQQLvUpSNj', type:'mp4'}]" />

</li>

<li>

Öffnen Sie eine Erweiterung und drücken Sie die Schaltfläche <code>+</code> oben rechts, wählen Sie dann <code>Konto aus Sicherungs-JSON-Datei wiederherstellen</code>.

</li>

<li>

Laden Sie in einem geöffneten Fenster die JSON-Datei hoch, geben Sie das Passwort ein und drücken Sie <code>Wiederherstellen</code>

</li>

<li>

Stellen Sie sicher, dass das Robonomics-Netzwerk für Konten in der Polkadot.js-Erweiterung ausgewählt ist. Gehen Sie auf dem Polkadot / Substrate-Portal zu <code>Einstellungen</code> -> <code>Metadaten</code> und klicken Sie auf die Schaltfläche <code>Metadaten aktualisieren</code>. 

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmT5sTNP9t8gpbD4RJJw6ETwG4wiziiChAh2uHHBk9Zsyd', type:'mp4'}]" />

</li>

<li>

Bestätigen Sie das Metadaten-Update im Popup. Jetzt zeigt die Erweiterung das Label des Netzwerks an, für das die Adresse verwendet wird.

</li>

</List>
</li>

<li>

Robonomics-Abonnement aktivieren

<List >

<li>

<robo-academy-note type="okay">
Für diesen Schritt müssen Sie eine ausreichende Menge an XRT-Token (mindestens 2-3 XRTs) auf Ihrem <code>SUB_OWNER</code>-Konto haben.
</robo-academy-note>

Gehen Sie zur Robonomics-Dapp auf die [Abonnementseite](https://dapp.robonomics.network/#/subscription) und drücken Sie auf der rechten Seitenleiste <code>Konto verbinden</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmXrFCajmJgkRDSbshGD3QehjnoyS6jafEPSjHdYkoBHum', type:'mp4'}]" />

</li>

<li>

Im folgenden Popup-Menü verbinden Sie die Polkadot.js-Erweiterung. Sie sehen Ihre Kontoadresse mit Guthaben.

</li>

<li>

Überprüfen Sie vor dem Kauf, ob Sie das <code>SUB_OWNER</code>-Konto ausgewählt haben. Drücken Sie auf das Adressprofil-Symbol, Sie sollten das <code>SUB_OWNER</code>-Konto unter dem Feld <code>Eigentümerkonto überprüfen</code> sehen.

</li>

<li>

Drücken Sie schließlich die Schaltfläche <code>SENDEN</code> und geben Sie das Passwort für Ihr Konto ein. Warten Sie dann, bis der Aktivierungsprozess abgeschlossen ist. Sie sehen den Status Ihres Abonnements nach einer Weile.

Wenn keine Abonnements verfügbar sind, **kontaktieren Sie bitte** das Robonomics-Team.

</li>
</List>
</li>

<li>

Konto zum Abonnement hinzufügen

<List type="numbers">

<li>

Jetzt müssen Sie das <code>SUB_CONTROLLER</code>-Konto zur **Zugriffsliste** hinzufügen. Öffnen Sie die Erweiterung und klicken Sie auf das Symbol neben dem Kontonamen. Es wird die Kontoadresse kopieren.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmV1gkwtcXsWv54ov9tuXfcHg7nqs1foM8cRwts4sqnqtX', type:'mp4'}]" />

</li>

<li>

Fügen Sie diese Adresse in das Feld <code>Robonomics-Parachain-Adresse</code> im Teil **Zugriff verwalten** ein.

Geben Sie einen Namen ein und drücken Sie die Schaltfläche <code>+</code>. Geben Sie Ihr <code>SUB_OWNER</code>-Passwort im Popup-Fenster ein und warten Sie, bis der Aktivierungsprozess abgeschlossen ist.

</li>

<li>

Wiederholen Sie die Schritte für das <code>SUB_OWNER</code>-Konto.
</li>
</List>
</li>
</List>