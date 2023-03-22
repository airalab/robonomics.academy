<template>
  
  <LayoutPlayground  :docId="String($page.playground.docId)">
  
  
    <MetaInfo
        :pageTitle = "$page.playground.title"
        :pageDescription = "$page.playground.description"
        :pageImage = "metaImgPath"
      />
  
  
      <section class="text__hyphened">
        <section class="container__reg lesson-section">
          <VueRemarkContent />
        </section>

      </section>
  </LayoutPlayground>
  
</template>



<page-query>
  query ($id: ID!) {
    playground(id: $id) {
      id
      docId
      title
      description
      content
      fileInfo {
        path
        name
      }
    }
  }
  </page-query>
  
  <script>
  export default {
  
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
    },

    data() {
      return {
        metaImgPath: ''
      }
    },

    watch: {
      '$route.path'() {
        let final = this.$page.playground.fileInfo.path.substr(this.$page.playground.fileInfo.path.indexOf('/') + 1).slice(0,-3);

        this.metaImgPath = `/og/${final}`;

        this.$store.commit('SET_CURRENT_REACTION', '');
      }
    },

    created() {
      let final = this.$page.playground.fileInfo.path.substr(this.$page.playground.fileInfo.path.indexOf('/') + 1).slice(0,-3);

      this.metaImgPath = `/og/${final.substring(final.indexOf('/')+1)}`;

    }
  
  }
  </script>
  