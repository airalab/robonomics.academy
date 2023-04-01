---
title: "Lesson #5, Robonomics IoT Subscription Setup"
description: home assistant course
lessonNumber: 6
courseID: 3
metaOptions: [Online Courses, Sovereign Smart Home with Robonomics and Home Assistant]
---


<section class="container__reg">

## What's this about

Robonomics IoT Subscription allows users to use all functions of the parachain for a certain period without paying the standard transaction fees. By activating the subscription, devices will be able to send transactions in priority.

In this lesson, you will create the necessary smart home security accounts and purchase an IoT subscription.

</section>

<section class="container__reg">

## Theory

An IoT subscription, as well as the method it is purchased and managed, is implemented using an <code>rws</code> pallet, which contains all the necessary functions. In general, subscriptions in Robonomics are sold with an auction model, which uses an <code>rws.startAuction()</code> extrinsic to create an auction for a specific subscription ID. Users can access the auction by ID and bid using an <code>rws.bid()</code> extrinsic.

After the end of the auction, the address with the winning bid is assigned to the subscription. Now this address will be able to send transactions through the <code>rws.call()</code> extrinsic without fees. However, this does not mean that the address can do this uncontrollably at any time: each subscription has a certain amount of a <code>weight</code> value, which must accumulate before a free transaction can be performed. Some <code>weight</code> value is added to the subscription every block generated in the parachain, due to this, Robonomics regulates the bandwidth of the parachain.

In addition, the owner of the subscription can use the <code>rws.setDevices()</code> extrinsic, which shares the use of the subscription to the specified addresses. At the same time, <code>weight</code> remains the same, so the more addresses in the subscription, the longer each of them will have to wait before sending the free transaction.

To control Home Assistant with Robonomics, you need two accounts on the Robonomics parachain. These accounts will provide security for your Home Assistant.

With one of the accounts (<code>SUB_OWNER</code>), you will buy a Robonomics subscription. This account acts as the main administrator of the IoT subscription, and provides access to Home Assistant to other users (using <code>rws.setDevices()</code>). This account must have some XRT tokens in order to complete subscription purchase transactions.

