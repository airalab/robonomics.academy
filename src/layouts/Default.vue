<template>
  <div class="layout">

    <header-slot/>

    <slot/>

    <footer-slot/>

  </div>
</template>

<script>

  export default {
    components: {
      HeaderSlot: () => import('~/components/Header.vue'),
      FooterSlot: () => import('~/components/Footer.vue'),
    }
  }
</script>