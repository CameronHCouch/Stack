import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';
import FormHeader from '../session_form/form_header'

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

  componentDidMount() {
    this.props.clearErrors();
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
      <div>
        <div className="password-form">
          <ul>
            {this.errors()}
          </ul>
          <form className="proceed-form" onSubmit={this.handleSubmit.bind(this)}>
            <label id="password">
              <input type='password' onChange={this.updatePassword.bind(this)} htmlFor="password" placeholder="password" className="password"/>
            </label>
            <button className="confirm-btn" type="submit">confirm</button>
          </form>
          <br />
          <img className="find-team" src="https://s3.us-east-2.amazonaws.com/couchstack/find_team.png" />
        </div>
        {document.body.classList.add('form-backdrop')}
      </div>
    )
  }
}

export default SessionProceed;