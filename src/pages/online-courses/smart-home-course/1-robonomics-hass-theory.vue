<template>
  
<LayoutCourse courseId="3" lessonId="1">


  <MetaInfo
      pageTitle = "Lesson #1, Theoretical Briefing"
      pageDescription = "lesson description"
      :pageImage = "'/og/smart-home-course/1-robonomics-hass-theory'"
    />


    <section class="text__hyphened">
      <section class="container__reg">
        <h2>{{$ts('The key components of a sovereign smart home infrastructure are:')}}</h2>
        <List type="numbers">
          <li>
            <p> <g-link to="https://www.raspberrypi.org/">{{$ts('Raspberry Pi')}}</g-link> {{$ts('single board computer we can convert into an IoT hub after installing all the necessary software. The main purpose of the hub is to orchestrate the protocols, networks, applications and various devices of the smart home.')}}</p>
          </li>

          <li>
            <p> <g-link to="https://www.home-assistant.io/">{{$ts('Home Assistant')}}</g-link> {{$ts('open source software which we will install on the Raspberry Pi and it is designed to be a central control system for smart devices. It can automatically scan the network for known devices and allows users to easily configure all necessary automations.')}}</p>
            <p>{{$ts(`Home Assistant communicates with devices and stores their data locally, which unfortunately does  not allow you to control your devices remotely. To solve this problem we use Robonomics Network.`)}}</p>
          </li>

          <li>
            <p> <g-link to="https://robonomics.network/">{{$ts('Robonomics Network')}}</g-link> {{$ts('- a decentralized cloud for secure and reliable control of IoT applications. It uses web3 technologies, which incorporates decentralization and blockchain technologies for the protection of smart devices and their data.')}}</p>
            <p>{{$ts(`The main functionality of Robonomics is implemented based on a blockchain (parachain) of the Polkadot/Kusama ecosystem. Among the main functions of the parachain is the ability to send a command to launch the device and being able to store user data on the blockchain.`)}}</p>
            <p>{{$ts(`By default, each time a user sends a transaction to the parachain, they must pay a fee (in XRT tokens) But the Robonomics parachain has an IoT subscription feature that allows users to send transactions to the parachain, without the fee, for the period of one  month. In the practical section of this course, you will use the subscription method.`)}}</p>
            <p>{{$ts('The interaction between the IoT hub and the Robonomics parachain is accomplished using')}} <g-link to="https://github.com/Multi-Agent-io/Robonomics-interface">{{$ts('robonomics-interface')}}</g-link> {{$ts('— Python library which specializes in interfacing with Robonomics to convenient programming.')}}</p>
          </li>
          
          <li>
            <p><g-link to="https://ipfs.tech/">{{$ts('InterPlanetary File System')}}</g-link> {{$ts('(IPFS) — peer-to-peer software for storing and sharing data in a distributed file system. IPFS is needed in order to avoid storing large files on the blockchain (as it would be too expensive), but instead we can store the file’s  IPFS hashes, which act as links to these files.')}}</p>
            <h3>{{$ts('The presented architecture uses two main protocols for smart devices:')}}</h3>
            <p> - <g-link to="https://csa-iot.org/all-solutions/zigbee/">{{$ts('Zigbee')}}</g-link> {{$ts('is a wireless communication protocol, it is very commonly used for connecting smart devices. It is designed for low power consumption, easability and flexibility of configuration, and supports self-organizing and self-recovering mesh network topology. Thousands of devices are available on the market with Zigbee support, which makes it very attractive for building smart home solutions. To control Zigbee devices you need a gateway that transfers data between the Zigbee network and another network (i.e. Wi-Fi).')}}</p>
            <p> - <g-link to="https://mqtt.org/">{{$ts('Message Queuing Telemetry Transport')}}</g-link> {{$ts('(MQTT) is a publish-subscribe protocol designed to control IoT applications. The protocol is lightweight, requires minimal resources and ensures reliability of message delivery. The protocol is designed for low-bandwidth, high latency, unreliable networks, which make it an excellent option for operating high volumes of sensor messages. MQTT requires a server that runs the MQTT broker (in our case it will work with our  Raspberry Pi). The broker receives all the messages from the MQTT clients and then routes the messages to the appropriate subscribing clients.')}}</p>
            <p>{{$ts('You will explore two scenarios for connecting devices to Home Assistant with Robonomics.')}}</p>
            <p>{{$ts('The first scenario does not use a separate Zigbee gateway to connect devices. Instead, a combination of a')}} <g-link to="https://www.zigbee2mqtt.io/guide/adapters/">{{$ts('Zigbee adapter')}}</g-link> {{$ts('and the')}} <g-link to="https://www.zigbee2mqtt.io/">{{$ts('Zigbee2MQTT')}}</g-link> {{$ts('software is used.')}}</p>
            <figure class="figure clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-1-1.png')">
              <img src="../../../assets/images/smart-house-course/lesson-1-1.png" alt="Architectural scheme" />
              <figcaption>{{$ts('Architectural scheme of the scenario with Zigbee adapter')}}</figcaption>
            </figure>
            <p>
              {{$ts('An adapter (such as the JetHome USB JetStick Z2) connects to the Raspberry Pi and acts as an interface between the computer and the Zigbee radio communication. Zigbee2MQTT is software that allows connecting Zigbee to MQTT networks. It takes messages from the Zigbee network and translates them into easy to use and well structured messages of MQTT.')}}
            </p>
            <p>
              {{$ts('In the second scenario, devices are connected using the')}} <g-link to="https://github.com/slsys/Gateway">{{$ts('SLS Gateway')}}</g-link> {{$ts('based on the ESP32 microcontroller. For ease of use, Robonomics have developed our')}} <g-link to="https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01">{{$ts('own modification')}}</g-link> {{$ts('of the gateway.')}}
            </p>
            <figure class="figure clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-1-2.png')">
              <img src="../../../assets/images/smart-house-course/lesson-1-2.png" alt="Architectural scheme" />
              <figcaption>{{$ts('Architectural scheme of the scenario with SLS Gateway')}}</figcaption>
            </figure>
            <p>{{$ts('The SLS gateway acts as the coordinator of Zigbee protocol messages and allows the use of most of the available Zigbee equipment. For integration with Home Assistant, the MQTT protocol is used.')}}</p>
            <p>{{$ts('Remote control of a smart home is performed using the')}} <g-link to="https://dapp.robonomics.network/">{{$ts('Robonomics decentralized application')}}</g-link> {{$ts(`(dapp), which provides access to parachain functions in a user-friendly way. The security and immutability of user data is ensured on the one hand by sending encrypted data to IPFS (which can only be decrypted by the user's key), and on the other hand by placing the IPFS hash of this data on the blockchain.`)}}</p>
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

<style scoped>
</style>