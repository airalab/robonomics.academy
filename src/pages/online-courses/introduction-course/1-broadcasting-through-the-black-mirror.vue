<template>
  <LayoutCourse courseId="1" lessonId="1">

    <MetaInfo
      pageTitle = "Lesson #1, Broadcasting Through the Black Mirror"
      pageDescription = "This opening lesson will teach you basic methods to interact with a decentralized application (or dapp)."
      :pageImage = "'/og/introduction-course/1-broadcasting-through-the-black-mirror'"
    />

    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts("Intro")}}</h2>
        <p>{{$ts('This opening lesson will teach you basic methods to interact with ')}}<b>{{$ts('a decentralized application (or dapp)')}}</b>{{$ts('. For this purpose, we created a special dapp called "')}}<b>{{$ts('Black Mirror Broadcast')}}</b>{{$ts('", that works just from your web browser and shows a stream with a small retro TV. The dapp can remotely control the TV and change a QR code by sending your message using Robonomics platform.')}}</p>
      </section>

      <section class="container__narrow">
        <h2>{{$ts('Inspiration')}}</h2>
        <p>{{$ts('We created this dapp for the purpose of setting the right mood for the rest of the course. The idea of dapp conveys the spirit of a dystopia in which most of a human life exists on a black screen and everyone can spy on this life.')}}</p>
        <p>{{$ts('Technology has inexorably entered the everyday life of humankind and very often technology becomes intertwined with our lives more deeply than some of us would like. There is a long-standing and difficult question from the field of philosophy about the opposition of the public and the private parts of human existence. That is why we, in Robonomics, want to implement web3 tools in the IoT field. We want to make it impossible to instantly change the name of every person on the planet to an identification code without the consent of the person.')}}</p>
        <p>{{$ts('Next-generation Internet technologies can help improve the relationship between people and machines, make smart devices more independent and faster in providing services to people, and importantly, make it impossible to take control of all people with the help of machines. This is how we see the best scenario for integrating robots into humans’ daily lives.')}}</p>
      </section>

      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('Install the Polkadot.js browser extension and create an account for Robonomics Parachain.')}}</p> 
            <p>{{$ts('See the guide on our wiki:')}}
            <g-link to="https://wiki.robonomics.network/docs/create-account-in-dapp/">{{$ts('Create Account for Robonomics Parachain')}}</g-link>. {{$ts('You need to pass all lessons of the course with one Polkadot account to apply for certificate.')}}</p>
          </li>
          <li>
            <p>{{$ts('Enter to our ')}}<g-link to="https://discord.gg/xqDgG3EGm9"> {{$ts('Discord server')}}</g-link>{{$ts(' and get the "Developer Community Member" role.')}}</p>
            <p>{{$ts('To do this, in the channel "👋welcome-info" you need to click on the corresponding emoji (⚛️) in the MEE6 bot post.')}}</p>
          </li>
          <li>
            <p>{{$ts('Find the special ')}}<g-link to="https://discord.com/channels/803947358492557312/944186892038053899">{{$ts('Discord chatbot')}}</g-link>{{$ts(', called "🚰academy-faucet" in the channel list and enter your Robonomics Parachain address from Polkadot.js extension.')}}</p>
            <p>{{$ts('Make sure you send the address to the bot in the correct format (it starts with "4"). If the bot does not respond or does not add your address to the subscription the first time, try a few more times, this happens due to network load. If the problem persists, ask in the "🎓robonomics-academy" channel.')}}</p>
            </li>
          <li>
            <p>{{$ts('Go to the')}} <g-link to="https://blackmirror.robonomics.academy">{{$ts('Black Mirror dapp')}}</g-link> {{$ts('and allow the dapp access to Polkadot.js extension.')}}</p>
            <p>{{$ts('Make sure that you select the correct account, that got the free IoT subscription.')}}</p>
          </li>
          <li>{{$ts(`Enter in the dapp your short text message (in English) and click on "Sign and send" button.`)}}</li>
          <li>{{$ts('In the appeared extension window, enter your password and sign the transaction.')}}</li>
          <li>
            <p>{{$ts('Make sure that your transaction was successfully sent by checking the link to the Polkadot explorer.')}}</p>
            <p>{{$ts('The ')}}<code>Result</code>{{$ts(' field should show ')}}<code>Success</code>{{$ts('.')}}</p>
          </li>
          <li>{{$ts('Check the QR code on the TV screen, it should change (can take up to 2 minutes).')}}</li>
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