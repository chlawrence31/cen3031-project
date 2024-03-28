import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  //const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  //const [errors, setErrors] = useState({})
  const navigate = useNavigate();
  const handleInput = (event) => 
  {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  function handleSubmit(event)
  {
    event.preventDefault();
    //setErrors(validation(values))
    axios.post('http://localhost:8000/login', values).then(res => 
    {
      if(res.result === "Success")
      {
        navigate('/home')
      }
      else
      {
        alert("No account listed")
      }
    })
  }
  return (
    <div className ="text-center mt-5" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
      <h1>Please Login</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="emailAddress" class="form-control" 
      placeholder = "Email Address" name = 'email' onChange={handleInput} required autoFocus></input>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" 
      name = 'password' onChange={handleInput} required></input>
      <div className ="mt-3">
        <button className ="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </div>
      <h3>Don't have an account?</h3>
      <Link to="/signup" className ="btn btn-default border">Create Account</Link>
      </form> 
    </div>
  );
}

export default Login;