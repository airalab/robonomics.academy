<template>

  <LayoutCourse courseId="3" lessonId="2">


  <MetaInfo
      pageTitle = "Lesson #2, Raspberry Pi Setup"
      pageDescription = "lesson description"
      :pageImage = "'/og/smart-home-course/2-raspberry-pi-setup'"
    />


    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts("What's this about")}}</h2>
        <p>{{$ts("In this lesson, you'll prepare your Raspberry Pi to become an IoT hub. You will sequentially install and configure all the necessary components, namely:")}}
        </p>
        <List>
          <li>
            {{$ts('Ubuntu Linux distribution for Raspberry Pi as a server operating system;')}}
          </li>
          <li>
            {{$ts('Home Assistant packages;')}}
          </li>
          <li>
            {{$ts('IPFS packages;')}}
          </li>
          <li>
            {{$ts('Zigbee2MQTT bridge (for Zigbee adapter scenario);')}}
          </li>
          <li>
            {{$ts('robonomics-interface library.')}}
          </li>
        </List>
      </section>
      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('Preparing and Configuring the Raspberry Pi')}}</p>
            <List>
              <li>
                <p>
                  {{$ts('Download the image of')}} <g-link to="https://ubuntu.com/download/raspberry-pi">{{$ts('64-bit Ubuntu Server 22.04 LTS')}}</g-link> {{$ts('or newer for Raspberry Pi.')}}
                </p>
              </li>
              <li>
                <p>
                  {{$ts('Download and install a tool for writing image files called')}} <g-link to="https://www.balena.io/etcher/">{{$ts('balenaEtcher')}}</g-link> {{$ts('on your computer.')}}
                </p>
                <p>
                  {{$ts('Then, insert the SD card and run the balenaEtcher Imager program. Select the required image (which you just downloaded) as the operating system and ensure to select your SD card from the storage dropdown, and then select')}} <code class="nowb">flash</code> {{$ts('image.')}}
                </p>
                <g-image class="clickable-image" @click="$store.commit('SHOW_IMAGE_POPUP', 'smart-house-course/lesson-2-1.jpeg')" src="../../../assets/images/smart-house-course/lesson-2-1.jpeg" alt="balena"></g-image>
              </li>
              <li>
                <p>
                  {{$ts(`Open the SD card's storage and navigate inside the root folder of the card. The name of the folder should be something similar to`)}} <code>system-boot</code>.
                </p>
                <p>
                  {{$ts('Find the file named')}} <code>network-config</code> {{$ts('and open it in a text editor. Copy the text below, paste it into the file and insert your')}} <span class="bold">{{$ts('Wi-Fi name')}}</span> {{$ts('(SSID) and')}} <span class="bold">{{$ts('Wi-Fi password')}}</span> {{$ts('(with quote marks).')}}
                </p>

                <pre v-highlightjs>
              <code class="json">version: 2
ethernets: 
  eth0:
    dhcp4: true
    optional: true
wifis:
  wlan0:
    dhcp4: true
    optional: true
    access-points:
      "YOUR_WIFI_NAME":
        password: "YOUR_WIFI_PASSWORD"
</code>
                </pre> 
                
                <span class="italic">> {{$ts('Make sure that you input your actual Wi-Fi name and your Wi-Fi password.')}}</span>
                <p>{{$ts('Save the file, insert the SD card into the Raspberry Pi and turn it on. It should connect to your Wi-Fi network, which will take some time. It should be noted that making changes to this file later will not change the connection, and the config is valid only on the first launch of the device. If later you need to change settings, please edit the configuration file in')}} <code>/etc/netplan/</code> {{$ts('folder.')}}</p>
              </li>
              <li>
                <p>{{$ts('Now you need to find an address of the device. To do it you can use various methods for network scanning, like')}} <g-link to="https://www.fing.com/products">{{$ts('Fing App')}}</g-link>, <code>arp -a</code> {{$ts('command or')}} <g-link to="https://nmap.org/download.html">nmap</g-link>, {{$ts('the latter will be used next.')}}</p>
                <p>{{$ts('Install nmap with a command')}}</p>
                <pre v-highlightjs><code class="bash">sudo apt-get install nmap</code>
                </pre>
                <p>{{$ts('Then find your address in your local network. It should look like')}} <code>192.168.xxx.xxx</code> {{$ts('or')}} <code>172.xxx.xxx.xxx.</code> {{$ts('Pay attention as nmap can find many addresses on your local network.')}}</p>
                <pre v-highlightjs><code class="bash">ip a</code>
                </pre>
                <p>{{$ts('Then scan your network as shown below replacing the last octet of the address with')}} <code>0:</code></p>
                <pre v-highlightjs><code class="bash">$ sudo nmap -sP 192.168.xxx.0/24</code>
                </pre>
                <p>{{$ts('The output of the command will be something like this:')}}</p>
                <pre v-highlightjs>
