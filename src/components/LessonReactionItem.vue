<template>
  <div  class="lesson-reaction__wrapper" :class="{'active': $store.state.currentReaction === text}">
    <button class="lesson-reaction__item" @click="showForm()">
      <g-image :src="require(`!!assets-loader!@/assets/images/${imgSrc}`)" :alt="text" />
      <span>{{text}}</span>
    </button>

    <LessonReactionForm v-if="showFormComp && $store.state.currentReaction === text" :text="text" :lessonTitle="lessonTitle"/>
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

  methods: {
    showForm() {
      this.showFormComp = false;
      this.$store.commit('SET_CURRENT_REACTION', this.text);
      this.showFormComp = !this.showFormComp;
    }
  //  async sendReaction(text) {
  //     this.$store.commit('SET_CURRENT_REACTION', text);

  //     const url = 'https://robonomics.academy' + this.$route.path;

  //     const response = await fetch( 'https://script.google.com/macros/s/' + process.env.GRIDSOME_GS_REACTION + '/exec',
  //     {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //       body: `Location=${encodeURIComponent(url)}&Reaction=${encodeURIComponent(text)}`
  //     })

  //     if(response.ok) {
  //       console.log('feedback was sent!')
  //     } else {
  //       console.error('something went wrong...')
  //     }

  //   }
  }

}
</script>

<style scoped>

  .lesson-reaction__wrapper {
    position: relative;
    width: 100%;
    height: 224px;
    background-color: #fdfdfd;
    border: 2px solid var(--color-brown-dark);
    border-radius: 30px;
    transition:background-color 0.33s ease-in-out;
    overflow: hidden;
  }

  .lesson-reaction__item {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 0;
    transition: transform 0.4s ease-in-out;
  }

  .lesson-reaction__item:hover {
    background-color: transparent!important;
    border-color: transparent !important;
    transform: scale(1.1);
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
  }

  .lesson-reaction__item span{
    color: var(--color-brown-dark);
  }
</style>