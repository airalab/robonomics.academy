<template>

  <div class="tags">
    <Tag
      v-for="tag in tags"
      :key="tag.id"
      :tag="tag"
      @activateTag="() => $emit('filterCourses', tag.name)"
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
          name: 'course',
          id: 0
        },
        {
          name: 'guide',
          id: 1
        },
        {
          name: 'launch simulation',
          id: 2
        },
        {
          name: 'real-life setup',
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
    margin-bottom: calc(var(--gap) * 2);
  }

  @media screen and (max-width: 920px) {
    .tags {
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: calc(var(--gap) * 0.4);
    }
  }
</style>