<template>
    <g-link class="learn__link" :class="{'in-progress': item.progress === 'in progress'}" :to="`learn/${item.path}`">
      <ul class="learn__tags">
        <li v-for="tag in item.tags" :key="tag.id" class="tag learn__tag">
          {{ tag }}
        </li>
        <span v-if="item.progress === 'in progress'">(coming soon)</span>
      </ul>
      <div v-if="item.lessons.length > 1" class="learn__lessons lessons-count">
        <span>{{ item.lessons.length }}</span>
      </div>
      <h3> {{ $ts(item.title) }} </h3>
      <div class="learn__author" v-if="item.author">
        <g-image v-if="item.authorImage" :src="require(`!!assets-loader!@imagesAuthors/${item.authorImage}`)" :alt="item.author" />
        <h4>{{ $ts(getAuthorByAlias(item.author)[0].fullName)}}</h4>
      </div>
      <Level :level="String(item.level)" cls="learn__level" />
    </g-link>
</template>

<script>
  import authors from '/courses/authors/authors.yaml'
export default {

  components: {
    Level: () => import('~/components/Level.vue'),
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    authors() {
      return authors
    }
  },


  methods: {
    getAuthorByAlias(alias) {
      return this.authors.filter(author => author.alias === alias)
    }
  }

}
</script>

<style scoped>
    .learn__link{
      position: relative;
      --color: var(--color-text);
      color: var(--color) !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 320px;
      padding: calc(var(--gap) * 0.5);
      background-color: var(--color-main);
      border: 3px solid var(--color);
      overflow: hidden;
    }

    .learn__link.in-progress {
      opacity: 0.5;
    }

    /* .learn__link > div {
      padding: calc(var(--gap) * 0.5);
    } */

    .learn__link h3 {
      display: -webkit-box;
      padding-top: calc(var(--gap) * 0.5);
      margin-bottom: calc(var(--gap) * 0.5);
      font-family: var(--font-main);
      font-size: calc( var(--font-size) * 1.6);
      line-height: 1.2;
      text-align: left;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      white-space: pre-wrap;

    }

    .learn__link:hover {
      --color: var(--color-actions)
    }

    .learn__tags {
      position: absolute;
      top: 10px;
      right: calc(var(--gap) * 0.5);
      list-style: none;
      text-align: right;
    }

    .learn__lessons {
      position: absolute;
      z-index: 3;
      top: calc(var(--gap) * 0.5);
      left: calc(var(--gap) * 0.5);
      width: 50px;
      height: 50px;
    }

    .learn__level {
      position: absolute;
      right: calc(var(--gap) * 0.5);
      bottom: calc(var(--gap) * 0.5);
    }

    .learn__author {
      position: absolute;
      left: calc(var(--gap) * 0.5);
      bottom: calc(var(--gap) * 0.5);
      display: flex;
      align-items: center;
    }

    .learn__author h4 {
      margin: 0;
      font-family: var(--font-main);
      font-weight: 900;
      font-size: calc( var(--font-size) * 1);
    }

    .learn__author img {
      display: inline-block;
      width: 44px;
      height: 44px;
      margin-right: calc(var(--gap) * 0.5);
      border-radius: 100%;
    }

</style>