---
title: "Lição nº 6, Configuração de integração robônica"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: curso de assistente doméstico
lessonNumber: 7
metaOptions: [Aprenda, Casa Inteligente Soberana com Robonomics e Assistente Doméstico]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## Do que se trata

Nesta li��o, voc� ir� adicionar Robonomics ao Home Assistant e criar uma conta associada � assinatura. Esta integra��o permite que o Home Assistant use as fun��es da parachain Robonomics, em primeiro lugar, enviar dados de casa inteligente criptografados para uma nuvem descentralizada.


## Teoria

Seus dados de casa inteligente s�o enviados usando a extr�nseca <code>record()</code> do pallet <code>datalog</code> que permite que voc� salve dados de dispositivos criptografados no blockchain. 

Para ser mais preciso, a integra��o usa o IPFS para armazenar dados e depois enviar hashes do IPFS para a extr�nseca datalog, que por sua vez � armazenada no blockchain. Mas como essa fun��o � chamada atrav�s de uma assinatura IoT, a fun��o inteira parece: <code>rws.call(datalog.record(SEU_HASH_IPFS))</code>.

## Instruções

<List type="numbers">

<li>

Adicionando Robonomics ao Home Assistant

<List>

<li>

Na interface web do Home Assistant, v� para <code>Configura��es</code>-><code>Dispositivos e Servi�os</code> e pressione <code>ADICIONAR INTEGRA��O</code>. Procure por <code>Robonomics</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQp66J943zbF6iFdkKQpBikSbm9jV9La25bivKd7cz6fD', type:'mp4'}]" />

</li>

<li>

Clique em Robonomics e preencha a configura��o: 

\- Adicione a semente da conta <code>SUB_CONTROLLER</code> � semente da conta de administrador

\- Adicione o endere�o p�blico da conta <code>SUB_OWNER</code> (que voc� criou anteriormente) ao endere�o do propriet�rio da assinatura

\- Defina o intervalo de envio de dados (por padr�o � de 10 minutos)

\- (Opcional) Voc� pode adicionar credenciais para o servi�o de pinagem Pinata para espalhar seus dados de forma mais ampla pela rede IPFS

</li>

<li>

Pressione <code>ENVIAR</code> ap�s terminar a configura��o. Se voc� preencheu tudo corretamente, voc� ver� a janela de Sucesso.

</li>
</List>
</li>

<li>

Adicionando Usuários no Robonomics Dapp 

<List>

<li>

Você precisa criar um usuário separado para o Home Assistant, que irá controlar os dispositivos inteligentes da casa. Você não pode usar contas criadas anteriormente porque <code>SUB_OWNER</code> e <code>SUB_CONTROLLER</code> fornecem segurança, e o primeiro usuário que você criou quando começou a usar o Home Assistant não possui uma conta na Parachain do Robonomics.

</li>

<li>
Comece criando uma conta na Parachain do Robonomics, como fez na lição anterior.
</li>

<li>

Adicione esta conta à assinatura no [dapp](https://dapp.robonomics.network/#/subscription/devices). Agora deve haver três endereços na lista de acesso: <code>SUB_OWNER</code>, <code>SUB_CONTROLLER</code> e <code>USER</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSxzram7CF4SXpVgEyv98XetjYsxNFQY2GY4PfyhJak7H', type:'mp4'}]" />

</li>

<li>

Vá para o serviço dapp chamado [Conta do Home Assistant](https://dapp.robonomics.network/#/home-assistant). Escolha a conta que você acabou de criar na barra lateral direita (verifique se escolheu a conta pretendida pressionando o ícone de perfil).

Digite a semente do <code>USER</code> no campo obrigatório. Adicione os endereços <code>SUB_OWNER</code> e <code>SUB_CONTROLLER</code> nos campos de créditos do administrador. Se tudo estiver correto, você verá o status de verificação <code>VERIFICADO</code>.

</li>

<li>

Crie uma senha para um novo usuário que você acabou de registrar e depois confirme a transação, que agora será sem taxa devido à assinatura. Mais tarde, você pode restaurar a senha na aba <code>Restaurar</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmW2TXuwCYXzgcRfEUx4imZU5ZerEzkuD5P53u9g2WnxDh', type:'mp4'}]" />

</li>

<li>

Após o processo de registro, faça login no Home Assistant com o endereço do seu usuário como login e a senha recém-criada. Agora você pode usar o dapp Robonomics para controlar sua casa através do Robonomics.

</li>
</List>
</li>
</List>