<template>
  <div class="layout">

    <header-slot/>

    <slot/>

    <subscription />

    <footer-slot/>

  </div>
</template>

<script>

  export default {
    components: {
      HeaderSlot: () => import('~/components/Header.vue'),
      FooterSlot: () => import('~/components/Footer.vue'),
      Subscription: () => import('~/components/Subscription.vue')
    }
  }
</script>