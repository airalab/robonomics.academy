<template>
  <div class="lesson-reaction-form__wrapper">

    <div class="lesson-reaction-form__header">
      <span class="lesson-reaction__check" v-if="$store.state.currentReaction === text">
        <font-awesome-icon icon="fa-solid fa-check" aria-hidden="true"/>
      </span>
      <h3>{{ $store.state.currentReaction }}</h3>
    </div>

    <gsp-form v-if="result !== 'success' && $store.state.currentReaction === text" :gscriptID="gscript" :captchaID="captcha" class="lesson-reaction-form__form" :class="result">

      <div>

        <input type="email" placeholder="Your email" class="container__full" required data-gsp-name="Email"
          :data-gsp-data="email" v-model="email" />

        <textarea type="text" placeholder="Your comment" class="container__full"  data-gsp-name="Comment"
          :data-gsp-data="comment" v-model="comment" />

        <input       
          type="hidden" 
          placeholder="location" 
          data-gsp-name="Location" 
          :data-gsp-data="location" 
          v-model="location"
        />

        <input       
          type="hidden" 
          placeholder="reaction" 
          data-gsp-name="Reaction" 
          :data-gsp-data="$store.state.currentReaction" 
          v-model="$store.state.currentReaction"
        />

        <input       
          type="hidden" 
          placeholder="lessonTitle" 
          data-gsp-name="Lesson" 
          :data-gsp-data="lessonTitle" 
          v-model="lessonTitle"
        />

        <button class="lesson-reaction-form__btn" @click="form" :disabled="result === 'wait'">
          <div class="lesson-reaction-form__btn-wrapper" v-if="result === 'init' || result === 'error'">
            <font-awesome-icon icon="fa-solid fa-envelope" aria-hidden="true"/>
            <span>Tell us more</span>
          </div>
          <div class="lesson-reaction-form__btn-wrapper" v-if="result === 'wait'">
            <Loader/>
            <span>Sending your info...</span>
          </div>
        </button>
      </div>
    </gsp-form>

    <div class="lesson-reaction-form__success" v-if="result === 'success'">
      <font-awesome-icon icon="fa-solid fa-envelope" aria-hidden="true"/>
      <div>Thanks,<br/> we’ll keep in touch!</div>
    </div>

  </div>
</template>

<script>
export default {

  components: {
    Loader: () => import('~/components/Loader.vue'),
  },

  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },
    
    lessonTitle: {
      type: String,
      default: ''
    }
  },
  

  data() {
    return {

      gscript: process.env.GRIDSOME_GS_REACTION,
      captcha: process.env.GRIDSOME_CAPTCHAID,

      email: '',
      result: this.$response,
      location: '',
      comment: '',
      interval: null,

    }
  },

  methods: {
    form() {
      this.interval = setInterval(() => {
        this.result = this.$response
        // console.log(this.result)
      }, 1000)

      // if (this.$response === 'success' || this.$response === 'error') {
      //   clearInterval(this.interval)
      // }
    }
  },

  mounted() {
    this.location = 'https://robonomics.academy' + this.$route.path;

    if(this.$response === 'success' || this.$response === 'error') {
      clearInterval(this.interval);
      this.result = 'init';
    }

  }

}
</script>

<style scoped>

  .lesson-reaction-form__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: calc(var(--gap) * 0.5);
    background-color:  var(--color-main);
    transform: translateY(-100%);
    overflow: hidden;
  }

  .lesson-reaction__wrapper.active .lesson-reaction-form__wrapper  {
    border: 2px solid transparent;
    border-radius: 30px;
    animation: moveToBottom 0.5s ease-in-out forwards;
  }

  .lesson-reaction-form__header {
    display: flex;
    align-items: center;
    margin-bottom: calc(var(--gap) * 0.5);
  }

  .lesson-reaction-form__header h3 {
    margin-bottom: 0;
    font-size: 1rem;
    text-align: left;
    white-space: nowrap;
  }

  .lesson-reaction__check  {
    margin-right: 8px;
  }

  .lesson-reaction-form__form input,
  .lesson-reaction-form__form textarea {
    display: block;
    margin-bottom: 5px;
    font-size: 1rem;
    border-color: var(--color-brown-dark);
    color: var(--color-brown-dark);
    text-overflow: ellipsis;
  }

  .lesson-reaction-form__form textarea  {
    resize: none;
    max-width: 100%;
    max-height: 35px;
    margin-bottom: 0;
    padding: 10px 60px;
    padding-bottom: 0;
    padding-left: 0;
    margin-bottom: 1rem;
  }

  .lesson-reaction-form__form input::placeholder,
  .lesson-reaction-form__form textarea::placeholder {
    color: var(--color-brown-dark);
    font-size: 0.8rem;
  }

  .lesson-reaction-form__form input:focus {
    border-color: var(--color-bg);
  }

  .lesson-reaction-form__form textarea:focus {
    border-color: var(--color-bg);
  }

  .lesson-reaction-form__btn {
    color: #0000EE !important;
    padding: 0;
    width: 100%;
    font-size: 1.3rem;
    background: transparent;
    border: 1px solid transparent;
    transition: color 0.3s ease-in-out;
  }

  .lesson-reaction-form__btn:hover {
    color: var(--color-accent) !important;
    background: transparent !important;
    border-color: transparent !important;
  }

  .lesson-reaction-form__form.wait .lesson-reaction-form__btn {
    font-size: 0.7rem;
    opacity: 0.7;
    cursor: none;
    width: auto;
  }

  .lesson-reaction-form__form.wait .loader {
    width: 15px;
    height: 15px;
  }

  .lesson-reaction-form__form.wait .lesson-reaction-form__btn:hover {
    color: #0000EE !important;
  }


  .lesson-reaction-form__btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lesson-reaction-form__btn span {
    display: inline-block;
    margin-left: 10px;
    font-family: var(--font-title);
  }

  .lesson-reaction-form__success {
    font-size: 1.3rem;
    font-family: var(--font-title);
    color: var(--color-brown-dark);
  }

  .lesson-reaction-form__success svg {
    font-size: 2rem;
  }

  @keyframes moveToBottom {
    from {
      border-color: var(--color-brown-dark);
      transform: translateY(-100%);
    }
    to {
      border-color: transparent;
      transform: translateY(0);
    }
  }

</style>