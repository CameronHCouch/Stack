import { connect } from 'react-redux';
import Chatroom from './chatroom';
import { requestUsers } from '../../actions/user_actions';
import { displayDMInvitePopup } from '../../actions/'

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
    displayDMInvitePopup: () => dispatch(displayDMInvitePopup()),
  };
};

export default connect(msp, mdp)(Chatroom);