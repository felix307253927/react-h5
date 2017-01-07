/**
 * @license Created by felix on 16-12-16.
 * @email   307253927@qq.com
 */
'use strict';

const webpack              = require('webpack');
const webpackMerge         = require('webpack-merge');
const commonConfig         = require('./webpack.common.js');
const DefinePlugin         = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin       = require('webpack/lib/optimize/UglifyJsPlugin');
const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');

const ENV = process.env.NODE_ENV = 'development';

module.exports = webpackMerge(commonConfig, {
  debug    : false,
  devtool  : 'source-map',
  metadata : {isDevServer: false},
  devServer: {
    historyApiFallback: true,
    host              : '0.0.0.0',
    port              : '3000',
    proxy             : {
      "/api/*": {
        // target: commonConfig.const_data.proxy
        // bypass: function (req, res, option) {
        //   req.url = req.url.replace('/apia', '');
        //   console.log(req.method.green, option.target.blue + req.url.cyan);
        // }
      },
    }
  },
  plugins  : [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV)
      }
    }),
  ],
  node     : {
    global        : 'window',
    crypto        : 'empty',
    process       : false,
    module        : false,
    clearImmediate: false,
    setImmediate  : false
  }
});