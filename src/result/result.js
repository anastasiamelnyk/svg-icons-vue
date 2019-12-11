import Components from './../Components';
import Vue from 'vue'
import Result from './Result.vue'

Vue.config.productionTip = false
Vue.use(Components);

new Vue({
  render: h => h(Result),
}).$mount('#app')
