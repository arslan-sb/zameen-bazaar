import React from 'react';
import './CSS/LoginSignup.css';
import { Link } from 'react-router-dom';
import { login } from '../AuthServiced';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {
      // Add validation and error handling as needed
      const response = await login(email, password);
      console.log(response.message); // You can handle success/failure based on the response
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className='loginsignup-fields'>
          <input type="email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin}>Login</button>
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
