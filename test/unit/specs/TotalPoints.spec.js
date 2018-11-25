import Vue from 'vue';
import TotalPoints from '@/components/TotalPoints';
import VueMaterial from 'vue-material';

describe('TotalPoints.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TotalPoints);
    const vm = new Constructor().$mount();
    console.log(vm.$el.querySelector('#page-title').textContent)
    expect(vm.$el.querySelector('#page-title').textContent)
      .toEqual('Lebron Total Points');
  });
});
