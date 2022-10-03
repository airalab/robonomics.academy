<template>
  <LayoutCourse courseId="2" lessonId="6">
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts("What's this about")}}</h2>
        <p>{{$ts('In this lesson you will learn what should you do if you just got the robot: the first run and network setup. Also you will learn how to run the calibration process that should be run monthly.')}}</p>
      </section>
      <section class="container__narrow">
        <h2>{{$ts('The challenge')}}</h2>
        <p>{{$ts('Create and execute Python script implements behaviors described.')}}</p>
        <List type="numbers">
          <li>{{$ts('Run "spot check" and save the result of the calibration in a ')}}<code>/home/student/result</code> {{$ts('directory as a text file.')}}</li>
          <li>{{$ts('Run camera calibration procedure.')}}</li>
        </List>
      </section>
      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('First run')}}</p>
            <p>{{$ts('Look at')}} <g-link to="https://support.bostondynamics.com/s/article/Startup-Procedure">{{$ts('Startup Procedure')}}</g-link> {{$ts('page in Documentation.')}}</p>
          </li>
          <li>
            <p>{{$ts('Networking')}}</p>
            <p>{{$ts('Spot offers a variety of networking options to support a diverse set of applications and environments. Options include:')}}<br/>
            - {{$ts('Spot as a connected peer. Physical connection to Spot.')}}<br/>
            - {{$ts('Spot as a WiFi access point.')}} <br/>
            - {{$ts('Spot as a WiFi client. Spot can join an existing WiFi network, and applications can also join the same WiFi network to talk to Spot.')}}
            </p>
            <p>{{$ts('For more information look at')}} <g-link to="https://dev.bostondynamics.com/docs/concepts/networking">{{$ts('Networking page')}}</g-link>.</p>
            <p>{{$ts('Spot Core is connected to the Spot via payload port. Spot Core can be connected to the Internet with Wi-Fi dongle. The setup instructions you can find at ')}}<g-link to="https://dev.bostondynamics.com/docs/payload/spot_core_cockpit.html?highlight=spot%20check">{{$ts('Spot Core Cockpit')}}</g-link> {{$ts('page')}}.</p>
          </li>
          <li>
            <p>{{$ts('Calibration')}}</p>
            <p>{{$ts('Spot Check is a full calibration of the robot. Also you can run the camera calibration')}}</p>
            <p>- <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L164">run_spot_check</g-link> {{$ts('runs full spot check routine. The robot should be sitting on flat ground when this routine is started. This routine calibrates robot joints and checks camera health.')}}</p>
            <p>- <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L204">run_camera_calibration</g-link>. {{$ts('Run full camera calibration routine for robot. This function blocks until calibration has completed. This function should be called once the robot is powered on and standing with his back to the calibration stand at a distance of 1 meter. Calibration process takes about 20 minutes.')}}</p>
          </li>
          <li>
            <p>{{$ts('Connect to Spot from a terminal or using your development environment remote execution function.')}}</p>
            <pre v-highlightjs>
              <code class="bash">ssh student@strelka.ygg.merklebot.com</code>
            </pre>
          </li>
          <li>
            <p>{{$ts('Develop and demonstrate your solution to the challenge')}}.</p>
            <p>{{$ts('We create ')}}<g-link to="https://dev.bostondynamics.com/python/examples/estop/readme">{{$ts('E-Stop endpoint')}}</g-link> {{$ts('for you, so you should not create it.')}} {{$ts('For Spot authentication use username and password from')}} <code>/home/student/credentials</code> {{$ts('file')}}.{{$ts('Spot address is ')}} <code>192.168.50.3</code>.</p>
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
  metaInfo() {
    return this.$seo({
      lang: this.$locale,
      title: this.$ts('Lesson #5, Robot service. Camera calibration and "Spot check" procedure'),
      description: this.$ts('In this lesson you will learn what should you do if you just got the robot: the first run and network setup. Also you will learn how to run the calibration process that should be run monthly.'),
      image: {
          url: this.$website + `/og/boston-dynamics-course/5-robot-service-camera-calibration-and-spot-check-procedure-${this.$locale}.png`,
          width: 1280,
          height: 650
      },
      openGraph: {
        title: this.$ts('Lesson #5, Robot service. Camera calibration and "Spot check" procedure'),
        type: 'website'
      },
      twitter: {
        title: this.$ts('Lesson #5, Robot service. Camera calibration and "Spot check" procedure'),
        type: 'summary'
      }
    })
  }
}
</script>
