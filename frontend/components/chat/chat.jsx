import React from 'react';
import NavContainer from './nav/nav_container.jsx';
import ChannelSidebarContainer from './sidebar/channel_sidebar_container';
// import NoUsernameModalContainer from './no_username_modal_container';
import { Link, NavLink } from 'react-router-dom';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  };

  componentDidMount(){
    this.props.requestWorkspace(1);
  }

  render() {
    return (
      <div className="chatroom-wrapper">
        <ChannelSidebarContainer />
        <NavContainer />
        {/* <NoUsernameModalContainer /> */}
      </div>
    )
  }
}

export default Chat;