/**
 * @author Created by felix on 17-1-6.
 * @email   307253927@qq.com
 */
'use strict';

import React, {Component} from 'react'
import classNames from 'classnames'
import Animate from './Animate'

/*export const SwiperSlide = (props) => {
 return (
 <div className={classNames("swiper-slide", props.className)}>
 {props.children}
 </div>
 )
 };*/

export class SwiperSlide extends Component {
  hasRender: boolean = false;
  index: number      = 0;
  
  shouldComponentUpdate(nextProps) {
    if (!this.props.toggle && (this.hasRender || nextProps.activated > this.props.index)) {
      return false
    }
    if (
      nextProps.active === this.props.index ||
      (!this.hasRender && nextProps.activated > this.props.index - 2) ||
      (nextProps.transition && nextProps.prevActive === nextProps.index) //修复连续滑动bug
    ) {
      this.hasRender = nextProps.activated === this.props.index;
      return true
    }
    return false
  }
  
  renderChild(children) {
    if (this.props.activated > this.props.index - 2) {
      return React.Children.map(children, (child) => {
        if (child.type === Animate) {
          return React.cloneElement(child, {
            key       : 'ani-' + this.index++,
            slide     : this.props.index,
            transition: this.props.active === this.props.index
          })
        } else {
          if (Array.isArray(child.props.children)) {
            return React.cloneElement(child, {
              children: this.renderChild(child.props.children)
            });
          }
          return child;
        }
      })
    } else {
      return null;
    }
  }
  
  render() {
    return (
      <div className={classNames("swiper-slide", this.props.className)}>
        {this.renderChild(this.props.children)}
      </div>
    )
  }
}

export default SwiperSlide;