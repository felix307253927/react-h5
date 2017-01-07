/**
 * @author Created by felix on 17-1-6.
 * @email   307253927@qq.com
 */
'use strict';

import React, {Component} from 'react'

export default class App extends Component{
  
  render(){
    return (
      <div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide-1">
              <div className="item-image animated" data-ani-name="slideInLeft" data-ani-duration="1s" data-ani-delay="0s"></div>
              <p className="item-text animated" data-ani-name="slideInRight" data-ani-duration="1s" data-ani-delay="0.3s">I'm a coder!</p>
            </div>
            <div className="swiper-slide slide-2">
              <div className="item-image animated" data-ani-name="bounceInDown" data-ani-duration="1s" data-ani-delay="0s"></div>
              <p className="item-text animated" data-ani-name="bounceInUp" data-ani-duration="1s" data-ani-delay="0.3s">I'm a frontend developer!</p>
            </div>
            <div className="swiper-slide slide-3">
              <div className="item-image animated" data-ani-name="flipInX" data-ani-duration="1s" data-ani-delay="0s"></div>
              <p className="item-text animated" data-ani-name="flipInY" data-ani-duration="1s" data-ani-delay="0.3s">I'm a javascript newbie!</p>
            </div>
          </div>
        </div>
  
        <button className="up-arrow">
          <i className="icon-angle-double-up"></i>
        </button>
  
        <button className="btn-music">
          <i className="icon-note"></i>
        </button>
  
        <audio loop>
          <source src="audios/background.mp3" type="audio/mpeg"/>
        </audio>
      </div>
    )
  }
}