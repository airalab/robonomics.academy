<template>
    <component 
    :is="type === 'numbers' ? 'ol' : 'ul'" 
    :class="classes">
        <slot/>
    </component>
</template>

<script>

export default {

  props: {
    type: {
      type: String,
      default: 'plus',
      validator: function (value) {
        return ['plus', 'numbers'].indexOf(value) !== -1;
      }
    },
  },

   computed: {
        classes() {
            return {
                [`list__${this.type}`]: this.type,
            };
        },
    },


}
</script>

<style scoped>

    ul, ol {
        font-weight: bold;
        list-style: none; 
    }

    ul *:not(li):not(:first-child) {
        font-weight: 400;
    }

    ol *:not(li):not(:first-child) {
        font-weight: 400;
    }

    li:not(:last-child) {
        margin-bottom: var(--gap);
    }


    /* PLUS */
    .list__plus li {
        background: url('/plus.svg') no-repeat 0 8px;
        padding-left: var(--gap);
    }
    /* PLUS end of */

    /* NUMBERS */

    .list__numbers li {
        counter-increment: number;
        padding-left: var(--gap);
        position: relative;
    }

    .list__numbers li:before {
        content: counter(number);
        font-family: var(--font-title);
        font-size: calc(var(--font-size) * 1.5);
        font-weight: bold;
        left: 0;
        line-height: 1.2;
        position: absolute;
        top: 0;
    }
    /* NUMBERS end of */
</style>