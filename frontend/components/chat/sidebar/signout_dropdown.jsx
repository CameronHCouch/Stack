import React from 'react';

class SignoutDropdown extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="signout-dropdown">
        <div className="current-user-info">
          <img src={this.props.currentUser.img_url} /> <h1 className="channel-name-head">{this.props.currentUser.username}</h1>
        </div>
        <button className="chat-signout" onClick={() => this.props.logout()}>Sign out of <strong>{this.props.workspace.name}</strong> </button>
      </div>
    )
  }
}

export default SignoutDropdown;