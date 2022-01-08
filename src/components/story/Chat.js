import React, { useState } from 'react';

const Chat = ({ onSend, messages }) => {
  const [message, setMessage] = useState('');

  const onChange = (event) => {
    setMessage(event.target.value);
  };

  const triggerSend = (event) => {
    event.preventDefault();
    onSend(message);
    setMessage('');
  };

  return (
    <div style={{marginLeft:"80%",position: 'fixed'}/*CHANGE TO FIXED FOR FINAL VERSION*/ }>
      <h2>Chat</h2>
      <div
        style={{
            fontFamily:'normalfont',
            fontSize:20,
            height: 200,
            
            padding: '.5em',
            overflowY: 'scroll',
            overflowWrap:'break-word',
            
            border: 0,
            borderRadius: '10px',
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.4)'
        }}
      >
        {messages.map((message) => (
          <div key={message.id} style={{ marginBottom: '.25em' }}>
            <strong>Player {message.sender}:</strong><br/>
            {message.payload.message}
            <hr style={{opacity:'30%'}}/>
          </div>
        ))}
      </div>
      <form onSubmit={triggerSend}>
        <input onChange={onChange} style={{borderTopRightRadius:0,borderBottomRightRadius:0,width:"80%"}} value={message} placeholder="Write to chat" />
        <button type="submit" style={{borderTopLeftRadius:0,borderBottomLeftRadius:0}}>Send</button>
      </form>
    </div>
  );
};

export default Chat;