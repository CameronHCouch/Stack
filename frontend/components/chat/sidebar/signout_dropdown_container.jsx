import { connect } from 'react-redux';
import SignoutDropdown from './signout_dropdown';
import { displaySignoutDropdown } from '../../../actions/ui_actions';
import { logout } from '../../../actions/session_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    displaySignoutDropdown: () => dispatch(displaySignoutDropdown()),
  };
};

export default connect(msp, mdp)(SignoutDropdown);