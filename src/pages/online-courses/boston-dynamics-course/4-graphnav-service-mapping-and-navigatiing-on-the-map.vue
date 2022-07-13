<template>
  <LayoutCourse courseId="2" lessonId="4">
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>What's this about</h2>
        <p>In the fourth lesson you will learn how to record and play autonomous missions with GraphNav service.</p>
      </section>
      <section class="container__reg">
        <h2>Instructions</h2>
        <List type="numbers">
          <li>
            <p>The Spot SDK includes APIs, client libraries, and examples that support the development of autonomous navigation behaviors for the Spot robot. Collectively, this service is referred to as GraphNav. Maps are recorded and saved and later can be replayed with any robot in your fleet. During the map recording process, you can assign actions and API callbacks to waypoints along the map route.</p>
            <p>Read <g-link to="https://dev.bostondynamics.com/docs/concepts/autonomy/graphnav_tech_summary">GraphNav Tech Summary</g-link> to learn how it works. <g-link to="https://dev.bostondynamics.com/docs/concepts/autonomy/initialization">Initialisation</g-link> is also important part, it will be usefull in this lesson.</p>
            <p>You can view recorded maps with <g-link to="https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_view_map">View Map</g-link> example. For that you need to copy the map to your computer:</p>
            <code>scp -r student@strelka.ygg.merklebot.com:&lt;path_to_the_map_on_spot&gt; &lt;path_to_the_map_to_download&gt;</code>
            <p>Also you need <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/master/docs/python/quickstart.md#install-spot-python-packages">install spot packages</g-link>.</p>
            <p>Study <g-link to="https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_command_line">recording and playing missions</g-link> examples in order to use it to record the map and playback the mission recorded. Use <g-link to="https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/wasd">wasd</g-link> example to move robot while recording the map.</p>
          </li>
          <li>
            <p>Connect to Spot from a terminal or using your development environment remote execution function.</p>
            <code>ssh student@strelka.ygg.merklebot.com</code>
          </li>
          <li>
            <p>Develop and demonstrate your solution to the challenge.</p>
            <p>We create <g-link to="https://dev.bostondynamics.com/python/examples/estop/readme">E-Stop endpoint</g-link> for you, so you should not create it. For Spot authentication use username and password from <code>/home/student/credentials</code> file. Spot address is <code>192.168.50.3</code>.</p>
            <p>You can run remote control tool from examples directory.</p>
            <code>
              cd ~/spot-sdk/python/examples/wasd<br/>
              python3 wasd.py --username &lt;SPOT_AUTH_USERNAME&gt; --password &lt;SPOT_AUTH_PASSWORD&gt; &lt;SPOT_ADDRESS&gt;
            </code><br/><br/>
            <p>GraphNav command line tool is located at <code>~/spot-sdk/python/examples/graph_nav_command_line</code>.</p>
          </li>
        </List>
      </section>
      <section class="container__narrow">
        <h3>Are you ready to practice?</h3>
        <p>Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.</p>
        <h5><g-link class="btn" to="https://dapp.spot-sdk.education/#/checkout">Rent a spot</g-link></h5>
      </section>
    </section>
  </LayoutCourse>
</template>

<script>

export default {
  metaInfo() {
    return this.$seo({
      title: 'Lesson #4. GraphNav service. Mapping and navigating on the map',
      description: 'In the fourth lesson you will learn how to record and play autonomous missions with GraphNav service.',
      openGraph: {
        title: 'Lesson #4. GraphNav service. Mapping and navigating on the map',
        type: 'website'
      },
      twitter: {
        title: 'Lesson #4. GraphNav service. Mapping and navigating on the map',
        type: 'summary'
      }
    })
  }
}
</script>
