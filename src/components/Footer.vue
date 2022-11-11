<template>
    <footer class="footer">
      <div class="footer__section container__wide">
        <g-link class="logo" to="/"><g-image src="@/assets/images/logo.svg" /></g-link>
        <h3>{{$ts('Get our support on')}}</h3>
        <g-link class="btn__outline" :to="$discord"><g-image src="@/assets/images/discord.svg" /></g-link>
      </div>
    </footer>
</template>

<script>

  export default {
  
    components: {
      PageTitle: () => import('~/components/PageTitle.vue')
    },

    data() {
      return {

        gscript:  process.env.GRIDSOME_GS_NEWS,
        captcha:  process.env.GRIDSOME_CAPTCHAID,

        email: '',
        result: this.$response

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
    }
  }
  </script>

<style scoped>
.footer {
  background-color: var(--color-brown-dark);
  color: var(--color-light);
  text-align: center;
}

.footer .container__wide > * {
  margin-bottom: var(--gap);
}

.footer .btn__outline {
  --btn-color: var(--color-light);
}

.footer .btn__outline img {
  display: block
}

.footer__section {
  padding-top: calc(var(--gap) * 2);
  padding-bottom: calc(var(--gap) * 2);
}

.footer__subscribe {
  background-color: var(--color-main);
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

</style>