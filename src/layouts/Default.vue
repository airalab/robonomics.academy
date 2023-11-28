<template>
  <div class="layout">


    <header-slot/>

    <slot/>

    <subscription v-if="!$route.path.includes('certificates')" />

    <!-- <footer-slot/> -->

    <client-only>

    </client-only>


  </div>
</template>

<script>
  export default {

    components: {
      HeaderSlot: () => import('~/components/Header.vue'),
      FooterSlot: () => import('~/components/Footer.vue'),
      Subscription: () => import('~/components/Subscription.vue'),
    },

    methods: {
      activateTracker() {
        this.$matomo && this.$matomo.disableCookies();
        this.$matomo && this.$matomo.trackPageView();

        // if(this.$matomo) {
        //     this.$matomo && this.$matomo.disableCookies();
        //     this.$matomo && this.$matomo.trackPageView();
        // }
      }
    },

    async mounted() {

      if(this.$route.path.includes('online-courses') || this.$route.path.includes('certificates') || this.$route.path.includes('privacy-policy')) {
        this.$store.commit('TOGGLE_SHOW_HEADER', true)
      }

      this.activateTracker();

    }
  }
</script>
