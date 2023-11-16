<template>
  <Layout>

    <MetaInfo
      pageTitle = "Apply for Certificate"
      pageDescription = "Collect blockchain proved certificate that you are familiar with the modern web technologies for the IoT."
      :pageImage = "'/og/apply-for-certificate'"
    />

    <page-title 
      :title="$ts(`Apply for Certificate`)"
      :breadcrumbs="breadcrumbs"
      />

      <section class="container__narrow">
        <gsp-form 
          :gscriptID="gscript" 
          :siteKey="captcha"
          :class="result"
        >
          <section>
            <h2>{{$ts('Course Information')}}</h2>

            <label class="container__full">
              {{$ts('Select course that you passed')}}:<br/>
              <select class="container__full" required data-gsp-name="course" :data-gsp-data="enCourse || course" v-model="course">
                <option v-for="item in courses" :key="item.id">{{$ts(item.title)}}</option>
              </select>
            </label>

            <label class="container__full">
              {{$ts('Enter Polkadot address that you used')}}:<br/>
              <input type="text" class="container__full" required data-gsp-name="account" :data-gsp-data="account" v-model="account" />
            </label>
          </section>

          <section>
            <h2>{{$ts('Information for Certificate')}}</h2>

            <label class="container__full">
              {{$ts('Your full name')}}:<br/>
              <input type="text" class="container__full" required data-gsp-name="name" :data-gsp-data="name" v-model="name" />
            </label>

            <label class="container__full">
              {{$ts('Your email (for notification)')}}:<br/>
              <input type="email" class="container__full" required data-gsp-name="email" :data-gsp-data="email" v-model="email" />
            </label>

            <label class="container__full">
              {{$ts('Discord (username)')}}:<br/>
              <input type="text" class="container__full" data-gsp-name="Discord" :data-gsp-data="discord" v-model="discord" />
            </label>

            <input type="hidden" data-gsp-name="tags" data-gsp-data="academy, academy certificate" />
            <input type="hidden" data-gsp-name="status" data-gsp-data="new" />
          </section>

          <section class="text__center">
            <button @click="form">
              <span v-if="result === 'init' || result === 'error'">{{$ts('Request Certificate')}}</span>
              <span v-if="result === 'wait'">{{$ts('Sending your request')}}</span>
              <span v-if="result === 'success'">{{$ts('Your request has been sent')}}</span>
              <Loader v-if="result === 'wait'"/>
            </button>
          </section>

        </gsp-form>
      </section>

  </Layout>
</template>

<script>

  import courses from '@/data/online-courses.yaml';
  import translations from '@/data/locales/translations.yaml';

  export default {
  
    components: {
      PageTitle: () => import('~/components/PageTitle.vue'),
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      Loader: () => import('~/components/Loader.vue'),
    },
  
    data() {
      return {
        breadcrumbs: [
          {
            to: '/',
            text: 'Robonomics Academy'
          }
        ],

        // courses: [
        //   this.$ts('Introduction course'), 
        //   this.$ts('Boston Dynamics Spot Software Developing')
        // ],

        gscript:  process.env.GRIDSOME_GS_CERTIFICATE,
        captcha:  process.env.GRIDSOME_CAPTCHAID,

        course: this.$ts(courses[0].title),
        account: '',
        name: '',
        email: '',
        discord: '',

        result: this.$response

      }
    },

    computed: {
      courses() {
        return courses;
      },
      translations() {
        return translations;
      },
      enCourse() {
        return this.courseNameForGS(this.course);
      }
    },

    methods: {
      form() {
        let respInterval = setInterval(()=> {
          this.result = this.$response
        }, 1000)

        if(this.$response === 'success' || this.$response === 'error') {
          clearInterval(respInterval)
        }
      },

      courseNameForGS(alias) {
        for (const item of this.translations) {
          if (item[this.$locale] === alias){
            return eval(`item.en`)
          } 
        }
      }
    }
  }
</script>

<style scoped>

  form.wait button, form.success button {
    pointer-events: none;
    cursor: not-allowed;
  }

  form.wait button {
    filter: grayscale(1);
    opacity: 0.4;
  }

  form.success button {
    --btn-color: var(--color-green);
  }

  form.wait .loader {
    width: 20px;
    height: 20px;
  }
</style>