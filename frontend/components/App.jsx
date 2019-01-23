import React from 'react';
import Splash from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container'
import SessionProceedContainer from './session_form/session_proceed_container'
import UserProceedContainer from './session_form/user_proceed_container'
import SignupFormContainer from './session_form/signup_form_container'
import HeaderNavContainer from './nav/header_nav_container';
import { Route, Switch } from 'react-router-dom';

const App = () => (  
  <div>
    <Route exact path="/" component={HeaderNavContainer} />
    <Route exact path="/" component={Splash} />
    {/* <Switch> */}
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/session-proceed" component={UserProceedContainer} />
      <Route path="/user-proceed" component={SessionProceedContainer} />
    {/* </Switch> */}
  </div>
);

export default App;