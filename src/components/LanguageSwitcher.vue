<template>
  <div>
    <select class="language-select" v-if="locales" tabindex="0" @change="changelocale($event)">

      <template v-for="(item) in locales">
        <option v-bind:key="item.id" :selected="item.abbr == $locale" v-bind:value="item.lang">
          <!-- <template v-if="item == 'en'">English</template>
          <template v-if="item == 'ru'">Русский</template> -->
          {{item.lang}}
        </option>
      </template>

    </select>
    <span class="helper-element" aria-hidden="true"></span>
  </div>
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
    },

    initSelectResize(lang) {
      const helperElement = document.querySelector(".helper-element");
      const root = document.documentElement;

      helperElement.innerHTML = lang;

      root.style.setProperty("--dynamic-size", `${helperElement.offsetWidth + 10}px`)

      // if(helperElement.innerText.toLowerCase() === 'italiano') {
      //     root.style.setProperty("--dynamic-size", `${helperElement.offsetWidth + 25}px`)
      //   } else if (helperElement.innerText.toLowerCase() === 'english') {
      //     root.style.setProperty("--dynamic-size", `${helperElement.offsetWidth + 20}px`)
      //   } else {
      //     root.style.setProperty("--dynamic-size", `${helperElement.offsetWidth + 10}px`)
      //   }

    }
  },

  mounted() {

    if(localStorage.getItem('locale')) {
      const locale = localStorage.getItem('locale');
      const {lang} = locales.filter(item => item.abbr === locale)[0];
      this.initSelectResize(lang)
    }

  }
}
</script>

<style scoped>
  select {
    background-image: url("data:image/svg+xml,%3Csvg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 6L8.39711 0H0.602886L4.5 6Z' fill='%23232323'/%3E%3C/svg%3E");
    background-position: right 7px top 11px;
    background-color: var(--color-light);
    padding: 0.3rem 0.6rem;
    padding-left: 0.85rem;
    /* margin-right: var(--gap); */
    width: var(--select-size);
    font-size: 80%;
    font-weight: 500;
    border: 1px solid var(--color-dark);
    border-radius: var(--gap);
    color: var(--color-dark);
    cursor: pointer;
  }

  .helper-element {
    position: absolute;
    top: 0;
    left: -9999px;
  }

  @media screen and (max-width: 450px) {
    select {
      margin-right: 1rem;
      /* padding: 0.2rem 0.8rem; */
      /* max-width: 75px; */
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

</style>