Second account (<code>SUB_CONTROLLER</code>) will control all Home Assistant processes of devices (such as telemetry). Transactions of your devices will be sent on behalf of the <code>SUB_CONTROLLER</code> account. You (and anyone) will be able to see these transactions in any parachain explorer like [Subscan](https://robonomics.subscan.io/). However, only you will be able to decrypt the contents of these transactions as long as you securely possess the necessary seed phrases.

</section>

<section class="container__reg">

## Instructions

<List type="numbers">

<li>

Creating Owner and Controller Parachain Accounts

<List>

<li>

<robo-academy-note type="warning" title="WARNING">
Both accounts must be created with ed25519 encryption.
</robo-academy-note>

</li>

<li>

Go to [Robonomics Parachain app](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/) on Polkadot / Substrate Portal. Check the top left corner to ensure that you are connected to Robonomics Parachain.

</li>

<li>

Because of using *ed25519* format, you need to create an account using the Polkadot-JS UI and select the required encryption. 

This feature is disabled by default on the Polkadot-JS UI. To enable it, navigate to <code>Settings</code> -> <code>General</code> -> <code>account options</code> and select <code>Allow local in-browser account storage</code> in the drop-down menu <code>in-browser account creation</code>.
 
</li>

<li>

Go to <code>Accounts</code> -> <code>Accounts</code> and press the <code>Add account</code> button. You will see the popup menu with account seed. It has two forms: *Mnemonic* (human-readable) and *Raw* (a sequence of digits and letters).

<LessonVideo  :videos="[{src: 'https://crustipfs.live/ipfs/QmQiJYPYajUJXENX2PzSJMSKGSshyWyPNqugSYxP5eCNvm', type:'mp4'}]" />

</li>

<li>

Open <code>Advanced creation options</code>, change the crypto type of creating account to <code>Edwards - ed25519</code>. Save the mnemonic seed phrase securely and press <code>Next</code>.

</li>

<li>

In the next menu, you need to set the account name and password. Give it a name <code>SUB_OWNER</code> for convenience and press <code>Next</code>.

</li>

<li>

On the last window click <code>Save</code> to finish account creation. It will also generate a backup JSON-files that you should safely store. You can later use this file to recover your account if you remember the password.

</li>

<li>

Repeat these steps for the <code>SUB_CONTROLLER</code> account.

</li>
</List>
</li>

<li>

Adding Accounts to Polkadot.js Extension

<List type="numbers">

<li>

For convenience, you should use the Polkadot.js extension and add these newly created accounts to it. For an ed25519 account you can do that only with a backup JSON file. You can use the files saved when you created the accounts.

You can get these files again by creating a backup file of the account. Press on three dots on your account, choose <code>Create a backup file for this account</code> and type in your password.

<LessonVideo  :videos="[{src: 'https://crustipfs.live/ipfs/QmRd7gztUjWkLF4W2XuJwy5aXBwzNV2aPCU6CQQLvUpSNj', type:'mp4'}]" />

</li>

<li>

Open an extension and press <code>+</code> button on the top right, then choose <code>Restore account from backup JSON file</code>.

</li>

<li>

In an opened window upload the JSON file, enter the password and press <code>Restore</code>

</li>

<li>

Make sure the Robonomics network is selected for accounts in the Polkadot.js extension. On on Polkadot / Substrate Portal go to <code>Setting</code> -> <code>Metadata</code> and click on the <code>Update metadata</code> button. 

<LessonVideo  :videos="[{src: 'https://crustipfs.live/ipfs/QmT5sTNP9t8gpbD4RJJw6ETwG4wiziiChAh2uHHBk9Zsyd', type:'mp4'}]" />

</li>

<li>

Confirm the metadata update in the popup. Now the extension will show the label of the network for which the address is used.

</li>

</List>
</li>

<li>

Activating Robonomics Subscription

<List >

<li>

<robo-academy-note type="okay">
For this step, you must have a sufficient amount of XRT tokens (minimum 2-3 XRTs) in your <code>SUB_OWNER</code> account.
</robo-academy-note>

Go to Robonomics dapp to the [subscription page](https://dapp.robonomics.network/#/subscription) and press <code>connect account</code> on the right sidebar.

<LessonVideo  :videos="[{src: 'https://crustipfs.live/ipfs/QmXrFCajmJgkRDSbshGD3QehjnoyS6jafEPSjHdYkoBHum', type:'mp4'}]" />

</li>

<li>

In the following popup menu connect Polkadot.js extension. You will see your account address with balance.

</li>

<li>

Before purchasing, check that you chose the <code>SUB_OWNER</code> account. Press the address profile icon, you should see the <code>SUB_OWNER</code> account under the <code>Check owner account</code> field.

</li>

<li>

Finally, press the <code>SUBMIT</code> button and enter the password for your account. After that wait until the activation process is completed. You will see the state of your subscription after a while.

If no subscriptions are available, **please contact** the Robonomics team.

</li>
</List>
</li>

<li>

Adding Account to Subscription

<List type="numbers">

<li>

Now you need to add the <code>SUB_CONTROLLER</code> account to **the access list**. Open extension and click on the icon near the account name. It will copy the account address.

<LessonVideo  :videos="[{src: 'https://crustipfs.live/ipfs/QmV1gkwtcXsWv54ov9tuXfcHg7nqs1foM8cRwts4sqnqtX', type:'mp4'}]" />

</li>

<li>

Paste this address to the <code>Robonomics parachain address</code> field in the **Manage access** part.

Give it a name and press the <code>+</code> button. Enter your <code>SUB_OWNER</code> password in the popup window and wait until the activation process is completed.

</li>

<li>

Repeat steps for the <code>SUB_OWNER</code> account.
</li>
</List>
</li>
</List>
</section>
