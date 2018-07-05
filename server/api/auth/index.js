const express = require('express');
const passport = require('../../services/passport');
const Router = express.Router();
const {signup, authWithGoogle} = require('./controllers');

Router.post('/signup', signup)

Router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

Router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), authWithGoogle)

Router.post('/login', (req, res) => console.log('Login a User'))


module.exports = Router;






