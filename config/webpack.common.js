/**
 * @license Created by felix on 16-12-16.
 * @email   307253927@qq.com
 */
'use strict';

let HtmlWebpackPlugin  = require('html-webpack-plugin');
let CopyWebpackPlugin  = require('copy-webpack-plugin');
let ExtractTextPlugin  = require('extract-text-webpack-plugin');
let CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
let ProgressPlugin     = require('webpack/lib/ProgressPlugin');
let helper             = require('./helper');
let fs                 = require('fs');
let root               = fs.realpathSync(process.cwd());
let stream             = process.stdout;
require('colors');

module.exports = {
  entry : {
    main  : "./src/index.js",
    vendor: "./src/vendor.js"
  },
  output: {
    filename: "[name].bundle.[hash].js",
    path    : root + "/dist"
  },
  
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".js", '.jsx'],
  },
  
  module : {
    loaders: [
      {test: /\.jsx?$/, loader: "react-hot!babel", exclude: /node_modules/},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss?importLoaders=1&-autoprefixer')},
      {test: /.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss?importLoaders=1&-autoprefixer!sass')},
      {
        test  : /\.(png|jpg|gif|svg)(\?.*)?$/,
        loader: 'file',
        query : {
          name: '/images/[name].[ext]?[hash]'
        }
      },
      {
        test  : /\.(eot|ttf|woff)(\?.*)?$/,
        loader: 'url',
        query : {
          name: '/libs/fonts/[name].[ext]?[hash]'
        }
      }
    ],
    
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {test: /\.jsx?$/, loader: "source-map-loader"}
    ]
  },
  postcss: function () {
    return [require('autoprefixer')];
  },
  plugins: [
    new CommonsChunkPlugin({
      name: ['main','vendor']
    }),
    new CopyWebpackPlugin([
      {context: 'src', from: 'images/**/*'},
      {context: 'src', from: 'libs/**/*'},
      {context: 'src', from: '*.html'},
      {context: 'src', from: '*.ico'}
    ], {
      ignore        : [
        'index.html',
        '*.txt'
      ],
      // By default, we only copy modified files during
      // a watch or webpack-dev-server build. Setting this
      // to `true` copies all files.
      copyUnmodified: true
    }),
    new HtmlWebpackPlugin({
      template      : 'src/index.html',
      // chunks        : ['main', 'vendor'],
      chunksSortMode: 'dependency'
    }),
    new ExtractTextPlugin('css/[name].[hash].css'),
    new ProgressPlugin((percentage, msg) => {
      if (!percentage) return;
      let progress = percentage * 100 | 0;
      let sep      = new Array(20).fill(' ');
      sep.fill(' ');
      sep.fill('=', 0, percentage * 20 | 0);
      msg = (`[${sep.join('')}] `).blue + (progress + '%  ').cyan + msg;
      helper.clearLine();
      stream.write(msg);
    })
  ],
  
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  /*externals: {
   "react"    : "React",
   "react-dom": "ReactDOM"
   },*/
  node: {
    global        : 'window',
    crypto        : 'empty',
    process       : true,
    module        : false,
    clearImmediate: false,
    setImmediate  : false
  }
};