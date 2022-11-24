<template>
  <LayoutCourse courseId="1" lessonId="5">

    <MetaInfo
      pageTitle = "Lesson #5, IoT Subscriptions Using Robonomics Parachain"
      pageDescription = "You will learn how to buy an IoT subscription on Robonomics Parachain using real tokens of our network."
      :pageImage = "'/og/introduction-course/5-iot-subscriptions-using-robonomics-parachain'"
    />

    <section class="text__hyphened">

      <section class="container__narrow">
        <p>{{$ts('The last lesson of our introduction course is very likely the most challenging, because it will require some dexterity and patience from you. You will learn how to buy an IoT subscription on Robonomics Parachain using real tokens of our network.')}}</p>
      </section>

      <section class="container__narrow">
        <h2>{{$ts("What’s this about")}}</h2>
        <p>{{$ts('An IoT subscription is an access key to all functions related to changing the state of the digital twin of a cyber-physical system and storing information about it using the Polkadot / Kusama ecosystem.')}} {{$ts('Owning one subscription get rid the user of a necessity from having to pay a fee for the transaction. Instead, the user can send one free transaction once in a certain period of time.')}}</p>
        <p>{{$ts('The main way to buy a subscription is to participate in the subscription auction, and therefore in this lesson you should get XRT tokens to make bids and submit transactions. More information about this process is also available on our wiki:')}}
          <g-link class="link-break" to="https://wiki.robonomics.network/docs/en/get-subscription/">https://wiki.robonomics.network/docs/en/get-subscription/</g-link>
        </p>
      </section>

      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('Make sure you have XRT Robonomics Parachain tokens')}} (<g-link to="https://robonomics.network/xrt/">{{$ts('about token')}}</g-link>). {{$ts('If you do not have this, you have several options to get it:')}}</p>
            <p>a) <g-link to="https://discord.com/channels/803947358492557312/803947358492557315">{{$ts('Request in the robonomics-academy Discord chat')}}</g-link> {{$ts('required number of tokens for the lesson if you successfully passed the tests after')}} <g-link to="/online-courses/introduction-course/2-at-the-intersection-of-cybernetics-and-economics">{{$ts('Lesson 2')}}</g-link> {{$ts('and')}} <g-link to="/online-courses/introduction-course/4-robonomics-architecture">{{$ts('Lesson 4')}}</g-link> {{$ts('and got more that 90% of correct answers (15 out of 17 and 10 out of 11, respectively).')}}</p>
            <p>b) {{$ts('Buy')}} <g-link to="https://robonomics.network/xrt/">{{$ts('Polkadot native XRT tokens')}}</g-link> {{$ts('on')}} {{$ts('on one of the exchanges.')}} {{$ts("Be careful if you're not familiar with cryptocurrency exchanges, remember that all purchases on cryptocurrency exchanges may have potential risks, buy only required amount of token to pass this lesson (around 2 XRTs).")}}</p>
            <p>c):<p> - {{$ts('If you already have XRT but in ERC-20 format or want to buy it, use')}}<g-link to="https://dapp.robonomics.network/#/exodus"> {{$ts('Exodus process')}}</g-link>.</p> 
            <p>
              - {{$ts('If you already have XRT but in Ethereum ERC-20 format or want to buy it, use')}}<g-link to="https://old.dapp.robonomics.network/#/exodus"> {{$ts('Exodus process')}}</g-link>.
            </p> {{$ts('Do not forget to use your previously created polkadot.js account while submitting Exodus.')}}</p>
          </li>
          <li>
            <p>{{$ts('IoT subscriptions are purchased through a regular auction process with the highest bidder obtaining a subscription. Before trying to participate in the auction, you should check if there are any available.')}}</p>
            <p><g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/chainstate">{{$ts('Open Robonomics Polkadot/Substrate portal')}}</g-link> {{$ts('with Chain state menu.')}}</p>
            <p>{{$ts('Select')}} <code>rws</code> {{$ts('query with')}} <code>auctionQueue()</code> {{$ts(`and press a ‘+’ button.`)}} {{$ts('You should see IDs of available auctions; remember the ID of one of them.')}}</p>
            <p>{{$ts('Now, on the same Chain state menu, select')}} <code>rws</code> {{$ts('with')}} <code>auction(u32): Option&lt;PalletRobonomicsRwsAuctionLedger&gt;</code> {{$ts('and in')}} <code>u32</code> {{$ts(`fields enter the remembered ID of auction. After pressing the ‘+’ button you will see information about an interesting auction. If the`)}} <code>winner</code> {{$ts('field has')}} <code>null</code> {{$ts('value, then no one has this subscription and you can try to get it. If no auctions are shown or available, please contact us on our')}} <g-link to="https://discord.com/channels/803947358492557312/803947358492557315">{{$ts('Discord (robonomics-academy chat).')}}</g-link></p>
          </li>
          <li>
            <p>{{$ts('Now you can make a bid with your XRT tokens. Go to the Developer -> Extrinsic menu and for the same polkadot.js account that you used in the previous lesson, choose')}} <code>rws</code> {{$ts('with')}} <code>bid(index, amount)</code>. {{$ts('In the')}} <code>index</code> {{$ts('field enter the ID of the interesting auction.')}} {{$ts('In the')}} <code>amount</code> {{$ts('field you should enter your number of tokens for the bid, converted to the “wieners” (1 XRT = 1 000 000 000 Wn).')}} {{$ts('Right now, a minimal bid is 1 XRT + 1 Wn e.g. 1 000 000 001 Wh. Please check the current subscription price in our')}} <g-link to="https://dapp.robonomics.network/#/subscription">dapp</g-link>.</p>
            <p>{{$ts('Submit the transaction and if you are lucky, you will get the IoT subscription. You can check that your Polkadot address owns the subscription through the same Chain state menu.')}}</p>
          </li>
          <li>
            <p>{{$ts(`The last step is to add devices for your IoT subscription. This simply means that you assign to your subscription additional Polkadot addresses that you or your devices can use to execute extrinsics (for example, to launch devices or to send device data to blockchain). Before starting, create a new account for Robonomics Parachain (guide on our wiki:`)}} <g-link to="https://wiki.robonomics.network/docs/en/create-account-in-dapp/">{{$ts('Create Account for Robonomics Parachain')}}</g-link>), {{$ts('and call it ‘smart device’ for convenience.')}} </p>
            <p>{{$ts('Then, go to the Developer -> Extrinsic menu, and select')}}<code> rws</code> {{$ts('with')}} <code>setDevices()</code>. {{$ts('In the devices list use the ‘Add item’ button to add devices and select a recently created account for smart devices. After that, submit the transaction.')}}</p>
            <p>{{$ts('The device address should be added to the subscription. You can check it in the Chain state menu through query')}} <code>rws</code> {{$ts('with')}} <code>devices()</code> {{$ts('for your polkadot.js account that has the subscription.')}}</p>
          </li>
        </List>
      </section>

      <Result>
        {{$ts('The lesson will be considered completed after the successful transaction of buying an IoT subscription and adding one device for it.')}}
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