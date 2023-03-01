<template>
  <LayoutCourse courseId="4">

    <MetaInfo
      pageTitle = "Sensors Connectivity & Decentralized Sensors Network"
      pageDescription = "Discover how a civilian air quality monitoring network can work and the benefits of a decentralized solution for monitoring air quality in your home or community."
      :pageImage = "'/og/sensors-connectivity-course/cover'"
      coursePage
    />
    
  </LayoutCourse>
</template>
<script>

export default {

  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue')
  }
}
</script>