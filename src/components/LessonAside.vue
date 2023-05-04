<template>
  <aside  class="lesson-aside" :class="{active: isSidebarOpen}">
    <div class="lesson-aside__top">
      <!-- tags -->
      <ul class="lesson-aside__tags">
        <li 
          class="lesson-aside__tag tag"
          v-for="tag in course.tags"
          :key="tag"
        >
          {{ tag }}
        </li>
      </ul>
      <!-- info -->
      <div class="lesson-aside__info">
        <Level :level="String(course.level)" cls="lesson-aside__level" />
        <div v-if="course.lessons.length > 1" class="lessons-count">
          <span>{{ course.lessons.length }}</span>
        </div>
      </div>
    </div>

    <div class="lessons-aside__bottom">
      <!-- lessons -->
      <ol v-if="course.lessons" class="lesson-aside__lessons">
        <li
          @click="$emit('closeSidebar')"
          class="lessons-aside__item"
          v-for="lesson in course.lessons"
          :key="lesson.id"
          :class="[{'lessons-aside__item--active': lesson.path ? path === lesson.path : path && path.includes('course') && lesson.id == 0 || course.lessons.length === 1 }, {'lessons-aside__item--zero': lesson.id == 0}, {'lessons-aside__item--in-progress': course.progress === 'in progress' || lesson.status === 'in progress'}]"
        >
          <g-link :to="course.progress !== 'in progress' && lesson.status !== 'in progress' ? `learn/${course.path}/${lesson.path}` : ''">
            {{  $ts(lesson.title ) }}
          </g-link>
        </li>
      </ol>

      <div v-if="course.author"  class="lesson-aside__author">
        By <span>{{ getAuthorByAlias(course.author)[0].fullName }}</span>
          <g-image v-if="course.authorImage" :src="require(`!!assets-loader!@imagesAuthors/${course.authorImage}`)" :alt="course.author" />
      </div>
    </div>

      <!-- calendar -->
      <div 
        class="lessons-aside__calendar-wrapper" 
        :class="[{active: isBubbleOpen}, {'lessons-aside__calendar-wrapper--mini': course.lessons.length <= 5}]" 
        @click.stop="openCalendarBlob"
      >
        <div  class="lessons-aside__calendar" :class="{active: isBubbleOpen}">
          <svg xmlns="http://www.w3.org/2000/svg" width="171.571" height="113.933" viewBox="0 0 171.571 113.933">
            <path id="Path_5459" data-name="Path 5459" d="M378.1,348.825s-12.368-13.608-4.535-42.059c26.8,0,41.934-2.634,49.767-23.253s-2.884-37.524-21.029-42.47-35.462-7.425-81.645-4.949-65.976,4.949-65.976,34.226,26.8,32.575,38.35,33.812,61.977,2.223,61.977,2.223S347.588,341.4,378.1,348.825Z" transform="translate(-254.558 -235.017)" fill="#4292e2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.25"/>
          </svg>
          <g-image src="@/assets/images/bubble-guy.png" aria-hidden="true" />

          <CalendarBubble :name="title" :type="'certificated course' " v-if="isBubbleOpen" @closeCalendarBlob="closeCalendarBlob"/>
        </div>
      </div>
  </aside>
</template>

<script>
  import authors from '/courses/authors/authors.yaml'
export default {

  props: {
    course: {
      type: Object,
      required: true
    },
    
    title: {
      type: String,
      default: ''
    },

    isSidebarOpen: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CalendarBubble: () => import('~/components/CalendarBubble.vue'),
    Level: () => import('~/components/Level.vue'),
  },

  data() {
    return {
      isBubbleOpen: false,
      path: null
    }
  },

  methods: {

    openCalendarBlob() {
      this.isBubbleOpen = true;
    },

    closeCalendarBlob() {
      this.isBubbleOpen = false;
    },

    getTitle() {
      const path =  this.$route.path; 
      const title = path.match(/\/([^\/]+)[\/]?$/);

      if(title) {
        this.path = title[1]
      }
    },

    getAuthorByAlias(alias) {
      return this.authors.filter(author => author.alias === alias)
    }
  },

  computed: {
    activeLesson() {
      if(this.title) {
        return this.course.lessons.filter(lesson => lesson.title === this.title)
      }
    },

    authors() {
      return authors
    }
  },

  watch: {
    '$route.path': function() {
      this.getTitle()
    }
  },

  mounted() {
    this.getTitle();
  }

}
</script>

