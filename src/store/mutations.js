import _ from 'lodash'
import * as Types from './types'

export default {
  [Types.SET_LANGUAGE] (state, value) {
    _.set(state, 'currentLanguage', value)
  }
}
