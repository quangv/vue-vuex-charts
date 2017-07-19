export default {
  update: function(state, {index, value}) {
    state.chartData.splice(index, 1, value)

    var myChart = Chart.instances[0]  // better way to do this?
    myChart.data.datasets.data = state.chartData.slice(0)
    myChart.update(0)  // no animation
  }
}
