import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/state/store'
import BootstrapVue from 'bootstrap-vue'
import i18n from '@/i18n'

import '@/sass/main.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.moment = require('moment')
window.$ = require('jquery')
window.jQuery = require('jquery')

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(i18n)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
