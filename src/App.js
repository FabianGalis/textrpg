import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useToken from './useToken';

import Dashboard from './components/dashboard/Dashboard';
import BrowseStories from './components/browsestories/BrowseStories';
import Login from './components/login/Login';


function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    
    <div className="wrapper">
      <Helmet>
        <title>Welcome back</title>
      </Helmet>

      <h1>Welcome back</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}>
          </Route>
          <Route exact path='/browsestories' element={<BrowseStories/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;