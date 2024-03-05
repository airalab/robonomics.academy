---
title: "Parada de Emergência, Inicialização, Controle de Posição do Corpo"
description: Durante esta lição, você aprenderá como se autorizar como usuário, obter controle de potência do motor e enviar comandos básicos para o Spot.
metaOptions: [Aprenda, Desenvolvimento de Software para Boston Dynamics Spot]
defaultName: Software Developing for Boston Dynamics Spot
---

<RoboAcademyText fWeight="500">
Durante esta lição, você aprenderá como se autorizar como usuário, obter controle de potência do motor e enviar comandos básicos para o Spot.
</RoboAcademyText>

## Teoria

Como todos os robôs sérios, o Boston Dynamics Spot possui um mecanismo de proteção — [serviço E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) (Parada de Emergência) que deve estar sempre ativo durante a operação do Spot para evitar possíveis danos físicos. Ao ligar o E-Stop, todas as juntas são congeladas instantaneamente (isso acontece sem desligar os motores se o robô estiver ligado).

Primeiramente, devemos assumir o controle sobre o robô. Existem duas maneiras de fazer isso - *adquirir* ou *tomar*. *Adquirir* significa pedir controle de forma gentil, se alguém estiver controlando o robô agora, seu pedido será recusado. De outra forma, *tomar* significa assumir o controle à força, não importa se o operador atual existe.

Portanto, para fazer algum movimento, você deve seguir o esquema:

<LessonImages src="boston-dynamics-spot/e_stop_scheme.png" alt="Estados de Execução do Robô" imageClasses="mb"/>

Robot Execution States

Nesta lição, você aprenderá como controlar a rotação do robô alterando seu *yaw*, *roll* e *pitch*. Na imagem abaixo, é mostrado o sistema de coordenadas do quadro do corpo:

<LessonImages src="boston-dynamics-spot/spot_coords.png" alt="Coordenadas do Spot" imageClasses="mb"/>

Spot coordinates

<RoboAcademyText fWeight="300" fSize="90%">
Os ângulos em um código são representados em radianos.
</RoboAcademyText>

Como resultado da lição, você desenhará a primeira letra do seu nome no ar com o rosto do Spot. Vamos começar a configuração!

## Configurar Gitpod

Para esta lição, estaremos usando o Gitpod, um IDE baseado em nuvem que permite praticar sem instalar nenhum software especial em seu computador.

