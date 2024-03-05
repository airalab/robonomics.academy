---
title: "Lição #5, Configuração de Assinatura Robonomics IoT"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: curso de assistente doméstico
lessonNumber: 6
metaOptions: [Aprenda, Casa Inteligente Soberana com Robonomics e Assistente Doméstico]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## Do que se trata

A Assinatura Robonomics IoT permite aos usu�rios usar todas as fun��es da parachain por um certo per�odo sem pagar as taxas de transa��o padr�o. Ao ativar a assinatura, os dispositivos poder�o enviar transa��es com prioridade.

Nesta li��o, voc� criar� as contas de seguran�a de casa inteligente necess�rias e comprar� uma assinatura IoT.

## Teoria

Uma assinatura IoT, bem como o m�todo pelo qual � comprada e gerenciada, � implementada usando um pallet <code>rws</code>, que cont�m todas as fun��es necess�rias. Em geral, as assinaturas na Robonomics s�o vendidas com um modelo de leil�o, que usa um extr�nseco <code>rws.startAuction()</code> para criar um leil�o para um ID de assinatura espec�fico. Os usu�rios podem acessar o leil�o por ID e dar lances usando um extr�nseco <code>rws.bid()</code>.

Ap�s o t�rmino do leil�o, o endere�o com o lance vencedor � atribu�do � assinatura. Agora, este endere�o poder� enviar transa��es atrav�s do extr�nseco <code>rws.call()</code> sem taxas. No entanto, isso n�o significa que o endere�o possa fazer isso incontrolavelmente a qualquer momento: cada assinatura tem uma certa quantidade de um valor <code>weight</code>, que deve se acumular antes que uma transa��o gratuita possa ser realizada. Algum valor <code>weight</code> � adicionado � assinatura a cada bloco gerado na parachain, devido a isso, a Robonomics regula a largura de banda da parachain.

Al�m disso, o propriet�rio da assinatura pode usar o extr�nseco <code>rws.setDevices()</code>, que compartilha o uso da assinatura para os endere�os especificados. Ao mesmo tempo, o <code>weight</code> permanece o mesmo, ent�o quanto mais endere�os na assinatura, mais tempo cada um deles ter� que esperar antes de enviar a transa��o gratuita.

Para controlar o Home Assistant com a Robonomics, voc� precisa de duas contas na parachain da Robonomics. Essas contas fornecer�o seguran�a para o seu Home Assistant.

Com uma das contas (<code>SUB_OWNER</code>), voc� comprar� uma assinatura Robonomics. Esta conta atua como o principal administrador da assinatura IoT e fornece acesso ao Home Assistant para outros usu�rios (usando <code>rws.setDevices()</code>). Esta conta deve ter alguns tokens XRT para completar as transa��es de compra da assinatura.

