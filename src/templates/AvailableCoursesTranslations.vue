<template>

  <Layout>

    <section class="container__wide">

      <div class="grid-3">

        <a 
        v-for="edge in lessonsList" :key="edge.node.id" :href="edge.node.path"
        class="lesson-preview"
        @click="redirectToChosenLocale(edge.node.path)"
        >
        
            <div class="lesson-preview-info">
                <h4>{{edge.node.title}}</h4>
                <p class="line">
                  {{edge.node.description}}
                </p>
            </div>

        </a>

      </div>

    </section>

  </Layout>
  
</template>

<page-query>
  
  query {

    courses: allCourse {
      edges {
        node {
          title
          description
          path
        }
      }
    }

  }
  </page-query>

<script>
export default {

  data() {
    return {
      lessonTitle: '',
    }
  },

  computed: {
    lessonsList() {
      return this.$page.courses.edges.filter((e) => {
        const path =  e.node.path; 
        const title = path.match(/\/([^\/]+)[\/]?$/);
        return title[1] === this.postTitle
      })
    }
  },

  methods: {
    redirectToChosenLocale(path) {
      window.location.href =  path;
    }
  },

  created() {
    const path = this.$route.path; 
    const title = path.match(/\/([^\/]+)[\/]?$/);
    this.postTitle = title[1];
  }

}
</script>


<style scoped>

  .lesson-preview {
        --color: var(--color-text);

        border: 3px solid var(--color);
        color: var(--color) !important;
    }

    .lesson-preview > div {
        padding: calc(var(--gap) * 0.5);
    }

    .lesson-preview h4 {
        margin-bottom: calc(var(--gap) * 0.5);
        line-height: 1.2;
        text-align: left;
    }


    .lesson-preview:hover {
        --color: var(--color-actions)
    }
</style>