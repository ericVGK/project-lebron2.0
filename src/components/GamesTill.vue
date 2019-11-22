<template>
  <md-card class="md-layout-item md-size-30 md-small-size-100">
    <md-card-header>
      <div class="md-title" id="page-title">To Pass {{player.name}}</div>
      <div class="md-subhead">{{player.total}}</div>
    </md-card-header>

    <md-card-content>
      {{gamesTill}} games at current career average.
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: 'GamesTill',
  props: {
    average: Number,
    player: Object,
    lebron: Number,
  },
  data() {
    return {
      error: null,
      loading: true,
    };
  },
  computed: {
    gamesTill() {
      let difference = this.player.total - this.lebron;
      return Math.round(difference / this.average);
    },
  },
};
</script>
