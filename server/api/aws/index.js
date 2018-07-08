const express = require('express');
const passport = require('../../services/passport');
const Router = express.Router();
const { getSignedUrl, uploadFile } = require('./controllers');


Router.post('/signurl', passport.authenticate('jwt', { session: false }), getSignedUrl);
Router.post('/upload', uploadFile);


module.exports = Router;