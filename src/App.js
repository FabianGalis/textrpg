import React,{useEffect} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import MakePersistentPls from './makePersistentPls';

import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import PlayerProfile from './components/playerprofile/PlayerProfile';
import Characters from './components/characters/Characters';
import BrowseStories from './components/browsestories/BrowseStories';
import Story from './components/story/Story';


export default function App() {

  //universal data for the whole app
  const [playerdata,setPlayerdata] = MakePersistentPls(null,"playerdata");
  const [currentchar,setCurrentchar] = MakePersistentPls(null,"currentchar");

  useEffect(() => {
    document.title = "UniTextRPG"
 });

  if (!playerdata) return <Login setPlayerdata={setPlayerdata} />

  return (
    
    <div>
      <BrowserRouter>

        <Navbar
          setPlayerdata={setPlayerdata/*FOR LOGGING OUT*/}
          setCurrentchar={setCurrentchar/*FOR LOGGING OUT*/}
          currentchar={currentchar/*FOR DISPLAYING CHAR NAME ON TOP*/}
        />

        <Routes>
          <Route exact path='/' element={<PlayerProfile playername={playerdata.username} currentchar={currentchar}/>}>
          </Route>
          <Route exact path='/browsestories' element={<BrowseStories/>}>
          </Route>
          <Route exact path='/characters' element={<Characters idplayer={playerdata.idplayer} setCurrentchar={setCurrentchar}/>}>
          </Route>
          <Route exact path='/storytest' element={<Story playerdata={playerdata} currentchar={currentchar}/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}