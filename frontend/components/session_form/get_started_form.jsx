import React from 'react';

class GetStartedForm extends React.Component {
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
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    if (Boolean(this.state.email)) {
      this.props.receiveEmail(this.state.email);
        this.props.history.push('/signup');
      } else {
      this.props.noEmailError();
    };
  };

  componentDidMount() {
    this.props.clearErrors();
  };

  updateEmail(e) {
    this.setState({ email: e.currentTarget.value })
  };

  demo_user() {
    if (this.props.match.path === '/login') {
      return <button
        className="demo-btn btn"
        onClick={this.loginDemoUser.bind(this)}>
        Demo User
      </button>
    };
  };

  render() {
    return (
      <div className={`get-started-wrapper`}>
        <ul>
          {this.errors()}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)} className="get-started-form">
          <label id="email">
            <input type='text'
              value={this.state.email}
              onChange={this.updateEmail.bind(this)}
              className="get-started-input"
              htmlFor="email" 
              placeholder="Email address" />
          </label>
          <button
            className="get-started-btn btn"
            type="submit">
            GET STARTED
          </button>
        </form>
        <br />
      </div>
    )
  };
};

export default GetStartedForm;