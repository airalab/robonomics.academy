<template>
  <div>
    <button class="lesson-reaction__item" @click="sendReaction(text)" :class="{'active': $store.state.currentReaction === text}">
      <g-image :src="require(`!!assets-loader!@/assets/images/${imgSrc}`)" :alt="text" />
      <span>{{text}}</span>
      <span class="lesson-reaction__check" v-if="$store.state.currentReaction === text">
        <font-awesome-icon icon="fa-solid fa-check" aria-hidden="true"/>
      </span>
    </button>
    <a :href="`mailto:${$store.state.emailsForCourseFeedback}?subject=${encodeURIComponent('Robonomics academy feedback (' +  lessonTitle + ')')}&body=${encodeURIComponent('https://robonomics.academy' + this.$route.path)}`" class="lesson-reaction__mail" v-if="$store.state.currentReaction === text">
      <font-awesome-icon icon="fa-solid fa-envelope" aria-hidden="true"/>
      <span>Send us more info</span>
    </a>
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

  methods: {
   async sendReaction(text) {
      this.$store.commit('SET_CURRENT_REACTION', text);

      const url = 'https://robonomics.academy' + this.$route.path;

      const response = await fetch( 'https://script.google.com/macros/s/' + process.env.GRIDSOME_GS_REACTION + '/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `Location=${encodeURIComponent(url)}&Reaction=${encodeURIComponent(text)}`
      })

      if(response.ok) {
        console.log('feedback was sent!')
      } else {
        console.error('something went wrong...')
      }

    }
  }

}
</script>

<style scoped>
  .lesson-reaction__item {
    position: relative;
    display: flex;
    width: 100%;
    height: 224px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fdfdfd;
    border: 2px solid var(--color-brown-dark);
    border-radius: 30px;
    transition: transform 0.4s ease-in-out;
  }

  .lesson-reaction__item:hover {
    background-color: #fdfdfd!important;
    border-color: var(--color-brown-dark) !important;
    transform: scale(1.1);
  }

  .lesson-reaction__item.active {
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

  .lesson-reaction__mail {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .lesson-reaction__mail span {
    margin-left: 10px;
    font-family: var(--font-title);
  }

  .lesson-reaction__check {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 10;
  }
</style>