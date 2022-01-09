import React, { useState }  from 'react';
import Chat from './Chat';
import Popup from 'reactjs-popup';
import { CSVLink } from 'react-csv';

import './StoryEnvironment.css';

import Corner from '../../icons/corner.png';

export default function StoryEnvironment (props) {

    const [msg,setMsg] = useState();

    const act = (event) => {
      event.preventDefault();
      if(msg){

        //normal sending for every role
        props.moves.sendMsg(msg);

        //ACTIONS FOR STORYLORD
        //chances
        if(msg.search("Your chances are ")!==-1)
          props.moves.sendEventProbs.apply(null,msg.split('Your chances are ')[1].split(".")[0].split(",").map(Number));
        //clear chances
        if(msg.search("Chances were taken\\.")!==-1)props.moves.clearEventProbs();
        //ending turn
        if(msg.search("What will you do\\?")!==-1)props.events.endTurn();
        //ending match
        if(msg.search("Praise ")!==-1)
          props.moves.endStory.apply(null,msg.split('Praise ')[1].split(" for their victory\\!")[0].split(",").map(Number));

        //ACTIONS FOR PLAYERS
        //reacting to events
        if(msg.search("The first\\.")!==-1)props.moves.reactToEvent(0);
        else if (msg.search("The second\\.")!==-1)props.moves.reactToEvent(1);
        else if (msg.search("The third\\.")!==-1)props.moves.reactToEvent(2);
        else if (msg.search("The fourth\\.")!==-1)props.moves.reactToEvent(3);
        else if (msg.search("The fifth\\.")!==-1)props.moves.reactToEvent(4);
        else if (msg.search("The sixth\\.")!==-1)props.moves.reactToEvent(5);

        setMsg('');
        document.getElementById("actform").reset();
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: 'smooth'
        });
      }
    };
    
    const msgStyle = {
      border: 0,
      borderRadius: '10px',
      boxShadow: '0 0 5px rgba(255, 255, 255, 0.4)',
      padding:'10px',
      marginLeft:'5%',
      marginRight:'20%',
      fontFamily:'normalfont',
      fontSize:'20px',
      whiteSpace: "pre-wrap"
    };

    const eventStyle = {
      borderRadius: '10px',
      boxShadow: '0 0 5px rgba(255, 255, 255, 0.4)',
      display:'inline',
      padding:'10px'
    };

    let displayMessages = [];
    for (var message of props.G.messages) {
      displayMessages.push(
        <div style={{padding:'20px',}}>
          <div style={{fontFamily:'initials',fontSize:'50px',float:'left'}}>
            {message[0]==="0"?"S":"P"}
          </div>
          <div style={msgStyle}>
            <h2 style={{fontFamily:'fancyshit'}}>{message[0]==="0"?"StoryLord":"Player "+message[0]}</h2>
            <hr style={{opacity:"20%"}}/>
            {message[1]}
          </div>
        </div>
      );
    }
    
    let displayEvent = [];
    for (message of props.G.currentEventProbs) {
      displayEvent.push(
        <div style={{padding:'20px',display:'inline',marginLeft:'10%'}}>
          <div style={eventStyle}>
            {message}
          </div>
        </div>
        );
        }
    
    
    
    return (
      <div>
        
        <Chat
          onSend={(m)=>props.sendChatMessage({message:m})}
          messages={props.chatMessages}
        />

        {displayMessages}
        {displayEvent.length>0?
          [
            <div style={{fontFamily:'initials',fontSize:'50px',float:'left',padding:'20px'}}>
            E
          </div>
          ]:[]}
          
        <div style={{margin:"3%"}}>{displayEvent}</div>
        {
          props.ctx.gameover?[
            <div style={{fontSize:30,textAlign:"right", width: "73.3%", marginLeft: "6%", height: "17%", position: 'fixed', bottom: 0 }}>
                <h1>The end.</h1>
            </div>
          ]:[
            <div>
            <hr style={{ opacity: "20%", marginBottom: "10%", width: "80%" }} />
              <form onSubmit={act} id="actform">
                <textarea style={{ maxWidth: "100%", resize: "none", width: "73.3%", marginLeft: "6%", height: "17%", position: 'fixed', bottom: 0 }}
                  type="text"
                  placeholder={
                    props.ctx.currentPlayer === "0" ?
                    "StoryLord's turn" :
                    "Player " + props.ctx.currentPlayer + "'s turn"
                  }
                  spellCheck="false" maxLength="500" autoComplete="off"
                  onChange={(e) => setMsg(e.target.value)}
                  />
                <button style={{ width: "5%", height: "17%", position: 'fixed', bottom: 0 }} type="submit">Act</button>
              </form>

            <Popup trigger={<button style={{ boxShadow: 'none', position: 'fixed', bottom: 0, right: 0 }}>?</button>} modal>
                <div className="helpmenu" style={{ textAlign: 'center', fontFamily: "normalfont", backgroundColor: "black", fontSize: 30, borderRadius: 10, boxShadow: "0 0 15px rgba(255, 255, 255, 0.4)", padding: 20 }}>
                  <h2>Key phrases as StoryLord:</h2>
                  <div><span><i>"What will you do?" </i></span> <span>Let players act.</span></div><br />
                  <div><span><i>"Your chances are 20,30,"..."50." </i></span> <span> Launch an event.<br /> No more than 6 </span></div><br />
                  <div><span><i>"Chances were taken."</i></span> <span>Discard a launched event.</span></div><br />
                  <div><span><i>"Praise 1,2".."4 for their victory!"</i></span> <span>Announces winners.</span></div><br />
                  <h2>as Player:</h2>
                  <div><span><i>"The first." to "The sixth."</i></span> <span>Select an event probability.</span></div>
                  <CSVLink style={{bottom: 0}} data={props.G.messages} filename="MessageHistory"><button>Export message history</button></CSVLink>
                </div>
              </Popup>
              
              </div>
          ]
        }

        <img style={{ position: 'fixed', bottom: 0, right: 0, width: "18%",zIndex:-1 }} src={Corner} alt="" />
      </div>
    );
}