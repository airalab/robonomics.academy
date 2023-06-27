<template>
  <div class="layout line-numbers " data-prismjs-copy-timeout="500">

    <header-slot/>

    <section class="course" :class="{'course-without-tr': noTranslations}">
        <LessonAside 
          :course="course[0]" 
          :title="title" 
          :isSidebarOpen="isSidebarOpen"
          @closeSidebar="isSidebarOpen = false"
        />

      <div class="course__content">

        <div 
          class="overlay" 
          :class="{open: isSidebarOpen}"
          @click="isSidebarOpen = false"
        />

        <div class="course__header">
          <div class="breadcrumbs">
            <ul v-if="breadcrumbs">
              <li v-for="item in breadcrumbs" :key="item.id">
                <g-link :to="item.to">{{item.text}}</g-link>
              </li>
            </ul>
            <button 
              @click="isSidebarOpen = !isSidebarOpen"
              class="course__aside-btn"
            >
              <font-awesome-icon icon="fa-bars" v-if="!isSidebarOpen"/>
              <font-awesome-icon icon="fa-xmark" v-else/>
            </button>
          </div>
          <h1 v-if="course[0]">{{ $ts(course[0].title )}}</h1>
        </div>
        
        <template v-if="course[0].progress !== 'coming'">
          <slot/>
        </template>

        <div v-if="course[0].progress === 'coming'" class="course-in-progress">
          <span>Coming soon</span>
        </div>

        <lesson-reaction v-if="!noTranslations && course[0].progress !== 'coming'" :lessonTitle="title"/>

        <subscription :full="true" />
      </div>

    </section>

    <QuestionIcon :templateTitle="'https://github.com/airalab/robonomics.academy/issues/new?' + ghIssueTitle"/>

    <div class="popup popup-js" :class="{'active': $store.state.showImagePopup}">
      <ImagePopup />
    </div>

    <client-only>

      <UserTracker v-show="$cookies && !$cookies.get('userTracker') && !this.$store.state.userTracker.option"  />

    </client-only>

  </div>
</template>

<script>

  import "prismjs/plugins/line-numbers/prism-line-numbers.js";
  import "prismjs/plugins/line-numbers/prism-line-numbers.css";

  import LessonAside from "../components/LessonAside.vue";

  import courses from '/courses/all-courses.yaml'

  export default {
    components: {
      HeaderSlot: () => import('~/components/Header.vue'),
      FooterSlot: () => import('~/components/Footer.vue'),
      Subscription: () => import('~/components/Subscription.vue'),
      QuestionIcon: () => import('~/components/QuestionIcon.vue'),
      UserTracker: () => import('~/components/UserTracker.vue'),
      LessonAside
    },

    props: {
      noTranslations: {
        type: Boolean,
        default: false
      },
      title: {
        default: null,
        type: String
      },
      defaultTitle: {
        default: null,
        type: String
      }
    },

    data() {
      return {
        ghIssueTitle: null,
        isSidebarOpen: false
      }
    },

    watch: {
      "$route.path": function(current, old) {
        this.getTitleForIssue()
      }
    },

    computed: {

      breadcrumbs() {
        var b = [
          {
            to: '/',
            text: 'Robonomics Academy'
          },
          {
            to: 'learn',
            text: this.$ts('Learn')
          },
        ]

        return b
      },

      course() {
        return courses.filter(course => course.title === this.defaultTitle);
      }
    },

    methods: {
      getTitleForIssue() {
        const url = new URL('https://github.com/airalab/robonomics.academy/issues/new?assignees=&labels=documentation&template=lesson-issue.md&');
        const params = new URLSearchParams(url.search);
        params.append('title', `issue for lesson - ${this.title}(${this.$locale})`);
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
            window._paq.push(['trackPageView']);
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

  .course {
    margin-top: 0;
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 440px minmax(350px, 1fr);
  }

  .course .container__mid {
    padding: 0 var(--gap)
  }

  .course h1, .course h2, .course h3, .course h4, .course h5 {
    font-family: var(--font-secondary);
  }

  @media screen and (max-width: 550px) {
    .course .container__mid {
      padding: 0 calc(var(--gap) * 0.6);
    }
  }

  /* .course-without-tr {
    grid-template-columns: minmax(350px, 1fr);
  } */

  .course__content {
    border-left: 3px solid var(--color-dark);
  }

  .breadcrumbs {
    margin-bottom: 10px;
  }

  .breadcrumbs ul {
    list-style: none;
    display: flex;
    font-weight: 500;
    align-items: center;
  }

  .breadcrumbs li:first-child {
    margin-right: calc(var(--gap) * 0.5);
    padding-right: 30px;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='15' viewBox='0 0 12 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 7.23687L0 0.103533L0 14.3702L12 7.23687Z' fill='%23232323'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right;
  }

  .course__header {
    min-height: 155px;
    padding: calc(var(--gap) * 0.5) calc(var(--gap) * 1);
    border-bottom: 3px solid var(--color-text);
  }

  h1 {
    font-size: calc(var(--font-size) * 1.9);
    font-family: var(--font-main);
    text-align: left;
  }

  h1::first-letter {
    text-transform: uppercase !important;
  }

  .course__aside-btn {
    padding: 0;
    width: 40px;
    height: 40px;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: var(--color-dark);
    border: 1px solid var(--color-dark);
    background-color: var(--color-main);
  }

  .course__aside-btn:hover {
    color: var(--color-light);
    background-color: var(--color-actions);
  }

  @media screen and (max-width: 1200px) {
    .course {
      grid-template-columns: 0 minmax(350px, 1fr);
    }

    /* .course-without-tr {
      grid-template-columns: minmax(350px, 1fr);
    } */

    .course__header {
      position: sticky;
      top: 50px;
      left: 0;
      background-color: var(--color-light);
      z-index: 5;
    }


    .breadcrumbs {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .course__aside-btn {
      position: relative;
      display: flex;
      z-index: 5;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: calc(var(--gap) * 0.8) !important;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .breadcrumbs {
      align-items: flex-start;
      flex-direction: column;
    }
  }
</style>
