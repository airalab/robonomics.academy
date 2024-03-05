---
title: "Lição nº 3, Configuração e Conexão de Sensores"
description: 'CONFIGURAÇÃO E CONEXÃO DE SENSORES'
lessonNumber: 3
metaOptions: [Aprenda, Conectividade de Sensores e Rede Descentralizada de Sensores]
defaultName: Sensors Connectivity & Decentralized Sensors Network
---

Nossos sensores utilizam o firmware Robonomics, uma versão estendida do firmware sensor.community, com alguns sensores adicionados e o esquema de envio de dados alterado. O código-fonte pode ser encontrado [no link.](https://github.com/LoSk-p/sensors-software/tree/master/airrohr-firmware)

Se você possui uma placa Robonomics pronta para uso, você pode ir para a seção "Conectar".

## Requisitos

**Para Linux:**

<List type="numbers">

<li>

Adicione um usuário ao grupo `dialout` (para Ubuntu) para obter acesso à porta USB:

<LessonCodeWrapper language="bash" noLines>sudo usermod -a -G dialout $USER</LessonCodeWrapper>

</li>

<li>Reinicie o computador.</li>

<li>

Baixe o executável Robonomics `airrohr-flasher` de [releases](https://github.com/airalab/sensors-connectivity/releases).

</li>

<li>

Altere as permissões do arquivo e execute-o:

<LessonCodeWrapper language="bash">chmod +x airrohr-flasher-linux
./airrohr-flasher-linux</LessonCodeWrapper>


</li>

</List>


**Para Windows:**

<List type="numbers">

<li>

Instale os drivers para USB2serial (no Windows 10 deve iniciar automaticamente) - Drivers para NodeMCU v3 (CH340): [link](http://www.wch.cn/downloads/file/5.html), [link alternativo](https://d.inf.re/luftdaten/CH341SER.ZIP). 

</li>

<li>

Baixe o executável `airrohr-flasher` do Robonomics em [releases](https://github.com/airalab/sensors-connectivity/releases) e execute-o.

</li>

</List>

**Para MacOS:**

<List type="numbers">

<li>

Instale os drivers para USB2serial — Drivers para NodeMCU v3 (CH340): [link](http://www.wch.cn/downloads/file/178.html), [link alternativo](https://d.inf.re/luftdaten/CH341SER_MAC.ZIP).

</li>

<li>

Baixe o executável `airrohr-flasher` do Robonomics em [releases](https://github.com/airalab/sensors-connectivity/releases) e execute-o.

</li>

</List>


## Configuração

<List type="numbers">

<li>

Conecte o sensor ao PC e execute o programa `airrohr-flasher`. Após abrir o programa, você verá o seguinte (dependendo do seu sistema operacional):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-0.png" alt="tutorial image"/>

</li>

<li>

`Campo` da placa deve preencher automaticamente; se não, escolha a porta necessária na lista suspensa.

<RoboAcademyNote type="okay" title="INFO">
Se o <code>airrohr-flasher</code> não encontrar sua placa, certifique-se de ter feito a parte de <b>Requisitos</b> corretamente.
</RoboAcademyNote>

</li>

<li>

Selecione o firmware com o idioma preferido e clique em `Upload`. O upload do firmware levará algum tempo. Se posteriormente decidir mudar o idioma ou fazer uma instalação limpa (para redefinir a configuração), vá para a página `Erase flash` e pressione o botão para apagar a memória flash do sensor.

</li>

<li>

Após baixar o firmware, reinicie o ESP (basta desconectar e reconectar o USB).

</li>

<li>

Escolha os sensores no menu de seleção. Escolha SDS011 e quaisquer sensores adicionais. Pressione `Salvar configuração`.

</li>

<li>

Após baixar a configuração, reinicie o ESP (basta desconectar e reconectar o USB).

</li>

</List>

## Conectar

<List type="numbers">

<li>

Após a reinicialização, a placa criará uma rede Wi-Fi chamada `RobonomicsSensor-xxxxxxxxx`. Conecte-se a ele a partir do seu telefone ou computador: você verá a janela de autorização (caso contrário, abra o navegador e vá para `192.168.4.1`).

</li>

<li>

Selecione sua rede Wi-Fi na lista (ou escreva você mesmo se não estiver na lista) e preencha o campo de senha.

</li>

<li>

Escreva as coordenadas do local onde o sensor será instalado.

<RoboAcademyNote type="warning" title="WARNING">
As coordenadas do sensor serão então exibidas em um mapa de acesso público. Se você não deseja mostrar suas informações privadas, escreva coordenadas próximas, mas não exatas.
</RoboAcademyNote>

<LessonImages src="sensors-connectivity-course/lesson-3-1.png" alt="tutorial image"/>

</li>

<li>

Clique em `Salvar configuração e reiniciar`. A placa será reinicializada e conectada à rede Wi-Fi especificada.

</li>

<li>

Abra o [mapa de sensores Robonomics](https://sensors.robonomics.network/#/) e encontre o local onde você instalou o sensor. Em alguns minutos você poderá ver seu sensor com dados no mapa.


<LessonImages src="sensors-connectivity-course/lesson-3-2.jpg" alt="tutorial image"/>

</li>

</List>

Isso é tudo com a instalação padrão. Para uma configuração mais avançada (enviando dados para seu próprio servidor), leia a próxima seção.

## Adicional Configuração

Antes da configuração, você precisa encontrar o endereço do sensor em sua rede Wi-Fi. Para fazer isso, você pode usar `airrohr-flasher` (seu computador deve estar na mesma rede que o sensor). Inicie-o e vá para a aba `Discovery`, em seguida, pressione `Refresh`, espere um momento e o endereço do seu sensor aparecerá.

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-3.png" alt="tutorial image"/>

Clique duas vezes neste endereço (ou digite-o em seu navegador), você chegará ao menu do sensor:

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-4.png" alt="tutorial image"/>

Agora você pode começar a personalizar sua configuração.


## API Personalizada

Você também pode configurar o envio de dados para seu próprio servidor. Para fazer isso, na aba `APIs`, clique em `Enviar para API própria` e especifique o endereço do servidor e a porta (`65` para conectividade de sensores):

<LessonImages imageClasses="mb" src="sensors-connectivity-course/lesson-3-6.png" alt="tutorial image"/>

Clique em `Salvar e reiniciar` para salvar as configurações.