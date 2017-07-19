<template>
  <div id="app">
    <h1>How many puppies sold this week?</h1>
    <day num="1"></day>
    <day num="2"></day>
    <day num="3"></day>
    <day num="4"></day>
    <day num="5"></day>
    <!--
    <img src="./assets/logo.png">
    <hello></hello>
    -->
  </div>
</template>

<script>
import Day from './components/Day'

export default {
  name: 'app',
  components: {
    Day
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
