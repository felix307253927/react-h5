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
  
  shouldComponentUpdate(nextProps) {
    return nextProps.transition
      && (
        nextProps.active === this.props.index
        || nextProps.prevActive === nextProps.index
        || (!this.hasRender && nextProps.activated > this.props.index - 2)
      );
  }
  
  renderChild(children) {
    if (this.props.activated > this.props.index - 2) {
      this.hasRender = true;
      return React.Children.map(children, (child, i) => {
        if (child.type === Animate) {
          return React.cloneElement(child, {
            key       : 'ani-' + i,
            slide     : this.props.index,
            transition: this.props.active === this.props.index
          })
        } else {
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