/**
 * @author Created by felix on 17-1-9.
 * @email   307253927@qq.com
 */
'use strict';
import React, {Component} from 'react'

export class Arrow extends Component {
  static propTypes = {
    onClick: React.PropTypes.func
  };
  
  state = {
    show: true
  };
  
  setVisible(show) {
    this.state.show !== show && this.setState({show: show});
  }
  
  render() {
    return (
      <button
        onClick={()=>{
          this.props.onClick && this.props.onClick();
        }}
        className="up-arrow" style={{display:this.state.show?'block':'none'}}>
        <i className="icon-angle-double-up"/>
      </button>
    )
  }
}

export default Arrow;