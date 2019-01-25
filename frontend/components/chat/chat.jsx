import React from 'react';
import ChatContainer from './chat_container.jsx';
import ChatNavContainer from './chat_nav_container.jsx';
import ChatChannelSidebarContainer from './chat_channel_sidebar_container';
import { Link, NavLink } from 'react-router-dom';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  };

  render() {
    return (
      <header className="chat">
        Hi there!
      </header>
    )
  }
}

export default Chat;