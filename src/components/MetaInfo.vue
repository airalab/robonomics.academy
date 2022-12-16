<template></template>
  
<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>


<script>
  import translations from '@/data/locales/translations.yaml'
export default {
  props: {
      pageTitle: { type: String, default: '' },
      pageDescription: { type: String, default: '' },
      pageImage: { type: String, default: '' },
      pageImageWidth: { type: String, default: '1280' },
      pageImageHeight: { type: String, default: '765' },
      pageLang: {type: String, default: 'en'},
      coursePage: {type: Boolean, default: false},
      coursePageList: {type: Boolean, default: false}
  },

  data() {
    return {
      allLocales: ["en", "ru", "es", "de", "it", "pt"],
      locale: 'en',
      metaTitle: '',
      metaDescription: '',
      metaImage: ''
    }
  },

  watch: {
    '$route.path'() {
      this.metaTitle = this.getMetaInfo(this.pageTitle);
      this.metaDescription = this.getMetaInfo(this.pageDescription)
      this.metaImage = this.pageImage;
    }
  },

  computed: {
    image() {
      if(this.pageImage != '') {
        return this.$static.metadata.siteUrl + this.metaImage + '-' + this.locale + '.png'
      }
      else{
        return this.$static.metadata.siteUrl + '/og/index.png'
      }
    },

    url(){
      return this.$static.metadata.siteUrl + this.$route.fullPath
    },

    translations() {
      return translations;
    },

    googleCourseInfo() {
      if(this.coursePage) {
        return  [{
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'Course',
            name: this.pageTitle,
            description: this.pageDescription,
            provider: {
              '@type': "Organization",
              name: "Robonomics Academy",
              sameAs: "https://robonomics.academy/"
            },
            headline: this.pageTitle,
            image: this.image
          }
        }]
      } else if (this.coursePageList) {
        return [{
          type: 'application/ld+json',
          json: {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Course",
                url: "https://robonomics.academy/online-courses/introduction-course/",
                name: this.getMetaInfo("Introduction Course"), 
                description: this.getMetaInfo("Welcome Introduction Course!"), 
                provider: {
                  '@type': "Organization",
                  name: "Robonomics Academy",
                  sameAs: "https://robonomics.academy/"
                }
              }
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Course",
                url: "https://robonomics.academy/online-courses/boston-dynamics-course/",
                name: this.getMetaInfo("Boston Dynamics Spot Software Developing"), 
                description: this.getMetaInfo("Our new Boston Dynamics Spot Software Developing!"), 
                provider: {
                  '@type': "Organization",
                  name: "Robonomics Academy",
                  sameAs: "https://robonomics.academy/"
                }
              }
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Course",
                url: "https://robonomics.academy/online-courses/smart-home-course/",
                name: this.getMetaInfo("Sovereign Smart Home with Robonomics and Home Assistant"), 
                description: this.getMetaInfo("In this course, you will go through all the steps required in order to build your own sovereign smart home, the main advantage of which is the safety / privacy of user data."),
                provider: {
                  '@type': "Organization",
                  name: "Robonomics Academy",
                  sameAs: "https://robonomics.academy/"
                }
              }
            }
          ]},
        }]
      } else {
        return []
      }
    },
  },

  methods: {
    getLocale() {

      this.allLocales.map(locale => {
        if(this.$route.path.includes(`/${locale}/`)) {
          this.locale = locale;
        } 
      })
    },

    getMetaInfo(alias) {
      let hasAlias = 0

      for (const item of this.translations) {
        if (item.alias === alias){
          hasAlias++
          
          // Check if there is translation for current alias, if no show default locale string
          if (eval(`item.${this.locale}`)){
            return eval(`item.${this.locale}`)
          }
          else {
              return eval(`item.en`)
          }
        }
      }

      if(hasAlias == 0) {
        return alias;
      }
    }
  },

  metaInfo() {
    const locale = this.locale;
    const title =  this.metaTitle + ' / ' + this.$static.metadata.siteName;
    const description = this.metaDescription;
    const image = this.image;
    return {
      title: title,
      htmlAttrs: {
        lang: locale,
        amp: true
      },
      meta: [
        { key: 'description', name: 'description', content: description },

        // Some Open Graph Tags
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: this.$static.metadata.siteName },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: image },
        { property: "og:image:width", content: this.pageImageWidth },
        { property: "og:image:height", content: this.pageImageHeight },
        { property: "og:url", content: this.url },



        // Some Twitter Cards Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:image", content: image},
        { name: "twitter:description", content: description },
        { name: "twitter:site", content: '@AIRA_Robonomics' },
        { name: "twitter:creator", content: '@AIRA_Robonomics' }
      ],
      script: this.googleCourseInfo
    };
  },

  created() {
    this.getLocale();
    this.metaTitle = this.getMetaInfo(this.pageTitle);
    this.metaDescription = this.getMetaInfo(this.pageDescription)
    this.metaImage = this.pageImage;
  }
};
</script>