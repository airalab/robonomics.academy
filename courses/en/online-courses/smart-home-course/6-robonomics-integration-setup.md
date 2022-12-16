---
title: "Lesson #6, Robonomics Integration Setup"
description: home assistant course
lessonNumber: 7
courseID: 3
metaOptions: [Online Courses, Sovereign Smart Home with Robonomics and Home Assistant]
---


<section class="container__narrow">

## What's this about

In this lesson, you will add Robonomics to Home Assistant and create an account associated with the subscription. This integration allows Home Assistant to use Robonomics parachain functions, first of all, send encrypted smart home data to a decentralized cloud.

To do this, the parachain has a datalog() function that allows you to save device data to the blockchain. To be more precise, the integration uses IPFS to store data and then send IPFS hashes to the datalog function.

</section>

<section class="container__reg">

## Instructions

<List type="numbers">

<li>

Adding Robonomics to Hass

<List>

<li>

In the web interface of Home Assistant go to <code>Settings/Device & Services</code> and press <code>ADD INTEGRATION</code>. Search for <code>Robonomics</code>.

<LessonImages src="smart-house-course/lesson-6-1.jpeg" alt="tutorial"/>
</li>

<li>

Click on Robonomics and fill in the configuration: 

\- Add seed from the <code>SUB_ADMIN</code> account to admin account seed

\- Add the public address of the <code>SUB_OWNER</code> account (which you previously created) to the subscription owner address

\- Set the interval of data sending (by default it is 10 minutes)

\- (Optional) You can add credentials for pinning service Pinata to spread your data wider over the IPFS network

<LessonImages src="smart-house-course/lesson-6-2.jpeg" alt="tutorial"/>
</li>

<li>

Press <code>SUBMIT</code> after finishing the configuration. If you filled in everything correctly, you will see the Success window.

</li>
</List>
</li>

<li>

Setting up Users in Robonomics Dapp 

<List>

<li>

You need to create a separate user for Home Assistant, who will control the smart home devices. You cannot use previously created accounts because <code>SUB_OWNER</code> and <code>SUB_ADMIN</code> provide security, and the first user you created when you first started Hass does not have a Robonomics Parachain account.

Start with creating an account on Robonomics Parachain, as you did in the previous lesson.
</li>

<li>

Add this account to the subscription in the [dapp](https://dapp.robonomics.network/#/subscription/devices). Now there should be three addresses in the access list: <code>sub-owner</code>, <code>sub-admin</code> and <code>user</code>.

<LessonImages src="smart-house-course/lesson-6-3.jpeg" alt="tutorial"/>
</li>

<li>

Go to the dapp service called [Home Assistant Account](https://dapp.robonomics.network/#/home-assistant). Choose the account you've just created at the right sidebar (check that you have chosen the intended account by pressing the profile icon).

Enter the <code>USER</code> seed in the required field. Add <code>SUB_OWNER</code> and <code>SUB_ADMIN</code> addresses in the administrator credits fields.

<LessonImages src="smart-house-course/lesson-6-4.jpeg" alt="tutorial" imageClasses="mb"/>

If everything is correct, you will see verification status <code>VERIFIED</code>.

</li>

<li>

Create a password for a new user which you have just registered and then confirm the transaction, that will now be without fee due to the subscription. Later you can restore the password in the <code>Restore</code> tab.

<LessonImages src="smart-house-course/lesson-6-5.jpeg" alt="tutorial"/>

</li>

<li>

After the registration process, log in to Home Assistant with your user address as login and a newly-created password. Now you can use Robonomics dapp to control your home through Robonomics.

<LessonImages src="smart-house-course/lesson-6-6.jpeg" alt="tutorial"/>
</li>
</List>
</li>
</List>
</section>