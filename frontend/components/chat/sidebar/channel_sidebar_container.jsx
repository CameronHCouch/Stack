import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import ChannelSidebar from './channel_sidebar';
import { requestChannels } from '../../../actions/channel_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.currentUser],
    workspace: state.entities.workspaces[1]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestChannels: () => dispatch(requestChannels())
  };
};

export default connect(msp, mdp)(ChannelSidebar);