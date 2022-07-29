import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import axios from 'axios'
import './assets/font/iconfont.css'
axios.defaults.baseURL = '/api'
Vue.prototype.$echarts = window.echarts
Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
