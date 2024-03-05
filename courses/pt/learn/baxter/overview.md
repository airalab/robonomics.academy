---
title: Controlar o robô Baxter
lastUpdate: Thu May 04 2023 12:52:52 GMT+0400 (Samara Standard Time)
description: Controlar o robô Baxter
metaOptions: [Aprender]
defaultName: Control Baxter robot
---
Exemplo de como funciona:

https://www.youtube.com/watch?v=JivTDhDJLHo

<br/>

## Requisitos:

<List>

<li class="flex">

ROS Melodic + Gazebo (manual de instalação aqui)  

</li>

<li>pacotes extras:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effout-controllers ros-melodic-joint-state-controller python-catkin-tools python3-dev python3-catkin-pkg-modules python3-numpy python3-yaml ros-melodic-cv-bridge
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS até 0.6.0 (baixe daqui e instale)

</li>

<li> pacotes python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Baixe o nó Robonomics mais recente aqui (última versão testada v1.1)

</li>

<li>Extensão do navegador IPFS (não necessário)</li>

</List>

<br/>

## 0. instale a extensão CV Bridge para python3

<List>

<li> Crie um espaço de trabalho catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Instrua o catkin a definir variáveis cmake. Use sua versão atual do `python`. Para mim, é `python3.6`

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Clone src cv_bridge:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Encontre a versão do cv_bridge em seu repositório:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Verifique a versão correta no repositório git. No nosso caso é 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Construir:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Estender o ambiente com novo pacote:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Teste:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

## 1. Baixe pacotes de simulação e controle
Baixe os pacotes:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
git checkout old_version
pip3 install -r requirements.txt
cd ../..
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

Não se esqueça de adicionar o comando source:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Iniciar simulação
Vamos iniciar o mundo do gazebo e colocar nosso baxter nele:

<LessonCodeWrapper language="bash">
roslaunch gazebo_ros empty_world.launch
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/empty_world.jpg" alt="empty_world"/>

Abra mais uma janela no terminal:

<LessonCodeWrapper language="bash" codeClass="big-code">
rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter
</LessonCodeWrapper>

Você pode colocar alguns modelos na frente do nosso baxter. Será mais interessante.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Gerenciar contas no DAPP

Como estamos testando, vamos criar uma rede robonomics local com o arquivo binário robonomics. Vá para a pasta com o arquivo robonomics e execute:

<LessonCodeWrapper language="bash" codeClass="big-code">
./robonomics --dev --tmp --rpc-cors all
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Vá para o portal Robonomics Parachain e mude para o nó local

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Vá para Contas e crie contas __Baxter__ e __Empregador__ (__Robô__ não é necessário)

__Importante!__ Copie o **Mnemônico** e o **endereço** de cada conta (para copiar o endereço, clique no ícone da conta). **Mnemônico** é a chave privada da conta.
Transfira algum dinheiro (unidades) para essas contas:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Adicione o **Mnemônico** e o **endereço** do Baxter ao `config.yaml` em `robot_ws/src/Baxter_simulation_controller/config/`

## 4. Iniciar simulação

Em uma nova janela, execute:


<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Abra um terminal separado e inicie o *pacote de controle*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Agora você pode enviar uma transação para fazer o Baxter começar a se mover e coletar dados. Para fazer isso, você pode usar o mesmo portal Robonomics Parachain. Vá para **Desenvolvedor->Extrínsecos** e selecione a conta do empregador do Baxter, extrínseco `launch`, conta alvo da conta do Baxter e `yes` como parâmetro. Envie o extrínseco.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

O robô deve começar a se mover. Ele não aceitará comandos de outras contas nem comandos com parâmetro `no`.
Você deve ver o seguinte:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

quando o trabalho estiver concluído, vá para o Portal Robonomics para `Desenvolvedor > Estado da cadeia`. Escolha `datalog.datalogItem(AccountId,u64)` em **consulta de estado**. Se você quiser mostrar todos os datalogs, desligue a `opção de inclusão` adicione visualizar a mensagem de datalog do Baxter usando o botão "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Agora o hash IPFS do telemetria e fotos está salvo no blockchain. Para ver os dados, basta copiar o hash e inseri-lo na barra de pesquisa com URL: gateway.ipfs.io/ipfs/<br coloque seu hash aqui >

<LessonImages imageClasses="mb" src="baxter/ipfs.jpg" alt="ipfs"/>

Clique em __Ver no Gateway__ e é isso!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>

<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


## Simulação do Baxter v2.0

Exemplo de como funciona:

https://youtu.be/2Dvuv0ZE2Bw

<br/>


## Requisitos:

<List>

<li class="flex">


ROS Melodic + Gazebo (manual de instalação aqui)  

</li>

<li>pacotes extras:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-qt-build ros-melodic-driver-common ros-melodic-gazebo-ros-control ros-melodic-gazebo-ros-pkgs ros-melodic-ros-control ros-melodic-control-toolbox ros-melodic-realtime-tools ros-melodic-ros-controllers ros-melodic-xacro python-wstool ros-melodic-tf-conversions ros-melodic-kdl-parser python-wstool python-catkin-tools qt4-default
</LessonCodeWrapper>

