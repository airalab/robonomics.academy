---
title: "Lesson #5, IoT Subscriptions Using Robonomics Parachain"
description: You will learn how to buy an IoT subscription on Robonomics Parachain using real tokens of our network.
lessonNumber: 5
courseID: 1
metaOptions: [Online Courses, Introduction Course]
---

<section class="container__narrow">

The last lesson of our Introduction Course is very likely the most challenging, because it will require some patience from you. You will learn how to buy an IoT subscription on Robonomics Parachain using real tokens of our network.

</section>

<section class="container__narrow">

## Intro

An IoT subscription is an access key to all functions related to changing the state of the digital twin of a cyber-physical system and storing information about it using the Polkadot / Kusama ecosystem. Owning one subscription get rid the user from having to pay a transaction fee. Instead, the user can send one free transaction once in a certain period of time.

The main way to buy a subscription is to participate in the subscription auction, and therefore in this lesson you should get XRT tokens to make bids and submit transactions. More information about this process is also available on [our wiki](https://wiki.robonomics.network/docs/get-subscription).

</section>

<section class="container__reg">

## Instructions

<List type="numbers">

<li>

You need around 2 XRT Robonomics Parachain tokens ([about token](https://robonomics.network/xrt/)). If you do not have them, you have several options:

a) If you pass both tests after Lesson 2 and Lesson 4 with 90% correct answers, you can request free tokens for the lesson. Check your scores on [the special checking dapp](https://lk.robonomics.academy/). Specifically, you need to score 15 out of 17 for Lesson 2 and 10 out of 11 for Lesson 4, and you have two attempts to do this. To get tokens, contact the Academy Administrator on our [Discord](https://discord.gg/xqDgG3EGm9) (IBerman#5862).

b) Buy XRT tokens on one of the exchanges (check out the [list of exchanges](https://www.coingecko.com/en/coins/robonomics-network#markets/)). Be careful if you're not familiar with cryptocurrency exchanges, remember that all purchases on cryptocurrency exchanges may have potential risks, buy only required amount of token to pass this lesson. Also, keep in mind that Robonomics exists on two networks, Ethereum and Kusama, so each network has its own XRT token. You need a token that used by parachain in Kusama network.

c) If you have XRT token in Ethereum network (ERC-20 format), use [Exodus](https://old.dapp.robonomics.network/#/exodus) process to transfer tokens from the Ethereum network to Kusama. Keep in mind that the transfer of tokens is carried out once a week.

</li>

<li>

IoT subscriptions are purchased through an auction process with the highest bidder obtaining a subscription.

Before trying to participate in the auction, you should check if there are any available. Open Robonomics [Polkadot/Substrate portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/chainstate) with Chain state menu. Select <code>rws</code> query with <code>auctionQueue()</code> and press a '+' button. You should see IDs of available auctions; remember the ID of one of them. If no auctions are shown or available, please contact us on our Discord in "[🎓robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315)" channel.

Now, on the same Chain state menu, select  <code>rws</code> with <code>auction(u32): Option&lt;PalletRobonomicsRwsAuctionLedger&gt;</code> and in <code>u32</code> fields enter the remembered ID of auction. After pressing the "+" button you will see information about an interesting auction. If the <code>winner</code> field has <code>null</code> value, then no one has this subscription and you can try to get it.

</li>

<li>

Make a bid with your XRT tokens.

Go to the Developer -> Extrinsic menu and choose for the same Polkadot.js account that you used in the previous lesson extrinsic <code>rws</code> with <code>bid(index, amount)</code>. In the <code>index</code> field enter the ID of the interesting auction. In the <code>amount</code> field you should enter your number of tokens for the bid, converted to the "wieners" (1 XRT = 1 000 000 000 Wn). Check the current minimum subscription price in our [dapp](https://dapp.robonomics.network/#/subscription). 

Submit the transaction and if you are lucky, you will get the IoT subscription. You can check that your Polkadot address owns the subscription through the same Chain state menu.

</li>

<li>

The last step is to add devices for your IoT subscription.

This simply means that you assign additional Polkadot addresses to your subscription so that they can execute extrinsics (for example, to launch devices or to send device data to blockchain).

First, create a new account for Robonomics Parachain (guide on [our wiki](https://wiki.robonomics.network/docs/create-account-in-dapp/)), and call it "smart device" for convenience.

Then, go to the Developer -> Extrinsic menu, and select <code> rws</code> with <code>setDevices()</code>. In the devices list use the "Add item" button to add devices and select a recently created account. After that, submit the transaction.

The device address should be added to the subscription. You can check it in the Chain state menu through query <code>rws</code> with <code>devices()</code> for your Polkadot.js account that has the subscription.

</li>

</List>
</section>

<Result>

The lesson will be considered completed after sending a successful transaction of buying an IoT subscription and adding one device for it. Transactions should appear in the Polkadot explorer for your account.

You can check your results on [the special checking dapp](https://lk.robonomics.academy/). For authorization on the checking dapp use the same account in Polkadot.js that was used during the course.

</Result>