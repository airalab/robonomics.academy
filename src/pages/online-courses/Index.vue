<template>
  <Layout>
    <page-title 
      title="Online courses" 
      :breadcrumbs="breadcrumbs"
      />

      <section class="container__narrow">
        <p class="text__hyphened">{{$ts('The core developers of the Robonomics project, robotics specialists and PhD research scientists offer to pass through compendious experience based on 7 years of work with web 3.0 projects.')}}</p>
        <p class="text__hyphened">{{$ts('Get new skills in using modern web technologies to build IoT solutions.')}}</p>

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
    },

    metaInfo() {
    return this.$seo({
      title: 'Online courses',
      description: "Robonomics Academy online courses",
      image: {
          url: this.$website + '/og/online-courses.png',
          width: 1280,
          height: 650
      },
      openGraph: {
        title: `Online courses`,
        type: 'website',
        site_name: 'Robonomics Academy',
        url: 'https://robonomics.academy/online-courses',
        image: {
          url: this.$website + '/og/online-courses.png',
          width: 1280,
          height: 650
        },
      },
      twitter: {
        title: `Online courses`,
        type: 'summary',
        site: '@AIRA_Robonomics',
        creator: '@AIRA_Robonomics',
        image: this.$website + '/og/online-courses.png',
        card: 'summary_large_image',
      }
    })
  }
  }
</script>