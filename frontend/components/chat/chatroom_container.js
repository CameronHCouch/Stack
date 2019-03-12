import { connect } from 'react-redux';
import { requestUsers } from '../../actions/user_actions';
import Chatroom from './chatroom';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser.id,
    selectedChannel: state.entities.channels[state.ui.sidebar.selectedId] || {},
    users: state.entities.users,
  };
};

const mdp = dispatch => {
  return {
    requestUsers: (channelId) => dispatch(requestUsers(channelId)),
  };
};

export default connect(msp, mdp)(Chatroom);