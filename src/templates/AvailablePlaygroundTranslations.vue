<template>
  <LayoutPlayground  :docId="String(docID)">

    
    <MetaInfo
        pageTitle = "Available Translations"
        pageDescription = "This doc has no translation yet. Please see another available translations"
      />

    <section class="container__reg">

      <p class="no-translations__text">
        This doc has no translation for {{ $locale && getLanguage($locale)[0].lang}}. Please see another available translations:
      </p>

      <div class="no-translations__wrapper">

        <a 
        v-for="edge in docsList" :key="edge.node.id" :href="edge.node.path"
        class="no-translations__link btn__outline"
        @click="redirectToChosenLocale(edge.node.path)"
        >
        
          {{getLanguage(edge.node.path.replace(/^\/([^\/]*).*$/, '$1'))[0].lang}}

        </a>

      </div>

    </section>

  </LayoutPlayground>
</template>


<page-query>
  
  query {

    docs: allPlayground {
      edges {
        node {
          title
          description
          path
          docId
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
      docTitle: '',
      postTitle: '',
      docID: null
    }
  },

  computed: {
    docsList() {
      return this.$page.docs.edges.filter((e) => {
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

    this.docID = this.docsList[0].node.docId;
  }

}
</script>

<style scoped>

  .no-translations__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .no-translations__link {
    width: 60%;
    text-align: center;
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

  @media (prefers-color-scheme: dark) {
    .no-translations__link {
      color: var(--color-second) !important;
      border-color: var(--color-second) !important;
    }

    .no-translations__link:hover {
      background-color: #fff !important;
    }
  }
</style>