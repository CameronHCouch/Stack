import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors, noEmailError } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'login',
  }
}

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    noEmailError: () => dispatch(noEmailError()),
  }
}

export default withRouter(connect(msp, mdp)(SessionForm))