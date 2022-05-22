<template>

  <section v-if="title" :class="classes">
     <div class="container__narrow">
       <ul v-if="breadcrumbs">
          <li v-for="item in breadcrumbs" :key="item.id">
            <g-link :to="item.to">{{item.text}}</g-link>
          </li>
        </ul>
        <h1>{{title}}</h1>
     </div>
  </section>

</template>




<script>

export default {

  props: {

    title: {
      type: String
    },
    breadcrumbs: {
      type: Array
    }

  },

  computed: {
    classes() {
      return {
        [`section__yellow`]: true,
        [`breadcrumbs`]: this.breadcrumbs
      };
    },
  },

}
</script>

<style scoped>

  .container__narrow {max-width: 650px; }

  ul {
    list-style: none;
    font-family: var(--font-title);
    font-size: calc(var(--font-size) * 1.2);
    font-weight: bold;
  }

  h1 {
    text-align: left;
  }

  a {
    color: var(--color-white)
  }

  a:hover {
    color: var(--color-orange)
  }

  .breadcrumbs .container__narrow {
    padding-left: 10px;
    border-left: 2px solid var(--color-white)
  }
</style>