// import React from 'react';
// import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
// import firebase from 'firebase/app';

// import { auth } from '../firebase';

// const Login = () => (
//  <div id="login-page">
//    <div id="login-card">
//      <h2>Welcome to Our Company</h2>
//      <div
//        className="login-button google"
//        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
//      >
//        <GoogleOutlined />Sign In with Google
//      </div>
//      {/* <br />
//                <br />
//                <div
//                    className='login-button facebook'
//                >
//                    <FacebookOutlined />Sign In with Facebook
//                </div> */}
//    </div>
//  </div>
// );
// export default Login;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import shareVideo from './share.mp4';
import './Login.css'
// import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label htmlFor="tab-1" className="tab">Sign In</label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="user" className="label">Username</label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">Password</label>
              <input id="pass" type="password" className="input" />
            </div>
            <div className="group">
              <input id="check" type="checkbox" className="check" checked />
              <label htmlFor="check"><span className="icon" />Keep me signed in </label>
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign In" />
            </div>
            <div className="hr" />
            <div className="foot-Ink">
              <a href="#forgot">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
