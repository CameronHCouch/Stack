import React from 'react';
import { merge } from 'lodash';
import { Link, NavLink } from 'react-router-dom';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  };

  navSession(){
    return (this.props.currentUser ? (
      <div>
        <button onClick={() => this.props.logout()}>Sign Out</button>
        <Link className="btn header-btn" to="/messages">Your Workspaces</Link>
      </div>
    ) : (
        <div>
          <Link to="/login">Sign in</Link>
          <Link className="btn header-btn" to="/signup">GET STARTED</Link>
        </div>
      )
    );
  }

  render() {
    return (
      <header className="nav-bar">
        <Link to="/">
          <img className="logo-img" src="https://s3.us-east-2.amazonaws.com/couchstack/logo_text_recolor.png" />
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="#">Why Cameron?</Link></li>
            <li><a href="https://www.linkedin.com/in/cameroncouch/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/CameronHCouch/" target="_blank">GitHub</a></li>
          </ul>
      
          <section className="nav-session">
            {this.navSession()}
          </section>
        </nav>
      </header>
    )
  }
}

export default HeaderNav;