/*
 * @Description: 项目入口
 * @Date: 2021-05-16 20:00:28 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-05-16 20:49:22 +0800
 * @LastEditors: JackChou
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log(22)
// eslint-disable-next-line vue/require-name-property
new Vue({
  render: h => h(App),
}).$mount('#app')
