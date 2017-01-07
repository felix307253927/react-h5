/**
 * @author Created by felix on 16-12-16.
 * @email   307253927@qq.com
 */
if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window['Promise'] = require('promise/lib/es6-extensions.js');
}
if(!Object.assign){
  // Object.assign() is commonly used with React.
  // It will use the native implementation if it's present and isn't buggy.
  Object.assign = require('object-assign');
}

import 'react';
import 'react-dom';
import 'react-addons-css-transition-group'