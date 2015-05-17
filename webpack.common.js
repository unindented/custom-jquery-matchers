'use strict';

var path = require('path');


module.exports = function (options) {
  options = options || {};

  var output = path.join(__dirname, 'dist');

  return {
    debug:   !options.build,
    devtool: !options.build ? 'inline-source-map' : null,

    entry: {
      'jasmine-jquery-matchers': './index'
    },

    output: {
      path:          output,
      pathinfo:      !options.build,

      filename:      '[name].js',
      library:       '[name]',
      libraryTarget: 'umd'
    },

    externals: options.build ? {
      jquery: {
        root:      'jQuery',
        amd:       'jquery',
        commonjs:  'jquery',
        commonjs2: 'jquery'
      }
    } : {},

    module: {
      preLoaders: options.lint ? [
        {
          test:    /\.js$/,
          exclude: /(node_modules)\//,
          loader:  'jshint!jscs'
        }
      ] : [],

      loaders: [
        {
          test:    /\.js$/,
          exclude: /(node_modules)\//,
          loader:  'babel'
        }
      ],

      postLoaders: options.cov ? [{
        test:    /\.js$/,
        exclude: /(test|node_modules)\//,
        loader:  'istanbul-instrumenter'
      }] : []
    },

    jshint: {
      emitErrors: true
    },

    jscs: {
      emitErrors: true
    }

  };
};
