<template>
    <footer class="footer">
      <div class="footer__section">
        <!-- <g-link class="logo" to="/"><g-image src="@/assets/images/logo.svg" /></g-link> -->
        <g-link class="privacy-policy__link" to="/privacy-policy">{{ $t('Privacy Policy') }}</g-link>
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
  position: relative;
  color: var(--color-light);
  text-align: center;
}

.footer .container__wide > * {
  margin-bottom: var(--gap);
}

.footer .btn__outline img {
  display: block
}

.footer__section {
  padding: calc(var(--gap) * 0.5);
}

.footer__subscribe {
  background-color: var(--color-main);
}

.footer .logo {
  position: absolute;
  width: 92px;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
}

.privacy-policy__link {
  padding-right: 10px;
  padding-left: 10px;
  font-weight: 500;
  color: var(--color-text);
  border-left: 2px solid var(--color-text);
  border-right: 2px solid var(--color-text);
}

.privacy-policy__link:hover {
  color: var(--color-actions);
}


</style>