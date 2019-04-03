import React from 'react';

class DMInvitePopup extends React.Component {
  constructor(props) {
    super(props);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      member_list: this.state.member_list + ' ' + this.props.currentUser,
      name: this.state.name.slice(0, 21)
    });
    this.props.createChannel(this.state);
  }

  render() {
    return (
      <div className="dm-invite-popup">
        <button className="dm-invite-button" onClick={() => this.handleSubmit()}>Direct Messages</button>
      </div>
    )
  }
}

export default DMInvitePopup;