import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Identity from '../../icons/identity.png'
import Keys from '../../icons/keys.png'

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
        <h1 class="glow" style={{fontFamily:'importanttitle', fontWeight:'lighter'}} >Universal text RPG</h1>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <img className="icon" src={Identity} alt=""/>
          <input type="text" placeholder="Name" onChange={e => setUserName(e.target.value)}/><br/>
        </label>
        <label>
          <img className="icon" src={Keys} alt=""/>
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}