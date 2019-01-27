import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { updateUser } from '../../actions/session_actions';
import ChatChannelSidebar from '../chat_channel_sidebar';

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

export default withRouter(connect(msp, mdp)(ChatChannelSidebar))