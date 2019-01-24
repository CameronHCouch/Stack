import { connect } from 'react-redux';
import UserProceed from './session_proceed';
import { signup, clearErrors } from '../../actions/session_actions';
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
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  }
}

export default withRouter(connect(msp, mdp)(UserProceed));