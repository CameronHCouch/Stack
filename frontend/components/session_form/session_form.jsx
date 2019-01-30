import React from 'react';

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
  
  componentDidMount() {
    this.props.clearErrors();
    if (this.props.email){
      this.setState({email: this.props.email});
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() =>
      this.props.history.replace('/messages'));
  }

  updatePassword(e) {
    this.setState({ password: e.currentTarget.value })
  }

  updateEmail(e) {
    this.setState({ email: e.currentTarget.value })
  }

  demo_user(){
    if (this.props.match.path === '/login') {
      return <button 
      className="demo-btn" 
      onClick={this.loginDemoUser.bind(this)}>
        <div>Demo User</div>
      </button>
    }
  }

  loginDemoUser(e){
    e.preventDefault();
    const emailArr = 'guest@user.com'.split('');
    const passwordArr = 'password'.split("");
    this.setState({ email: '', password: '' }, () =>
      this.demoLogin(emailArr, passwordArr)
    );
  }

  demoLogin(emailArr, passwordArr){
    let { email } = this.state;
    let { password } = this.state;

    if (emailArr.length > 0) {
      this.setState(
        { email: email + emailArr.shift() }, () => {
          setTimeout(() =>
            this.demoLogin(emailArr, passwordArr), 60);
        }
      );
    } else if (passwordArr.length > 0) {
      this.setState(
        { password: password + passwordArr.shift() }, () => {
          setTimeout(() =>
            this.demoLogin(emailArr, passwordArr), 60);
        }
      );
    } else {
      this.props.processForm(this.state).then(() =>
        this.props.history.replace('/messages'));
      }
    }

  render() {
    return (
      <div className={`session-form-modal`}>
        <section className="login-form-header">
          <h2 className="sign-in-text">Sign {(this.props.match.path === "/signup") ? "up for" : "in to"} App Academy</h2>
          <p className="workspace-url">app-academy.stack.com</p>
    
          <p className="left-aligned">Enter your <strong>email address</strong> and <strong>password</strong>.</p>
        </section>
        <ul>
          {this.errors()}
        </ul>
        <form className="session-form" onSubmit={this.handleSubmit.bind(this)}>
          <label id="email">
          <input type='text' 
            value={this.state.email}
            onChange={this.updateEmail.bind(this)} 
            htmlFor="email" 
            placeholder="you@example.com" />
          </label>
          <label id="password">
            <input
              type='password'
              value={this.state.password}
              onChange={this.updatePassword.bind(this)}
              htmlFor="password"
              placeholder="password"
              className="password"
            />
          </label>
          <button 
            className={(this.props.match.path === "/signup") ? "signup-btn" : "signin-btn" }
          type="submit">
            <div>Sign {(this.props.match.path === "/signup") ? "Up" : "In"}</div>
          </button>
          {this.demo_user.bind(this)()}
        </form> 
        {document.body.classList.add('form-backdrop')}
        <br />
      </div>
    )
  }
}

export default SessionForm;