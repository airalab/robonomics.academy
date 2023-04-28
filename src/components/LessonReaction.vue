<template>
  <section class="lesson-reaction" :class="{'lesson-reaction__withForm': $store.state.currentReaction}">
    <div class="container__wide grid-4">
      <LessonReactionItem v-for="reaction in reactions" :key="reaction.id" :text="reaction.text" :imgSrc="reaction.img" :lessonTitle="lessonTitle" />
    </div>
  </section>
</template>

<script>

export default {

  components: {
    LessonReactionItem: () => import('~/components/LessonReactionItem.vue')
  },

  props: {
    lessonTitle: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      reactions: [
        {
          text: "Couldn't complete",
          img: 'reaction-1.svg',
          id: 0
        },
        {
          text: "It was hard",
          img: 'reaction-2.svg',
          id: 1
        },
        {
          text: "It was ok",
          img: 'reaction-3.svg',
          id: 2
        },
        {
          text: "It was easy",
          img: 'reaction-4.svg',
          id: 3
        },
      ],
    }
  }

}
</script>

<style scoped>

  .lesson-reaction {
    position: relative;
    height: 320px;
    padding-bottom: calc(var(--gap) * 3);
    transition: height 0.4s linear;
  }

  .lesson-reaction__withForm {
    height: 640px;
  }

  .container__reg {
    padding-left: calc(var(--gap) * 0.5);
    padding-right: calc(var(--gap) * 0.5);
  }
  .grid-4 {
    gap: calc(var(--gap) * 0.5);
  }

  @media screen and (max-width: 940px) {

    .lesson-reaction{
      height: 450px;
    }

    .lesson-reaction__withForm {
      height: 870px;
    }

  }

  @media screen and (max-width: 460px) {
    .lesson-reaction{
      height: 900px;
    }

    .lesson-reaction__withForm {
      height: 1350px;
    }

  }
</style>