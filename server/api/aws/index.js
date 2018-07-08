const express = require('express');
const Router = express.Router();
const { getSignedUrl, uploadFile } = require('./controllers');


Router.post('/signurl', getSignedUrl);
Router.post('/upload', uploadFile);


module.exports = Router;