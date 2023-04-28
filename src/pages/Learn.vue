<template>
  <Layout>

    <MetaInfo
      pageTitle = "Learn with robonomics"
      pageDescription = "Learn with us"
      :pageImage = "'/og/learn'"
    />

    <section class="learn">
      <div class="container__mid">

        <div class="container__narrow learn__info">
          <h1>{{ $ts('Learn and practice web3') }}</h1>
          <p class="text__center">{{ $ts('Discover our expanding selection of hands-on exercises, tutorials, and online courses for free. The core developers and researchers at Robonomics invite you to enter the world of web3 and gain practical and theoretical skills through quizzes, device simulations, and even real-life setups using Robonomics Parachain (Polkadot), IPFS, and other web3 tools.') }}</p>
        </div>

        <Tags @filterCourses="filterCourses"/>

        <div class="learn__wrapper grid-3">
          <LearnItem 
            :item="course"   
            v-for="course in filteredCourses"
            :key="course.id"
          />
        </div>

      </div>
    </section>

  </Layout>
</template>

<script>
  import courses from '@/data/all-courses.yaml'

export default {

  components: {
    MetaInfo: () => import('~/components/MetaInfo.vue'),
    Tags: () => import('~/components/Tags.vue'),
    LearnItem: () => import('~/components/LearnItem.vue'),
  },

  data() {
    return {
      currTag: null
    }
  },

  computed: {
    courses() {
      return courses
    },

    activeTags() {
      return this.$store.state.activeTags
    },


    filteredCourses() {
      const filtered = [];
      if(this.activeTags.length) {
          this.courses.forEach((course) => {
          
          const courseContainsTag = (tag) => {
            return course.tags.indexOf(tag) != -1;
          }
          
          if(this.activeTags.some(courseContainsTag)) {
            filtered.push(course);
          }
        });
        return filtered
      } else {
        return this.courses
      }
    }
  },

  methods: {
    filterCourses(tag) {
      this.currTag = tag;
    }
  },

  mounted() {
    this.$store.commit('TOGGLE_SHOW_HEADER', true)
    this.$store.commit('REMOVE_ALL_TAGS')
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