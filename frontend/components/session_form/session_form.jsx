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
      this.props.receiveEmail(this.state.email);
      if (this.props.match.path === '/login') {
      this.props.history.replace('/session/proceed');
      } else {
        this.props.history.replace('/user/proceed')
      }
  }

  updateEmail(e) {
    this.setState({ email: e.currentTarget.value })
  }

  check_if_new_page(){
    if ((this.props.match.path === '/login') || (this.props.match.path === '/session') ) {
      document.body.classList.add('form-backdrop')
      return "login-form";
    }
  }

  render() {
    return (
      <div className={`{session_form ${this.check_if_new_page.bind(this)()}`}>
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