<template>
  <section class="container__reg">
    <nav aria-labelledby="Lessons navigation" :class="{ short: !prevPath }">
      <g-link class="btn navigation__button" v-if="prevPath" :to="prevPath">
        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
        {{ course ? $ts('Previous Lesson') : $ts('Previous Page') }}
      </g-link>
      <g-link class="btn navigation__button" v-if="nextPath" :to="nextPath">
         {{ course ? $ts('Next Lesson') : $ts('Next Page') }}
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
          if(rawProps) {
            return { path: rawProps.path, lessons: rawProps.lessons }
          }
      },
    },

    docs: {
      type: Array,
    },

    current: {
      type: Number
    }
  },
  computed: {

    prevPath() {
      if(this.course) {
        let path = `/online-courses/${this.course.path}/`;
        if (this.lessonId - 2 >= 0) {
          path += this.course.lessons[this.lessonId - 2].path;
        } else {
          path = false;
        }
        return path
      } else {
        if(this.current > -1 && this.current !== 0) {
          return 'playground/' + this.docs[this.current - 1].path
        }
      }
    },

    nextPath() {
      if(this.course) {
        let path = `/online-courses/${this.course.path}/`;
        if (this.lessonId < this.course.lessons.length) {
          path += this.course.lessons[this.lessonId].path;
        } else {
          path = false;
        }
        return path;
      } else {
        if(this.current > -1 && this.current !== this.docs.length - 1) {
          return 'playground/' + this.docs[this.current + 1].path
        }
      }
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

.container__reg {
  margin-bottom: 1rem;
}

.navigation__button {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 310px;
  background-color: transparent;
  border-radius: 0;
  border: 3px solid transparent;
  color: var(--color-blue) !important;
  padding: calc(var(--gap) * 0.5);
  text-transform: none;
}

.navigation__button:hover {
  color: var(--color-text) !important;
  background-color: transparent !important;
  border: 3px solid transparent !important;
}

.navigation__button:first-of-type {
  justify-content: flex-start;
}

.navigation__button:first-of-type svg {
  margin-right: calc(var(--gap) * 0.5);
}

.navigation__button:last-of-type {
  justify-content: flex-end;
}

.navigation__button:last-of-type svg {
  margin-left: calc(var(--gap) * 0.5);
}


@media screen and (max-width: 680px) {
  nav {
    flex-direction: column;
    align-items: center;
  }

  .navigation__button {
    width: 100%;
  }

  .navigation__button:first-child {
    margin-bottom: 15px;
  }

}



</style>
