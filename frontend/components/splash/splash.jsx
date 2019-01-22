import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <p>Welcome, {this.props.currentUser.email}!</p>
          <button onClick={() => this.props.logout()}>Sign Out</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <span>     </span>
          <Link to="/login">Login!</Link>
        </div>
      )
    }
  }
}

export default Splash;