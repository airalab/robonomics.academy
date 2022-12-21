<template>
  <div class="layout">
    <Header/>
  <MetaInfo
      pageTitle = "This page does not exist"
      pageDescription = "Sorry, nothing here"
    />

    <div class="page-404 container__wide">

      <h1>404</h1>

      <p>You came to wrong auditory</p>

      <div class="page-404__image">
        <g-image src="../assets/images/page-404.png" alt="not found"/>
      </div>

      <g-link to="/">go to main campus</g-link>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
        MetaInfo: () => import('~/components/MetaInfo.vue'),
        Header: () => import('~/components/Header.vue')
      }

    }
</script>

<style scoped>
  .page-404 {
    position: relative;
    /* min-height: 550px;
    height: calc(100vh - 445px); */
    padding-top: calc(var(--gap) * 2);
    /* padding-bottom: var(--gap); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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
    position: absolute;
    bottom: 2rem;
    padding: 0.6rem 6rem;
  }

  .page-404__image {
    position: relative;
    max-width: 1626px;
    width: 1626px;
    height: 478px;
  }

  .page-404__image img {
    bottom: 0;
    position: absolute;
    left: 0;
    right: 0;
  }

  @media screen and (max-width: 800px) {
    .page-404 a {
      font-size: 100%;
      bottom: 5rem;
    }
  }
  @media screen and (max-width: 460px) {
    .page-404__image-wrapper {
      width: 210px;
    }
    .page-404 a {
      font-size: 80%;
      padding: 0.2rem;
    }
    
    .page-404 p {
      font-size: 1.2rem;
      text-align: center;
    }
  } 
  
</style>