import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Console from 'vconsole'

Vue.config.productionTip = false
// eslint-disable-next-line no-new
new Console()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
