import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import i18n from '@/i18n'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: {
    availableLanguages: ['en', 'ru'],
    currentLanguage: 'en'
  },
  actions: {
    setLanguage ({ commit }, value) {
      i18n.locale = value
      commit('setLanguage', value)
    }
  },
  mutations: {
    setLanguage (state, value) {
      state.currentLanguage = value
    }
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: [

    // use localStorage
    createPersistedState({
      key: `${process.env.VUE_APP_APP_NAME}-storage`
    })
  ]
})