---
title: 'Lissão #6, Serviço de Robôs. Calibração da câmera e procedimento de "Verificação do Spot"'
description: "Nesta lição, você aprenderá o que deve fazer se você acabou de adquirir o robô: a primeira execução e a configuração da rede. Você também aprenderá como executar o processo de calibração que deve ser executado mensalmente."
lessonNumber: 6
courseID: 2
metaOptions: [Cursos on-line, Desenvolvimento de software Boston Dynamics Spot]
---


<section class="container__narrow">

## Do que se trata?

Nesta lição, você aprenderá o que deve fazer se você acabou de adquirir o robô: a primeira execução e a configuração da rede. Você também aprenderá como executar o processo de calibração que deve ser executado mensalmente.

</section>


<section class="container__narrow">

## O desafio

Criar e executar o script Python implementa os comportamentos descritos.

<List type="numbers">
<li>Execute a "spot check" e salve o resultado da calibração em um diretório <code>/home/student/result</code> como um arquivo de texto.</li>
<li>Execute o procedimento de calibração da câmera.</li>
</List>

</section>

<section class="container__reg">

## Instruções

<List type="numbers">

<li>

Primeiro execute

Veja a página de [Procedimentos de Inicialização](https://support.bostondynamics.com/s/article/Startup-Procedure) na Documentação.

</li>

<li>

Networking

O Spot oferece uma variedade de opções de rede para oferecer suporte a um conjunto diversificado de aplicativos e ambientes. As opções incluem:

\- Spot como um peer conectado. Conexão física ao Spot.

\- Spot como um ponto de acesso WiFi.

\- Spot como um cliente WiFi. O Spot pode ingressar em uma rede Wi-Fi existente e os aplicativos também podem ingressar na mesma rede Wi-Fi para conversar com o Spot.

Para obter mais informações, consulte a [página Networking](https://dev.bostondynamics.com/docs/concepts/networking).

O Spot Core é conectado ao Spot por meio da porta de carga útil. O Spot Core pode ser conectado à Internet com dongle Wi-Fi. As instruções de configuração podem ser encontradas na página [Spot Core Cockpit](https://dev.bostondynamics.com/docs/payload/spot_core_cockpit.html?highlight=spot%20check).

</li>

<li>

Calibragem

Spot Check é uma calibragem completa do robô. Você também pode executar a calibragem da câmera

\- [run_spot_check](https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L164) executa a rotina completa de verificação pontual. O robô deve estar sentado em um chão plano quando esta rotina for iniciada. Essa rotina calibra as articulações do robô e verifica a integridade da câmera.

\- [run_camera_calibration](https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L204). Execute a rotina completa de calibragem da câmera para o robô. Esta função bloqueia até que a calibragem tenha sido concluída. Esta função deve ser chamada assim que o robô for ligado e ficar de costas para o suporte de calibragem a uma distância de 1 metro. O processo de calibragem leva cerca de 20 minutos.

</li>

<li>

Conecte-se ao Spot a partir de um terminal ou usando a função de execução remota de seu ambiente de desenvolvimento.

<lessonCodeWrapper language="bash">
ssh student@strelka.ygg.merklebot.com
</lessonCodeWrapper>

</li>

<li>

Desenvolva e demonstre sua solução para o desafio.

Nós criamos o [E-Stop endpoint](https://dev.bostondynamics.com/python/examples/estop/readme) para você, portanto, você não deve criá-lo. Para autenticação do Spot, use o nome de usuário e a senha do arquivom <code>/home/student/credentials</code>. O endereço do Spot é <code>192.168.50.3</code>.

</li>

</List>
</section>

<section class="container__narrow">

### Você está pronto para praticar?

Quando estiver pronto, você pode comprar uma sessão de prática de 1 hora especificando suas credenciais de acesso (chave SSH) e o horário em que deseja se conectar ao Spot para resolver a tarefa.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Alugue uma vaga" />

</section>