import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'login'
  }
}

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user))
  }
}

export default withRouter(connect(msp, mdp)(SessionForm))