---
title: "Lição #2, Parada de emergência, inicialização, controle da posição do corpo"
description: Durante esta lição, você aprenderá como autorizar-se como usuário, obter o controle de potência do motor e enviar comandos básicos para o Spot.
lessonNumber: 2
courseID: 2
metaOptions: [Cursos on-line, Desenvolvimento de software Boston Dynamics Spot]
---

<section class="container__narrow">

## Do que se trata?

Durante esta lição, você aprenderá como autorizar-se como usuário, obter o controle de potência do motor e enviar comandos básicos para o Spot.

Assista ao nosso vídeo introdutório, caso ainda não tenha visto: [https://youtu.be/qdk7BjWJpr](https://youtu.be/qdk7BjWJpr)

</section>


<section class="container__narrow">

## O desafio

Criar um script Python para controlar a posição do corpo do robô. Execute seu script no Spot para permitir que ele execute uma sequência de movimentos:

<List type="numbers">
<li>Ficar de pé</li>
<li>Trace suas iniciais com o rosto (uma letra, pelo menos 3 pontos)</li>
<li>Sente-se</li>
</List>

</section>

<section class="container__reg">

## Instruções

<List type="numbers">

<li>

Leia a página [Entendendo a Programação do Spot](https://dev.bostondynamics.com/docs/python/understanding_spot_programming) na documentação Spot SDK. Você precisa entender o que é E-Stop e como fazer a inicialização em seu script Python a fim de deixar o robô executar comandos.

Você pode encontrar informações mais detalhadas para esta lição em [Serviços Básicos](https://dev.bostondynamics.com/docs/concepts/base_services), [Geometria e Estruturas](https://dev.bostondynamics.com/docs/concepts/geometry_and_frames), [Serviços de Robôs](https://dev.bostondynamics.com/docs/concepts/robot_services) e seção [E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) da documentação Spot SDK.

</li>

<li>

Conectar ao SpotCORE pelo SSH a partir do terminal

<lessonCodeWrapper language="bash">ssh student@strelka.ygg.merklebot.com</lessonCodeWrapper>

</li>

<li>

Criar um script pode autenticar no Spot, adquirir controle (alugar) e ligar o robô.

Criamos o [endpoint E-Stop](https://dev.bostondynamics.com/python/examples/estop/readme) para você, portanto, você não deve criá-lo. Para autenticação do Spot use o nome de usuário e senha do arquivo <code>/home/student/credentials</code>. O endereço do Spot é <code>192.168.50.3</code>.

Ao [Adquirir controle da seção do Spot ( Aluguel)](https://dev.bostondynamics.com/docs/python/understanding_spot_programming#taking-ownership-of-spot-leases) usar

<lessonCodeWrapper language="python">lease = lease_client.acquire()</lessonCodeWrapper>

antes de

<lessonCodeWrapper language="python" codeClass="big-code">lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)</lessonCodeWrapper>

</li>

<li>

Teste seu script com os comandos, ficar de pé (stand-up) e sente-se (sit-down). Assegure-se de que o robô se move como esperado.

Certifique-se de executar o script pelo Python3 com o comando <code>pythoon3</code>. O comando <code>python</code> refere-se a um interpretador Python 2 obsoleto.

</li>

<li>

Adicione o controle de posição do corpo ao seu script. Experimente com <code>bosdyn.geometry.EulerZXY</code> construtor de argumentos de comando de robô para identificar quais parâmetros de yaw, roll e pitch você precisa definir para resolver o desafio. A gama de Pitch, Yaw and Roll é de -0,5 a 0,5.

</li>

</List>
</section>

<section class="container__narrow">

### Você está pronto para praticar?

Quando estiver pronto, você pode comprar uma sessão de prática de 1 hora especificando suas credenciais de acesso (chave SSH) e o horário em que deseja se conectar ao Spot para resolver a tarefa.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Alugue uma vaga" />

</section>