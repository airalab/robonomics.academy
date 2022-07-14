<template>
  <LayoutCourse courseId="2" lessonId="2">
    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>What's this about</h2>
        <p>In the second lesson you will learn how to use Spot Command services and walk with Spot.</p>
      </section>
      <section class="container__narrow">
        <h2>The challenge</h2>
        <p>You have a list of points with their local coordinates in the <code>/home/student/lessons</code> directory.</p>
        <p>The list of moves:</p>
        <List>
          <li>To turn around himself</li>
          <li>To nod</li>
          <li>To change the stance of robot's legs</li>
          <li>To go sideways to the next point</li>
          <li>To lie down on pose to change battery (this command must be performed the last because it cuts the power to the motors.)</li>
        </List>
        <p>Create and execute a Python script that implements behavior described.</p>
        <p>You can find Spot local coordinates with (before you need to create <code>state_client</code>, you can find information about it in <g-link to="https://dev.bostondynamics.com/docs/python/understanding_spot_programming">Understanding Spot Programming</g-link>):</p>
        <code>
          from bosdyn.client.frame_helpers import get_vision_tform_body
          get_vision_tform_body(state_client.get_robot_state().kinematic_state.transforms_snapshot)
        </code>
      </section>
      <section class="container__reg">
        <h2>Instructions</h2>
        <List type="numbers">
          <li>
            <p>You can control Spot with <code>Robot Command Service</code>. Firstly you need to build a command to supply it to the command service. Spot SDK has a <code>RobotCommandBuilder</code> class for it.</p>
            <p>Full list of methods and its descriprions you can find <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/bosdyn-client/src/bosdyn/client/robot_command.py#L593">here</g-link>. In this lesson you may need to use:</p>
            <p>
              - Stand Command<br/>
              <code>def stand_command(params = None, body_height = 0.0, footprint_R_body = geometry.EulerZXY())</code>
            </p>
            <p>
              - Go to point<br/>
              <code>def synchro_se2_trajectory_point_command(goal_x, goal_y, goal_heading, frame_name, params = None, body_height = 0.0, locomotion_hint = spot_command_pb2.HINT_AUTO, build_on_command = None)</code><br/>
              Check usage <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/master/python/examples/frame_trajectory_command/frame_trajectory_command.py">here</g-link>.<br/>
            </p>
            <p>Attention! The example considers robot movement relative to the current position. In your case you must specify movements relative to the point where robot was turned on. That means you can set <code>goal_x</code> and <code>goal_y</code> values from the task.</p>
            <p>
              - Velocity Command <br/>
              <code>def synchro_velocity_command(v_x, v_y, v_rot, params = None, body_height = 0.0, locomotion_hint = spot_command_pb2.HINT_AUTO, frame_name = BODY_FRAME_NAME)</code>
            </p>
            <p>
              - Stance Command <br/>
              <code>def stance_command(se2_frame_name, pos_fl_rt_frame, pos_fr_rt_frame, pos_hl_rt_frame, pos_hr_rt_frame, accuracy = 0.05, params = None, body_height = 0.0, footprint_R_body = geometry.EulerZXY(), build_on_command = None)</code><br/>
              The example of use is <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/91ed30607264e795699995d6d7834ba0c8a94d36/python/examples/stance/stance_in_place.py">here</g-link>.
            </p>
            <p>
              - Pose to change battery
              <code>def battery_change_pose_command(dir_hint=1)</code><br/>
              Example of building and running velocity command:<br/> 
              <code>from bosdyn.client.robot_command import RobotCommandClient, RobotCommandBuilder<br/>import time<br/>command_client = robot.ensure_client(RobotCommandClient.default_service_name)<br/>cmd = RobotCommandBuilder.velocity_command(0.5, 0, 0.5)<br/>command_client.robot_command(cmd, end_time_secs=time.time() + 2)</code>
            </p>
          </li>
          <li>Connect to Spot from a terminal or using your development environment remote execution function.</li>
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
      title: 'Lesson #2. Remote controlled and programmed motion',
      description: 'In the second lesson you will learn how to use Spot Command services and walk with Spot.',
      openGraph: {
        title: 'Lesson #2. Remote controlled and programmed motion',
        type: 'website'
      },
      twitter: {
        title: 'Lesson #2. Remote controlled and programmed motion',
        type: 'summary'
      }
    })
  }
}
</script>
