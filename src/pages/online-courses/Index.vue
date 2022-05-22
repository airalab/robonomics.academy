<template>
  <Layout>
    <page-title 
      title="Online courses" 
      :breadcrumbs="breadcrumbs"
      />

      <section class="container__narrow">
        <p class="text__hyphened">The core developers of the Robonomics project, robotics specialists and PhD research scientists offer to pass through compendious experience based on 7 years of work with web 3.0 projects.</p>
        <p class="text__hyphened">Get new skills in using modern web technologies to build IoT solutions.</p>

        <CoursePreview
          v-for = "item in courses"
          :key = "item.id"
          :title = "item.title"
          :link = "item.path"
          :icon = "item.icon"
          :info = "item.info"
        />
     
      </section>

  </Layout>
</template>

<script>

  import courses from '@/data/online-courses.yaml'

  export default {
    components: {
      PageTitle: () => import('~/components/PageTitle.vue'),
      CoursePreview: () => import('~/components/CoursePreview.vue'),
    },

    data() {
      return{
        breadcrumbs: [
          {
            to: '/',
            text: 'Robonomics Academy'
          }
        ]
      }
    },


    computed: {
      courses() {
        return courses
      }
    }
  }
</script>