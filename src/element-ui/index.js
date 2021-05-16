/*
 * @Description: 按需引入 element-plus 组件
 * @Date: 2021-05-17 00:01:01 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-05-17 00:19:07 +0800
 * @LastEditors: JackChou
 */
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select } from 'element-ui'
const formComponents = [Button, Select]
const elementUi = [...formComponents]
export default {
  // eslint-disable-next-line space-before-function-paren
  install(Vue) {
    try {
      elementUi.forEach(component => {
        if (!component.name) {
          // 跳出 forEach 的技巧
          throw new Error('组件必须提供名字，并且使用大驼峰命名')
        } else {
          Vue.component(component.name, component)
        }
      })
    } catch (error) {
      console.error(error)
    }
  },
}
