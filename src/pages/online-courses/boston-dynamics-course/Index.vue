<template>
  <LayoutCourse courseId="2">

    <section class="container__narrow text__hyphened">
      <h2>{{$ts("What's this about?")}}</h2>
      <p>{{$ts("We are excited to see you join the Spot SDK educational program! Our goal is to get you familiar with Spot's SDK and allow you to test your skills using a Boston Dynamics Spot robot in our lab.")}}</p>
      <p>{{$ts('Learn and practice with the Boston Dynamics Spot robot wherever you are. Get after each lesson captured video, robot movements recorded and printable PDF certificate to demonstrate your experience on the interview for your next dream job!')}}</p>
    </section>

    <section class="container__narrow text__hyphened">
      <h2>{{$ts('What you can take from the course')}}</h2>
      <List>
        <li>{{$ts('Learn how to work and communicate with SPOT robot')}}</li>
        <li>{{$ts("Knowledge about SPOT and it's internals, API and all interesting stuff")}}</li>
      </List>
    </section>

    <!-- <section class="container__narrow text__hyphened">
      <h2>Where to start</h2>
      <List>
        <li><g-link to="/">Learn</g-link> Free</li>
        <p>We recommend you study the theoretical materials before you rent the time on Spot so that you have a plan of action for your lesson and can complete it successfully.</p>
        <li><g-link to="/">Rent</g-link> 82.00 USD per lesson</li>
        <p>The robot is located in our laboratory in Silicon Valley. The course is self-paced, you select one hour-long session to practice with the robot by Google Calendar after paying for it. We don’t charge for anything else. Once you feel ready, you buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.</p>
        <li>Practice your skills</li>
        <p>When your session starts, you can connect to the Spot robot by SSH and join a Google Meet meeting to watch the robot by the camera. While working, use our lessons presented in this dapp and Spot documentation at dev.bostondynamics.com</p>
        <li>Share</li>
        <p>The robot captures its state. And after the lesson, MerkleBot signs the robot state records to prove its origin for the certificate and you can download it.</p>
        <p>Share your results in your social accounts. You may even add your successful lessons results as a certificate in your LinkedIn profile: just choose Merklebot as an Issuing organization and blockchain hash of lesson's certificate as an Credentials ID.</p>
      </List>
    </section> -->

    <section class="container__narrow text__hyphened">
      <h2>{{$ts('Learn free')}}</h2>
      <p>{{$ts("We recommend you study the theoretical materials before you rent the time on Spot so that you have a plan of action for your lesson and can complete it successfully.")}}</p>
    </section>
    
    <section class="container__narrow text__hyphened">
      <h2>{{$ts('Rent 82.00 USD per lesson')}}</h2>
      <p>{{$ts('The robot is located in our laboratory in Silicon Valley. The course is self-paced, you select one hour-long session to practice with the robot by Google Calendar after paying for it. We don’t charge for anything else. Once you feel ready, you buy a 1 hour-long practice session specifying your access credentials (SSH key) and the time when you want to connect to Spot to solve the task.')}}</p>
    </section>

    <section class="container__narrow text__hyphened">
      <h2>{{$ts('Practice your skills')}}</h2>
      <p>{{$ts('When your session starts, you can connect to the Spot robot by SSH and join a Google Meet meeting to watch the robot by the camera. While working, use our lessons presented in this dapp and Spot documentation at dev.bostondynamics.com')}}</p>
    </section>

    <section class="container__narrow text__hyphened">
      <h2>{{$ts('Share')}}</h2>
      <p>{{$ts('The robot captures its state. And after the lesson, MerkleBot signs the robot state records to prove its origin for the certificate and you can download it.')}}</p>
      <p>{{$ts("Share your results in your social accounts. You may even add your successful lessons results as a certificate in your LinkedIn profile: just choose Merklebot as an Issuing organization and blockchain hash of lesson's certificate as an Credentials ID.")}}</p>
    </section>
  </LayoutCourse>
</template>

<script>

export default {
  metaInfo() {
    return this.$seo({
      title: this.$ts('Boston Dynamics Spot Software Developing'),
      description: this.$ts("Our new Boston Dynamics Spot Software Developing!"),
      image: {
          url: this.$locale ? this.$website + `/og/boston-dynamics-course/cover-${this.$locale}.png` : this.$website + `/og/boston-dynamics-course/cover-en.png`,
          width: 1920,
          height: 1080
      },
      openGraph: {
        title: this.$ts('Boston Dynamics Spot Software Developing'),
        type: 'website',
        site_name: 'Robonomics Academy',
        url: 'https://robonomics.academy/online-courses/boston-dynamics-course',
        image: {
          url: this.$locale ? this.$website + `/og/boston-dynamics-course/cover-${this.$locale}.png` : this.$website + `/og/boston-dynamics-course/cover-en.png`,
          width: 1280,
          height: 650
        },
      },
      twitter: {
        title: this.$ts('Boston Dynamics Spot Software Developing'),
        type: 'summary',
        site: '@AIRA_Robonomics',
        creator: '@AIRA_Robonomics',
        image: this.$locale ? this.$website + `/og/boston-dynamics-course/cover-${this.$locale}.png` : this.$website + `/og/boston-dynamics-course/cover-en.png`,
        card: 'summary_large_image',
      }
    })
  }
}
</script>
