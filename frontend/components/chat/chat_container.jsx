import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { requestWorkspace } from '../../actions/workspace_actions';
import { selectChannel } from '../../actions/ui_actions';
import Chat from './chat';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    selectedChannel: state.entities.channels[state.ui.sidebar.selectedId],
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestWorkspace: (id) => dispatch(requestWorkspace(id)),
  }
}

export default connect(msp, mdp)(Chat);