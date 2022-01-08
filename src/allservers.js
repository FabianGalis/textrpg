//DB SERVER
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"password",
  database:"textrpgdb",
});

//data in players table
app.post('/register',(req,res)=>{
  const username=req.body.username;
  const password=req.body.password;
  db.query("INSERT INTO players (username,password,exp) VALUES (?,?,0);",
  [username,password],
  (err,result) => {
    if (err) res.send({err: err});
    else res.send({message: "Registered. You may sign in now."});
  });
});

app.post('/login',(req,res)=>{
  const username=req.body.username;
  const password=req.body.password;
  db.query("SELECT idplayer,username,exp FROM players WHERE username = ? AND password = ?",
  [username,password],
  (err,result) => {
    if (err) res.send({err: err});
    else if (result.length>0) res.send(result);
    else res.send({message: "You are mistaken. Take another stab."});
  });
});

//data in characters table
app.post('/addchar',(req,res)=>{
  const idplayer=req.body.idplayer;
  const name=req.body.name;
  const backstory=req.body.backstory;
  const color=req.body.color;
  db.query("INSERT INTO characters (owner,name,backstory,color) VALUES (?,?,?,?);",
  [idplayer,name,backstory,color],
  (err,result) => {
    if (err) res.send({err: err});
    else res.send({message: "Character created successfully."});
  });
});

app.post('/delchar',(req,res)=>{
  const idplayer=req.body.idplayer;
  const idcharacter=req.body.idcharacter;
  db.query("DELETE FROM characters WHERE owner = ? AND idcharacter = ?;",
  [idplayer,idcharacter],
  (err,result) => {
    if (err) res.send({err: err});
    else res.send({message: "Character deleted."});
  });
});

app.post('/getchars',(req,res)=>{
  const idplayer=req.body.idplayer;
  db.query("SELECT idcharacter,name,backstory,color FROM characters WHERE owner = ?",
  [idplayer],
  (err,result) => {
    if (err) res.send({err: err});
    else res.send(result);
  });
});

app.listen(3001, () => console.log('DATABASE is running on 3001'));


//IN-GAME STORY SERVER
const { Server, Origins } = require('boardgame.io/server');
const { StoryRules } = require('./components/story/StoryRules');

const storyserver = Server({
  games: [StoryRules],
  origins: [Origins.LOCALHOST],
});


storyserver.run(8000);