import Components from './Components';
import Vue from 'vue'
import App from './App.vue'

Vue.use(Components);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
