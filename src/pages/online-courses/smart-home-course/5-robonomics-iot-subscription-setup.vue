<template>
  
  <LayoutCourse courseId="3" lessonId="6">
  
  
    <MetaInfo
        pageTitle = "Lesson #5, Robonomics IoT Subscription Setup"
        pageDescription = "lesson description"
        :pageImage = "'/og/smart-home-course/5-robonomics-iot-subscription-setup'"
      />
  
  
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts("What's this about")}}</h2>
        <p>{{$ts("Robonomics IoT Subscription allows users to use the all functions of parachain for a certain period without paying the standard transaction fees. By activating the subscription, the devices will have the right to send priority transactions.")}}
        </p>
        <p>{{$ts('In this lesson, you will create the necessary smart home security accounts and purchase an IoT subscription.')}}</p>
      </section>

      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('Creating Owner and Controller Parachain Accounts')}}</p>
            <List>
              <li>
                <p>{{$ts('To control Home Assistant with Robonomics, you need 2 accounts on the Robonomics parachain. For one of the accounts (')}} <code>SUB_OWNER</code> {{$ts('), you will buy a Robonomics subscription. Second account (')}} <code>SUB_ADMIN</code> {{$ts(') will control all Home Assistant processes (such as telemetry) and will give access to other users. These accounts will provide security for your Home Assistant. Both accounts must be created with')}} <span class="italic">ed25519</span> {{$ts('encryption')}}.</p>
                <p>{{$ts('Go to')}} <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/">{{$ts('Robonomics Parachain app')}}</g-link> {{$ts('on Polkadot / Substrate Portal.')}} <span class="bold">{{$ts('Check the top left corner to ensure that you are connected to Robonomics Parachain.')}}</span></p>
              </li>
              <li>
                <p>{{$ts('Go to')}} <span class="bold">Accounts</span> -> <span class="bold">Accounts</span> {{$ts('and press the')}} <code>Add account</code> {{$ts('button')}}.</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-1.jpeg')"  src="../../../assets/images/smart-house-course/lesson-5-1.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('You should see the following popup menu with account seed')}}:</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-2.jpg')"  src="../../../assets/images/smart-house-course/lesson-5-2.jpg" alt="pic"></g-image>
                <p>
                  {{$ts('It has two forms')}}: <span class="italic">{{$ts('Mnemonic')}}</span> {{$ts('(human-readable) and')}} <span class="italic">{{$ts('Raw')}}</span> {{$ts('(a sequence of digits and letters). Save the mnemonic seed phrase securely.')}}
                </p>
              </li>
              <li>
                <p>{{$ts('Open')}} <span class="italic">‘Advanced creation options’,</span> {{$ts('change the crypto type of creating account to')}} <span class="italic">'Edwards - ed25519'</span> {{$ts('and press')}} <code>Next</code></p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-3.jpg')"  src="../../../assets/images/smart-house-course/lesson-5-3.jpg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('In the next menu, you need to set the account name and password')}}. {{$ts('Give it a name')}} <code>SUB_OWNER</code> {{$ts('for convenience')}}.</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-4.jpeg')"  src="../../../assets/images/smart-house-course/lesson-5-4.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Clicking on the')}} <code>Next</code> {{$ts('button will take you to the last window. Click')}} <code>Save</code> {{$ts('to finish account creation. It will also generate a backup JSON-files that you should safely store. You can later use this file to recover your account if you remember the password.')}}</p>
              </li>
              <li>
                <p>{{$ts('Repeat steps 2-6 for an account with the name')}} <code>SUB_ADMIN</code>.</p>
              </li>
            </List>
          </li>
          <li>
            <p>
              {{$ts('Adding Accounts to Polkadot.js Extension')}}
            </p>
            <List>
              <li>
                <p>
                  {{$ts('For convenience, you should use the Polkadot.js extension and add these newly created accounts to it. For an ed25519 account you can do that only with a backup JSON file. You can use the files saved when you created the accounts')}}.
                </p>
                <p>{{$ts('You can get these files again by creating a backup file of the account. Press on three dots on your account, choose')}} <code>Create a backup file for this account</code> {{$ts('and type in your password')}}.</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-5.jpeg')"  src="../../../assets/images/smart-house-course/lesson-5-5.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Open an extension and press')}} <code>+</code> {{$ts('button on the top right, then choose')}} <code>Restore account from backup JSON file</code>.</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-6.jpeg')"  src="../../../assets/images/smart-house-course/lesson-5-6.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('In an opened window upload the JSON file, enter the password and press')}} <code>Restore</code></p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-7.jpeg')"  src="../../../assets/images/smart-house-course/lesson-5-7.jpeg" alt="pic"></g-image>
              </li>
            </List>
          </li>
          <li>
            <p>{{$ts('Purchasing Robonomics Subscription')}}</p>
            <List>
              <li>
                <p>{{$ts('For this step, you must have a sufficient amount of XRT tokens (minimum 2-3 XRTs) in your')}} <code>SUB_OWNER</code> {{$ts('account')}}.</p>
                <p>
                  {{$ts('Go to Robonomics dapp to the')}} <g-link to="https://dapp.robonomics.network/#/subscription">subscription page</g-link> {{$ts('and press')}} <code>connect account</code> {{$ts('on the right sidebar')}}.
                </p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-8.jpeg')"  src="../../../assets/images/smart-house-course/lesson-5-8.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('In the following popup menu connect Polkadot.js extension. You will see your account address with balance.')}}</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-9.jpeg')"  src="../../../assets/images/smart-house-course/lesson-5-9.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Before purchasing, check that you chose the')}} <code>SUB_OWNER</code> {{$ts('account. Press the address profile icon, you should see the')}} <code>SUB_OWNER</code> {{$ts('account under the')}} <code>Check owner account</code> {{$ts('field')}}.</p>
                <g-image  
                class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-10.jpeg')" src="../../../assets/images/smart-house-course/lesson-5-10.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Finally, press the')}} <code>SUBMIT</code> {{$ts('button and enter the password for your account. After that wait until the activation process is completed. You will see the state of your subscription after a while.')}}</p>
                <p>{{$ts('If no subscriptions are available,')}} <span class="bold">{{$ts('please contact')}}</span> {{$ts('the Robonomics team')}}.</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-11.jpeg')"  src="../../../assets/images/smart-house-course/lesson-5-11.jpeg" alt="pic"></g-image>
              </li>
            </List>
          </li>
          <li>
            {{$ts('Adding Account to Subscription')}}
            <List>
              <li>
                <p>{{$ts('You need to add a')}} <code>SUB_ADMIN</code> {{$ts('account to the')}} <span class="bold">{{$ts('access list')}}</span>. {{$ts('Open extension and click on the icon near the account name. It will copy the account address.')}}</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-12.jpeg')"  src="../../../assets/images/smart-house-course/lesson-5-12.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Paste this address to the')}} <code>Robonomics parachain address</code> {{$ts('field in the')}} <span class="bold">{{$ts('Manage access')}}</span> {{$ts('part.')}}</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-5-13.jpeg')"  src="../../../assets/images/smart-house-course/lesson-5-13.jpeg" alt="pic"></g-image>
                <p>{{$ts('Give it a name and press the')}} <code>+</code> {{$ts('button. Enter your')}} <code>SUB_OWNER</code> {{$ts('password in the popup window and wait until the activation process is completed')}}.</p>
              </li>
              <li>
                <p>{{$ts('Repeat steps 1 and 2 for the')}} <code>SUB_OWNER</code> {{$ts('account')}}.</p>
              </li>
            </List>
          </li>
        </List>
      </section>
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
  
  <style>
  
  </style>