---
title: "Lição nº 4b, Configuração do Gateway: Robonomics SLS Gateway"
lastUpdate: Thu May 18 2023 16:16:20 GMT+0400 (Samara Standard Time)
description: curso de assistente doméstico
lessonNumber: 5
metaOptions: [Aprenda, Casa Inteligente Soberana com Robonomics e Assistente Doméstico]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Do que se trata

Este é um cenário de configuração para conectar dispositivos usando o Robonomics SLS Gateway. Robonomics se inspirou no design do gateway desenvolvido pelo projeto [Smart Logic System](https://github.com/slsys/Gateway) e modificou parte da circuitaria. Você pode encomendar um gateway da Robonomics ou construir o seu próprio usando nossos [projetos](https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01).

Você irá instalar o software necessário para o gateway, configurá-lo e conectá-lo ao Home Assistant.

<robo-academy-note type="note" title="Attention">
  SmartRF Flash Programmer, um programa para atualização de firmware, requer sistema operacional Windows.
</robo-academy-note>

## Instruções

<List type="numbers">

<li>

Instalando Firmware do Microcontrolador Zigbee

<List>

<li>

Primeiro você precisa atualizar o microcontrolador CC2652P do gateway. Defina os interruptores <code>ON</code> <code>2</code>, <code>4</code> e <code>7</code> na parte inferior do SLS Gateway, os outros devem estar <code>OFF</code>.

<LessonImages src="smart-house-course/lesson-4-b-1.png" alt="controllers"/>
</li>

<li>

Conecte o gateway ao seu computador com um cabo USB-A<>USB-C.

<robo-academy-note type="warning" title="WARNING">
  Por favor, use apenas cabos do tipo USB-A<>USB-C, porque no momento o gateway não suporta o tipo USB-C<>USB-C.
</robo-academy-note>

</li>

<li>

O firmware CC2652 requer o SmartRF Flash Programmer v2 da Texas Instrument. Baixe-o do [site oficial](https://www.ti.com/tool/download/FLASH-PROGRAMMER-2) e depois instale-o.

</li>

<li>

Baixe o firmware para o microcontrolador CC2652P do [repositório do GitHub](https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator).

</li>

<li>

Execute o programa. Na janela <code>Dispositivo Conectado</code> selecione o microcontrolador CC2652P, defina o caminho para o firmware, defina as flags para <code>Apagar, Programar, Verificar</code> como na imagem e pressione <code>Iniciar</code>.

<LessonImages src="smart-house-course/lesson-4-b-2.png" alt="tutorial" imageClasses="mb"/>

Após uma atualização bem-sucedida, você verá uma mensagem <code>Sucesso!</code>. Agora você pode desconectar o cabo USB.

</li>
</List>
</li>

<li>

Instalando Firmware do Microcontrolador

<List>

<li>

Agora você precisa configurar o gateway para a instalação de software. Aconselhamos que você atualize o firmware conectando o gateway diretamente ao seu Raspberry Pi e inserindo todos os comandos a seguir nesse dispositivo. 

</li>

<li>

Defina os interruptores <code>ON</code> <code>1</code> e <code>3</code> na parte inferior do gateway SLS, os outros devem estar <code>OFF</code>. Em seguida, conecte o gateway ao seu Raspberry Pi através da porta USB tipo-C.

<LessonImages src="smart-house-course/lesson-4-b-3.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Conecte-se ao Raspberry Pi via SSH.

<LessonCodeWrapper language="bash" noLines>
ssh ubuntu@192.168.xxx.xxx
</LessonCodeWrapper>

</li>

<li>

Clone o repositório com o firmware:

<LessonCodeWrapper language="bash" codeClass="big-code" noLines>
git clone https://github.com/airalab/robonomics-hass-utils.git
</LessonCodeWrapper>
</li>

<li>

Para atualizar o gateway SLS, você precisa executar os scripts <code>Limpar</code> e <code>Flash_16mb</code>:

<LessonCodeWrapper language="bash" noLines>
cd robonomics-hass-utils/esp_firmware/linux
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
sudo chmod +x Flash_16mb.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Clear.sh
</LessonCodeWrapper>

<LessonCodeWrapper language="bash" noLines>
./Flash_16mb.sh
</LessonCodeWrapper>
</li>

<li class="no-bullet">

\- **Resolução de Problemas**

Se estiver enfrentando problemas ao atualizar o firmware do gateway, você precisa tomar medidas adicionais:

<List>

<li>

Certifique-se de ter o módulo pySerial instalado:

<LessonCodeWrapper language="bash" noLines>
pip install pyserial
</LessonCodeWrapper>

</li>

<li>

Dê ao seu usuário direitos de acesso à porta USB:

<LessonCodeWrapper language="bash" noLines>
sudo usermod -a -G dialout $USER
</LessonCodeWrapper>

</li>

<li>

Em alguns casos, é necessário alterar a configuração de largura de banda no script para atualizar o firmware. Abra o script <code>Flash_16mb.sh</code> com o editor nano e altere o parâmetro de baud de <code>921600</code> para um valor menor (por exemplo, <code>115200</code>).
</li>
</List>
</li>

<li class="no-bullet">

\- **Extra**

Também fornecemos opções para atualizar o firmware usando outros sistemas operacionais (macOS e Windows). Você pode encontrar scripts correspondentes em uma pasta, cujo nome depende do seu SO.

</li>
</List>
</li>

<li>

Configurando o Gateway

<List>

<li>

Defina os interruptores na parte de trás do gateway para a nova posição. Os interruptores <code>5</code> (RX Zigbee para ESP) e <code>6</code> (TX Zigbee para ESP) devem estar na posição <code>ON</code>, os outros devem estar <code>OFF</code>.


<LessonImages src="smart-house-course/lesson-4-b-4.gif" alt="tutorial" imageClasses="mb"/>

</li>

<li>

Conecte o cabo de alimentação tipo-C. A luz indicadora no centro deve ficar verde.

</li>

<li>

Na primeira inicialização, o gateway começará a compartilhar Wi-Fi com o SSID <code>zgw****</code>. Conecte-se a esta rede. Tenha em mente que o sinal pode ser bastante fraco, então é melhor manter o gateway SLS mais perto do seu computador.

Se a conexão for bem-sucedida, a interface web será aberta (ou você pode encontrá-la no endereço 192.168.1.1).

</li>

<li>

Vá para a página Wi-Fi e insira suas credenciais Wi-Fi inserindo o usuário / senha e pressionando o botão <code>Salvar</code>. Depois disso, pressione o botão <code>Reiniciar</code>. O gateway reiniciará e se conectará à sua rede WI-Fi.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSht6roENzrV6oqsQ1a5gp6GVCz54EDZdPAP8XVh9SCwH', type:'mp4'}]" />

</li>

<li>

Encontre o IP local do gateway SLS para acessar a interface web. Para isso, você pode usar o [Fing](https://www.fing.com/products) app ou <code>arp -a</code> no seu terminal ou Nmap: 

<LessonCodeWrapper language="bash" noLines>
sudo nmap -sP 192.168.xxx.0/24
</LessonCodeWrapper>

onde <code class="bold">xxx</code> é o seu endereço IP na rede local. O nome do gateway deve ser parecido com isso: <code>zgw****</code>. Abra a interface web do gateway colando o IP do gateway em um navegador.
</li>

<li>

Ir para <code>Configurações</code> -> <code>Hardware</code> e certifique-se de que as configurações se parecem com a imagem. Corrija as configurações, se necessário, e clique no botão <code>Salvar</code>:

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmeSksMxU9xkvvK7f81WDAYULiMFokK7P7KDVYEjv2MHjn', type:'mp4'}]" />

A tabela com os valores necessários:


| Field        	         | **Value**          |                                                                     	
|------------------------|--------------------|
| Zigbee module          | TI                 |
| Zigbee UART RX         | 22                 |
| Zigbee UART TX         | 23                 |
| Zigbee RST Pin         | 18                 |
| Zigbee BSL Pin         | 19                 |
| Button Mode            | 33 (pullUP - true) |
| Number addressable leds| 0                  |
| Led Red (or addr)      | 21                 |
| Led Green              | 5                  |
| Led Blue               | 27                 |
| I2C SDA                | 255                |
| I2C SCL                | 255                |

</li>

<li>

Em seguida, reinicie o gateway. Escolha <code>Ações</code> -> <code>Reiniciar sistema</code> no canto superior direito. Certifique-se de que o gateway funcione corretamente com o microcontrolador CC2652P na janela de informações Zigbee. O DeviceState deve ser <code>OK</code>.

</li>

<li>

Reinicie o gateway. Escolha <code>Ações</code> -> <code>Reiniciar</code> sistema no canto superior direito.

</li>

<li>

Configure a adição automática de dispositivos ao Home Assistant. Vá para <code>Zigbee</code> -> <code>Configuração</code> e escolha <code>Descoberta MQTT do Home Assistant</code> e <code>Limpar Estados</code>. Salve as alterações e reinicie novamente o gateway SLS.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVZMB1xQeB6ZLfSR6aUrN6cRSF296s8CMJt7E2jBJ5MjZ', type:'mp4'}]" />

</li>

<li class="no-bullet">

\- **Extra**:

Se você já tem um gateway SLS ativo em sua casa e está configurando outro agora, eles entrarão em conflito um com o outro. Para resolver esse problema, você precisa alterar o canal no novo dispositivo.

Para fazer isso, vá para <code>Zigbee</code> -> <code>Configuração</code> e mude o canal para outro (por exemplo, canal 15).

</li>

<li>

Conecte seus dispositivos indo para <code>Zigbee</code> -> <code>Entrar</code>. Coloque seus sensores no modo de emparelhamento, a maneira mais comum de alternar um dispositivo para o modo de conexão é segurar seu botão de energia ou ligá-los/desligá-los por 5 vezes. Pressione o botão <code>Habilitar Entrada</code> para começar a procurar dispositivos Zigbee. Você verá sensores ativos.

</li>
</List>
</li>

<li>

Conectando o Gateway SLS ao Home Assistant

<List>

<li>

Você precisa configurar o MQTT no Gateway SLS. Volte para a interface web do seu Gateway SLS e vá para <code>Configurações</code> -> <code>Link</code> -> <code>Configuração MQTT</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmdNKDqwwy87VQEDDVsX5kpaDQm9wKKPEJUNJnhnjx6e5y', type:'mp4'}]" />

</li>

<li>

Adicione o endereço do seu broker (endereço do Raspberry Pi com o Home Assistant na rede local, você pode encontrá-lo com o aplicativo [Fing](https://www.fing.com/products) ou usando o comando <code>ip -a</code> no seu RPi), porta (padrão é 1883), seu nome de usuário e senha do broker (que você criou anteriormente) e o nome do tópico (você pode escolher qualquer um). Além disso, o endereço IP local do Raspberry Pi deve ser estático.

Não se esqueça de clicar em <code>Habilitar</code> e <code>Retenção de estados</code>.

</li>

<li>

Salve as alterações. Agora os dispositivos serão mostrados automaticamente no Home Assistant.

</li>
</List>

</li>

<li>

Conectar Dispositivos 

<List>

<li>

Conecte seus dispositivos indo para <code>Zigbee</code> -> <code>Entrar</code>. Coloque seus sensores no modo de emparelhamento, a maneira mais comum de alternar um dispositivo para o modo de conexão é segurar seu botão de energia ou ligá-los/desligá-los por 5 vezes.

<LessonImages src="smart-house-course/lesson-4-a-4.gif" alt="tutorial" imageClasses="mb"/>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmdq3PBNY88QbYYqakwSLG2vn3mVUom3w3wsSWfTd1pzJA', type:'mp4'}]" />

</li>

<li>

Pressione o botão Habilitar Entrada para começar a procurar dispositivos Zigbee. Você verá sensores ativos.

</li>

</List>
</li>

</List>