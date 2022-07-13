<template>
  <LayoutCourse courseId="2" lessonId="3">
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>What's this about</h2>
        <p>In the third lesson you will learn how to find World Objects and go to them.</p>
      </section>
      <section class="container__reg">
        <h2>Instructions</h2>
        <List type="numbers">
          <li>
            <p>Spot has the World Object Service that provides a way to track and store objects detected in the world around Spot. A world object is considered a higher-level item in the scene that has some amount of semantic information associated with it. More information you can find in <g-link to="https://dev.bostondynamics.com/docs/concepts/robot_services#world-object">Robot Services</g-link> tab in Spot SDK documentation.</p>
            <p>Using world object service you can find fiducials near the Spot.</p>
            <p>Spot can find objects around faster if he stands.</p>
            <p>In the task you will need find fiducials' coordinates and go to them. You already know how to move to the local coordinates from the <g-link to="/online-courses/boston-dynamics-course/2-remote-controlled-and-programmed-motion">Lesson 2</g-link>. The example of how to find a fiducial and it's coordinates is in <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/examples/fiducial_follow/fiducial_follow.py">fiducial_follow example</g-link>.</p>
            <p>In your script, firstly, you need to find fiducial object with World Object Service:</p>
            <p>
              <code>fiducial_objects = world_object_client.list_world_objects(object_type = [world_object_pb2.WORLD_OBJECT_APRILTAG]).world_objects</code>
            </p>
            <p>Then get fiducial coordinates in a visual frame:</p>
            <p>
              <code>
                fiducial = fiducial_objects[0]<br/>
                vision_tform_fiducial = get_a_tform_b( fiducial.transforms_snapshot, VISION_FRAME_NAME, fiducial.apriltag_properties.frame_name_fiducial.to_proto()
              </code>
            </p>
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
      title: 'Lesson #3. Find and follow an object, navigate between them',
      description: 'In the third lesson you will learn how to find World Objects and go to them.',
      openGraph: {
        title: 'Lesson #3. Find and follow an object, navigate between them',
        type: 'website'
      },
      twitter: {
        title: 'Lesson #3. Find and follow an object, navigate between them',
        type: 'summary'
      }
    })
  }
}
</script>
