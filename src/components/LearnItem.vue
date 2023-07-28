<template>
    <g-link v-if="item.published" class="learn__link" :class="{'in-progress': item.progress === 'coming'}" :to="`learn/${item.path}/overview`">
      <div v-if="isUpdated" class="learn__updated">Updated</div>
      <ul class="learn__tags">
        <li v-for="tag in item.tags" :key="tag.id" class="tag learn__tag">
          {{ tag }}
        </li>
        <span v-if="item.progress === 'coming'">(coming soon)</span>
      </ul>
      <div v-if="item.lessons.length > 1" class="learn__lessons lessons-count">
        <span>{{ item.lessons.length }}</span>
      </div>
      <h3> {{ $ts(item.title) }} </h3>
      <div class="learn__author" :class="{'many-authors': getAuthorByAlias(item.author).length > 2}" v-if="item.author" >
        <div class="author-wrapper" v-for="(author) in getAuthorByAlias(item.author)" :key="author.alias">
          <g-image v-if="author.avatar" :src="require(`!!assets-loader!@imagesAuthors/${author.avatar}`)" :alt="item.author" />
          <h4>{{ $ts(author.fullName)}}</h4>
        </div>
      </div>
      <Level :level="String(item.level)" cls="learn__level" />
    </g-link>
</template>

<script>
  import authors from '/courses/authors/authors.yaml'
export default {

  components: {
    Level: () => import('~/components/Level.vue'),
  },

  props: {
    item: {
      type: Object,
      required: true
    },
    allCourses: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      octokit: null,
      filteredAuthors: []
    }
  },

  computed: {
    authors() {
      return authors
    },
    coursesWithLastUpdate() {
      return this.allCourses.filter(course => {
        return course.node.defaultName === this.item.title
      })
    },
    lastVisitInfo() {
      if(this.$store.state.lastVisits.length) {
        return this.$store.state.lastVisits.filter(i => i.title === this.item.title)
      }
    },
    isUpdated() {
      if(this.$store.state.lastVisits.length && this.lastVisitInfo.length) return this.lastVisitInfo[0].isUpdated
    }
  },


  methods: {
    getAuthorByAlias(alias) {
      let authors = []
      if(!Array.isArray(alias)) {
        authors.push(...this.authors.filter(author => author.alias === alias))
      } else {
        alias.map(a => {
          authors.push(...this.authors.filter(author => author.alias === a)) 
        })
      }
      return authors;
    },

    checkLastUpdate() {
      if(this.coursesWithLastUpdate.length === 1) {
        if(new Date(this.coursesWithLastUpdate[0].node.lastUpdate).getTime() > new Date(this.$store.state.lastVisit).getTime()) {
          this.$store.commit('ADD_LAST_VISITS', {lastUpdate: new Date(this.coursesWithLastUpdate[0].node.lastUpdate).getTime(), title: this.coursesWithLastUpdate[0].node.defaultName, isUpdated: true, lastVisit: ''})
          return
        }
      } else {
        this.coursesWithLastUpdate.forEach(item => {
          if(new Date(item.node.lastUpdate).getTime() > new Date(this.$store.state.lastVisit).getTime()) {
            this.$store.commit('ADD_LAST_VISITS', {lastUpdate: new Date(item.node.lastUpdate).getTime(), title: item.node.defaultName, isUpdated: true, lastVisit: ''})
            return
          }
        })
      }
    }
  },

  mounted() {
    if(this.$store.state.lastVisit) {
      this.checkLastUpdate()
    }
  }

}
</script>

<style scoped>
    .learn__link{
      position: relative;
      --color: var(--color-text);
      color: var(--color) !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 320px;
      padding: calc(var(--gap) * 0.5);
      background-color: var(--color-main);
      border: 3px solid var(--color);
    }

    .learn__link.in-progress {
      opacity: 0.5;
    }

    /* .learn__link > div {
      padding: calc(var(--gap) * 0.5);
    } */

    .learn__link h3 {
      display: -webkit-box;
      padding-top: calc(var(--gap) * 0.5);
      margin-bottom: calc(var(--gap) * 0.5);
      font-family: var(--font-main);
      font-size: calc( var(--font-size) * 1.6);
      line-height: 1.2;
      text-align: left;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      /* white-space: pre-wrap; */
    }

    .learn__link:hover {
      --color: var(--color-actions)
    }

    .learn__tags {
      position: absolute;
      top: 10px;
      right: calc(var(--gap) * 0.5);
      list-style: none;
      text-align: right;
    }

    .learn__lessons {
      position: absolute;
      z-index: 3;
      top: calc(var(--gap) * 0.5);
      left: calc(var(--gap) * 0.5);
      width: 50px;
      height: 50px;
    }

    .learn__level {
      position: absolute;
      right: calc(var(--gap) * 0.5);
      bottom: calc(var(--gap) * 0.5);
    }

    .learn__author {
      position: absolute;
      left: calc(var(--gap) * 0.5);
      bottom: calc(var(--gap) * 0.5);
    }

    .many-authors {
      position: static;
      margin-top: var(--gap);;
    }

    .author-wrapper {
      display: flex;
      align-items: center;
    }

    .author-wrapper:not(:last-of-type) {
      margin-bottom: calc(var(--gap) * 0.1);
    }
    

    .many-authors .author-wrapper:not(:last-of-type) {
      margin-bottom: calc(var(--gap) * 0.3);
    }

    .learn__author h4 {
      margin: 0;
      font-family: var(--font-main);
      font-weight: 900;
      font-size: calc( var(--font-size) * 1);
    }

    .many-authors h4 {
      font-size: calc( var(--font-size) * 0.8);
    }

    .learn__author img {
      display: inline-block;
      width: 44px;
      height: 44px;
      margin-right: calc(var(--gap) * 0.5);
      border-radius: 100%;
    }

    .many-authors img {
      width: 30px;
      height: 30px;
      margin-right: calc(var(--gap) * 0.5);
    }

    .learn__updated {
      position: absolute;
      right: -20px;
      top: -20px;
      padding: 0 calc(var(--gap) * 0.3);
      font-weight: 900;
      background-color: #ff76be;
      color: var(--color-light);
    }

    @media screen and (max-width: 400px) {
      .learn__author {
        flex-direction: column;
        align-items: flex-start;
      }

      .learn__author h4 {
        max-width: 68%;
        text-align: left;
      }
    }

</style>