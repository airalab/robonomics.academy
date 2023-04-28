<template>
    <g-link class="learn__link" :class="{'in-progress': item.progress === 'in progress'}" :to="`learn/${item.path}`">
      <ul class="learn__tags">
        <li v-for="tag in item.tags" :key="tag.id" class="tag learn__tag">
          {{ tag }}
        </li>
        <span v-if="item.progress === 'in progress'">(coming soon)</span>
      </ul>
      <div v-if="item.lessons.length > 1" class="learn__lessons lessons-count">
        <span>{{ item.lessons.length }}</span>
      </div>
      <h4> {{ item.title }} </h4>
      <div class="learn__level" :class="`level--${item.level}`">
        <span class="level-bar learn__level-bar"></span>
        <span class="level-bar learn__level-bar"></span>
        <span class="level-bar learn__level-bar"></span>
        <span class="level-bar learn__level-bar"></span>
      </div>
    </g-link>
</template>

<script>
export default {

  props: {
    item: {
      type: Object,
      required: true
    }
  }

}
</script>

<style scoped>
    .learn__link{
      position: relative;
      --color: var(--color-text);
      color: var(--color) !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 320px;
      padding: calc(var(--gap) * 0.5);
      background-color: var(--color-main);
      border: 3px solid var(--color);
    }

    .learn__link.in-progress {
      opacity: 0.7;
    }

    .learn__link > div {
      padding: calc(var(--gap) * 0.5);
    }

    .learn__link h4 {
      padding-top: calc(var(--gap) * 2);
      margin-bottom: calc(var(--gap) * 0.5);
      font-family: var(--font-main);
      font-size: calc( var(--font-size) * 1.6);
      line-height: 1.2;
      text-align: left;
    }

    .learn__link:hover {
      --color: var(--color-actions)
    }

    .learn__tags {
      position: absolute;
      top: 10px;
      right: var(--gap);
      list-style: none;
      text-align: right;
    }

    .learn__lessons {
      position: absolute;
      z-index: 3;
      top: calc(var(--gap) * 0.5);
      left: calc(var(--gap) * 0.5);
      width: 50px;
      height: 50px;
    }

    .learn__level {
      position: absolute;
      right: calc(var(--gap) * 0.5);
      bottom: calc(var(--gap) * 0.5);
    }

</style>