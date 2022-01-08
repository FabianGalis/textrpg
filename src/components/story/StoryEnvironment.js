import React from 'react';
import Chat from './Chat';

export default function StoryEnvironment (props) {

    const msgStyle = {
      border: 0,
      borderRadius: '10px',
      boxShadow: '0 0 5px rgba(255, 255, 255, 0.4)',
      padding:'10px',
      marginLeft:'60px',
      marginRight:'40%',
      fontFamily:'normalfont',
      fontSize:'18px'
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
        <div style={{padding:'20px',display:'inline',marginLeft:'100px'}}>
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
        {displayEvent}

      </div>
    );
  
}