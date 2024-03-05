---
title: Visão Geral
description: Inicie rapidamente sua tese de bacharelado com ferramentas alimentadas por IA
metaOptions: [Aprender, Inicie rapidamente sua tese de bacharelado com ferramentas alimentadas por IA]
defaultName: Quickstart Your Bachelor's Thesis with AI-powered Tools
---

<RoboAcademyText fWeight="500">
Então, o que você temia aconteceu.
</RoboAcademyText>

<LessonVideo :videos="[{src: 'https://crustipfs.info/ipfs/QmW6qohyJvUF2c3EwhVWZXghArAZQ6KkBsbqT41QRgJRAh', type: 'webm'}]" />

Você precisa enviar um trabalho textual volumoso e o prazo está muito próximo. Ou talvez a situação seja diferente: o prazo de entrega pode não ser tão assustador, mas escrever materiais extensos, especialmente com conteúdo formal e técnico, faz você se contorcer e adiar a tarefa por um longo tempo. De uma forma ou de outra, você terá que passar por um processo bastante longo, monótono e muitas vezes muito chato que escurece sua motivação. Talvez você gostaria de dedicar mais tempo a tarefas criativas e de desenvolvimento, mas infelizmente, algumas profissões e atividades são estruturadas dessa maneira.

## Entrando na IA

Felizmente para todos nós, o progresso que tem facilitado nossas tarefas rotineiras ao longo da história chegou à esfera da escrita de textos. Desta vez, é possível graças aos avanços em inteligência artificial, especificamente modelos de linguagem generativos, capazes de entender e resolver solicitações e fornecer respostas mais ou menos significativas em um formato de chat. Na Robonomics, simplesmente não poderíamos ignorar algo que poderia elevar o nível de automação na comunicação e interação entre seres vivos e máquinas (e também facilitar nossas tarefas diárias!).

Os últimos modelos GPT impressionam com suas capacidades, mas surge a questão de como usá-los corretamente e, o mais importante, em que medida podemos confiar neles. Essas habilidades são chamadas de engenharia de prompt, e para esse fim, apresentamos este guia, que o levará a uma compreensão básica das possibilidades da inteligência artificial generativa atual.

Neste guia, tentaremos escrever uma simples tese de bacharelado, com base no ramo do conhecimento de nosso "bacharel" e no material inicial que o bacharel passou. Certamente tentaremos aderir às regras acadêmicas mínimas, mas duas semanas (que é o tempo planejado para este guia) certamente não são suficientes para considerar a tese de bacharelado bem-sucedida (embora a realidade às vezes prove o contrário). 

No entanto, este guia pode ser considerado um bom ponto de partida para entender quais são os processos mais rotineiros e demorados que a IA já pode suavizar. A propósito, você não precisa se limitar a uma tarefa de tese de bacharelado: este guia será útil para qualquer trabalho textual seguindo o padrão IMRaD (Introduçãoduçãoduçãoduçãoduçãoduçãodução, Método, Resultados, Discussão): publicações em revistas e conferências, tese de doutorado, relatórios técnicos, manuais, etc.

<RoboAcademyNote title="DISCLAIMER" type="warning">
  O guia não garante e não tem como objetivo uma entrega bem-sucedida de uma tese de bacharelado com uma nota alta.
</RoboAcademyNote>

## Ferramentas Utilizadas

Entre os serviços de IA que foram utilizados no guia:

