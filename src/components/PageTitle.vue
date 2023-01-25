<template>

  <section v-if="title" :class="[classes, {'section-lessonInfo': lessonId}]">
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
    <client-only>
      <div class="lesson-update" v-if="lessonId || doc">

        <div class="lesson-update__wrapper" v-show="ghUpdateName">
          <g-link class="lesson-update__link" :to="ghUpdateUrl">{{$ts('Latest update')}}</g-link> {{$ts('on (date of commit)')}} {{ghUpdateDate}} {{$ts('by (author of commit)')}} {{ghUpdateName}}
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

  data() {
    return {
      ghLink: null,
      ghUpdateDate: null,
      ghUpdateName: null,
      ghUpdateUrl: null,
      octokit: null,
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
    }

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
  }

  .container__narrow, .lesson-update {max-width: 650px; }


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
    color: var(--color-light-lesson)
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

  @media screen and (max-width: 410px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (prefers-color-scheme: dark) { 
    a:hover {
      color: var(--color-light)
    }
  }
</style>