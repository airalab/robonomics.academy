---
title: Conectar manipulador Kuka
description: Conectar Manipulador
metaOptions: [Aprender]
defaultName:  Connect Kuka manipulator
---

Vídeo com um exemplo de trabalho pode ser encontrado aqui:

https://youtu.be/z55HepXbHr8

<br/>

***

<br/>

## Requisitos

<List>

<li class="flex">

ROS melódico, Gazebo (instruções de instalação [aqui](http://wiki.ros.org/melodic/Instalação/Ubuntu))
</li>

<li>Alguns pacotes extras

<LessonCodeWrapper language="bash" codeClass="big-code">
sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller
</LessonCodeWrapper>

</li>

<li> IPFS 0.4.22 

(baixe daqui](https://www.npackd.org/p/ipfs/0.4.22) e instale)

<LessonCodeWrapper language="bash" codeClass="big-code">
tar -xvzf go-ipfs_v0.4.22_linux-386.tar.gz
cd go-ipfs/
sudo bash install.sh
ipfs init
</LessonCodeWrapper>

</li>

<li>pip3

<LessonCodeWrapper language="bash">
sudo apt-get install python3-pip
</LessonCodeWrapper>

</li>

<li>ipfshttpclient

<LessonCodeWrapper language="bash">
pip3 install ipfshttpclient
</LessonCodeWrapper>

</li>

<li>substrate-interface

<LessonCodeWrapper language="bash">
pip3 install substrate-interface
</LessonCodeWrapper>

</li>

<li class="flex">

Nó Robonomics (arquivo binário) (baixe a última versão [aqui](https://github.com/airalab/robonomics/releases))

</li>

<li>Extensão do navegador IPFS (não necessário)</li>

</List>

<br/>

***

<br/>

## Instalação
Instale o manipulador Kuka e os pacotes de controle

<LessonCodeWrapper language="bash" codeClass="big-code">cd catkin_wc/src/
git clone https://github.com/orsalmon/kuka_manipulator_gazebo
git clone https://github.com/LoSk-p/kuka_controller
cd ..
catkin_make</LessonCodeWrapper>

***

<br/>

## Executando o modelo gazebo

<LessonCodeWrapper language="bash" codeClass="big-code">
source ~/catkin_ws/devel/setup.bash
roslaunch manipulator_gazebo manipulator_empty_world.launch
</LessonCodeWrapper>

Em uma nova janela

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun manipulator_gazebo move_arm_server
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/1.png" alt="model"/>

***

<br/>

## Executando robonomics
Vá para a pasta com o arquivo robonomics e crie uma rede robonomics local:

<LessonCodeWrapper language="bash">
./robonomics --dev --tmp
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/robonomics.png" alt="robonomics"/>

Vá para o [portal Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) e mude para o nó local

<LessonImages imageClasses="mb" src="kuka/local.png" alt="local"/>

Em seguida, vá para Contas e crie a conta `KUKA`. Salve a chave mnemônica da conta, você precisará dela mais tarde. 


<LessonImages imageClasses="mb" src="kuka/create_acc.png" alt="acc"/>

Envie algumas unidades para a nova conta de uma das contas padrão.

<LessonImages imageClasses="mb" src="kuka/send_money.png" alt="accs"/>

***
<br/>

## Executando ipfs
Executar ipfs daemon:

<LessonCodeWrapper language="bash">
ipfs daemon
</LessonCodeWrapper>

***

</br>

## Executando pacote de controle
No diretório de configuração no pacote de controle kuka_control, você precisa criar um arquivo de configuração com estas linhas, onde `<sua_mnemônica>` é a semente mnemônica salva:

<LessonCodeWrapper language="bash">
{
    "kuka_mnemonic": "[your_mnemonic]",
    "node": "ws://127.0.0.1:9944"
}
</LessonCodeWrapper>


Agora você pode executar o script de controle:

<LessonCodeWrapper language="bash">
source ~/catkin_ws/devel/setup.bash
rosrun kuka_controller move_arm_client.py
</LessonCodeWrapper>

<LessonImages imageClasses="mb" src="kuka/run.png" alt="control"/>

## Enviando transação
No [portal Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) vá para `Desenvolvedor/Extrínsecos`, mude `extrínseco` para `lançamento`. Escolha sua conta `KUKA` em `robô` e mude `param` para `Sim`. Em seguida, pressione `Enviar Transação`

<LessonImages imageClasses="mb" src="kuka/launch.png" alt="transaction"/>

Na janela com o pacote de controle kuka_control você verá:

<LessonImages imageClasses="mb" src="kuka/res.png" alt="done"/>

Em seguida, vá para `Desenvolvedor/Estado da Cadeia` no portal Robonomics, selecione `datalog` e `datalogItem((AccountId,u64)): RingBufferItem` na consulta e adicione o datalog `KUKA` com o botão '+':

<LessonImages imageClasses="mb" src="kuka/datalog.png" alt="datalog"/>

Agora você pode encontrar a telemetria do robô no IPFS através deste link com seu hash `https://gateway.ipfs.io/ipfs/<hash>`.

## Solução de problemas

Se `catkin_make` não funcionar com a mensagem de que não consegue encontrar MoveArm.h, tente remover as últimas quatro linhas em CMakeLists.txt no pacote kuka_manipulator_gazebo:

<LessonCodeWrapper language="yaml">
include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(move_arm_server src/move_arm_server.cpp)
target_link_libraries(move_arm_server ${catkin_LIBRARIES})
add_dependencies(move_arm_server beginner_tutorials_gencpp)
</LessonCodeWrapper>

Faça `catkin_make` sem essas linhas, depois retorne-as e faça `catkin_make` novamente.