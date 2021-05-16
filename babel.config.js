/*
 * @Description: babel 配置
 * @Date: 2021-05-16 20:00:28 +0800
 * @Author: JackChou
 * @LastEditTime: 2021-05-17 01:00:18 +0800
 * @LastEditors: JackChou
 */
module.exports = {
  // '@vue/cli-plugin-babel/preset',
  // presets: [['es2015', { modules: false }]],
  presets: ['@vue/cli-plugin-babel/preset'],
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
