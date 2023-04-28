---
title: "Lektion #3, Polkadot-Ecosystem für die IoT-Infrastruktur zu Hause"
description: In dieser Lektion werden Sie versuchen eine intelligente Glühbirne zu steuern, die über den Home Assistant funktioniert der über zusätzliche Robonomics-Module verfügt.
lessonNumber: 3
courseID: 1
metaOptions: [Online Kurse, Einführungskurs]
defaultName: Introduction to the ideas of Robonomics
---

In Lektion 2 wurden die Hauptprinzipien von Robonomics erläutert und Polkadot / Kusama als vielversprechende Blockchain-Ecosystem-Plattform für ihre Umsetzung erwähnt. Es ist an der Zeit einen genaueren Blick auf die Funktionen von Robonomics Parachain als Teil des Polkadot-Ecosystems im Kusama-Netzwerk zu werfen. Insbesondere möchten wir zeigen wie die IoT-Abonnements der Robonomics Parachain funktionieren. In der ersten Lektion wurde Ihre Adresse dem IoT-Abonnement des Kurses hinzugefügt und Sie haben es bereits zweimal genutzt, als sie  "Black Mirror" benutzten und weiters Ihre Testergebnisse einreichten.


## Intro

In dieser Lektion werden Sie versuchen eine intelligente Glühbirne zu steuern, die über den Home Assistant funktioniert der über zusätzliche Robonomics-Module verfügt. Ihr Ziel ist es die Glühbirne über die Standardschnittstelle Polkadot/Substrat auf der Robonomics Parachain ein- und auszuschalten. Die Glühbirne sendet via [YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) damit Sie Ihr Ergebnis in Echtzeit verfolgen können. Eine ausführlichere Anleitung zur Nutzung eines IoT-Abonnements ist ebenfalls verfügbar [in unserem Wiki](https://wiki.robonomics.network/docs/subscription-launch/).


## Anleitung

<List type="numbers">

<li>

Öffnen Sie die Robonomics [Polkadot/Substrat-Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/extrinsics).

Sie sollten das Menü Extrinsics (Funktionen im Polkadot-Ecosystem) sehen. Wenn Sie nicht weiterkommen, navigieren Sie über das Menü oben links auf der Seite zu <code> Kusama & Parachains -> Robonomics</code>, und drücken Sie auf <code>Switch</code>. Navigieren Sie dann zu <code>Developer</code> in der oberen Kopfzeile und dann zu <code>Extrinsics</code>.

</li>

<li>
Im ersten Feld, in dem Sie "using the selected account" lesen können, wählen Sie das gleiche polkadot.js-Konto, das Sie in den vorherigen Lektionen verwendet haben.
</li>

<li>
Wählen Sie im zweiten Feld "submit the following extrinsic" aus <code>rws</code> Extrinsics und wählen <code>call(subscriptionId, call)</code>. So können Sie einen Funktionsaufruf über das IoT-Abonnement versenden.
</li>

<li>
In <code>subscriptionId: AccountId32</code> fügen Sie die Adresse des Users dieses Abonnements ein: <code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code>
</li>

<li>

In <code>call: Call</code> wählen Sie das Feld <code>launch(robot, param)</code> command.

Es werden zwei weitere Felder angezeigt: <code>robot</code> und <code>param</code>.

</li>

<li>
In <code>robot: AccountId32</code> fügen Sie die Adresse der intelligenten Glühbirne ein: <code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code>
</li>

<li>

In <code>param: H256</code> müssen Sie 1 (an) oder 0 (aus) angeben, um die Glühbirne ein- oder auszuschalten. 

Sie können dies tun mit:

<code>0x0000000000000000000000000000000000000000000000000000000000000001</code>

oder

<code>0x0000000000000000000000000000000000000000000000000000000000000000</code>

</li>

<li>

Drücken Sie die Schaltfläche "Submit Transaction". 

Vergessen Sie nicht, die [Übertragung auf YouTube](https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live) bevor Sie die Transaktion unterzeichnen.

</li>


</List>

<Result>

Die Lektion gilt als abgeschlossen, wenn die Transaktion erfolgreich gesendet wurde und im Polkadot-Explorer für Ihr polkadot.js-Konto erscheint.

You can check your results on [the special checking dapp](https://lk.robonomics.academy/). For authorization on the checking dapp use the same account in Polkadot.js that was used during the course.

</Result>