A segunda conta (<code>SUB_CONTROLLER</code>) controlar� todos os processos do Home Assistant dos dispositivos (como telemetria). As transa��es de seus dispositivos ser�o enviadas em nome da conta <code>SUB_CONTROLLER</code>. Voc� (e qualquer pessoa) poder� ver essas transa��es em qualquer explorador de parachain como [Subscan](https://robonomics.subscan.io/). No entanto, apenas voc� poder� descriptografar o conte�do dessas transa��es desde que possua de forma segura as frases-semente necess�rias.

## Instruções

<List type="numbers">

<li>

Criando Contas de Parachain do Propriet�rio e Controlador

<List>

<li>

<robo-academy-note type="warning" title="WARNING">
Ambas as contas devem ser criadas com criptografia ed25519.
</robo-academy-note>

</li>

<li>

Acesse o [aplicativo Robonomics Parachain](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) no Portal Polkadot / Substrate. Verifique o canto superior esquerdo para garantir que voc� est� conectado � Parachain Robonomics.

</li>

<li>

Devido ao uso do formato *ed25519*, você precisa criar uma conta usando o Polkadot-JS UI e selecionar a criptografia necessária. 

Este recurso está desativado por padrão no Polkadot-JS UI. Para ativá-lo, vá para <code>Configurações</code> -> <code>Geral</code> -> <code>opções de conta</code> e selecione <code>Permitir armazenamento local de contas no navegador</code> no menu suspenso <code>criação de contas no navegador</code>.
 
</li>

<li>

Vá para <code>Contas</code> -> <code>Contas</code> e pressione o botão <code>Adicionar conta</code>. Você verá o menu pop-up com a semente da conta. Ele tem duas formas: *Mnemônico* (legível por humanos) e *Bruto* (uma sequência de dígitos e letras).

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQiJYPYajUJXENX2PzSJMSKGSshyWyPNqugSYxP5eCNvm', type:'mp4'}]" />

</li>

<li>

Abra <code>Opções avançadas de criação</code>, altere o tipo de criptografia para criar a conta para <code>Edwards - ed25519</code>. Salve a frase mnemônica da semente com segurança e pressione <code>Próximo</code>.

</li>

<li>

No próximo menu, você precisa definir o nome da conta e a senha. Dê um nome <code>SUB_OWNER</code> para conveniência e pressione <code>Próximo</code>.

</li>

<li>

Na última janela, clique em <code>Salvar</code> para concluir a criação da conta. Ele também gerará arquivos JSON de backup que você deve armazenar com segurança. Voc�� pode usar este arquivo posteriormente para recuperar sua conta se lembrar da senha.

</li>

<li>

Repita essas etapas para a conta <code>SUB_CONTROLLER</code>.

</li>
</List>
</li>

<li>

Adicionando Contas à Extensão Polkadot.js

<List type="numbers">

<li>

Para sua conveniência, você deve usar a extensão Polkadot.js e adicionar essas contas recém-criadas a ela. Para uma conta ed25519, você pode fazer isso apenas com um arquivo JSON de backup. Você pode usar os arquivos salvos quando criou as contas.

Você pode obter esses arquivos novamente criando um arquivo de backup da conta. Pressione os três pontos em sua conta, escolha <code>Criar um arquivo de backup para esta conta</code> e digite sua senha.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmRd7gztUjWkLF4W2XuJwy5aXBwzNV2aPCU6CQQLvUpSNj', type:'mp4'}]" />

</li>

<li>

Abra uma extensão e pressione o botão <code>+</code> no canto superior direito, em seguida escolha <code>Restaurar conta a partir de arquivo JSON de backup</code>.

</li>

<li>

Em uma janela aberta, faça o upload do arquivo JSON, insira a senha e pressione <code>Restaurar</code>

</li>

<li>

Certifique-se de que a rede Robonomics está selecionada para as contas na extensão Polkadot.js. No Portal Polkadot / Substrate vá para <code>Configurações</code> -> <code>Metadados</code> e clique no botão <code>Atualizar metadados</code>. 

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmT5sTNP9t8gpbD4RJJw6ETwG4wiziiChAh2uHHBk9Zsyd', type:'mp4'}]" />

</li>

<li>

Confirme a atualização de metadados na janela pop-up. Agora a extensão mostrará o rótulo da rede para a qual o endereço é usado.

</li>

</List>
</li>

<li>

Ativando Assinatura Robonomics

<List >

<li>

<robo-academy-note type="okay">
Para esta etapa, você deve ter uma quantidade suficiente de tokens XRT (mínimo de 2-3 XRTs) em sua conta <code>SUB_OWNER</code>.
</robo-academy-note>

Vá para o dapp Robonomics para a [página de assinatura](https://dapp.robonomics.network/#/subscription) e pressione <code>conectar conta</code> na barra lateral direita.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmXrFCajmJgkRDSbshGD3QehjnoyS6jafEPSjHdYkoBHum', type:'mp4'}]" />

</li>

<li>

No menu pop-up seguinte, conecte a extensão Polkadot.js. Você verá o endereço da sua conta com saldo.

</li>

<li>

Antes de comprar, verifique se escolheu a conta <code>SUB_OWNER</code>. Pressione o ícone do perfil do endereço, você deve ver a conta <code>SUB_OWNER</code> sob o campo <code>Verificar conta do proprietário</code>.

</li>

<li>

Finalmente, pressione o botão <code>ENVIAR</code> e insira a senha da sua conta. Depois disso, aguarde até que o processo de ativação seja concluído. Você verá o estado da sua assinatura após um tempo.

Se não houver assinaturas disponíveis, **entre em contato** com a equipe Robonomics.

</li>
</List>
</li>

<li>

Adicionando Conta à Assinatura

<List type="numbers">

<li>

Agora você precisa adicionar a conta <code>SUB_CONTROLLER</code> à **lista de acesso**. Abra a extensão e clique no ícone perto do nome da conta. Ele irá copiar o endereço da conta.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmV1gkwtcXsWv54ov9tuXfcHg7nqs1foM8cRwts4sqnqtX', type:'mp4'}]" />

</li>

<li>

Cole este endereço no campo <code>Endereço da parachain Robonomics</code> na parte **Gerenciar acesso**.

Dê um nome e pressione o botão <code>+</code>. Insira a senha do seu <code>SUB_OWNER</code> na janela pop-up e aguarde até que o processo de ativação seja concluído.

</li>

<li>

Repita os passos para a conta <code>SUB_OWNER</code>.
</li>
</List>
</li>
</List>