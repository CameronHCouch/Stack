import { connect } from 'react-redux';
import ChatChannelSidebar from '../sidebar/channel_sidebar_container';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.currentUser],
  }
}

const mdp = dispatch => {
  return {
    // updateUser: (user) => dispatch(updateUser(user))
  }
}

export default connect(msp, mdp)(ChatChannelSidebar)