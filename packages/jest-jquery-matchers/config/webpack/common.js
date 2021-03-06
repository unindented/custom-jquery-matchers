const path = require('path')

module.exports = function (options) {
  options = options || {}

  const output = path.join(__dirname, '../../dist')

  return {
    devtool: !options.build ? 'inline-source-map' : false,

    entry: {
      'jest-jquery-matchers': './index'
    },

    output: {
      path: output,
      pathinfo: !options.build,

      filename: '[name].js',
      library: '[name]',
      libraryTarget: 'umd'
    },

    externals: options.build ? {
      jquery: {
        root: 'jQuery',
        amd: 'jquery',
        commonjs: 'jquery',
        commonjs2: 'jquery'
      }
    } : {},

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
}
