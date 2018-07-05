require('./services/DB');
const express = require('express');
const mainRouter = require('./api')
const app = express();
const path = require('path');
const passport = require('./services/passport')
const publicPath = path.resolve(__dirname, '../public');
const bodyParser = require('body-parser');

app.use(passport.initialize());
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', mainRouter)
app.use('*', (req, res) => {
  res.sendFile(publicPath);
});

module.exports = app;
