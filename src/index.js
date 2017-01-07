/**
 * @author Created by felix on 16-12-16.
 * @email   307253927@qq.com
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import pureRender from 'pure-render-decorator'

import {Swipe, SwiperSlide,Animate} from './component';
import './scss/main.scss';
"use strict";

let root = document.getElementById('root');
let loading = root.children.item(0);
if(loading){
  loading.className = loading.className + ' zoomOutDown';
}

setTimeout(() => {
  ReactDOM.render(
      <Swipe>
        <SwiperSlide className="slide-1">
          <Animate className="item-image" name="slideInLeft"/>
          <Animate className="item-text" name="slideInRight" delay="0.3s">
            I'm a coder!
          </Animate>
        </SwiperSlide>
        <SwiperSlide className="slide-2">
          <Animate className="item-image" name="slideInLeft"/>
          <Animate className="item-text" name="slideInRight" delay="0.3s">
            I'm a coder!
          </Animate>
        </SwiperSlide>
        <SwiperSlide className="slide-3">
          <Animate className="item-image" name="slideInLeft"/>
          <Animate className="item-text" name="slideInRight" delay="0.3s">
            I'm a coder!
          </Animate>
        </SwiperSlide>
      </Swipe>
    , root
  );
}, 888);