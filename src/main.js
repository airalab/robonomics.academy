// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex'
import VueCookies from 'vue-cookies';
import VueGtag from "vue-gtag";
import VueYandexMetrika from 'vue-yandex-metrika'
import 'prismjs'

// adding languages for code highlight
import 'prismjs/components/prism-json'; 
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python'; 
import 'prismjs/components/prism-yaml'; 
import 'prismjs/components/prism-xml-doc'; 

// plugins for code highlight (prism)
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/toolbar/prism-toolbar.js";
import "prismjs/plugins/show-language/prism-show-language.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";


import DefaultLayout from '~/layouts/Default.vue'
import CourseLayout from '~/layouts/CourseLayout.vue'
import AcademyList from '~/components/List.vue'
import LessonResult from '~/components/LessonResult.vue'
import ImagePopup from '~/components/ImagePopup.vue'
import LessonImages from '~/components/LessonImages.vue'
import LessonCodeWrapper from '~/components/LessonCodeWrapper.vue'
import LessonButtonLink from '~/components/LessonButtonLink.vue'
import LessonReaction from '~/components/LessonReaction.vue'
import LessonVideo from '~/components/LessonVideo.vue'
import RoboAcademyYoutubeVideo from '~/components/RoboAcademyYoutubeVideo.vue'
import RoboAcademyGrid from '~/components/RoboAcademyGrid.vue'
import RoboAcademyGridElement from '~/components/RoboAcademyGridElement.vue'
import RoboAcademyNote from '~/components/RoboAcademyNote.vue'
import RoboAcademyTabs from '~/components/RoboAcademyTabs.vue'
import RoboAcademyTab from '~/components/RoboAcademyTab.vue'
import RoboAcademyText from '~/components/RoboAcademyText.vue'
import Prism from 'vue-prism-component'


// styles
import '~/assets/css/index.css'
import '~/assets/css/code-styles.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { 
  faAward, 
  faCircleChevronRight, 
  faFlagCheckered, 
  faPlus, 
  faGraduationCap, 
  faArrowPointer, 
  faFile,
  faClock,
  faScrewdriverWrench,
  faBars,
  faCircleXmark,
  faForward,
  faArrowRightLong,
  faArrowLeftLong,
  faCode,
  faHouseSignal,
  faEnvelope,
  faCheck,
  faXmark,
  faSignal,
  faMicrochip
  // faRobot
 } from '@fortawesome/free-solid-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('CourseLayout', CourseLayout)
  Vue.component('List', AcademyList)
  Vue.component('Result', LessonResult)
  Vue.component('ImagePopup', ImagePopup)
  Vue.component('Prism', Prism)
  Vue.component('LessonImages', LessonImages)
  Vue.component('LessonCodeWrapper', LessonCodeWrapper)
  Vue.component('LessonButtonLink', LessonButtonLink)
  Vue.component('LessonReaction', LessonReaction)
  Vue.component('LessonVideo', LessonVideo)
  Vue.component('RoboAcademyYoutube', RoboAcademyYoutubeVideo)
  Vue.component('RoboAcademyGrid', RoboAcademyGrid)
  Vue.component('RoboAcademyGridElement', RoboAcademyGridElement)
  Vue.component('RoboAcademyNote', RoboAcademyNote)
  Vue.component('RoboAcademyTabs', RoboAcademyTabs)
  Vue.component('RoboAcademyTab', RoboAcademyTab)
  Vue.component('RoboAcademyText', RoboAcademyText)

  /* add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)


  /* add icons to the library */
  library.add(
    faAward, 
    faCircleChevronRight, 
    faFlagCheckered, 
    faPlus, 
    faGraduationCap, 
    faArrowPointer, 
    faFile,
    faClock,
    faScrewdriverWrench,
    faBars,
    faCircleXmark,
    faForward,
    faArrowRightLong,
    faArrowLeftLong,
    faCode,
    faHouseSignal,
    faEnvelope,
    faCheck,
    faXmark,
    faSignal,
    faMicrochip
    // faRobot
  )

  Vue.prototype.$discord = 'https://discord.gg/xqDgG3EGm9'
  Vue.prototype.$website = 'https://robonomics.academy'

    
  appOptions.store = new Vuex.Store({
    state: {
      userTracker: {},
      showHeader: true,
      showImagePopup: false,
      imagePopupSrc: 'smart-house-course/lesson-1-1.png',
      currentReaction: '',
      activeTags: [],
      activeFilter: []
    },
   mutations: {
      SET_USER_TRACKER(state, userTracker) {
        state.userTracker = userTracker;
      },
      TOGGLE_SHOW_HEADER(state, showHeader) {
        state.showHeader = showHeader
      },
      SHOW_IMAGE_POPUP(state, src) {
        state.showImagePopup = true
        document.body.style.overflow = 'hidden'
        state.imagePopupSrc = src;
      },
      HIDE_IMAGE_POPUP(state) {
        state.showImagePopup = false
        document.body.style.overflow = 'auto'
        state.imagePopupSrc = 'smart-house-course/lesson-1-1.png';
      },
      SET_CURRENT_REACTION(state, reaction) {
        state.currentReaction = reaction;
      },
      SET_ACTIVE_TAGS(state, tag) {
        if(!state.activeTags.includes(tag)) {
          state.activeTags.push(tag);
        }
      },
      REMOVE_ACTIVE_TAGS(state, tag) {
        state.activeTags = state.activeTags.filter(t => t !== tag);
      },
      REMOVE_ALL_TAGS(state) {
        state.activeTags = [];
      },
      SET_ACTIVE_FILTERS(state, {level, tag, author}) {

        if(state.activeFilter.length) {
          state.activeFilter = []
        }

        state.activeFilter.push({level, tag, author})

      },
      REMOVE_ACTIVE_FILTERS(state) {
        state.activeFilter = []
      }
   },
  });


  Vue.use(VueGtag, {
    config: { id: "UA-169310127-5" },
    includes: [
      { id: 'AW-11021567627' },
    ]
  });

  if(isClient) {
    Vue.use(VueCookies, { expire: '90d'});
    Vue.$cookies.config('90d')

    Vue.use(VueYandexMetrika, {
      id: 91120268,
      env: process.env.NODE_ENV,
      options:  {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        
      }
    });
  }
  
  
}
