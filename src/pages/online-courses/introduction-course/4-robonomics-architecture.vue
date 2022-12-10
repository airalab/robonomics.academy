<template>
  <LayoutCourse courseId="1" lessonId="4">

    <MetaInfo
      pageTitle = "Lesson #4, Robonomics Architecture"
      pageDescription = "In this lesson you will study the first half of the second chapter of Robonomics Whitepaper 2022 titled Robonomics Architecture."
      :pageImage = "'/og/introduction-course/4-robonomics-architecture'"
    />

    <section class="text__hyphened">

      <section class="container__narrow">
        <h2>{{$ts("Intro")}}</h2>
        <!-- <p>{{$ts('This is another theoretical lesson. In this lesson you will study the first half of the second chapter of Robonomics Whitepaper 2022 titled “Robonomics Architecture”. Particularly, in this lesson we explore some of the practical questions and challenges surrounding creating a well-functioning IoT system. We explore these questions because this is the only way that we can understand the  requirements for such IoT platforms as Robonomics.')}}</p> -->
        <p>{{$ts('This lesson is again dedicated to theory. You will study the first half of the second chapter of Robonomics Whitepaper 2022 titled ')}}<b>{{$ts('"Robonomics Architecture"')}}</b>{{$ts('. Particularly, we explore some of the practical questions and challenges surrounding creating a well-functioning IoT system. We explore these questions because this is the only way that we can understand the requirements for such IoT platforms as Robonomics.')}}</p>
      </section>

      <section class="container__reg">
        <h2>{{$ts('You will learn:')}}</h2>
        <List>
          <li>{{$ts('a quick overview of the current state of IoT systems and its typical components;')}}</li>
          <li>{{$ts('about modern concept for building IoT systems — the digital twin;')}}</li>
          <li>{{$ts('current problems of building IoT solutions;')}}</li>
          <li>{{$ts('and how Robonomics architecture adapts to the needs of the modern Internet of Things.')}}</li>
        </List>
      </section>

      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>{{$ts('Read the first half of the second chapter of Whitepaper 2022 on our')}} <g-link to="https://robonomics.network/architecture/">{{$ts('website')}}</g-link>.</li>
          <li>
            <p>{{$ts('After reading, try to pass the')}} <g-link to="https://lesson4.robonomics.academy/">{{$ts('test')}}</g-link> {{$ts('for the fourth lesson in the special dapp.')}}</p>
            <p>{{$ts('You will be asked 11 questions; to pass the test, you need to score 7 correct answers out of 11 (60%, the standard value in academic practice).')}}</p>
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