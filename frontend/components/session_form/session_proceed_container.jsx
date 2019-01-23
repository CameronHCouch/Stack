import { connect } from 'react-redux';
import SessionProceed from './session_proceed';
import { signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'signup'
  }
}

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user))
  }
}

export default withRouter(connect(msp, mdp)(SessionProceed));