function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('./assets/favicons', true, /\.(svg|png|ico|xml|json|webmanifest)$/))

import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)

import App from './js/App.vue'
new Vue({
  el: '#app',
  render: h => h(App)
})