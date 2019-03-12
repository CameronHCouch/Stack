import React from 'react';
import ChannelList from './channel_list_container';

class ChannelSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    this.props.requestChannels();
  }

  handleClick() {
    this.props.status === "DISPLAY_SIGNOUT_DROPDOWN" ? this.props.hideSignoutDropdown() : this.props.displaySignoutDropdown(); 
  }

  render() {
    return (
      <div className="chat-channel-sidebar">
        <div className="chat-channel-sidebar-contents">
        <div className="not-signout-button">
            <header className="chat-workspace-header" onClick={this.handleClick}>
              <h1 className="chat-workspace-name">{this.props.workspace && this.props.workspace.name}  <i className="fas fa-chevron-down"></i></h1>
              <div className="header-user">
                <span className="self"><i className="fas fa-circle"></i></span><p className="channel-side-username">{this.props.currentUser.username}</p>
              </div>
            </header>

            <div className="sidebar-list">
              <h2 className="sidebar-list-title">Channels</h2>
                <ChannelList channelType={false} />
            </div>

            <div>
              <h2 className="sidebar-add-channel" onClick={this.props.createChannelModal}>+ Add a channel</h2>
            </div>
              
            <div className="sidebar-list">
              <div onClick={this.props.createChannelModal}>
                <span className="direct-messages-title"><h2 className="sidebar-list-title">Direct Messages </h2> <i className="far fa-times-circle dm" data-fa-transform="rotate-45"></i></span>
              </div>
              <ChannelList channelType={true} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChannelSidebar;