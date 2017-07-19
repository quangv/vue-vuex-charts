<template>
  <div class="day">
    Day {{ name }}
  </div>
</template>

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
