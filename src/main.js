/*
 * @Description: 项目入口
 * @Date: 2021-05-16 20:00:28 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-05-16 22:25:27 +0800
 * @LastEditors: JackChou
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
console.log(22)
new Vue({
  name: 'Root',
  render: h => h(App),
}).$mount('#app')
