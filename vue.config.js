/**
 * Vue CLI config file.
 * @see https://cli.vuejs.org/config/
 */
const AutoDllPlugin = require('autodll-webpack-plugin')
const path = require('path')

const plugins = []

if (process.env.NODE_ENV !== 'production') {
  plugins.push(new AutoDllPlugin({
    inject: true, // will inject the DLL bundles to index.html
    filename: '[name].js',
    entry: {
      vendor: [
        'lodash',
        'lodash-es',
        'vue',
        'vue-i18n',
        'vue-router',
        'vuex',
        'vuex-persistedstate',
        'core-js',
        'register-service-worker'
      ]
    }
  }))
}

module.exports = {

  // The base URL your application bundle will be deployed
  publicPath: process.env.VUE_APP_BASE_URL || '/',

  outputDir: 'dist',
  assetsDir: '',

  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/utils/service-worker.js'
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins
  },

  devServer: {
    port: process.env.PORT,
    clientLogLevel: 'info',
    disableHostCheck: true
  },

  /**
   * By default babel-loader ignores all files inside node_modules. If you want
   * to explicitly transpile a dependency with Babel, you can list it in this option.
   */
  transpileDependencies: [],
  productionSourceMap: false
}
