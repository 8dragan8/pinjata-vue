// function importAll(r) {
//   r.keys().forEach(r);
// }
// require('bootstrap/dist/css/bootstrap.min.css');
// importAll(require.context('./assets/favicons', true, /\.(svg|png|ico|xml|json|webmanifest)$/))
// importAll(require.context('./assets/imgs', true, /\.(png|jpg|jpeg)$/))

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')