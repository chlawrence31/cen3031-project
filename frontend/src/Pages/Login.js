import React from 'react';

function Login() {
  return (
    <div className ="text-center mt-5" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>Please Login</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="emailAddress" class="form-control" 
      placeholder = "Email Address" required autoFocus></input>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
      <div className ="mt-3">
        <button className ="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </div>
    </div>
  );
}

export default Login;