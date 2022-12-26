<template>
  <section class="lesson-reaction container__reg">
    <div class="container__reg grid-4">
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
  .grid-4 {
    gap: calc(var(--gap) * 0.5);
  }
</style>