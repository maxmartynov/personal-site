import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '@/views/Page.vue'

const routes = [
  {
    name: 'index',
    path: process.env.VUE_APP_BASE_URL || '/',
    redirect: {
      name: 'home'
    },
    component: Page,
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
