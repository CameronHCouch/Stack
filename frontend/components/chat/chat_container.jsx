import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { requestWorkspaces } from '../../actions/workspace_actions';
import Chat from './chat';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    selectedChannel: state.entities.channels[state.ui.sidebar.selectedId] || {},
    workspace: state.entities.workspaces[1] || {},
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestWorkspaces: () => dispatch(requestWorkspaces()),
  };
};

export default connect(msp, mdp)(Chat);