<code class="bash">Starting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST
Nmap scan report for _gateway (192.168.43.1)
Host is up (0.015s latency).
MAC Address: 8E:F5:A3:DB:02:24 (Unknown)
Nmap scan report for ubuntu (192.168.43.56)
Host is up (0.049s latency).
MAC Address: DC:A6:32:04:45:50 (Raspberry Pi Trading)
Nmap scan report for LAPTOP-NO7 (192.168.43.234)
Host is up (0.00057s latency).
MAC Address: 7C:B3:7D:9E:94:DA (Intel Corporate)
Nmap scan report for ed-vm (192.168.43.138)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.07 seconds
</code>
                </pre>>
                <p>{{$ts('Standard hostname for freshly installed Raspberry Pi should be')}} <code class="nowb">ubuntu</code>, {{$ts('so in this example the address is')}} <code>192.168.43.56.</code></p>
              </li>
              <li>
                <p>{{$ts('Connect to the Raspberry Pi via SSH with found IP. User is')}} <code class="nowb">"ubuntu"</code>, {{$ts('the password is')}} <code class="bold">"ubuntu"</code>.</p>
                <pre v-highlightjs><code class="bash">ssh ubuntu@192.168.43.56</code>
                </pre>
                <p>{{$ts(`The system will ask you to change the password to a more secure one, make sure you don't lose it.`)}}</p>
                <p>{{$ts('Further instructions are executed via SSH on the Raspberry Pi itself.')}}</p>
              </li>
            </List>
          </li>
          <li>
            <p>{{$ts('Home Assistant Installation')}}</p>
            <List>
              <li>
                <p>{{$ts('Before starting, update the Raspberry Pi system and install necessary packages.  During installation you will see a window with service restart request. Just choose')}} <span class="accent">ok</span> {{$ts('with the')}} <code>tab</code> {{$ts('button and press enter.')}}</p>
                <pre v-highlightjs>
<code class="bash">sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y python3 python3-dev python3-venv python3-pip 
libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf 
build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev 
subversion
</code>
                </pre>
              </li>
              <li>
                <p>
                  {{$ts('Create user')}} <code>homeassistant</code> {{$ts('and the directory for Home Assistant Core:')}}
                </p>
                <pre v-highlightjs>
<code class="bash">sudo useradd -rm homeassistant
sudo mkdir /srv/homeassistant
sudo chown homeassistant:homeassistant /srv/homeassistant
</code>
                </pre>
              </li>
              <li>
                <p>{{$ts('Create a virtual environment for Home Assistant Core and switch to it. This should be done as the')}} <code>homeassistant</code> {{$ts('user, so after executing the commands your user will look like')}} <code>(homeassistant) homeassistant@ubuntu</code>:</p>
                <pre v-highlightjs>
<code class="bash">sudo -u homeassistant -H -s
cd /srv/homeassistant
python3 -m venv .
source bin/activate
</code>
                </pre>
                <p>
                  {{$ts('As the result, you will find a name of the virtual environment in the brackets:')}}
                </p>
                <pre v-highlightjs><code class="bash">(homeassistant) homeassistant@ubuntu:/srv/homeassistant/$ </code>
                </pre>
              </li>
              <li>
                <p>{{$ts('Install required Python packages:')}}</p>
                <pre v-highlightjs>
<code class="bash">python3 -m pip install wheel~=0.37
pip3 install sqlalchemy~=1.4 fnvhash~=0.1 aiodiscover==1.4.11
pip3 install homeassistant==2022.8.2
</code>
                </pre>
              </li>
              <li>
                <p>{{$ts('Start Home Assistant Core for the first time. This will complete the installation by automatically creating the')}}
                <code>.homeassistant</code> {{$ts('configuration directory in the')}} <code>/home/homeassistant</code> {{$ts('directory, and installing any basic dependencies:')}}
                </p>
                <pre v-highlightjs><code class="bash">hass</code>
                </pre>
              </li>
              <li>
                <p>
                  {{$ts('While the initial setup is in progress, сheck your installation via the web interface on')}} <code>http://%RASPBERRY_IP_ADDRESS%:8123</code> {{$ts('In this example:')}} <code>http://192.168.43.56:8123.</code> {{$ts('You can open a web UI from any computer connected to your local network.')}}
                </p>
                <p>{{$ts('Wait until you will get the welcome windows with login / password creation and then stop Home Assistant with')}} <code>Ctrl+C.</code></p>
              </li>
            </List>
          </li>
          <li>
            <p>{{$ts('IPFS Installation')}}</p>
            <List>
              <li>
                <p>{{$ts('For IPFS installation you can use our script to download IPFS and create systemd service with it. First, exit the virtual environment for Home Assistant:')}}</p>
                <pre v-highlightjs><code class="bash">exit</code>
                </pre>
                <p>{{$ts('Then execute:')}}</p>
                <pre v-highlightjs>
