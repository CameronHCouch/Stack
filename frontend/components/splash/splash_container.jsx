import React from 'react';

import { connect } from 'react-redux';
import Splash from './splash';
import HeaderNavContainer from '../nav/header_nav_container';
import Footer from '../footer/footer';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

const SplashContainer = withRouter(connect(msp, mdp)(Splash));

export default function (props) {
  return (
    <>
      <HeaderNavContainer />
      <SplashContainer />
      <Footer />
    </>
  );
};