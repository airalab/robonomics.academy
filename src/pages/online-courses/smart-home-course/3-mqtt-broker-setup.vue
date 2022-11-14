<template>
  
  <LayoutCourse courseId="3" lessonId="3">
  
  
    <MetaInfo
        pageTitle = "Lesson #3, MQTT Broker Setup"
        pageDescription = "lesson description"
        :pageImage = "'/og/smart-home-course/3-mqtt-broker-setup'"
      />
  
  
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts("What's this about")}}</h2>
        <p>{{$ts("After finishing the configuration of Raspberry Pi, the next step is to install MQTT Broker on the Raspberry Pi. As mentioned above, the Broker is responsible for message routing between different MQTT clients. You will install and configure Eclipse Mosquitto, an open source MQTT broker.")}}
        </p>
        <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-3-1.jpg')"  src="../../../assets/images/smart-house-course/lesson-3-1.jpg" alt="scheme"></g-image>
        <p class="p--mt">{{$ts('In addition, you will complete the Home Assistant setup and add MQTT integration to it.')}}</p>
      </section>
      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('Mosquitto Broker Installation')}}</p>
            <List>
              <li>
                <p>
                  {{$ts('Install')}} <g-link to="https://mosquitto.org/">{{$ts('Mosquitto Broker')}}</g-link> {{$ts('on your Raspberry Pi:')}}
                </p>
                <prism language="bash">sudo apt install mosquitto mosquitto-clients -y</prism>
              </li>
              <li>
                <p>
                  {{$ts('Configure username (use any')}} <code>USERNAME</code>  {{$ts('you want) and password (you will be asked to enter the password after the command):')}}
                </p>
                <prism language="bash">sudo mosquitto_passwd -c /etc/mosquitto/passwd USERNAME</prism>
              </li>
              <li>
                <p>
                  {{$ts(`Edit configuration file:`)}}
                </p>
                <prism language="bash">sudo nano /etc/mosquitto/conf.d/local.conf</prism>
                <p>
                  {{$ts('Add the following to the file:')}}
                </p>

                <prism language="bash">
listener 1883
allow_anonymous false
password_file /etc/mosquitto/passwd
                </prism>
              </li>
              <li>
                <p>{{$ts('Save the file  and restart the service:')}}</p>
                <prism language="bash">sudo systemctl restart mosquitto</prism>
              </li>
              <li>
                <p>{{$ts('Finally, check the broker status:')}}</p>
                <prism language="bash">systemctl status mosquitto</prism>
                <p>{{$ts('You should see something like this:')}}</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-3-2.jpg')"  src="../../../assets/images/smart-house-course/lesson-3-2.jpg" alt="code"></g-image>
              </li>
            </List>
          </li>
          <li>
            <p>{{$ts('Setting up Home Assistant and MQTT')}}</p>
            <List>
              <li>
                <p>{{$ts('Open the web browser and go to')}} <code>http://%RASPBERRY_IP_ADDRESS%:8123</code>. (<code>%RASPBERRY_IP_ADDRESS%</code> {{$ts('is the same IP address which you found in the previous lesson). Be aware, that Raspberry Pi address may change in time due router settings.')}}</p>
                <p>{{$ts('On the first page, enter any name, username, password you want and click on')}} "<code>CREATE ACCOUNT</code>"</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-3-3.jpeg')"  src="../../../assets/images/smart-house-course/lesson-3-3.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Next, enter a name for your home and set your location and unit system. Click')}} "<code>DETECT</code>" {{$ts('to find your location and set your time zone and unit system based on that location. If you’d rather not send your location, you can set these values manually.')}}</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-3-4.jpeg')"  src="../../../assets/images/smart-house-course/lesson-3-4.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('On the next screen, Home Assistant will show any devices that it has discovered on your network. Don’t worry if you see fewer items than what is shown below; you can always manually add devices later. For now, just click')}} <code>FINISH</code> {{$ts('and you will be on the main Home Assistant screen.')}}</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-3-5.jpeg')"  src="../../../assets/images/smart-house-course/lesson-3-5.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Now we need to install a MQTT client. Go to')}} <code>Settings</code> -> <code>Devices & Services.</code></p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-3-6.jpeg')"  src="../../../assets/images/smart-house-course/lesson-3-6.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Press')}} <code>ADD INTEGRATION</code> {{$ts('button at the right bottom corner. In the opened window find')}} <code>MQTT</code>:</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-3-7.jpeg')"  src="../../../assets/images/smart-house-course/lesson-3-7.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Select MQTT and set up your broker address — ')}} <code>localhost</code>, {{$ts('port —')}} <code>1883</code> {{$ts('and your username and password (the same which you created earlier for Mosquitto Broker) then press')}} <code>submit</code>.</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-3-8.jpeg')"  src="../../../assets/images/smart-house-course/lesson-3-8.jpeg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Press on three dots on the MQTT integration section, select')}} <code>System Options</code> {{$ts('and check if automatically adding new devices is enabled.')}}</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-3-9.jpeg')"  src="../../../assets/images/smart-house-course/lesson-3-9.jpeg" alt="pic"></g-image>
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
  
  <style scoped>
    img {
      display: block;
      margin: 0 auto;
    }

    .p--mt {
      margin-top: var(--gap)
    }
  </style>