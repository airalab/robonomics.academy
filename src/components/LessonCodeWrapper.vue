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
    padding: var(--gap);
    font-weight: 500;
    font-family: var(--font-text);
    margin-bottom: var(--gap);
    border: 3px solid var(--color-text);
    background-color: #e5eeff;
  }

  .code__plain-text ol,
  .code__plain-text ul {
    padding-left: var(--gap);
  }
</style>