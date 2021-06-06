const express = require('express');

const app = express();

const db = [];

app.get('/board-roll', (req, res) => {
  console.log('hiii', req);
  db.push(1);

  res.json({ hii: db, msg: '6' });
});

module.exports = { app };
