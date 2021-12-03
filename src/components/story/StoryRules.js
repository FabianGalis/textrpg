
export const StoryRules = {
  setup: () => ({ cells: Array(9).fill(null), message: null }),

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  moves: {
    clickCell: (G, ctx, id) => {
      G.cells[id] = ctx.currentPlayer;
    },

    sendMsg: (G, ctx, msg) => {
      G.message = msg;
    }
  },
  endIf: (G, ctx) => {
    //if player life is 0, return a sad ending
    //if storylord decides the story is over, return a happy ending
  },
};