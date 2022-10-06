<template>
  <LayoutCourse courseId="2" lessonId="1">
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts("What's this about")}}</h2>
        <p>{{$ts("In this lesson you will learn how to configure Yggdrasil network and establish connection to the robot.")}}
        </p>
      </section>
      <section class="container__narrow">
        <h2>{{$ts('The challenge')}}</h2>
        <p>{{$ts('Our goal is to get answers from Spot to our')}} <g-link
            to="https://en.wikipedia.org/wiki/Ping_(networking_utility)">{{$ts('ping')}}</g-link> {{$ts(`signals. We use Yggdrasil Network
          to expose Spot to the internet, that means we will need to configure Yggdrasil Network support on your
          computer first.`)}}</p>
      </section>
      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('Yggdrasil Installation')}}</p>
            <p>{{$ts(`Yggdrasil is an early-stage implementation of a fully end-to-end encrypted IPv6 network. Before starting
              the lessons you need to install it on your computer.`)}}</p>
            <p>{{$ts('For Linux: Installation instructions')}} <g-link
                to="https://yggdrasil-network.github.io/installation-linux-deb.html">{{$ts('here')}}</g-link>.</p>
            <p>{{$ts('For MacOS: Download .pkg file from ')}}<g-link
                to="https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4.0-macos-amd64.pkg">
                {{$ts('here')}}</g-link>.
                {{$ts('Locate the downloaded file in Finder. Right-click it and click Open. Step through the installer as usual.')}}
            </p>
            <p>{{$ts('For Windows: Download .msi file for')}} <g-link
                to="https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi">
                {{$ts('x64 system')}}</g-link> {{$ts('or for')}}
              <g-link
                to="https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi">
                {{$ts('x32 system')}}</g-link> {{$ts('and run it with double click.')}}
            </p>
          </li>
          <li>
            <p>{{$ts('Open configuration file')}}</p>
            <p>{{$ts(`You need to add a list of peers (public nodes) to configuration file so that you will be able to connect
              to Spot.`)}}</p>
            <p>{{$ts('For MacOS and Linux:')}}</p>
            <p> {{$ts('For that, edit the')}} <code>yggdrasil.conf</code> {{$ts('file with this command in a terminal:')}}</p>
            <pre v-highlightjs>
              <code class="bash">sudo nano /etc/yggdrasil.conf</code>
            </pre>
            <p>{{$ts('For Windows: Run ')}}<code>updateconfig.bat</code> {{$ts('in')}} <code>C:/Program Files/Yggdrasil</code>.</p>
            <p>{{$ts('Then in')}} <code>C:/ProgramData/Yggdrasil</code> {{$ts('open')}} <code>yggdrasil.conf</code> {{$ts('with any text editor')}}.</p>
            <p><code>ProgramData</code> {{$ts('is a hidden folder, so you need to show hidden data.')}}</p>
          </li>
          <li>
            <p>{{$ts('Write peers')}}</p>
            <p>{{$ts('In the file that you opened find line')}} <code>Peers:</code> {{$ts(`(it is at the beginning of the file) add 5-6
              peers geographically near to you (write them inside the brackets).`)}} {{$ts('You can find list of available peers')}}
              <g-link to="https://github.com/yggdrasil-network/public-peers">{{$ts('here')}}</g-link> {{$ts(`or add peers from example
              below. Example in yggdrasil.conf:`)}}
            </p>
            <pre v-highlightjs>
              <code class="json">Peers:
[
  tcp://213.188.199.150:10010
  tcp://213.188.210.9:10010
  tcp://[2a09:8280:1::3:312]:10010
  tcp://[2a09:8280:1::a:2e2]:10010
  tcp://46.151.26.194:60575
  tcp://ygg-ru.cofob.ru:18000
  tcp://ygg.tomasgl.ru:61933
  tls://185.22.60.71:8443
  tcp://51.15.118.10:62486
  tls://ygg.loskiq.dev:17314
  tls://longseason.1200bps.xyz:13122
]</code>
            </pre>
            <p>{{$ts('Check if the peers online in')}} <g-link to="https://publicpeers.neilalexander.dev/">{{$ts('Public Peers')}}</g-link>.
            </p>
          </li>
          <li>
            <p>{{$ts('Save and close configuration file')}}</p>
            <p>{{$ts('For Linux and MacOS:')}}</p>
            <p>{{$ts('Press')}} <code>Ctrl+x</code>, {{$ts('then press')}} <code>y</code> {{$ts('to save changes and press')}}<code>Enter</code>.</p>
            <p>{{$ts('For Windows: Save and close file.')}}</p>
          </li>
          <li>
            <p>{{$ts('Restart service')}}</p>
            <p>{{$ts('For Linux: Then restart Yggdrasil using this command:')}}</p>
            <pre v-highlightjs>
              <code class="bash">systemctl restart yggdrasil</code>
            </pre>
            <p>{{$ts('For macOS: Unload the service and run Yggdrasil with changed config file:')}}</p>
            <pre v-highlightjs>
              <code class="bash">sudo launchctl unload /Library/LaunchDaemons/yggdrasil.plist
