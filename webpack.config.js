/**
 * @license Created by felix on 16-11-1.
 * @email   307253927@qq.com
 */
'use strict';
console.log(process.env.ENV);
switch (process.env.ENV) {
  case 'production':
    module.exports = require('./config/webpack.prod');
    break;
  case 'development':
  default:
    module.exports = require('./config/webpack.dev');
}