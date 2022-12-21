---
title: "Lesson #5, Robonomics IoT Subscription Setup"
description: home assistant course
lessonNumber: 6
courseID: 3
metaOptions: [Online Courses, Sovereign Smart Home with Robonomics and Home Assistant]
---


<section class="container__reg">

## What's this about

Robonomics IoT Subscription allows users to use the all functions of parachain for a certain period without paying the standard transaction fees. By activating the subscription, the devices will have the right to send priority transactions.

In this lesson, you will create the necessary smart home security accounts and purchase an IoT subscription.

</section>

<section class="container__reg">

## Instructions

<List type="numbers">

<li>

Creating Owner and Controller Parachain Accounts

<List>

<li>
To control Home Assistant with Robonomics, you need 2 accounts on the Robonomics parachain. For one of the accounts (<code>SUB_OWNER</code>), you will buy a Robonomics subscription. Second account (<code>SUB_ADMIN</code>) will control all Home Assistant processes (such as telemetry) and will give access to other users. These accounts will provide security for your Home Assistant. Both accounts must be created with *ed25519* encryption.

Go to [Robonomics Parachain app](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) on Polkadot / Substrate Portal. Check the top left corner to ensure that you are connected to Robonomics Parachain.

</li>

<li>

Go to <code>Accounts</code> -> <code>Accounts</code> and press the <code>Add account</code> button.


<LessonImages src="smart-house-course/lesson-5-1.jpeg" alt="tutorial"/>
</li>

<li>

You should see the following popup menu with account see:

<LessonImages src="smart-house-course/lesson-5-2.jpg" alt="tutorial" imageClasses="mb"/>


It has two forms *Mnemonic* (human-readable) and *Raw* (a sequence of digits and letters). Save the mnemonic seed phrase securely.

</li>

<li>

Open *‘Advanced creation options’*, change the crypto type of creating account to *'Edwards - ed25519'* and press <code>Next</code>

<LessonImages src="smart-house-course/lesson-5-3.jpg" alt="tutorial"/>
</li>

<li>

In the next menu, you need to set the account name and password. Give it a name <code>SUB_OWNER</code> for convenience.

<LessonImages src="smart-house-course/lesson-5-4.jpeg" alt="tutorial"/>
</li>

<li>

Clicking on the <code>Next</code> button will take you to the last window. Click <code>Save</code> to finish account creation. It will also generate a backup JSON-files that you should safely store. You can later use this file to recover your account if you remember the password.

</li>

<li>

Repeat steps 2-6 for an account with the name <code>SUB_ADMIN</code>.

</li>
</List>
</li>

<li>

Adding Accounts to Polkadot.js Extension

<List>

<li>

For convenience, you should use the Polkadot.js extension and add these newly created accounts to it. For an ed25519 account you can do that only with a backup JSON file. You can use the files saved when you created the accounts.

</li>

<li>

You can get these files again by creating a backup file of the account. Press on three dots on your account, choose <code>Create a backup file for this account</code> and type in your password.

<LessonImages src="smart-house-course/lesson-5-5.jpeg" alt="tutorial"/>
</li>

<li>

Open an extension and press <code>+</code> button on the top right, then choose <code>Restore account from backup JSON file</code>.


<LessonImages src="smart-house-course/lesson-5-6.jpeg" alt="tutorial"/>
</li>

<li>

In an opened window upload the JSON file, enter the password and press <code>Restore</code>

<LessonImages src="smart-house-course/lesson-5-7.jpeg" alt="tutorial"/>

</li>
</List>
</li>

<li>

Purchasing Robonomics Subscription

<List>

<li>

For this step, you must have a sufficient amount of XRT tokens (minimum 2-3 XRTs) in your <code>SUB_OWNER</code> account.


Go to Robonomics dapp to the [subscription page](https://dapp.robonomics.network/#/subscription) and press <code>connect account</code> on the right sidebar.

<LessonImages src="smart-house-course/lesson-5-8.jpeg" alt="tutorial"/>
</li>

<li>

In the following popup menu connect Polkadot.js extension. You will see your account address with balance.

<LessonImages src="smart-house-course/lesson-5-9.jpeg" alt="tutorial"/>
</li>

<li>

Before purchasing, check that you chose the <code>SUB_OWNER</code> account. Press the address profile icon, you should see the <code>SUB_OWNER</code> account under the <code>Check owner account</code> field.

<LessonImages src="smart-house-course/lesson-5-10.jpeg" alt="tutorial"/>
</li>

<li>

Finally, press the <code>SUBMIT</code> button and enter the password for your account. After that wait until the activation process is completed. You will see the state of your subscription after a while.

If no subscriptions are available, **please contact** the Robonomics team.

<LessonImages src="smart-house-course/lesson-5-11.jpeg" alt="tutorial"/>
</li>
</List>
</li>

<li>

Adding Account to Subscription

<List>

<li>

You need to add a <code>SUB_ADMIN</code> account to the **access list**. Open extension and click on the icon near the account name. It will copy the account address.

<LessonImages src="smart-house-course/lesson-5-12.jpeg" alt="tutorial"/>

</li>

<li>

Paste this address to the <code>Robonomics parachain address</code> field in the **Manage access** part.

<LessonImages src="smart-house-course/lesson-5-13.jpeg" alt="tutorial" imageClasses="mb"/>

Give it a name and press the <code>+</code> button. Enter your <code>SUB_OWNER</code> password in the popup window and wait until the activation process is completed.

</li>

<li>

Repeat steps 1 and 2 for the <code>SUB_OWNER</code> account.
</li>
</List>
</li>
</List>
</section>
