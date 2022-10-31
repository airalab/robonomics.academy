<template>
  
<LayoutCourse courseId="3" lessonId="1">


  <MetaInfo
      pageTitle = "Lesson #1, Theoretical Briefing"
      pageDescription = "lesson description"
      :pageImage = "'/og/smart-home-course/1-theoretical-briefing'"
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