<style scoped> 
  .lesson-aside {
    position: sticky;
    top: 40px;
    left: 0;
    max-height: 100vh;
    height: 100%;
    /* padding-bottom: 150px; */
    overflow-y: auto;
  }

  .lesson-aside__tags {
    list-style: none;
  }

  .lesson-aside__top {
    position: relative;
    min-height: 155px;
    padding: calc(var(--gap) * 0.5) calc(var(--gap) * 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-main);
    border-bottom: 3px solid var(--color-text);
  }

  .lesson-aside__top {
    z-index: 0;
  }

  .lesson-aside__info {
    display: flex;
  }

  .lesson-aside__info .lesson-aside__level {
    margin-right: calc(var(--gap) * 0.5);
  }

  .lessons-aside__bottom {
    min-height: 500px;
  }

  .lesson-aside__lessons {
    list-style: none; 
  }

  .lessons-aside__item {
    position: relative;
    counter-increment: number;
    /* padding: var(--gap); */
    padding-left: calc(var(--gap) * 1.5);
    color: var(--color-actions);
    transition: background-color 0.33s ease-in-out;
  }

  .lessons-aside__item::before {
    content:  counter(number, decimal-leading-zero);
    font-size: var(--font-size);
    font-weight: bold;
    left: 10px;
    line-height: 1.2;
    position: absolute;
    top: calc(var(--gap) * 1.09);
    color: inherit;
  }

  .lessons-aside__item--zero {
    counter-reset: number -1;
  }

  .lessons-aside__item--in-progress {
    opacity: 0.6;
  }
  
  
  .lessons-aside__item--in-progress a {
    color: var(--color-actions) !important;
    cursor: default;
  }


  .lessons-aside__item a {
    display: block;
    padding: var(--gap);
    font-weight: 700;
    color: var(--color-actions);
  }

  .lessons-aside__item:hover {
    background-color: #c2dcecc6;
  }

  .lessons-aside__item--in-progress:hover {
    background-color: transparent;
  }
  

  .lessons-aside__item--active {
    background-color: var(--aside-active);
    color: var(--color-text);
  }

  .lessons-aside__item--active.lessons-aside__item a {
    color: var(--color-text);
  }

  .lesson-aside__author {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-style: italic;
    padding: calc(var(--gap) * 0.5);
    color: var(--color-text);
  }

  .lesson-aside__author span {
    padding: calc(var(--gap) * 0.3);
    color: var(--color-actions);
  }

  .lesson-aside__author img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 3px solid var(--color-actions);
  }

  .lessons-aside__calendar-wrapper {
    position: relative;
    height: 320px;
  }

  /* .lessons-aside__calendar-wrapper--mini {
    position: static;
  } */

  .lessons-aside__calendar-wrapper.active {
    height: 500px;
  }

  .lessons-aside__calendar {
    position: absolute;
    bottom: 0;
    right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
  }

  .active.lessons-aside__calendar::after  {
    color: #ffffff5e;
  }

  .lessons-aside__calendar.active svg path {
    fill: var(--color-text-bubble-dark);
  }

  .lessons-aside__calendar img {
    max-width: 315px;
    width: 100%;
  }

  .lessons-aside__calendar svg {
    position: absolute;
    left: -28px;
    top: -60px;
  }

  .lessons-aside__calendar::after {
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

  @media screen and (max-width: 1200px) {
    .lesson-aside {
      width: 450px;
      background-color: var(--color-light);
      border: 3px solid var(--color-dark);
      transition: transform 0.33s ease-in-out;
      transform: translateX(-100%);
      z-index: 100;
    }

    .lesson-aside.active {
      transform: translateX(0%);
    }
  }

  @media screen and (max-width: 480px) {
    .lesson-aside {
      width: 350px;
    }

    .lessons-aside__calendar img {
      max-width: 255px;
      width: 100%;
    }

    
  }


</style>