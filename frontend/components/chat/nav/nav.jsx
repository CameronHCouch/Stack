import React from 'react';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sidebarVisible: this.props.sidebarVisible
    }
  }

  handleClick(){
    this.state.sidebarVisible ? this.props.hideInfoSidebar() : this.props.displayInfoSidebar();
    this.setState({ sidebarVisible: !this.state.sidebarVisible })
  }

  subscribedUsers(){
    if (this.props.selectedChannel) {
      let userCount = 0;
      this.props.users.forEach((user) => {
        if (user.channels.includes(this.props.selectedChannel.id))
        userCount ++
      })
      return userCount;
    }
  }

  render() {
    return (
      <div className="chat-nav-bar">
        <div className="chat-nav-bar-contents">
          <div className="channel-info">
            <h1 className="channel-name-head">{this.props.selectedChannel.name}</h1>
            <div className="channel-description">
              <span> <i className="fas fa-user"></i> {this.subscribedUsers()} </span>
              <span>{this.props.selectedChannel.description}</span>
            </div>
          </div>
        <div className="chat-nav-icons">
          <span 
            className="chat-nav-icon"
            onClick={this.handleClick.bind(this)}
            >
              <i className="fas fa-info-circle fa-lg"></i>
          </span>
          <span 
            onClick={this.props.editChannelModal} 
            className="chat-nav-icon">
              <i className="fas fa-cog fa-lg"></i>
          </span>
        </div>
        </div>
      </div>
    )
  };
};

export default Nav;