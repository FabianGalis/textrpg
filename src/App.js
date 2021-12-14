import React,{ useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useToken from './useToken';

import Login from './components/login/Login';
import PlayerProfile from './components/playerprofile/PlayerProfile';
import Characters from './components/characters/Characters';
import BrowseStories from './components/browsestories/BrowseStories';
import Story from './components/story/Story';


function App() {

  const { token, setToken } = useToken();

  //universal playerdata for the whole session, boiiii!
  const [playerdata,setPlayerdata] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8070/player')
    .then( res => {
      return res.json();
    })
    .then( data => {
      setPlayerdata(data[1]);//CHANGE DATA HERE AFTER LOGIN IS IMPLEMENTED
    });
  },[]);

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    
    <div className="wrapper">
      <Helmet>
        <title>UniTextRPG</title>
      </Helmet>
      
      <h1>UniversalTextRpg</h1>
      <hr style={{opacity:"20%"}}/>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PlayerProfile playername={playerdata["username"]}/>}>
          </Route>
          <Route exact path='/browsestories' element={<BrowseStories/>}>
          </Route>
          <Route exact path='/characters' element={<Characters characters={playerdata["characters"]}/>}>
          </Route>
          <Route exact path='/storytest' element={<Story/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;