/**
 * @author Created by felix on 16-12-20.
 * @email   307253927@qq.com
 */
'use strict';
let stream     = process.stdout;
module.exports = {
  clearLine: function () {
    stream.cursorTo(0);
    stream.clearLine(1);
  }
};