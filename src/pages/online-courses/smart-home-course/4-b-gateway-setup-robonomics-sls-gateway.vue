<template>
  
  <LayoutCourse courseId="3" lessonId="5">
  
  
    <MetaInfo
        pageTitle = "Lesson #4b, Gateway Setup: Robonomics SLS Gateway"
        pageDescription = "lesson description"
        :pageImage = "'/og/smart-home-course/4-b-gateway-setup-robonomics-sls-gateway'"
      />
  
  
  
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts("What's this about")}}</h2>
        <p>{{$ts("This is a scenario setup for connecting devices using the Robonomics SLS Gateway. Robonomics took design inspiration from the  gateway developed by the")}} <g-link to="https://github.com/slsys/Gateway">{{$ts("Smart Logic System")}}</g-link> {{$ts('project and modified part of the circuitry. You can order a gateway from Robonomics or build your own using our')}} <g-link to="https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01">{{$ts('blueprints')}}</g-link>
        </p>
        <p>{{$ts('You will install the required software for the gateway, configure it and connect it to Home Assistant.')}}</p>
      </section>
      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('Installing Zigbee Microcontroller Firmware')}}</p>
            <List>
              <li>
                <p>
                  {{$ts('First you need to flash the CC2652P microcontroller of the gateway. Set to')}} <code>ON</code> {{$ts('switches 2, 4 and 7 at the bottom part of SLS Gateway, others must be')}} <code class="nowb">OFF</code>.
                </p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-b-4.png')"  src="../../../assets/images/smart-house-course/lesson-4-b-4.png" alt="pic"></g-image>
              </li>
              <li>
                <p>
                  {{$ts('Connect the gateway to your computer with a USB type-A to type-C cable.')}} <span class="accent">{{$ts('Attention')}}:</span>  {{$ts('please use only those types of cables, because at the moment the gateway does not support USB type-С to type-C cable.')}}
                </p>
              </li>
              <li>
                <p>
                  {{$ts(`The CC2652 firmware requires SmartRF Flash Programmer v2 from Texas Instrument.  Download it from`)}} <g-link to="https://www.ti.com/tool/download/FLASH-PROGRAMMER-2">{{$ts('the official site')}}</g-link> {{$ts('and then install')}} <span class="accent bold">{{$ts('Attention')}}:</span> {{$ts('SmartRF Flash Programmer requires Windows operating system')}}
                </p>
              </li>
              <li>
                <p>{{$ts('Download firmware for CC2652P microcontroller from')}} <g-link to="https://github.com/egony/cc2652p_cc1352p_RF-STAR/tree/main/firmware/coordinator">{{$ts('this link')}}</g-link>.</p>
              </li>
              <li>
                <p>{{$ts('Run the program. In the')}} <code>Connected device</code> {{$ts('window select the CC2652P microcontroller, set the path to the firmware, set the flags to')}} <code>Erase, Program, Verify</code> {{$ts('as in the picture and press')}} <code>Start</code>.</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-b-2.png')"  src="../../../assets/images/smart-house-course/lesson-4-b-2.png" alt="pic"></g-image>
                <p>{{$ts('After a successful flashing, you will see a message. After that you can unplug the USB cable.')}}</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-b-3.png')"  src="../../../assets/images/smart-house-course/lesson-4-b-3.png" alt="pic"></g-image>
              </li>
            </List>
          </li>
          <li>
            <p>{{$ts('Installing Microcontroller Firmware')}}</p>
            <List>
              <li>
                <p>{{$ts('Now you need to set up the gateway for software installation. We advise you to update the firmware by connecting the gateway directly to your Raspberry Pi and entering all of the following commands on that device. Set')}} <code>ON</code> {{$ts('switches 1 and 3 at the bottom part of SLS gateway, others must be')}} <code>OFF</code>. {{$ts('Then connect the gateway to your Raspberry Pi the USB type-C port.')}}</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-b-1.jpg')"  src="../../../assets/images/smart-house-course/lesson-4-b-1.jpg" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Connect to the Raspberry Pi via SSH.')}}</p>
                <prism language="bash">ssh ubuntu@192.168.xxx.xxx</prism>
              </li>
              <li>
                <p>{{$ts('Clone the repository with firmware:')}}</p>
                <prism language="bash" class="big-code">git clone https://github.com/airalab/robonomics-hass-utils.git</prism>
              </li>
              <li>
                <p>{{$ts('Go to robonomics-hass-utils/esp_firmware/linux. To flash the SLS gateway you need to run')}} <code>Clear</code> {{$ts('and')}} <code>Flash_16mb</code> {{$ts('scripts')}}.</p>
                <prism language="bash">cd robonomics-hass-utils/esp_firmware/linux
