import Vue from 'vue'
import VueGtag from 'vue-gtag'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import '@/styles/vendor/normalize/normalize.css'
import '@/styles/vendor/Skeleton/skeleton.css'
import '@/styles/general.less'

import routes from '@/routes'
import store from '@/store'
import i18n from '@/i18n'
import App from '@/App.vue'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueGtag, {
  config: {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID
  }
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// prevent automatically showing the prompt "Add to home screen"
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
})

Vue.config.lang = store.state.currentLanguage
Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV !== 'production'
i18n.locale = store.state.currentLanguage