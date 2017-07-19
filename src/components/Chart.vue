<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>

export default {
  name: 'chart',
  mounted: function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        datasets: [{
          label: "Puppies sold",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20]
        }]
      },
      options: {}
    })
  }
}
</script>
