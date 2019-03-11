import { connect } from 'react-redux';
import SignoutDropdown from './signout_dropdown';
import { hideSignoutDropdown } from '../../../actions/ui_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    hideSignoutDropdown: () => dispatch(hideSignoutDropdown()),
  };
};

export default connect(msp, mdp)(SignoutDropdown);