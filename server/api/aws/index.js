const express = require('express');
const Router = express.Router();
const { upload } = require('./controllers');

Router.post('/upload', upload);


module.exports = Router;