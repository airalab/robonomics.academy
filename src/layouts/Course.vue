<template>
  <div class="layout">

   <header-slot/>

   <page-title
      v-if="course" 
      :title="title" 
      :breadcrumbs="breadcrumbs"
    />

    <LessonInfo 
      v-if="lessonId" 
      :type="lesson.activity"
      :time="lesson.time"
      :tools="lesson.tools"
    />

    <LessonsList 
      v-if="!lessonId" 
      :course="course" 
    />
    
    <slot/>

    <passed-lessons/>

    <footer-slot/>

  </div>
</template>

<script>

  import courses from '@/data/online-courses.yaml'

  export default {
    components: {
      HeaderSlot: () => import('~/components/Header.vue'),
      FooterSlot: () => import('~/components/Footer.vue'),
      PageTitle: () => import('~/components/PageTitle.vue'),
      PassedLessons: () => import('~/components/PassedLessons.vue'),
      LessonsList: () => import('~/components/LessonsList.vue'),
      LessonInfo: () => import('~/components/LessonInfo.vue'),
    },

    props: {
      courseId: {
        default: null,
        required: true
      },
      lessonId: {
        default: null
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
          return this.lesson.title
        } else {
          return this.course.title
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
            text: 'Online courses'
          },
        ]

        if(this.lesson) {
          b.push({
            to: 'online-courses/' + this.course.path,
            text: this.course.title
          })
        }

        return b
      }
    }
  }
</script>