<template>
  <div class="robo-academy-terminal">
    <div class="robo-academy-terminal__header">
      <span class="robo-academy-terminal__dot robo-academy-terminal__dot--red"></span>
      <span class="robo-academy-terminal__dot robo-academy-terminal__dot--orange"></span>
      <span class="robo-academy-terminal__dot robo-academy-terminal__dot--green"></span>
      <h4> {{ title }} </h4>
    </div>
    <div class="robo-academy-terminal__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      default: 'terminal'
    }
  }

}
</script>

<style scoped>
  .robo-academy-terminal {
    position: relative;
    margin-bottom: calc(var(--gap) * 0.9);
    border: 1px solid var(--color-text);
  }

  .robo-academy-terminal u {
    text-decoration: none;
    font-family: var(--font-text);
    color: var(--color-text);
  }

  .robo-academy-terminal h4 {
    font-size: var(--font-size);
    color: var(--color-text);
    text-align: center;
    margin: 0;
  }

  .robo-academy-terminal__header {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 35px;
    background-color: #d9d9d9;
    text-align: center;
  }

  .robo-academy-terminal__dot {
    position: absolute;
    left: 20px;
    display: inline-block;
    width: 12px;
    height: 12px;
    /* margin-right: 5px; */
    border-radius: 100%;
  }

  .robo-academy-terminal__dot--red {
    background-color: #fd2e2e;
  }

  .robo-academy-terminal__dot--orange {
    background-color: #fdaa2e;
    left: 40px;

  }

  .robo-academy-terminal__dot--green {
    background-color: #50cf15;
    left: 60px;
  }

  .robo-academy-terminal__content {
    padding: calc(var(--gap) * 0.5);
    padding-top: calc(var(--gap) + 30px);
    color: var(--color-light);
    font-family: var(--font-text);
    font-size: calc(var(--font-size) * 0.8);
    background-color: var(--color-terminal);
  }

  .robo-academy-terminal ul, ol {
    padding-left: calc(var(--gap) * 0.5);
  }

  .robo-academy-terminal a {
    color: var(--color-main);
  }

  .robo-academy-terminal a:hover {
    color: var(--color-light);
  }


</style>