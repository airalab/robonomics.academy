<template>
  <footer class="footer footer__section container__mid" :class="{'footer-full': full}">
    <div class="footer__container footer__decor footer__decor-left">
      <span class="footer__line"></span>
      <span class="footer__line"></span>
      <span class="footer__line"></span>
      <span class="footer__line"></span>
      <span class="footer__line"></span>
      <span class="footer__line"></span>
    </div>
    <div class="footer__container footer__subscribe">
      <h2>{{ $ts('Get Notifications & Updates') }}</h2>
      <gsp-form :gscriptID="gscript" :captchaID="captcha" :class="result">

        <div class="container__narrow">

          <input type="email" :placeholder="$ts('Your email')" class="container__full" required data-gsp-name="email"
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
          <p>{{$ts('By submitting this form you agree to receive emails with notifications and updates from the Robonomics Network team')}}.</p>
        </div>
      </gsp-form>
    </div>
    <div class="footer__container footer__decor footer__decor-right">
      <span class="footer__line"></span>
      <span class="footer__line"></span>
      <span class="footer__line"></span>
      <span class="footer__line"></span>
      <span class="footer__line"></span>
      <span class="footer__line"></span>
    </div>
  </footer>
</template>

<script>
export default {

  components: {
    Loader: () => import('~/components/Loader.vue'),
  },
  

  props: {
    full: {
      type: Boolean,
      default: false
    }
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
    display: flex;
  }

  .footer-full .footer__decor {
    display: none;
  }

  .footer-full {
    padding: 0;
  }

  .footer__container {
    padding-top: calc(var(--gap) * 2);
    padding-bottom:  calc(var(--gap) * 1);
  }

  .footer__decor {
    position: relative;
    width: 310px;
    background-color: var(--color-main);
    padding-bottom: calc(var(--gap) * 0.9);
  }

  .footer__decor::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 33px;
    background-color: var(--color-light);
  }

  .footer__decor:first-of-type {
    margin-right: var(--gap);
    left: 0;
    top: 0;
  }

  .footer__decor:last-of-type {
    margin-left: var(--gap);
    right: 0;
    top: 0;
  }

  .footer__line {
    display: block;
    max-width: 223px;
    width: 100%;
    height: 40px;
    margin-left: auto;
    background-color: var(--color-light);
  }

  .footer__line:not(:last-of-type) {
    margin-bottom: calc(var(--gap) * 1.2);
  }

  .footer__decor-right .footer__line {
    margin-left: 0;
  }

  .footer h2 {
    color: var(--color-text);
    font-family: var(--font-secondary);
    text-decoration: none;
  }

  .footer__section .container__mid{
    margin-bottom: 0;
  }

  .footer__subscribe {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--color-main);
  }

  .footer__subscribe p {
    margin-top: calc(var(--font-size) * 3);
    color: var(--color-text);
    font-size: calc(var(--font-size) * 1.1);
    text-align: center;
  }

  input {
    padding: calc(var(--gap) * 0.5) var(--gap);
    border: 2px solid var(--color-text) !important;
    border-radius: calc(var(--gap) * 2);
    color: var(--color-text);
    font-weight: 600;
    font-family: var(--font-secondary);
    background-color: var(--color-light);
    box-shadow: 2px 5px 0 #000;
    text-align: center;
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

  @media screen and (max-width: 1020px) {
    .footer.container__mid {
      padding: 0;
    }
    .footer__decor {
      display: none;
    }
  }

  @media screen and (max-width: 360px) {
    .container__narrow{
      max-width: 320px
    }
  }


</style>