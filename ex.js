const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/DEMO2.1.html');
});


app.get('/page2', (req, res) => {
  res.send('This page 2');
});


app.listen(3111, () => {
  console.log('The server is started, access http://localhost:3111');
});
