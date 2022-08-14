import Vue from 'vue'
import App from './App.vue'
import { Button, Row, Col, Input } from 'element-ui'

import router from './router'
import store from './store'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