1. Cadastre-se no [Gitpod](https://gitpod.io/).
2. Acesse nosso [ambiente educacional do Spot](https://gitpod.io/#github.com/merklebot/spot-edu-environment) e abra-o em nosso navegador. Você verá a janela com funções típicas de um IDE. 
3. Clique no ícone do Menu, depois vá para Terminal e crie um novo terminal.

<LessonImages src="boston-dynamics-spot/gitpod_terminal.png" alt="terminal" imageClasses="mb"/>
    
    
4. Copie e cole este comando:

<LessonCodeWrapper language="bash" codeClass="big-code">
python3 prepare_yggdrasil.py
sudo ./start_yggdrasil.sh

</LessonCodeWrapper>

e pressione `Enter`.

1. Abra um novo terminal (agora você pode fazer isso pressionando o botão `+`) e teste a conexão com o comando

<LessonCodeWrapper language="bash" codeClass="big-code">
ping6 200:42f6:d055:e74e:ce4a:35aa:953a:70f7

</LessonCodeWrapper>

Você deverá ver algo como isso:

<LessonCodeWrapper language="bash" codeClass="big-code">
gitpod /workspace/spot-edu-environment (main) $ ping6 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09
PING 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09(202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09) 56 data bytes
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=1 ttl=64 time=846 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=2 ttl=64 time=172 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=3 ttl=64 time=172 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=4 ttl=64 time=197 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=5 ttl=64 time=219 ms
64 bytes from 202:9292:712f:a3ef:4a7e:b2b2:b45b:7e09: icmp_seq=6 ttl=64 time=242 ms

</LessonCodeWrapper>

1. Antes do horário agendado, enviaremos a você a chave privada para estabelecer a conexão SSH.
2. Copie sua chave privada para o arquivo `id_ed25519`. Você pode encontrar o arquivo no explorador de barra lateral do *stop-edu-enviroment*.
3. **Adicione uma linha em branco no final do** arquivo `id_ed25519` ***, isso é necessário para que o SSH funcione corretamente.*** Pressione `Ctrl+S` para salvar as alterações.

Se tudo estiver correto, você pode começar a completar a lição editando `lesson1.py`

Para executar o código, use o comando:


<LessonCodeWrapper language="bash">
sudo ./run_code.sh

</LessonCodeWrapper>


<RoboAcademyText fWeight="700" fStyle="normal">
Lembre-se de garantir que ninguém mais esteja executando seu programa no momento.
</RoboAcademyText>


## Agende a sessão de prática

Use o site de agendamento do Spot para escolher o horário para sua sessão de prática:

[meetings.hubspot.com/strelka](https://meetings.hubspot.com/strelka)

## Prática

Agora faremos um script simples para o Spot desenhar na tela usando os movimentos de sua cabeça. 

<LessonCodeWrapper language="python" codeClass="big-code">
# Import Spot Control modules
import bosdyn.client
from bosdyn.client.robot_command import RobotCommandClient, blocking_stand
from bosdyn.client.robot_command import RobotCommandBuilder
from bosdyn.geometry import EulerZXY
import time
# ENTER YOUR AUTH DATA HERE
ROBOT_IP="192.168.50.3"
SPOT_USERNAME="student"
SPOT_PASSWORD=""
# Helpers to control camera drawing (you don't need to modify it)
import requests
VIDEOSERVER_URL="http://luke.merklebot:8000/"
VIDEOSERVER_TOKEN="1234"
def notify_start_line():
  requests.post(VIDEOSERVER_URL + "start_line", json={"token": VIDEOSERVER_TOKEN})
def notify_stop_line():
  requests.post(VIDEOSERVER_URL + "stop_line", json={"token": VIDEOSERVER_TOKEN})
def notify_clear_canvas():
    requests.post(VIDEOSERVER_URL + "clear_canvas", json={"token": VIDEOSERVER_TOKEN})
# Start with registering out SDK
sdk = bosdyn.client.create_standard_sdk('LessonOneClient')
# Create instance of robot and auth with credentials
robot = sdk.create_robot(ROBOT_IP)
robot.authenticate(SPOT_USERNAME, SPOT_PASSWORD)
# Create lease client and take exclusive control over Spot.  
lease_client = robot.ensure_client('lease')
lease = lease_client.take()
lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)
# Try to power on the robot
robot.power_on(timeout_sec=20)
if robot.is_powered_on():
    print("Powered On")
		# If everything went smooth, Spot face lights should turn green
else:
		# In case of some problems, e.g. somebody stole control over robot
    print("Failed")
    exit(0)
# Synchronize Spor inner time with ours - to avoid outdated commands
robot.time_sync.wait_for_sync()
# To execute robot movement, create command client through which orders are sent
command_client = robot.ensure_client(RobotCommandClient.default_service_name)
# Start movement with simple stand up
blocking_stand(command_client, timeout_sec=10)
# Rotate robot body:
#  1. Build command for body rotation. It’s not an easy task to control robot motion with commands on low level. 
#     Bosdyn Client allow as to use a shortcut - RobotCommandBuilder. It contains a number of predefined commands, 
#     you need just to choose one of your liking and insert parameters
footprint_R_body = EulerZXY(yaw=0.1, roll=0.1, pitch=0.1)
cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
#  2. Execute builded command
command_client.robot_command(cmd)
time.sleep(2)
# Return robot state back
command_client.robot_command(RobotCommandBuilder.synchro_stand_command(footprint_R_body=EulerZXY(yaw=0, roll=0, pitch=0)))
time.sleep(2)
# Change robot height
cmd = RobotCommandBuilder.synchro_stand_command(body_height=0.1)
command_client.robot_command(cmd)
# Now we are ready to draw letter. 
def draw_letter(command_client):
		# Choose points to draw (see the coords explanation bellow)
    points_xy_draw = (
        (125, 125),
        (375, 875),
        (500, 500),
        (250, 500),
        (500, 500),
        (625, 125),
    )
    for x, y in points_xy_draw:
        convert = lambda x: (x / 1000 - 0.5) * -1
        x, y = map(convert, (x, y))
        footprint_R_body = EulerZXY(
            yaw=x, 
            roll=0.0, 
            pitch=y,
        )
        cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)
        command_client.robot_command(cmd)
        time.sleep(1)
notify_clear_canvas()
notify_start_line()
draw_letter(command_client)
notify_stop_line()
# Turn off the robot gracefully
robot.power_off(cut_immediately=False)

</LessonCodeWrapper>

<RoboAcademyText fWeight="300" fSize="90%">
Se precisarmos mover a cabeça do Spot para algum ponto na câmera, devemos fazer alguns cálculos grandes com muitos parâmetros não lineares, o que não é uma tarefa simples. Mas poderíamos dizer que, localmente, os ângulos de yaw e pitch poderiam ser usados aproximadamente como coordenadas cartesianas com algum coeficiente em uma imagem.
</RoboAcademyText>


<LessonImages src="boston-dynamics-spot/cartesian.jpeg" alt="spot" imageClasses="mb"/>

Agora você pode tentar executar o script e ver o resultado. Não se esqueça de salvar seu código com Ctrl+S:

<LessonCodeWrapper language="bash">
sudo ./run_code.sh
</LessonCodeWrapper>


### O vídeo do Spot pode ser encontrado aqui:
[https://codepen.io/smehnov/pen/BaVNrPM](https://codepen.io/smehnov/pen/BaVNrPM)


## Desafio
Crie um script em Python que controle a posição do corpo do robô com uma sequência de movimentos:

1. Levantar
2. Traçar suas iniciais com o rosto (uma letra, pelo menos 3 pontos)
3. Sentar

## Resultados

Agora, você sabe como:

- trabalhar com o SDK do Spot
- construir um comando básico
- rotacionar o corpo do robô
- conectar-se ao Spot

E até desenhou uma letra. Parabéns!


<RoboAcademyText fWeight="500">

Coletamos um [rosbag](http://wiki.ros.org/rosbag) com os dados das juntas do Spot, para que você possa visualizá-los (por exemplo, com [foxglove](https://www.notion.so/Lesson-1-Emergency-Stop-Initialization-Body-Position-Control-4ccf6316330d4680ab1bb571b2b788d5)). O certificado será enviado para seu e-mail em breve.

</RoboAcademyText> 


## [Agende sua primeira lição](https://meetings.hubspot.com/strelka)