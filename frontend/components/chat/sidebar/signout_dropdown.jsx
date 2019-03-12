import React from 'react';

class SignoutDropdown extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="signout-dropdown">
        <div className="current-user-info">
          <img src={this.props.currentUser.img_url} /> {this.props.currentUser.username}
        </div>
        <button className="chat-signout" onClick={() => this.props.logout()}>Sign out of {this.props.workspace.name} </button>
      </div>
    )
  }
}

export default SignoutDropdown;