import React from 'react';

class SignoutDropdown extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="signout-dropdown">
          <button className="chat-signout" onClick={() => this.props.logout()}>Sign Out</button>
      </div>
    )
  }
}

export default SignoutDropdown;