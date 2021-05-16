/*
 * @Description:
 * @Hash: 不是路由组件
 * @Date: 2021-05-16 20:33:01 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-05-16 22:23:19 +0800
 * @LastEditors: JackChou
 */
/*
 * @Description: husky 配置 （githook 配置）
 * @Date: 2021-05-16 20:22:56 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-05-16 20:24:29 +0800
 * @LastEditors: JackChou
 */
module.exports = {
  hooks: {
    // git commit 前的钩子
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
}
