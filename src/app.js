const express = require('express');
const mongoose = require('mongoose');
const glob = require('glob'); 
const logger = require('./config/logger')
const passport = require('./config/passport')
const dotenv = require('dotenv');
const auth = require('./services/auth/auth');

// Load env variables from .env file
dotenv.config();

// Create app
const app = express()
const port = 5000

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/yait', {useNewUrlParser: true, useUnifiedTopology: true});

// Setup body parsers
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Setup passport.js
app.use(passport.initialize());

// Load all routes
glob.sync( __dirname + '/routes/*.js').forEach(file => {
  const {router, path} = require(file);
  logger.info(`Adding routes from "${file}" to path /api/${path}`)
  app.use(`/api/${path}`, router);
});

app.get('/', auth.required, (req, res) => {
  // console.log(req.ip);
  // console.log(req.get('User-Agent'));
  // console.log(req.headers)
  res.send("Hello World!")
})

app.get('/api/ping', (req, res) => {
  res.send('pong');
})

// Start app listening to connections
app.listen(port, () => {
  logger.info(`YAIT server is listening at http://localhost:${port}`)
})