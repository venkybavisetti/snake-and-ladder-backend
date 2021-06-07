const express = require('express');
const morgan = require('morgan');
const session = require('cookie-session');
const {
  createRoom,
  getRoomId,
  getPlayerColors,
  joinRoom,
  join,
  boardData,
  start,
  dice,
} = require('./handlers');

const app = express();

app.locals.db = [];

app.set('sessionMiddleware', session({ secret: 'snakeAndLader' }));

app.use(morgan('dev'));
app.use(express.json());
app.use((...args) => app.get('sessionMiddleware')(...args));
app.use(express.static('build'));

app.get('/api/roomId', getRoomId);
app.get('/api/playerColors', getPlayerColors);
app.get('/api/boardData', boardData);

app.post('/api/createRoom', createRoom);
app.post('/api/joinRoom', joinRoom);
app.post('/api/join', join);
app.post('/api/start', start);
app.post('/api/dice', dice);

module.exports = { app };
