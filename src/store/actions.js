import i18n from '@/i18n/index'
import * as Types from './types'

export const setLanguage = ({ commit }, value) => {
  i18n.locale = value
  commit(Types.SET_LANGUAGE, value)
}
