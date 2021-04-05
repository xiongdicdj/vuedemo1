
module.exports = {
  publicPath: `/vuetest/`,
  outputDir: `dist/`,
  assetsDir: 'public',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 9097
  },
  chainWebpack:()=>{},
  configureWebpack:()=>{},

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";'
      }
    }
  }
}
