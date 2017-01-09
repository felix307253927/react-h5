/**
 * @author Created by felix on 17-1-6.
 * @email   307253927@qq.com
 */
'use strict';

import React, {Component} from 'react'
import classNames from 'classnames'

export class Audio extends Component {
  
  static propTypes = {
    src  : React.PropTypes.string.isRequired,
    delay: React.PropTypes.number
  };
  
  static defaultProps = {
    delay: 0
  };
  
  audio: HTMLMediaElement;
  
  constructor(props) {
    super(props);
    this.handleClick = ::this.handleClick;
    if (!this.props.delay) {
      this.state = {
        isPlaying: true,
        src      : this.props.src
      };
    } else {
      state = {
        isPlaying: true,
        src      : ''
      };
    }
  }
  
  componentDidMount() {
    this.props.delay && setTimeout(() => {
      this.setState({src: this.props.src})
    }, this.props.delay)
  }
  
  handleClick() {
    if (this.audio.paused) {
      this.setState({isPlaying: true});
      try {
        this.audio.play();
      } catch (e) {
        console.warn(e);
      }
    } else {
      this.setState({isPlaying: false});
      try {
        this.audio.pause();
      } catch (e) {
        console.warn(e);
      }
    }
  }
  
  render() {
    return (
      <div>
        <button className={classNames("btn-music",{paused:!this.state.isPlaying})}
                onClick={this.handleClick}>
          <i className="icon-note"/>
        </button>
        <audio loop src={this.state.src} ref={audio=>this.audio=audio} autoPlay="true"/>
      </div>
    )
  }
}

export default Audio;