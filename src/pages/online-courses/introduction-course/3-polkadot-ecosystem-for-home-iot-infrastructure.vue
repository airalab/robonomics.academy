<template>
  <LayoutCourse courseId="1" lessonId="3">
    <section class="text__hyphened">
      <section class="container__narrow">
        <p>Lesson 2 explained the main principles of Robonomics and mentioned Polkadot / Kusama as a promising blockchain ecosystem platform for it’s implementation. It’s time to take a closer look at the functions of Robonomics Parachain as a part of the Polkadot ecosystem in the Kusama network. In particular, we would like to show how IoT subscriptions of the Robonomics Parachain work. During the first lesson, your address was added to the course IoT subscription, and you have already managed to use it twice: when you looked for your reflection in the black mirror and when handed in your test results.</p>
      </section>

      <section class="container__narrow">
        <h2>What’s this about</h2>
        <p>In this lesson you will try to control a smart light bulb that works via Home Assistant which has additional Robonomics modules. Your goal is to turn the bulb on/off using the standard Polkadot/Substrate interface on the Robonomics Parachain. The bulb is broadcasting on 
          <g-link to="https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live">YouTube</g-link>, so you can watch your result in real time. Also, a more detailed set of instructions regarding using an IoT subscription is available 
          <g-link to="https://wiki.robonomics.network/docs/en/subscription-launch/">on our wiki</g-link>.</p>
      </section>

      <section class="container__reg">
        <h2>Instructions</h2>
        <List type="numbers">
          <li>Open Robonomics <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/extrinsics">Polkadot/Substrate portal</g-link>. You should see the Extrinsics (functions in Polkadot ecosystem) menu.</li>
          <li>In the first field pick the same polkadot.js account that you used in the previous lesson.</li>
          <li>In the second field pick <code>rws</code> extrinsics and choose <code>call(subscriptionId, call)</code>. This will allow you to dispatch a function call using IoT subscription.</li>
          <li>In the <code>subscriptionId</code> field write this subscription's owner address: <br/><code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code></li>
          <li>In the <code>call</code> field choose <code>launch</code> command. This will show you two more fields: <code>robot</code> and <code>param</code>.</li>
          <li>In the <code>robot</code> field write this address of smart bulb:<br/> <code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code></li>
          <li>In the <code>param</code> field you need to specify <br/><code>0x0000000000000000000000000000000000000000000000000000000000000001</code> <br/>or <br/><code>0x0000000000000000000000000000000000000000000000000000000000000000</code> <br/>to turn on or off the bulb.</li>
          <li>Press the ‘Submit Transaction’ button. Do not forget to open the <g-link to="https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live">broadcast on YouTube</g-link> before signing the transaction.</li>
        </List>
      </section>

      <Result>
        The lesson will be considered completed after sending a successful transaction and its appearance in the Polkadot explorer for your polkadot.js account.
      </Result>

      <section class="container__reg">
        <h2>Bonus</h2>
        <p>You can try to repeat similar assembly and setup of the smart device on your own! We have a special wiki-guide how to connect a home IoT gateway to Robonomics:</p>
        <p><g-link to="https://wiki.robonomics.network/docs/en/home-assistant-begin">https://wiki.robonomics.network/docs/en/home-assistant-begin</g-link></p>
      </section>

    </section>
  </LayoutCourse>
</template>


<script>

  export default {
    metaInfo () {
      return this.$seo({
        title: 'Lesson #3, Polkadot Ecosystem for Home IoT Infrastructure',
        description: 'In this lesson you will try to control a smart light bulb that works via Home Assistant which has additional Robonomics modules.',
        image: {
          url: this.$website + '/og/introduction-course/3.png',
          width: 1200,
          height: 628
        },
        openGraph: {
          title: 'Lesson #3, Polkadot Ecosystem for Home IoT Infrastructure',
          type: 'website'
        },
        twitter: {
          title: 'Lesson #3, Polkadot Ecosystem for Home IoT Infrastructure',
          type: 'summary'
        }
      })
    }
  }

</script>
