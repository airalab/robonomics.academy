<template>
  <LayoutCourse courseId="1" lessonId="4">
    <section class="text__hyphened">

      <section class="container__narrow">
        <h2>What’s this about</h2>
        <p>This is another theoretical lesson. In this lesson you will study the first half of the second chapter of Robonomics Whitepaper 2022 titled “Robonomics Architecture”. Particularly, in this lesson we explore some of the practical questions and challenges surrounding creating a well-functioning IoT system. We explore these questions because this is the only way that we can understand the  requirements for such IoT platforms as Robonomics.</p>
      </section>

      <section class="container__reg">
        <h2>You will learn:</h2>
        <List>
          <li>a quick overview of the current state of IoT systems and its typical components;</li>
          <li>about modern concept for building IoT systems — the digital twin;</li>
          <li>current problems of building IoT solutions;</li>
          <li>and how Robonomics architecture adapts to the needs of the modern Internet of Things.</li>
        </List>
      </section>

      <section class="container__reg">
        <h2>Instructions</h2>
        <List type="numbers">
          <li>Read the second chapter of Whitepaper 2022 on our <g-link to="https://robonomics.network/architecture/">website</g-link></li>
          <li>After reading, try to pass the <g-link to="https://lesson4.robonomics.academy/">test</g-link> for the fourth lesson in the special dapp. You will be asked 11 questions; to pass the test, you need to score 7 correct answers out of 11 (60%, the standard value in academic practice).</li>
          <li>You need to use the same polkadot.js account for the test dapp that you used in the previous lessons. Simply mark your answers in the dapp and at the end click on the ‘Sign and send’ button.</li>
          <li>As in the previous lesson, sign your transaction and check it on the Polkadot explorer.</li>
        </List>
      </section>

      <Result>
        The lesson will be considered completed after sending a successful transaction and its appearance in the Polkadot explorer for your polkadot.js account.
      </Result>

    </section>
  </LayoutCourse>
</template>

<script>

  export default {
    metaInfo () {
      return this.$seo({
        title: 'Lesson #4, Robonomics Architecture',
        description: 'Particularly, in this lesson we explore some of the practical questions and challenges surrounding creating a well-functioning IoT system.',
        image: {
          url: this.$website + '/og/introduction-course/4.png',
          width: 1200,
          height: 628
        },
        openGraph: {
          title: 'Lesson #4, Robonomics Architecture',
          type: 'website'
        },
        twitter: {
          title: 'Lesson #4, Robonomics Architecture',
          type: 'summary'
        }
      })
    }
  }

</script>