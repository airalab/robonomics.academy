<template>
  <Layout>

    <MetaInfo
      pageTitle = "Learn with robonomics"
      pageDescription = "Learn with us"
      :pageImage = "'/og/learn'"
    />

    <section class="learn">
      <div class="container__mid">

        <div class="overlay" :class="{'open': isFilterOpen}" />

        <div class="container__narrow learn__info">
          <h1>{{ $ts('Learn and practice web3') }}</h1>
          <p class="text__center">{{ $ts('Discover our expanding selection of hands-on exercises, tutorials, and online courses for free. The core developers and researchers at Robonomics invite you to enter the world of web3 and gain practical and theoretical skills through quizzes, device simulations, and even real-life setups using Robonomics Parachain (Polkadot), IPFS, and other web3 tools.') }}</p>
        </div>

        <div class="learn__actions">
          <Tags @filterCourses="filterCourses"/>
          <LessonsFilter :isOpen="isFilterOpen" @toggleFilter="isFilterOpen = !isFilterOpen"/>
        </div>

        <div class="learn__wrapper grid-3" v-if="filteredCourses.length">
          <LearnItem 
            :item="course"   
            v-for="course in filteredCourses"
            :key="course.id"
            :allCourses="$page.courses.edges"
          />
        </div>

        <div class="learn__no-courses" v-else>
          No courses were found with such filters.
          Try again 🤖
        </div>

      </div>
    </section>

  </Layout>
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
          defaultName
          lastUpdate
        }
      }
    }

  }

</page-query>

<script>
  // import courses from '@/data/all-courses.yaml'
  import VueCookies from 'vue-cookies';
  import courses from '/courses/all-courses.yaml'

export default {

  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue'),
    Tags: () => import('~/components/Tags.vue'),
    LessonsFilter: () => import('~/components/Filter.vue'),
    LearnItem: () => import('~/components/LearnItem.vue'),
  },

  data() {
    return {
      currTag: null,
      isFilterOpen: false,
    }
  },

  computed: {
    courses() {
      return courses;
    },

    reverseCourses() {
      return this.courses.map((item,idx) => this.courses[this.courses.length-1-idx])
    },

    activeTags() {
      return this.$store.state.activeTags
    },

    activeFilter() {
      return this.$store.state.activeFilter
    },


    filteredCourses() {
      let filtered = [];
      if(this.activeTags.length || this.activeFilter.length) {

        if(this.activeTags.length) { 

          this.reverseCourses.forEach((course) => {

          const courseContainsTag = (tag) => {
              return course.tags.indexOf(tag) != -1;
            }
            if(this.activeTags.some(courseContainsTag)) {
              filtered.push(course);
            }
          })
        } 

        if(this.activeFilter.length) {

          if(filtered.length) {
            filtered = this.filterCoursesByLevel(this.filterCoursesByTag(this.filterCoursesByAuthor(filtered)))
          } else {
            const filterCourses = () => {
              return this.filterCoursesByLevel(this.filterCoursesByTag(this.filterCoursesByAuthor(this.reverseCourses)))
            }
            filtered.push(...filterCourses())
          }

        }

        return filtered
  
      }  else {
        return this.reverseCourses
      }
    }
  },

  methods: {
    filterCourses(tag) {
      this.currTag = tag;
    },

    filterCoursesByLevel(courses) {
      if(this.activeFilter[0].level) {
        return courses.filter(course => !String(course.level).indexOf(this.activeFilter[0].level))
      }
      return courses
     
    },

    filterCoursesByAuthor(courses) {
      if(this.activeFilter[0].author) {
        return courses.filter(course => course.author && !course.author.indexOf(this.activeFilter[0].author))
      }
      return courses
    },

    filterCoursesByTag(courses){
      if(this.activeFilter[0].tag) {
        return courses.filter(course => course.filters.length && course.filters.includes(this.activeFilter[0].tag.toLowerCase()))
      }
      return courses
      
    }
  },

  mounted() {
    this.$store.commit('TOGGLE_SHOW_HEADER', true)
    this.$store.commit('REMOVE_ALL_TAGS')
    this.$store.commit('REMOVE_ACTIVE_FILTERS')

    document.addEventListener('click', (e) => {
      if(e.target.classList.contains('overlay')) {
        this.isFilterOpen = false
      }
    })

    if(localStorage.getItem('lastVisit')) {
      if(!this.$store.state.lastVisit) {
        this.$store.commit('SET_LAST_VISIT', new Date(JSON.parse(localStorage.getItem('lastVisit'))).getTime())
        localStorage.setItem('lastVisit', JSON.stringify(new Date(Date.now())))
      }

    } else {
      localStorage.setItem('lastVisit', JSON.stringify(new Date(Date.now())))
    }

    if(localStorage.getItem('forUpdts')) {
      const items = JSON.parse(localStorage.getItem('forUpdts')) 
      items.map(el => {
        this.$store.commit('ADD_LAST_VISITS', {lastUpdate: el.lastUpdate, title: el.title, lastVisit: el.lastVisit ? new Date(el.lastVisit).getTime() : ''})
      })
    }
  }


}
</script>

<style scoped>
  .learn__info {
    margin-bottom: var(--gap);
  }

  .learn__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .learn__actions {
    display: flex;
    /* align-items: flex-start;
    justify-content: flex-start; */
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: calc(var(--gap) * 0.4);
    margin-bottom: calc(var(--gap) * 2);
  }

  .learn__no-courses {
    min-height: 250px;
    height: 100%;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/images/discover-image.png');
    background-position: top;
    background-size: contain;
  }

  .overlay {
    opacity: 0;

  }

  @media screen and (max-width: 1300px) {
        .grid-3 {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 850px) {
        .grid-3 {
            grid-template-columns: 1fr;
        }
    }
</style>