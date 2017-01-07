/**
 * @author Created by felix on 17-1-6.
 * @email   307253927@qq.com
 */
'use strict';

import React, {Component} from 'react'
import classNames from 'classnames'

export default class Audio extends Component {
  audio: HTMLMediaElement;
  state = {
    isPlaying: true
  };
  
  constructor(props) {
    super(props);
    this.handleClick = ::this.handleClick;
  }
  
  handleClick() {
    if (this.audio.paused) {
      this.audio.play();
      this.setState({isPlaying: true});
    } else {
      this.audio.pause();
      this.setState({isPlaying: false});
    }
  }
  
  render() {
    return (
      <div>
        <button className={classNames("btn-music",{paused:!this.state.isPlaying})}
                onClick={this.handleClick}>
          <i className="icon-note"/>
        </button>
        
        <audio loop ref={audio=>this.audio=audio}>
          <source src={this.props.audioUrl} type="audio/mpeg"/>
        </audio>
      </div>
    )
  }
}