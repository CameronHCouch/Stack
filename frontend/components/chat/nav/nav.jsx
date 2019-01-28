import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  };

  render() {
    debugger
    return (
      <div className="chat-nav-bar">
        <div className="chat-nav-bar-contents">
          <h1 className="channel-name-head">{this.props.selectedChannel && this.props.selectedChannel.name}</h1>
          
        </div>
      </div>
    )
  }
}

export default Nav;