<template>
  
  <LayoutCourse courseId="3" lessonId="8">
  
  
    <MetaInfo
        pageTitle = "Lesson #7, Get Telemetry of Device with Dapp"
        pageDescription = "lesson description"
        :pageImage = "'/og/smart-home-course/7-get-telemetry-of-device-with-dapp'"
      />
  
  
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts("What's this about")}}</h2>
          <p>{{$ts("In this lesson, you will use the Robonomics service, which queries the telemetry of smart home devices. This allows you to receive data from the Home Assistant remotely.")}}
          </p>
      </section>
      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
          <List type="numbers">
            <li>
              <p>{{$ts('Go to dapp and choose')}} <g-link to="https://dapp.robonomics.network/#/smarthome-telemetry">{{$ts('SmartHome Telemetry')}}</g-link> {{$ts('service')}}. {{$ts('You should see the next:')}}</p>
              <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-7-1.png')"  src="../../../assets/images/smart-house-course/lesson-7-1.png" alt="pic"></g-image>
            </li>
            <li>
              <p>
                {{$ts('In the')}} <code>CONTROLLER</code> {{$ts('field enter the')}} <code>SUB_ADMIN</code> {{$ts('address. Insert the seed phrase to encrypt data')}}.
              </p>
            </li>
            <li>
              <p>{{$ts('In the')}} <code>Get telemetry</code> {{$ts('block choose a timestamp from the drop-down list and press the')}} <code>DOWNLOAD TELEMETRY</code> {{$ts('button')}}.</p>
              <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-7-2.png')"  src="../../../assets/images/smart-house-course/lesson-7-2.png" alt="pic"></g-image>
              <p>{{$ts('Telemetry downloading could take some time. After finishing, you will see the information from your sensors:')}}</p>
              <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-7-3.jpeg')"  src="../../../assets/images/smart-house-course/lesson-7-3.jpeg" alt="pic"></g-image>
            </li>
          </List>
      </section>

      <section class="container__reg">
        <h2>{{$ts('Finishing Course')}}</h2>
        <List>
          <li>
            <p>
              {{$ts('Congratulations! You have successfully completed the full setup and deployment of your sovereign smart home. You can now request a course completion certificate from us by visiting our Discord-channal. Write to us in the')}} <g-link to="https://discord.com/channels/803947358492557312/803947358492557315">{{$ts('robonomics-academy')}}</g-link> {{$ts('chat and our representative will contact you.')}}
            </p>
          </li>
          <li>
            <p>{{$ts('Proof of course completion are corresponding transactions that can be verified in')}} <g-link to="https://robonomics.subscan.io/">{{$ts('Polkadot explorer')}}</g-link>.
            {{$ts('These are transactions about buying a subscription, adding a device to a subscription, and sending datalogs from devices.')}}</p>
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