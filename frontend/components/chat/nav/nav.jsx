import React from 'react';

class Nav extends React.Component {
  
  render() {
    return (
      <div className="chat-nav-bar">
        <div className="chat-nav-bar-contents">
          <div className="channel-info">
            <h1 className="channel-name-head">{this.props.selectedChannel.name}</h1>
            <div className="channel-description">
              <span> <i className="fas fa-user"></i> {this.props.users.length} </span>
              <span>{this.props.selectedChannel.description}</span>
            </div>
          </div>
          <span onClick={this.props.editChannelModal}><i className="fas fa-cog fa-lg"></i></span>
        </div>
      </div>
    )
  }
}

export default Nav;