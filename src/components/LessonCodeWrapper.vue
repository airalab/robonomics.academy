<template>
  <div :class="{'no-copy-icon': noCopyIcon, 'no-lines': noLines}">
<prism :language="filteredLang" :class="codeClass">
  <slot></slot>
</prism>
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

  computed: {
    filteredLang() {
      return this.language === 'uml' ? 'plantuml' : this.language
    }
  },

  mounted() {
    Prism.highlightAll();
  }

}
</script>

<style scoped>
  .code__plain-text {
    color: var(--color-light);
    background-color: var(--color-dark);
    border: 3px solid var(--color-main);
    font-family: var(--font-text);
    font-size: calc(var(--font-size) * 0.8);
    margin-bottom: var(--gap);
    padding: var(--gap);
  }

  .code__plain-text ol,
  .code__plain-text ul {
    padding-left: var(--gap);
  }

  .code__plain-text a {
    color: #78a0e0;
  }

  .code__plain-text a:hover {
    color: var(--color-light);
  }

  .mt {
    margin-top: var(--gap);
  }
</style>