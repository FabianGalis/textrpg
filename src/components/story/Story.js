import { Client } from 'boardgame.io/react';
import { StoryRules } from './StoryRules';
import { StoryEnvironment } from './StoryEnvironment';
import { SocketIO } from 'boardgame.io/multiplayer'

const Story = Client({
    game: StoryRules,
    board: StoryEnvironment,
    multiplayer: SocketIO({ server: 'localhost:8000' }),
      });

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

export default Stories;