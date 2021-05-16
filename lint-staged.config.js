/*
 * @Description: lint-staged 配置
 * @Date: 2021-05-16 20:24:40 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-05-16 20:57:54 +0800
 * @LastEditors: JackChou
 */
module.exports = {
  // 格式化后不要执行 'git add'，手动调整格式
  'src/**/*.{js,vue,html,css,scss}': ['prettier --write', 'eslint --fix'],
}
