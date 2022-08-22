<template>
  <LayoutCourse courseId="2" lessonId="1">
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>What's this about</h2>
        <p>In this lesson you will learn how to configure Yggdrasil network and establish connection to the robot.
        </p>
      </section>
      <section class="container__narrow">
        <h2>The challenge</h2>
        <p>Our goal is to get answers from Spot to our <g-link
            to="https://en.wikipedia.org/wiki/Ping_(networking_utility)">ping</g-link> signals. We use Yggdrasil Network
          to expose Spot to the internet, that means we will need to configure Yggdrasil Network support on your
          computer first.</p>
      </section>
      <section class="container__reg">
        <h2>Instructions</h2>
        <List type="numbers">
          <li>
            <p>Yggdrasil Installation</p>
            <p>Yggdrasil is an early-stage implementation of a fully end-to-end encrypted IPv6 network. Before startitng
              the lessons you need to install it on your computer.</p>
            <p>For Linux: Installation instructions <g-link
                to="https://yggdrasil-network.github.io/installation-linux-deb.html">here</g-link>.</p>
            <p>For MacOS: Download .pkg file from <g-link
                to="https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4.0-macos-amd64.pkg">
                here</g-link>.
              Locate the downloaded file in Finder. Right-click it and click Open. Step through the installer as usual.
            </p>
            <p>For Windows: Download .msi file for <g-link
                to="https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi">
                x64 system</g-link> or for
              <g-link
                to="https://github.com/yggdrasil-network/yggdrasil-go/releases/download/v0.4.0/yggdrasil-0.4-x64.msi">
                x32 system</g-link> and run it with double click.
            </p>
          </li>
          <li>
            <p>Open configuration file</p>
            <p>You need to add a list of peers (public nodes) to configuration file so that you will be able to connect
              to Spot.</p>
            <p>For MacOS and Linux:</p>
            <p>For that, edit the <code>yggdrasil.conf</code> file with this command in a terminal:</p>
            <pre v-highlightjs>
              <code class="bash">sudo nano /etc/yggdrasil.conf</code>
            </pre>
            <p>For Windows: Run <code>updateconfig.bat</code> in <code>C:/Program Files/Yggdrasil</code>.</p>
            <p>Then in <code>C:/ProgramData/Yggdrasil</code> open <code>yggdrasil.conf</code> with any text editor.</p>
            <p><code>ProgramData</code> is a hidden folder, so you need to show hidden data.</p>
          </li>
          <li>
            <p>Write peers</p>
            <p>In the file that you opened find line <code>Peers:</code> (it is at the beginning of the file) add 5-6
              peers geografically near to you (write them inside the brackets). You can find list of available peers
              <g-link to="https://github.com/yggdrasil-network/public-peers">here</g-link> or add peers from example
              below. Example in yggdrasil.conf:
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
            <p>Check if the peers online in <g-link to="https://publicpeers.neilalexander.dev/">Puplic Peers</g-link>.
            </p>
          </li>
          <li>
            <p>Save and close configuration file</p>
            <p>For Linux and MacOS:</p>
            <p>Press <code>Ctrl+x</code>, then press <code>y</code> to save changes and press <code>Enter</code>.</p>
            <p>For Windows: Save and close file.</p>
          </li>
          <li>
            <p>Restart service</p>
            <p>For Linux: Then restart Yggdrasil using this command:</p>
            <pre v-highlightjs>
              <code class="bash">systemctl restart yggdrasil</code>
            </pre>
            <p>For macOS: Unload the service and run Yggdrasil with changed config file:</p>
            <pre v-highlightjs>
              <code class="bash">sudo launchctl unload /Library/LaunchDaemons/yggdrasil.plist
sudo yggdrasil -useconffile /etc/yggdrasil.conf</code>
            </pre>
            <p>You will need to do that before every lesson.</p>
            <p>For Windows:</p>
            <p>Press win + r and type <code>services.msc</code>, find Yggdrasil service, open it and restart (press Stop
              and Start).</p>
            <g-image src="../../../assets/images/boston-dynamics-course/lesson-0-1.jpg"></g-image>
          </li>
          <li>
            <p>Check Connection</p>
            <p>Check if Yggdrasil works well. For that try to ping Spot address:</p>
            <pre v-highlightjs>
              <code class="bash">ping -6 strelka.ygg.merklebot.com</code>
            </pre>
            <p>To open terminal in Windows press <code>Win+R</code>, type <code>cmd</code> and press <code>Enter</code>.
            </p>
            <p>On MacOS use <code>ping6</code> instead of <code>ping</code>.</p>
            <p>If you can't ping Spot or you had any errors during the Yggdrasil setup look in <g-link
                to="https://dapp.spot-sdk.education/docs/spot-troubleshooting">Troubleshooting page</g-link>. If you
              can't find the solution there, please email spot@robonomics.network.</p>
          </li>
          <li>
            <p>Create ssh key</p>
            <p>You will connect to Spot via ssh, so you need to create ssh keys which you will use in booking lessons.
            </p>
            <p>Run following command in the terminal:</p>
            <pre v-highlightjs>
              <code class="bash">ssh-keygen -t rsa</code>
            </pre>
            <p>SSH Client is available by default only in Windows 10, so if you use older versions you need to install
              it. For example you can use <g-link to="https://www.putty.org/">PuTTY</g-link>.</p>
            <p>Remember the path to your key (by default it is <code>/home/&lt;user&gt;/.ssh/id_rsa.pub</code> or
              <code>C:\Users\&lt;user&gt;\.ssh\id_rsa.pub</code>).</p>
          </li>
        </List>
      </section>
      <section class="container__narrow">
        <h3>Are you ready to practice?</h3>
        <p>Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key)
          and the time when you want to connect to Spot to solve the task.</p>
        <h5>
          <g-link class="btn" to="https://dapp.spot-sdk.education/#/checkout">Rent a spot</g-link>
        </h5>
      </section>
    </section>
  </LayoutCourse>
</template>

<script>

export default {
  metaInfo() {
    return this.$seo({
      title: 'Lesson #0, Configure and test connection to Spot',
      description: 'In this lesson you will learn how to configure Yggdrasil network and establish connection to the robot.',
      image: {
        url: this.$website + '/og/boston-dynamics-course/0-configure-and-test-connection-to-spot.png',
        width: 1280,
        height: 650
      },
      openGraph: {
        title: 'Lesson #0, Configure and test connection to Spot',
        type: 'website'
      },
      twitter: {
        title: 'Lesson #0, Configure and test connection to Spot',
        type: 'summary'
      }
    })
  }
}
</script>
