<template>
  <div class="lesson-tabs"  :class="classList">
    <ul class="lesson-tabs__list">
      <li 
        v-for="(tab, index) in tabs" 
        :key="tab.title" 
        class="lesson-tabs__item"
        :class='{"lesson-tabs__item--selected": (index == selectedIndex)}'
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'horizontal'
    }
  },
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    }
  },
  computed: {
    classList() {
      return {
        [`lesson-tabs--${this.mode}`]: this.mode,
      };
    },
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i
      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    this.selectTab(0)
  },
}
</script>

<style scoped>
  .lesson-tabs__list {
    margin: 0;
    list-style: none;    
  }
  .lesson-tabs__item {
    position: relative;
    padding: 0 5px;
    margin-bottom: 0;
    font-weight: 600;
    text-align: center;
    transition: color 0.33s ease-in-out;
    cursor: pointer;
    white-space: nowrap;
  }
  .lesson-tabs__item::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 5px;
    height: 5px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    background-color: var(--text-color);
    transition: background-color 0.33s ease-in-out;
  }
  .lesson-tabs__item--selected {
    color: var(--color-second);
  }
  .lesson-tabs__item--selected::after {
    background-color: var(--color-second);
  }
  .lesson-tabs--horizontal {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .lesson-tabs--horizontal  .lesson-tabs__list {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
  .lesson-tabs--horizontal  .lesson-tabs__item:not(:last-child) {
    margin-right: 20px;
  }
  .lesson-tabs--horizontal  .lesson-tabs__item::after {
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
   } 
  .lesson-tabs--vertical {
    display: flex;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    overflow: hidden;
  }
  .lesson-tabs--vertical .lesson-tabs__list{
    margin: 0;
  }
  .lesson-tabs--vertical .lesson-tabs__item{
    text-align: left;
  }
  .lesson-tabs--vertical .lesson-tabs__item::after {
    top: 50%;
    right: -14%;
    transform: translate(-50%, -50%);
  } 
  @media screen and (max-width: 560px) {
    .lesson-tabs__item {
      font-size: 0.8rem;
      white-space: initial;
    }
  }
  
</style>