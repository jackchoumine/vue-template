/*
 * @Description: babel 配置
 * @Date: 2021-05-16 20:00:28 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-05-17 00:06:19 +0800
 * @LastEditors: JackChou
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset', ['es2015', { modules: false }]],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
}
