const express = require('express');
const bodyParser = require('body-parser');

const { port } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const ConnectToDB = require('./config/db.config');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())

// if any routes start with /api, we map it to api router.
app.use('/api', apiRouter);


app.get('/ping', (req, res) => {
  res.json({ message: 'im working dude!!!' })
})
app.use(errorHandler)

app.listen(port, async () => {
  console.log(`Connected to port ${port}`);
  await ConnectToDB();
});