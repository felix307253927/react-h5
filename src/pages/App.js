/**
 * @author Created by felix on 17-1-9.
 * @email   307253927@qq.com
 */
'use strict';
import React, {Component} from 'react'
import {Swipe, SwiperSlide, Animate, Arrow, Audio} from '../component';
import pureRender from 'pure-render-decorator'

@pureRender
export default class App extends Component {
  
  swipe: Swipe;
  arrow: Arrow;
  
  constructor(props) {
    super(props);
    this.onSlide   = ::this.onSlide;
    this.slideNext = ::this.slideNext;
  }
  
  onSlide(index, length) {
    this.arrow.setVisible(index !== length - 1);
  }
  
  slideNext() {
    this.swipe.slideNext();
  }
  
  render() {
    return (
      <div className="container">
        <Audio src="/assets/audio/background.mp3"/>
        <Swipe onSlide={this.onSlide} ref={swipe=>this.swipe = swipe}>
          <SwiperSlide className="slide-1">
            <Animate className="item-image" name="jello">
              <img style={{width:'100%'}} src="/assets/images/github-1.png" alt=""/>
            </Animate>
            <Animate className="item-text" name="lightSpeedIn" delay="0.3s">
              I'm a coder!
            </Animate>
          </SwiperSlide>
          <SwiperSlide className="slide-2">
            <Animate className="item-image" name="rollIn">
              <img style={{width:'100%'}} src="/assets/images/github-2.png" alt=""/>
            </Animate>
            <Animate className="item-text" name="flipInY" delay="0.3s">
              I'm a coder!
            </Animate>
          </SwiperSlide>
          <SwiperSlide className="slide-3">
            <Animate className="item-image" name="bounceInDown">
              <img style={{width:'100%'}} src="/assets/images/github-3.png" alt=""/>
            </Animate>
            <Animate className="item-text" name="bounceInUp" delay="0.3s">
              I'm a coder!
            </Animate>
          </SwiperSlide>
          <SwiperSlide className="slide-2">
            <Animate className="item-image" name="rollIn">
              <img style={{width:'100%'}} src="/assets/images/github-2.png" alt=""/>
            </Animate>
            <Animate className="item-text" name="flipInY" delay="0.3s">
              I'm a slide4!
            </Animate>
          </SwiperSlide>
        </Swipe>
        <Arrow ref={arrow=>this.arrow=arrow} onClick={this.slideNext}/>
      </div>
    )
  }
}