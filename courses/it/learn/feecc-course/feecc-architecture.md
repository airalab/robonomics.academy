---
title: "Architettura"
description: Questo corso riguarda la conoscenza del sistema Feecc e di tutti i suoi componenti.
metaOptions: [Imparare, Abituarsi a Feecc]
defaultName: Getting Used to Feecc
---

<RoboAcademyText fWeight="500">
In questa lezione, esamineremo più da vicino l'architettura di Feecc e esamineremo tutti i componenti del software.
</RoboAcademyText>

La piattaforma Feecc è composta da diversi servizi, dal controllo della postazione di lavoro dell'ingegnere alla fornitura di analisi. Ciascun servizio è responsabile di un tipo di funzionalità richiesta per l'implementazione in un ambiente aziendale.

## Postazione di lavoro dell'ingegnere Feecc

Il compito principale della postazione di lavoro dell'ingegnere è organizzare lo spazio di lavoro dell'ingegnere di montaggio. A seconda del compito, l'ingegnere potrebbe aver bisogno dei seguenti dispositivi:

- telecamera IP per organizzare la registrazione video del processo produttivo;
- lettore RFID per l'identificazione nel sistema tramite carta RFID personale;
- lettore di codici a barre per la scansione delle etichette dei prodotti;
- stampante di etichette per etichettare i prodotti fabbricati;
- sensori digitali che raccolgono dati da vari dispositivi/stazioni.

Il software della postazione di lavoro dell'ingegnere di solito è composto dai seguenti contenitori. Prima, il software che richiede l'installazione **sul computer su cui l'impiegato lavora** durante il montaggio del prodotto:

