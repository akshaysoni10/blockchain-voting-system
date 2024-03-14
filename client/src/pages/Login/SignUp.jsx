<<<<<<< HEAD
import React from 'react'

const SignUp = () => {
  return (
    <div>
      
    </div>
  )
}

export default SignUp
=======
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Signup.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, name, email } = values;
      try {
        const { data } = await axios.post('http://localhost:3001/register', {
          name,
          email,
          password,
        });
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        } else {
          localStorage.setItem('chat-app-user', JSON.stringify(data.user));
          navigate("/login"); // Redirect to login page after successful registration
        }
      } catch (error) {
        console.error("Registration error:", error);
        toast.error("Registration failed. Please try again later.", toastOptions);
      }
    }
  };
  

  const handleValidation = () => {
    const { password, confirmPassword, name, email } = values;
    if (password !== confirmPassword) {
      toast.error("Password and confirm password should be the same.", toastOptions);
      return false;
    } else if (name.length < 3) {
      toast.error("Username should be greater than 3 characters.", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("Password should be greater or equal than 8 characters.", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className='auth-container'>
        <div className='auth-card'>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder='Enter Name'
                autoComplete='off'
                name='name'
                className='input-field'
                onChange={handleChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder='Enter Email'
                autoComplete='off'
                name='email'
                className='input-field'
                onChange={handleChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder='Enter Password'
                name='password'
                className='input-field'
                onChange={handleChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                placeholder='Confirm Password'
                name='confirmPassword'
                className='input-field'
                onChange={handleChange}
              />
            </div>

            <button type='submit' className='btn-primary'>
              Register
            </button>
          </form>
          <p>Already Have an Account? <Link to="/login">Login</Link></p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default SignUp;
>>>>>>> ce6d851b23cc3841fe1929d9b711dbd92a99c204
