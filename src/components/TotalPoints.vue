<template>
  <div>
    <md-field>
      <label for="games">Games:</label>
      <md-input name="games" id="games" v-model="gamesLeft"/>
      <span class="md-helper-text">Default is the amount of games left on his Laker contract</span>
    </md-field>
    <md-field>
      <label for="points">Current Points:</label>
      <md-input name="points" id="points" v-model="lebron"/>
    </md-field>
    <div class="md-layout md-gutter md-subheading">
      <span class=" md-layout-item right-align md-alignment-top-center">
        Kareem Total:
      </span>
      <span class="md-layout-item left-align md-alignment-top-center">
        {{ kareem }}
      </span>
    </div>
    <div class="md-layout md-gutter md-headline">
      <span class="md-layout-item right-align md-alignment-top-center">
        Average Needed:
      </span>
      <span class="md-layout-item left-align md-alignment-top-center">
        {{average}}
      </span>
    </div>
  </div>
</template>

<style>
  .right-align {
    text-align: end;
  }

  .left-align {
    text-align: left;
  }
</style>

<script>
import axios from 'axios';

export default {
  name: 'TotalPoints',
  data() {
    return {
      kareem: 38387,
      lebron: 31498,
      gamesLeft: 280,
      error: null,
    };
  },
  computed: {
    average() {
      return (this.difference / this.gamesLeft).toPrecision(4);
    },
    difference() {
      return this.kareem - this.lebron;
    },
  },
  mounted() {
    axios.get('https://api.db94.io/lebron/points', {
      responseType: 'json',
      withCredentials: false,
    }).then((result) => {
      this.lebron = result.data.points;
      this.gamesLeft = result.data.gamesLeft + (3 * 82);
    }).catch((error) => {
      this.error = error;
    });
  },
};
</script>
