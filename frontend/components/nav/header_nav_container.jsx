import { connect } from 'react-redux';
import HeaderNav from './header_nav';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

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

export default withRouter(connect(msp, mdp)(HeaderNav))