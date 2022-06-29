const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // devServer: {
  //   proxy: {
  //     '//localhost:8181': {
  //       target: 'http://localhost:8181',
  //       changeOrigin: true

  //     }
  //   }
  // }
})
