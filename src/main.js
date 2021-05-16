/*
 * @Description: 项目入口
 * @Date: 2021-05-16 20:00:28 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-05-17 00:13:53 +0800
 * @LastEditors: JackChou
 */
import Vue from 'vue'
import App from './App.vue'
import componentsFormElementUI from './element-ui'
Vue.config.productionTip = false
Vue.use(componentsFormElementUI)
new Vue({
  name: 'Root',
  render: h => h(App),
}).$mount('#app')
