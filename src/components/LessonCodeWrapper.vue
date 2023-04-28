<template>
  <div :class="{'no-copy-icon': noCopyIcon, 'no-lines': noLines}">
<prism :language="language" :class="codeClass">
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

  mounted() {
    Prism.highlightAll();
  }

}
</script>