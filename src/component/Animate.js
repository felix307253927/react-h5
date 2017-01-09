/**
 * @author Created by felix on 17-1-6.
 * @email   307253927@qq.com
 */
'use strict';
import React from 'react'
import classNames from 'classnames'

export const Animate = (props) => {
  return (
    <div
      className={classNames("animated",props.className,props.transition?[props.name]:"fadeOut")}
      style={{
          //visibility:props.transition?'visible':'hidden',
          AnimationDuration      : props.duration,
          WebkitAnimationDuration: props.duration,
          AnimationDelay         : props.delay,
          WebkitAnimationDelay   : props.delay,
          ...props.style
        }}
    >
      {props.children}
    </div>
  )
};

Animate.propTypes    = {
  name    : React.PropTypes.string,
  duration: React.PropTypes.string,
  delay   : React.PropTypes.string,
};
Animate.defaultProps = {
  duration: '1s',
  delay   : '0'
};

export default Animate;
