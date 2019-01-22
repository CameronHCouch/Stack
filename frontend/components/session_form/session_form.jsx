import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
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
    const user = merge({}, this.state);
    this.props.processForm(user).then(() =>
      this.props.history.replace('/'));
  }

  updateEmail(e) {
    this.setState({ email: e.currentTarget.value })
  }

  updatePassword(e) {
    this.setState({ password: e.currentTarget.value })
  }

  lonk() {
    if (this.props.match.path === '/signup') {
      return <Link to='/login'>Log in</Link>
    } else {
      return <Link to='/signup'>Sign up</Link>
    }
  }

  render() {
    return (
      <div className="SessionForm">
        <h1>{this.props.formType === "login" ? "Log In" : "Sign Up"}</h1>
        <ul>
          {this.errors()}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label id="email">Email: </label>
          <input type='text' onChange={this.updateEmail.bind(this)} htmlFor="email" />
          <br />
          <label id="password">Password: </label>
          <input type='password' onChange={this.updatePassword.bind(this)} htmlFor="password" />
          <input type="submit" value="Submit" />
        </form>
        <br />
        {this.lonk()}
      </div>
    )
  }
}

export default SessionForm;