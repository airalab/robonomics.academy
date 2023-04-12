<template>
  <div class="layout line-numbers" data-prismjs-copy-timeout="500">

    <header-slot/>

    <page-title
      :title="title" 
      :breadcrumbs="breadcrumbs"
      :doc="true"
    />

    <slot/>

    <lesson-reaction v-if="docId && !noTranslations" :lessonTitle="$ts(doc.title)"/>

    <!-- <LessonsNavigation
      v-if="docId && !noTranslations"
      :lessonId="parseInt(docId)"
      :current="currentIndex"
      :docs="playground"
    /> -->

    <subscription />

    <QuestionIcon v-if="docId" :templateTitle="'https://github.com/airalab/robonomics.academy/issues/new?' + ghIssueTitle"/>

    <div class="popup popup-js" :class="{'active': $store.state.showImagePopup}">
      <ImagePopup />
    </div>

    <footer-slot/>

    <client-only>

    <UserTracker v-show="$cookies && !$cookies.get('userTracker') && !this.$store.state.userTracker.option"  />

    </client-only>

  </div>
</template>

<script>

  import "prismjs/plugins/line-numbers/prism-line-numbers.js";
  import "prismjs/plugins/line-numbers/prism-line-numbers.css";

  import playground from '@/data/playground.yaml'

  export default {
    components: {
      HeaderSlot: () => import('~/components/Header.vue'),
      FooterSlot: () => import('~/components/Footer.vue'),
      PageTitle: () => import('~/components/PageTitle.vue'),
      LessonsNavigation: () => import('~/components/LessonsNavigation.vue'),
      Subscription: () => import('~/components/Subscription.vue'),
      QuestionIcon: () => import('~/components/QuestionIcon.vue'),
      UserTracker: () => import('~/components/UserTracker.vue')
    },

    props: {
      docId: {
        default: null
      },
      noTranslations: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        ghIssueTitle: null,
      }
    },

    watch: {
      "$route.path": function(current, old) {
        this.getTitleForIssue()
      }
    },

    computed: {
      doc() {
        if(this.docId) {
          const d = this.playground.filter(element => element.id === this.docId )
          return d[0]
        }
      },

      title() {
        if(this.docId) {
          return this.$ts(this.doc.title)
        }
      },

      playground() {
        return playground.docs
      },

      breadcrumbs() {
        var b = [
          {
            to: '/',
            text: 'Robonomics Academy'
          },
          {
            to: 'playground',
            text: this.$ts('Playground')
          },
        ]

        return b
      },

      currentIndex () {

        const n = this.$route.path.slice(0, -1).lastIndexOf('/');
        const route = this.$route.path.substring(n + 1).slice(0, -1);

        return this.playground.findIndex(item => {
          return item['path'] === route
        })
      },
    },

    methods: {
      getTitleForIssue() {
        const url = new URL('https://github.com/airalab/robonomics.academy/issues/new?assignees=&labels=documentation&template=doc-issue.md&');
        const params = new URLSearchParams(url.search);
        params.append('title', `issue for doc - ${this.title}(${this.$locale})`);
        this.ghIssueTitle = params.toString()
      },
    },

    created() {
      this.getTitleForIssue()
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

      this.$store.commit('TOGGLE_SHOW_HEADER', true)

      Prism.highlightAll();

    }
  }
</script>

<style scoped>
  .layout {
    position: relative;
  }
</style>