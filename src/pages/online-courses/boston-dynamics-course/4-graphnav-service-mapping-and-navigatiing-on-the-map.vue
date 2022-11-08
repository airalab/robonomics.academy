<template>
  <LayoutCourse courseId="2" lessonId="5">

    <MetaInfo
      pageTitle = "Lesson #4, GraphNav service. Mapping and navigating on the map"
      pageDescription = "In the fourth lesson you will learn how to record and play autonomous missions with GraphNav service."
      :pageImage = "'/og/boston-dynamics-course/4-graphnav-service-mapping-and-navigatiing-on-the-map'"
    />

    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts("What's this about")}}</h2>
        <p>{{$ts('In the fourth lesson you will learn how to record and play autonomous missions with GraphNav service.')}}</p>
      </section>
      <section class="container__narrow">
        <h2>{{$ts('The challenge')}}</h2>
        <p>{{$ts('This lesson you can solve the challenge without writing your own Python script')}}</p>
        <List type="numbers">
          <li>{{$ts('Record a map avoiding obstacles. You can use WASD remote control tool. Save your mission in')}} <code>/home/student/result</code>.</li>
          <li>{{$ts('Move Spot through recorded waypoints. You can use GraphNav service command line tool.')}}</li>
        </List>

      </section>
      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('The Spot SDK includes APIs, client libraries, and examples that support the development of autonomous navigation behaviors for the Spot robot. Collectively, this service is referred to as GraphNav. Maps are recorded and saved and later can be replayed with any robot in your fleet. During the map recording process, you can assign actions and API callbacks to waypoints along the map route.')}}</p>
            <p>{{$ts('Read')}} <g-link to="https://dev.bostondynamics.com/docs/concepts/autonomy/graphnav_tech_summary">{{$ts('GraphNav Tech Summary')}}</g-link> {{$ts('to learn how it works.')}} <g-link to="https://dev.bostondynamics.com/docs/concepts/autonomy/initialization">{{$ts('Initialization')}}</g-link> {{$ts('is also important part, it will be useful in this lesson.')}}</p>
            <p>{{$ts('You can view recorded maps with')}} <g-link to="https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_view_map">{{$ts('View Map')}}</g-link> {{$ts('example.')}} {{$ts('For that you need to copy the map to your computer:')}}</p>
            <pre v-highlightjs>
              <code class="bash">scp -r student@strelka.ygg.merklebot.com:&lt;path_to_the_map_on_spot&gt; &lt;path_to_the_map_to_download&gt;</code>
            </pre>
            <p>{{$ts('Also you need')}} <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/master/docs/python/quickstart.md#install-spot-python-packages">{{$ts('install spot packages')}}</g-link>.</p>
            <p>{{$ts('Study')}} <g-link to="https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_command_line">{{$ts('recording and playing missions')}}</g-link> {{$ts('examples in order to use it to record the map and playback the mission recorded. Use')}} <g-link to="https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/wasd">wasd</g-link> {{$ts('example to move robot while recording the map.')}}</p>
          </li>
          <li>
            <p>{{$ts('Connect to Spot from a terminal or using your development environment remote execution function.')}}</p>
            <pre v-highlightjs>
              <code class="bash">ssh student@strelka.ygg.merklebot.com</code>
            </pre>
          </li>
          <li>
            <p>{{$ts('Develop and demonstrate your solution to the challenge.')}}</p>
            <p>{{$ts('We create')}} <g-link to="https://dev.bostondynamics.com/python/examples/estop/readme">{{$ts('E-Stop endpoint')}}</g-link> {{$ts('for you, so you should not create it. For Spot authentication use username and password from')}} <code>/home/student/credentials</code> {{$ts('file')}}. {{$ts('Spot address is')}} <code>192.168.50.3</code>.</p>
            <p>{{$ts('You can run remote control tool from examples directory.')}}</p>
            <pre v-highlightjs>
              <code class="bash">cd ~/spot-sdk/python/examples/wasd
python3 wasd.py --username &lt;SPOT_AUTH_USERNAME&gt; --password &lt;SPOT_AUTH_PASSWORD&gt; &lt;SPOT_ADDRESS&gt;</code>
            </pre>
            <p>{{$ts('GraphNav command line tool is located at')}} </p>
            <pre v-highlightjs>
              <code class="bash">~/spot-sdk/python/examples/graph_nav_command_line</code>
            </pre>
          </li>
        </List>
      </section>
      <section class="container__narrow">
        <h3>{{$ts('Are you ready to practice?')}}</h3>
        <p>{{$ts('Once you feel ready, you may buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.')}}</p>
        <h5><g-link class="btn" to="https://dapp.spot-sdk.education/#/checkout">{{$ts('Rent a spot')}}</g-link></h5>
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
