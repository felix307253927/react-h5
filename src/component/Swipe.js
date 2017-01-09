/**
 * @author Created by felix on 17-1-6.
 * @email   307253927@qq.com
 */
'use strict';
import React, {Component} from 'react'
import Swiper from 'swiper'
import SwiperSlide from './SwiperSlide'
import pureRender from 'pure-render-decorator'

@pureRender
export class Swipe extends Component {
  
  static propTypes = {
    onSlide: React.PropTypes.func
  };
  
  isFirst: Boolean = false;
  container: HTMLElement;
  swipe: Swiper;
  state            = {
    active    : 0,
    activated : 0,
    prevActive: 0,
    transition: true
  };
  
  slideTo(index, speed, runCallbacks) {
    this.swipe.slideTo(index, speed, runCallbacks);
  }
  
  slideNext(runCallbacks, speed) {
    this.swipe.slideNext(runCallbacks, speed);
  }
  
  slidePrev(runCallbacks, speed) {
    this.swipe.slidePrev(runCallbacks, speed);
  }
  
  componentDidMount() {
    let currentIndex = 0, slideLength = 0;
    this.swipe       = new Swiper(this.container, {
      mousewheelControl : true,
      effect            : 'coverflow      ',    // slide, fade, coverflow or flip
      speed             : 400,
      direction         : 'vertical',
      fade              : {
        crossFade: false
      },
      coverflow         : {
        rotate      : 100,
        stretch     : 0,
        depth       : 300,
        modifier    : 1,
        slideShadows: false     // do disable shadows for better performance
      },
      flip              : {
        limitRotation: true,
        slideShadows : false     // do disable shadows for better performance
      },
      onSlideChangeStart: (swiper) => {
        this.setState({
          active    : swiper.activeIndex,
          prevActive: currentIndex,
          activated : this.state.activated < swiper.activeIndex ? swiper.activeIndex : this.state.activated,
          transition: true
        });
        this.props.onSlide && this.props.onSlide(swiper.activeIndex, slideLength);
      },
      onSlideChangeEnd  : (swiper) => {
        currentIndex = swiper.activeIndex;
        this.setState({transition: false});
      }
    });
    slideLength      = this.swipe.slides.length;
  }
  
  render() {
    let i = 0, length = React.Children.count(this.props.children);
    return (
      <div className="swiper-container" ref={swipe=>this.container=swipe}>
        <div className="swiper-wrapper">
          {
            React.Children.map(this.props.children, (child) => {
              if (child.type === SwiperSlide) {
                return React.cloneElement(child, {
                  ...this.state,
                  length: length,
                  index : i,
                  key   : 'slide-' + i++
                });
              } else if (!this.isFirst) {
                this.isFirst = true;
                console.warn(`Warning: ${typeof child.type === 'string' ? child.type : child.type.name} can't used in Swipe!`)
              }
            })
          }
        </div>
      </div>
    )
  }
}

export default Swipe;