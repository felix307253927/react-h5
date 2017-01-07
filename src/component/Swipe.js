/**
 * @author Created by felix on 17-1-6.
 * @email   307253927@qq.com
 */
'use strict';
import React, {Component} from 'react'
import Swiper from 'swiper'

export class Swipe extends Component {
  swipe: HTMLElement;
  state = {
    active    : 0,
    touch     : false,
    transition: true
  };
  
  componentDidMount() {
    let currentIndex = 0;
    new Swiper(this.swipe, {
      mousewheelControl: true,
      effect           : 'coverflow      ',    // slide, fade, coverflow or flip
      speed            : 400,
      direction        : 'vertical',
      fade             : {
        crossFade: false
      },
      coverflow        : {
        rotate      : 100,
        stretch     : 0,
        depth       : 300,
        modifier    : 1,
        slideShadows: false     // do disable shadows for better performance
      },
      flip             : {
        limitRotation: true,
        slideShadows : false     // do disable shadows for better performance
      },
      onInit           : (swiper) => {
        // this.setState({init: true});
      },
      onTransitionStart: (swiper) => {
        if (currentIndex !== swiper.activeIndex) {
          this.setState({active: swiper.activeIndex, transition: false,touch: false});
        }
      },
      onTransitionEnd  : (swiper) => {
        if (currentIndex !== swiper.activeIndex) {
          currentIndex = swiper.activeIndex;
          this.setState({transition: true});
        }
      },
      onTouchStart     : (swiper, event) => {
        // mobile devices don't allow audios to play automatically, it has to be triggered by a user event(click / touch).
        // this.setState({touch: true});
      }
    })
  }
  
  render() {
    let i = 0, length = React.Children.count(this.props.children);
    return (
      <div className="swiper-container" ref={swipe=>this.swipe=swipe}>
        <div className="swiper-wrapper">
          {React.Children.map(this.props.children, child => {
            if (typeof child.type !== 'string') {
              return React.cloneElement(child, {
                ...this.state,
                length: length,
                index : i,
                key   : 'slide-' + i++
              });
            } else {
              console.warn(`Warning: ${child.type} can't used in Swipe!`)
            }
          })}
        </div>
      </div>
    )
  }
}