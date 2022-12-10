<template>
  <LayoutCourse courseId="1" lessonId="2">

    <MetaInfo
      pageTitle = "Lesson #2, At the Intersection of Cybernetics and Economics"
      pageDescription = "Dive into the theory of the latest web3 technologies at the intersection of Cybernetics and Economics, which are designed to help IoT systems function safely and efficiently in our homes and cities."
      :pageImage = "'/og/introduction-course/2-at-the-intersection-of-cybernetics-and-economics'"
    />

    <section class="text__hyphened">
      <section class="container__narrow">
        <p>{{$ts('We are glad that you were able to pass through the black mirror and not drown in the digital world. Now a much deeper dive awaits you... the dive into the theory of the latest web3 technologies at the intersection of Cybernetics and Economics, which are designed to help IoT systems function safely and efficiently in our homes and cities.')}}</p>
      </section>

      <section class="container__narrow">
        <h2>{{$ts(`Intro`)}}</h2>
        <p>{{$ts('In this theoretical lesson, we want to introduce you to the first chapter of the updated Robonomics Whitepaper 2022. The ideas presented in this document have been nurtured in our heads and hearts for a long time, constantly supplemented after various experiments and proof-of-concepts. We do our best to')}} 
          <g-link to="https://robonomics.network/papers/">{{$ts('report at conferences and publish in scientific journals')}}</g-link>
           {{$ts(`some of the strongest results and materials. And for everyone's understanding and convenience, we have collected and compressed it all together as separate whitepaper chapters.`)}}</p>
        <p>{{$ts('The first chapter is called ')}}<b>{{$ts('"At the Intersection of Cybernetics and Economics"')}}</b>{{$ts(', and it will introduce you to the rationale for the concept of the robot economy — an economic system in which devices act as independent agents capable of performing key economic activities previously unique to humans.')}}</p>
      </section>

      <section class="container__reg">
        <h2>{{$ts('You will learn:')}}</h2>
        <List>
          <li>{{$ts('how the new challenges of the ongoing fourth industrial revolution affect the use of robotics and IoT systems;')}}</li>
          <li>{{$ts('what will be the future of fully autonomous cyber-physical processes;')}}</li>
          <li>{{$ts('why the answers to these challenges should be sought in the field of institutional economics, which seems to be far from robotics;')}}</li>
          <li>{{$ts('and why we should look at cryptocurrency, Bitcoin, Ethereum and Polkadot.')}}</li>
        </List>
      </section>

      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>{{$ts('Read the first chapter of Whitepaper 2022 on our')}} <g-link to="https://robonomics.network/vision/">{{$ts('website')}}</g-link>.</li>
          <li>
            <p>{{$ts('After reading, go and try to pass')}} <g-link to="https://lesson2.robonomics.academy/#/">{{$ts('the test')}}</g-link> {{$ts('for the second lesson in the special dapp.')}}</p>
            <p>{{$ts('You will be asked 17 questions, and we hope they will inspire you to think deeper about the ideas that we have presented to you. To pass the test, you need to score 10 correct answers out of 17 (60%, the standard value in academic practice).')}}</p>
            <p>{{$ts('Try to get as many correct answers as possible, if you pass the test by 90% in two attempts you will get bonus tokens for Lesson 5.')}}</p>
          </li>
          <li>
            <p>{{$ts('Simply mark your answers in the dapp and at the end click on the "Sign and send" button.')}}</p>
            <p>{{$ts('You need to use the same Polkadot.js account for the test dapp that you used in the previous lesson.')}}</p>
          </li>
          <li>{{$ts('As in the previous lesson, sign your transaction and check it on the Polkadot explorer.')}}</li>
        </List>
      </section>

      <Result>
        <p>{{$ts('The lesson will be considered completed after sending a successful transaction and its appearance in the Polkadot explorer for your Polkadot.js account.')}}</p>
        <p>{{$ts('You can check your results on ')}}<g-link to="https://lk.robonomics.academy/">{{$ts('the special checking dapp')}}</g-link>{{$ts('. For authorization on the checking dapp use the same account in Polkadot.js that was used during the course.')}}</p>
      </Result>
      
    </section>
  </LayoutCourse>
</template>

<script>

  export default {
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue')
    },

  }

</script>