<code class="bash">cd ~
wget 
https://raw.githubusercontent.com//airalab/homeassistant-robonomics-integration/main/install_ipfs.sh
sudo chmod +x install_ipfs.sh
./install_ipfs.sh
</code>
                </pre>
              </li>
            </List>
          </li>
          <li>
            <p>{{$ts('Zigbee2MQTT Setup (Only for Zigbee Adapter)')}}</p>
            <List>
              <li>
                <p>{{$ts('Set up Node.js runtime environment repository and install it with required dependencies:')}}</p>
                <pre v-highlightjs>
<code class="bash">sudo curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs git make g++ gcc
</code>
                </pre>
              </li>
              <li>
                <p>{{$ts('Verify that the correct versions of Node.js (v14.X, V16.x, V17.x or V18.X) and package manager')}} <code class="nowb">npm</code> {{$ts('(6.X, 7.X or 8.X) automatically installed with Node.js, have been installed:')}}</p>
                <pre v-highlightjs>
<code class="bash">node --version
npm --version
</code>
                </pre>
              </li>
              <li>
                <p>
                  {{$ts('Create a directory for Zigbee2MQTT and set your user as owner of it:')}}
                </p>
                <pre v-highlightjs>
<code class="bash">sudo mkdir /opt/zigbee2mqtt
sudo chown -R ${USER}: /opt/zigbee2mqtt
</code>
                </pre>
              </li>
              <li>
                <p>
                  {{$ts('Clone Zigbee2MQTT repository:')}}
                </p>
                <pre v-highlightjs>
<code class="bash">git clone --depth 1 --branch 1.28.0 
https://github.com/Koenkk/zigbee2mqtt.git /opt/zigbee2mqtt
</code>
                </pre>
              </li>
              <li>
                <p>
                  {{$ts('Install dependencies (as user')}} <code>pi</code>). {{$ts('Note that the')}} <code>npm ci</code> {{$ts('could produce some warning which can be ignored.')}}
                </p>
                <pre v-highlightjs>
<code class="bash">cd /opt/zigbee2mqtt
npm ci
</code>
                </pre>
              </li>
            </List>
          </li>
          <li>
            <p>{{$ts('Systemd Services')}}</p>
            <List>
              <li>
                <p>{{$ts('Systemd service is useful for automating the launch of Home Assistant. Create new service for Home Assistant:')}}</p>
                <pre v-highlightjs><code class="bash">sudo nano /etc/systemd/system/home-assistant@homeassistant.service</code>
                </pre>
              </li>
              <li>
                <p>{{$ts('Paste the following')}}</p>
                <pre v-highlightjs>
<code class="bash">[Unit]
Description=Home Assistant
After=network-online.target
[Service]
Type=simple
Restart=on-failure

User=%i
WorkingDirectory=/srv/%i/
ExecStart=/srv/homeassistant/bin/hass -c "/home/%i/.homeassistant"
Environment="PATH=/srv/%i/bin"

[Install]
WantedBy=multi-user.target
</code>
                </pre>
              </li>
              <li>
                <p>{{$ts('Enable and start the service:')}}</p>
                <pre v-highlightjs>
<code class="bash">sudo systemctl enable home-assistant@homeassistant.service
sudo systemctl start home-assistant@homeassistant.service
</code>
                </pre>
              </li>
            </List>
          </li>
          <li>
            <p>{{$ts('Robonomics Integration')}}</p>
            <List>
              <li>
                <p>{{$ts('Log in with')}} <code>homeassistant</code> {{$ts('user on your Raspberry Pi:')}}</p>
                <pre v-highlightjs><code class="bash">sudo -u homeassistant -H -s</code>
                </pre>
              </li>
              <li>
                <p>{{$ts('Source virtual environment and install required Python packages:')}}</p>
                <pre v-highlightjs>
<code class="bash">source /srv/homeassistant/bin/activate
pip install robonomics-interface~=1.3
</code>
                </pre>
              </li>
              <li>
                <p>{{$ts('Then go to')}} <code>.homeassistant</code> {{$ts('directory, create folder')}} <code class="nowb">custom_components</code> {{$ts('and clone in there the repository with the integration:')}}
                </p> 
                <pre v-highlightjs>
<code class="bash">cd /home/homeassistant/.homeassistant
mkdir custom_components
cd custom_components
svn checkout https://github.com/airalab/homeassistant-robonomics-integration/trunk/custom_components/robonomics
</code>
                </pre>
              </li>
              <li>
                <p>{{$ts('After that exit homeassistant user and restart service:')}}</p>
                <pre v-highlightjs>
<code class="bash">exit
sudo systemctl restart home-assistant@homeassistant.service
</code>
                </pre>
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

  span.italic {
    display: inline-block;
    margin-bottom: var(--gap);
  }
</style>