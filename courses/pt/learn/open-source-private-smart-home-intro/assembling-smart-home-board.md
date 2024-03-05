---
title: "Montagem da Placa de Casa Inteligente"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: Você aprenderá como montar a placa de casa inteligente!
metaOptions: [Aprender]
defaultName: Introduction to open source solution for private smart homes
---

<LessonImages imageClasses="mb" src="smart-home-intro/spring-school-2023-smart-stand-intro.gif" />

## Painel de Casa Inteligente 

Este painel destina-se a ser utilizado como um dispositivo de controle central com os interruptores mais utilizados e dados exibidos nele. Também é possível conectar um intercomunicador e usá-lo como um monitor interno. Basicamente, é apenas um tablet executando o sistema operacional Android no nosso caso. Tudo o que você precisa fazer é fornecer energia. Achamos que este painel deve ser instalado onde você colocaria um monitor interno

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcbdAJqbwHAQ3NeyWQUwSoS4drDexa3AEs7HXuM1BrUT1', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-1.png" />


## Interruptor de Luz

Os interruptores de luz inteligentes se parecem mais ou menos com os comuns, exceto que botões de pressão são usados em vez de interruptores. Um botão de pressão volta à sua posição após ser pressionado. Não há diferença na conexão entre um interruptor comum e um inteligente: conecte o fio neutro em N, o fio de energia em L e a linha de iluminação em L1. Após montar o interruptor para emparelhá-lo via ZigBee, pressione o botão por pelo menos 5 segundos.

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/Qmb138DiQWWBgowMj2fC9kmiGYh9WEeytteSkqumWCv2LB', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-2.png" />

No caso do interruptor de dois botões (ou mais), a única diferença é a segunda (terceira, ...) linha de luzes. 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZiStYZG4rmyNPXXmCXsVPm7witPpnNJMBzD8GtxedgPo', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-3.png" />

## Lâmpada Inteligente 

As lâmpadas inteligentes são provavelmente a maneira mais fácil de experimentar algo inteligente, você nem precisa ser eletricista. Elas podem ser controladas remotamente e podem mudar sua luminosidade ou cor. Você pode instalá-las junto com interruptores inteligentes ou separadamente. O uso desses dispositivos pode abrir uma página inteira de automações, dependendo do seu humor ou das condições externas! Novas lâmpadas estão prontas para serem conectadas via ZigBee. Caso não consiga encontrar uma, ligue e desligue 5 vezes


<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbiMHLJqnDpr1Whzvo6Y7zE33cQPuTs7furbt3JW2uiek', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-4.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmTzK4dY168HVgLvVBsRxR4M4vda55XC7pFhpW5kRexujQ', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-5.png" />

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZFpvVUavKc1Za9SeXqikrfySsfFHuVrkdzgbVB8um7T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-6.png" />

## Tomada Inteligente 

Existem vários dispositivos “não inteligentes” que normalmente precisamos ligar e desligar às vezes. Se ligarmos esse dispositivo através da tomada inteligente, podemos ligá-lo/desligá-lo de acordo com nossas necessidades, horários ou condições. Além disso, essas tomadas podem monitorar o consumo de energia para que tenhamos dados de quanto este dispositivo consome. A conexão é bastante fácil, para emparelhar o botão do soquete inteligente por 5 segundos

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRtmKXSv7csHLbKVuZkoA5Eb2zyTkEAbUxLYT6Qt1yxZH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-7.png" />

## Interruptor de Caldeira 

A razão pela qual o interruptor de caldeira existe como um dispositivo dedicado é que ele pode suportar mais carga. Normalmente as caldeiras consomem 3kWh ou até mais, então os interruptores regulares (mesmo os inteligentes) não são adequados nessa situação. O interruptor de caldeira é projetado para funcionar nessas condições. As conexões e o emparelhamento são praticamente os mesmos que para o interruptor de luz

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmNZyRtXXRYCrAQe6s6ZFJLXtUrH7SZHJC1Bt61kTrRX54', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-8.png" />

## Termostato Wifi/Zigbee

