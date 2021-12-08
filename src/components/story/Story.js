import React from 'react';
import { Client } from 'boardgame.io/react';
import { StoryRules } from './StoryRules';
import { StoryEnvironment } from './StoryEnvironment';
import { SocketIO } from 'boardgame.io/multiplayer'

import PropTypes from 'prop-types';
import request from 'superagent';

const hostname = window.location.hostname;

const Story = Client({
    game: StoryRules,
    board: StoryEnvironment,
    multiplayer: SocketIO({ server: 'localhost:8000' }),
});

class AuthenticatedClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchID: 'matchID',
      players: {
        0: {
          credentials: 'credentials',
        },
        1: {
          credentials: 'credentials',
        },
      },
    };
  }

  async componentDidMount() {
    const gameName = 'a very uninspired name';
    const PORT = 8000;

    const newGame = await request
      .post(`http://${hostname}:${PORT}/games/${gameName}/create`)
      .send({ numPlayers: 2 });

    const matchID = newGame.body.matchID;

    let playerCredentials = [];

    for (let playerID of [0, 1]) {
      const player = await request
        .post(`http://${hostname}:${PORT}/games/${gameName}/${matchID}/join`)
        .send({
          gameName,
          playerID,
          playerName: playerID.toString(),
        });

      playerCredentials.push(player.body.playerCredentials);
    }

    this.setState({
      matchID,
      players: {
        0: {
          credentials: playerCredentials[0],
        },
        1: {
          credentials: playerCredentials[1],
        },
      },
    });
  }

  onPlayerCredentialsChange(playerID, credentials) {
    this.setState({
      matchID: this.state.matchID,
      players: {
        ...this.state.players,
        [playerID]: {
          credentials,
        },
      },
    });
  }

  render() {
    return (
      <AuthenticatedExample
        matchID={this.state.matchID}
        players={this.state.players}
        onPlayerCredentialsChange={this.onPlayerCredentialsChange.bind(this)}
      />
    );
  }
}

class AuthenticatedExample extends React.Component {
  static propTypes = {
    matchID: PropTypes.string,
    players: PropTypes.any,
    onPlayerCredentialsChange: PropTypes.func,
  };

  render() {
    return (
      <div>
        <h1>Authenticated</h1>

        <p>
          Change the credentials of a player, and you will notice that the
          server no longer accepts moves from that client.
        </p>

        <div className="runner">
          <div className="run">
            <Story
              matchID={this.props.matchID}
              playerID="0"
              credentials={this.props.players['0'].credentials}
            />
            <input
              type="text"
              value={this.props.players['0'].credentials}
              onChange={(event) =>
                this.props.onPlayerCredentialsChange('0', event.target.value)
              }
            />
          </div>
          <div className="run">
            <Story
              matchID={this.props.matchID}
              playerID="1"
              credentials={this.props.players['1'].credentials}
            />
            <input
              type="text"
              value={this.props.players['1'].credentials}
              onChange={(event) =>
                this.props.onPlayerCredentialsChange('1', event.target.value)
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AuthenticatedClient;

      
/*
function Stories() {

    return (
    <div>
        <Story playerID="0" matchID="An interesting story" />
        <br/>
        <br/>
        <hr style={{backgroundColor:'red'}}/>
        SCREEN 2
        <hr style={{backgroundColor:'red'}}/>
        <br/>
        <br/>
        <Story playerID="1" matchID="An interesting story" />
        
    </div>
    )
}

export default Stories;*/