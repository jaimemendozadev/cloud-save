const express = require('express');
const passport = require('../../services/passport');
const Router = express.Router();
const { getUserDrive } = require('./controllers');


Router.get('/drive', passport.authenticate('jwt', { session: false }), getUserDrive);

module.exports = Router;