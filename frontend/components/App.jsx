import React from 'react';
import HeaderNavContainer from './nav/header_nav_container';
import SplashContainer from './splash/splash_container';
import Footer from './footer/footer';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ChatContainer from './chat/chat_container';
import FormHeader from './session_form/form_header';
import AddChannelFormContainer from './chat/modals/add_channel_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

const App = () => (  
  <Switch>
    <AuthRoute exact path="/" component={HeaderNavContainer} />
    <AuthRoute exact path="/" component={SplashContainer} />
    <AuthRoute exact path="/" component={Footer} />

    <AuthRoute path="/login" component={FormHeader} />
    <AuthRoute path="/signup" component={FormHeader} />

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/messages" component={ChatContainer} />
    <ProtectedRoute path="/createchannel" component={AddChannelFormContainer} />
  </Switch>
);

export default App;