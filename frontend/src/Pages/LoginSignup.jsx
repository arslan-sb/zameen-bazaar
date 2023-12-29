import React from 'react';
import './CSS/LoginSignup.css';
import { signup } from '../AuthServiced';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const handleSignup = async () => {
    // Add validation and error handling as needed
    const response = await signup(name, email, password);
    console.log(response.message);
  };


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSignup}>Continue</button>
        <p className="loginsignup-login">Already have an account? <Link to='/login'> <span>Login here</span></Link></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>

    </div>
  );
};

export default LoginSignup;
