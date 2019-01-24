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

  handleSubmit(e) {
    e.preventDefault();

    if (Boolean(this.state.email)) { 
      this.props.receiveEmail(this.state.email);
      if (this.props.match.path === '/login') {
        this.props.match.path.push('/proceed');
      } else {
        this.props.history.replace('/signup/proceed')
      }
    } else{
      this.props.noEmailError();
    }
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  updateEmail(e) {
    this.setState({ email: e.currentTarget.value })
  }

  check_if_new_page(){
    if ((this.props.match.path === '/login') || (this.props.match.path === '/signup') ) {
      document.body.classList.add('form-backdrop')
      return "login-form";
    } else {
      return ""
    }
  }

  demo_user(){
    if (this.props.match.path === '/login') {
      return <button 
      className="demo-btn btn" 
      onClick={this.loginDemoUser.bind(this)}>
        Demo User
      </button>
    }
  }

  loginDemoUser(e){
    e.preventDefault();
    const emailArr = 'guest@user.com'.split('');
    this.setState({ email: '', password: '' }, () =>
      this.demoLoginStep1(emailArr)
    );
  }

  demoLoginStep1(emailArr){
    if (emailArr.length > 0) {
      let { email } = this.state;
      this.setState(
        { email: email + emailArr.shift() }, () => {
          setTimeout(() =>
            this.demoLoginStep1(emailArr), 60);
        }
      );
    } else {
      if (Boolean(this.state.email)) {
        this.props.receiveEmail(this.state.email);
        if (this.props.match.path === '/login') {
          this.props.history.replace('/login/proceed');
        } else {
          this.props.history.replace('/signup/proceed')
        }
      } else {
        this.props.noEmailError();
      }
    }
  }

  render() {
    return (
      <div className={`session_form ${this.check_if_new_page.bind(this)()}`}>
        <ul>
          {this.errors()}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label id="email">
          <input type='text' 
            value={this.state.email}
            onChange={this.updateEmail.bind(this)} 
            htmlFor="email" placeholder="Email address" />
          </label>
          <button 
          className="get-started-btn btn" 
          type="submit">
          {((this.props.match.path === '/login') || (this.props.match.path === '/session')) ? "CONTINUE →" : "GET STARTED"}
          </button>
          {this.demo_user.bind(this)()}
        </form> 
        <br />
      </div>
    )
  }
}

export default SessionForm;