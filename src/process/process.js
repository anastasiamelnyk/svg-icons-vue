import Components from './../Components';
import Vue from 'vue'
import Process from './Process.vue'

Vue.config.productionTip = false
Vue.use(Components);

new Vue({
  render: h => h(Process),
}).$mount('#app')
