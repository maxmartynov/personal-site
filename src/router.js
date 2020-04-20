import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  {
    name: 'index',
    path: process.env.VUE_APP_BASE_URL || '/',
    redirect: {
      name: 'home'
    },
    component: () => import('@/views/Page.vue'),
    children: [
      {
        name: 'home',
        path: ''
      },
      {
        name: 'about',
        path: 'about'
      },
      {
        name: 'contacts',
        path: 'contacts'
      },
      {
        name: 'skills',
        path: 'skills'
      }
    ]
  },
  {
    path: '*',
    redirect: process.env.VUE_APP_BASE_URL || '/'
  }
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
})
