import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class ChatNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  };

  render() {
    return (
      <div className="chat-nav-bar">
        <div className="chat-nav-bar-contents">
          <h1 className="channel-name-head">#IT_IS_HERE</h1>
          
        </div>
      </div>
    )
  }
}

export default ChatNav;