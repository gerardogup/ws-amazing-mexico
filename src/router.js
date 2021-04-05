import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/faq',
      name: 'faq',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "faq" */ './views/Faq.vue'),
      props: true
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue'),
      props: true
    },
    {
      path: '/terms-and-conditions',
      name: 'terms',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "terms" */ './views/Terms.vue'),
      props: true
    },
    {
      path: '/:destinationslug/:slug',
      name: 'Package',
      component: () => import(/* webpackChunkName: "package" */ './views/Package.vue'),
      props: true
    },
    {
      path: '/:slug',
      name: 'Destination',
      component: () => import(/* webpackChunkName: "destination" */ './views/Destination.vue'),
      props: true
    }
  ]
})
