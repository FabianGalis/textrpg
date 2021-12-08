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
    <div>
      <div
        style={{
            fontFamily:'normalfont',
            fontSize:20,
            height: 200,
            maxWidth:'30%',
            padding: '.5em',
            overflow: 'scroll',

            border: 0,
            borderRadius: '10px',
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.4)'
        }}
      >
        {messages.map((message) => (
          <div key={message.id} style={{ marginBottom: '.25em' }}>
            <strong>Player {message.sender} ({message.payload.playername}):</strong> {message.payload.message} 
          </div>
        ))}
      </div>
      <form onSubmit={triggerSend}>
        <input onChange={onChange} style={{width:'30%'}} value={message} placeholder="Write to chat" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;