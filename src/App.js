import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useToken from './useToken';

import Login from './components/login/Login';
import PlayerProfile from './components/playerprofile/PlayerProfile';
import Characters from './components/characters/Characters';
import BrowseStories from './components/browsestories/BrowseStories';



function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    
    <div className="wrapper">
      <Helmet>
        <title>UniTextRPG</title>
      </Helmet>

      <h1>UniversalTextRpg</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PlayerProfile/>}>
          </Route>
          <Route exact path='/browsestories' element={<BrowseStories/>}>
          </Route>
          <Route exact path='/characters' element={<Characters/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;