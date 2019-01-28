import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Nav from './nav'

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    selectedChannel: state.entities.channels[state.ui.selectedId] || {}
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp, mdp)(Nav);