</li>

<li class="flex">

IPFS até 0.6.0 (baixe daqui e instale)

</li>

<li> pacotes python:

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get -y install python3-pip
pip3 install --upgrade pip
</LessonCodeWrapper>

</li>

<li class="flex">

Nó Robonomics (arquivo binário) (baixe a última versão aqui)

</li>

<li class="flex">

Crie contas __Baxter__ e __Empregador__ no **Portal Robonomics** (você pode encontrar o tutorial "Criar uma Conta no Portal Robonomics" aqui).
</li>

<li>Extensão do navegador IPFS (não necessário)</li>

</List>

<br/>

## 0. instale a extensão CV Bridge para python3

<List>

<li> Crie um espaço de trabalho catkin

<LessonCodeWrapper language="bash" codeClass="big-code">
mkdir -p catkin_workspace/src
cd catkin_workspace
catkin init
</LessonCodeWrapper>

</li>

<li> Instrua o catkin a definir variáveis cmake. Use sua versão atual do `python`. Para mim, é `python3.6`

<LessonCodeWrapper language="bash" codeClass="big-code">
catkin config -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -DPYTHON_LIBRARY=/usr/lib/x86_64-linux-gnu/libpython3.6m.so
catkin config --install
</LessonCodeWrapper>

</li>

<li> Clone src cv_bridge:

<LessonCodeWrapper language="bash" codeClass="big-code">
git clone https://github.com/ros-perception/vision_opencv.git src/vision_opencv
</LessonCodeWrapper>

</li>

<li> Encontre a versão do cv_bridge em seu repositório:

<LessonCodeWrapper language="bash" codeClass="big-code">
apt-cache show ros-melodic-cv-bridge | grep Version
    Version: 1.12.8-0xenial-20180416-143935-0800
</LessonCodeWrapper>

</li>

<li> Verifique a versão correta no repositório git. No nosso caso é 1.12.8:

<LessonCodeWrapper language="bash">
cd src/vision_opencv/
git checkout 1.12.8
cd ../../
</LessonCodeWrapper>

</li>

<li> Construir:

<LessonCodeWrapper language="bash">
catkin build cv_bridge
</LessonCodeWrapper>

</li>

<li> Estender o ambiente com novo pacote:

<LessonCodeWrapper language="bash">
source install/setup.bash --extend
</LessonCodeWrapper>

</li>

<li> Teste:

<LessonCodeWrapper language="bash" codeClass="big-code">
$ python3

