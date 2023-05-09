<template>
  <div :class="{'no-copy-icon': noCopyIcon, 'no-lines': noLines}">
<prism :language="language" :class="codeClass" v-if="language !== 'plainText'">
  <slot></slot>
</prism>
  <div v-else class="code__plain-text">
    <slot></slot>
  </div>
  </div>
</template>

<script>
  import "prismjs/plugins/line-numbers/prism-line-numbers.js";
  import "prismjs/plugins/line-numbers/prism-line-numbers.css";
export default {

  props: {
    language: {
      type: String,
      required: true
    },

    codeClass: {
      type: String,
      default: ''
    },
    noCopyIcon:  {
      type: Boolean,
      default: false
    },
    noLines: {
      type: Boolean,
      default: false
    }
  },

  mounted() {
    Prism.highlightAll();
  }

}
</script>

<style scoped>
  .code__plain-text {
    background-color: #e5eeff;
    border: 3px solid var(--color-text);
    font-family: var(--font-text);
    font-size: calc(var(--font-size) * 0.8);
    margin-bottom: var(--gap);
    padding: var(--gap);
  }

  .code__plain-text ol,
  .code__plain-text ul {
    padding-left: var(--gap);
  }
</style>