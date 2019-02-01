import React from 'react';
import NavContainer from './nav/nav_container.jsx';
import ChannelSidebarContainer from './sidebar/channel_sidebar_container';
import ChatRoomContainer from './chatroom_container.js';
import InfoPopoutManager from './popouts/info_popout_manager';
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
            <InfoPopoutManager />
          </div>
        </div>
      </div>
    )
  };
};

export default Chat;