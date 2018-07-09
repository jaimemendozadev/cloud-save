const express = require('express');
const passport = require('../../services/passport');
const Router = express.Router();
const { getSignedUrl } = require('./controllers');


Router.post('/signurl', passport.authenticate('jwt', { session: false }), getSignedUrl);


module.exports = Router;