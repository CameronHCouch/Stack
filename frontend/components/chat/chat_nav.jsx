import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class ChatNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  };

  render() {
    return (
      <header className="chat-nav-bar">
        Hi there!
      </header>
    )
  }
}

export default ChatNav;