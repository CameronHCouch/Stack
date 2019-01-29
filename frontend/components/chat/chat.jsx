import React from 'react';
import NavContainer from './nav/nav_container.jsx';
import ChannelSidebarContainer from './sidebar/channel_sidebar_container';
import ChatRoom from './chatroom.js';
import { Link, NavLink } from 'react-router-dom';

class Chat extends React.Component {

  componentDidMount(){
    this.props.requestWorkspace(1);
  }

  render() {
    return (
      <div className="chatroom-wrapper">
        <ChannelSidebarContainer />
        <NavContainer />
        <ChatRoom />
      </div>
    )
  }
}

export default Chat;