<template>
  <LayoutCourse courseId="1" lessonId="5">
    <section class="text__hyphened">

      <section class="container__narrow">
        <p>The last lesson of  our introductory course is very likely the most difficult, because it will require some dexterity and patience from you. You will learn how to buy an IoT subscription on Robonomics Parachain using real tokens of our network.</p>
      </section>

      <section class="container__narrow">
        <h2>What’s this about</h2>
        <p>An IoT subscription is an access key to all functions related to changing the state of the digital twin of a cyber-physical system and storing information about it using the Polkadot / Kusama ecosystem. Owning one subscription guarantees that in each block of the blockchain there will be a place reserved for 1 transaction for the owner of the subscription.</p>
        <p>The main way to buy a subscription is to participate in the subscription auction, and therefore in this lesson you should get XRT tokens to make bids and submit transactions. More information about this process is also available on our wiki:
          <g-link to="https://wiki.robonomics.network/docs/en/get-subscription/">https://wiki.robonomics.network/docs/en/get-subscription/</g-link>
        </p>
      </section>

      <section class="container__reg">
        <h2>Instructions</h2>
        <List type="numbers">
          <li>
            <p>Make sure you have XRT Robonomics Parachain tokens (<g-link to="https://robonomics.network/xrt/">about token</g-link>). If you do not have this, you have several options to get it:</p>
            <p>a) <g-link to="https://discord.com/invite/kFPqNktKrJ">Request</g-link> required number of tokens for the lesson if you successfully passed the tests after <g-link to="/online-courses/introduction-course/2-at-the-intersection-of-cybernetics-and-economics">Lesson 2</g-link> and <g-link to="/online-courses/introduction-course/4-robonomics-architecture">Lesson 4</g-link> and got more that 90% of correct answers (15 out of 17 and 10 out of 11, respectively).</p>
            <p>b) Buy <g-link to="https://robonomics.network/xrt/">Polkadot compatible XRT</g-link> on <g-link to="https://trade.kraken.com/markets/kraken/xrt/usd">Kraken</g-link>. Be careful if you're not familiar with cryptocurrency exchanges, remember that all purchases on cryptocurrency exchanges may have potential risks, buy only required amount of token to pass this lesson.</p>
            <p>c) If you already have XRT but in ERC-20 format, use <g-link to="https://dapp.robonomics.network/#/exodus">Exodus process</g-link>. Do not forget to use your previously created polkadot.js account while submitting Exodus.</p>
          </li>
          <li>
            <p>IoT subscriptions are purchased through a regular auction process with the highest bidder obtaining a subscription. Before trying to participate in the auction, you should check if there are any available.</p>
            <p><g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/chainstate">Open Robonomics Polkadot/Substrate portal</g-link> with Chain state menu.</p>
            <p>Select <code>rws</code> query with <code>auctionQueue()</code> and press a ‘+’ button. You should see IDs of available auctions; remember the ID of one of them.</p>
            <p>Now, on the same Chain state menu, select <code>rws</code> with <code>auction(u32): Option&lt;PalletRobonomicsRwsAuctionLedger&gt;</code> and in <code>u32</code> fields enter the remembered ID of auction. After pressing the ‘+’ button you will see information about an interesting auction. If the <code>winner</code> field has <code>null</code> value, then no one has this subscription and you can try to get it. If no auctions are shown or available, please contact us.</p>
          </li>
          <li>
            <p>Now you can make a bid with your XRT tokens. Go to the Developer -> Extrinsic menu and for the same polkadot.js account that you used in the previous lesson, choose <code>rws</code> with <code>bid(index, amount)</code>. In the <code>index</code> field enter the ID of the interesting auction. In the <code>amount</code> field you should enter your number of tokens for the bid, converted to the “wieners” (1 XRT = 1 000 000 000 Wn). The minimal bid is 1 XRT.</p>
            <p>Submit the transaction and if you are lucky, you will get the IoT subscription. You can check that your Polkadot address owns the subscription through the same Chain state menu.</p>
          </li>
          <li>
            <p>The last step is to add devices for your IoT subscription. This simply means that you assign to your subscription additional Polkadot addresses that you or your devices can use to execute extrinsics (for example, to launch devices or to send device data to blockchain). Before starting, create a new account for Robonomics Parachain (guide on our wiki: <g-link to="https://wiki.robonomics.network/docs/en/create-account-in-dapp/">Create Account for Robonomics Parachain</g-link>), and call it ‘smart device’ for convenience.</p>
            <p>Then, go to the Developer -> Extrinsic menu, and select <code>rws</code> with <code>setDevices()</code>. In the devices list use the ‘Add item’ button to add devices and select a recently created account for smart devices. After that, submit the transaction.</p>
            <p>The device address should be added to the subscription. You can check it in the Chain state menu through query <code>rws</code> with <code>devices()</code> for your polkadot.js account that has the subscription.</p>
          </li>
        </List>
      </section>

      <Result>
        The lesson will be considered completed after the successful transaction of buying an IoT subscription and adding one device for it.
      </Result>

    </section>
  </LayoutCourse>
</template>


<script>

  export default {
    metaInfo () {
      return this.$seo({
        title: 'Lesson #5, IoT Subscriptions Using Robonomics Parachain',
        description: 'You will learn how to buy an IoT subscription on Robonomics Parachain using real tokens of our network.',
        image: {
          url: './og/introduction-course/5.png',
          width: 1200,
          height: 628
        },
        openGraph: {
          title: 'Lesson #5, IoT Subscriptions Using Robonomics Parachain',
          type: 'website'
        },
        twitter: {
          title: 'Lesson #5, IoT Subscriptions Using Robonomics Parachain',
          type: 'summary'
        }
      })
    }
  }

</script>