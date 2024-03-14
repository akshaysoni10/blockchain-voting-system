// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/home');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              className='input-field'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder='Enter Password'
              name='password'
              className='input-field'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn-primary'>
            Login
          </button>
        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
