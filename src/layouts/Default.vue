<template>
  <div class="layout">


    <header-slot/>

    <slot/>

    <subscription />

    <footer-slot/>

    <client-only>

      <UserTracker v-show="$cookies && !$cookies.get('userTracker') && !this.$store.state.userTracker.option" />

    </client-only>


  </div>
</template>

<script>
  export default {

    components: {
      HeaderSlot: () => import('~/components/Header.vue'),
      FooterSlot: () => import('~/components/Footer.vue'),
      Subscription: () => import('~/components/Subscription.vue'),
      UserTracker: () => import('~/components/UserTracker.vue')
    },

    mounted() {
      if($cookies.get('userTracker') === 'allow metrics') {
        this.$gtag.pageview(this.$route)
      }

      this.$store.commit('TOGGLE_SHOW_HEADER', true)
    }
  }
</script>