<template>
  <LayoutCourse courseId="1">

    <section class="container__narrow text__hyphened">
      <h2>What's this about?</h2>
      <p>In this course we dive into the problems that arise around building modern Internet of Things applications. As a possible solution, we want to introduce, at a basic level, the capabilities of web3 technologies and Robonomics tools for IoT developers and users. This introduction Course was designed to explain the main principles that form the idea of decentralized IoT applications, and also to show the main functions of the Robonomics platform as a parachain within the Polkadot / Kusama ecosystem.</p>
      <p>During this course you will take the first steps in understanding why these futuristic IoT-applications require better tools to meet the growing challenges and threats of the digital world. You will try to connect smart home devices to the decentralized cloud and attempt to purchase, activate and use IoT-subscriptions to send data to devices using the Robonomics Parachain.</p>
      <p>This course consists of theoretical lessons with tests and several practical tasks. At the end of the course, you will get a certificate and the opportunity to become part of the Robonomics Ambassador Program.</p>
    </section>

    <section class="container__narrow text__hyphened">
      <h2>What you can take from the course</h2>
      <List>
        <li>Practice and improvement of your skills in web3 development and robotic communications</li>
        <li>Knowledge about the state of modern Internet of Things: typical problems and how web3 can be the solution to some of them</li>
        <li>Basic skills for using the Polkadot / Kusama ecosystem</li>
      </List>
    </section>
    
  </LayoutCourse>
</template>
<script>

export default {
  metaInfo() {
    return this.$seo({
      title: 'Introduction Course',
      description: "Welcome Introduction Course!",
      image: {
          url: this.$website + '/og/boston-dynamics-course/cover.png',
          width: 1920,
          height: 1080
      },
      openGraph: {
        title: `Introduction Course`,
        type: 'website'
      },
      twitter: {
        title: `Introduction Course`,
        type: 'summary'
      }
    })
  }
}
</script>