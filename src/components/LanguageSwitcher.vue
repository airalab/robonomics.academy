<template>
  <select v-if="locales" tabindex="0" @change="changelocale($event)">

    <template v-for="(item) in locales">
      <option v-bind:key="item.id" :selected="item.abbr == $locale" v-bind:value="item.lang">
        <!-- <template v-if="item == 'en'">English</template>
        <template v-if="item == 'ru'">Русский</template> -->
        {{item.lang}}
      </option>
    </template>

  </select>
</template>

<script>
  import locales from '@/data/locales.yaml'
export default {

  computed: {
    locales() {
      return locales
    }
  },

  methods: {
    changelocale(event) {
        console.log(event.target.value)

        // get chosen locale
        let lang = this.getLocale(event.target.value)[0].abbr

        // update locale in options
        this.$setLocale(lang)
        //redirect to page with chosen locale
        let newpath = this.$tp(this.$route.path, lang)
        // this.$router.push(newpath) < - this doesn't work for some reason
        window.location.href = newpath
    },

    getLocale(lang) {
      return locales.filter(item => item.lang === lang);
    }
  }
}
</script>

<style scoped>
  select {
    background-image: none;
    background-color: var(--color-yellow);
    padding: 0.2rem 1.6rem;
    margin-right: var(--gap);
    font-size: 80%;
    font-weight: 600;
    border: 1px solid transparent;
    border-radius: var(--gap);
    color: var(--color-brown);
    text-transform: uppercase;
    cursor: pointer;
  }

  @media screen and (max-width: 410px) {
    select {
      margin-right: 1rem;
      padding: 0.2rem 0.6rem;
      max-width: 50px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

</style>