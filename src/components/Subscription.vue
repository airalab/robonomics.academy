<template>
  <div class="footer footer__section footer__subscribe">
    <h2>Get Notifications & Updates</h2>
    <gsp-form :gscriptID="gscript" :captchaID="captcha" :class="result">

      <div class="container__narrow">

        <input type="email" placeholder="Your email" class="container__full" required data-gsp-name="email"
          :data-gsp-data="email" v-model="email" />

        <input type="hidden" data-gsp-name="tags" data-gsp-data="academy news" />
        <input       
          type="hidden" 
          placeholder="location" 
          data-gsp-name="location" 
          :data-gsp-data="location" 
          v-model="location"
        />

        <button @click="form" :disabled="result === 'wait'">
          <span v-if="result === 'init' || result === 'error'">{{$ts('Submit')}}</span>
          <span v-if="result === 'wait'">{{$ts('Sending your request')}}</span>
          <span v-if="result === 'success'">{{$ts('You are in the list')}}</span>
          <Loader v-if="result === 'wait'"/>
        </button>
      </div>
      <div class="container__mid">
        <p>{{$ts('By submitting this form you agree to receive emails with notifications and updates from the Robonomics Network team')}}.</p>
      </div>

    </gsp-form>
  </div>
</template>

<script>
export default {

  components: {
    Loader: () => import('~/components/Loader.vue'),
  },
  

  data() {
    return {

      gscript: process.env.GRIDSOME_GS_NEWS,
      captcha: process.env.GRIDSOME_CAPTCHAID,

      email: '',
      result: this.$response,
      location: '',

    }
  },

  methods: {
    form() {
      let respInterval = setInterval(() => {
        this.result = this.$response
      }, 1000)

      if (this.$response === 'success' || this.$response === 'error') {
        clearInterval(respInterval)
      }
    }
  },

  mounted() {
    this.location = 'https://robonomics.academy' + this.$route.path;
  }
}
</script>

<style scoped>
  .footer {
    background-color: var(--color-brown-dark);
    color: var(--color-light);
    text-align: center;
  }
  .footer__section {
    padding-top: calc(var(--gap) * 2);
    padding-bottom: calc(var(--gap) * 2);
  }

  .footer h2 {
    color: var(--color-text);
    text-decoration: none;
    font-weight: 300;
  }

  .footer__section .container__narrow {
    margin-bottom: calc(var(--gap) * 2);
  }

  .footer__section .container__mid{
    margin-bottom: 0;
  }

  .footer__subscribe {
    background-color: var(--color-main);
  }

  .footer__subscribe p {
    margin-top: var(--gap);
    color: var(--color-brown-dark);
    font-size: .80rem;
  }

  input {
    text-align: center;
    padding: calc(var(--gap) * 0.5) var(--gap);
    border: 2px solid var(--color-text) !important;
    border-radius: calc(var(--gap) * 2);
    color: var(--color-text);
    font-weight: 600;
  }

  input::placeholder {
    color: var(--color-text);
    font-weight: bold;
  }

  input:focus {
    color: var(--color-text);
    border-color: var(--color-text);
    background-color: var(--color-light-lesson) ;
  }

  input:focus::placeholder {
    color: var(--color-text);
    opacity: 0.5;
  }

  button {
    --btn-color: var(--color-second);
    --btn-color-hover: var(--color-text);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

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

  /* dark theme */
  @media (prefers-color-scheme: dark) { 
    button {
      --btn-color-hover: var(--color-light-lesson);
    }
  }


</style>