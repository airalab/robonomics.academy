<template>
  <client-only>
    <div class="user-tracker">
      <div class="user-tracker__wrapper">
        <g-link class="user-tracker__info" to="/privacy-policy/">i</g-link>
        <h3 class="user-tracker__title">
          {{$ts('Choose way to communicate with this website:')}}
        </h3>
      </div>
      <form class="user-tracker__form" @submit.prevent="allowUserTracker">
        <select v-model="option" name="privacy-policy" :class="{'small': option === 'allow metrics'}">
          <option selected value="allow metrics">{{$ts('Allow metrics')}}</option>
          <option value="only critical">{{$ts('Only critical actions')}}</option>
          <option value="no actions">{{$ts('Disallow any actions')}}</option>
        </select>
        <button class="user-tracker__btn">Ok</button>
      </form>
    </div>
  </client-only>
</template>

<script>
  import VueCookies from 'vue-cookies';
export default {

  data() {
    return {
      option: 'allow metrics'
    }
  },

  methods: {
    allowUserTracker () {


      if (process.isClient) {
        switch(this.option) {
          case 'only critical':
            VueCookies.set('userTracker', this.option);
            this.$store.commit('SET_USER_TRACKER', {option: 'only critical', localStorage: true, cookies: true, metrics: false})
          break;

          case 'allow metrics':
            VueCookies.set('userTracker', this.option);
            this.$store.commit('SET_USER_TRACKER', {option: 'allow metrics', localStorage: false, cookies: true, metrics: true})

          break;

          default: 
            VueCookies.set('userTracker', this.option);
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
    max-width: 550px;
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
    margin-bottom: 0;
    color: var(--color-light);
    text-align: left;
  }

  .user-tracker__form, .user-tracker__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    font-family: var( --font-text);
  }

  .user-tracker__form {
    padding-left: calc(var(--gap) * 1.3);
  }

  .user-tracker__form select {
    background: url('/tracker-arrow.svg') no-repeat 97% 50%;
    background-size: 6%;
    background-color: transparent;
    padding: 0.4rem 0.8rem;
    padding-right: 1.6rem;
    margin-right: 0.5rem;
    font-size: 70%;
    font-weight: 600;
    border: 1px solid var(--color-light);
    border-radius: var(--gap);
    color: var(--color-light);
    text-transform: capitalize;
    cursor: pointer;
  }

  .user-tracker__form select option {
    color: #2E324D;
  }

  .user-tracker__form select.small {
    background: url('/tracker-arrow.svg') no-repeat 92% 55%;
    background-size: 7%;
    width: 168px;
  }

  .user-tracker__wrapper:first-of-type {
    margin-bottom: 0.5rem;
  }
  
  .user-tracker__btn {
    padding: 0.3rem 1rem; 
    font-size: 1rem;
    font-weight: 500;
    font-family: inherit;
    color: var(--color-light) !important;
    background-color: var(--color-text);
    border: 1px solid transparent;
    text-align: left;
    border-radius: 18px;
  }

  /* .user-tracker__btn:hover {
    background-color: transparent !important;
    border: 1px solid transparent !important;
  } */

  .user-tracker__info {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin-right: calc(var(--gap) / 2);
    font-weight: 600;
    color: var(--color-second);
    background-color: var(--color-light);
    border-radius: 100%;
  }

  @media screen and (max-width: 790px) {
    .user-tracker {
      width: 100%;
      right: 0;
      bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .user-tracker__info {
      flex-shrink: 0;
    }

    .user-tracker__form {
      padding-left: 0;
    }

    .user-tracker__title  {
      font-size: 0.8rem;
    }

    .user-tracker__btn {
      font-size: 1rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    .user-tracker__btn {
      color: var(--color-brown-dark) !important;
    }
   }

</style>