<template>
  <Layout>

    <MetaInfo
      pageTitle = "This page does not exist"
      pageDescription = "Sorry, nothing here"
    />

    <div class="page-404">

      <h1>404</h1>

      <p>Sorry, the page does not exist</p>

      <g-link class="btn" to="/">Go Home</g-link>
    </div>

  </Layout>
</template>

<script>
  export default {
    components: {
        MetaInfo: () => import('~/components/MetaInfo.vue')
      }
  }
</script>

<style scoped>
  .page-404 {
    position: relative;
    min-height: 550px;
    height: calc(100vh - 445px);
    padding-top: var(--space);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .page-404 h1 {
    font-size: 5rem;
    margin-bottom: 0;
  }
  .page-404 p {
    font-weight: 600;
    font-size: 1.5rem;
  }
  .page-404 a {
    padding: 0.6rem 6rem;

  }

  @media screen and (max-width: 800px) {
    .page-404 a {
      font-size: 100%;
    }
  }
  @media screen and (max-width: 460px) {
    .page-404__image-wrapper {
      width: 210px;
    }
    .page-404 a {
      font-size: 80%;
    }
    
    .page-404 p {
      font-size: 1.2rem;
      text-align: center;
    }
  } 
  
</style>