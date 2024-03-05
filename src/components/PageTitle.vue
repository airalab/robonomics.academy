<template>

  <section v-if="title" :class="[classes, {'section-lessonInfo': lessonId}, {'section-with-calendar': !lessonId && course || doc}]">
    <div class="container__narrow page-title">
      <ul v-if="breadcrumbs">
        <li v-for="item in breadcrumbs" :key="item.id">
          <g-link :to="item.to">{{item.text}}</g-link>
        </li>
      </ul>
      <h1>{{title}}</h1>
    </div>
    <div v-if="text" class="container__narrow page-title__text">
      <p>{{ text }}</p>
    </div>
    <div v-if="!lessonId && course || doc" class="page-title__calendar" :class="{active: isBubbleOpen}" @click.stop="openCalendarBlob">
      <svg xmlns="http://www.w3.org/2000/svg" width="171.571" height="113.933" viewBox="0 0 171.571 113.933">
        <path id="Path_5459" data-name="Path 5459" d="M378.1,348.825s-12.368-13.608-4.535-42.059c26.8,0,41.934-2.634,49.767-23.253s-2.884-37.524-21.029-42.47-35.462-7.425-81.645-4.949-65.976,4.949-65.976,34.226,26.8,32.575,38.35,33.812,61.977,2.223,61.977,2.223S347.588,341.4,378.1,348.825Z" transform="translate(-254.558 -235.017)" fill="#4292e2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
      </svg>
      <g-image src="@/assets/images/bubble-guy.png" aria-hidden="true" />

      <CalendarBubble :name="currentTitle" :type="doc && 'playground' || course && 'certificated course' " v-if="isBubbleOpen" @closeCalendarBlob="closeCalendarBlob"/>
    </div>
    <client-only>
      <div class="lesson-update" v-if="lessonId || doc">

        <div class="lesson-update__wrapper" v-show="ghUpdateName">
          <g-link class="lesson-update__link" :to="ghUpdateUrl">{{$t('Latest update')}}</g-link> {{$t('on (date of commit)')}} {{ghUpdateDate}} {{$t('by (author of commit)')}} {{ghUpdateName}}
        </div>

      </div>

      <div v-if="content">
        <slot/>
      </div>
    </client-only>
  </section>

</template>




<script>

import {Octokit} from '@octokit/rest'

export default {

  components: {
    CalendarBubble: () => import('~/components/CalendarBubble.vue'),
  },

  data() {
    return {
      ghLink: null,
      ghUpdateDate: null,
      ghUpdateName: null,
      ghUpdateUrl: null,
      octokit: null,
      isBubbleOpen: false,
    }
  },

  props: {

    title: {
      type: String
    },
    breadcrumbs: {
      type: Array
    },
    lessonId: {
      type: String,
    },
    course: {
      type: Object
    },
    content: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    },
    doc: {
      type: Boolean,
      default: false
    },
  },


  watch: {
    "$route.path": function(current, old) {
      this.github_lastupdated()
      this.github_link()
    }
  },

  computed: {
    classes() {
      return {
        [`section__yellow`]: true,
        [`breadcrumbs`]: this.breadcrumbs
      };
    },
    currentLesson () {
      let lesson = this.$route.matched[0].path;
      return lesson.slice(4)+'.md';
    },
    currentDoc() {
      let doc = this.$route.matched[0].path;
      return doc.slice(4)+'.md';
    },
    currentTitle() {
      if(this.course) {
        return this.course.title
      } 

      if(this.doc) {
        return this.title
      }
    }
  },

  methods: {
    github_lastupdated() {
      if (!this.octokit) {
        return
      }
      this.octokit.repos
        .listCommits({
          owner: "airalab",
          repo: "robonomics.academy",
          path: !this.doc ? 'courses/' + this.$locale + '/' + this.currentLesson : 'docs/' + this.$locale + '/' + this.currentDoc
        })
        .then(({ data }) => {
          let d = new Date(data[0].commit.author.date)
          this.ghUpdateDate = d.toLocaleDateString()
          this.ghUpdateName = data[0].commit.author.name
          this.ghUpdateUrl = data[0].html_url
        });
    },
    github_link() {
      if (!this.octokit) {
        return
      }
      this.octokit.repos
        .getContent({
          owner: "airalab",
          repo: "robonomics.academy",
          path: !this.doc ? 'courses/' + this.$locale + '/' + this.currentLesson : 'docs/' + this.$locale + '/' + this.currentDoc
        })
        .then(result => {
          this.ghLink = result.data.html_url
        }).catch(e =>{
          console.error(e.message)
        })
    },
    
    openCalendarBlob() {
      this.isBubbleOpen = true;
    },

    closeCalendarBlob() {
      this.isBubbleOpen = false;
    }
  },

  mounted() {
    if(this.lessonId) {
      this.octokit = new Octokit({
      })
      this.github_lastupdated()
      this.github_link();
    }
  }

}
</script>

<style scoped>

  section {
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
  }

  .section-lessonInfo .page-title {
    margin-bottom: calc(var(--gap) * 3);
  }

  .section-lessonInfo {
    padding-bottom: 0;
    min-height: 477px;
    height: 100%;
  }

  .container__narrow, .lesson-update {max-width: 650px; }

  .page-title {
    position: relative;
    overflow: hidden;
  }

  .page-title__calendar {
    position: absolute;
    bottom: 0;
    right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
  }

  .active.page-title__calendar::after  {
    color: #ffffff5e;
  }

  .page-title__calendar.active svg path {
    fill: var(--color-text-bubble-dark);
  }

  .page-title__calendar img {
    max-width: 258px;
    width: 100%;
  }

  .page-title__calendar svg {
    position: absolute;
    left: -28px;
    top: -60px;
  }

  .page-title__calendar::after {
    content: 'Add this \A to my calendar!';
    position: absolute;
    top: -44px;
    left: -8px;
    max-width: 110px;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    color: var(--color-light);
    white-space: pre; 
  }


  ul {
    list-style: none;
    font-family: var(--font-title);
    font-size: calc(var(--font-size) * 1.2);
    font-weight: bold;
  }

  h1 {
    margin-top: calc(var(--gap) * 0.5);
    text-align: left;
  }

  a {
    color: #37393c;
  }

  a:hover {
    color: var(--color-second)
  }

  .lesson-update {
    margin: 0 auto;
    /* padding-left: 10px; */
    min-height: 38px;
    padding-bottom: 10px;
  }

  .lesson-update__wrapper {
    font-weight: 300;
    font-style: italic;
  }

  .lesson-update__link {
    color: var(--color-text);
  }

  .breadcrumbs .container__narrow {
    padding-left: 10px;
    border-left: 2px solid var(--color-text);
  }

  .container__narrow.page-title__text {
    margin-top: calc(var(--gap) * 2);
    border: none ;
  }

  @media screen and (max-width: 1200px) {
    section.section-with-calendar {
      padding-bottom: 265px;
    }

    .page-title__calendar {
      bottom: 0;
      left: 50%;
      right: unset;
      transform: translateX(-50%);
    }
  }

  @media screen and (max-width: 410px) {
    h1 {
      font-size: 2rem;
    }
  }

</style>