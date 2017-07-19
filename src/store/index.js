import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartData: [0, 0, 0, 0, 0]
  },
  actions,
  mutations,
  strict: true
})
