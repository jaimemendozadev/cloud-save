const express = require('express');
const passport = require('../../services/passport');
const Router = express.Router();
const {signup} = require('./controllers');

Router.post('/signup', signup)

Router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

Router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => console.log('successful google auth'))


Router.post('/login', (req, res) => console.log('Login a User'))


module.exports = Router;






