---
title: "Lesson #6, Robonomics Integration Setup"
description: home assistant course
lessonNumber: 7
courseID: 3
metaOptions: [Online Courses, Sovereign Smart Home with Robonomics and Home Assistant]
---


<section class="container__reg">

## What's this about

In this lesson, you will add Robonomics to Home Assistant and create an account associated with the subscription. This integration allows Home Assistant to use Robonomics parachain functions, first of all, send encrypted smart home data to a decentralized cloud.

To do this, the parachain has a <code>datalog()</code> function that allows you to save encrypted device data to the blockchain. To be more precise, the integration uses IPFS to store data and then send IPFS hashes to the datalog function, and then to the blockchain.

</section>

<section class="container__reg">

## Instructions

<List type="numbers">

<li>

Adding Robonomics to Home Assistant

<List>

<li>

In the web interface of Home Assistant go to <code>Settings</code>-><code>Device & Services</code> and press <code>ADD INTEGRATION</code>. Search for <code>Robonomics</code>.

<LessonVideo controls loop src="https://crustipfs.live/ipfs/QmQp66J943zbF6iFdkKQpBikSbm9jV9La25bivKd7cz6fD" />

</li>

<li>

Click on Robonomics and fill in the configuration: 

\- Add seed from the <code>SUB_CONTROLLER</code> account to admin account seed

\- Add the public address of the <code>SUB_OWNER</code> account (which you previously created) to the subscription owner address

\- Set the interval of data sending (by default it is 10 minutes)

\- (Optional) You can add credentials for pinning service Pinata to spread your data wider over the IPFS network

</li>

<li>

Press <code>SUBMIT</code> after finishing the configuration. If you filled in everything correctly, you will see the Success window.

</li>
</List>
</li>

<li>

Adding Users in Robonomics Dapp 

<List>

<li>

You need to create a separate user for Home Assistant, who will control the smart home devices. You cannot use previously created accounts because <code>SUB_OWNER</code> and <code>SUB_CONTROLLER</code> provide security, and the first user you created when you first started Home Assistant does not have a Robonomics Parachain account.

</li>

<li>
Start with creating an account on Robonomics Parachain, as you did in the previous lesson.
</li>

<li>

Add this account to the subscription in the [dapp](https://dapp.robonomics.network/#/subscription/devices). Now there should be three addresses in the access list: <code>SUB_OWNER</code>, <code>SUB_CONTROLLER</code> and <code>USER</code>.

<LessonVideo controls loop src="https://crustipfs.live/ipfs/QmSxzram7CF4SXpVgEyv98XetjYsxNFQY2GY4PfyhJak7H" />

</li>

<li>

Go to the dapp service called [Home Assistant Account](https://dapp.robonomics.network/#/home-assistant). Choose the account you've just created at the right sidebar (check that you have chosen the intended account by pressing the profile icon).

Enter the <code>USER</code> seed in the required field. Add <code>SUB_OWNER</code> and <code>SUB_CONTROLLER</code> addresses in the administrator credits fields. If everything is correct, you will see verification status <code>VERIFIED</code>.

</li>

<li>

Create a password for a new user which you have just registered and then confirm the transaction, that will now be without fee due to the subscription. Later you can restore the password in the <code>Restore</code> tab.

<LessonVideo controls loop src="https://crustipfs.live/ipfs/QmW2TXuwCYXzgcRfEUx4imZU5ZerEzkuD5P53u9g2WnxDh" />

</li>

<li>

After the registration process, log in to Home Assistant with your user address as login and a newly-created password. Now you can use Robonomics dapp to control your home through Robonomics.

</li>
</List>
</li>
</List>
</section>