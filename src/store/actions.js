export default {
  // Add puppies to day
  plus ({state, commit}, index) {
    commit('update', {
      index,
      value: ++state.chartData[index]
    })
  },

  // Subtract puppies to day
  minus ({state, commit}, index) {
    commit('update', {
      index,
      value: --state.chartData[index]
    })
  },

  // Updates puppies of day
  update ({state, commit}, index, value) {
    commit('update', {
      index,
      value
    })
  }
}
