import React from 'react';
import './CSS/LoginSignup.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className='loginsignup-fields'>
          <input type="email" placeholder='Email Address' name="" id="" />
          <input type="password" placeholder="Password" name="" id="" />
        </div>
        <button>Login</button>
        <p className="loginsignup-login">Don't have an account? <Link to='/signup'><span>Sign up here</span></Link></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By logging in, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
