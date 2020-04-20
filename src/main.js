import Vue from 'vue'
import VueGtag from 'vue-gtag'
import Vuex from 'vuex'

import '@/styles/vendor/normalize/normalize.css'
import '@/styles/vendor/Skeleton/skeleton.css'
import '@/styles/index.less'

import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'
import App from '@/App.vue'

Vue.use(Vuex)
Vue.use(VueGtag, {
  config: {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID
  },
  enabled: process.env.NODE_ENV === 'production'
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// prevent automatically showing the prompt "Add to home screen"
window.addEventListener('beforeinstallprompt', (e) => e.preventDefault())

Vue.config.lang = store.state.currentLanguage
Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV !== 'production'
i18n.locale = store.state.currentLanguage