<template>
  <LayoutCourse courseId="2" lessonId="1">
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>What's this about</h2>
        <p>During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.</p>
      </section>
      <section class="container__reg">
        <h2>Instructions</h2>
        <List type="numbers">
          <li>Read <g-link to="https://dev.bostondynamics.com/docs/python/understanding_spot_programming">Understanding Spot Programming</g-link> page in Spot SDK documentation. You need to understand what is E-Stop and how make initialization in your Python script in order to let the robot execute commands. You can find more detailed information for this lesson in <g-link to="https://dev.bostondynamics.com/docs/concepts/base_services">Base Services</g-link>, <g-link to="https://dev.bostondynamics.com/docs/concepts/geometry_and_frames">Geometry and Frames</g-link>, <g-link to="https://dev.bostondynamics.com/docs/concepts/robot_services">Robot Services</g-link> and <g-link to="https://dev.bostondynamics.com/docs/concepts/estop_service">E-Stop</g-link> section of the Spot SDK documentation.</li>
          <li>Connect to SpotCODE by SSH from terminal<br> <code>ssh student@strelka.ygg.merklebot.com</code></li>
          <li>Create a script can authenticate in Spot, acquire control (lease) and power on the robot. We create <g-link to="https://dev.bostondynamics.com/python/examples/estop/readme">E-Stop endpoint</g-link> for you, so you should not create it. For Spot authentication use username and password from <code>/home/student/credentials</code> file. Spot address is <code>192.168.50.3</code>. In <g-link to="https://dev.bostondynamics.com/docs/python/understanding_spot_programming#taking-ownership-of-spot-leases">Taking ownership of Spot (Leases)</g-link> section use <code>lease = lease_client.acquire()</code> before <code>lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)</code></li>
          <li>Try your script with stand-up and sit-down commands. Ensure robot moves as expected, make sure you run script by Python3 with <code>pythoon3</code> command. Command <code>python</code> refers to an obsolete Python 2 interpreter.</li>
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
      title: 'Lesson #1. Emergency stop, initialization, body position control',
      description: 'During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.',
      openGraph: {
        title: 'Lesson #1. Emergency stop, initialization, body position control',
        type: 'website'
      },
      twitter: {
        title: 'Lesson 1#. Emergency stop, initialization, body position control',
        type: 'summary'
      }
    })
  }
}
</script>
