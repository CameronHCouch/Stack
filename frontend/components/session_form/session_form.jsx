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
      this.props.history.push('/session-proceed');
  }

  updateEmail(e) {
    this.setState({ email: e.currentTarget.value })
  }

  render() {
    return (
      <div className="session-form">
        <ul>
          {this.errors()}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label id="email">
          <input type='text' onChange={this.updateEmail.bind(this)} htmlFor="email" placeholder="Email address" />
          </label>
          <button className="get-started-btn btn" type="submit">GET STARTED</button>
        </form>
        <br />
      </div>
    )
  }
}

export default SessionForm;