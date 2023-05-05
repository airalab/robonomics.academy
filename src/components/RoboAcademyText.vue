<template>
  <p class="text" :style="{fontStyle: fStyle, fontWeight: fWeight, fontSize: fSize}">
    <slot/>
  </p>
</template>

<script>
export default {

  props: {
    fStyle: {
      type: String,
      default: 'italic'
    },
    fWeight: {
      type: String,
      default: '300'
    },
    fSize: {
      type: String,
      default: '120%'
    },
  }

}
</script>

<style scoped>

  .text {
    margin-bottom: calc(var(--gap) * 1.5);
  }

  

</style>