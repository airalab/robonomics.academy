<template>
  <div class="layout line-numbers " data-prismjs-copy-timeout="500">

    <header-slot/>

    <page-title
      v-if="course" 
      :title="title" 
      :breadcrumbs="breadcrumbs"
      :lessonId="lessonId"
      :course="course"
    />

    <LessonInfo 
      v-if="lessonId" 
      :type="$ts(lesson.activity)"
      :time="$ts(lesson.time)"
      :tools="$ts(lesson.tools)"
    />

    <LessonsList 
      v-if="!lessonId" 
      :course="course" 
    />

    <slot/>

    <lesson-reaction v-if="lessonId && !noTranslations" :lessonTitle="$ts(lesson.title)"/>

    <LessonsNavigation
      v-if="lessonId && !noTranslations"
      :lessonId="parseInt(lessonId)"
      :course="course"
    />

    <subscription />

    <passed-lessons/>

    <QuestionIcon v-if="lessonId" :templateTitle="'https://github.com/airalab/robonomics.academy/issues/new?' + ghIssueTitle"/>

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

  import courses from '@/data/online-courses.yaml'

  export default {
    components: {
      HeaderSlot: () => import('~/components/Header.vue'),
      FooterSlot: () => import('~/components/Footer.vue'),
      PageTitle: () => import('~/components/PageTitle.vue'),
      PassedLessons: () => import('~/components/PassedLessons.vue'),
      LessonsList: () => import('~/components/LessonsList.vue'),
      LessonInfo: () => import('~/components/LessonInfo.vue'),
      LessonsNavigation: () => import('~/components/LessonsNavigation.vue'),
      Subscription: () => import('~/components/Subscription.vue'),
      QuestionIcon: () => import('~/components/QuestionIcon.vue'),
      UserTracker: () => import('~/components/UserTracker.vue')
    },

    props: {
      courseId: {
        default: null,
        required: true
      },
      lessonId: {
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
      course() {
        const c = courses.filter(element => element.id === this.courseId )
        return c[0]
      },
      lesson() {
        if(this.lessonId) {
          const l = this.course.lessons.filter(element => element.id === this.lessonId )
          return l[0]
        }
      },
      title() {
        if(this.lessonId) {
          return this.$ts(this.lesson.title)
        } else {
          return this.$ts(this.course.title)
        }
      },

      breadcrumbs() {
        var b = [
          {
            to: '/',
            text: 'Robonomics Academy'
          },
          {
            to: 'online-courses',
            text: this.$ts('Online Courses')
          },
        ]

        if(this.lesson) {
          b.push({
            to: 'online-courses/' + this.course.path,
            text: this.$ts(this.course.title)
          })
        }

        return b
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
        this.$metrika.hit(this.$route)
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
