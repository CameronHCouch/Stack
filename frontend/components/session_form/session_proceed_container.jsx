import { connect } from 'react-redux';
import SessionProceed from './session_proceed';
import { login, clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {
    user: { email: state.ui.email, password: "" },
    errors: state.errors,
    formType: 'login'
  }
}

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  }
}

export default withRouter(connect(msp, mdp)(SessionProceed));