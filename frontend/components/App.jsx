import React from 'react';
import HeaderNavContainer from './nav/header_nav_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer/footer';
import LoginFormContainer from './session_form/login_form_container'
import SessionProceedContainer from './session_form/session_proceed_container'
import UserProceedContainer from './session_form/user_proceed_container'
import SignupFormContainer from './session_form/signup_form_container'
import FormHeader from './session_form/form_header'
import { Route, Switch } from 'react-router-dom';

const App = () => (  
  <div>
    <Route exact path="/" component={HeaderNavContainer} />
    <Route exact path="/" component={SplashContainer} />
    <Route exact path="/" component={Footer} />
    <Route path="/user/proceed" component={FormHeader} />
    <Route path="/login" component={FormHeader} />
    <Route path="/session/proceed" component={FormHeader} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <Route path="/session/proceed" component={UserProceedContainer} />
    <Route path="/user/proceed" component={SessionProceedContainer} />

  </div>
);

export default App;