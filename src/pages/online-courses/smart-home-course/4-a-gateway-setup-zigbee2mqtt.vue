<template>
  
  <LayoutCourse courseId="3" lessonId="4">
  
  
    <MetaInfo
        pageTitle = "Lesson #4a, Gateway Setup: Zigbee2MQTT"
        pageDescription = "lesson description"
        :pageImage = "'/og/smart-home-course/4-a-gateway-setup-zigbee2mqtt'"
      />
  
  
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts("What's this about")}}</h2>
        <p>{{$ts("This is a scenario setup for connecting devices using the Zigbee adapter and the Zigbee2MQTT bridge. If you have the")}} <g-link to="https://jethome.ru/z2/?sl=en">JetHome USB JetStick Z2</g-link> {{$ts('(which has all of the necessary firmware), you can simply proceed with these instructions. However, if you have another adapter, the first thing you need to do is to flash it with Zigbee2MQTT software. You can find instructions for your device')}} <g-link to="https://www.zigbee2mqtt.io/guide/adapters/">{{$ts('here')}}</g-link>
        </p>
        <p>{{$ts('You will also need a smart device to test its connection to Home Assistant.')}}</p>
      </section>
      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('Connecting and Сonfiguring the Adapter')}}</p>
            <List>
              <li>
                <p>
                  {{$ts('Connect the Zigbee adapter to Raspberry Pi. Then you need to find the location of the stick. For this type in the next command:')}}
                </p>
                <prism language="bash">ls -l /dev/serial/by-id</prism>
                <p>{{$ts('Output should look like')}}</p>
                <prism language="bash" class="big-code">
ubuntu@ubuntu:~$ ls -l /dev/serial/by-id
total 0
lrwxrwxrwx 1 root root 13 Oct 10 01:44 usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0 -> ../../ttyUSB0
                </prism>
                <p>{{$ts('In this example stick connection directory is — ')}} <code>ttyUSB0</code>.</p>
              </li>
              <li>
                <p>
                  {{$ts('Edit the')}} <code>configuration.yaml</code>  {{$ts('file before starting Zigbee2MQTT:')}}
                </p>
                <prism language="bash">nano /opt/zigbee2mqtt/data/configuration.yaml</prism>
                <p>{{$ts('The basic configuration needs a few adjustments. Change the following statements:')}}</p>
                <p> - <code class="bold">homeassistant:</code> {{$ts('to')}} <code>true</code> {{$ts('it will automatically connect sensors to Home Assistant;')}}</p>
                <p> - {{$ts('uncomment')}} <code class="bold">user</code> {{$ts('and')}} <code class="bold">password</code> {{$ts('under')}} <code>mqtt</code> {{$ts('and enter your username and password (as a string, with quotes) from MQTT Broker;')}}</p>
                <p> - {{$ts('change port in')}} <code class="bold">serial</code> ->  <code class="bold">port</code> {{$ts('to stick connection directory. In this example — ')}} <code>/dev/ttyUSB0.</code></p>
                <p>{{$ts('Adjusted configuration file should look like:')}}</p>
                <prism language="bash"># Home Assistant integration (MQTT discovery)
homeassistant: true

# allow new devices to join
permit_join: true

# MQTT settings
mqtt:
  # MQTT base topic for zigbee2mqtt MQTT messages
  base_topic: zigbee2mqtt
  # MQTT server URL
  server: 'mqtt://localhost'
  # MQTT server authentication, uncomment if required:
  user: {YOUR_USERNAME}
  password: {YOUR_PASSWORD}

# Serial settings
serial:
  # Location of CC2531 USB sniffer
  port: /dev/{YOUR_PORT}
                </prism>
                <p class="bold">{{$ts('Extra:')}}</p>
                <p>{{$ts('If you already have an active Zigbee adapter or gateway in your home, and you are now configuring another stick, then they will conflict with each other. To solve this problem you need to change the channel on the new device. For this add the following strings to the end of configuration file:')}}</p>
                <prism language="bash" class="big-code">advanced:
  # Optional: ZigBee channel, changing requires re-pairing of all devices. (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid Problems)
  # (default: 11)
  channel: 15
                </prism>
              </li>
              <li>
                <p>
                  {{$ts(`Start Zigbee2MQTT:`)}}
                </p>
                <prism language="bash">cd /opt/zigbee2mqtt
npm start
                </prism>
                <p>
                  {{$ts('If started successfully, you will see something like:')}}
                </p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-a-1.jpg')"  src="../../../assets/images/smart-house-course/lesson-4-a-1.jpg" alt="code"></g-image>
              </li>
            </List>
          </li>
          <li>
            {{$ts('Pairing Device')}}
            <List>
              <li>
                <p>{{$ts(`It's time to connect your smart device. The most common way to switch a device to connect mode is to hold its power button or switch them on/off 5 times. Make sure Zigbee2MQTT is running.`)}}</p>
                <p>{{$ts('When the device connects, you should see a message like:')}}</p>
                <prism language="bash" class="big-code">Zigbee2MQTT:info  2022-07-29 14:44:39: Successfully interviewed '0x00158d0003eeeacf', device has successfully been paired</prism>
                <p>{{$ts('Remember the ID of the sensor: in this example —')}} <code>0x00158d0003eeeacf</code>.</p>
                <p>{{$ts('Now you should see this sensor with ID in your Home Assistant WebUI. Go to')}} <code>Setting</code> -> <code>Devices & Services</code> -> <code>Devices</code> {{$ts('to check it:')}}</p>
                <g-image  class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-a-2.jpg')"  src="../../../assets/images/smart-house-course/lesson-4-a-2.jpg" alt="code"></g-image>
                <p>{{$ts('After adding all the sensors, you can stop the program with')}} <code>Ctrl+C</code>. {{$ts('If you don’t want to add any more devices, you can open the configuration file again and set')}} <code>permit_join:</code> {{$ts('to')}} <code>false</code>.</p>
              </li>
              <li>
                <p>{{$ts('Now you need to create a service. Create the file:')}}</p>
                <prism language="bash">sudo nano /etc/systemd/system/zigbee2mqtt.service</prism>
                <p>{{$ts('Add the following to this file:')}}</p>
                <prism language="bash">[Unit]
Description=zigbee2mqtt
After=network.target

[Service]
ExecStart=/usr/bin/npm start
WorkingDirectory=/opt/zigbee2mqtt
StandardOutput=inherit
StandardError=inherit
Restart=always
User=ubuntu

[Install]
WantedBy=multi-user.target
                </prism>
              </li>
              <li>
                <p>{{$ts('Verify that the configuration works:')}}</p>
                <prism language="bash">sudo systemctl start zigbee2mqtt
systemctl status zigbee2mqtt.service
                </prism>
                <p>{{$ts('Output should look like:')}}</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-a-3.jpg')"  src="../../../assets/images/smart-house-course/lesson-4-a-3.jpg" alt="code"></g-image>
              </li>
              <li>
                <p>{{$ts('Enable the service to start Zigbee2MQTT automatically on boot:')}}</p>
                <prism language="bash">sudo systemctl enable zigbee2mqtt.service</prism>
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