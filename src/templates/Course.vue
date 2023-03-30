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

    watch: {
      '$route.path'() {
        let final = this.$page.course.fileInfo.path.substr(this.$page.course.fileInfo.path.indexOf('/') + 1).slice(0,-3);

        this.metaImgPath = `/og/${final}`;

        this.$store.commit('SET_CURRENT_REACTION', '');
      }
    },

    created() {
      let final = this.$page.course.fileInfo.path.substr(this.$page.course.fileInfo.path.indexOf('/') + 1).slice(0,-3);

      this.metaImgPath = `/og/${final.substring(final.indexOf('/')+1)}`;

    }
  
  }
  </script>


<style>

  .lesson-section ul  {
    margin-bottom: var(--gap);
    list-style: none;
  }

  .lesson-section ol  {
    margin-bottom: var(--gap);
  }

  .lesson-section ul:not(.list__bullets) li  {
    font-weight: 600;
    display: flex;
  }

  .lesson-section ul li::before {
    content: "\2022" !important;
    color: var(--color-second) !important;
    font-weight: bold; 
    display: inline-block;
    width: 1em; 
    flex-shrink: 0;
  }

  .lesson-section ul li:not(:last-child) {
    margin-bottom: var(--gap);
  }

  .lesson-section .youtube-embed__wrapper {
    margin-bottom: var(--gap);
  }
    

</style>
  