<template>
  
  <LayoutCourse :courseId="String($page.course.courseID)" :lessonId="String($page.course.lessonNumber)">
  
  
    <MetaInfo
        :pageTitle = "$page.course.title"
        :pageDescription = "$page.course.description"
        :pageImage = "metaImgPath"
      />
  
  
      <section class="text__hyphened">
        <section class="container__reg lesson-section">
          <VueRemarkContent />
        </section>

      </section>
  </LayoutCourse>
  
</template>



<page-query>
  query ($id: ID!) {
    course(id: $id) {
      id
      courseID
      title
      description
      content
      fileInfo {
        path
        name
      }
      lessonNumber
      course
    }
  }
  </page-query>
  
  <script>
  export default {
  
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
    },

    data() {
      return {
        metaImgPath: ''
      }
    },

    mounted() {
      let final = this.$page.course.fileInfo.path.substr(this.$page.course.fileInfo.path.lastIndexOf('/') + 1).slice(0,-3);

      this.metaImgPath = `/og/${this.$page.course.course}/${final}`;

    }
  
  }
  </script>
  
  <style scoped>
  </style>