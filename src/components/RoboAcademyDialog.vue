<template>
  <div class="robo-academy-dialog">
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .robo-academy-dialog {
    padding: calc(var(--gap) * 0.5);
    border: 1px solid var(--color-text);
    background-color: var(--color-dialog);
    margin-bottom: var(--gap);
  }

  .robo-academy-dialog p {
    margin-bottom: calc(var(--gap) * 0.4);
  }

  .robo-academy-dialog strong {
    font-weight: 900;
    line-height: 1.7;
  }

  .robo-academy-dialog ul, ol {
    padding-left: calc(var(--gap) * 0.8);
  }

  .robo-academy-dialog li {
    margin-bottom: calc(var(--gap) * 0.5);
  } 

  .robo-academy-dialog ol li > ul {
    list-style-type: disc;
    margin-top: calc(var(--gap) * 0.5);
    padding-left: 0;
  }

  .robo-academy-dialog ol li > ul li {
    margin-left: 0;
  }

</style>