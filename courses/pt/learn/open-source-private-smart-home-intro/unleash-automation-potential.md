---
title: "Liberte o Potencial da Automação"
lastUpdate: Mon August 28 2023 12:46:49 GMT+0400 (Samara Standard Time)
description: Você aprenderá sobre automações básicas que tornam a vida cotidiana mais fácil no exemplo de um suporte de casa inteligente.
metaOptions: [Aprender]
defaultName: Introduction to open source solution for private smart homes
---

<RoboAcademyText>Da última vez, passamos pelo processo de instalação e conexão de vários dispositivos inteligentes no suporte de demonstração. Em um apartamento ou casa real, é claro, haverá suas próprias características. Ao trabalhar com eletricidade, você deve seguir precauções de segurança e não trabalhar se não souber o que está fazendo.

Agora vamos passar para a coisa mais interessante, pela qual foi necessário mudar os interruptores e instalar sensores nos ambientes.</RoboAcademyText>

**A automação residencial envolve o uso de tecnologia e dispositivos inteligentes para controlar e automatizar várias funções na casa. Aqui estão alguns exemplos de automação residencial:**

* *Iluminação Inteligente*: Você pode controlar e automatizar a iluminação usando lâmpadas ou interruptores inteligentes. Isso permite ligar e desligar a luz, ajustar o brilho, mudar as cores.
* *Controle de Clima*: Termostatos inteligentes permitem controlar a temperatura em sua casa remotamente. Com eles, você pode ajustar as configurações de acordo com sua programação e otimizar seu consumo de energia.
* *Sistemas de Segurança*: A automação residencial pode incluir recursos de segurança, como fechaduras inteligentes, interfones de vídeo, câmeras de vigilância ou até mesmo simples sensores de movimento. Esses dispositivos permitem controlar o acesso à sua casa de qualquer lugar do mundo.
* *Controle de eletrodomésticos*: Com tomadas inteligentes, você pode automatizar o funcionamento de eletrodomésticos e dispositivos eletrônicos. Por exemplo, você pode programar a cafeteira para ligar e começar a fazer café antes de acordar.
* *Sistemas de Entretenimento*: sistemas de áudio e vídeo se encaixarão perfeitamente na automação residencial. Você pode, por exemplo, configurar a reprodução de música de acordo com um evento ou programação.

**Agora vamos discutir alguns dos prós e contras da automação residencial em geral.**

Prós:

* *Conveniência*: A automação residencial é principalmente projetada para economizar você de atividades rotineiras que são realizadas diariamente.
* *Eficiência Energética*: Tudo começa levando em consideração os principais consumidores de eletricidade. Tendo estatísticas em mãos, você pode configurar um cronograma ou ser mais consciente sobre o uso de certos dispositivos.
* *Segurança Melhorada*: Você pode monitorar sua casa e ser notificado em caso de qualquer atividade suspeita.
Personalização e Integração: Os sistemas de automação residencial são frequentemente flexíveis e podem ser personalizados para atender às suas necessidades específicas. Eles também podem se integrar a outros dispositivos inteligentes, fornecendo controle e automação perfeitos de vários sistemas.

Contras:

* *Custo*: O custo inicial de aquisição e configuração de dispositivos pode ser relativamente alto, especialmente para sistemas complexos.
* *Complexidade*: Instalar e configurar sistemas de automação residencial pode ser uma tarefa complexa que requer conhecimento técnico e habilidades de resolução de problemas.
* *Riscos de privacidade e segurança*: Dispositivos conectados podem ser vulneráveis a hacking ou acesso não autorizado, o que pode comprometer sua privacidade e segurança. É importante seguir as melhores práticas de segurança e manter seus dispositivos atualizados.

No geral, a automação residencial oferece muitos benefícios em termos de conveniência, eficiência energética e segurança. No entanto, vale a pena pensar antecipadamente sobre a base técnica dos dispositivos, em qual protocolo eles funcionarão e como organizar sua conexão entre si.

Voltando ao nosso estande de demonstração de casa inteligente, vamos ver algumas automações básicas em ação.

## Controle de Cortina

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRMibK3Huppxfhvjk3Hs5NBn4ndFoxHHA2mJn22URnwf4', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />

Conectando o mecanismo de abertura/fechamento da cortina ao servidor doméstico, você pode controlar as cortinas a partir do aplicativo. Mas o mais importante é que agora você pode programar um horário ou vincular o despertador com a abertura das cortinas. Acordar com luz natural é considerado auspicioso!

## Sensor de Porta e Luz

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmR1WHAAdmPxSP2neFV8VhqFShbeVaYUsNLQ7n9Exh3JUz', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />

Uma das automações mais simples é ligar a luz por meio de um sensor de abertura de porta. Pode ser útil na despensa, onde você não precisa estar constantemente. Então, quando você abrir a porta, a luz se acenderá automaticamente, e quando terminar seus afazeres e fechar a porta, a luz não ficará acesa à toa.

## Sensor de Vazamento e Válvula Inteligente

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmVEdwbE1wagebNybfneGKWpAPp3fyXBNnFRt2vduyMSCP', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />

Saber que você tem um vazamento é metade da batalha. Prevenido é prevenido, como dizem. Mas se você vincular o sensor e a válvula, todas as medidas necessárias para evitar a inundação serão tomadas antes mesmo de você ter tempo de se assustar.

## Sensor de movimento e Luz

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmWMAC3dUvuUg6Zxszoe3aJDatPCaw48QVSyujWyrhKJih', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />

Talvez o uso mais óbvio de um sensor de movimento seja ligar as luzes. Tais automações podem ser configuradas no banheiro ou no corredor

## Estatísticas do Stand de Demonstração

Durante o trabalho do stand, conseguimos coletar as seguintes estatísticas

|Statistics|
|--------------------------|--------|
| Total transactions       | 6557   |
| Users                    | 16     |
| Logins                   | 50     |
| Pinned files in IPFS     | 58     |
| Data in IPFS             | 980 Mb |

[Por padrão](https://www.home-assistant.io/integrations/recorder/), o Home Assistant mantém um histórico de apenas 10 dias. A integração Robonomics, se a assinatura for [ativada](https://dapp.robonomics.network/#/rws-activate), faz upload do histórico a cada 10 minutos. Assim, você não precisa se preocupar com backups adicionais do seu histórico. Por exemplo, abaixo estão vários gráficos de histórico de sensores

<LessonImages figure figureCaption="Image 1. Turn on the boiler button" src="smart-home-intro/unleash-boiler.png" alt="Image 1. Turn on the boiler button"/>

<LessonImages figure figureCaption="Image 2. Temperature sensor" src="smart-home-intro/unleash-temperature.png" alt="Image 2. Temperature sensor"/>

<LessonImages figure figureCaption="Image 3. Humidity sensor" src="smart-home-intro/unleash-humidity.png" alt="Image 3. Humidity sensor"/>

Concluindo uma série de artigos sobre o stand e automação, gostaria de dizer que as possibilidades do sistema proposto não se limitam a isso. Os cenários de automação específicos dependerão do caso específico e do inquilino, pois tudo é feito para a conveniência da vida doméstica.
