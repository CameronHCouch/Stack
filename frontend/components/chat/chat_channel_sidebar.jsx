import React from 'react';
import ChannelList from './channel_list/chat_channel_list_container';
import { Link, NavLink } from 'react-router-dom';

class ChatChannelSidebar extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {

    return (
      <div className="chat-channel-sidebar">
        <div className="chat-channel-sidebar-contents">
          <header className="chat-workspace-header">
            <h1 className="chat-workspace-name">App Academy</h1>
            <div className="header-user">
              <span className="self"><i className="fas fa-circle"></i></span><p className="channel-side-username">{this.props.currentUser.username}</p>
            </div>
          </header>

          <div className="sidebar-list">
            <h2 className="sidebar-list-title">Channels</h2>
              <ChannelList channelType="public"/>
          </div>
            
          <div className="sidebar-list">
            <h2 className="sidebar-list-title">Direct Messages</h2>
              <ChannelList channelType="private"/>
          </div>
          <button className="chat-signout" onClick={() => this.props.logout()}>Sign Out</button>
        </div>
      </div>
    )
  }
}

export default ChatChannelSidebar;