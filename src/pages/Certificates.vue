<template>
  <Layout>
    <page-title 
      :title="$ts(`Apply for certificate`)"
      :breadcrumbs="breadcrumbs"
      />

      <section class="container__narrow">
        <gsp-form 
          :gscriptID="gscript" 
          :captchaID="captcha"
          :class="result"
        >
          <section>
            <h2>{{$ts('Course passed information')}}</h2>

            <label class="container__full">
              {{$ts('What course did you passed')}}:<br/>
              <select disabled class="container__full" required data-gsp-name="course" :data-gsp-data="course" v-model="course">
                <option v-for="item in courses" :key="item.id">{{item}}</option>
              </select>
            </label>

            <label class="container__full">
              {{$ts('What Polkadot address did you used to pass')}}:<br/>
              <input type="text" class="container__full" required data-gsp-name="account" :data-gsp-data="account" v-model="account" />
            </label>
          </section>

          <section>
            <h2>{{$ts('Information for certificate')}}</h2>

            <label class="container__full">
              {{$ts('Your name (this will be on your certificate)')}}:<br/>
              <input type="text" class="container__full" required data-gsp-name="name" :data-gsp-data="name" v-model="name" />
            </label>

            <label class="container__full">
              {{$ts('Your email (for notification)')}}:<br/>
              <input type="email" class="container__full" required data-gsp-name="email" :data-gsp-data="email" v-model="email" />
            </label>

            <input type="hidden" data-gsp-name="tags" data-gsp-data="academy, academy certificate" />
            <input type="hidden" data-gsp-name="status" data-gsp-data="new" />
          </section>

          <section class="text__center">
            <button @click="form">
              <span v-if="result === 'init' || result === 'error'">{{$ts('Apply for certificate')}}</span>
              <span v-if="result === 'wait'">{{$ts('Sending your request')}}</span>
              <span v-if="result === 'success'">{{$ts('Your request has been sent')}}</span>
            </button>
          </section>

        </gsp-form>
      </section>

  </Layout>
</template>

<script>

  export default {
  
    components: {
      PageTitle: () => import('~/components/PageTitle.vue')
    },

    data() {
      return {
        breadcrumbs: [
          {
            to: '/',
            text: 'Robonomics Academy'
          }
        ],

        courses: [
          this.$ts('Introduction course'), 
          this.$ts('Boston Dynamics Spot Software Developing')
        ],

        gscript:  process.env.GRIDSOME_GS_CERTIFICATE,
        captcha:  process.env.GRIDSOME_CAPTCHAID,

        account: '',
        name: '',
        email: '',

        result: this.$response

      }
    },

    computed: {
      course() {
        if(this.courses) {
          return this.courses[0]
        } else {
          return ''
        }
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
      }
    },

    metaInfo () {
      return this.$seo({
        title: this.$ts('Apply for certificate'),
        description: this.$ts('Collect blockchain proved certificate that you are familiar with the modern web technologies for the IoT. It will come in handy when hiring a technology company that wants to improve their corporate infrastructure using web3.'),
        image: {
          url: this.$website + '/og/apply-for-certificate.png',
          width: 1280,
          height: 650
        },
        openGraph: {
          title: this.$ts('Apply for certificate'),
          type: 'website',
          site_name: 'Robonomics Academy',
          url: 'https://robonomics.academy/certificates',
          image: {
            url: this.$website + '/og/apply-for-certificate.png',
            width: 1280,
            height: 650
          },
        },
        twitter: {
          title: this.$ts('Apply for certificate'),
          type: 'summary'
        }
      })
  }

    // mounted(){
    //   setInterval(()=> {
    //     console.log('interval $response', this.$response)
    //   }, 1500)
    // },

    // created() {
    //   this.$watch('$response', {
    //     handler(newVal){
    //       console.log('$response newVal',newVal)
    //       // console.log('this.result',this.result)
    //       // this.result = newVal
    //     },
    //     immediate: true
    //   })
    // },

  

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
</style>