import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from '../session_form/signup_form_container'

export default () => {
  return (
    <div className="splash">
      <h1>Imagine what you'll <br/>
        accomplish together
      </h1>
      <img className="small-splash-img" src="https://s3.us-east-2.amazonaws.com/couchstack/Slack-Customer-Autodesk-BW.jpg" />
        <div className="splash-main">
          <figure>
          <img className="big-splash-img" src="https://s3.us-east-2.amazonaws.com/couchstack/Slack-Customer-Away.jpg" />
          <figcaption>Away transforms creativity and customer support with Stack</figcaption>
          </figure>
          <section className="right-splash">
            <p className="app-description">Stack is a collaboration hub for work, no matter what work you do. It’s a place where conversations happen, decisions are made, and information is always at your fingertips. With Stack, your team is better connected.</p>
            <SignupFormContainer />
            <aside>Already using Stack? <Link to="/login">Sign in.</Link></aside>
            <img className="medium-splash-img" src="https://s3.us-east-2.amazonaws.com/couchstack/Slack-Customer-Molly-Moon-BW.jpg" />
          </section>
        </div>
    </div>
  )
}