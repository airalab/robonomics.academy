<template>
  <LayoutCourse courseId="1" lessonId="3">

    <MetaInfo
      pageTitle = "Lesson #3, Polkadot Ecosystem for Home IoT Infrastructure"
      pageDescription = "In this lesson you will try to control a smart light bulb that works via Home Assistant which has additional Robonomics modules."
      :pageImage = "'/og/introduction-course/3-polkadot-ecosystem-for-home-iot-infrastructure'"
    />

    <section class="text__hyphened">
      <section class="container__narrow">
        <p>{{$ts('Lesson 2 explained the main principles of Robonomics and mentioned Polkadot / Kusama as a promising blockchain ecosystem platform for it’s implementation. It’s time to take a closer look at the functions of Robonomics Parachain as a part of the Polkadot ecosystem in the Kusama network. In particular, we would like to show how IoT subscriptions of the Robonomics Parachain work. During the first lesson, your address was added to the course IoT subscription, and you have already managed to use it twice: when you looked for your reflection in the black mirror and when handed in your test results')}}.</p>
      </section>

      <section class="container__narrow">
        <h2>{{$ts("What’s this about")}}</h2>
        <p>{{$ts('In this lesson you will try to control a smart light bulb that works via Home Assistant which has additional Robonomics modules. Your goal is to turn the bulb on/off using the standard Polkadot/Substrate interface on the Robonomics Parachain. The bulb is broadcasting on')}}
          <g-link to="https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live">{{$ts('YouTube')}}</g-link>, {{$ts('so you can watch your result in real time. Also, a more detailed set of instructions regarding using an IoT subscription is available')}} 
          <g-link to="https://wiki.robonomics.network/docs/subscription-launch/">{{$ts('on our wiki')}}</g-link>.</p>
      </section>

      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>{{$ts('Open the Robonomics')}} <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/extrinsics">{{$ts('Polkadot/Substrate portal')}}</g-link>. {{$ts("You should see the Extrinsics (functions in Polkadot ecosystem) menu.")}} {{$ts('If stuck, then using the menu in the top left of the page, navigate to')}} <code> Kusama & Parachains -> Robonomics</code>, {{$ts('and press')}} <code>'Switch'</code>. {{$ts('Then navigate to')}} <code>'Developer'</code> {{$ts('in the top header, and then to')}} <code>'Extrinsics'</code> </li>
          <li>{{$ts(`In the first field where you can read "using the selected account", pick the same polkadot.js account that you've used in the previous lessons.`)}}</li>
          <li>{{$ts('In the second field "submit the following extrinsic", select')}} <code>rws</code> {{$ts('extrinsics and choose')}} <code>call(subscriptionId, call)</code>. {{$ts('This will allow you to dispatch a function call using the IoT subscription.')}}</li>
          <li>{{$ts('In the')}} <code>{{$ts('subscriptionId: AccountId32')}}</code> {{$ts("field paste this subscription's owner address:")}} <br/><code>4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r</code></li>
          <li>{{$ts('In the')}} <code>{{$ts('call: Call')}}</code> {{$ts('field choose the')}} <code>launch(robot, param)</code> {{$ts('command.')}} {{$ts('This will show you two more fields:')}} <code>robot</code> {{$ts('and')}} <code>param</code>.</li>
          <li>{{$ts('In the')}} <code>robot: AccountId32</code> {{$ts('field paste this address of the smart bulb:')}}<br/> <code>4DUAnmLeEto197jDDSgvfjfS65MGvReMXibqp9ADg7ZgCDp9</code></li>
          <li>{{$ts('In the')}} <code>param: H256</code> {{$ts('field you need to specify 1 (on) or 0 (off) to turn on/off the bulb. You can do this with')}} <br/><code>0x0000000000000000000000000000000000000000000000000000000000000001</code> <br/>{{$ts('or')}} <br/><code>0x0000000000000000000000000000000000000000000000000000000000000000</code> <br/></li>
          <li>{{$ts('Press the ‘Submit Transaction’ button. Do not forget to open the')}} <g-link to="https://www.youtube.com/channel/UCkemsNJWaCmvF1Oi50C-hAg/live">{{$ts('broadcast on YouTube')}}</g-link> {{$ts('before signing the transaction.')}}</li>
        </List>
      </section>

      <Result>
        {{$ts('The lesson will be considered completed after sending a successful transaction and its appearance in the Polkadot explorer for your polkadot.js account.')}}
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

<style scoped>
 .link-break {
  word-break: break-word;
 }
</style>

