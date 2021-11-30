import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import './Login.css';
import Identity from '../../icons/identity.png'
import Keys from '../../icons/keys.png'
import Line from '../../icons/line.png'

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
      <Helmet>
        <title>UniTextRPG</title>
      </Helmet>
      <h1 class="glow" style={{fontFamily:'importanttitle', fontWeight:'lighter'}} >Universal text RPG</h1>

      <h1>Please Log In</h1>

      <form onSubmit={handleSubmit}>
        <table>
          <tr> 
              <td><img className="icon" src={Identity} alt=""/></td>
              <td><input className="login-input" type="text" placeholder="Name" onChange={e => setUserName(e.target.value)}/></td>
          </tr>
          <tr> 
              <td><img className="icon" style={{padding:10}} src={Keys} alt=""/></td>
              <td><input className="login-input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/></td>
          </tr>
        </table>

        <div>
          <button className="login-button" type="submit">Proceed</button> 
        </div>
      </form>
      <img style={{paddingTop:100, width:500 }} src={Line} alt=""/>

    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
