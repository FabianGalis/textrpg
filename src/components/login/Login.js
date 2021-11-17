import React from 'react';
import './Login.css';

export default function Login() {
  return(
    <div className="login-wrapper">
        <h1 >Universal text RPG</h1>
      <h2>Please Log In</h2>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      
    </div>
  )
}