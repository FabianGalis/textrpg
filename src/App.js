import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useToken from './useToken';

import Dashboard from './components/dashboard/Dashboard';
import Preferences from './components/preferences/Preferences';
import Login from './components/login/Login';


function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
         <Route exact path='/' element={<Dashboard/>}>
          </Route>
          <Route exact path='/' element={<Preferences/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;