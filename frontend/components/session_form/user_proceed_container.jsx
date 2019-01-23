import { connect } from 'react-redux';
import UserProceed from './session_proceed';
import { login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {
    user: { email: state.ui.email, password: "" },
    errors: state.errors,
    formType: 'signup'
  }
}

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user))
  }
}

export default withRouter(connect(msp, mdp)(UserProceed));