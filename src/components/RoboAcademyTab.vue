<template>
  <div 
    class="lesson-tabs__wrapper" 
    :class="{'lesson-tabs__wrapper--border': border}"
    v-show="isActive"
  >
  <slot/>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: true,
    }
  },
}
</script>

<style scoped>
  .lesson-tabs__wrapper {
    width: 100%;
    padding: 0 5px;
    overflow: hidden;
    position: relative;
  }
  .lesson-tabs__wrapper--border {
    padding: 10px;
    border: 1px solid var(--color-text);
  }
  .lesson-tabs--vertical .lesson-tabs__wrapper {
    margin-left: 2.5rem;
  }
</style>