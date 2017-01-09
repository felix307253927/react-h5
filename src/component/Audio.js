/**
 * @author Created by felix on 17-1-6.
 * @email   307253927@qq.com
 */
'use strict';

import React, {Component} from 'react'
import classNames from 'classnames'

export class Audio extends Component {
  
  static propTypes = {
    src: React.PropTypes.string.isRequired
  };
  
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
      this.setState({isPlaying: true});
      try{
        this.audio.play();
      }catch (e){
        console.warn(e);
      }
    } else {
      this.setState({isPlaying: false});
      try{
        this.audio.pause();
      }catch (e){
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
        <audio loop ref={audio=>this.audio=audio} autoPlay="true">
          <source src={this.props.src} type="audio/mpeg"/>
        </audio>
      </div>
    )
  }
}

export default Audio;