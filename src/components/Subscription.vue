<template>
  <footer class="footer footer__section" :class="{'footer-full': full}">
    <div class="footer__container footer__decor footer__decor-left">
      <span class="footer__line"></span>
      <span class="footer__line"></span>
      <span class="footer__line"></span>
      <span class="footer__line"></span>
      <span class="footer__line"></span>
      <span class="footer__line"></span>
    </div>
    <div class="footer__container footer__subscribe">
      <h2>{{ $t('Get Notifications & Updates') }}</h2>

      <gsp-form :gscriptID="gscript" :siteKey="siteKey" @gsp-beforesubmit="beforeSubmit" @gsp-onsubmit="onSubmit" @gsp-oncaptchanotverified="captchaError">

        <div class="container__narrow"> 
          <input type="email" :placeholder="$t('Your email')" class="container__full" required data-gsp-name="email" :data-gsp-data="email" v-model="email" />
          
          <input type="hidden" data-gsp-name="location" :data-gsp-data="location" />
          <input type="hidden" data-gsp-name="tags" :data-gsp-data="tags.toString()" />
  
          <rbButton class="block" :loading="status === 'process'" :type="buttontype">{{buttontext}}</rbButton>
          <span v-if="message">{{message}}</span>
          <p>{{ $t('By clicking on the button “Submit” you agree to receive regular emails from Robonomics (no more than 1 per month) and you agree with') }} <g-link to="/privacy-policy/">{{$t('Privacy Policy')}}</g-link></p>
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
    rbButton: () => import('~/components/utils/Button.vue'),
  },
  

  props: {
    full: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      email: '',
      location: 'https://robonomics.academy' + this.$route.path,
      gscript: process.env.GRIDSOME_GS_NEWS,
      siteKey: process.env.GRIDSOME_CAPTCHAID,
      status: 'init',
      tags: ['academy news'],
      message: '',

    }
  },

  computed: {
    buttontype() {
        return {
            'ok': 'ok',
            'error': 'error',
            'na': 'na',
        }[this.status] ?? 'primary'
    },

    buttontext() {
        return {
            'ok': 'Thanks for the submission!',
            'error': 'Not submitted',
            'process': 'Submitting'
        }[this.status] ?? 'Submit'
    }
  },

  methods: {
    captchaError() {
        this.status = 'na';
        this.message = 'Captcha is not verified. Please, check your internet connection';
    },

    beforeSubmit() {
        this.status = 'process';
    },

    onSubmit(responce, postbody) {
        if(responce.result === 'success') {
            this.status = 'ok';
        } else {
            this.status = 'error';
        }
    }
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
    padding: 0 !important;
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