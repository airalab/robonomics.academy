<template>
  <LayoutCourse courseId="3">

    <MetaInfo
      pageTitle = "Sovereign Smart Home with Robonomics and Home Assistant"
      pageDescription = "In this course, you will go through all the steps required in order to build your own sovereign smart home, the main advantage of which is the safety / privacy of user data."
      :pageImage = "'/og/smart-home-course/cover'"
      coursePage
    />

    <section class="container__narrow text__hyphened">
      <h2>{{$ts("About the course")}}</h2>
      <p>{{$ts('In this course, you will go through all the steps required in order to build your own sovereign smart home, the main advantage of which is the safety / privacy of user data. This problem is becoming increasingly relevant  due to the spread of smart homes. The modern IoT market provides  the average user a large selection of smart home solutions, but they are all tied to centralized cloud providers or require an expensive proprietary gateway for connecting devices. As a result, you as a user are always dependent on the hardware and infrastructure vendor to run your smart system. At the same time, your smart home cannot be truly smart without cloud statistics and analytics.')}}</p>
      <h3>{{$ts('We see two main problems with this smart solution:')}}</h3>
      <List class="course-list--mb">
        <li>
          {{$ts('You have no control over what data you share with the vendor or third party.')}}
        </li>
        <li>
          {{$ts('Your smart home is vulnerable to shutdowns of centralized cloud servers.')}}
        </li>
      </List>
      <p>{{$ts('At the dawn of the development of smart homes, it was difficult to imagine a situation where the average user could easily deploy their own local home automation system. But now, thanks to widespread IoT standards, cheap hardware and open-source home automation systems, this vision has become affordable. And thanks to  the use of a decentralized cloud based on web3 technologies, it is now possible to provide secure remote access to smart devices')}}.</p>
    </section>

    <section class="container__narrow text__hyphened">
      <h2>{{$ts('What will you learn:')}}</h2>
      <List type="plus">
        <li>{{$ts('Knowledge of smart home architecture based on common protocols and developments')}}</li>
        <li>{{$ts('Practical skills for setting up and connecting smart home equipment')}}</li>
        <li>{{$ts('Basic skills for using the Robonomics parachain for IoT')}}</li>
      </List>
    </section>

    <section class="container__narrow text__hyphened">
      <h2>{{$ts('Requirements:')}}</h2>
      <List>
        <li>{{$ts('Raspberry Pi 4 (at least 2 GB RAM)')}}</li>
        <li>{{$ts('SD card (minimum 16 GB) and SD adapter')}}</li>
        <li>{{$ts('Zigbee smart devices (any from')}} <g-link to="https://slsys.io/en/action/supported_devices.html">{{$ts('supported devices')}}</g-link>)</li>
        <li>{{$ts('Zigbee adapter')}} <g-link to="https://jethome.ru/z2/?sl=en">{{$ts('JetHome USB JetStick Z2')}}</g-link> ({{$ts('or')}} <g-link to="https://www.zigbee2mqtt.io/guide/adapters/">{{$ts('one of supported')}}</g-link>) {{$ts('or')}} <g-link to="https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01">{{$ts('Robonomics SLS Gateway')}}</g-link></li>
        <li>{{$ts('Preferably: computer with UNIX-like operating system.')}}</li>
        <li><span class="accent">{{$ts('Attention')}}</span>: {{$ts('to flash the SLS Gateway, you will need a Windows operating system.')}}</li>
      </List>
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
  .course-list--mb {
    margin-bottom: var(--gap)
  }
</style>