sudo yggdrasil -useconffile /etc/yggdrasil.conf</code>
            </pre>
            <p>{{$ts('You will need to do that before every lesson.')}}</p>
            <p>{{$ts('For Windows:')}}</p>
            <p>{{$ts('Press win + r and type')}} <code>services.msc</code>, {{$ts(`find Yggdrasil service, open it and restart (press Stop
              and Start).`)}}</p>
            <g-image src="../../../assets/images/boston-dynamics-course/lesson-0-1.jpg"></g-image>
          </li>
          <li>
            <p>{{$ts('Check Connection')}}</p>
            <p>{{$ts('Check if Yggdrasil works well. For that try to ping Spot address:')}}</p>
            <pre v-highlightjs>
              <code class="bash">ping -6 strelka.ygg.merklebot.com</code>
            </pre>
            <p>{{$ts('To open terminal in Windows press')}} <code>Win+R</code>, {{$ts('type')}} <code>cmd</code> {{$ts('and press')}} <code>Enter</code>.
            </p>
            <p>{{$ts('On MacOS use')}} <code>ping6</code> {{$ts('instead of')}}<code>ping</code>.</p>
            <p>{{$ts(`If you can't ping Spot or you had any errors during the Yggdrasil setup look in`)}} <g-link
                to="https://dapp.spot-sdk.education/docs/spot-troubleshooting">{{$ts('Troubleshooting page')}}</g-link>. {{$ts(`If you
              can't find the solution there, please email spot@robonomics.network`)}}.</p>
          </li>
          <li>
            <p>{{$ts('Create ssh key')}}</p>
            <p>{{$ts('You will connect to Spot via ssh, so you need to create ssh keys which you will use in booking lessons.')}}
            </p>
            <p>{{$ts('Run following command in the terminal:')}}</p>
            <pre v-highlightjs>
              <code class="bash">ssh-keygen -t rsa</code>
            </pre>
            <p>{{$ts(`SSH Client is available by default only in Windows 10, so if you use older versions you need to install
              it. For example you can use `)}}<g-link to="https://www.putty.org/">PuTTY</g-link>.</p>
            <p>{{$ts('Remember the path to your key (by default it is)')}} <code>/home/&lt;user&gt;/.ssh/id_rsa.pub</code> {{$ts('or')}}
              <code>C:\Users\&lt;user&gt;\.ssh\id_rsa.pub</code>).</p>
          </li>
        </List>
      </section>
      <section class="container__narrow">
        <h3>{{$ts('Are you ready to practice?')}}</h3>
        <p>{{$ts(`Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key)
          and the time when you want to connect to Spot to solve the task.`)}}</p>
        <h5>
          <g-link class="btn" to="https://dapp.spot-sdk.education/#/checkout">{{$ts('Rent a spot')}}</g-link>
        </h5>
      </section>
    </section>
  </LayoutCourse>
</template>

<script>

export default {
  metaInfo() {
    return this.$seo({
      title: this.$ts('Lesson #0, Configure and test connection to Spot'),
      description: this.$ts('In this lesson you will learn how to configure Yggdrasil network and establish connection to the robot.'),
      image: {
        url: this.$locale ? this.$website + `/og/boston-dynamics-course/0-configure-and-test-connection-to-spot-${this.$locale}.png` : this.$website + `/og/boston-dynamics-course/0-configure-and-test-connection-to-spot-en.png`,
        width: 1280,
        height: 650
      },
      openGraph: {
        title: this.$ts('Lesson #0, Configure and test connection to Spot'),
        type: 'website'
      },
      twitter: {
        title: this.$ts('Lesson #0, Configure and test connection to Spot'),
        type: 'summary'
      }
    })
  }
}
</script>
