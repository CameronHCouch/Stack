import React from 'react';
import MemberListContainer from '../member_list/member_list_container';

class InfoSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      visibleMembers: this.props.visibleMembers,
      visibleDescription: this.props.visibleDescription,
    }
  };

  toggleVisibleMembers(){
    this.setState({visibleMembers: !this.state.visibleMembers})
  }

  toggleVisibleDescription(){
    this.setState({ visibleDescription: !this.state.visibleDescription })
  }

  subscribedUsers() {
    if (this.props.selectedChannel) {
      let userCount = 0;
      this.props.members.forEach((user) => {
        if (user.channels.includes(this.props.selectedChannel.id))
          userCount++
      })
      return userCount;
    }
  }

  render(){
    return (
      <div className="info-sidebar">
        <div className="channel-info-header">
          <h1 className="channel-info">About #{this.props.selectedChannel.name}</h1>
          <button onClick={this.props.hideInfoSidebar} className="info-close-x">&#10005;</button>
        </div>

        <div className="info-section-wrapper">
          <div className="channel-details-header info-header">
            <h2><i className="fas fa-info-circle info-sidebar"></i><span className="info-plaintext">Channel Details</span></h2>
            <span onClick={this.toggleVisibleDescription.bind(this)} 
              className={`arrow ${this.state.visibleDescription ? "rotate" : ""}`}
              >
              <i className='fas fa-caret-right'></i>
            </span>
          </div>
          <div className={`info-channel-description ${this.state.visibleDescription ? "display" : "hidden-info"}`}>
            <div className="info-channel-description-section">
              <span className="info-channel-description-subtitle">Purpose</span>
              {this.props.selectedChannel.description}
            </div>
            <div className="info-channel-description-section">
              <span className="info-channel-description-subtitle">Created</span>
              Created by Admin! on {this.props.selectedChannel.created_at ? 
                this.props.selectedChannel.created_at.slice(0,10) :
                ""}
            </div>
          </div>
        </div>

        <div className="info-section-wrapper">
          <div className="user-list-header info-header">
            <h2> 
              <i className="fas fa-user info-sidebar"></i> 
              <span className="info-plaintext">{this.subscribedUsers()} Members</span>
            </h2>
            <span onClick={this.toggleVisibleMembers.bind(this)} 
              className={`arrow ${this.state.visibleMembers ? "rotate" : ""}`}
              >
              <i className='fas fa-caret-right'></i>
            </span>
          </div>
          <div className={`members-list-wrapper ${this.state.visibleMembers ? "display" : "hidden-info"}`}>
            <MemberListContainer currentUser={this.props.currentUser} />
          </div>
        </div>
      </div>
    )
  };

}

export default InfoSidebar