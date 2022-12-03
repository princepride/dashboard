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
// import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
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
      <Form>
        <Form.Label>Passenger Count</Form.Label>
        <Form.Select
          aria-label="Passenger Count"
          className="mb-2 form-select-lg"
          id="passengerCount"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Form.Select>
      </Form>
    </div>
  );
}

export default Login;
