import React from 'react';
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
            <ul className="channel-names">
              <a href="#"><li><span className="online"><i className="fas fa-circle"></i></span>Placeholder 1</li></a>
              <a href="#"><li><span className="online"><i className="fas fa-circle"></i></span>Placeholder 2</li></a>
              <a href="#"><li><span className="offline"><i className="far fa-circle"></i></span>Placeholder 3</li></a>
            </ul>
          </div>
            
          <div className="sidebar-list">
            <h2 className="sidebar-list-title">Direct Messages</h2>
            <ul className="channel-names">
              <a href="#"><li><span className="online"><i className="fas fa-circle"></i></span>Private Convo 1</li></a>
              <a href="#"><li><span className="online"><i className="fas fa-circle"></i></span>Private Convo 2</li></a>
              <a href="#"><li><span className="offline"><i className="far fa-circle"></i></span>Private Convo 3</li></a>
              <a href="#"><li><span className="online"><i className="fas fa-circle"></i></span>Private Convo 4</li></a>
              <a href="#"><li><span className="offline"><i className="far fa-circle"></i></span>Private Convo 5</li></a>
              <a href="#"><li><span className="online"><i className="fas fa-circle"></i></span>Private Convo 6</li></a>
              <a href="#"><li><span className="offline"><i className="far fa-circle"></i></span>Private Convo 7</li></a>
            </ul>
          </div>
          <button className="chat-signout" onClick={() => this.props.logout()}>Sign Out</button>
        </div>
      </div>
    )
  }
}

export default ChatChannelSidebar;