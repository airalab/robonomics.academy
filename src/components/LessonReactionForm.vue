<template>
  <div class="lesson-reaction-form__wrapper">

    <div class="lesson-reaction-form__header">
      <div>
        <span class="lesson-reaction__check" v-if="$store.state.currentReaction === text">
        <!-- <font-awesome-icon icon="fa-solid fa-check" aria-hidden="true"/> -->
        </span>
        <h3>{{ $store.state.currentReaction }}</h3>
      </div>
      <span tabindex="0" class="lesson-reaction__close" @click="$emit('closeForm')">
        <font-awesome-icon icon="fa-solid fa-xmark" aria-hidden="true"/>
      </span>
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

    document.body.addEventListener('click', () => {
      if(this.$store.state.currentReaction) {
        this.$emit('closeForm');
      }
    })

  }

}
</script>

<style scoped>

  .lesson-reaction-form__wrapper {
    position: absolute;
    bottom: -67px;
    right: 20px;
    width: 70%;
    height: 238px;
    padding: calc(var(--gap) * 0.5) calc(var(--gap) * 1);
    background-color:  var(--color-main);
    transform: translateY(-100%);
    overflow: hidden;
    z-index: 0;
  }

  .lesson-reaction__wrapper.active .lesson-reaction-form__wrapper  {
    border: 2px solid var(--color-brown-dark);
    /* border-radius: 30px; */
    animation: moveToBottom 0.5s linear forwards;
  }

  .lesson-reaction-form__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: calc(var(--gap) * 0.3);
  }

  .lesson-reaction-form__header > div {
    display: flex;
    align-items: center;
  }

  .lesson-reaction-form__header h3 {
    margin-bottom: 0;
    font-size: 1.3rem;
    text-align: left;
    white-space: nowrap;
  }

  .lesson-reaction__check  {
    margin-right: 8px;
    font-size: 1.4rem;
  }

  .lesson-reaction__close {
    font-size: 2rem;
    cursor: pointer;
  }

  .lesson-reaction-form__form input,
  .lesson-reaction-form__form textarea {
    display: block;
    margin-bottom: 15px;
    font-size: 1rem;
    width: 94%;
    border-color: var(--color-brown-dark);
    color: var(--color-brown-dark);
    text-overflow: ellipsis;
  }

  .lesson-reaction-form__form textarea  {
    resize: none;
    max-width: 100%;
    max-height: 35px;
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
    color: var(--color-light) !important;
    padding: calc( var(--gap) * 0.3) calc( var(--gap) * 0.5);
    font-size: 1.3rem;
    background: var(--color-second);
    border: 1px solid var(--color-second);
    border-radius: 0;
    transition: color 0.3s ease-in-out;
  }

  .lesson-reaction-form__btn:hover {
    color: var(--color-accent) !important;
    background: var(--color-second) !important;
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
    color: var(--color-light) !important;
  }


  .lesson-reaction-form__btn-wrapper {
    display: flex;
    align-items: center;
    /* padding-left: 5px; */
    
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
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 940px) {

    .lesson-reaction-form__wrapper {
      bottom: -68px;
      width: 95%;
    }
    
  }

  @media screen and (max-width: 460px) {

    .lesson-reaction-form__wrapper {
      width: 90%;
    }

  }

</style>