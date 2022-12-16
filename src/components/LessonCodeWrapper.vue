<template>
  <div>
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
    }
  },

  mounted() {
    Prism.highlightAll();
  }

}
</script>
