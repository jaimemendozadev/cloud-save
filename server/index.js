require('./services/DB');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const passport = require('./services/passport');
const publicPath = path.resolve(__dirname, '../public');
const indexHTML = path.resolve(__dirname, '../public/index.html');
const bodyParser = require('body-parser');
const mainRouter = require('./api');;

app.use(cors());
app.use(passport.initialize());
app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', mainRouter);
app.get('*', (_req, res) => res.sendFile(indexHTML));

module.exports = app;
