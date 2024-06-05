import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon }  from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'




Vue.config.productionTip = false
window.bus = new Vue();
library.add(fas);


Vue.component('font-awesome-icon', FontAwesomeIcon);
new Vue({
  router,
  FontAwesomeIcon,
  render: h => h(App),
}).$mount('#app')
