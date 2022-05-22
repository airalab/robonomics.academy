const c1 = () => import(/* webpackChunkName: "page--src--pages--online-courses--introduction-course--2-at-the-intersection-of-cybernetics-and-economics-vue" */ "/Users/nicetea/Projects/Airalab/Frontend/robonomics.academy/src/pages/online-courses/introduction-course/2-at-the-intersection-of-cybernetics-and-economics.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--online-courses--introduction-course--3-polkadot-ecosystem-for-home-iot-infrastructure-vue" */ "/Users/nicetea/Projects/Airalab/Frontend/robonomics.academy/src/pages/online-courses/introduction-course/3-polkadot-ecosystem-for-home-iot-infrastructure.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--online-courses--introduction-course--1-broadcasting-through-the-black-mirror-vue" */ "/Users/nicetea/Projects/Airalab/Frontend/robonomics.academy/src/pages/online-courses/introduction-course/1-broadcasting-through-the-black-mirror.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--online-courses--introduction-course--5-iot-subscriptions-using-robonomics-parachain-vue" */ "/Users/nicetea/Projects/Airalab/Frontend/robonomics.academy/src/pages/online-courses/introduction-course/5-iot-subscriptions-using-robonomics-parachain.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--online-courses--introduction-course--4-robonomics-architecture-vue" */ "/Users/nicetea/Projects/Airalab/Frontend/robonomics.academy/src/pages/online-courses/introduction-course/4-robonomics-architecture.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--online-courses--introduction-course--index-vue" */ "/Users/nicetea/Projects/Airalab/Frontend/robonomics.academy/src/pages/online-courses/introduction-course/Index.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--online-courses--index-vue" */ "/Users/nicetea/Projects/Airalab/Frontend/robonomics.academy/src/pages/online-courses/Index.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--certificates-vue" */ "/Users/nicetea/Projects/Airalab/Frontend/robonomics.academy/src/pages/Certificates.vue")
const c9 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/nicetea/Projects/Airalab/Frontend/robonomics.academy/node_modules/gridsome/app/pages/404.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/nicetea/Projects/Airalab/Frontend/robonomics.academy/src/pages/Index.vue")

export default [
  {
    path: "/online-courses/introduction-course/2-at-the-intersection-of-cybernetics-and-economics/",
    component: c1
  },
  {
    path: "/online-courses/introduction-course/3-polkadot-ecosystem-for-home-iot-infrastructure/",
    component: c2
  },
  {
    path: "/online-courses/introduction-course/1-broadcasting-through-the-black-mirror/",
    component: c3
  },
  {
    path: "/online-courses/introduction-course/5-iot-subscriptions-using-robonomics-parachain/",
    component: c4
  },
  {
    path: "/online-courses/introduction-course/4-robonomics-architecture/",
    component: c5
  },
  {
    path: "/online-courses/introduction-course/",
    component: c6
  },
  {
    path: "/online-courses/",
    component: c7
  },
  {
    path: "/certificates/",
    component: c8
  },
  {
    name: "404",
    path: "/404/",
    component: c9
  },
  {
    name: "home",
    path: "/",
    component: c10
  },
  {
    name: "*",
    path: "*",
    component: c9
  }
]
