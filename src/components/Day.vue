<template>
  <div class="day">
    <label>
      {{ name }} {{ value }}
    </label>
    <button class="btn btn-success" @click="addClick"><i class="glyphicon glyphicon-plus"></i></button>
    <button class="btn btn-danger" @click="minusClick"><i class="glyphicon glyphicon-minus"></i></button>
  </div>
</template>

<style scoped>
.day {
  padding: 0.25em 0;
}
label {
  width: 100px;
  text-align: right;
}
</style>

<script>
const names = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday"
}

export default {
  name: 'day',
  props: ['num'],
  computed: {
    name: function() {
      return names[this.num]
    },
    value: function() {
      return this.$store.state.chartData[this.num]
    }
  },
  methods: {
    addClick: function() {
      this.$store.dispatch('plus', this.num)
    },
    minusClick: function() {
      // Don't let go below 0
      if (this.value === 0) {
        return;
      }
      this.$store.dispatch('minus', this.num)
    }
  }
}
</script>
