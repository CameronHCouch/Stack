import React from 'react';
import ChatNavContainer from './chat_nav_container.jsx';
import ChatChannelSidebarContainer from './chat_channel_sidebar_container';
import NoUsernameModalContainer from './no_username_modal_container';
import { Link, NavLink } from 'react-router-dom';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  };

  render() {
    return (
      <div className="chatroom-wrapper">
        <header className="chatroom-header">
          <ChatNavContainer />
        </header>
        <ChatChannelSidebarContainer />
        <NoUsernameModalContainer />
      </div>
    )
  }
}

export default Chat;