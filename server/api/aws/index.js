const express = require('express');
const Router = express.Router();
const { getSignedUrl } = require('./controllers');

Router.post('/upload', getSignedUrl);


module.exports = Router;