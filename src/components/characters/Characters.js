import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import './Characters.css';

export default function Characters() {
  const [characters,setCharacters] = useState([
    {
      name: 'Zephyr',
      backstory: "Beady amber eyes, set lightly within their sockets, watch delightfully over the armies they've protected for so long. A moustache and goatee elegantly compliments his hair and leaves an intriguing memory of his fortunate survival.",
      color: "rgb(168, 73, 92)",
    },
    {
      name: 'Hagwin',
      backstory: "Brown, flowing hair slightly covers a long, radiant face. Smart sapphire eyes, set low within their sockets, watch guardedly over the mountains they've disassociated with for so long. Soft skin seductively compliments his hair and leaves a compelling memory of his luck in battles.",
      color: "rgb(150, 60, 192)"
    },
    {
      name: 'Syldria',
      backstory: "White, shoulder-length hair awkwardly hangs over a lean, lively face. Glistening hazel eyes, set thightly within their sockets, watch delightfully over the city they've loved for so long. Soft skin alluringly compliments her eyes and and leaves an intriguing memory of her past.",
      color: "rgb(66, 92, 50)"
    },
    {
      name: 'Maverick',
      backstory: "Gentle gray eyes, set wickedly within their sockets, watch cheerfully over the mountains they've been isolated from for so long. Scars reaching from just under the right eye , first running towards his fairly big lips and ending under his right eye leaves a bittersweet memory of fortunate adventures.",
      color: "rgb(100,100,100)"
    },
    {
      name: 'Vankyo',
      backstory:"Red, dreadlocks gently hangs over a lean, charming face. Shining green eyes, set wickedly within their sockets, watch warmly over the tribe they've rarely felt at home at for so long. A gunshot left a mark reaching from the bottom of the left cheek , first running towards thin lips and ending on his chin leaves a tormenting burden of his unfortunate past.",
      color: "rgb(168, 173, 92)"
    },
    {
      name: 'Serulian',
      backstory: "Brown, flowing hair slightly covers a long, radiant face. Smart sapphire eyes, set low within their sockets, watch guardedly over the mountains they've disassociated with for so long. Soft skin seductively compliments his hair and leaves a compelling memory of his luck in battles.",
      color: "rgb(150, 60, 192)"
    }
  ]);

  const [name,setName] = useState();
  const [backstory,setBackstory] = useState();
  const [color,setColor] = useState();

  const DisplayChar = ({character}) => {
    return (
      <div class="flip-card" key={character.name}>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div style={{fontFamily:'initials',fontSize:'100px'}}>{character.name.charAt(0).toUpperCase()}</div>
            <div style={{width:'60%', margin:'0 auto', height:'50px', backgroundColor:character.color, borderRadius:'20px'}}>
              <h2>{character.name}</h2>
            </div>
            <br/><br/>
            [Stats here]
          </div>
          <div class="flip-card-back" style={{backgroundColor:character.color}}>
            <h1>{character.name}</h1> 
            <p style={{padding:'30px'}}>{character.backstory}</p>
            <button style={{position:'fixed',left:'50%',bottom:'20px',transform: 'translate(50%, -50%)', margin:'0 auto'}} >Select</button>
  
            <button name={character.name}
            onClick={() => { if (window.confirm('You truly wish to delete this character?')) RemoveChar(character.name) } }
            style={{color:'black', background:'transparent',position:'fixed',left:'50%',bottom:'20px',transform: 'translate(-150%, -50%)', margin:'0 auto'}}>
                Delete
              </button>
          </div>
        </div>
      </div>
    )
  }

  const AddChar = (e) => {
    e.preventDefault();

    const newchar = {name, backstory, color}
    console.log("NEWCHARRRRR: ", newchar);

    //provizoriu pana se adauga DB
    setCharacters(prevState => [...prevState, newchar]);
  };

  const RemoveChar = (charname) => {
    //provizoriu pana se adauga DB
    setCharacters(characters.filter(character => character.name !== charname));
   };

  return(
    <div>
        <Link to="/" style={{borderStyle:'inset',fontSize:30}}>Return</Link>
        <h1 style={{textAlign:'center'}}>Characters</h1>
        <br/>

        <div class='scrollmenu'>
          {characters.map((character, i) => (
          <DisplayChar character={character} />
        ))}
        </div>
        <div className="createchar-wrapper">
          <h1>Create a new character</h1>
          <form onSubmit = {AddChar}>
            <input required id="charname" type="text" placeholder="Name" pattern="[A-Za-z]+" title="Name must be a single word made exclusively of letters." spellcheck="false" autocomplete="off" onChange={(e) => setName(e.target.value)}/><br/>
            <textarea required id="charbackstory" placeholder="Backstory" spellcheck="false" onChange={(e) => setBackstory(e.target.value)}></textarea><br/>
            <input id="charcolor" type="text" onChange={(e) => setColor(e.target.value)}/>
            <button type="submit" >Proceed</button>
          </form>
        </div>

    </div>
    
  );
}