<template>
  <LayoutCourse courseId="2" lessonId="4">

    <MetaInfo
      pageTitle = "Lesson #3, Find and follow an object, navigate between them"
      pageDescription = "In the third lesson you will learn how to find World Objects and go to them."
      :pageImage = "'/og/boston-dynamics-course/3-find-and-follow-an-object-navigate-between-them'"
    />

    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts("What's this about")}}</h2>
        <p>{{$ts('In the third lesson you will learn how to find World Objects and go to them.')}}</p>
      </section>
      <section class="container__narrow">
        <h2>{{$ts('The challenge')}}</h2>
        <p>{{$ts('You start with Spot in the place with some fiducials (a mark on the object) around. Create and execute Python script detects at least two fiducials and moves Spot to each of them within 1 m.')}}</p>
      </section>
      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('Spot has the World Object Service that provides a way to track and store objects detected in the world around Spot. A world object is considered a higher-level item in the scene that has some amount of semantic information associated with it. More information you can find in')}} <g-link to="https://dev.bostondynamics.com/docs/concepts/robot_services#world-object">{{$ts('Robot Services')}}</g-link> {{$ts('tab in Spot SDK documentation.')}}</p>
            <p>{{$ts('Using world object service you can find fiducials near the Spot.')}}</p>
            <p>{{$ts('Spot can find objects around faster if he stands.')}}</p>
            <p>{{$ts("In the task you will need find fiducials' coordinates and go to them. You already know how to move to the local coordinates from the")}} <g-link to="/online-courses/boston-dynamics-course/2-remote-controlled-and-programmed-motion">{{$ts('Lesson 2')}}</g-link>. {{$ts("The example of how to find a fiducial and it's coordinates is in")}} <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/examples/fiducial_follow/fiducial_follow.py">{{$ts('fiducial_follow example')}}</g-link>.</p>
            <p>{{$ts('In your script, firstly, you need to find fiducial object with World Object Service:')}}</p>
            <pre v-highlightjs>
              <code class="python">fiducial_objects = world_object_client.list_world_objects(object_type=[world_object_pb2.WORLD_OBJECT_APRILTAG]).world_objects</code>
            </pre>
            <p>{{$ts('Then get fiducial coordinates in a visual frame:')}}</p>
            <pre v-highlightjs>
              <code class="python">fiducial = fiducial_objects[0]
vision_tform_fiducial = get_a_tform_b(fiducial.transforms_snapshot, VISION_FRAME_NAME, fiducial.apriltag_properties.frame_name_fiducial.to_proto())</code>
            </pre>
          </li>
          <li>
            <p>{{$ts('Connect to Spot from a terminal or using your development environment remote execution function.')}}</p>
            <pre v-highlightjs>
              <code class="bash">ssh student@strelka.ygg.merklebot.com</code>
            </pre>
          </li>
          <li>
            <p>{{$ts('Develop and demonstrate your solution to the challenge.')}}</p>
            <p>{{$ts('We create')}} <g-link to="https://dev.bostondynamics.com/python/examples/estop/readme">{{$ts('E-Stop endpoint')}}</g-link> {{$ts('for you, so you should not create it.')}} {{$ts('For Spot authentication use username and password from')}} <code>/home/student/credentials</code> {{$ts('file')}}. {{$ts('Spot address is ')}}<code>192.168.50.3</code>.</p>
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
