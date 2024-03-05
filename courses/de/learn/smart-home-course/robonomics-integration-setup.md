---
title: "Lektion #6: Robonomics-Integrations-Setup"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: Home Assistant Kurs
lessonNumber: 7
metaOptions: [Lernen Sie, Souveränes Smart Home mit Robonomics und Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## Worum geht es hier

In dieser Lektion fügen Sie Robonomics zu Home Assistant hinzu und erstellen ein Konto, das mit dem Abonnement verbunden ist. Diese Integration ermöglicht es Home Assistant, Robonomics-Parachain-Funktionen zu nutzen, vor allem, um verschlüsselte Smart-Home-Daten an eine dezentralisierte Cloud zu senden.


## Theorie

Ihre Smart-Home-Daten werden mithilfe des <code>record()</code>-Extrinsik von der <code>datalog</code>-Palette gesendet, die es Ihnen ermöglicht, verschlüsselte Gerätedaten auf der Blockchain zu speichern. 

Um genauer zu sein, verwendet die Integration IPFS, um Daten zu speichern und dann IPFS-Hashes an den datalog-Extrinsik zu senden, der wiederum in der Blockchain gespeichert wird. Da diese Funktion jedoch über ein IoT-Abonnement aufgerufen wird, sieht die gesamte Funktion wie folgt aus: <code>rws.call(datalog.record(IHR_IPFS_HASH))</code>.

## Anweisungen

<List type="numbers">

<li>

Hinzufügen von Robonomics zu Home Assistant

<List>

<li>

Im Webinterface von Home Assistant gehen Sie zu <code>Einstellungen</code>-><code>Geräte & Dienste</code> und klicken auf <code>INTEGRATION HINZUFÜGEN</code>. Suchen Sie nach <code>Robonomics</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQp66J943zbF6iFdkKQpBikSbm9jV9La25bivKd7cz6fD', type:'mp4'}]" />

</li>

<li>

Klicken Sie auf Robonomics und füllen Sie die Konfiguration aus: 

\- Fügen Sie den Seed vom Konto <code>SUB_CONTROLLER</code> zum Admin-Kontoseed hinzu

\- Fügen Sie die öffentliche Adresse des Kontos <code>SUB_OWNER</code> (das Sie zuvor erstellt haben) zur Abonnementinhaberadresse hinzu

\- Legen Sie das Intervall für den Datenversand fest (standardmäßig sind es 10 Minuten)

\- (Optional) Sie können Anmeldeinformationen für den Pinning-Dienst Pinata hinzufügen, um Ihre Daten breiter über das IPFS-Netzwerk zu verteilen

</li>

<li>

Drücken Sie nach Abschluss der Konfiguration auf <code>SENDEN</code>. Wenn Sie alles korrekt ausgefüllt haben, sehen Sie das Erfolgsfenster.

</li>
</List>
</li>

<li>

Hinzufügen von Benutzern in der Robonomics Dapp 

<List>

<li>

Sie müssen einen separaten Benutzer für Home Assistant erstellen, der die Smart-Home-Geräte steuern wird. Sie können keine zuvor erstellten Konten verwenden, da <code>SUB_OWNER</code> und <code>SUB_CONTROLLER</code> Sicherheit bieten, und der erste Benutzer, den Sie erstellt haben, als Sie Home Assistant zum ersten Mal gestartet haben, hat kein Robonomics Parachain-Konto.

</li>

<li>
Beginnen Sie mit der Erstellung eines Kontos auf der Robonomics Parachain, wie Sie es im vorherigen Lektion getan haben.
</li>

<li>

Fügen Sie dieses Konto dem Abonnement in der [Dapp](https://dapp.robonomics.network/#/subscription/devices) hinzu. Jetzt sollten drei Adressen in der Zugriffsliste stehen: <code>SUB_OWNER</code>, <code>SUB_CONTROLLER</code> und <code>USER</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSxzram7CF4SXpVgEyv98XetjYsxNFQY2GY4PfyhJak7H', type:'mp4'}]" />

</li>

<li>

Gehen Sie zum Dapp-Dienst namens [Home Assistant Account](https://dapp.robonomics.network/#/home-assistant). Wählen Sie das Konto aus, das Sie gerade auf der rechten Seite erstellt haben (überprüfen Sie, ob Sie das beabsichtigte Konto ausgewählt haben, indem Sie auf das Profilsymbol drücken).

Geben Sie den <code>USER</code>-Seed in das erforderliche Feld ein. Fügen Sie die Adressen von <code>SUB_OWNER</code> und <code>SUB_CONTROLLER</code> in die Felder für die Administratorberechtigungen ein. Wenn alles korrekt ist, sehen Sie den Verifizierungsstatus <code>VERIFIED</code>.

</li>

<li>

Erstellen Sie ein Passwort für einen neuen Benutzer, den Sie gerade registriert haben, und bestätigen Sie dann die Transaktion, die jetzt aufgrund des Abonnements gebührenfrei ist. Später können Sie das Passwort im Tab <code>Wiederherstellen</code> wiederherstellen.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmW2TXuwCYXzgcRfEUx4imZU5ZerEzkuD5P53u9g2WnxDh', type:'mp4'}]" />

</li>

<li>

Nach dem Registrierungsprozess melden Sie sich bei Home Assistant mit Ihrer Benutzeradresse als Login und einem neu erstellten Passwort an. Jetzt können Sie die Robonomics Dapp verwenden, um Ihr Zuhause über Robonomics zu steuern.

</li>
</List>
</li>
</List>