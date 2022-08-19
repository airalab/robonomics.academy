<template>
  <LayoutCourse courseId="1" lessonId="1">
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>What’s this about</h2>
        <p>This opening lesson will teach you basic methods to interact with a decentralized application (or dapp). For this purpose, we created a special dapp called «Black Mirror Broadcast», that works just from your web browser and shows a stream with a small retro TV. The dapp can remotely control the TV by showing your message as a QR code, sent using Robonomics platform.</p>
      </section>

      <section class="container__narrow">
        <h2>Inspiration</h2>
        <p>We created this dapp for the purpose of setting the mood, and setting the right tone for the rest of the course. Its idea captures the spirit of dystopia as something of vital importance, floating around in the embodiment of QR codes, physiological tests for crossing international boundaries… life on a screen and in a box. At such moments of global anxiety, the truth, imperceptible in the daily life of big cities, is exposed. Technologies are already inexorably entering into our lives and very often technology becomes intertwined with our lives more deeply than some of us individually would like. Yes, there is a long-standing and difficult question from the field of philosophy about the opposition of the public and the private. But still, we want to implement and help grow web3 in the field of IoT now at an early stage, so that it would not be possible to change the name of everyone on the planet to an identification code in an instant and without their consent. The new generation of Internet technologies will help improve the relationship between humans and machines, make smart devices more independent and faster in providing services to people, and importantly, not give control of one person over another with the help of machines. This is how we see the best scenario for integrating robots into humans’ daily lives.</p>
      </section>

      <section class="container__reg">
        <h2>Instructions</h2>
        <List type="numbers">
          <li>Install the polkadot.js browser extension and create an account for Robonomics Parachain. See the guide on our wiki: 
            <g-link to="https://wiki.robonomics.network/docs/en/create-account-in-dapp/">Create Account for Robonomics Parachain</g-link>. You need to pass all lessons from course with one Polkadot account to apply for certificate.
          </li>
          <li>Request access to the free IoT subscription, special for the course, on our Discord server. To do that, you need to find our <g-link to="https://discord.gg/nZhKnPD5Uy">Discord bot</g-link> called “academy-faucet” and enter your Robonomics Parachain address from polkadot.js extension.</li>
          <li>Go to the <g-link to="https://blackmirror.robonomics.academy">dapp</g-link> and allow the dapp access to polkadot.js extension. Make sure that you select the correct account, that gets a free IoT subscription.</li>
          <li>Enter in the dapp your short text message and click on ‘Sign and send’ button</li>
          <li>In the extension windows, enter your password and sign the transaction</li>
          <li>Make sure that your transaction was successfully sent by checking the link to the Polkadot explorer</li>
          <li>Check the QR code on the TV screen, it should change (can take ~2minutes sometimes)</li>
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
        title: 'Lesson #1, Broadcasting Through the Black Mirror',
        description: 'This opening lesson will teach you basic methods to interact with a decentralized application (or dapp).',
        image: {
          url: this.$website + '/og/introduction-course/1-broadcasting-through-the-black-mirror.png',
          width: 1200,
          height: 628
        },
        openGraph: {
          title: 'Lesson #1, Broadcasting Through the Black Mirror',
          type: 'website'
        },
        twitter: {
          title: 'Lesson #1, Broadcasting Through the Black Mirror',
          type: 'summary'
        }
      })
    }
  }

</script>