const { Server, Origins } = require('boardgame.io/server');
const { StoryRules } = require('./components/story/StoryRules');

const storyserver = Server({
  games: [StoryRules],
  origins: [Origins.LOCALHOST],
});

storyserver.run(8000);



const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'ayy lmao'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));