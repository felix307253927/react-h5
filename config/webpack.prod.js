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

const ENV = process.env.NODE_ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  debug   : false,
  devtool : 'source-map',
  metadata: {isDevServer: false},
  plugins : [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV)
      }
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new OccurenceOrderPlugin()
  ],
  node    : {
    global        : 'window',
    crypto        : 'empty',
    process       : false,
    module        : false,
    clearImmediate: false,
    setImmediate  : false
  }
});