import React from 'react';

class Nav extends React.Component {
  
  render() {
    debugger
    return (
      <div className="chat-nav-bar">
        <div className="chat-nav-bar-contents">
          <div className="channel-info">
            <h1 className="channel-name-head">{this.props.selectedChannel.name}</h1>
            <div className="channel-description">
              <span>{this.props.selectedChannel.description}</span>
            </div>
          </div>
          <span><i className="fas fa-cog fa-lg" onClick={this.props.editChannelModal}></i></span>
        </div>
      </div>
    )
  }
}

export default Nav;