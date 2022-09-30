<template>

  <section v-if="title" :class="classes">
    <div class="container__narrow">
      <ul v-if="breadcrumbs">
        <li v-for="item in breadcrumbs" :key="item.id">
          <g-link :to="item.to">{{item.text}}</g-link>
        </li>
      </ul>
      <h1>{{title}}</h1>
    </div>
    <div class="lesson-update" v-if="lessonId">

      <div class="lesson-update__wrapper" v-show="ghUpdateName">
        <g-link class="lesson-update__link" :to="ghUpdateUrl">{{$ts('Latest update')}}</g-link> {{$ts('on (date of commit)')}} {{ghUpdateDate}} {{$ts('by (author of commit)')}} {{ghUpdateName}}
      </div>

    </div>
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
      return lesson.slice(4)+'.vue';
    },
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
          path: 'src/pages/' + this.currentLesson
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
          path: 'src/pages/' + this.currentLesson
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
  }

  .container__narrow, .lesson-update {max-width: 650px; }


  ul {
    list-style: none;
    font-family: var(--font-title);
    font-size: calc(var(--font-size) * 1.2);
    font-weight: bold;
  }

  h1 {
    text-align: left;
  }

  a {
    color: var(--color-white)
  }

  a:hover {
    color: var(--color-orange)
  }

  .lesson-update {
    padding-top: calc(var(--gap) * 3);
  }

  .lesson-update__wrapper {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 300;
    font-style: italic;
  }

  .lesson-update__link {
    color: var(--color-brown);
  }

  .breadcrumbs .container__narrow {
    padding-left: 10px;
    border-left: 2px solid var(--color-brown);
  }

  @media screen and (max-width: 410px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>