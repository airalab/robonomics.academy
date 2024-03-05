---
title: Conectar Mars Curiosity Rover
lastUpdate: Thu May 18 2023 10:41:00 GMT+0400 (Samara Standard Time)
description: Conectar Mars Curiosity rover sob controle da parachain Robonomics.
metaOptions: [Aprender]
defaultName: Connect Mars Curiosity Rover
---

**Vamos ver como o controle da Parachain Robonomics permite fazer o Mars Curiosity rover se mover. Requisitos:**

<List>

<li class="flex">

ROS Melodic + Gazebo + RViz (manual de instalação [aqui](http://wiki.ros.org/melodic/Instalação))

</li>


<li>pacotes extras:

<LessonCodeWrapper language="bash" codeClass="big-code">
  sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS até [0.6.0](https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz)

</li>

<li class="flex">

[Extensão complementar IPFS](https://github.com/ipfs/ipfs-companion)

</li>

<li class="flex">

Nó Robonomics (arquivo binário) (baixe a última versão [aqui](https://github.com/airalab/robonomics/releases). Este tutorial foi testado com sucesso na versão 1.1)

</li>

</List>

<br/>

Aqui está o vídeo mostrando o lançamento bem-sucedido:

https://www.youtube.com/watch?v=6BSOyRbmac8


<br/>

### 1. Configurar uma simulação

Baixar o pacote do rover Curiosity:
<LessonCodeWrapper language="bash">
  mkdir -p robonomics_ws/src
  cd robonomics_ws/src
  git clone https://bitbucket.org/theconstructcore/curiosity_mars_rover/src/master/
  cd ..
  catkin build
</LessonCodeWrapper>

Precisamos ajustar as condições iniciais para fazer nosso rover aparecer suavemente:

<List>

<li>Ir para

`src/master/curiosity_mars_rover_description/worlds` e altere a linha 14 do arquivo` mars_curiosity.world` to 
`<pose>0 0 8 0 0 0</pose>`

</li>

<li>Ir para

`src/master/curiosity_mars_rover_description/launch` e alterar a linha 4 do arquivo `mars_curiosity_world.launch` para 
`<arg name="paused" default="false"/>`

Não se esqueça de adicionar o comando source ao `~/.bashrc`
`source /home/$USER/robonomics_ws/devel/setup.bash`

</li>

<li> Reiniciar console e lançar a simulação:

<LessonCodeWrapper language="bash" codeClass="long-code">
  roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/rover.jpg" alt="Mars rover"/>

</li>

</List>

Nota: se a imagem estiver escura, por exemplo, sombreada, altere `Camera` para `Orthorgraphic` na barra de ferramentas do Gazebo.
A simulação pode ser fechada por um tempo.

------------

<br/>

### 2. Baixar pacote do controlador Robonomics
Para baixar um pacote de controlador para Rover digite no terminal:

<LessonCodeWrapper language="bash" codeClass="long-code">
cd ~/robonomics_ws/src
git clone https://github.com/PaTara43/robonomics_sample_controller
cd robonomics_sample_controller
pip3 install -r requirements.txt
pip3 install rospkg
cd ..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3 # The controller supports python3
</LessonCodeWrapper>


------------

<br/>

### 3. Gerenciar contas no DAPP
Como estamos testando, vamos criar uma rede local de robonomics com o arquivo binário robonomics:

<LessonCodeWrapper language="bash">
  ./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/robonomics.jpg" alt="Executarning node"/>


Ir para [Portal Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) e mudar para nó local 


<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/local_node.jpg" alt="Local node"/>


Ir para Contas e criar contas **CURIOSITY** e **EMPLOYER**.

**Importante**! Copie o endereço de cada conta (para copiar o endereço, clique no ícone da conta) e a **seed mnemônica** da conta da Curiosity (obtida ao criar a conta)
Transferir algum dinheiro (unidades) para essas contas. Você pode ler mais sobre contas em Robonomics [aqui](https://wiki.robonomics.network/docs/en/create-account-in-dapp/)

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/account_creation.jpg" alt="Account creation"/>


Adicione esses endereços, seed e endereço do nó (padrão `ws://127.0.0.1:9944` para nó de desenvolvedor) em `config.config` em `robonomics_ws/src/robonomics_sample_controller/src`. Sem aspas.

------------

<br/>

### 4. Iniciar Robonomics

Antes de prosseguir, certifique-se de ter instalado a [Extensão Companheira IPFS](https://github.com/ipfs/ipfs-companion).

Em um terminal separado, inicie o IPFS:

<LessonCodeWrapper language="bash" codeClass="long-code">
ifps init #você só precisa fazer isso uma vez por instalação do IPFS
ipfs daemon
</LessonCodeWrapper>

Em outro terminal separado, inicie a simulação da Curiosity se não estiver ao vivo:
<LessonCodeWrapper language="bash" codeClass="long-code">
roslaunch curiosity_mars_rover_description main_real_mars.launch
</LessonCodeWrapper>

Aguarde até que fique parado

Em outro terminal, inicie o controlador:

<LessonCodeWrapper language="bash" codeClass="long-code">
rosrun robonomics_sample_controller sample_controller.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/controller.jpg" alt="Controller"/>

Agora você pode enviar uma transação acionando o Rover para começar a se mover e coletar dados. Para fazer isso, você pode usar o mesmo [Portal Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/).
Vá para `Desenvolvedor->Extrínsecos` e selecione a conta do empregador da Curiosity, extrínseco `launch`, conta alvo da Curiosity e `yes` como parâmetro.
Envie o extrínseco.

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/extrinsic.jpg" alt="Extrinsic"/>

O robô deve começar a se mover. Ele não aceitará comandos de outras contas nem comandos com parâmetro `no`. O rover se moverá e coletará dados por cerca de um minuto.
Mais tarde, quando o trabalho estiver concluído:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/job_done.jpg" alt="Job done"/>


No portal Robonomics vá para `Desenvolvedor -> Estado da cadeia` e obtenha um datalog `CURIOSITY` usando o botão “+” com `datalog -> RingBufferItem` selecionado como consulta: 

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/datalog.jpg" alt="Datalog"/>


Agora o hash IPFS da telemetria está salvo no blockchain. Para ver os dados, basta copiar o hash e encontrá-lo em um gateway:

<LessonImages imageClasses="mb" src="connect-mars-curiosity-rover/data_in_ipfs.jpg" alt="Data in IPFS"/>


Essa telemetria é mantida em um armazenamento descentralizado, e seu hash é armazenado em um blockchain!
