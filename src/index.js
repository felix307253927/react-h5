/**
 * @author Created by felix on 16-12-16.
 * @email   307253927@qq.com
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';
import './scss/main.scss';
"use strict";

let root    = document.getElementById('root');
let loading = root.children.item(0);
if (loading) {
  loading.className = loading.className + ' zoomOutDown';
}

setTimeout(() => {
  ReactDOM.render(
    <App/>
    , root
  );
}, 888);