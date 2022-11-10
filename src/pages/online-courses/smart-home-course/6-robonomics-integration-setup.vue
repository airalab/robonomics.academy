<template>
  
  <LayoutCourse courseId="3" lessonId="7">
  
  
    <MetaInfo
        pageTitle = "Lesson #6, Robonomics Integration Setup"
        pageDescription = "lesson description"
        :pageImage = "'/og/smart-home-course/6-robonomics-integration-setup'"
      />
  
  
      <section class="text__hyphened">
        <section class="container__narrow">
          <h2>{{$ts("What's this about")}}</h2>
          <p>{{$ts("In this lesson, you will add Robonomics to Home Assistant and create an account associated with the subscription. This integration allows Home Assistant to use Robonomics parachain functions, first of all, send encrypted smart home data to a decentralized cloud.")}}
          </p>
          <p>{{$ts('To do this, the parachain has a datalog() function that allows you to save device data to the blockchain. To be more precise, the integration uses IPFS to store data and then send IPFS hashes to the datalog function.')}}</p>
        </section>

        <section class="container__reg">
          <h2>{{$ts('Instructions')}}</h2>
          <List type="numbers">
            <li>
              <p>{{$ts('Adding Robonomics to Hass')}}</p>
              <List>
                <li>
                  <p>{{$ts('In the web interface of Home Assistant go to')}} <code>Settings/Device & Services</code> {{$ts('and press')}} <code>ADD INTEGRATION</code>. {{$ts('Search for')}} <code>Robonomics</code>.</p>
                  <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-6-1.jpeg')"  src="../../../assets/images/smart-house-course/lesson-6-1.jpeg" alt="pic"></g-image>
                </li>
                <li>
                  <p>{{$ts('Click on Robonomics and fill in the configuration:')}}</p>
                  <p>
                    - {{$ts('Add seed from the')}} <code>SUB_ADMIN</code> {{$ts('account to admin account seed')}}.
                  </p>
                  <p>
                    - {{$ts('Add the public address of the')}} <code>SUB_OWNER</code> {{$ts('account (which you previously created) to the subscription owner address')}}.
                  </p>
                  <p>
                    - {{$ts('Set the interval of data sending (by default it is 10 minutes)')}}.
                  </p>
                  <p>
                    - {{$ts('(Optional) You can add credentials for pinning service Pinata to spread your data wider over the IPFS network')}}.
                  </p>
                  <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-6-2.jpeg')"  src="../../../assets/images/smart-house-course/lesson-6-2.jpeg" alt="pic"></g-image>
                </li>
                <li>
                  <p>{{$ts('Press')}} <code>SUBMIT</code> {{$ts('after finishing the configuration. If you filled in everything correctly, you will see the Success window.')}}</p>
                </li>
              </List>
            </li>
            <li>
              <p>{{$ts('Setting up Users in Robonomics Dapp')}}</p>
              <List>
                <li>
                  <p>{{$ts('You need to create a separate user for Home Assistant, who will control the smart home devices. You cannot use previously created accounts because')}} <code>SUB_OWNER</code> {{$ts('and')}} <code>SUB_ADMIN</code> {{$ts('provide security, and the first user you created when you first started Hass does not have a Robonomics Parachain account')}}.</p>
                  <p>{{$ts('Start with creating an account on Robonomics Parachain, as you did in the previous lesson.')}}</p>
                </li>
                <li>
                  <p>
                    {{$ts('Add this account to the subscription in the')}} <g-link to="https://dapp.robonomics.network/#/subscription/devices">dapp</g-link>. {{$ts('Now there should be three addresses in the access list:')}} <code>sub-owner</code>, <code>sub-admin</code> {{$ts('and')}} <code>user</code>
                  </p>
                  <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-6-3.jpeg')"  src="../../../assets/images/smart-house-course/lesson-6-3.jpeg" alt="pic"></g-image>
                </li>
                <li>
                  <p>
                    {{$ts('Go to the dapp service called')}} <g-link to="https://dapp.robonomics.network/#/home-assistant">Home Assistant Account</g-link>. {{$ts(`Choose the account you've just created at the right sidebar (check that you have chosen the intended account by pressing the profile icon)`)}}.
                  </p>
                  <p>{{$ts('Enter the')}} <code>USER</code> {{$ts('seed in the required field. Add')}} <code>SUB_OWNER</code> {{$ts('and')}} <code>SUB_ADMIN</code> {{$ts('addresses in the administrator credits fields.')}}</p>
                  <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-6-4.jpeg')"  src="../../../assets/images/smart-house-course/lesson-6-4.jpeg" alt="pic"></g-image>
                  <p>{{$ts('If everything is correct, you will see verification status')}} <code>VERIFIED</code>.</p>
                </li>
                <li>
                  <p>{{$ts('Create a password for a new user which you have just registered and then confirm the transaction, that will now be without fee due to the subscription. Later you can restore the password in the')}} <code>Restore</code> {{$ts('tab')}}.</p>
                  <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-6-5.jpeg')"  src="../../../assets/images/smart-house-course/lesson-6-5.jpeg" alt="pic"></g-image>
                </li>
                <li>
                  <p>{{$ts('After the registration process, log in to Home Assistant with your user address as login and a newly-created password. Now you can use Robonomics dapp to control your home through Robonomics')}}</p>
                  <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-6-6.jpeg')"  src="../../../assets/images/smart-house-course/lesson-6-6.jpeg" alt="pic"></g-image>
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