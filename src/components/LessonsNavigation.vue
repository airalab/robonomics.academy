<template>
  <section class="container__reg">
    <nav aria-labelledby="Lessons navigation" :class="{ short: !prevPath }">
      <g-link class="btn navigation__button" v-if="prevPath" :to="prevPath">
        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
        Previous lesson
      </g-link>
      <g-link class="btn navigation__button" v-if="nextPath" :to="nextPath">
        Next lesson
        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
      </g-link>
    </nav>
  </section>
</template>

<script>

export default {
  props: {
    lessonId: {
      type: Number,
      default: null,
      required: true,
    },
    course: {
      type: Object,
      default(rawProps) {
        return { path: rawProps.path, lessons: rawProps.lessons }
      },
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
nav {
  display: flex;
  justify-content: space-between;
}

.short {
  justify-content: flex-end;
}

.navigation__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 290px;
  background-color: var(--color-white);
  border-radius: 0;
  border: 3px solid var(--color-blue);
  color: var(--color-blue) !important;
  padding: calc(var(--gap) * 0.5);
}

.navigation__button:hover {
  color: var(--color-white) !important;
}

</style>
