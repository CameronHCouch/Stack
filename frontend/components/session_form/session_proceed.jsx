import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';

class SessionProceed extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
  };

  errors() {
    if (this.props.errors.session) {
      return (this.props.errors.session.map((er, idx) => {
        return <li className="error" key={idx}>{er}</li>
      })
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() =>
      this.props.history.replace('/'));
  }

  updatePassword(e) {
    this.setState({ password: e.currentTarget.value })
  }

  render() {
    return (
      <div className="session-form">
        <ul>
          {this.errors()}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label id="password">
            <input type='password' onChange={this.updatePassword.bind(this)} htmlFor="password" placeholder="password" />
          </label>
          <button className="continue-btn btn" type="submit">Continue</button>
        </form>
        <br />
      </div>
    )
  }
}

export default SessionProceed;