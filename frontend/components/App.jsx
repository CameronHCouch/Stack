import React from 'react';
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Stack!</h1>
      <SplashContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;