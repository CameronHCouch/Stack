import React from 'react';
import NavContainer from './nav/nav_container.jsx';
import ChannelSidebarContainer from './sidebar/channel_sidebar_container';
import ChatRoomContainer from './chatroom_container.js';
import InfoSidebarContainer from './info-sidebar/info_sidebar_container';
import { Link, NavLink } from 'react-router-dom';

class Chat extends React.Component {

  componentDidMount(){
    this.props.requestWorkspaces();
  };

  render() {
    return (
      <div className="chatroom-wrapper">
        <ChannelSidebarContainer/>
        <div className="nav-and-chat-wrapper">
          <NavContainer />
          <div className="chat-and-info-wrapper">
            <ChatRoomContainer />
            <InfoSidebarContainer />
          </div>
        </div>
      </div>
    )
  };
};

export default Chat;