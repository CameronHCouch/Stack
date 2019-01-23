import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';
import { receiveEmail } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'signup'
  }
}

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    receiveEmail: (email) => dispatch(receiveEmail(email)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default withRouter(connect(msp, mdp)(SessionForm))