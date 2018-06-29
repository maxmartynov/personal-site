import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

import '@/styles/vendor/normalize/normalize.css'
import '@/styles/vendor/Skeleton/skeleton.css'
import '@/styles/general.less'

import App from '@/components/App'
import store from '@/store/index'
import i18n from '@/i18n/index'
import VARIABLES from '@/../VARIABLES.json'

Vue.use(VueAnalytics, {
  id: VARIABLES.GOOGLE_ANALYTICS_ID
})

new Vue({
  i18n,
  store,
  render: h => h(App)
})
.$mount('#app')

Vue.config.lang = store.state.currentLanguage
i18n.locale = store.state.currentLanguage
