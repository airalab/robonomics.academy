<template>
  <LayoutCourse courseId="2" lessonId="2">
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>What's this about</h2>
        <p>During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.</p>
        <p>Watch our introductory video if you haven't seen it already: <g-link to="https://youtu.be/qdk7BjWJprc">https://youtu.be/qdk7BjWJprc</g-link></p>
      </section>
      <section class="container__narrow">
        <h2>The challenge</h2>
        <p>Create a Python script controls robot body position. Run your script on Spot to let it execute a sequence of motions:</p>
        <List type="numbers">
          <li>Stand-up</li>
          <li>Trace your initials with it's face (one letter, at least 3 points)</li>
          <li>Sit-down</li>
        </List>

      </section>
      <section class="container__reg">
        <h2>Instructions</h2>
        <List type="numbers">
          <li>
            <p>Read <g-link to="https://dev.bostondynamics.com/docs/python/understanding_spot_programming">Understanding Spot Programming</g-link> page in Spot SDK documentation. You need to understand what is E-Stop and how make initialization in your Python script in order to let the robot execute commands.</p>
            <p>You can find more detailed information for this lesson in <g-link to="https://dev.bostondynamics.com/docs/concepts/base_services">Base Services</g-link>, <g-link to="https://dev.bostondynamics.com/docs/concepts/geometry_and_frames">Geometry and Frames</g-link>, <g-link to="https://dev.bostondynamics.com/docs/concepts/robot_services">Robot Services</g-link> and <g-link to="https://dev.bostondynamics.com/docs/concepts/estop_service">E-Stop</g-link> section of the Spot SDK documentation.</p>
          </li>
          <li>
            <p>Connect to SpotCORE by SSH from terminal</p>
            <pre v-highlightjs>
              <code class="bash">ssh student@strelka.ygg.merklebot.com</code>
            </pre>
          </li>
          <li>
            <p>Create a script can authenticate in Spot, acquire control (lease) and power on the robot.</p>
            <p>We create <g-link to="https://dev.bostondynamics.com/python/examples/estop/readme">E-Stop endpoint</g-link> for you, so you should not create it. For Spot authentication use username and password from <code>/home/student/credentials</code> file. Spot address is <code>192.168.50.3</code>.</p>
            <p>In <g-link to="https://dev.bostondynamics.com/docs/python/understanding_spot_programming#taking-ownership-of-spot-leases">Taking ownership of Spot (Leases)</g-link> section use</p>
            <pre v-highlightjs>
              <code class="python">lease = lease_client.acquire()</code>
            </pre>
            <p>before</p>
            <pre v-highlightjs>
              <code class="python">lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)</code>
            </pre>
          </li>
          <li>
            <p>Try your script with stand-up and sit-down commands. Ensure robot moves as expected.</p> 
            <p>Make sure you run script by Python3 with <code>pythoon3</code> command. Command <code>python</code> refers to an obsolete Python 2 interpreter.</p>
          </li>
          <li>Add body position control to your script. Experiment with <code>bosdyn.geometry.EulerZXY</code> robot command argument builder in order to identify what yaw, roll and pitch parameters you need to set to solve the challenge. The range of Pitch, Yaw and Roll is from -0.5 to 0.5.</li>
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
  metaInfo () {
    return this.$seo({
      title: 'Lesson #1, Emergency stop, initialization, body position control',
      description: 'During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.',
      openGraph: {
        title: 'Lesson #1, Emergency stop, initialization, body position control',
        type: 'website'
      },
      twitter: {
        title: 'Lesson 1#, Emergency stop, initialization, body position control',
        type: 'summary'
      }
    })
  }
}
</script>
