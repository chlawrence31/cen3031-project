import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  //const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  //const [errors, setErrors] = useState({})
  const handleInput = (event) => 
  {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  function handleSubmit(event)
  {
    event.preventDefault();
    //setErrors(validation(values))
    axios.post('http://localhost:8000/signup', values).then(navigate('/home'))
  }
  return (
    <div className ="text-center mt-5" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <form action="" onSubmit={handleSubmit}>
      <h1>Please Sign Up</h1>
      <label for="inputUsername" class="sr-only">Username</label>
      <input type="username" id="username" class="form-control" 
      placeholder = "Username" name = 'username' onChange={handleInput} required autoFocus></input>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="emailAddress" class="form-control" 
      placeholder = "Email Address" name = 'email' onChange={handleInput} required></input>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password"
      name = 'password' onChange={handleInput} required></input>
      <div className ="mt-3">
        <button className ="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </div>
      <h3>Already have an account?</h3>
      <Link to="/login" className ="btn btn-default border">Login</Link>
      </form>
    </div>
  );
}

export default Signup;