<template>
  <g-link class="btn" :to="src" >{{text}}</g-link>
</template>

<script>
export default {

  props: {
    src: {
      type: String,
      required: true
    },

    text: {
      type: String,
      required: true
    }
  }

}
</script>

<style>

</style>