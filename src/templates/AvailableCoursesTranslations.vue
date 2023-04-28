<template>

  <CourseLayout :courseId="String(courseID)" :lessonId="String(lessonNumber)" noTranslations :defaultTitle="defaultName">

    <MetaInfo
        pageTitle = "Available Translations"
        pageDescription = "This lesson has no translation yet. Please see another available translations"
      />

    <section class="container__reg">

      <p class="no-translations__text">
        This lesson has no translation for {{ $locale && getLanguage($locale)[0].lang}}. Please see another available translations:
      </p>

      <div class="no-translations__wrapper">

        <a 
        v-for="edge in lessonsList" :key="edge.node.id" :href="edge.node.path"
        class="no-translations__link btn__outline"
        @click="redirectToChosenLocale(edge.node.path)"
        >
        
          {{getLanguage(edge.node.path.replace(/^\/([^\/]*).*$/, '$1'))[0].lang}}

        </a>

      </div>

    </section>

  </CourseLayout>
  
</template>

<page-query>
  
  query {

    courses: allCourse {
      edges {
        node {
          title
          description
          path
          lessonNumber
          courseID
          defaultName
        }
      }
    }

  }
  </page-query>

<script>
  import locales from '@/data/locales.yaml'
export default {

  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue'),
  },

  data() {
    return {
      lessonTitle: '',
      courseID: '',
      lessonNumber: '',
      defaultName: '',
    }
  },

  computed: {
    lessonsList() {
      return this.$page.courses.edges.filter((e) => {
        const path =  e.node.path; 
        const title = path.match(/\/([^\/]+)[\/]?$/);
        return title[1] === this.postTitle
      })
    },

    locales() {
      return locales
    }
  },

  methods: {
    redirectToChosenLocale(path) {
      window.location.href =  path;
    },

    getLanguage(locale) {
      return locales.filter(item => item.abbr === locale);
    },
  },

  created() {
    const path = this.$route.path; 
    const title = path.match(/\/([^\/]+)[\/]?$/);
    this.postTitle = title[1];

    this.courseID = this.lessonsList[0].node.courseID;
    this.lessonNumber = this.lessonsList[0].node.lessonNumber;
    this.defaultName = this.lessonsList[0].node.defaultName;
  }

}
</script>


<style scoped>

  .no-translations__wrapper {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .no-translations__link {
    width: 60%;
    text-align: center;
  }

  .no-translations__link:hover {
    border: 1px solid var(--color-dark);
    background-color: var(--color-dark);
    color: var(--color-light);
  }

  .no-translations__link:not(:last-of-type) {
    margin-bottom: var(--gap)
  }

  .no-translations__text {
    text-align: center;
  }

    @media screen and (max-width: 600px) {
    .no-translations__link {
      width: 100%;
      text-align: center;
    }
  }
</style>