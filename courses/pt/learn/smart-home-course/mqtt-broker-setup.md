---
title: "Lição #3, Configuração do Broker MQTT e Inicialização do Hass"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: curso de assistente doméstico
lessonNumber: 3
metaOptions: [Aprenda, Casa Inteligente Soberana com Robonomics e Assistente Doméstico]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Introdução

Após terminar a configuração do Raspberry Pi, o próximo passo é instalar o Broker MQTT no Raspberry Pi. Como mencionado anteriormente, o Broker é responsável pelo roteamento de mensagens entre diferentes clientes MQTT. Você irá instalar e configurar o Eclipse Mosquitto, um Broker MQTT de código aberto.

<LessonImages src="smart-house-course/lesson-3-1.jpg" alt="scheme" imageClasses="mb"/>

Além disso, você irá completar a configuração do Home Assistant e adicionar integração MQTT a ele.

## Instruções

<List type="numbers">

<li>


Instalação do Broker Mosquitto

<List>
<li>

Instale [Mosquitto Broker](https://mosquitto.org/) no seu Raspberry Pi:


<LessonCodeWrapper language="bash" noLines>
sudo apt install mosquitto mosquitto-clients -y
</LessonCodeWrapper>
</li>

<li>

Digite SEU_NOME_DE_USUÁRIO (use o que quiser) e senha (você será solicitado a inserir a senha após o comando):

<LessonCodeWrapper language="bash" noLines codeClass="big-code">
sudo mosquitto_passwd -c /etc/mosquitto/passwd YOUR_USERNAME
</LessonCodeWrapper>

</li>

<li>

Edite o arquivo de configuração:

<LessonCodeWrapper language="bash" noLines>
sudo nano /etc/mosquitto/conf.d/local.conf
</LessonCodeWrapper>

Adicione o seguinte ao arquivo:

<LessonCodeWrapper language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
</LessonCodeWrapper>
</li>

<li>

Salve o arquivo e reinicie o serviço:

<LessonCodeWrapper language="bash" noLines>
sudo systemctl restart mosquitto
</LessonCodeWrapper>
</li>

<li>

Por fim, verifique o status do broker:

<LessonCodeWrapper language="bash" noLines>
systemctl status mosquitto
</LessonCodeWrapper>

Você deverá ver algo como isso:

<LessonImages src="smart-house-course/lesson-3-2.jpg" alt="code"/>
</li>
</List>
</li>

<li>

Configurando o Home Assistant e MQTT

<List>

<li>

Abra o navegador da web e vá para <code>http://%ENDEREÇO_IP_DO_RASPBERRY%:8123</code>. (com o mesmo endereço IP que você encontrou na lição anterior). Esteja ciente de que o endereço do Raspberry Pi pode mudar com o tempo devido às configurações do roteador. 

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYd1Mh2VHVyF3WgvFsN3NFkozXscnCVmEV2YG86UKtK3C', type:'mp4'}]" />

</li>

<li>

Na primeira página, insira qualquer nome, nome de usuário, senha que desejar e clique em "<code>CRIAR CONTA</code>"
</li>

<li>

Em seguida, insira um nome para sua casa e defina sua localização e sistema de unidades. Clique em "<code>DETECT</code>" para encontrar sua localização e definir seu fuso horário e sistema de unidades com base nessa localização. Se preferir não enviar sua localização, você pode definir esses valores manualmente.

</li>

<li>

Na próxima tela, o Home Assistant mostrará quaisquer dispositivos que ele descobriu em sua rede. Não se preocupe se você ver menos itens do que o mostrado abaixo; você sempre pode adicionar dispositivos manualmente mais tarde. Por enquanto, apenas clique em <code>FINISH</code> e você estará na tela principal do Home Assistant.

</li>

<li>

Agora precisamos instalar uma integração MQTT. Vá para <code>Settings</code> -> <code>Devices & Services.</code>

<LessonVideo controls :videos="[{src: 'https://crustipfs.info/ipfs/QmYm9qNfpGdePRHRvmahY2DgHXRfAWNN6CasEY4tFRBARr', type:'mp4'}]" />

</li>

<li>

Pressione o botão <code>ADD INTEGRATION</code> no canto inferior direito. Na janela aberta, encontre <code>MQTT</code>.

</li>

<li>

Selecione MQTT e configure o endereço do seu broker — <code>localhost</code> porta — <code>1883</code> e seu nome de usuário e senha (o mesmo que você criou anteriormente para o Mosquitto Broker) e então pressione <code>SUBMIT</code>.
</li>

</List>
</li>
</List>