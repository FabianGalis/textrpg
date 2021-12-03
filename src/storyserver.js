const { Server, Origins } = require('boardgame.io/server');
const { StoryRules } = require('./components/story/StoryRules');

const storyserver = Server({
  games: [StoryRules],
  origins: [Origins.LOCALHOST],
});

storyserver.run(8000);