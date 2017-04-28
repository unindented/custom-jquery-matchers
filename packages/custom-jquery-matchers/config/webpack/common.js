const path = require('path')
const output = path.join(__dirname, '../../dist')

module.exports = {
  devtool: false,

  entry: {
    'custom-jquery-matchers': './index'
  },

  output: {
    path: output,
    pathinfo: false,

    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },

  externals: {
    jquery: {
      root: 'jQuery',
      amd: 'jquery',
      commonjs: 'jquery',
      commonjs2: 'jquery'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)\//,
        loader: 'babel-loader'
      }
    ]
  }
}
