<template>
  <LayoutCourse courseId="2" lessonId="3">

    <MetaInfo
      pageTitle = "Lesson #2, Remote controlled and programmed motion"
      pageDescription = "In the second lesson you will learn how to use Spot Command services and walk with Spot."
      :pageImage = "'/og/boston-dynamics-course/2-remote-controlled-and-programmed-motion'"
    />

    <section class="text__hyphened">
      <section class="container__narrow">
        <h2>{{$ts("What's this about")}}</h2>
        <p>{{$ts('In the second lesson you will learn how to use Spot Command services and walk with Spot.')}}</p>
      </section>
      <section class="container__narrow">
        <h2>{{$ts('The challenge')}}</h2>
        <p>{{$ts('You have a list of points with their local coordinates in the')}} <code>/home/student/lessons</code> {{$ts('directory.')}}</p>
        <p>{{$ts('The list of moves:')}}</p>
        <List>
          <li>{{$ts('To turn around himself')}}</li>
          <li>{{$ts('To nod')}}</li>
          <li>{{$ts("To change the stance of robot's legs")}}</li>
          <li>{{$ts('To go sideways to the next point')}}</li>
          <li>{{$ts('To lie down on pose to change battery (this command must be performed the last because it cuts the power to the motors.)')}}</li>
        </List>
        <br>
        <p>{{$ts('Create and execute a Python script that implements behavior described.')}}</p>
        <p>{{$ts('You can find Spot local coordinates with (before you need to create')}} <code>state_client</code>, {{$ts('you can find information about it in')}} <g-link to="https://dev.bostondynamics.com/docs/python/understanding_spot_programming">{{$ts('Understanding Spot Programming')}}</g-link>):</p>
        <pre v-highlightjs>
          <code class="python">from bosdyn.client.frame_helpers import get_vision_tform_body
get_vision_tform_body(state_client.get_robot_state().kinematic_state.transforms_snapshot)</code>
        </pre>
      </section>
      <section class="container__reg">
        <h2>{{$ts('Instructions')}}</h2>
        <List type="numbers">
          <li>
            <p>{{$ts('You can control Spot with')}} <code>Robot Command Service</code>. {{$ts('Firstly you need to build a command to supply it to the command service. Spot SDK has a')}} <code>RobotCommandBuilder</code> {{$ts('class for it.')}}</p>
            <p>{{$ts('Full list of methods and its descriptions you can find')}} <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/bosdyn-client/src/bosdyn/client/robot_command.py#L593">{{$ts('here')}}</g-link>. {{$ts('In this lesson you may need to use:')}}</p>
            <p>
              - {{$ts('Stand Command')}}<br/>
              <pre v-highlightjs>
                <code class="python">def stand_command(params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY())</code>
              </pre>
            </p>
            <p>
              - {{$ts('Go to point')}}<br/>
              <pre v-highlightjs>
                <code class="python">def synchro_se2_trajectory_point_command(goal_x, goal_y, goal_heading, frame_name, params=None, body_height=0.0, locomotion_hint=spot_command_pb2.HINT_AUTO, build_on_command=None)</code>
              </pre>
              {{$ts('Check usage')}} <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/master/python/examples/frame_trajectory_command/frame_trajectory_command.py">{{$ts('here')}}</g-link>.<br/>
            </p>
            <p>{{$ts('Attention! The example considers robot movement relative to the current position. In your case you must specify movements relative to the point where robot was turned on. That means you can set')}} <code>goal_x</code> {{$ts('and')}} <code>goal_y</code> {{$ts('values from the task.')}}</p>
            <p>
              - {{$ts('Velocity Command ')}}<br/>
              <pre v-highlightjs>
                <code class="python">def synchro_velocity_command(v_x, v_y, v_rot, params=None, body_height=0.0, locomotion_hint=spot_command_pb2.HINT_AUTO, frame_name=BODY_FRAME_NAME)</code>
              </pre>
            </p>
            <p>
              - {{$ts('Stance Command')}} <br/>
              <pre v-highlightjs>
                <code class="python">def stance_command(se2_frame_name, pos_fl_rt_frame, pos_fr_rt_frame, pos_hl_rt_frame, pos_hr_rt_frame, accuracy=0.05, params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY(), build_on_command=None)</code>
              </pre>
              {{$ts('The example of use is')}} <g-link to="https://github.com/boston-dynamics/spot-sdk/blob/91ed30607264e795699995d6d7834ba0c8a94d36/python/examples/stance/stance_in_place.py">{{$ts('here')}}</g-link>.
            </p>
            <p>
              - {{$ts('Pose to change battery')}}
              <code>def battery_change_pose_command(dir_hint=1)</code><br/>
              {{$ts('Example of building and running velocity command:')}}<br/> 
              <pre v-highlightjs>
                <code class="python">from bosdyn.client.robot_command import RobotCommandClient, RobotCommandBuilder
import time

command_client=robot.ensure_client(RobotCommandClient.default_service_name)
cmd=RobotCommandBuilder.velocity_command(0.5, 0, 0.5)
command_client.robot_command(cmd, end_time_secs=time.time() + 2)</code>
              </pre>
            </p>
          </li>
          <li>{{$ts('Connect to Spot from a terminal or using your development environment remote execution function.')}}</li>
          <li>
            <p>{{$ts('Develop and demonstrate your solution to the challenge.')}}</p>
            <p>{{$ts('We create')}} <g-link to="https://dev.bostondynamics.com/python/examples/estop/readme">{{$ts('E-Stop endpoint')}}</g-link> {{$ts('for you, so you should not create it.')}} {{$ts('For Spot authentication use username and password from ')}}<code>/home/student/credentials</code> {{$ts('file')}}. {{$ts('Spot address is ')}}<code>192.168.50.3</code>.</p>
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
