<template>
  <div class="footer footer__section footer__subscribe">
    <gsp-form :gscriptID="gscript" :captchaID="captcha" :class="result">

      <div class="container__narrow">

        <input type="email" placeholder="Email for notifications & updates" class="container__full" required data-gsp-name="email"
          :data-gsp-data="email" v-model="email" />

        <input type="hidden" data-gsp-name="tags" data-gsp-data="academy news" />
        <input       
          type="hidden" 
          placeholder="location" 
          data-gsp-name="location" 
          :data-gsp-data="location" 
          v-model="location"
        />

        <button @click="form">
          <span v-if="result === 'init' || result === 'error'">{{$ts('Submit')}}</span>
          <span v-if="result === 'wait'">{{$ts('Sending your request')}}</span>
          <span v-if="result === 'success'">{{$ts('You are in the list')}}</span>
        </button>
        <p>{{$ts('By submitting this form you agree to receive emails with notifications and updates from open source decentralized team of Robonomics Network')}}</p>
      </div>

    </gsp-form>
  </div>
</template>

<script>
export default {

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
  }

  input::placeholder {
    color: var(--color-second);
    font-weight: bold;
  }

  input:focus {
    color: var(--color-text);
    border-color: var(--color-text);
  }

  input:focus::placeholder {
    color: var(--color-text);
    opacity: 0.5;
  }

  button {
    --btn-color: var(--color-second);
    --btn-color-hover: var(--color-text);
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