Python 3.6.9 (default, Jan 26 2021, 15:33:00) 
[GCC 8.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from cv_bridge.boost.cv_bridge_boost import getCvType
>>>
</LessonCodeWrapper>

</li>

</List>

<br/>

## 1. Baixe pacotes de simulação e controle
Precisaremos criar 2 espaços de trabalho - um para os principais pacotes do Baxter e outro para o programa de controle principal.
Primeiro espaço de trabalho. É o programa de controle principal. Ele será executado sob python3.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robonomics_ws/src
cd robonomics_ws/src/
git clone https://github.com/nakata5321/Baxter_simulation_controller.git
cd Baxter_simulation_controller
pip3 install -r requirements.txt
</LessonCodeWrapper>

Segundo espaço de trabalho. Todos os pacotes do Baxter estarão lá. A simulação é muito antiga, então só pode ser executada sob python2.

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~
mkdir -p robot_ws/src
cd robot_ws/src/
wstool init .
wstool merge https://raw.githubusercontent.com/RethinkRobotics/baxter_simulator/master/baxter_simulator.rosinstall
wstool update
</LessonCodeWrapper>

Esses pacotes foram criados para o ROS indigo. Temos que alterar alguns arquivos para executá-los no ROS melodic.
Vamos usar arquivos de **patch**.

<LessonCodeWrapper language="bash" codeClass="big-code">
patch ./baxter_simulator/baxter_sim_io/include/baxter_sim_io/qnode.hpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/qnode_patch
patch ./baxter_simulator/baxter_sim_kinematics/src/arm_kinematics.cpp ~/robonomics_ws/src/Baxter_simulation_controller/patch/arm_patch
patch ./baxter_interface/src/baxter_interface/robot_enable.py ~/robonomics_ws/src/Baxter_simulation_controller/patch/interface_patch
</LessonCodeWrapper>

E vamos construir todos os nossos pacotes:  
Primeiro construa os pacotes do Baxter

<LessonCodeWrapper language="bash">
cd ../
catkin build
</LessonCodeWrapper>

Em seguida, retorne ao primeiro espaço de trabalho e construa também:

<LessonCodeWrapper language="bash" codeClass="big-code">
cd ~/Baxter_simulation_controller/
catkin build -DPYTHON_EXECUTABLE=/usr/bin/python3
</LessonCodeWrapper>

Não se esqueça de adicionar o comando source:

<LessonCodeWrapper language="bash" codeClass="big-code">
echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc
echo "source /home/$USER/robonomics_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
</LessonCodeWrapper>

## 2. Iniciar simulação
### Vamos iniciar nossa simulação:
Primeiro vá para `robot_ws` e copie e edite baxter.sh

<LessonCodeWrapper language="bash">
cd ~/robot_ws/
cp src/baxter/baxter.sh .
</LessonCodeWrapper>

Encontre seu endereço IP local com o comando:

<LessonCodeWrapper language="bash">
ip a
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/ip_a.png" alt="ip_a"/>

Edite os seguintes valores em `baxter.sh` :

<LessonCodeWrapper language="bash">
nano baxter.sh
</LessonCodeWrapper>

- seu_ip - coloque seu endereço IP local. Veja `ip a`
- versão_ros - por exemplo "melodic"

<LessonImages imageClasses="mb" src="baxter/baxter_sh.jpg" alt="baxtersh"/>

Execute o script shell do baxter com sim especificado:

<LessonCodeWrapper language="bash" codeClass="big-code">
./baxter.sh sim
roslaunch baxter_gazebo baxter_world.launch
</LessonCodeWrapper>

Você pode colocar alguns modelos na frente do nosso baxter. Será mais interessante.

<LessonImages imageClasses="mb" src="baxter/baxter_simulation.jpg" alt="baxter"/>

## 3. Gerenciar contas no DAPP

Como estamos testando, vamos criar uma rede robonomics local com o arquivo binário robonomics. Vá para a pasta com o arquivo robonomics e execute:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/robonomics.jpg" alt="robonomics"/>

Vá para o portal Robonomics Parachain e mude para o nó local

<LessonImages imageClasses="mb" src="baxter/local_node.jpg" alt="local_node"/>

Vá para Contas e crie contas __Baxter__ e __Empregador__.

Você pode encontrar o manual "Criar uma Conta no Portal Robonomics" aqui

__Importante!__ Copie o **Mnemônico** e o **endereço** de cada conta (para copiar o endereço, clique no ícone da conta). **Mnemônico** é a chave privada da conta.

Transfira algum dinheiro (unidades) para essas contas:

<LessonImages imageClasses="mb" src="baxter/create_account.jpg" alt="create_account"/>

<LessonImages imageClasses="mb" src="baxter/create_account2.jpg" alt="create_account2"/>

<LessonImages imageClasses="mb" src="baxter/accounts.jpg" alt="accounts"/>

Adicione o **mnemônico** e **endereço** do Baxter ao `config.yaml` em `robonomics_ws/src/Baxter_simulation_controller/config/`

## 4. Iniciar simulação

Em uma nova janela, execute:

<LessonCodeWrapper language="bash">
ifps init #you only need to do this once
ipfs daemon
</LessonCodeWrapper>

Abra um terminal separado e inicie o *pacote de controle*:

<LessonCodeWrapper language="bash">
rosrun robot_controller robot_control.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="baxter/waiting.jpg" alt="waiting"/>

Agora você pode enviar uma transação para acionar o Baxter a começar a se mover e coletar dados. Para fazer isso, você pode usar o mesmo portal [Portal da Parachain Robonomics][db5]. Vá para **Desenvolvedor->Extrínsecos** e selecione a conta do empregador do Baxter, extrínseco `launch`, conta do Baxter como conta de destino e `yes` como parâmetro. Envie o extrínseco.


<LessonImages imageClasses="mb" src="baxter/rob_message.jpg" alt="rob_message"/>

O robô deve começar a se mover. Ele não aceitará comandos de outras contas nem comandos com parâmetro `no`.
Você deve ver o seguinte:

<LessonImages imageClasses="mb" src="baxter/working.jpg" alt="working"/>

Quando o trabalho estiver concluído, vá para o Portal Robonomics para `Desenvolvedor > Estado da cadeia`. Escolha `datalog.datalogItem(AccountId,u64)` em **consulta de estado**. Se você deseja mostrar todos os datalogs, então desative a opção `incluir` adicione visualizar a mensagem de datalog do Baxter usando o botão "+".

<LessonImages imageClasses="mb" src="baxter/datalog.jpg" alt="datalog"/>

Agora o hash IPFS da telemetria e fotos está salvo no blockchain. Para ver os dados, basta copiar o hash e inseri-lo na barra de pesquisa com URL:  
#### gateway.ipfs.io/ipfs/< coloque seu hash aqui>

É isso!

<LessonImages imageClasses="mb" src="baxter/result1.jpg" alt="result1"/>
<LessonImages imageClasses="mb" src="baxter/result2.jpg" alt="result2"/>


[db2]: <http://wiki.ros.org/melodic/Instalação>
[db3]: <https://dist.ipfs.io/go-ipfs/v0.6.0/go-ipfs_v0.6.0_linux-386.tar.gz>
[db4]: <https://github.com/airalab/robonomics/releases>
[db5]: <https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/>
[db8]: <https://wiki.robonomics.network/docs/create-account-in-dapp/>