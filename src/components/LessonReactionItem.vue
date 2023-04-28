<template>
  <div  class="lesson-reaction__wrapper" :class="{'active': $store.state.currentReaction === text}">
    <button class="lesson-reaction__item custom-checkbox" @click.stop="showForm()">
      <div class="lesson-reaction__checkbox">
        <input id="checkbox" type="checkbox" name="checkbox" class="custom-checkbox__field" :checked="$store.state.currentReaction === text ? true : false">
        <span class="custom-checkbox__content"></span>
      </div>
      <div class="lesson-reaction__content">
        <g-image :src="require(`!!assets-loader!@/assets/images/${imgSrc}`)" :alt="text" />
        <span>{{text}}</span>
      </div>
    </button>

    <LessonReactionForm v-if="showFormComp && $store.state.currentReaction === text" :text="text" :lessonTitle="lessonTitle" @closeForm="closeForm"/>
  </div>
</template>

<script>
export default {

  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },

    imgSrc: {
      type: String,
      required: true,
      default: 'reaction-1.png'
    },
    
    lessonTitle: {
      type: String,
      default: ''
    }
  },

  components: {
    LessonReactionForm: () => import('~/components/LessonReactionForm.vue'),
  },

  data() {
    return {
      showFormComp: false
    }
  },

  watch: {
    '$route.path': function() {
      this.showFormComp = false;
      this.$store.commit('SET_CURRENT_REACTION', '');
    }
  },

  methods: {
    showForm() {
      this.showFormComp = false;
      this.$store.commit('SET_CURRENT_REACTION', this.text);
      this.showFormComp = !this.showFormComp;
    },

    closeForm() {
      this.showFormComp = false;
      this.$store.commit('SET_CURRENT_REACTION', '');
    }
  }

}
</script>

<style scoped>

  .lesson-reaction__wrapper {
    /* position: relative; */
    width: 100%;
    height: 224px;
    background-color: #fdfdfd;
    border: 2px solid var(--color-brown-dark);
    /* border-radius: 30px; */
    transition:background-color 0.33s ease-in-out, border-color 0.33s ease-in-out;;
    overflow: hidden;
  }

  .lesson-reaction__wrapper:hover {
    border-color: var(--color-second);
  }

  .lesson-reaction__wrapper:focus {
    box-shadow: 0.2rem 0.2rem 0 0 var(--color-second);
  }

  .lesson-reaction__item {
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 0;
  }

  .lesson-reaction__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.4s ease-in-out;
  }
  .lesson-reaction__item:hover  .lesson-reaction__content {
    transform: scale(1.1);
  }

  .lesson-reaction__item:hover {
    background-color: transparent!important;
    border-color: transparent !important;
  }

  .lesson-reaction__wrapper.active {
    background-color: var(--color-main);
  }

  .lesson-reaction__item.active:hover {
    background-color:var(--color-main) !important;
  }

  .lesson-reaction__item img {
    display: inline-block;
    margin-bottom: 1rem;
    max-width: 108px;
    min-width: 65px;
    width: 100%;
  }

  .lesson-reaction__item span{
    font-size: 1.2rem;
    color: var(--color-brown-dark);
  }

  .lesson-reaction__checkbox {
    position: absolute;
    top: 15px;
    left: 10px;
  }
</style>