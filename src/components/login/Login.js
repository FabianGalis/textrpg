import React, { useState } from 'react';
import Axios from 'axios';

import './Login.css';

import Identity from '../../icons/identity.png';
import Keys from '../../icons/keys.png';
import Line from '../../icons/line.png';


export default function Login({ setPlayerdata }) {

  const [usernameReg,setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //for error message, in case login fails
  const [authMsg,setAuthMsg] = useState('');

  const register = () => {
    Axios.post('http://localhost:3001/register',{
      /*capitalization for good looks*/
      username: usernameReg[0].toUpperCase() + usernameReg.slice(1),
      password: passwordReg
    }).then((response)=> {
      if (response.data.message) setAuthMsg(response.data.message);
    });
  }

  const login = () => {
    Axios.post('http://localhost:3001/login',{
      username: username,
      password: password
    }).then((response)=> {
      if (response.data.message) setAuthMsg(response.data.message);
      else setPlayerdata(response.data[0]);
    });
  }

  return(
    <div className="login-wrapper">

      <h1 className="glow" style={{fontFamily:'importanttitle', fontWeight:'lighter'}} >Universal text RPG</h1>

      <h1>Please Log In</h1>

        <table>
        <tbody>
          <tr> 
              <td><img className="icon" src={Identity} alt=""/></td>
              <td><input className="login-input" type="text" placeholder="Name"  onChange={(e) => {setUsername(e.target.value)}}/></td>
          </tr>
          <tr> 
              <td><img className="icon" style={{padding:10}} src={Keys} alt=""/></td>
              <td><input className="login-input" type="password" placeholder="Password"  onChange={(e) => {setPassword(e.target.value)}}/></td>
          </tr>
        </tbody>
        </table>
        <div>
          <button className="login-button" onClick={login}>Proceed</button> 
        </div>

      <h1>{authMsg}</h1>

      <img style={{paddingTop:50,paddingBottom:100, width:500 }} src={Line} alt=""/>
      <h1>Alternatively... Register</h1>
      
      <input className="login-input" type="text" placeholder="Name" onChange={(e) => {setUsernameReg(e.target.value)}}/>

      <input className="login-input" type="password" placeholder="Password" onChange={(e) => {setPasswordReg(e.target.value)}}/>

      <input className="login-input" type="password" placeholder="Confirm password"/>

      <button className="login-button" onClick={register}>Register</button> 
      

    </div>
  )
}
