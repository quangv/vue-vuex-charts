<template>
  <div class="day">
    <input type="number" :placeholder="name" min="0" />
    <button class="btn btn-success"><i class="glyphicon glyphicon-plus"></i></button>
    <button class="btn btn-danger"><i class="glyphicon glyphicon-minus"></i></button>
  </div>
</template>

<style scoped>
.day {
  padding: 0.25em 0;
}
</style>

<script>
const names = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday"
}

export default {
  name: 'day',
  props: ['num'],
  computed: {
    name: function() {
      return names[this.num]
    }
  }
}
</script>