1. [feecc-workbench-daemon](https://github.com/Multi-Agent-io/feecc-workbench-daemon) — il cuore della piattaforma Feecc che fornisce agli utenti accesso a tutte le funzionalità e configurazioni di Feecc; contiene anche servizi leggeri per la stampa di etichette utilizzando una stampante di etichette e la registrazione video da flussi RTSP;
2. [feecc-workbench-frontend](https://github.com/Multi-Agent-io/feecc-workbench-frontend) — un'interfaccia web per l'interazione dell'impiegato con la piattaforma Feecc;
3. [feecc-hid-reader-daemon](https://github.com/Multi-Agent-io/feecc-hid-reader-daemon) — un demone Python per l'invio di eventi periferici USB;

Secondo, il software che può essere installato **sia sul computer dell'impiegato che su un server nella rete locale**:

1. [feecc-ipfs-gateway](https://github.com/Multi-Agent-io/feecc-ipfs-gateway) — un microservizio per la pubblicazione di file su IPFS, e più specificamente, CID di file su Robonomics Network;

La figura qui sotto mostra l'architettura del posto di lavoro dell'ingegnere Feecc in un ambiente aziendale. IPFS Gateway (così come il nodo IPFS e MongoDB sotto forma di peer cluster) può essere ospitato su ogni computer dell'impiegato, il che aumenterà la decentralizzazione del sistema a discapito delle risorse computazionali.

<LessonImages src="feecc-course/feecc_global_hardware.png" alt="an architecture of Feecc"/>

### Hardware supportato per un posto di lavoro:

#### Scanner RFID

È necessario un scanner RFID USB per autorizzare gli ingegneri sul campo con i loro badge interni. Le informazioni in arrivo vengono elaborate utilizzando il `feecc-hid-reader-daemon`.

#### Scanner di codici a barre

Lo scanner di codici a barre USB è necessario per identificare i prodotti tramite codici a barre, inviare comandi ai servizi e per l'assegnazione corretta dei certificati. Anche le informazioni in arrivo vengono elaborate con il `feecc-hid-reader-daemon`. La lettura in due dimensioni è auspicabile, ma non obbligatoria.

#### Computer dell'impiegato

Un piccolo computer a scheda singola elabora i segnali provenienti dai dispositivi esterni (scanner di codici a barre, scanner RFID), invia richieste per stampare immagini sulla stampante, avviare e interrompere la registrazione video, inviare dati a IPFS Gateway. Esegue i seguenti servizi: `feecc-workbench-frontend`, `feecc-workbench-daemon` con supporto per stampante di etichette e fotocamera, `feecc-hid-reader-daemon`. È richiesta una connessione Internet tramite Wi-Fi o LAN.
    
È opportuno specificare che qualsiasi computer può essere utilizzato al posto di un computer a singolo pagatore con monitor. Deve essere installato nativamente o tramite una macchina virtuale il sistema operativo GNU/LINUX.
    
Specifiche tecniche minime:
    
- CPU: Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) SoC a 64 bit @ 1,8 GHz o simile;
- RAM: 4GB LPDDR4-3200 o simile.

#### Schermo

Il monitor è utilizzato dall'impiegato per inserire e visualizzare informazioni sul passo di produzione attuale. Mostra anche suggerimenti per l'ingegnere sullo stadio attuale. Altri dispositivi di input possono essere utilizzati.

#### Stampante di etichette

La stampante di etichette è utilizzata per stampare codici QR e codici a barre per ulteriore posizionamento delle etichette sul prodotto a scopo di identificazione e verifica. L'interazione con la stampante avviene con l'aiuto del servizio corrispondente di `feecc-workbench-daemon`. Nel nostro caso utilizziamo stampanti XPrinter 236B.

#### Telecamera IP

Telecamera IP per catturare i processi di produzione da includere nel certificato del prodotto. Posizionata sopra l'area di assemblaggio del prodotto. L'interazione con la telecamera avviene utilizzando il servizio corrispondente di `feecc-workbench-daemon`.

Specifiche tecniche richieste: alimentazione PoE, protocollo di trasferimento dati RTSP. Nel nostro caso utilizziamo Hikvision HiWatch DS-i200d.

### Hardware supportato per più postazioni di lavoro:

#### Router o switch

È necessario un router o switch con supporto PoE 802.3af e alimentazione PoE sulle porte di uscita per alimentare le telecamere IP e collegarle al servizio `feecc-workbench-daemon`. Nel nostro caso utilizziamo MikroTik hEX PoE (uno per 3-4 postazioni di lavoro) e alimentatore.

#### Server (opzionale)

Può essere installato anche un server più grande che può eseguire `feecc-ipfs-gateway`. Può essere posizionato al posto di uno dei computer delle postazioni di lavoro degli impiegati. 

Specifiche tecniche minime: 

- CPU: processore Intel Xeon E-2200 o simile;
- RAM: 8GB;
- Archiviazione: HDD da 1TB;
- Interfaccia LAN: 1 Gbit/s.

## Feecc Analytics

Il compito principale di Feecc Analytics è organizzare il processo di tracciabilità dei prodotti finiti e la loro ispezione pre-vendita nel reparto di controllo del prodotto.

Feecc Analytics dipende dai seguenti contenitori:

1. [feecc-analytics-backend](https://github.com/Multi-Agent-io/feecc-analytics-backend) — il software principale per implementare il servizio di analisi;
2. [feecc-analytics-frontend](https://github.com/Multi-Agent-io/feecc-analytics-frontend) — il software frontend per il servizio di analisi;

Di solito viene implementato su un singolo server localmente per motivi di sicurezza dei dati all'interno dell'organizzazione.

L'hardware richiesto per far funzionare Feecc Analytics è un server locale o remoto (macchina virtuale) su cui verrà eseguita l'applicazione web e uno scanner per codici a barre. Ogni dipendente autorizzato può accedere all'applicazione web dal proprio computer con un nome utente e una password.

## Feecc Validator

Il compito principale del Feecc Validator è confrontare i dati provenienti da diversi archivi dati al fine di convalidare l'integrità del certificato digitale del prodotto.

Feecc Validator dipende dai seguenti contenitori:

1. [feecc-validator-backend](https://github.com/Multi-Agent-io/feecc-validator-backend) — un microservizio progettato per gestire la convalida dei certificati e ottenere i dati associati all'unità fornita all'utente solo se ha solo uno dei pezzi di dati;
2. [feecc-validator-frontend](https://github.com/Multi-Agent-io/feecc-validator-frontend) — un'interfaccia web per interagire con il microservizio di convalida.

Come Feecc Analytics, può essere implementato su un singolo server localmente e richiede uno scanner per codici a barre.

<RoboAcademyText fWeight="500">
Nella prossima lezione, esamineremo più da vicino il sistema Feecc attraverso una piccola demo che viene eseguita localmente sul tuo computer.
</RoboAcademyText>