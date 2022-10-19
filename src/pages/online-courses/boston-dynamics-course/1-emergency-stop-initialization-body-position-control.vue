<template>
  <LayoutCourse courseId="2" lessonId="2">

    <MetaInfo
      pageTitle = "Lesson #1, Emergency stop, initialization, body position control"
      pageDescription = "During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot."
      :pageImage = "'/og/boston-dynamics-course/1-emergency-stop-initialization-body-position-control'"
    />

    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts(`What's this about`)}}</h2>
        <p>{{$ts('During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.')}}</p>
        <p>{{$ts("Watch our introductory video if you haven't seen it already:")}} <g-link to="https://youtu.be/qdk7BjWJprc">https://youtu.be/qdk7BjWJprc</g-link></p>
      </section>
      <section class="container__narrow">
        <h2>{{$ts("The challenge")}}</h2>
        <p>{{$ts('Create a Python script controls robot body position. Run your script on Spot to let it execute a sequence of motions')}}:</p>
        <List type="numbers">
          <li>{{$ts('Stand-up')}}</li>
          <li>{{$ts(`Trace your initials with it's face (one letter, at least 3 points)`)}}</li>
          <li>{{$ts('Sit-down')}}</li>
        </List>

      </section>
      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('Read')}} <g-link to="https://dev.bostondynamics.com/docs/python/understanding_spot_programming">{{$ts('Understanding Spot Programming')}}</g-link> {{$ts('page in Spot SDK documentation. You need to understand what is E-Stop and how make initialization in your Python script in order to let the robot execute commands.')}}</p>
            <p>{{$ts('You can find more detailed information for this lesson in')}} <g-link to="https://dev.bostondynamics.com/docs/concepts/base_services">{{$ts('Base Services')}}</g-link>, <g-link to="https://dev.bostondynamics.com/docs/concepts/geometry_and_frames">{{$ts('Geometry and Frames')}}</g-link>, <g-link to="https://dev.bostondynamics.com/docs/concepts/robot_services">{{$ts('Robot Services')}}</g-link> {{$ts('and')}} <g-link to="https://dev.bostondynamics.com/docs/concepts/estop_service">{{$ts('E-Stop')}}</g-link> {{$ts('section of the Spot SDK documentation.')}}</p>
          </li>
          <li>
            <p>{{$ts('Connect to SpotCORE by SSH from terminal')}}</p>
            <pre v-highlightjs>
              <code class="bash">ssh student@strelka.ygg.merklebot.com</code>
            </pre>
          </li>
          <li>
            <p>{{$ts('Create a script can authenticate in Spot, acquire control (lease) and power on the robot.')}}</p>
            <p>{{$ts('We create')}} <g-link to="https://dev.bostondynamics.com/python/examples/estop/readme">{{$ts('E-Stop endpoint')}}</g-link> {{$ts('for you, so you should not create it. For Spot authentication use username and password from')}}<code>/home/student/credentials</code> {{$ts('file')}}. {{$ts('Spot address is')}} <code>192.168.50.3</code>.</p>
            <p>{{$ts('In')}} <g-link to="https://dev.bostondynamics.com/docs/python/understanding_spot_programming#taking-ownership-of-spot-leases">{{$ts('Taking ownership of Spot (Leases)')}}</g-link> {{$ts('section use')}}</p>
            <pre v-highlightjs>
              <code class="python">lease = lease_client.acquire()</code>
            </pre>
            <p>{{$ts('before')}}</p>
            <pre v-highlightjs>
              <code class="python">lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)</code>
            </pre>
          </li>
          <li>
            <p>{{$ts('Try your script with stand-up and sit-down commands. Ensure robot moves as expected.')}}</p> 
            <p>{{$ts('Make sure you run script by Python3 with')}} <code>pythoon3</code> {{$ts('command')}}. {{$ts('Command')}}  <code>python</code> {{$ts('refers to an obsolete Python 2 interpreter')}}.</p>
          </li>
          <li>{{$ts('Add body position control to your script. Experiment with')}} <code>bosdyn.geometry.EulerZXY</code> {{$ts('robot command argument builder in order to identify what yaw, roll and pitch parameters you need to set to solve the challenge. The range of Pitch, Yaw and Roll is from -0.5 to 0.5.')}}</li>
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
