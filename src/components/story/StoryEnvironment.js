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
    let winner = '';
    if (this.props.ctx.gameover) {
      winner =
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {this.props.ctx.gameover.winner} and {}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }

    const cellStyle = {
      border: '1px solid #555',
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      textAlign: 'center',
    };

    let tbody = [];
    for (let i = 0; i < 3; i++) {
      let cells = [];
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        cells.push(
          <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
            {this.props.G.cells[id]}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <div>
        {/*
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
        Next Message TEST: {this.props.G.message}

        {winner}

        */}

        <h1>Chat test</h1>

        <Chat
            onSend={this.props.sendChatMessage}
            messages={this.props.chatMessages}
          />

      </div>
    );
  }
}