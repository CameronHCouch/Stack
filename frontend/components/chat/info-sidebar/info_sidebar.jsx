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

  render(){
    return (
      <div className="info-sidebar">
        <div className="channel-info-header">
          <h1 className="channel-info">About #{this.props.selectedChannel.name}</h1>
          <button className="info-close-x">&#10005;</button>
        </div>

        <div className="info-section-wrapper">
          <div className="channel-details-header info-header">
            <h2><i className="fas fa-info-circle info-sidebar"></i>Channel Details</h2>
            <span onClick={this.toggleVisibleDescription.bind(this)}><i className="fas fa-caret-right"></i></span>
          </div>
          <p className={`info-channel-description  ${this.state.visibleDescription ? "display" : "hidden-info"}`}>{this.props.selectedChannel.description}</p>
        </div>

        <div className="info-section-wrapper">
          <div className="user-list-header info-header">
            <h2> <i className="fas fa-user info-sidebar"></i> {this.props.members.length} Members </h2>
            <span onClick={this.toggleVisibleMembers.bind(this)}><i className="fas fa-caret-right"></i></span>
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