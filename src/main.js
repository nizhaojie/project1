import Vue from 'vue'
import App from './App.vue'

import { Table, TableColumn } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'

import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
