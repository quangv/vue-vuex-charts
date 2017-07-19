<template>
  <div id="app">
    <h1>How many puppies sold this week?</h1>
    <chart></chart>
    <day num="0"></day>
    <day num="1"></day>
    <day num="2"></day>
    <day num="3"></day>
    <day num="4"></day>
    <!--
    <img src="./assets/logo.png">
    <hello></hello>
    -->
  </div>
</template>

<script>
import Day from './components/Day'
import Chart from './components/Chart'

export default {
  name: 'app',
  components: {
    Day,
    Chart
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
