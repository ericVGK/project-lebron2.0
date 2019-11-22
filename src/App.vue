<template>
  <div id="app">
      <md-card class="md-layout-item md-size-75 md-small-size-100">
        <md-card-header>
          <div class="md-title" id="page-title">Lebron All-Time Leader</div>
        </md-card-header>

        <md-card-content>
          <TotalPoints v-bind:lebron="lebron" v-bind:gamesLeft="gamesLeft" v-bind:kareem="kareem" v-bind:careerAverage="average"></TotalPoints>
        </md-card-content>
      </md-card>
      <GamesTill v-for="player in players" :key="player.name" v-bind:player="player" v-bind:average="average" v-bind:lebron="lebron"></GamesTill>
  </div>
</template>

<script>
import TotalPoints from './components/TotalPoints.vue';
import GamesTill from './components/GamesTill.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    TotalPoints,
    GamesTill,
  },
  data() {
    return {
      players: [
        {
          name: 'Kobe',
          total: 33643
        },
        {
          name: 'Malone',
          total: 36928
        },
        {
          name: 'Kareem',
          total: 38387
        },
      ],
      lebron: 32835,
      gamesLeft: 234,
      gamesPlayed: 1210,
      error: null,
      loading: true,
    };
  },
  computed: {
    kareem() {
      return this.players.find(x => x.name == "Kareem");
    },
    average() {
      return (this.lebron / this.gamesPlayed).toPrecision(4);
    }
  },
  mounted() {
    this.loading = false;
    axios.get('https://api.db94.io/lebron/points', {
      responseType: 'json',
      withCredentials: false,
    }).then((result) => {
      this.lebron = result.data.points;
      this.gamesLeft = result.data.gamesLeft + (2 * 82);
      this.gamesPlayed = result.data.gamesPlayed;
      this.loading = false;
    }).catch((error) => {
      this.error = error;
    });
  },
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

  .right-align {
    text-align: end;
  }

  .left-align {
    text-align: left;
  }

  .md-card {
    margin: 10px;
    display: inline-block;
    vertical-align: top;
  }
</style>
