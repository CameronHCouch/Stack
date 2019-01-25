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
          <h1>Hi there!</h1>
          Where my text do go?
        </div>
      </div>
    )
  }
}

export default ChatNav;