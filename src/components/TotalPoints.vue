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
        {{ kareem.name }} Total:
      </span>
      <span class="md-layout-item left-align md-alignment-top-center">
        {{ kareem.total }}
      </span>
    </div>
    <div class="md-layout md-gutter md-headline">
      <span class="md-layout-item right-align md-alignment-top-center">
        Needed AVG:
      </span>
      <span class="md-layout-item left-align md-alignment-top-center">
        {{average}}
      </span>
    </div>
    <div class="md-layout md-gutter md-headline">
      <span class="md-layout-item right-align md-alignment-top-center">
        Career AVG:
      </span>
      <span class="md-layout-item left-align md-alignment-top-center">
        {{careerAverage}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TotalPoints',
  props: {
    lebron: Number,
    gamesLeft: Number,
    kareem: Object,
    careerAverage: Number,
  },
  data() {
    return {
      error: null,
      loading: true,
    };
  },
  computed: {
    average() {
      return (this.difference / this.gamesLeft).toPrecision(4);
    },
    difference() {
      return this.kareem.total - this.lebron;
    },
  },
};
</script>
