<template>
  <div class="gpt">
    <g-image src="@/assets/images/chatgpt.svg" alt="gpt"/>
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
    align-items: center;
    font-weight: 600;
    color: #00A67E;
    margin-bottom: calc(var(--gap));
  }

  .gpt img {
    width: 40px;
    height: 40px;
    margin-right: calc(var(--gap) * 0.5);
  }

</style>