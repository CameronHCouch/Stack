import React from 'react';
import HeaderNavContainer from './nav/header_nav_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer/footer';
import LoginFormContainer from './session_form/login_form_container'
import UserProceedContainer from './session_form/user_proceed_container'
import SessionProceedContainer from './session_form/session_proceed_container'
import SignupFormContainer from './session_form/signup_form_container'
import FormHeader from './session_form/form_header'
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

const App = () => (  
  <div>
    <Route exact path="/" component={HeaderNavContainer} />
    <Route exact path="/" component={SplashContainer} />
    <Route exact path="/" component={Footer} />

    <AuthRoute path="/login" component={FormHeader} />
    {/* <AuthRoute path="/login" component={Footer} /> */}
    <AuthRoute path="/signup" component={FormHeader} />
    {/* <AuthRoute path="/signup" component={Footer} /> */}

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login/proceed" component={SessionProceedContainer} />
    <AuthRoute path="/signup/proceed" component={UserProceedContainer} />

  </div>
);

export default App;