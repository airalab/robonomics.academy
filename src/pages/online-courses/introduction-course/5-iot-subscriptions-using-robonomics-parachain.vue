<template>
  <LayoutCourse courseId="1" lessonId="5">

    <MetaInfo
      pageTitle = "Lesson #5, IoT Subscriptions Using Robonomics Parachain"
      pageDescription = "You will learn how to buy an IoT subscription on Robonomics Parachain using real tokens of our network."
      :pageImage = "'/og/introduction-course/5-iot-subscriptions-using-robonomics-parachain'"
    />

    <section class="text__hyphened">

      <section class="container__narrow">
        <p>{{$ts('The last lesson of our Introduction Course is very likely the most challenging, because it will require some patience from you. You will learn how to buy an IoT subscription on Robonomics Parachain using real tokens of our network.')}}</p>
      </section>

      <section class="container__narrow">
        <h2>{{$ts("Intro")}}</h2>
        <p>{{$ts('An IoT subscription is an access key to all functions related to changing the state of the digital twin of a cyber-physical system and storing information about it using the Polkadot / Kusama ecosystem.')}} {{$ts('Owning one subscription get rid the user from having to pay a transaction fee. Instead, the user can send one free transaction once in a certain period of time.')}}</p>
        <p>{{$ts('The main way to buy a subscription is to participate in the subscription auction, and therefore in this lesson you should get XRT tokens to make bids and submit transactions. More information about this process is also available on ')}}
            <g-link to="https://wiki.robonomics.network/docs/get-subscription">{{$ts('our wiki')}}</g-link>.
        </p>
      </section>

      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('You need around 2 XRT Robonomics Parachain tokens')}} (<g-link to="https://robonomics.network/xrt/">{{$ts('about token')}}</g-link>). {{$ts('If you do not have them, you have several options:')}}</p>
            <p>a) {{$ts('If you pass both tests after Lesson 2 and Lesson 4 with 90% correct answers, you can request free tokens for the lesson. Check your scores on ')}}<g-link to="https://lk.robonomics.academy/">{{$ts('the special checking dapp')}}</g-link>{{$ts('. Specifically, you need to score 15 out of 17 for Lesson 2 and 10 out of 11 for Lesson 4, and you have two attempts to do this. To get tokens, contact the Academy Administrator on our ')}}<g-link to="https://discord.gg/xqDgG3EGm9"> {{$ts('Discord')}}</g-link>{{$ts(' (IBerman#5862).')}}</p>
            <p>b) {{$ts('Buy XRT tokens on one of the exchanges (check out the ')}}<g-link to="https://www.coingecko.com/en/coins/robonomics-network#markets/">{{$ts('list of exchanges')}}</g-link>{{$ts(').')}} {{$ts("Be careful if you're not familiar with cryptocurrency exchanges, remember that all purchases on cryptocurrency exchanges may have potential risks, buy only required amount of token to pass this lesson. Also, keep in mind that Robonomics exists on two networks, Ethereum and Kusama, so each network has its own XRT token. You need a token that used by parachain in Kusama network.")}}</p>
            <p>c) {{$ts('If you have XRT token in Ethereum network (ERC-20 format), use')}}<g-link to="https://old.dapp.robonomics.network/#/exodus"> {{$ts('Exodus')}}</g-link>{{$ts(' process to transfer tokens from the Ethereum network to Kusama. Keep in mind that the transfer of tokens is carried out once a week.')}}</p>
          </li>
          <li>
            <p>{{$ts('IoT subscriptions are purchased through an auction process with the highest bidder obtaining a subscription.')}}</p>
            <p>{{$ts('Before trying to participate in the auction, you should check if there are any available. Open Robonomics ')}}<g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/chainstate">{{$ts('Polkadot/Substrate portal')}}</g-link> {{$ts('with Chain state menu.')}}</p>
            <p>{{$ts('Select')}} <code>rws</code> {{$ts('query with')}} <code>auctionQueue()</code> {{$ts(`and press a '+' button.`)}} {{$ts('You should see IDs of available auctions; remember the ID of one of them. If no auctions are shown or available, please contact us on our Discord in "')}} <g-link to="https://discord.com/channels/803947358492557312/803947358492557315">{{$ts('🎓robonomics-academy')}}</g-link>{{$ts('" channel.')}}</p>
            <p>{{$ts('Now, on the same Chain state menu, select')}} <code>rws</code> {{$ts('with')}} <code>auction(u32): Option&lt;PalletRobonomicsRwsAuctionLedger&gt;</code> {{$ts('and in')}} <code>u32</code> {{$ts(`fields enter the remembered ID of auction. After pressing the "+" button you will see information about an interesting auction. If the`)}} <code>winner</code> {{$ts('field has')}} <code>null</code> {{$ts('value, then no one has this subscription and you can try to get it.')}}</p>
          </li>
          <li>
            <p>{{$ts('Make a bid with your XRT tokens.')}}</p>
            <p>{{$ts('Go to the Developer -> Extrinsic menu and choose for the same Polkadot.js account that you used in the previous lesson extrinsic')}} <code>rws</code> {{$ts('with')}} <code>bid(index, amount)</code>. {{$ts('In the')}} <code>index</code> {{$ts('field enter the ID of the interesting auction.')}} {{$ts('In the')}} <code>amount</code> {{$ts('field you should enter your number of tokens for the bid, converted to the "wieners" (1 XRT = 1 000 000 000 Wn).')}} {{$ts('Check the current minimum subscription price in our')}} <g-link to="https://dapp.robonomics.network/#/subscription">dapp</g-link>.</p>
            <p>{{$ts('Submit the transaction and if you are lucky, you will get the IoT subscription. You can check that your Polkadot address owns the subscription through the same Chain state menu.')}}</p>
          </li>
          <li>
            <p>{{$ts('The last step is to add devices for your IoT subscription.')}} </p> 
            <p>{{$ts('This simply means that you assign additional Polkadot addresses to your subscription so that they can execute extrinsics (for example, to launch devices or to send device data to blockchain).')}} </p>
            <p>{{$ts('First, create a new account for Robonomics Parachain (guide on ')}} <g-link to="https://wiki.robonomics.network/docs/create-account-in-dapp/">{{$ts('our wiki')}}</g-link>), {{$ts('and call it "smart device" for convenience.')}} </p>
            <p>{{$ts('Then, go to the Developer -> Extrinsic menu, and select')}}<code> rws</code> {{$ts('with')}} <code>setDevices()</code>. {{$ts('In the devices list use the "Add item" button to add devices and select a recently created account. After that, submit the transaction.')}}</p>
            <p>{{$ts('The device address should be added to the subscription. You can check it in the Chain state menu through query')}} <code>rws</code> {{$ts('with')}} <code>devices()</code> {{$ts('for your Polkadot.js account that has the subscription.')}}</p>
          </li>
        </List>
      </section>

      <Result>
        <p>{{$ts('The lesson will be considered completed after sending a successful transaction of buying an IoT subscription and adding one device for it. Transactions should appear in the Polkadot explorer for your account.')}}</p>
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


<style scoped>
  .link-break {
   word-break: break-word;
  }
 </style>