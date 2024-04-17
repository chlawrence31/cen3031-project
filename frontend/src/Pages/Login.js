import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  // Initialize state variables to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Event handler function to update email state
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Event handler function to update password state
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler function to submit the form data
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send email and password to backend
    axios.post('http://localhost:8000/login', { email, password })
      .then(response => {
        // Handle response from backend
        console.log(response.data);
        const { success, username } = response.data;
        if (success) {
          navigate('/home');
          // temporaily put the navigate to profile so that I could view the 
          // profile page while working on it. will have to find a place to link it
          // navigate('/profile');
        } else {
          alert("No account listed");
        }
      })
      .catch(error => {
        // Handle error
        console.error('Error logging in:', error);
      });
  };
  
  return (
    <div className="text-center mt-5" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <h1>Please Login</h1>
        <label htmlFor="emailAddress" className="sr-only">Email address</label>
        <input 
          type="email" 
          id="emailAddress" 
          className="form-control" 
          placeholder="Email Address" 
          value={email} 
          onChange={handleEmailChange} 
          required 
          autoFocus 
        />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input 
          type="password" 
          id="inputPassword" 
          className="form-control" 
          placeholder="Password" 
          value={password} 
          onChange={handlePasswordChange} 
          required 
        />
        <div className="mt-3">
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </div>
        <h3 className = 'mt-5'>Don't have an account?</h3>
        <Link to="/signup" className="btn btn-default border">Create Account</Link>
      </form> 
    </div>
  );
}

export default Login;
