<template>
  <LayoutCourse courseId="2" lessonId="5">
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>What's this about</h2>
        <p>In this lesson you will learn what should you do if you just got the robot: the first run and network setup. Also you will learn how to run the calibration process that should be run monthly.</p>
      </section>
      <section class="container__narrow">
        <h2>The challenge</h2>
        <p>Create and execute Python script implements behaviors described.</p>
        <List type="numbers">
          <li>Run "spot check" and save the result of the calibration in a <code>/home/student/result</code> directory as a text file.</li>
          <li>Run camera calibration procedure.</li>
        </List>
      </section>
      <section class="container__reg">
        <h2>Instructions</h2>
        <List type="numbers">
          <li>
            <p>First run</p>
            <p>Look at <g-link to="https://support.bostondynamics.com/s/article/Startup-Procedure">Startup Procedure</g-link> page in Documentation.</p>
          </li>
          <li>
            <p>Networking</p>
            <p>Spot offers a variety of networking options to support a diverse set of applications and environments. Options include:<br/>
            - Spot as a connected peer. Physicall connection to Spot.<br/>
            - Spot as a WiFi access point. <br/>
            - Spot as a WiFi client. Spot can join an existing WiFi network, and applications can also join the same WiFi network to talk to Spot.
            </p>
            <p>For more information look at <g-link to="https://dev.bostondynamics.com/docs/concepts/networking">Networking page</g-link>.</p>
            <p>Spot Core is connected to the Spot via payload port. Spot Core can be connected to the Internet with Wi-Fi dongle. The setup instructions you can find at <g-link to="https://dev.bostondynamics.com/docs/payload/spot_core_cockpit.html?highlight=spot%20check">Spot Core Cockpit</g-link> page.</p>
          </li>
          <li>
            <p>Calibration</p>
            <p>Spot Check is a full calibration of the robot. Also you can run the camera calibration</p>
            <p>- <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L164">run_spot_check</g-link> runs full spot check routine. The robot should be sitting on flat ground when this routine is started. This routine calibrates robot joints and checks camera health.</p>
            <p>- <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L204">run_camera_calibration</g-link>. Run full camera calibration routine for robot. This function blocks until calibration has completed. This function should be called once the robot is powered on and standing with his back to the calibration stand at a distance of 1 meter. Calibation process takes about 20 minutes.</p>
          </li>
          <li>
            <p>Connect to Spot from a terminal or using your development environment remote execution function.</p>
            <code>ssh student@strelka.ygg.merklebot.com</code>
          </li>
          <li>
            <p>Develop and demonstrate your solution to the challenge.</p>
            <p>We create <g-link to="https://dev.bostondynamics.com/python/examples/estop/readme">E-Stop endpoint</g-link> for you, so you should not create it. For Spot authentication use username and password from <code>/home/student/credentials</code> file. Spot address is <code>192.168.50.3</code>.</p>
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
      title: `Lesson #5. Robot service. Camera calibration and "Spot check" procedure`,
      description: 'In this lesson you will learn what should you do if you just got the robot: the first run and network setup. Also you will learn how to run the calibration process that should be run monthly.',
      openGraph: {
        title: `Lesson #5. Robot service. Camera calibration and "Spot check" procedure`,
        type: 'website'
      },
      twitter: {
        title: `Lesson #5. Robot service. Camera calibration and "Spot check" procedure`,
        type: 'summary'
      }
    })
  }
}
</script>
