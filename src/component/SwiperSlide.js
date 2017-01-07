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
  
  shouldComponentUpdate(nextProps) {
    return nextProps.active === this.props.index
  }
  
  render() {
    console.log(this.props.index);
    return (
      <div className={classNames("swiper-slide", this.props.className)}>
        {React.Children.map(this.props.children, (child, i) => {
          return child.type === Animate ? React.cloneElement(child, {
              key       : 'ani-' + i,
              slide     : this.props.index,
              transition: this.props.transition && this.props.active === this.props.index
            }) : child;
        })}
      </div>
    )
  }
}