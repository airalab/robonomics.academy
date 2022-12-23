---
title: "Lição #4, Encontre e siga um objeto, navegue entre eles"
description: Na terceira lição, você aprenderá como encontrar objetos do mundo e ir até eles.
lessonNumber: 4
courseID: 2
metaOptions: [Cursos on-line, Desenvolvimento de software Boston Dynamics Spot]
---

<section class="container__reg">

## Do que se trata?

Na terceira lição, você aprenderá como encontrar objetos do mundo e ir até eles.

</section>


<section class="container__reg">

## O desafio

Você começa com o Spot no local com alguns fiduciais (uma marca no objeto) ao redor. Criar e executar o script Python detecta pelo menos dois fiduciais e mover o Spot para cada um deles dentro de 1 m.

</section>

<section class="container__reg">

## Instruções

<List type="numbers">

<li>

O Spot possui o World Object Service (Serviço de Objetos do Mundo) que fornece uma maneira de rastrear e armazenar objetos detectados ao redor do Spot no mundo. Um objeto do mundo é considerado um item de nível superior na cena que possui alguma quantidade de informação semântica associada a ele. Mais informações você pode encontrar na guia [Robot Services](https://dev.bostondynamics.com/docs/concepts/robot_services#world-object) na documentação do Spot SDK.

Usando o serviço de objetos do mundo, você pode encontrar fiduciais perto do Spot.

O Spot pode encontrar objetos mais rapidamente se ele estiver de pé.

Na tarefa, você precisará encontrar as coordenadas dos fiduciais e ir até eles. Você já sabe como ir para as coordenadas locais a partir da [Lição 2](/online-courses/boston-dynamics-course/3-remote-controlled-and-programmed-motion). O exemplo de como encontrar um fiducial e suas coordenadas está em [fiducial_follow example](https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/examples/fiducial_follow/fiducial_follow.py).

Em seu script, primeiro, você precisa encontrar o objeto fiducial com o World Object Service:

<lessonCodeWrapper language="python" codeClass="big-code">
fiducial_objects = world_object_client.list_world_objects(object_type=[world_object_pb2.WORLD_OBJECT_APRILTAG]).world_objects
</lessonCodeWrapper>


Então obtenha as coordenadas fiduciais em um quadro visual:

<lessonCodeWrapper language="python" codeClass="big-code">
fiducial = fiducial_objects[0]
vision_tform_fiducial = get_a_tform_b(fiducial.transforms_snapshot, VISION_FRAME_NAME, fiducial.apriltag_properties.frame_name_fiducial.to_proto())
</lessonCodeWrapper>

</li>

<li>
Conecte-se ao Spot a partir de um terminal ou usando sua função de execução remota do ambiente de desenvolvimento.

<lessonCodeWrapper language="bash">
ssh student@strelka.ygg.merklebot.com
</lessonCodeWrapper>

</li>

<li>

Desenvolva e demonstre sua solução para o desafio.

Nós criamos o [E-Stop endpoint](https://dev.bostondynamics.com/python/examples/estop/readme) para você, portanto, você não deve criá-lo. Para autenticação do Spot, use o nome de usuário e a senha do arquivom <code>/home/student/credentials</code>. O endereço do Spot é <code>192.168.50.3</code>.

</li>

</List>
</section>

<section class="container__reg">

### Você está pronto para praticar?

Quando estiver pronto, você pode comprar uma sessão de prática de 1 hora especificando suas credenciais de acesso (chave SSH) e o horário em que deseja se conectar ao Spot para resolver a tarefa.

##### <LessonButtonLink src="https://dapp.spot-sdk.education/#/checkout" text="Alugue uma vaga" />

</section>