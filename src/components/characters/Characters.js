import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './Characters.css';

export default function Characters({idplayer,setCurrentchar}) {

  const [characters,setCharacters] = useState();

  const [name,setName] = useState();
  const [backstory,setBackstory] = useState();
  const [color,setColor] = useState("rgb(255, 255, 255)");

  useEffect(() => {
    Axios.post('http://localhost:3001/getchars',{
      idplayer:idplayer
    }).then((response)=> {
      setCharacters(response.data);
    });
  }, [idplayer]);

  const addchar = () => {
    Axios.post('http://localhost:3001/addchar',{
      idplayer: idplayer,
      name:name,
      backstory:backstory,
      color:color
    }).then((response)=> {
      //if (response.data.message) setCONFIRMATIONorSMTH(response.data.message);
    });
  }

  const delchar = (idcharacter) => {
    //for not having a deleted character selected (NOT FINAL SOLUTION)
    setCurrentchar(null);

    Axios.post('http://localhost:3001/delchar',{
      idplayer: idplayer,
      idcharacter: idcharacter
    }).then((response)=> {
      //IMPORTANT cuz refreshes window after char is deleted
      window.location.reload();
      //if (response.data.message) setCONFIRMATIONorSMTH(response.data.message);
    });
  }

  const DisplayChar = ({character}) => {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div style={{fontFamily:'initials',fontSize:'100px'}}>{character.name.charAt(0).toUpperCase()}</div>
            <div style={{display: 'inline-block',minWidth:"60%", margin:'0 auto', height:'50px', backgroundColor:character.color, borderRadius:'20px'}}>
              <h2>{character.name}</h2>
            </div>
            <br/><br/>
            [Stats here]
          </div>
          <div className="flip-card-back" style={{backgroundColor:character.color}}>
            <h1>{character.name}</h1> 
            <p style={{padding:'30px'}}>{character.backstory}</p>
            <Link to="/">
            <button style={{position:'fixed',left:'50%',bottom:'20px',transform: 'translate(50%, -50%)', margin:'0 auto'}} onClick={() => setCurrentchar(character)}>Select</button>
            </Link>
            <button name={character.name}
            onClick={() => { if (window.confirm('You truly wish to delete this character?')) delchar(character.idcharacter) } }
            style={{color:'black', background:'transparent',position:'fixed',left:'50%',bottom:'20px',transform: 'translate(-150%, -50%)', margin:'0 auto'}}>
                Delete
              </button>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div>
        <h1 style={{textAlign:'center'}}>Characters</h1>
        <br/>

        {/*hard to understand code below..
        if chars are rendered, then iterate. else, no iteration through smth null, cuz error*/}
        {characters?[
        <div className='scrollmenu'>
          {characters.map((character, i) => (
          <DisplayChar key={character.idcharacter} character={character} />
        ))}
        </div>]:[]
          }
        <div className="createchar-wrapper">
          <h1>Create a new character</h1>
          <form onSubmit = {addchar}>
            <input required type="text" placeholder="Name" pattern="[A-Za-z]+" title="Name must be a single word made exclusively of letters." spellCheck="false" maxLength="21" autoComplete="off" onChange={(e) => setName(e.target.value)}/><br/>
            <textarea required placeholder="Backstory" spellCheck="false" maxLength="300" onChange={(e) => setBackstory(e.target.value)}></textarea><br/>
            
            <select required placeholder="Color" onChange={(e) => setColor(e.target.value)}>
              <option value="rgb(255, 255, 255)" style={{backgroundColor:'rgb(255, 255, 255)',color:'black'}}>Default color</option>
              <option value="rgb(126, 126, 126)" style={{backgroundColor:'rgb(126, 126, 126)',color:'rgb(126, 126, 126)'}}>Grey</option>
              <option value="rgb(121, 95, 62)"   style={{backgroundColor:'rgb(121, 95, 62)',  color:'rgb(121, 95, 62)'}}>  Brown</option>
              <option value="rgb(185, 72, 72)"   style={{backgroundColor:'rgb(185, 72, 72)',  color:'rgb(185, 72, 72)'}}>  Red</option>
              <option value="rgb(173, 119, 47)"  style={{backgroundColor:'rgb(173, 119, 47)', color:'rgb(173, 119, 47)'}}> Orange</option>
              <option value="rgb(168, 173, 92)"  style={{backgroundColor:'rgb(168, 173, 92)', color:'rgb(168, 173, 92)'}}> Yellow</option>
              <option value="rgb(90, 119, 71)"   style={{backgroundColor:'rgb(90, 119, 71)',  color:'rgb(90, 119, 71)'}}>  Green</option>
              <option value="rgb(78, 135, 168)"  style={{backgroundColor:'rgb(78, 135, 168)', color:'rgb(78, 135, 168)'}}> Blue</option>
              <option value="rgb(165, 90, 199)"  style={{backgroundColor:'rgb(165, 90, 199)', color:'rgb(165, 90, 199)'}}> Violet</option>
            </select>

            <button type="submit" >Proceed</button>
          </form>
        </div>

    </div>

  );
}