sudo chmod +x Clear.sh
sudo chmod +x Flash_16mb.sh
./Clear.sh
./Flash_16mb.sh
                </prism>
              </li>
              <li class="no-bullet">
                <p class="bold"> - {{$ts('Extra')}}</p>
                <p>{{$ts('If you are experiencing problems updating the gateway firmware, you need to take additional steps:')}}</p>
                <List>
                  <li>
                    <p>{{$ts('Make sure you have the pySerial module installed:')}}</p>
                    <prism language="bash">pip install pyserial</prism>
                  </li>
                  <li>
                    <p>{{$ts('Give your user access rights to the USB port:')}}</p>
                    <prism language="bash">sudo usermod -a -G dialout $USER</prism>
                  </li>
                  <li>
                    <p>{{$ts('In some cases, it is necessary to change the bandwidth setting in the script to update the firmware. Open the')}} <code>Flash_16mb.sh</code> {{$ts('script with the nano editor and change the baud parameter from')}} <code>921600</code> {{$ts('to a smaller value (for example, 115200).')}}</p>
                  </li>
                </List>
              </li>
              <li class="no-bullet">
                <p class="bold">- {{$ts('Extra 2:')}}</p>
                <p>{{$ts('We also provide options for updating the firmware using other operating systems (macOS and Windows). You can find corresponding scripts in a folder, which name depends on your OS.')}}</p>
              </li>
            </List>
          </li>
          <li>
            <p>{{$ts('Setting up the Gateway')}}</p>
            <List>
              <li>
                <p>{{$ts('Set the switches on the back of the gateway to their new  position. Switches 5 (RX Zigbee to ESP) and 6 (TX Zigbee to ESP) must be in the')}} <code>ON</code> {{$ts('position, the others must be')}} <code>OFF</code></p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-b-6.png')"  src="../../../assets/images/smart-house-course/lesson-4-b-6.png" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Connect the type-C power cable. The indicator light in the center should turn green.')}}</p>
              </li>
              <li>
                <p>{{$ts('On the first startup, the gateway will start sharing Wi-Fi with the SSID')}} <code>zgw****</code>. {{$ts('Connect to this network. Keep in mind that the signal may be quite weak, so it is better to keep the SLS gateway closer to your computer.')}}</p>
              </li>
              <li>
                <p>{{$ts('If the connection is successful, the web interface will open (or you can find it on 192.168.1.1 address).')}}</p>
              </li>
              <li>
                <p>
                  {{$ts('Go to the Wi-Fi page and insert your Wi-Fi credentials by entering the user / pass and press')}} <code>Save</code> {{$ts('button. After that press the')}} <code>Reboot</code> {{$ts('button. The gateway will restart and connect to your WI-Fi network.')}}
                </p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-b-7.png')"  src="../../../assets/images/smart-house-course/lesson-4-b-7.png" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Find the local IP of the SLS gateway to access the web interface. For that you can use the')}} <g-link to="https://www.fing.com/products">Fing</g-link> {{$ts('app or')}} <code>arp -a</code> {{$ts('in your terminal or Nmap')}}:</p>
                <prism language="bash">sudo nmap -sP 192.168.xxx.0/24</prism>
                <p>{{$ts('where')}} <code class="bold">xxx</code> {{$ts('is your IP address in the local network. The gateway name should look like this:')}} <code>zgw****</code>. {{$ts('Open the web interface of the gateway by pasting the gateway IP into a browser.')}}</p>
              </li>
              <li>
                <p>{{$ts('Go to')}} <code>Setting</code> -> <code>Hardware</code> {{$ts('and make sure that the settings look like on the image. Correct the settings if necessary and click')}} <code>Save</code> {{$ts('button')}}:</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-b-8.png')"  src="../../../assets/images/smart-house-course/lesson-4-b-8.png" alt="pic"></g-image>
                <p>{{$ts('The table with required values:')}}</p>
                <table>
                  <thead>
                    <tr>
                      <th class="bold">Field</th>
                      <th class="bold">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Zigbee module</td>
                      <td>TI</td>
                    </tr>
                    <tr>
                      <td>Zigbee UART RX</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>Zigbee UART TX</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>Zigbee RST Pin</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>Zigbee BSL Pin</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>Button Mode</td>
                      <td>33 (pullUP - true)</td>
                    </tr>
                    <tr>
                      <td>Number addressable leds</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Led Red (or addr)</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>Led Green</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>Led Blue</td>
                      <td>27</td>
                    </tr>
                    <tr>
                      <td>I2C SDA</td>
                      <td>255</td>
                    </tr>
                    <tr>
                      <td>I2C SCL</td>
                      <td>255</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <p>{{$ts('Make sure that the gateway works properly with the CC2652P microcontroller in the Zigbee info window. DeviceState should be')}} <code>OK</code></p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-b-9.png')"  src="../../../assets/images/smart-house-course/lesson-4-b-9.png" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Reboot the gateway. Choose')}} <code>Actions -> Reboot</code> {{$ts('system at the right top corner')}}.</p>
              </li>
              <li>
                <p>{{$ts('Configure automatically adding devices to Home Assistant. Go to')}} <code>Zigbee -> Config</code> {{$ts('then choose')}} <code>Home Assistant MQTT Discovery</code> {{$ts('and')}} <code>Clear States</code>. {{$ts('Save changes and again reboot SLS gateway.')}}</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-b-10.png')"  src="../../../assets/images/smart-house-course/lesson-4-b-10.png" alt="pic"></g-image>
              </li>
              <li class="no-bullet">
                <p class="bold">- {{$ts('Extra:')}}</p>
                <p>{{$ts('If you already have an active SLS gateway in your home, and you are now configuring another one, then they will conflict with each other. To solve this problem you need to change the channel on the new device.')}}</p>
                <p>{{$ts('To do this, go to')}} <code>Zigbee -> Config</code> {{$ts('and change the channel to another one (e.g. channel 15).')}}</p>
              </li>
              <li>
                <p>{{$ts('Connect your devices by going to')}} <code>Zigbee -> Join</code>. {{$ts('Put your sensors in pairing mode, the most common way to switch a device to connect mode is to hold its power button or switch them on/off for 5 times.')}}</p>
                <p>{{$ts('Press the')}} <code>Enable Join</code> {{$ts('button to start searching Zigbee devices. You will see active sensors.')}}</p>
              </li>
            </List>
          </li>
          <li>
            <p>{{$ts('Connecting SLS Gateway to Home Assistant')}}</p>
            <List>
              <li>
                <p>{{$ts('You need to configure MQTT on SLS Gateway. Come back to your SLS Gateway web interface and go to')}} <code>Settings/Link -> MQTT Setup</code>:</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-b-11.png')"  src="../../../assets/images/smart-house-course/lesson-4-b-11.png" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Add your broker address (address of the Raspberry Pi with Home Assistant in local network, you can find it in')}} <g-link to="https://www.fing.com/products">Fing</g-link> {{$ts('app or with')}} <code>ip -a</code> {{$ts('command on your RPi), port (default is 1883) your broker username and password (which you have created earlier) and the topic name (you can choose any). Also, the Raspberry Pi IP address must be static')}}</p>
                <p>{{$ts(`Don't forget to click`)}} <code>Enable</code> {{$ts('and')}} <code>Retain states</code>.</p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-4-b-12.png')"  src="../../../assets/images/smart-house-course/lesson-4-b-12.png" alt="pic"></g-image>
              </li>
              <li>
                <p>{{$ts('Save changes. Now devices will be automatically shown in Home Assistant.')}}</p>
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

    table {
      border-spacing: 0;
      border-collapse: collapse;
      margin: 0 auto;
      background-color: var(--color-light);
    }

    table thead th {
      text-align: left;
      font-weight: 700;
    }

    table td, table th {
      padding: 0.5rem;
      border: 1px solid var(--color-brown-dark);
      font-size: 90%;
      color: var(--color-text);
    } 

    /* dark-theme */
    @media (prefers-color-scheme: dark) {
      table {
        background: #333;
      }

      table td, table th {
        border: 1px solid var(--color-text);
      }
    }
  </style>