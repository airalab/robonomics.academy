<template>
  <div class="loader"></div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .loader {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-left: 1rem;
    border: 3px solid rgba(60, 53, 139, 0.3);
    border-radius: 50%;
    border-top-color: var(--color-main);
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }

</style>