import Components from './../Components';
import Vue from 'vue'
import Ingredients from './Ingredients.vue'

Vue.config.productionTip = false
Vue.use(Components);

new Vue({
  render: h => h(Ingredients),
}).$mount('#app')
