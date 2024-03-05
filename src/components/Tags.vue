<template>

  <div class="tags">
    <Tag
      v-for="tag in tags"
      :key="tag.id"
      :tag="tag"
      @activateTag="() => $emit('filterCourses', tag.defaultValue)"
    />
  </div>
  
</template>

<script>
export default {

  components: {
    Tag: () => import('~/components/Tag.vue'),
  },

  data() {
    return {
      tags: [
        {
          name: this.$t('course'),
          defaultValue: 'course',
          id: 0
        },
        {
          name: this.$t('guide'),
          defaultValue: 'guide',
          id: 1
        },
        {
          name: this.$t('launch simulation'),
          defaultValue: 'launch simulation',
          id: 2
        },
        {
          name: this.$t('real-life setup'),
          defaultValue: 'real-life setup',
          id: 3
        }
      ],
    }
  },


}
</script>

<style scoped>
  .tags {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--gap) * 0.4);
  }

  @media screen and (max-width: 920px) {
    .tags {
      flex-wrap: wrap;
    }
  }
</style>