Parece um termostato comum, mas vem com a capacidade de ser controlado sem fio. Existem opções: conectar um sistema de aquecimento diretamente ao termostato ou separá-los. No último caso, o termostato nos dirá o modo (aquecimento, resfriamento, ventilador, etc) e a temperatura

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRjxo9EGUvQiMm84xvXCL6LfrQJYza71vmFsa9Zpy7qmz', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-9.png" />

## Interruptor de Cortina

Outro interruptor dedicado, desta vez para cortinas. Do ponto de vista técnico, não é necessário usar apenas este interruptor, poderíamos usar qualquer interruptor de três botões e conectá-lo ao motor da cortina, mas este vem com ícones especiais. Para emparelhar o interruptor, pressione longamente o botão do meio

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmRpEpZbyNkzby8Sk22Ymz59DbAcnty1B1osWc2kZr5FZ7', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-10.png" />

## Controlador de Válvula Inteligente

Escolha um controlador de acordo com as válvulas que você tem. O cenário mais óbvio é combinar este controlador com um sensor de vazamento de água. Para emparelhar o dispositivo, segure o botão por 5 segundos

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmcjZcJ6P8Q5yUfSRx8R2mR4A7r2fi5bLs5uoUr3EAXLZs', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-11.png" />

## Sensor de Vazamento de Água

Um dispositivo bastante simples que envia um sinal quando seus dois contatos estão conectados. A água conduz eletricidade e quando há água sob o sensor, seus contatos são curto-circuitados. O sensor funciona com uma bateria e geralmente dura de 1 a 2 anos. Para emparelhar o sensor via ZigBee, pressione longamente o botão por um tempo 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmbgetJK1E8qQMcnBVREutpy8tKfbesqaxXiebjzpoyrdV', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-12.png" />

## Controlador de IR

Pense nele como o controle remoto da sua TV... mas inteligente! E não se limita a funcionar apenas com TVs. Se o seu ar condicionado tem um controle remoto, ele pode ser substituído por este inteligente. Para emparelhá-lo, pressione o botão de reset na parte de trás do controlador por um tempo. Existem várias bibliotecas com comandos prontos para uso, por exemplo [https://github.com/smartHomeHub/SmartIR](https://github.com/smartHomeHub/SmartIR). Tudo o que você precisa fazer é encontrar o modelo da sua TV ou ar condicionado

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmVjj92fMLbA6QJ5QhnmiqBT1huD5b7xyfi3VadHFDYwtm', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-13.png" />

## Sensor de Porta/Janela

Outro sensor que funciona com uma bateria, mas ajuda na construção de um sistema de segurança simples ou conectando-o a luzes e outros dispositivos. Para emparelhá-lo via ZigBee, coloque uma agulha no buraco e pressione por um tempo

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmZyb66dKEqk9iCVKhaBk5ZKASi7dXdFSg2CBXY1fwuu5J', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-14.png" />

## Sensor de Movimento
O mesmo que o sensor de porta/janela, pode ser usado em vários cenários. Os mais óbvios são controlar as luzes ou detectar movimentos quando você está ausente

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmUA7TLg12pkhkbdGH6fwNDasU1kiyLHBJSutA2YG71Mka', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-15.png" />


## Sensor de Temperatura e Umidade

É bom saber as condições em que você vive, certo? Este sensor fornecerá medições de temperatura e umidade. Então você pode usar esses dados para ligar/desligar seu ar condicionado ou outros sistemas de aquecimento/resfriamento. Para emparelhar o sensor, há um botão na parte de trás 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmayYFowfJVwQBVxPUSvi5inedqKzhyRZXp8fBUUayJnqH', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-16.png" />

## Câmera de Segurança

No final, é bom dar uma olhada no que acontece com sua casa. Uma boa automação seria conectar o sensor de movimento com a câmera para que você tenha um vídeo de 10 segundos quando o movimento for detectado 

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmX8nnDCgTx2kuwfAGv6B4orkEg4w6phtJtxSp44HfdD9T', type: 'webm'}]" cover="smart-home-intro/assembling-smart-home-board-17.png"  />


## Placa Inteligente 
Dê uma olhada nos resultados [https://www.youtube.com/watch?v=B3er7bwtvkw](https://www.youtube.com/watch?v=B3er7bwtvkw)
E brinque com ela você mesmo [https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20](https://twitter.com/vadim_manaenko/status/1653777703718334469?s=20)

