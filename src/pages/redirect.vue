<template>
  <Layout>
    <div class="redirect container__mid">
      <p>{{ $t('This page has moved to a') }} </p>
      <a :href="redirect">{{ ' https://robonomics.academy' + redirect }}</a>
      <p>{{ $t('Automatic redirecting') }}</p>
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
  display: inline-block;
  font-weight: 900;
  background-color: var(--color-main);
  margin-bottom: var(--gap);
}
</style>