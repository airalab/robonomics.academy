<template>
  
  <CourseLayout :courseId="String($page.course.courseID)" :title="String($page.course.title)" :defaultTitle="String($page.course.defaultName)">
  
  
    <MetaInfo
        :pageTitle = "$page.course.title"
        :pageDescription = "$page.course.description"
        :pageImage = "metaImgPath"
      />
  
  
      <section class="text__hyphened">
        <section class="lesson-section container__mid">
          <VueRemarkContent />
        </section>
      </section>
  </CourseLayout>
  
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
      defaultName
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

    },

    mounted() {

      if($cookies.get('userTracker') === 'allow metrics') {
        this.$gtag.pageview(this.$route)

        this.$nextTick(() => {
          if (this.$metrika) {
            this.$metrika.hit(this.$route)
          }
        });
      }

    }
  
  }
  </script>


<style>

  .text__hyphened {
    margin-top: calc(var(--gap) * 2);
  }

  .lesson-section {
    /* padding: var(--gap); */
    text-align: left;
    max-width: 900px;
  }

  .lesson-section h2 {
    text-align: left;
    font-family: var(--font-main);
    margin-bottom: calc(var(--gap) * 1.2);
  }

  .lesson-section h1, .lesson-section h2,   .lesson-section h3,   .lesson-section h4,   .lesson-section h5,   .lesson-section h6 {
    text-align: left;
  }

  .lesson-section p {
    line-height: 1.7;
  }

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

  .lesson-section .container__reg {
    padding: 0;
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

  @media screen and (max-width: 560px) {
    .lesson-section p {
      font-size: 1rem;
    }
  }
    

</style>
  