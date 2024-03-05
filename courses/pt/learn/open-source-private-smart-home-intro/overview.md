---
title: "Introduçãoduçãoduçãoduçãoduçãoduçãodução à solução de código aberto para casas inteligentes privadas"
lastUpdate: Tue May 09 2023 13:56:49 GMT+0400 (Samara Standard Time)
description: Você aprenderá como integrar soluções de código aberto com dispositivos inteligentes baratos para tornar sua casa inteligente orientada para a privacidade e não dependente de nuvens em seu funcionamento.
metaOptions: [Aprender]
defaultName: Introduction to open source solution for private smart homes
---

<LessonImages src="smart-home-intro/open-source-private-smart-home-intro.png" imageClasses="mb full" />

<RoboAcademyText>
  Olá a todos! Hoje quero trazer vocês para uma conversa sobre uma casa inteligente, quando há necessidade dela, do que ela é composta e do que pode oferecer.
</RoboAcademyText>

## Casas inteligentes: Resolvendo problemas de aquecimento e água quente

Em 2022, mudei para o Chipre e tive que me acostumar rapidamente com as condições de vida em um lugar novo. Depois da Rússia, a diferença na atitude em relação ao uso de recursos energéticos é especialmente sentida. Por exemplo, no Chipre não há aquecimento central. E até dezembro, você nem pensava nisso. E então descobri que a temperatura do meu quarto é a mesma que a temperatura fora da janela. Para ser honesto, é desconfortável dormir a +10 °C ... brrr!

## Aumente suas economias com monitoramento de casa inteligente

Além disso, também não há fornecimento central de água quente. Existem caldeiras instaladas no telhado e aquecidas pelo sol. Mas no inverno o sol não é suficiente para aquecer o tanque de água. O apartamento tem um interruptor que inicia o elemento de aquecimento dentro do tanque. A primeira coisa que é inconveniente é que você precisa ligá-lo com antecedência. Meia hora a uma hora antes de tomar banho. À noite, esse cenário ainda é aceitável, mas de manhã você nunca terá água quente. Em segundo lugar, você pode facilmente esquecer de desligá-lo. Como resultado - um elemento de aquecimento queimado e uma conta de eletricidade.

A propósito, a eletricidade é muito cara aqui, e você precisa pagar a cada 2 meses. É impossível, no momento, determinar o principal consumidor. Seria bom ter estatísticas sobre os principais consumidores de eletricidade, como ar condicionado, aquecimento por piso radiante, iluminação, etc. Tendo dados em tempo real sobre o consumo de energia em mãos, você pode pelo menos começar a analisar no que está sendo gasto.

## Componentes essenciais de uma casa inteligente: interruptores, sensores e medidores inteligentes

Acontece que os primeiros candidatos para dispositivos inteligentes são vários interruptores e monitoramento de consumo de energia. Em seguida, você provavelmente pensará em controlar o ar condicionado e o aquecimento por piso radiante de acordo com um cronograma ou de acordo com leituras de temperatura. Isso significa que precisaremos de sensores de temperatura e umidade, relés para controlar o aquecimento por piso radiante e controles remotos IR para os condicionadores de ar. Toda casa também tem janelas, e as janelas geralmente têm cortinas - seria legal quando for dormir para que as cortinas caiam automaticamente. Assim, interruptores, sensores e medidores inteligentes formam a base de uma casa inteligente. E então você pode sonhar com base em necessidades específicas.

## Escolhendo a solução certa para casa inteligente: KNX vs. Sonoff vs. Xiaomi

Quais soluções de casa inteligente e automação estão no mercado? Podemos pensar no KNX, que hoje é uma das soluções mais comuns para uso em sistemas de automação de médio e grande porte para casas, escritórios e instalações comerciais. Está no mercado há mais de vinte anos e agora é suportado por muitos dos principais fabricantes de equipamentos elétricos. No entanto, para montar uma solução KNX, é necessário fazer muito trabalho de engenharia. A lógica principal é montada, como regra, em um quadro de distribuição separado. Se não foi previsto originalmente, a instalação em um apartamento existente pode ser difícil ou impossível, sem fazer alterações adequadas no layout. Além disso, as soluções baseadas em KNX são bastante caras.

Outra abordagem pode ser comprar dispositivos de fabricantes chineses como Sonoff ou Xiaomi. Sua principal vantagem é o preço, facilidade de instalação e configuração. Qualquer pessoa poderá instalar a maioria dos sensores e dispositivos em suas casas. Em alguns lugares, você pode precisar de um eletricista, por exemplo, para instalar interruptores inteligentes, mas eles ocuparão o lugar dos antigos e você não precisará fazer alterações no layout do apartamento. O fabricante oferece um único aplicativo para gerenciar dispositivos. No entanto, você sempre deve lembrar que seus dados são enviados para algum servidor, e toda comunicação com dispositivos é impossível sem uma conexão com a Internet.


## Casa inteligente faça você mesmo: Construindo um servidor doméstico para controle total

E outra abordagem para construir uma casa inteligente é baseada na segunda, ou seja, usando dispositivos disponíveis dos mesmos fabricantes chineses, mas adicionalmente instalar um servidor doméstico em seu apartamento/casa para se livrar das nuvens. Este é o caminho que seguimos em nossa solução de casa inteligente. Nas próximas partes, falarei detalhadamente sobre a montagem de nosso estande de demonstração e suas capacidades.

<RoboAcademyText fWeight="500">
  Isso é tudo por enquanto! Na próxima lição, mergulharemos mais fundo no lado prático da construção de uma casa inteligente e mostraremos como montar um Painel de Casa Inteligente. Fiquem ligados e preparem-se para dar o primeiro passo em direção à criação de uma casa totalmente funcional e automatizada.
</RoboAcademyText>