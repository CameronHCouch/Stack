import React from 'react';
import Splash from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import HeaderNavContainer from './nav/header_nav_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <HeaderNavContainer />
    <Splash />

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;