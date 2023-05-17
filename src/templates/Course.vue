<template>
  
  <CourseLayout :title="String($page.course.title)" :defaultTitle="String($page.course.defaultName)">
  
  
    <MetaInfo
        :pageTitle = "$page.course.title"
        :pageDescription = "$page.course.description"
        :pageImage = "metaImgPath"
      />
  
  
      <section class="text__hyphened">
        <section class="lesson-section container__mid">
          <client-only>
            <VueRemarkContent />
          </client-only>
        </section>
      </section>
  </CourseLayout>
  
</template>



<page-query>
  query ($id: ID!) {
    course(id: $id) {
      id
      title
      description
      content
      fileInfo {
        path
        name
      }
      defaultName
      lastUpdate
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

      if(this.$store.state.lastVisits.length) {
        this.$store.commit('UPDATE_LAST_VISITS_ITEM', {title: this.$page.course.defaultName})
        localStorage.setItem('forUpdts', JSON.stringify(this.$store.state.lastVisits))
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


  .lesson-section h1, 
  .lesson-section h2,
  .lesson-section h3,
  .lesson-section h4,
  .lesson-section h5,
  .lesson-section h6 {
    font-family: var(--font-main);
    margin-bottom: calc(var(--gap) * 0.5);
    margin-top: calc(var(--gap) * 1.5);
    text-align: left;
  }

  .lesson-section h3,
  .lesson-section h4,
  .lesson-section h5,
  .lesson-section h6 {
    margin-top: calc(var(--gap) * 1);
  }

  .lesson-section p {
    line-height: 1.7;
  }

  .lesson-section ul, .lesson-section ol  {
    margin-bottom: calc(var(--gap) * 1.5);
  }

  .lesson-section li {
    margin-bottom: calc(var(--gap) * 0.5);
    margin-left: calc(var(--gap) * 0.5);
  }

  .lesson-section .container__reg {
    padding: 0;
  }

  .lesson-section .youtube-embed__wrapper {
    margin-bottom: var(--gap);
  }

  .lesson-section a {
    word-break: break-all;
  }

  @media screen and (max-width: 560px) {
    .lesson-section p {
      font-size: 1rem;
    }
  }
    

</style>
  