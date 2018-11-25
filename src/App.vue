<template>
  <div id="app">
    <form novalidate class="md-layout">
      <div class="md-layout-item md-size-25 md-small-size-0"></div>
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title" id="page-title">Lebron Total Points</div>
        </md-card-header>

        <md-card-content>
          <TotalPoints/>
        </md-card-content>
      </md-card>
      <div class="md-layout-item md-size-25 md-small-size-0"></div>
    </form>
  </div>
</template>

<script>
import TotalPoints from './components/TotalPoints';

export default {
  name: 'App',
  components: {
    TotalPoints,
  },
};
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
