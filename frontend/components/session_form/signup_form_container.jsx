import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors, noEmailError } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import FormHeader from './form_header';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'signup',
    email: state.ui.email || ""
  }
}

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    noEmailError: () => dispatch(noEmailError())
  }
}


const SessionFormContainer = withRouter(connect(msp, mdp)(SessionForm));

export default function (props) {
  return (
    <>
      <FormHeader />
      <SessionFormContainer />
    </>
  );
};