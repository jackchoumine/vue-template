/*
 * @Description: lint-staged 配置
 * @Date: 2021-05-16 20:24:40 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-05-16 20:27:27 +0800
 * @LastEditors: JackChou
 */
module.exports = {
  'src/**/*.{js,vue,html,css,scss}': ['prettier --write', 'eslint --fix', 'git add'],
}
