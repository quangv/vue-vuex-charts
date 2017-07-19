export default {
  update: function(state, {index, value}) {
    console.log('state', state, index, value);
    state.chartData[index] = value
  }
}
