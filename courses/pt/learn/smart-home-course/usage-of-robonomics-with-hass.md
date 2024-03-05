---
title: "Lição #7, Uso de Robonomics com Home Assistant"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: curso de assistente doméstico
lessonNumber: 8
metaOptions: [Aprenda, Casa Inteligente Soberana com Robonomics e Assistente Doméstico]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---

## Do que se trata

Nesta li��o, voc� tentar� usar os principais servi�os de IoT da Robonomics. O primeiro pode consultar a telemetria de dispositivos de casa inteligente, permitindo que voc� receba dados remotamente do Home Assistant. O segundo servi�o gera backups da configura��o do seu Home Assistant e a restaura quando necess�rio (por exemplo, em caso de falha nos cart�es SD).


## Sobre as fun��es de parachain

Em seguida, voc� ver� como as fun��es da parachain da Robonomics s�o usadas para fornecer ao usu�rio do Home Assistant o servi�o necess�rio. 

A obten��o de telemetria � baseada no palete <code>datalog</code> que voc� j� conhece. Em determinados per�odos de tempo (mas n�o menos do que o peso acumulado permite), uma transa��o <code>datalog.record()</code> � enviada para a parachain do endere�o <code>SUB_CONTROLLER</code> com o hash IPFS do arquivo criptografado, onde todos os dados de seus dispositivos IoT s�o coletados. Na verdade, para obter a telemetria, voc� solicita os datalogs necess�rios da parachain relacionados � sua assinatura IoT e depois os descriptografa com suas chaves.

Para criar um backup, � usado outro palete da Robonomics chamado <code>digitalTwin</code>, que � uma implementa��o da ideia de um g�meo digital, uma vers�o digital de um equipamento real que copia suas caracter�sticas t�cnicas e dados hist�ricos. Primeiro, um ID exclusivo � criado para o g�meo digital do seu Home Assistant usando o extr�nseco <code>digitalTwin.create()</code>. Em seguida, usando o extr�nseco <code>digitalTwin.setSource()</code>, este ID � vinculado a alguns dados (o campo <code>topic</code>) e a um endere�o na parachain (o campo <code>source</code>). Para o backup do Home Assistant, o hash do arquivo de backup � armazenado em <code>topic</code> e o endere�o <code>SUB_OWNER</code> � armazenado em <code>source</code>.

## Instruções

<List type="numbers">

<li>

Obtendo Telemetria

<List>


<li>

V� para o dapp e escolha o servi�o [SmartHome Telemetry](https://dapp.robonomics.network/#/smarthome-telemetry).

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/Qmao9RoWcKo2qs4PAGtm5gqHzyAHJcpDqNLgciU35FJeVm', type:'mp4'}]" />

</li>

<li>

No campo <code>CONTROLLER</code>, insira o endere�o <code>SUB_CONTROLLER</code>. Insira a frase-semente para criptografar os dados.

</li>

<li>

No bloco <code>Obter telemetria</code>, escolha um carimbo de data/hora na lista suspensa e pressione o bot�o <code>BAIXAR TELEMETRIA</code>.


O download da telemetria pode levar algum tempo. Ap�s a conclus�o, voc� ver� as informa��es de seus sensores.

</li>
</List>
</li>


<li>

Criando Backup

<List>

<li>

Para criar backups, � chamado um servi�o que gera um arquivo de configura��o seguro. Este servi�o ent�o adiciona o arquivo ao IPFS e armazena o CID resultante no Robonomics Digital Twin.

<robo-academy-note type="warning" title="WARNING">
Para restaurar sua configura��o, � necess�rio usar um gateway IPFS personalizado, como Pinata (pinata.cloud) ou Crust Network (crust.network). Sem isso, seu backup ser� armazenado exclusivamente em seu n� local IPFS, o que pode impedir que voc� restaure sua configura��o do Home Assistant em caso de falha no n� local. 
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmVo91dLaAYgFDM1vrL2PYfAffM6SGGC59ZERbfHR44tqW', type:'mp4'}]" />

</li>

<li>

Na interface web do Home Assistant, vá para <code>Ferramentas do Desenvolvedor</code> -> <code>Serviços</code>. Procure por <code>Robonomics: Salvar Backup no Robonomics</code> e pressione <code>CHAMAR SERVIÇO</code>.

</li>

<li>

Aguarde até ver a notificação <code>Backup foi atualizado no Robonomics</code> aparecer em <code>Notificação</code>.

</li>

<li>

Para restaurar sua configuração, você precisará instalar uma nova instância do Home Assistant (e repetir todos os passos anteriores) com a integração do Robonomics Home Assistant usando as mesmas sementes que você criou anteriormente. Você também precisará configurar um broker MQTT com o mesmo nome de usuário e senha.

<robo-academy-note type="warning" title="WARNING">
Como alguns dispositivos conectados ao Home Assistant via Wi-Fi ou MQTT exigem que você especifique explicitamente o endereço IP local do seu Raspberry Pi, ao restaurar um backup, eles podem não estar disponíveis devido a uma mudança neste IP. Você precisará inserir o novo endereço IP nas configurações desses dispositivos. Para evitar isso, você pode configurar um IP local estático para o seu Raspberry Pi nas configurações do seu roteador (se ele suportar esse recurso).
</robo-academy-note>

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmWmnmkXUcPXsAnQzwN3UEuki2GMYnQDx3vhgjEypCU8aR', type:'mp4'}]" />


</li>

<li>

Na interface web do Home Assistant, vá para <code>Ferramentas do Desenvolvedor</code> -> <code>Serviços</code>. Procure por <code>Robonomics: Restaurar do Backup no Robonomics</code> e pressione <code>CHAMAR SERVIÇO</code>. Navegue até a página <code>Visão Geral</code> para verificar o status do seu backup.

</li>

<li>

Assim que o Home Assistant terminar de reiniciar, sua configuração será restaurada. Se o status mudar para <code>restaurado</code> mas o Home Assistant não reiniciar automaticamente, você precisará reiniciá-lo manualmente navegando para <code>Configurações</code> > <code>Sistema</code> e clicando no botão <code>REINICIAR</code> no canto superior direito.

</li>

</List>
</li>

</List>

## Conclusão do Curso

<List>

<li class="flex"> 

Parabéns! Você concluiu com sucesso a configuração e implantação completa de sua casa inteligente soberana. Agora você pode solicitar um certificado de conclusão do curso conosco visitando nosso canal no Discord. Escreva para nós no chat [robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315) e nosso representante entrará em contato com você.
</li>

<li class="flex">

A prova de conclusão do curso são transações correspondentes que podem ser verificadas no [explorador Polkadot](https://robonomics.subscan.io/). Estas são transações sobre a compra de uma assinatura, adição de um dispositivo a uma assinatura e envio de datalogs dos dispositivos.

</li>

</List>