<template>
  <client-only>
    <div class="user-tracker">
      <div class="user-tracker__wrapper">
        <h3 class="user-tracker__title">
          Choose way to communicate with this website:
        </h3>
        <g-link class="user-tracker__info" to="/privacy-policy/">i</g-link>
      </div>
      <div class="user-tracker__wrapper">
        <button @click="allowUserTracker('no actions')" class="user-tracker__btn">Disallow any actions</button>
        <button @click="allowUserTracker('only critical')"  class="user-tracker__btn">Only critical actions</button>
        <button @click="allowUserTracker('allow metrics')" class="user-tracker__btn">Allow metrics</button>
      </div>
    </div>
  </client-only>
</template>

<script>
  import VueCookies from 'vue-cookies';
export default {

  methods: {
    allowUserTracker (option) {
      if (process.isClient) {
        switch(option) {
          case 'only critical':
            VueCookies.set('userTracker', option);
            this.$store.commit('SET_USER_TRACKER', {option: 'only critical', localStorage: true, cookies: true, metrics: false})
          break;

          case 'allow metrics':
            VueCookies.set('userTracker', option);
            this.$store.commit('SET_USER_TRACKER', {option: 'allow metrics', localStorage: false, cookies: true, metrics: true})

          break;

          default: 
            this.$store.commit('SET_USER_TRACKER', {option: 'no actions', localStorage: false, cookies: false, metrics: false})
        }
      }
    }, 
  },

}
</script>

<style scoped>
  .user-tracker {
    position: fixed;
    bottom: 1vh;
    right: 1vh;
    padding: 1rem var(--gap);
    max-width: 790px;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: var(--color-second) ;
    text-align: left;
    z-index: 10;
  }

  .user-tracker__title {
    font-size: 1rem;
    font-family: inherit;
    font-weight: 500;
    margin-right: var(--gap);
    margin-bottom: 0;
    color: var(--color-light);
    text-align: left;
  }

  .user-tracker__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    font-family: var( --font-text);
  }

  .user-tracker__wrapper:first-of-type {
    margin-bottom: 0.5rem;
  }
  
  .user-tracker__btn {
    padding: 0;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: inherit;
    color: var(--color-main) !important;
    background-color: transparent;
    border: 1px solid transparent;
    text-align: left;
  }

  .user-tracker__btn:not(:last-child) {
    margin-right: var(--gap);
  }

  .user-tracker__btn:hover {
    background-color: transparent !important;
    border: 1px solid transparent !important;
  }

  .user-tracker__info {
    position: absolute;
    right: 2rem;
    top: 0.7rem
  }

  .user-tracker__info {
    font-weight: 600;
    color: var(--color-second);
    background-color: var(--color-light);
    border-radius: var(--gap);
    padding: 0 calc(var(--gap) * 0.3);
  }

  @media screen and (max-width: 790px) {
    .user-tracker {
      width: 100%;
      right: 0;
      bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .user-tracker__wrapper {
      flex-direction: column;
      align-items: baseline;
    }

    .user-tracker__title  {
      font-size: 0.8rem;
    }

    .user-tracker__btn {
      font-size: 1rem;
    }
  }

</style>