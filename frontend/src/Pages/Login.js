import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(event)
  {
    event.preventDefault();
    axios.post('http://localhost:8000/login', {email, password}).then(res => console.log(res))
  }
//   const [values, setValues] = useState({
//     email: '',
//     password: ''
//   })
//   const navigate = useNavigate();
//   const handleInput = (event) => {
//     setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
//   }
//   axios.defaults.withCredentials = true;

//   useEffect(()=>
//   {
//     axios.get('http://localhost:3000').then(res => 
//     {
//       if(res.data.valid)
//       {
//         navigate('/home');
//       }
//       else
//       {
//         navigate('/login')
//       }
//     })
//   })
//   const handleSubmit = (event) => 
//   {
//     event.preventDefault();
//     axios.post('http://localhost:3000/login', values).then(res =>
//     {
//       if(res.data.login)
//       {

//       }
//     })
//   }
  return (
    <div className ="text-center mt-5" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
      <h1>Please Login</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="emailAddress" class="form-control" 
      placeholder = "Email Address" onChange={e=> setEmail(e.target.value)} required autoFocus></input>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" 
      onChange={e=> setPassword(e.target.value)} required></input>
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