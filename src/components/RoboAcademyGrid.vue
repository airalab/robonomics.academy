<template>
  <div :class=classList>
    <slot></slot>
  </div>
</template>

<script>
export default {

  name: 'LessonGridWrapper',

  props: {
    columns: {
      type: Number,
      default: 4,
      validator: function (value) {
        return [1, 2, 3, 4, 5, 6].indexOf(value) !== -1;
      }
    },

    align: {
      type: String,
      default: null,
      validator: function (value) {
        return ['start', 'center', 'end'].indexOf(value) !== -1;
      }
    },

    justify: {
      type: String,
      default: null,
      validator: function (value) {
        return ['start', 'center', 'end'].indexOf(value) !== -1;
      }
    },

    textAlign: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'center', 'right'].indexOf(value) !== -1;
      }
    }
  },

  computed: {
    classList() {
      return {
        'lesson-grid-container': true,
        [`grid-${this.columns}`]: true,
        [`grid-align-${this.align}`]: this.align ? true : false,
        [`grid-justify-${this.justify}`]: this.justify ? true : false,
        [`grid-text-${this.textAlign}`]: this.textAlign ? true : false
      };
    },
  },
}
</script>

<style scoped>
  
  .lesson-grid-container {
    display: grid;
    grid-template-rows: 1fr min-content ;
    gap: 1rem;
    margin-bottom: var(--gap);
  }
  .lesson-grid-container.grid-1 {
    grid-template-columns: 1fr
  }
  .lesson-grid-container.grid-2 {
    grid-template-columns: repeat(auto-fill, minmax(calc(var(--container-mid) / 4 - var(--gap)), 1fr));
  }
  .lesson-grid-container.grid-3 {
    grid-template-columns: repeat(auto-fill, minmax(calc(var(--container-mid) / 6 - var(--gap)), 1fr));
  }
  .lesson-grid-container.grid-4 {
    grid-template-columns: repeat(auto-fill, minmax(calc(var(--container-mid) / 8 - var(--gap)), 1fr));
  }
  .lesson-grid-container.grid-5 {
    grid-template-columns: repeat(auto-fill, minmax(calc(var(--container-mid) / 9 - var(--gap)), 1fr));
  }
  .lesson-grid-container.grid-6 {
    grid-template-columns: repeat(auto-fill, minmax(calc(var(--container-mid) / 10 - var(--gap)), 1fr));
  }
  .lesson-grid-container.grid-align-start {
    align-items: start;
  }
  .lesson-grid-container.grid-align-center {
    align-items: center;
  }
  .lesson-grid-container.grid-align-end {
    align-items: end;
  }
  .lesson-grid-container.grid-justify-start {
    justify-items: start;
  }
  .lesson-grid-container.grid-justify-center {
    justify-items: center;
  }
  .lesson-grid-container.grid-justify-end {
    justify-items: end;
  }
  .lesson-grid-container.grid-text-left {
    text-align: left;
  }
  .lesson-grid-container.grid-text-center {
    text-align: center;
  }
  .lesson-grid-container.grid-text-right {
    text-align: right;
  }
  @media screen and (max-width: 1080px) {
    
    .lesson-grid-container.grid-2 {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 860px) {
    .lesson-grid-container.grid-5 {
      grid-template-columns: 1fr 1fr;
    }

    .lesson-grid-container.grid-6 {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media screen and (max-width: 520px) {
    .lesson-grid-container.grid-2 {
      grid-template-columns: 1fr
    }
    .lesson-grid-container.grid-3 {
      grid-template-columns: 1fr
    }

    .lesson-grid-container.grid-4 {
      grid-template-columns: 1fr
    }

    .lesson-grid-container.grid-5 {
      grid-template-columns: 1fr
    }

    .lesson-grid-container.grid-6 {
      grid-template-columns: 1fr
    }
  }
</style>