<template>
  <div v-if="title || this.$slots.default" :class="classList">
      <div v-if="title" class="lesson-note__title">{{title}}</div>
      <div class="lesson-note__text" v-if="this.$slots.default">
        <slot/>
      </div>
  </div>
</template>

<script>
export default {
  
  name: 'LessonNote',
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
      default: 'note',
      required: true,
      validator: function (value) {
        return ['okay', 'warning', 'note'].indexOf(value) !== -1;
      }
    },
    gap: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      return {
        [`lesson-note`]: true,
        [`lesson-note--${this.type}`]: this.type,
        ['gap']: this.gap
      };
    },
  },
}
</script>

<style scoped>
  .lesson-note {
    --type-color-accent: var(--color-note-accent);
    --type-color-pale: var(--color-note-pale);
    --type-color-text: var(--color-note-text);
    padding: 0.5rem 1rem;
    background-color: var(--type-color-pale);
    border-left: 0.4rem solid var(--type-color-accent);
    color: var(--type-color-text);
  }
  .lesson-note:not(:last-child) {
    margin-bottom: var(--gap);
  }
  .lesson-note__title {
    color: var(--type-color-accent);
    font-size: 90%;
    font-weight: bold;
    text-transform: uppercase;
  }
  .lesson-note__text p:last-child {
    margin-bottom: 0;
  }
  .lesson-note--okay { 
    --type-color-accent: var(--color-note-accent--okay);
    --type-color-pale: var(--color-note-pale--okay);
  }
  .lesson-note--warning {
    --type-color-accent: var(--color-note-accent--warning);
    --type-color-pale: var(--color-note-pale--warning);
  }
  .lesson-note--note {
    --type-color-accent: var(--color-note-accent);
    --type-color-pale: var(--color-note-pale);
  }
  .lesson-note--note .lesson-note__text :not(pre)>code { 
    background: #fff;
  }   
  .lesson-note--warning .lesson-note__text :not(pre)>code { 
    background: #fff;
  }
  .lesson-note--okay .lesson-note__text :not(pre)>code { 
    background: #fff;
  }


  .lesson-note.gap {
    margin: var(--gap) 0;
  }

  @media (prefers-color-scheme: dark) {
    .lesson-note--okay code { 
      background: #333;
    }
  }


</style>