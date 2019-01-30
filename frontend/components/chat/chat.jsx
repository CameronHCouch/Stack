import React from 'react';
import NavContainer from './nav/nav_container.jsx';
import ChannelSidebarContainer from './sidebar/channel_sidebar_container';
import ChatRoomContainer from './chatroom_container.js';
import { Link, NavLink } from 'react-router-dom';

class Chat extends React.Component {

  componentDidMount(){
    this.props.requestWorkspace(1);
  }

  render() {
    return (
      <div className="chatroom-wrapper">
        <ChannelSidebarContainer />
        <div className="nav-and-chat-wrapper">
          <NavContainer />
          <ChatRoomContainer 
          currentUser={this.props.currentUser} 
          currentChannel={this.props.selectedChannel} 
          />
        </div>
      </div>
    )
  }
}

export default Chat;