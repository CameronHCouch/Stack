import { connect } from 'react-redux';
import GetStartedForm from './get_started_form';
import { clearErrors, noEmailError } from '../../actions/session_actions';
import { receiveEmail } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {
    user: { email: "", password: "" },
    errors: state.errors,
    formType: 'signup'
  };
};

const mdp = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    receiveEmail: (email) => dispatch(receiveEmail(email)),
    noEmailError: () => dispatch(noEmailError()),
  };
};

export default withRouter(connect(msp, mdp)(GetStartedForm));