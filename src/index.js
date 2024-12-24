const express = require('express');
const bodyParser = require('body-parser');

const { port } = require('./config/server.config');
const apiRouter = require('./routes');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())

app.use('/api', apiRouter);


app.get('/ping', (req, res) => {
  res.json({message: 'im working dude!!!'})
})

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});