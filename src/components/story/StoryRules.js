import { INVALID_MOVE } from 'boardgame.io/core';

export const StoryRules = {
  setup: () => ({ messages: [], currentEventProbs:[]}),

  turn: {
    minMoves: 1
  },

  moves: {
    sendMsg: (G, ctx, msg) => {
      G.messages.push([ctx.currentPlayer,msg]);
      if(ctx.currentPlayer!=="0"){
        if(G.currentEventProbs.length!==0)return INVALID_MOVE;
        ctx.events.endTurn();
      }
    },
    clearMsgs:(G,ctx) => {
      if(ctx.currentPlayer!=="0")return INVALID_MOVE;
      
      G.messages.splice(0,G.messages.length);
    },
    sendEventProbs:(G,ctx,...eventprobs) => {
      if(ctx.currentPlayer!=="0"||eventprobs.length>6)return INVALID_MOVE;
      
      for (var eventprob of eventprobs) {
        G.currentEventProbs.push(eventprob);
      }
      ctx.events.endTurn();
    },
    clearEventProbs:(G,ctx) => {
      if(ctx.currentPlayer!=="0")return INVALID_MOVE;
      
      G.currentEventProbs.splice(0,G.currentEventProbs.length);
    },
    reactToEvent:(G,ctx,event) => {
      if(ctx.currentPlayer==="0")return INVALID_MOVE;
      var msg="I chose the ";
      switch(event) {
        case 0: msg=msg+"fisrt";break;
        case 1: msg=msg+"second";break;
        case 2: msg=msg+"third";break;
        case 3: msg=msg+"fourth";break;
        case 4: msg=msg+"fifth";break;
        case 5: msg=msg+"sixth";break;
        default:break;
      }
      msg=msg+" option,";
      if(G.currentEventProbs[event] < Math.floor(Math.random() * 101))msg=msg+" but I failed.";
      else msg=msg+" and I succeeded!";
      G.messages.push([ctx.currentPlayer,msg]);
      ctx.events.endTurn();
    },
    endStory:(G,ctx,...winnerIDs) => {
      if(ctx.currentPlayer!=="0")return INVALID_MOVE;

      //G.messages.splice(0,G.messages.length);
      var finalmsg="(The story ended, with  ";
      for (var winner of winnerIDs) {
        finalmsg=finalmsg+winner+"  ";
      }
      finalmsg=finalmsg+"winning the match)";
      //G.messages.push([ctx.currentPlayer,finalmsg]);
      ctx.events.endGame();


    },
  },
  endIf: (G, ctx) => {
    //if player life is 0, return a sad ending
    //if storylord decides the story is over, return a happy ending
  },
};