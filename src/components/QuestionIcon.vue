<template>
  <g-link class="question__link" :to="templateTitle">
    <span class="question__icon">?</span>
    <span class="question__text">
      Ask your question
    </span>
  </g-link>
</template>

<script>
export default {
  props: {
    templateTitle: {
      type: String,
    }
  }

}
</script>

<style scoped>
  .question__link {
    position: fixed;
    display: inline-block;
    bottom: 10%;
    right: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-white);
    border-radius: 100%;
    background-color: var(--color-yellow);
    cursor: pointer;
    transition: all 1s;
  }

  .question__icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 500;
    flex-shrink: 0;
    transition: all 1s;
  }

  .question__text {
    font-size: 1rem;
    line-height: 0;
    width: 0;
    opacity: 0;
    visibility: hidden;
    color: #fff;
    transition: all 1s;
  }

  .question__link:hover {
    border-radius: 30px;
    background-color: var(--color-violet);
  }

  .question__link:hover .question__text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    line-height: 1;
    opacity: 1;
    visibility: visible;
  }


</style>