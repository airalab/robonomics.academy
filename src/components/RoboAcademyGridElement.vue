<template>
  <div 
    class="lesson-grid-item"
  >
   <slot/>
  </div>
</template>

<script>
export default {
  name: 'LessonGridElement',
}
</script>

<style scoped>
 .lesson-grid-item {
  padding: 0.5rem 0.8rem;
 }
</style>