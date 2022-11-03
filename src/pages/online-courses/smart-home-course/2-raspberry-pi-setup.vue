<template>

  <LayoutCourse courseId="3" lessonId="2">


  <MetaInfo
      pageTitle = "Lesson #2, Raspberry Pi Setup"
      pageDescription = "lesson description"
      :pageImage = "'/og/smart-home-course/2-raspberry-pi-setup'"
    />


    <h2 style="marginTop: 3rem">Coming soon...</h2>


  </LayoutCourse>

</template>

<script>
export default {

  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue')
  },

}
</script>

<style>

</style>