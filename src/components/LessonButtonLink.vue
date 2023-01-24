<template>
  <div>
    <g-link v-if="type === 'link'" class="btn" :to="src" >{{text}}</g-link>
    <button class="btn" v-if="type === 'button'">{{text}}</button>
  </div>
</template>

<script>
export default {

  props: {
    src: {
      type: String,
      required: false
    },

    type: {
      type: String,
      default: 'link',
      validator: function (value) {
        return ['link', 'button'].indexOf(value) !== -1;
      }
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