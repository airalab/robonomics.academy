// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import LayoutCourse from '~/layouts/Course.vue'
import AcademyList from '~/components/List.vue'
import LessonResult from '~/components/LessonResult.vue'

import '~/assets/css/index.css'

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
  // faRobot
 } from '@fortawesome/free-solid-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('LayoutCourse', LayoutCourse)
  Vue.component('List', AcademyList)
  Vue.component('Result', LessonResult)

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
    // faRobot
  )

  /* add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  Vue.prototype.$discord = 'https://discord.gg/kFPqNktKrJ'
  Vue.prototype.$website = 'https://robonomics.academy'
}
