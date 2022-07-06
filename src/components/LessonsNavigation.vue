<template>
  <section class="container__reg">
    <div class="buttonsWrapper" :class="{short: !prevPath}">
      <g-link class="btn" v-if="prevPath" :to="prevPath">Previous lesson</g-link>
      <g-link class="btn" v-if="nextPath" :to="nextPath">Next lesson</g-link>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    lessonId: {
      default: null,
      required: true,
    },
    course: {
      default: null,
      required: true,
    }
  },
  methods: {
  },
  computed: {
    prevPath() {
      let path = `/online-courses/${this.course.path}/`;
      if (this.lessonId - 2 >= 0) {
        path += this.course.lessons[this.lessonId - 2].path;
      } else {
        path = false;
      }
      return path
    },
    nextPath() {
      let path = `/online-courses/${this.course.path}/`;
      if (this.lessonId < this.course.lessons.length) {
        path += this.course.lessons[this.lessonId].path;
      } else {
        path = false;
      }
      return path;
    }
  }
}

</script>

<style scoped>
.buttonsWrapper {
  display: flex;
  justify-content: space-between;
}

.short {
  justify-content: flex-end;
}

</style>
