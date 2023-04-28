<template>
  <Layout>
    <div class="redirect container__mid">
      <p>This page has moved to a </p>
      <a class="btn" :href="redirect">{{ ' https://robonomics.academy' + redirect }}</a>
      <p>Automatic redirecting</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      meta: [
        {
          'http-equiv': 'refresh',
          content: `0; url="${this.redirect}"`
        }
      ],
      link: () => [
        {
          rel: 'canonical',
          href: `https://robonomics.academy${this.redirect}`,
          id: 'canonical',
        },
      ],
    }
  },
  computed: {
    redirect() {
      if (this.$context.redirect) {
        return this.$context.redirect
      }
    }
  },
}
</script>

<style scoped>
.redirect {
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  overflow: hidden;
}

.redirect a {
  display: block;
  margin-bottom: var(--gap);
}
</style>