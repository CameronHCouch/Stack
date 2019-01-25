import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import ChatNav from './chat_nav'

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default withRouter(connect(msp, mdp)(ChatNav))