import React from 'react';
import ChannelList from './channel_list_container';
import { Link, NavLink } from 'react-router-dom';

class ChannelSidebar extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.requestChannels();
  }

  render() {
    return (
      <div className="chat-channel-sidebar">
        <div className="chat-channel-sidebar-contents">
          <header className="chat-workspace-header">
            <h1 className="chat-workspace-name">{this.props.workspace && this.props.workspace.name}</h1>
            <div className="header-user">
              <span className="self"><i className="fas fa-circle"></i></span><p className="channel-side-username">{this.props.currentUser.username}</p>
            </div>
          </header>

          <div className="sidebar-list">
            <h2 className="sidebar-list-title">Channels</h2>
              <ChannelList channelType={false} workspace={this.props.workspace}/>
          </div>

          <div>
            <h2 className="sidebar-add-channel" onClick={this.props.createChannelModal}>+ Add a channel</h2>
          </div>
            
          <div className="sidebar-list">
            <h2 className="sidebar-list-title">Direct Messages</h2>
            <ChannelList channelType={true} workspace={this.props.workspace} />
          </div>
          <button className="chat-signout" onClick={() => this.props.logout()}>Sign Out</button>
        </div>
      </div>
    )
  }
}

export default ChannelSidebar;