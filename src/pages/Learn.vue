<template>
  <Layout>

    <MetaInfo
      pageTitle = "Learn with robonomics"
      pageDescription = "Discover our expanding selection of hands-on exercises, tutorials, and online courses for free. The core developers and researchers at Robonomics invite you to enter the world of web3 and gain practical and theoretical skills through quizzes, device simulations, and even real-life setups using Robonomics Parachain (Polkadot), IPFS, and other web3 tools."
      :pageImage = "'/og/Learn'"
    />

    <section class="learn">
      <div class="container__mid">

        <div class="overlay" :class="{'open': isFilterOpen}" />

        <div class="container__narrow learn__info">
          <h1>{{ $t('Learn and practice web3') }}</h1>
          <p class="text__center">{{ $t('Discover our expanding selection of hands-on exercises, tutorials, and online courses for free. The core developers and researchers at Robonomics invite you to enter the world of web3 and gain practical and theoretical skills through quizzes, device simulations, and even real-life setups using Robonomics Parachain (Polkadot), IPFS, and other web3 tools.') }}</p>
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
          {{ $t('No courses were found with such filters.') }}
          {{ $t('Try again') }} 🤖
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

      // lessons titles for translations
      allTitles: [this.$t('Introduction to the ideas of Robonomics'), this.$t('Broadcasting Through the Black Mirror'), this.$t('At the Intersection of Cybernetics and Economics'), this.$t('Polkadot Ecosystem for Home IoT Infrastructure'), this.$t('IoT Subscriptions Using Robonomics Parachain'), this.$t('Sovereign Smart Home with Robonomics and Home Assistant'), this.$t('Raspberry Pi Setup'), this.$t('MQTT Broker Setup and Home Assistant Init'), this.$t('Gateway Setup: Zigbee2MQTT'), this.$t('Gateway Setup: Robonomics SLS Gateway'), this.$t('Robonomics IoT Subscription Setup'), this.$t('Robonomics Integration Setup'), this.$t('Sensors Connectivity & Decentralized Sensors Network'), this.$t( 'Sensor Hardware'), this.$t('Setting up and connecting sensors'), this.$t('Sensors connectivity module'), this.$t('Sensors connectivity config options'), this.$t('Sensor map deployment'), this.$t('Robonomics sensors measure analytics and archive mode'), this.$t('Connect Mars Curiosity Rover'), this.$t('Connect ROS-compatible drone'), this.$t('Connect Kuka manipulator'), this.$t('Connect unmanned aerial vehicle'), this.$t('Control Baxter robot'), this.$t('ROS-based projects for smart spaces'), this.$t('Operate Boston Dynamics Spot'), this.$t( "Quickstart Your Bachelor's Thesis with AI-powered Tools"), this.$t('Introduction'), this.$t('Literature Review'), this.$t('Methods'), this.$t('Results'), this.$t('Conclusion'), this.$t("OpenGov for managing the IoT infrastructure"), this.$t("The Shadow of AdCorp's Intrusion"), this.$t("Introduction to open source solution for private smart homes"), this.$t("New Home, New Habits"), this.$t("Assembling Smart Home Board"), this.$t("Unleash Automation Potential"), this.$t( "Escape from Black Mirror"), this.$t("The story of a girl named Trinity"), this.$t("Fake Housewife & AI research Smart Home Solution"), this.$t("Meet Fake Housewife Zoe and her story"), this.$t("Risks of standard Smart Home solutions and the Home Assistant"), this.$t("Blockchain-based Smart home solutions"), this.$t("Home Assistant + blockchain+Web3"), this.$t("Studying the Sovereign smart home course at the academy and WIKI instructions"), this.$t("Fake Housewife & AI is researching devices to install"), this.$t("Fake Housewife & AI is installing a Smart Home Robonomics"), this.$t( "AI scenario of the Relax zone for the Fake Housewife"), this.$t("Software Developing for Boston Dynamics Spot"), this.$t("Emergency Stop, Initialization, Body Position Control"), this.$t('Getting Used to Feecc'), this.$t('Architecture'), this.$t('Overview'), this.$t('Demo of Feecc'), this.$t('Deployment of Engineer Workbench'), this.$t('Deployment of Analytics'), this.$t('World computer in your home'), this.$t('Part 1: The Idea of a World Computer'), this.$t('Part 2: The Heart of the World Computer'), this.$t('Part 3: Emergence of the World Computer'), this.$t('Part 4: The Path of a New Block of Information in the World Computer'), this.$t('Robonomics School 2024 / IoT is More Dangerous Than AI'),],

      // all lessons authors for translations
      authors: [this.$t('Ivan Berman'), this.$t('Leemo'), this.$t('Vadim Manaenko'), this.$t('Sergei Lonshakov'), this.$t('Anna Wimmer-Savinova'), this.$t('Pavel Tarasov'), this.$t('Alexander Smekhnov')]
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
        return courses.filter(course => {
          if(!Array.isArray(course.author)) {
            return course.author && !course.author.indexOf(this.activeFilter[0].author)
          } else {
            return course.author.includes(this.activeFilter[0].author)
          }
        })

      }
      return courses
    },

    filterCoursesByTag(courses){
      if(this.activeFilter[0].tag) {
        const filteredCourses = [];
        courses.filter(course => {
          if(course.filters.length) {
            course.filters.filter(f => {
              if(f.toLowerCase() === this.activeFilter[0].tag.toLowerCase()) {
                filteredCourses.push(course)
              }
            })
          }
        })
        return filteredCourses
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