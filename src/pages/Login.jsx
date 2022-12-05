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

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import shareVideo from './share.mp4';
import './Login.sass';
// import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  // const signupButton = document.getElementById('signup-button'),
  //  loginButton = document.getElementById('login-button'),
  //  userForms = document.getElementById('user_options-forms')

  const listElement = useRef(null);

    const handleSignup = () => {
      listElement.current.classList.remove('bounceRight');
      listElement.current.classList.add('bounceLeft');
    };

    const handleLogin = () => {
      listElement.current.classList.remove('bounceLeft');
      listElement.current.classList.add('bounceRight');
    };

  return (
    <section className="user">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Don't have an account?</h2>
            <p className="user_unregistered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
            <button className="user_unregistered-signup" id="signup-button" onClick={handleSignup}>Sign up</button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Have an account?</h2>
            <p className="user_registered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
            <button className="user_registered-login" id="login-button" onClick={handleLogin}>Login</button>
          </div>
        </div>

        <div className="user_options-forms" id="user_options-forms" ref={listElement}>
          <div className="user_forms-login">
            <h2 className="forms_title">Login</h2>
            <form className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input type="email" placeholder="Email" className="forms_field-input" required autoFocus />
                </div>
                <div className="forms_field">
                  <input type="password" placeholder="Password" className="forms_field-input" required />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                <input type="submit" value="Log In" className="forms_buttons-action" />
              </div>
            </form>
          </div>
          <div className="user_forms-signup">
            <h2 className="forms_title">Sign Up</h2>
            <form className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input type="text" placeholder="Full Name" className="forms_field-input" required />
                </div>
                <div className="forms_field">
                  <input type="email" placeholder="Email" className="forms_field-input" required />
                </div>
                <div className="forms_field">
                  <input type="password" placeholder="Password" className="forms_field-input" required />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <input type="submit" value="Sign up" className="forms_buttons-action" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
