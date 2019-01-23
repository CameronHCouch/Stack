import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);


{/* <br />
  <label id="password">Password: </label>
  <input type='password' onChange={this.updatePassword.bind(this)} htmlFor="password" /> */}


  // Session Form Code
// import React from 'react';
// import { merge } from 'lodash';
// import { Link } from 'react-router-dom';

// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { email: "", password: "" };
//   };

//   errors() {
//     if (this.props.errors.session) {
//       return (this.props.errors.session.map((er, idx) => {
//         return <li className="error" key={idx}>{er}</li>
//       })
//       )
//     }
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const user = merge({}, this.state);
//     this.props.processForm(user).then(() =>
//       this.props.history.replace('/'));
//   }

//   updateEmail(e) {
//     this.setState({ email: e.currentTarget.value })
//   }

//   updatePassword(e) {
//     this.setState({ password: e.currentTarget.value })
//   }

//   lonk() {
//     if (this.props.match.path === '/signup') {
//       return <Link to='/login'>Log in</Link>
//     } else {
//       return <Link to='/signup'>Sign up</Link>
//     }
//   }

//   // signup() {
//   //   return(

//   //   )
//   // }

//   render() {
//     return (
//       <div className="SessionForm">
//         <h1>{this.props.formType === "login" ? "Log In" : "Sign Up"}</h1>
//         <ul>
//           {this.errors()}
//         </ul>
//         <form onSubmit={this.handleSubmit.bind(this)}>
//           <label id="email">
//             <input type='text' onChange={this.updateEmail.bind(this)} htmlFor="email" placeholder="Email address" />
//           </label>
//           <button class="get-started-btn btn" type="submit">GET STARTED</button>
//         </form>
//         <br />
//         {this.lonk()}
//       </div>
//     )
//   }
// }

// export default SessionForm;