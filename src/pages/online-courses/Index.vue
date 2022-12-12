<template>
  <Layout>

    <MetaInfo
      pageTitle = "Online Courses"
      pageDescription = "Online courses of Robonomics Academy"
      :pageImage = "'/og/online-courses'"
      coursePageList
    />

    <page-title 
      :title="$ts('Online Courses')"
      :breadcrumbs="breadcrumbs"
      />

      <section class="container__narrow">
        <CoursePreview
          v-for = "item in courses"
          :key = "item.id"
          :title = "$ts(item.title)"
          :link = "item.path"
          :icon = "item.icon"
          :info = "$ts(item.info)"
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
      MetaInfo: () => import('~/components/MetaInfo.vue')
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
    },
  }
</script>