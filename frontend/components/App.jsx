import React from 'react';
import HeaderNavContainer from './nav/header_nav_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer/footer';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import ChatContainer from './chat/chat_container'
import FormHeader from './session_form/form_header'
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

const App = () => (  
  <div>
    <AuthRoute exact path="/" component={HeaderNavContainer} />
    <AuthRoute exact path="/" component={SplashContainer} />
    <AuthRoute exact path="/" component={Footer} />

    <AuthRoute path="/login" component={FormHeader} />
    <AuthRoute path="/signup" component={FormHeader} />

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route path="/messages" component={ChatContainer} />
  </div>
);

export default App;