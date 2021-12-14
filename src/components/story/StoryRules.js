import { INVALID_MOVE } from 'boardgame.io/core';



export const StoryRules = {
  setup: () => ({ messages: Array(),currentEventProbs:Array(),}),

  turn: {
    minMoves: 1,
    maxMoves: 5,
  },

  moves: {
    sendMsg: (G, ctx, msg) => {
      G.messages.push([ctx.currentPlayer,msg]);
      if(ctx.currentPlayer!=="0") ctx.events.endTurn();
    },
    clearMsgs:(G,ctx) => {
      if(ctx.currentPlayer!=="0")return INVALID_MOVE;
      
      G.messages.splice(0,G.messages.length);
    },
    sendEventProbs:(G,ctx,...eventprobs) => {
      if(ctx.currentPlayer!=="0")return INVALID_MOVE;

      for (var eventprob of eventprobs) {
        G.currentEventProbs.push(eventprob);
      }
    },
    clearEventProbs:(G,ctx) => {
      if(ctx.currentPlayer!=="0")return INVALID_MOVE;
      
      G.currentEventProbs.splice(0,G.currentEventProbs.length);
    },
    reactToEvent:(G,ctx,event) => {
      if(ctx.currentPlayer==="0")return INVALID_MOVE;

      if(G.currentEventProbs[event] < Math.floor(Math.random() * 101))G.messages.push([ctx.currentPlayer,"Failed!"]);
      else G.messages.push([ctx.currentPlayer,"Success!"]);
      ctx.events.endTurn();
    },
    endStory:(G,ctx,...winnerIDs) => {
      if(ctx.currentPlayer!=="0")return INVALID_MOVE;

      G.messages.splice(0,G.messages.length);
      var finalmsg="WINNERS: ";
      for (var winner of winnerIDs) {
        finalmsg=finalmsg+winner+" ";
      }
      G.messages.push(finalmsg);
      ctx.events.endGame();


    },
  },
  endIf: (G, ctx) => {
    //if player life is 0, return a sad ending
    //if storylord decides the story is over, return a happy ending
  },
};