<template>
  <Layout>
    <page-title 
      :title="$ts('Online courses')"
      :breadcrumbs="breadcrumbs"
      />

      <section class="container__narrow">
        <p class="text__hyphened">{{$ts('The core developers of the Robonomics project, robotics specialists and PhD research scientists offer to pass through compendious experience based on 7 years of work with web 3.0 projects.')}}</p>
        <p class="text__hyphened">{{$ts('Get new skills in using modern web technologies to build IoT solutions.')}}</p>

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
      title: this.$ts('Online courses'),
      description: this.$ts("Robonomics Academy online courses"),
      image: {
          url: this.$locale ? this.$website + `/og/online-courses-${this.$locale}.png` : this.$website + `/og/online-courses-en.png`,
          width: 1280,
          height: 650
      },
      openGraph: {
        title: this.$ts('Online courses'),
        type: 'website',
        site_name: 'Robonomics Academy',
        url: 'https://robonomics.academy/online-courses',
        image: {
          url: this.$locale ? this.$website + `/og/online-courses-${this.$locale}.png` : this.$website + `/og/online-courses-en.png`,
          width: 1280,
          height: 650
        },
      },
      twitter: {
        title: this.$ts('Online courses'),
        type: 'summary',
        site: '@AIRA_Robonomics',
        creator: '@AIRA_Robonomics',
        image: this.$locale ? this.$website + `/og/online-courses-${this.$locale}.png` : this.$website + `/og/online-courses-en.png`,
        card: 'summary_large_image',
      }
    })
  }
  }
</script>