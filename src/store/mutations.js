export default {
  update: function(state, {index, value}) {
    state.chartData.splice(index, 1, value)
  }
}
