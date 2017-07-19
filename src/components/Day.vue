<template>
  <div class="day">
    <input type="number" :placeholder="name" min="0" />
    <button class="btn btn-success" @click="addClick"><i class="glyphicon glyphicon-plus"></i></button>
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
    }
  },
  methods: {
    addClick: function() {
      this.$store.dispatch('plus', this.num)
    }
  }
}
</script>
