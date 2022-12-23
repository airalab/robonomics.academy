<template>
  <section class="lesson-reaction">
    <div class="container__mid grid-4">
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
          img: 'reaction-1.png',
          id: 0
        },
        {
          text: "It was hard",
          img: 'reaction-2.png',
          id: 1
        },
        {
          text: "It was ok",
          img: 'reaction-3.png',
          id: 2
        },
        {
          text: "It was easy",
          img: 'reaction-4.png',
          id: 3
        },
      ],
    }
  }

}
</script>

<style>

</style>