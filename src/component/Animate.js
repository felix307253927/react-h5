/**
 * @author Created by felix on 17-1-6.
 * @email   307253927@qq.com
 */
'use strict';
import React, {Component} from 'react'
import classNames from 'classnames'

export class Animate extends Component {
  static propTypes = {
    name    : React.PropTypes.string,
    duration: React.PropTypes.string,
    delay   : React.PropTypes.string,
  };
  
  static defaultProps = {
    duration: '1s',
    delay   : '0'
  };
  
  style: Object;
  
  constructor(props) {
    super(props);
    this.state         = {
      name: props.name,
    };
    this.playAnimation = ::this.playAnimation;
  }
  
  playAnimation() {
    this.setState({name: null});
    setTimeout(() => {
      this.setState({name: this.props.name});
    }, 0)
  }
  
  render() {
    console.log(this.props.slide,this.props.transition)
    return (
      <div
        className={classNames("animated",this.props.className,{[this.state.name]:this.props.transition})}
        style={{
          visibility:this.props.transition?'visible':'hidden',
          AnimationDuration      : this.props.duration,
          WebkitAnimationDuration: this.props.duration,
          AnimationDelay         : this.props.delay,
          WebkitAnimationDelay   : this.props.delay,
          ...this.props.style
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Animate;
