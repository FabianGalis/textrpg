import { Client } from 'boardgame.io/react';
import { StoryRules } from './StoryRules';
import  StoryEnvironment  from './StoryEnvironment';
import { SocketIO } from 'boardgame.io/multiplayer'

export default function Stories(props) {
    const Story = Client({
        game: StoryRules,
        board: StoryEnvironment,
        numPlayers:3,//modify later to the StoryLord's will
        multiplayer: SocketIO({ server: 'localhost:8000' }),
        debug: true,//set this to false in final product
          });
          
    return (
    <div>
        <Story playerID={(props.playerdata.idplayer-1).toString()/*temporary props*/}
        matchID="An interesting story"
        playerdata={props.playerdata}
        currentchar={props.currentchar}/>
    </div>
    )
}