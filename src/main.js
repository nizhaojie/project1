import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

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

Axios.defaults.timeout = 10000 //设置超时时间，单位毫秒
Axios.defaults.retry = 1000 //设置全局请求次数
Axios.defaults.retryDelay = 1000 //设置全局请求间隙

// http 响应拦截器
Axios.interceptors.response.use(
  (response) => {
    var token = response.headers.authorization
    if (token) {
      store.dispatch('ActionLogin', token)
    }
    // var code = response.data.code;
    return response
  },
  (error) => {
    //超时处理
    var config = error.config
    if (!config || !config.retry) return Promise.reject(error)
    // 设置用于跟踪重试次数的变量
    config.__retryCount = config.__retryCount || 0

    // 检查我们是否已将重试总数最大化
    if (config.__retryCount >= config.retry) {
      // 错误拒绝
      return Promise.reject(error)
    }

    // 增加重试次数
    config.__retryCount += 1

    // 创造新的承诺来处理指数退避
    var backoff = new Promise(function (resolve) {
      setTimeout(function () {
        resolve()
      }, config.retryDelay || 1)
    })

    // 返回承诺，其中将撤回axios以重试请求
    return backoff.then(function () {
      return Axios(config)
    })
    // return Promise.reject(error)
  }
)

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
