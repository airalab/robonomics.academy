<template>
  <div class="filter">
    <button 
      @click="$emit('toggleFilter')" 
      class="btn btn-learn filter__btn"
      :class="{'filter-btn--active': isOpen}"
    >
     {{ $t('Filter') }}
    </button>
    <div v-if="isOpen" class="filter__content">

      <div class="filter__item">
        <h4>{{ $t('Complexity:') }}</h4>
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
        <h4>{{ $t('Tags:') }}</h4>
        <div class="filter__tags">
          <button 
            class="btn filter__item-btn"
            :class="{'filter__item-btn--active': chosenTag === tag.label}"
            v-for="tag in tags"
            :key="tag.id"
            @click="activateTag(tag.label)"
          >
            {{ tag.text }}
          </button>
        </div>
      </div>

      <div class="filter__item filter__item--authors">
        <h4>{{ $t('Authors:') }}</h4>
        <div class="filter__author">
          <button 
            class="btn filter__item-btn"
            :class="{'filter__item-btn--active': chosenAuthor === author.alias}"
            v-for="author in authors"
            :key="author.alias"
            @click="activateAuthor(author.alias)"
          >
            <span v-if="author.hide !== true">{{ $t(author.fullName) }}</span>
          </button>
        </div>
      </div>

      <div class="filter__actions">
        <button class="btn filter__item-btn filter__apply" @click="setFilter">
          <font-awesome-icon icon="fa-solid fa-check" />
          <span>{{ $t('Apply') }}</span>
        </button>
        <button class="btn filter__item-btn filter__clear" @click="clearFilter">
          <font-awesome-icon icon="fa-solid fa-xmark" />
          <span>{{ $t('Clear all') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

  import authors from '/courses/authors/authors.yaml'
export default {

  components: {
    Level: () => import('~/components/Level.vue'),
  },

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      // isOpen: false,
      levels: ['1', '2', '3', '4'],
      tags: [
        {
          id: 0,
          text: this.$t('Spring school 2023'),
          label: 'Spring school 2023'
        },
        {
          id: 1,
          text: this.$t('ROS'),
          label: 'ROS'
        },
        {
          id: 2,
          text: this.$t('ROS 2'),
          label: 'ROS 2'
        },
        {
          id: 3,
          text: this.$t('ai'),
          label: 'ai'
        },
        {
          id: 4,
          text: this.$t('Spot'),
          label: 'Spot'
        },
        {
          id: 5,
          text: this.$t('Multi-Agent Systems'),
          label: 'Multi-Agent Systems'
        },
        {
          id: 6,
          text: this.$t('Industrial'),
          label: 'Industrial'
        },
        {
          id: 7,
          text: this.$t('World computer'),
          label: 'World computer'
        },
        {
          id: 8,
          text: this.$t('Essentials'),
          label: 'Essentials'
        },
        {
          id: 9,
          text: this.$t('Smart Home'),
          label: 'Smart Home'
        },
        {
          id: 10,
          text: this.$t('Robotics'),
          label: 'Robotics'
        },
        {
          id: 11,
          text: this.$t('Sensor Network'),
          label: 'Sensor Network'
        },
        {
          id: 12,
          text: this.$t('School 2024'),
          label: 'School 2024'
        }
      ],
      // tags: [`${this.$t('Spring school 2023')}`, `${this.$t('ROS')}`, `${this.$t('Raspberry Pi')}`, `${this.$t('ai')}`, `${this.$t('Spot')}`, `${this.$t('Multi-Agent Systems')}`, `${this.$t('Industrial')}`, `${this.$t('World computer')}`],
      chosenLevel: null,
      chosenTag: null,
      chosenAuthor: null
    }
  },

  computed: {
    authors() {
      return authors
    }
  },

  methods: {
    setFilter() {
      if(this.chosenAuthor || this.chosenLevel || this.chosenTag) {
        this.$store.commit('SET_ACTIVE_FILTERS', {level: this.chosenLevel, tag: this.chosenTag, author: this.chosenAuthor})
      }

      this.$emit('toggleFilter')
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
    /* max-width: 500px;
    width: 100%; */
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
    top: 125%;
    left: -386px;
    /* max-width: 500px;
    width: 100%; */
    width: 500px;
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
    text-decoration: underline;
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

  @media screen and (max-width: 945px) {
    .filter {
      max-width: 500px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .filter__content {
      left: 0;
      width: 100%;
    }
  }

  @media screen and (max-width: 580px) {

    /* .filter__content {
      bottom: -460px;
    } */

    .filter__item {
      flex-direction: column;
      align-items: flex-start;
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

    .filter__content {
      min-height: 520px;
    }


    .filter__tags,
    .filter__author {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .filter__tags .btn,
    .filter__author .btn  {
      margin-right: 0;
    }

  }

</style>