**[ChatGPT](https://chat.openai.com/chat)** — um chatbot baseado no modelo de linguagem Generative Pre-trained Transformer (ver. 3.5 e 4) criado pela OpenAI. Ele opera em um formato de chat com o usuário, respondendo às suas solicitações que podem variar de perguntas simples a composição de poesia e depuração de código do usuário. Seu conhecimento é limitado a setembro de 2021, pois não tem acesso à Internet. O uso básico é gratuito, mas requer registro com um número de telefone (não disponível em alguns países). Ele tem uma opção de assinatura ($20 por mês) com recursos mais poderosos e a capacidade de adicionar plugins, como para acesso ao Wolfram ou Slack.

**[Bing Chat](http://www.bing.com)** — um chatbot baseado no GPT-4 integrado ao serviço de busca Bing da Microsoft. Uma conta da Microsoft é necessária para acessar. Essencialmente, ele tem as mesmas capacidades do ChatGPT, mas com acesso à Internet, tornando-o mais poderoso.

**[Auto-GPT](https://news.agpt.co/)** — um software que usa o GPT-4 para criar agentes de IA autônomos que resolvem uma tarefa definida pelo usuário. O agente tem acesso à Internet, memória de longo prazo e a capacidade de salvar informações em arquivos, permitindo que ele execute sequências complexas de ações. Para usá-lo, é necessário ter uma conta na OpenAI, preferencialmente com uma assinatura paga. As instruções de instalação estão [disponíveis aqui](https://docs.agpt.co/setup/).

**[Notion AI](https://www.notion.so/product/ai)** — um assistente de IA integrado ao software de gerenciamento de conhecimento homônimo. Ele tem acesso gratuito limitado, enquanto uma assinatura custa $10 por mês. É conveniente para processar e melhorar textos já preparados, e possui funções pré-instaladas para esse fim.

Além disso, precisaremos dos seguintes serviços:

**[Overleaf](http://www.overleaf.com)** — Editor LaTeX online conveniente para formatação de texto. Ele possui um conjunto de modelos para qualquer tipo de trabalho (de teses e artigos a apresentações). Estaremos usando o [Modelo de Tese do MIT](https://www.overleaf.com/latex/templates/mit-thesis-template/ytphktgwpktc).

**[Google Scholar](http://scholar.google.com)** — um mecanismo de busca para publicações científicas. É usado para verificar fontes sugeridas por serviços de IA.

## Como usar ferramentas de IA

### Chatbots de IA (ChatGPT, Bing)

Os chatbots de IA (ChatGPT, Bing) não exigem uma abordagem particularmente complexa: tudo o que você precisa fazer é formatar a solicitação apropriada e enviá-la para o chatbot (há apenas um limite no número de caracteres por mensagem, mas você pode pedir ao chatbot para esperar até que todo o texto da solicitação seja enviado).

### Notion AI

Para o Notion AI, é suficiente inserir um bloco de texto em qualquer página e chamar o menu de contexto com solicitações ao assistente de IA.

### Auto-GPT

O Auto-GPT requer uma abordagem diferente, pois o usuário precisa especificar antes de começar o seguinte:

- Nome do assistente de IA
- Função do assistente de IA
- Até 5 metas consecutivas a serem concluídas pelo assistente de IA

Depois disso, o Auto-GPT lançará um agente que exibirá para o usuário todos os "pensamentos" e ações realizadas, ou seja:

- `THOUGHTS` — uma ideia geral que o agente deseja implementar na iteração atual
- `REASONING` — uma razão pela qual o agente escolheu essa ideia
- `PLAN` — ações específicas para alcançar a ideia (pesquisando na internet, analisando documentos, escrevendo em um arquivo, etc.)
- `CRITICISM` — condições especiais que o agente impõe às suas ações (por exemplo, "pesquisar apenas referências de alta qualidade de revistas da IEEE").

## Primeiros Passos

<RoboAcademyNote title="WARNING" type="warning">
  As ferramentas de IA ainda estão sendo aprimoradas, então sempre verifique os resultados que você obtém.
</RoboAcademyNote>

### Alimente o serviço com um contexto

Uma das vantagens importantes dos últimos serviços de IA é que eles lembram muito bem o contexto de uma solicitação dentro de uma única sessão. Portanto, a primeira coisa a fazer para iniciar uma tese de bacharelado é criar um contexto (uma "lenda") e alimentá-lo ao serviço.

Como material para o trabalho, o curso ["Casa Inteligente Soberana com Robonomics e Home Assistant"](/learn/smart-home-course/overview) na Robonomics Academy foi utilizado como ponto de partida. Como resultado, o seguinte contexto foi criado:

<RoboAcademyDialog>

I am a student of the Department of IoT Engineering and Web3 Science. 

I am going to get Bachelor of Science in Computer Science and Engineering.

I completed an online course called "Smart Home Sovereign". In this course, I went through all the steps necessary to build my own sovereign smart home, the main advantage of which is the security / privacy of user data.
During the course, I set up an IoT hub on a Raspberry Pi and connected smart devices (such as a temperature/humidity sensor, a door sensor, a smart bulb, a motion sensor, etc.) to it via a Adaptador Zigbee using the MQTT protocol. The IoT hub is powered by Home Assistant software. Next, I connected the hub to a decentralized cloud, based on Polkadot web3 technology. This is necessary to securely transfer device data to the network without the need for a centralized cloud service provider. This allows me to securely manage my home remotely.

Now I want to take this course as a basis and write a bachelor's thesis with your help.

</RoboAcademyDialog>

A reação típica de um chatbot de IA a este contexto seria sugerir esclarecer a solicitação e como o serviço pode ajudar.

### Escolha um tópico dos sugeridos

O próximo passo (típico para uma situação de bacharelado) é escolher um tópico para a tese. Aqui, é suficiente fazer uma solicitação link `Propor N tópicos para minha tese`. ChatGPT e Bing Chat ofereceram o seguinte:

<RoboAcademyDialog>

"Designing a Secure and Private Smart Home System using Web3 Technologies" — This topic could involve examining the steps you took to build your sovereign smart home and exploring the security and privacy benefits of using IoT and Web3 technologies.

"Comparing Centralized and Decentralized Approaches to Smart Home Data Management" — This topic could involve comparing and contrasting the benefits and drawbacks of using centralized cloud vendors versus decentralized cloud technologies like Polkadot for managing smart home data.

"Developing a Smart Contract-based Framework for Managing Smart Home Devices" — This topic could involve exploring the use of smart contracts to manage smart home devices and develop a secure and efficient framework for managing them.

"Investigating the Security and Privacy Risks of Smart Home Systems" — This topic could involve examining the potential risks and vulnerabilities of smart home systems, including issues related to data privacy, cybersecurity, and physical safety.

"Exploring the Role of Blockchain in Smart Home Data Management" — This topic could involve examining how blockchain technology could be used to manage smart home data and ensure the security and privacy of user data.

"Investigating the Future of Smart Home Technologies and their Impact on Society" — This topic could involve examining the potential social and economic impacts of smart home technologies, including issues related to privacy, security, and the digital divide.

</RoboAcademyDialog>

O tópico **"Projetando um Sistema de Casa Inteligente Seguro e Privado usando Tecnologias Web3"** foi escolhido para o guia.

### Plano simples com estrutura IMRaD

Em seguida, em princípio, podemos prosseguir para seções específicas das teses, seguindo a estrutura IMRaD. No entanto, seria bom ter um plano mais detalhado para o trabalho de bacharelado. Isso também pode ser solicitado a um serviço de IA. O ChatGPT sugeriu o seguinte plano, sem condições adicionais:


<RoboAcademyDialog>

<ChatGPT/>

1. Introduction
    1. Background and motivation
    2. Research questions and objectives
    3. Significance of the study
2. Literature Review
    1. Visão Geral of smart home technology and its security and privacy issues
    2. Introduction to web3 technology and its potential benefits for smart homes
    3. Existing research on using web3 technology for smart home security and privacy
3. Methodology
    1. Description of the smart home system design using web3 technology, including hardware and software components
    2. Implementation details and justification for design choices
    3. Evaluation plan for assessing the security and privacy of the system
4. Results and Analysis
    1. Evaluation of the implemented system with respect to security and privacy metrics
    2. Comparison with existing solutions and analysis of strengths and weaknesses
    3. Discussion of limitations and potential areas for improvement
5. Conclusion and Future Work
    1. Summary of the study's contributions and main findings
    2. Implications and significance of the results for the smart home industry and related fields
    3. Recommendations for future research and development
6. Referências

</RoboAcademyDialog>

<RoboAcademyText>
Com essa preparação completa, agora podemos passar para a primeira seção da tese — a Introdução.
</RoboAcademyText>
  

