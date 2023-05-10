<template>
  <div class="gpt">
    <g-image src="@/assets/images/gpt.png" alt="gpt"/>
    <span>ChatGPT:</span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .gpt {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    color: #00A67E;
    margin-bottom: calc(var(--gap) * 0.5);
  }

  .gpt img {
    width: 40px;
    height: 40px;
    margin-bottom: calc(var(--gap) * 0.2);
  }

</style>