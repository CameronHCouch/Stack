import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="chat-nav-bar">
        <div className="chat-nav-bar-contents">
          <h1 className="channel-name-head">{this.props.selectedChannel.name}</h1>
          <p>{this.props.selectedChannel.description}</p>
        </div>
      </div>
    )
  }
}

export default Nav;