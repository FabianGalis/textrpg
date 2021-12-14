import React from 'react';
import PropTypes from 'prop-types';
import Chat from './Chat';

export class StoryEnvironment extends React.Component {
  static propTypes ={
    sendChatMessage: PropTypes.func,
    chatMessages: PropTypes.array,
  }
  onClick(id) {
    this.props.moves.clickCell(id);
  }

  render() {
    /*let winner = '';
    if (this.props.ctx.gameover) {
      winner =
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {this.props.ctx.gameover.winner} and {}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }
*/
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

    let displayMessages = [];
    for (var message of this.props.G.messages) {
      displayMessages.push(
        <div style={{padding:'20px',}}>
          <div style={{fontFamily:'initials',fontSize:'50px',float:'left'}}>
            {message[0]==="0"?"S":"P"}
          </div>
          <div style={msgStyle}>
            <h2 style={{fontFamily:'fancyshit'}}>{message[0]==="0"?"StoryLord":"PLayerName"}</h2>
            <hr style={{opacity:"20%"}}/>
            {message[1]}
          </div>
        </div>
      );
    }
    
    const eventStyle = {
      borderRadius: '10px',
      boxShadow: '0 0 5px rgba(255, 255, 255, 0.4)',
      display:'inline',
      padding:'10px'
    };

    let displayEvent = [];
    for (message of this.props.G.currentEventProbs) {
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
          onSend={(m)=>this.props.sendChatMessage({message:m})}
          messages={this.props.chatMessages}
        />
        
        

        {displayMessages}
        {displayEvent}

      </div>
    );
  }
}