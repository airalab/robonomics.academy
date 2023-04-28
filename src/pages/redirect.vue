<template>
  <Layout>
    <div class="redirect oldy">This page has moved to a <a :href="redirect">{{ 'https://robonomics.academy ' + redirect }}</a>.
      Automatic redirecting</div>
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
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
</style>