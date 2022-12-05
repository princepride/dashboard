import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import shareVideo from './share.mp4';
import './Login.sass';

function Login() {
  const listElement = useRef(null);
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();
  const [signupUserName, setSignupUserName] = useState();
  const [signupEmail, setSignupEmail] = useState();
  const [signupPassword, setSignupPassword] = useState();

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
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Don't have an account?</h2>
            <p className="user_unregistered-text">This product was developed by Wang Zhipeng to provide the most accurate and reliable stock investment advice.</p>
            <button className="user_unregistered-signup" id="signup-button" onClick={handleSignup}>Sign up</button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Have an account?</h2>
            <p className="user_registered-text">This product was developed by Wang Zhipeng to provide the most accurate and reliable stock investment advice.</p>
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
                  <input type="text" placeholder="User Name" className="forms_field-input" required />
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
