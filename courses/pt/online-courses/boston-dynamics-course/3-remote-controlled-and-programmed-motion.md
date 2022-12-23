---
title: "Lição #3, Movimento programado e controlado remotamente"
description: In the second lesson you will learn how to use Spot Command services and walk with Spot.
lessonNumber: 3
courseID: 2
metaOptions: [Cursos on-line, Desenvolvimento de software Boston Dynamics Spot]
---

<section class="container__reg">

## Do que se trata?

Na segunda lição, você aprenderá como usar os serviços de Comando do Spot e caminhar com o Spot.

</section>


<section class="container__reg">

## O desafio

Você tem uma lista de pontos com suas coordenadas locais no diretório <code>/home/student/lessons</code>.

A lista de movimentos:

<List>
<li>Para girar em torno de si mesmo</li>
<li>Para acenar com a cabeça</li>
<li>Para mudar a postura das pernas do robô</li>
<li>Para ir de lado para o próximo ponto</li>
<li>Deitar-se na posição para trocar de bateria (este comando deve ser executado por último porque corta a energia dos motores).</li>
</List>

<br>

Crie e execute um script Python que implemente o comportamento descrito. Você pode encontrar as coordenadas locais do Spot com (antes de precisar criar <code>state_client</code>, você pode encontrar informações sobre ele em [Entendendo a Programação do Spot](https://dev.bostondynamics.com/docs/python/understanding_spot_programming)):


<lessonCodeWrapper language="python" codeClass="big-code">
from bosdyn.client.frame_helpers import get_vision_tform_body
get_vision_tform_body(state_client.get_robot_state().kinematic_state.transforms_snapshot
</lessonCodeWrapper>

</section>

<section class="container__reg">

## Instruções 

<List type="numbers">

<li>

Você pode controlar o Spot com o <code>Robot Command Service</code>. Primeiro você precisa construir um comando para fornecê-lo ao Serviço de Comando. O SDK Spot tem uma classe <code>RobotCommandBuilder</code> para ele.

Lista completa de métodos e suas descrições você pode encontrar [aqui](https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/bosdyn-client/src/bosdyn/client/robot_command.py#L593). Nesta lição, você pode precisar usar:

\- Comando ficar em pé

<lessonCodeWrapper language="python" codeClass="big-code">
def stand_command(params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY())
</lessonCodeWrapper>

\- Ir ao ponto 

<lessonCodeWrapper language="python" codeClass="big-code">
def synchro_se2_trajectory_point_command(goal_x, goal_y, goal_heading, frame_name, params=None, body_height=0.0, locomotion_hint=spot_command_pb2.HINT_AUTO, build_on_command=None)
</lessonCodeWrapper>

Verificar o uso [aqui]("https://github.com/boston-dynamics/spot-sdk/blob/master/python/examples/frame_trajectory_command/frame_trajectory_command.py).

Atenção! O exemplo considera o movimento do robô em relação à posição atual. Em seu caso, você deve especificar os movimentos relativos ao ponto em que o robô foi ligado. Isso significa que você pode definir valores de <code>goal_x</code> e  <code>goal_y</code> a partir da tarefa.

\- Comando de Velocidade

<lessonCodeWrapper language="python" codeClass="big-code">
def synchro_velocity_command(v_x, v_y, v_rot, params=None, body_height=0.0, locomotion_hint=spot_command_pb2.HINT_AUTO, frame_name=BODY_FRAME_NAME
</lessonCodeWrapper>

\- Comando de Posição

<lessonCodeWrapper language="python" codeClass="big-code">
def stance_command(se2_frame_name, pos_fl_rt_frame, pos_fr_rt_frame, pos_hl_rt_frame, pos_hr_rt_frame, accuracy=0.05, params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY(), build_on_command=None)
</lessonCodeWrapper>

O exemplo de uso está [aqui](https://github.com/boston-dynamics/spot-sdk/blob/91ed30607264e795699995d6d7834ba0c8a94d36/python/examples/stance/stance_in_place.py).


\- Posicionar para trocar a bateria

<code>def battery_change_pose_command(dir_hint=1)</code>

Exemplo de comando de velocidade de construção e funcionamento:

<lessonCodeWrapper language="python" codeClass="big-code">
from bosdyn.client.robot_command import RobotCommandClient, RobotCommandBuilder
import time

command_client=robot.ensure_client(RobotCommandClient.default_service_name)
cmd=RobotCommandBuilder.velocity_command(0.5, 0, 0.5)
command_client.robot_command(cmd, end_time_secs=time.time() + 2)
</lessonCodeWrapper>

</li>

<li>
Conecte-se ao Spot a partir de um terminal ou usando a função de execução remota do ambiente de desenvolvimento.
</li>

<li>

Desenvolva e demonstre sua solução para o desafio.

Nós criamos o [E-Stop endpoint](https://dev.bostondynamics.com/python/examples/estop/readme) para você, portanto, você não deve criá-lo. Para autenticação do Spot, use o nome de usuário e a senha do arquivom <code>/home/student/credentials</code>. O endereço do Spot é <code>192.168.50.3</code>.

</li>

</List>
</section>

<section class="container__reg">

### Você está pronto para praticar?

Quando estiver pronto, você pode comprar uma sessão de prática de 1 hora especificando suas credenciais de acesso (chave SSH) e o horário em que deseja se conectar ao Spot para resolver a tarefa.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Alugue uma vaga" />

</section>