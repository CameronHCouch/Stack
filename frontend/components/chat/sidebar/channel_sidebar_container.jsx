import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../../actions/session_actions';
import { requestWorkspace } from '../../../actions/workspace_actions';
import ChannelSidebar from './channel_sidebar';

const msp = (state) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.currentUser],
    workspace: state.entities.workspaces[1]
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default withRouter(connect(msp, mdp)(ChannelSidebar))