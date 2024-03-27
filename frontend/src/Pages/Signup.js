import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className ="text-center mt-5" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>Please Sign Up</h1>
      <label for="inputUsername" class="sr-only">Username</label>
      <input type="username" id="username" class="form-control" 
      placeholder = "Username" required autoFocus></input>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="emailAddress" class="form-control" 
      placeholder = "Email Address" required></input>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
      <div className ="mt-3">
        <button className ="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </div>
      <h3>Already have an account?</h3>
      <Link to="/login" className ="btn btn-default border">Login</Link>
    </div>
  );
}

export default Signup;