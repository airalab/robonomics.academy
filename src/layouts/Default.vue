<template>
  <div class="layout">


    <header-slot/>

    <slot/>

    <subscription v-if="!$route.path.includes('certificates')" />

    <!-- <footer-slot/> -->

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
        this.$matomo.setConsentGiven()

        this.$nextTick(() => {
          this.$matomo && this.$matomo.enableLinkTracking()
          // window._paq.push(['trackPageView'])
        });
      }

      if(this.$route.path.includes('online-courses') || this.$route.path.includes('certificates') || this.$route.path.includes('privacy-policy')) {
        this.$store.commit('TOGGLE_SHOW_HEADER', true)
      }

    }
  }
</script>