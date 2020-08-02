const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BaseConfig = require('./base.config')
const {merge} = require('webpack-merge')

module.exports = merge(BaseConfig, {
  devServer: {
    contentBase: './dist',
    inline:true
  }
})
