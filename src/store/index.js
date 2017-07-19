import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartData: [0, 0, 0, 0, 0]
  },
  actions,
  strict: true
})
