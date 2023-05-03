<template>
  <div class="filter">
    <button 
      @click="isOpen = !isOpen" 
      class="btn btn-learn filter__btn"
      :class="{'filter-btn--active': isOpen}"
    >
     Filter
    </button>
    <div v-if="isOpen" class="filter__content">

      <div class="filter__item">
        <h4>Complexity:</h4>
        <div class="filter__level">
          <Level 
            v-for="level in levels" 
            :key="level"
            :level="level"
            @activateLevel="activateLevel(level)"
            :cls="`filter__level-item ${ chosenLevel == level ? 'filter__level-item--active' : ''}`"
            
          />
        </div>
      </div>

      <div class="filter__item">
        <h4>Tags:</h4>
        <div class="filter__tags">
          <button 
            class="btn filter__item-btn"
            :class="{'filter__item-btn--active': chosenTag === tag}"
            v-for="tag in tags"
            :key="tag"
            @click="activateTag(tag)"
          >
            {{ tag }}
          </button>
        </div>
      </div>

      <div class="filter__item filter__item--authors">
        <h4>Authors:</h4>
        <div class="filter__author">
          <button 
            class="btn filter__item-btn"
            :class="{'filter__item-btn--active': chosenAuthor === author}"
            v-for="author in authors"
            :key="author"
            @click="activateAuthor(author)"
          >
            {{ author }}
          </button>
        </div>
      </div>

      <div class="filter__actions">
        <button class="btn filter__item-btn filter__apply" @click="setFilter">
          <font-awesome-icon icon="fa-solid fa-check" />
          <span>Apply</span>
        </button>
        <button class="btn filter__item-btn filter__clear" @click="clearFilter">
          <font-awesome-icon icon="fa-solid fa-xmark" />
          <span>Clear all</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  components: {
    Level: () => import('~/components/Level.vue'),
  },

  data() {
    return {
      isOpen: false,
      levels: ['1', '2', '3', '4'],
      tags: ['Spring school 2023', 'ROS', 'Raspberry Pi'],
      authors: ['Ivan Berman'],
      chosenLevel: null,
      chosenTag: null,
      chosenAuthor: null
    }
  },

  methods: {
    setFilter() {
      if(this.chosenAuthor || this.chosenLevel || this.chosenTag) {
        this.$store.commit('SET_ACTIVE_FILTERS', {level: this.chosenLevel, tag: this.chosenTag, author: this.chosenAuthor})
      }

      this.isOpen = false
    },

    clearFilter() {
        this.chosenLevel = null,
        this.chosenTag = null,
        this.chosenAuthor = null
        this.$store.commit('REMOVE_ACTIVE_FILTERS')
    },

    activateLevel(level) {
      this.chosenLevel = level
    },

    activateTag(tag) {
      this.chosenTag = tag
    },


    activateAuthor(author) {
      this.chosenAuthor = author
    }
  }

}
</script>

<style scoped>

  .filter {
    position: relative;
    max-width: 500px;
    width: 100%;
  }

  .filter__btn {
    padding-right: calc(var(--gap) * 1.2);
    color: var(--color-dark);
    border-color: var(--color-dark);
    background-image: url('/filter-arrow.svg');
    background-position: center right 12px;
    background-repeat: no-repeat;
    text-transform: none;
  }

  .filter__btn:hover,
  .filter-btn--active {
    background-image: url('/filter-arrow-active.svg');
    background-color: var(--color-dark);
    color: var(--color-light);
  }

  .filter__content {
    position: absolute;
    bottom: -350px;
    left: 0;
    width: 100%;
    padding: calc(var(--gap) * 0.5) var(--gap);
    background-color: var(--color-light);
    border: 3px solid var(--color-text);
    z-index: 9;
  }

  .filter__item {
    display: flex;
    align-items: center;
    margin-bottom: var(--gap);
  }

  .filter__item--authors {
    margin-bottom: calc(var(--gap) * 2);
  }

  .filter__item h4 {
    margin: 0;
    min-width: 133px;
    font-family: var(--font-main);
    margin-right: calc(var(--gap) * 0.5);
    text-align: left;
  }

  .filter__level {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .filter__tags .btn {
    text-align: left;
  }

  .filter__level-item {
    width: 54px;
    height: 52px;
    padding: calc(var(--gap) * 0.2);
    background-color: var(--color-main);
  }

  .filter__level-item:not(:last-child) {
    margin-right: calc(var(--gap) * 0.5);
  }

  .filter__level-item--active {
    background-color: var(--color-actions);
  }

  .filter__item-btn {
    padding: 0;
    font-family: var(--font-main);
    font-weight: 400;
    color: var(--color-actions);
    background-color: transparent;
    box-shadow: none;
    border-radius: 0;
    border: none;
    text-transform: none;
  }

  .filter__item-btn:not(:last-child) {
    margin-right: calc(var(--gap) * 0.4);
  }

  .filter__item-btn:hover {
    color: var(--color-text);
  }

  .filter__item-btn--active {
    font-weight: 600;
    color: var(--color-blue);
  }

  .filter__actions {
    display: flex;
    justify-content: flex-end;
  }

  .filter__actions  .filter__item-btn {
    font-weight: 700;
    display: flex;
    align-items: center;
  }

  .filter__actions .filter__item-btn:first-of-type {
    margin-right: var(--gap);
  }

  .filter__actions .filter__item-btn svg {
    font-size: 150%;
    margin-right: calc(var(--gap) * 0.3);
  }

  .filter__apply {
    color: var(--color-green);
  }

  .filter__clear {
    color: var(--color-pink);
  }

  @media screen and (max-width: 580px) {

    .filter__content {
      bottom: -460px;
    }

    .filter__item {
      flex-direction: column;
    }

    .filter__item h4 {
      min-width: unset;
      margin-right: 0;
      margin-bottom: calc(var(--gap) * 0.3);
    }

    .filter__level-item:not(:last-child) {
      margin-right: 0;
    }

    .filter__item--authors {
      margin-bottom: calc(var(--gap) * 1.5);
    }
  }

  @media screen and (max-width: 465px) {
    .filter__tags,
    .filter__author {
      display: flex;
      flex-direction: column;
    }

    .filter__tags .btn,
    .filter__author .btn  {
      margin-right: 0;
    }

  }

</style>