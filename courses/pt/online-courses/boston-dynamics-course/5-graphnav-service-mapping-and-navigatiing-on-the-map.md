---
title: "Lissão #5, Serviço GraphNav. Mapeamento e navegação no mapa"
description: Na quarta lição você aprenderá como gravar e executar missões autônomas com o serviço GraphNav.
lessonNumber: 5
courseID: 2
metaOptions: [Cursos on-line, Desenvolvimento de software Boston Dynamics Spot]
---


<section class="container__narrow">

## Do que se trata?

Na quarta lição você aprenderá como gravar e executar missões autônomas com o serviço GraphNav.

</section>


<section class="container__narrow">

## O desafio

Nesta lição, você pode resolver o desafio sem escrever seu próprio script Python.

<List type="numbers">
<li>Registrar um mapa evitando obstáculos. Você pode usar a ferramenta de controle remoto WASD. Salvar sua missão em <code>/home/student/result</code>.</li>
<li>Movimentar o spot através de pontos de passagem registrados. Você pode usar a ferramenta de linha de comando do serviço GraphNav.</li>
</List>

</section>

<section class="container__reg">

## Instruções

<List type="numbers">

<li>

O Spot SDK inclui APIs, bibliotecas de cliente e exemplos que dão suporte ao desenvolvimento de comportamentos de navegação autônomos para o robô Spot. Coletivamente, esse serviço é conhecido como GraphNav. Os mapas são gravados e salvos e posteriormente podem ser reproduzidos com qualquer robô da sua frota. Durante o processo de gravação do mapa, você pode atribuir ações e retornos de chamada da API a pontos de referência ao longo da rota do mapa.

Leia o [Resumo Técnico do GraphNav](https://dev.bostondynamics.com/docs/concepts/autonomy/graphnav_tech_summary) para saber como ele funciona. [A inicialização](https://dev.bostondynamics.com/docs/concepts/autonomy/initialization) também é uma parte importante, será útil nesta lição.

Você pode visualizar mapas gravados com [Ver Mapa](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_view_map) de exemplo. Para isso você precisa copiar o mapa para o seu computador:

<lessonCodeWrapper language="python" codeClass="big-code">
scp -r student@strelka.ygg.merklebot.com:&lt;path_to_the_map_on_spot&gt; &lt;path_to_the_map_to_download&gt;
</lessonCodeWrapper>

Você também precisa [instalar pacotes do spot](https://github.com/boston-dynamics/spot-sdk/blob/master/docs/python/quickstart.md#install-spot-python-package).

Estude [gravações e reproduções de exemplos de missões](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_command_line) a fim de utilizá-las para gravar o mapa e reproduzir a missão gravada. Use o exemplo [wasd](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/wasd) para mover o robô enquanto grava o mapa.

</li>

<li>

Conecte-se ao Spot a partir de um terminal ou usando sua função de execução remota do ambiente de desenvolvimento.

<lessonCodeWrapper language="bash">
ssh student@strelka.ygg.merklebot.com
</lessonCodeWrapper>

</li>

<li>

Desenvolva e demonstre sua solução para o desafio.

Nós criamos o [E-Stop endpoint](https://dev.bostondynamics.com/python/examples/estop/readme) para você, portanto, você não deve criá-lo. Para autenticação do Spot, use o nome de usuário e a senha do arquivom <code>/home/student/credentials</code>. O endereço do Spot é <code>192.168.50.3</code>.

Você pode executar a ferramenta de controle remoto a partir do diretório de exemplos.

<lessonCodeWrapper language="bash">
cd ~/spot-sdk/python/examples/wasd
python3 wasd.py --username &lt;SPOT_AUTH_USERNAME&gt; --password &lt;SPOT_AUTH_PASSWORD&gt; &lt;SPOT_ADDRESS&gt;
</lessonCodeWrapper>

A ferramenta de linha de comando GraphNav está localizada em

<lessonCodeWrapper language="bash">
~/spot-sdk/python/examples/graph_nav_command_line
</lessonCodeWrapper>

</li>

</List>
</section>

<section class="container__narrow">

### Você está pronto para praticar?

Quando estiver pronto, você pode comprar uma sessão de prática de 1 hora especificando suas credenciais de acesso (chave SSH) e o horário em que deseja se conectar ao Spot para resolver a tarefa.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Alugue uma vaga" />

</section>