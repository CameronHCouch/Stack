import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { requestWorkspace } from '../../actions/workspace_actions';
import Chat from './chat';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestWorkspace: id => dispatch(requestWorkspace(id)),
  }
}

export default withRouter(connect(msp, mdp)(Chat))